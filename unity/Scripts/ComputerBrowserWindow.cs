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

        /// <summary>Raised when the browser window closes, whether by us or by the player.</summary>
        public event Action Closed;

        public bool IsOpen => browserProcess != null && !browserProcess.HasExited;

        private Process browserProcess;

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
                browserProcess = null;
                Debug.Log("[ComputerBrowserWindow] Browser window closed.");
                Closed?.Invoke();
            }
        }

        /// <summary>Opens the page in an app-mode browser window over the game view.</summary>
        public void Open()
        {
            if (!Application.isEditor && Application.platform != RuntimePlatform.WindowsPlayer)
            {
                Debug.LogWarning("[ComputerBrowserWindow] Windows only for now; no window opened.");
                return;
            }

            if (IsOpen)
            {
                BringToFront();
                return;
            }

            string executable = FindBrowser();
            if (executable == null)
            {
                Debug.LogError(
                    "[ComputerBrowserWindow] No Edge or Chrome found. Install Microsoft Edge, " +
                    "then press Play again.");
                return;
            }

            string pagePath = Path.Combine(Application.streamingAssetsPath, pageFileName);
            if (!File.Exists(pagePath))
                Debug.LogError($"[ComputerBrowserWindow] Missing page: {pagePath} — copy prototype/standalone.html into Assets/StreamingAssets/.");

            string url = new Uri(pagePath).AbsoluteUri;
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

            Debug.Log($"[ComputerBrowserWindow] Opened {url}");
            StartCoroutine(PositionWhenReady(bounds));
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
                FocusGameWindow();
            }
        }

        public void Toggle()
        {
            if (IsOpen) Close();
            else Open();
        }

        private IEnumerator PositionWhenReady(WinRect bounds)
        {
            // The handle only exists once the browser has created its window.
            float deadline = Time.realtimeSinceStartup + 10f;
            while (Time.realtimeSinceStartup < deadline)
            {
                browserProcess.Refresh();
                IntPtr handle = browserProcess.MainWindowHandle;
                if (handle != IntPtr.Zero)
                {
                    SetWindowPos(handle, IntPtr.Zero, bounds.X, bounds.Y, bounds.Width, bounds.Height, SwpShowWindow);
                    if (focusOnOpen)
                        SetForegroundWindow(handle);
                    yield break;
                }

                yield return new WaitForSecondsRealtime(0.1f);
            }

            Debug.LogWarning(
                "[ComputerBrowserWindow] The browser started but no window handle appeared; " +
                "it may be behind the game window.");
        }

        private void BringToFront()
        {
            browserProcess.Refresh();
            IntPtr handle = browserProcess.MainWindowHandle;
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
