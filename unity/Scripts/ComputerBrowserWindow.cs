// Opens the simulated computer in a real browser window (Edge/Chrome app mode),
// pinned over the game view, so a screen reader can read it.
//
// Why a real window: browsers that draw into a Unity texture (UnityWebBrowser,
// unity-webview, Vuplex on Windows) expose no accessible tree, so NVDA says
// nothing. A real window is readable — see docs/webview-evaluation.md.
//
// Put this on any object, give it the page name, and call Open()/Close() from
// the interaction that seats the player at the computer. Open brings the browser
// forward; closing the window returns focus to Unity.
//
// Windows only. On other platforms it logs a warning and does nothing.

using System;
using System.Collections;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using UnityEngine;
using Debug = UnityEngine.Debug;

namespace Safehouse.Spike
{
    public sealed class ComputerBrowserWindow : MonoBehaviour
    {
        [Header("Page")]
        [Tooltip("File inside Assets/StreamingAssets/.")]
        [SerializeField] private string pageFileName = "standalone.html";

        [Tooltip("Open immediately when Play starts, for testing.")]
        [SerializeField] private bool openOnStart = true;

        [Header("Window")]
        [Tooltip("Inset the window inside the game window, as a fraction (0 = fill it exactly).")]
        [Range(0f, 0.25f)]
        [SerializeField] private float insetPercent = 0.02f;

        [Tooltip("Give the browser its own profile so flags apply and no bookmarks or extensions appear.")]
        [SerializeField] private bool useIsolatedProfile = true;

        [Tooltip("Bring the browser to the front after opening.")]
        [SerializeField] private bool focusOnOpen = true;

        [Tooltip("Part of the browser window's title, used to find the window when an existing browser " +
                 "instance takes the page instead of the process we started.")]
        [SerializeField] private string windowTitleFragment = "Safehouse";

        /// <summary>Raised when the browser window closes, whether by us or by the player.</summary>
        public event Action Closed;

        public bool IsOpen => browserProcess != null && !browserProcess.HasExited;

        private Process browserProcess;
        private string openedPage;

        // A browser process can outlive its window — other windows in the same
        // profile, a task manager, or Edge keeping itself resident. Watching the
        // process alone leaves the game believing the page is still open, so the
        // window is what gets watched.
        private float openedAt;
        private float nextWindowCheck;
        private int missingWindowChecks;

        private void Start()
        {
            if (openOnStart)
                Open();
        }

        private void Update()
        {
            if (browserProcess == null)
                return;

            if (browserProcess.HasExited)
            {
                NotifyClosed();
                return;
            }

            if (Time.realtimeSinceStartup < nextWindowCheck)
                return;

            nextWindowCheck = Time.realtimeSinceStartup + 0.5f;

            // Give a fresh window time to exist before trusting its absence.
            if (Time.realtimeSinceStartup - openedAt < 2f)
                return;

            if (FindWindowByTitle(windowTitleFragment) != IntPtr.Zero)
            {
                missingWindowChecks = 0;
                return;
            }

            missingWindowChecks++;
            if (missingWindowChecks >= 2)
                NotifyClosed();
        }

        private void NotifyClosed()
        {
            browserProcess = null;
            openedPage = null;
            missingWindowChecks = 0;
            Debug.Log("[ComputerBrowserWindow] Browser window closed.");
            Closed?.Invoke();
        }

        /// <summary>Opens the page configured on this component.</summary>
        public void Open()
        {
            Open(pageFileName);
        }

        /// <summary>
        /// Opens a specific page. A plain file name is resolved inside
        /// StreamingAssets; a string containing "://" is used as a URL as-is.
        /// </summary>
        public void Open(string page)
        {
            if (!Application.isEditor && Application.platform != RuntimePlatform.WindowsPlayer)
            {
                Debug.LogWarning("[ComputerBrowserWindow] Windows only for now; no window opened.");
                return;
            }

            if (string.IsNullOrWhiteSpace(page))
                page = pageFileName;

            if (IsOpen)
            {
                if (openedPage == page)
                {
                    BringToFront();
                    return;
                }

                Close();
            }

            string executable = FindBrowser();
            if (executable == null)
            {
                Debug.LogError(
                    "[ComputerBrowserWindow] No Edge or Chrome found. Install Microsoft Edge, " +
                    "then press Play again.");
                return;
            }

            bool isUrl = page.Contains("://");
            string pagePath = isUrl ? page : Path.Combine(Application.streamingAssetsPath, page);

            if (!isUrl && !File.Exists(pagePath))
                Debug.LogError($"[ComputerBrowserWindow] Missing page: {pagePath} — copy prototype/standalone.html into Assets/StreamingAssets/.");

            string url = isUrl ? page : new Uri(pagePath).AbsoluteUri;
            WinRect bounds = GameWindowBounds();

            string arguments =
                $"--app=\"{url}\" --window-size={bounds.Width},{bounds.Height} " +
                $"--window-position={bounds.X},{bounds.Y} --no-first-run --disable-features=Translate";

            if (useIsolatedProfile)
            {
                string profile = Path.Combine(Path.GetTempPath(), "safehouse-browser-profile");
                arguments += $" --user-data-dir=\"{profile}\"";
            }

            try
            {
                browserProcess = Process.Start(new ProcessStartInfo(executable, arguments)
                {
                    UseShellExecute = false,
                    CreateNoWindow = true,
                });
            }
            catch (Exception exception)
            {
                Debug.LogError($"[ComputerBrowserWindow] Could not start the browser: {exception.Message}");
                browserProcess = null;
                return;
            }

            if (browserProcess == null)
            {
                Debug.LogError("[ComputerBrowserWindow] The browser process did not start.");
                return;
            }

            openedPage = page;
            openedAt = Time.realtimeSinceStartup;
            nextWindowCheck = 0f;
            missingWindowChecks = 0;
            Debug.Log($"[ComputerBrowserWindow] Opened {url}");
            StartCoroutine(PositionWhenReady(browserProcess, bounds));
        }

        /// <summary>Closes the browser window and returns focus to the game.</summary>
        public void Close()
        {
            if (browserProcess == null)
                return;

            try
            {
                if (!browserProcess.HasExited)
                {
                    browserProcess.CloseMainWindow();
                    if (!browserProcess.WaitForExit(2000))
                        browserProcess.Kill();
                }
            }
            catch (Exception exception)
            {
                Debug.LogWarning($"[ComputerBrowserWindow] Closing the browser failed: {exception.Message}");
            }
            finally
            {
                browserProcess = null;
                openedPage = null;
                missingWindowChecks = 0;
                FocusGameWindow();
            }
        }

        public void Toggle()
        {
            if (IsOpen) Close();
            else Open();
        }

        private IEnumerator PositionWhenReady(Process process, WinRect bounds)
        {
            // Two failure modes to survive here:
            //  - the process exits before it makes a window (Edge hands the page to
            //    an already-running instance), and
            //  - Close() nulls the field while this coroutine is still looping.
            // So never touch the shared field from inside the loop.
            float deadline = Time.realtimeSinceStartup + 10f;
            IntPtr handle = IntPtr.Zero;

            while (Time.realtimeSinceStartup < deadline)
            {
                handle = WindowHandleFor(process);
                if (handle != IntPtr.Zero)
                    break;

                yield return new WaitForSecondsRealtime(0.1f);
            }

            if (handle == IntPtr.Zero)
            {
                Debug.LogWarning(
                    "[ComputerBrowserWindow] Opened the page but could not find its window to position. " +
                    "It usually means an existing browser instance took the page — close other browser " +
                    "windows and press Play again.");
                yield break;
            }

            SetWindowPos(handle, IntPtr.Zero, bounds.X, bounds.Y, bounds.Width, bounds.Height, SwpShowWindow);

            // Windows often refuses SetForegroundWindow from a process that is not
            // already in front, which leaves the page behind the game window. A brief
            // topmost flip is the reliable way to raise it without leaving it pinned
            // above everything for the rest of the session.
            ShowWindow(handle, SwShowNormal);
            SetWindowPos(handle, HwndTopMost, 0, 0, 0, 0, SwpNoMove | SwpNoSize | SwpNoActivate);
            SetWindowPos(handle, HwndNoTopMost, 0, 0, 0, 0, SwpNoMove | SwpNoSize | SwpNoActivate);

            if (focusOnOpen)
                SetForegroundWindow(handle);
        }

        private IntPtr WindowHandleFor(Process process)
        {
            try
            {
                if (process != null && !process.HasExited)
                {
                    process.Refresh();
                    if (process.MainWindowHandle != IntPtr.Zero)
                        return process.MainWindowHandle;
                }
            }
            catch (InvalidOperationException)
            {
                // The process object was disposed or exited between the checks.
            }

            // The page may live in a browser process we did not start.
            return FindWindowByTitle(windowTitleFragment);
        }

        private static IntPtr FindWindowByTitle(string fragment)
        {
            IntPtr found = IntPtr.Zero;

            EnumWindows((candidate, _) =>
            {
                if (!IsWindowVisible(candidate))
                    return true;

                int length = GetWindowTextLength(candidate);
                if (length == 0)
                    return true;

                var title = new StringBuilder(length + 1);
                if (GetWindowText(candidate, title, title.Capacity) == 0)
                    return true;

                if (title.ToString().IndexOf(fragment, StringComparison.OrdinalIgnoreCase) < 0)
                    return true;

                found = candidate;
                return false;
            }, IntPtr.Zero);

            return found;
        }

        private void BringToFront()
        {
            IntPtr handle = WindowHandleFor(browserProcess);
            if (handle != IntPtr.Zero)
                SetForegroundWindow(handle);
        }

        /// <summary>The game (or editor) window's client area, in screen pixels.</summary>
        private WinRect GameWindowBounds()
        {
            IntPtr gameWindow = Process.GetCurrentProcess().MainWindowHandle;

            if (gameWindow == IntPtr.Zero || !TryGetClientScreenRect(gameWindow, out WinRect client))
                client = new WinRect(0, 0, Screen.currentResolution.width, Screen.currentResolution.height);

            int insetX = Mathf.RoundToInt(client.Width * insetPercent);
            int insetY = Mathf.RoundToInt(client.Height * insetPercent);

            return new WinRect(
                client.X + insetX,
                client.Y + insetY,
                Mathf.Max(320, client.Width - insetX * 2),
                Mathf.Max(240, client.Height - insetY * 2));
        }

        private void FocusGameWindow()
        {
            IntPtr gameWindow = Process.GetCurrentProcess().MainWindowHandle;
            if (gameWindow != IntPtr.Zero)
                SetForegroundWindow(gameWindow);
        }

        private void OnApplicationQuit()
        {
            Close();
        }

        private void OnDestroy()
        {
            Close();
        }

        private static string FindBrowser()
        {
            string programFiles = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles);
            string programFilesX86 = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86);

            string[] candidates =
            {
                Path.Combine(programFilesX86, "Microsoft", "Edge", "Application", "msedge.exe"),
                Path.Combine(programFiles, "Microsoft", "Edge", "Application", "msedge.exe"),
                Path.Combine(programFiles, "Google", "Chrome", "Application", "chrome.exe"),
                Path.Combine(programFilesX86, "Google", "Chrome", "Application", "chrome.exe"),
            };

            foreach (string candidate in candidates)
                if (File.Exists(candidate))
                    return candidate;

            return null;
        }

        private static bool TryGetClientScreenRect(IntPtr window, out WinRect rect)
        {
            rect = default;
            if (!GetClientRect(window, out RECT client))
                return false;

            var origin = new POINT { X = 0, Y = 0 };
            if (!ClientToScreen(window, ref origin))
                return false;

            rect = new WinRect(origin.X, origin.Y, client.Right - client.Left, client.Bottom - client.Top);
            return true;
        }

        private readonly struct WinRect
        {
            public readonly int X;
            public readonly int Y;
            public readonly int Width;
            public readonly int Height;

            public WinRect(int x, int y, int width, int height)
            {
                X = x;
                Y = y;
                Width = width;
                Height = height;
            }
        }

        [StructLayout(LayoutKind.Sequential)]
        private struct RECT
        {
            public int Left;
            public int Top;
            public int Right;
            public int Bottom;
        }

        [StructLayout(LayoutKind.Sequential)]
        private struct POINT
        {
            public int X;
            public int Y;
        }

        private const uint SwpShowWindow = 0x0040;
        private const uint SwpNoMove = 0x0002;
        private const uint SwpNoSize = 0x0001;
        private const uint SwpNoActivate = 0x0010;
        private const int SwShowNormal = 1;

        private static readonly IntPtr HwndTopMost = new IntPtr(-1);
        private static readonly IntPtr HwndNoTopMost = new IntPtr(-2);

        [DllImport("user32.dll")]
        private static extern bool ShowWindow(IntPtr hWnd, int command);

        private delegate bool EnumWindowsProc(IntPtr window, IntPtr parameter);

        [DllImport("user32.dll")]
        private static extern bool EnumWindows(EnumWindowsProc callback, IntPtr parameter);

        [DllImport("user32.dll")]
        private static extern bool IsWindowVisible(IntPtr hWnd);

        [DllImport("user32.dll", CharSet = CharSet.Unicode)]
        private static extern int GetWindowTextLength(IntPtr hWnd);

        [DllImport("user32.dll", CharSet = CharSet.Unicode)]
        private static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);

        [DllImport("user32.dll")]
        private static extern bool GetClientRect(IntPtr hWnd, out RECT rect);

        [DllImport("user32.dll")]
        private static extern bool ClientToScreen(IntPtr hWnd, ref POINT point);

        [DllImport("user32.dll")]
        private static extern bool SetWindowPos(IntPtr hWnd, IntPtr insertAfter, int x, int y, int cx, int cy, uint flags);

        [DllImport("user32.dll")]
        private static extern bool SetForegroundWindow(IntPtr hWnd);
    }
}
