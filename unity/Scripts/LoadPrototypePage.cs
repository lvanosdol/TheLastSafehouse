// Unity Web Browser (UWB) glue for the engine spike.
// Loads prototype/standalone.html from StreamingAssets as a real file:/// URL.
//
// Put this on the same GameObject as the UWB browser component
// (Add Component -> UWB -> Web Browser Basic), after copying
// prototype/standalone.html into Assets/StreamingAssets/.
//
// Verified against UnityWebBrowser 2.2.8:
//   - browserClient.LoadUrl() throws UwbIsNotConnectedException until the
//     engine process has signalled ready, so this waits for it first.
//   - WebBrowserClient.initialUrl is a URL, not a path; a bare C:\... path is
//     treated as a search string and loads a blank page.

using System;
using System.Collections;
using System.IO;
using UnityEngine;
using VoltstroStudios.UnityWebBrowser.Core;

namespace Safehouse.Spike
{
    public sealed class LoadPrototypePage : MonoBehaviour
    {
        [Tooltip("The UWB component to drive. Found on this GameObject when left empty.")]
        [SerializeField]
        private BaseUwbClientManager browser;

        [Tooltip("File name inside Assets/StreamingAssets/.")]
        [SerializeField]
        private string pageFileName = "standalone.html";

        [Tooltip("Load the page over http://localhost instead of file://. Use while testing the modular prototype.")]
        [SerializeField]
        private bool useLocalServer;

        [Tooltip("Page URL used when Use Local Server is ticked.")]
        [SerializeField]
        private string localServerUrl = "http://localhost:8000/standalone.html";

        [Tooltip("How long to wait for the engine process to connect before giving up.")]
        [SerializeField]
        private float connectTimeoutSeconds = 20f;

        private void Awake()
        {
            if (browser == null)
                browser = GetComponent<BaseUwbClientManager>();

            if (browser == null)
                Debug.LogError(
                    "[LoadPrototypePage] No UWB component on this GameObject. " +
                    "Add Component -> UWB -> Web Browser Basic, and keep this script on the same object.",
                    this);
        }

        private void Start()
        {
            if (browser == null)
                return;

            StartCoroutine(LoadWhenConnected());
        }

        /// <summary>Reloads the page. Safe to wire to a Unity UI button.</summary>
        public void Reload()
        {
            if (browser == null || !browser.browserClient.IsConnected)
                return;

            browser.browserClient.LoadUrl(TargetUrl());
        }

        private IEnumerator LoadWhenConnected()
        {
            WebBrowserClient client = browser.browserClient;
            float deadline = Time.realtimeSinceStartup + connectTimeoutSeconds;

            while (!client.ReadySignalReceived || !client.IsConnected)
            {
                if (Time.realtimeSinceStartup > deadline)
                {
                    Debug.LogError(
                        "[LoadPrototypePage] The browser engine did not connect within " +
                        $"{connectTimeoutSeconds:0} seconds. Check that the CEF native package for this " +
                        "platform is installed (for example 'Unity Web Browser CEF Engine (Windows x64)'), " +
                        "assign the Engine field, and raise Engine Startup Timeout on the browser component.",
                        this);
                    yield break;
                }

                yield return null;
            }

            string url = TargetUrl();
            Debug.Log($"[LoadPrototypePage] Loading {url}", this);
            client.LoadUrl(url);
        }

        private string TargetUrl()
        {
            return useLocalServer ? localServerUrl : StreamingAssetUrl(pageFileName);
        }

        /// <summary>
        /// Turns StreamingAssets/&lt;fileName&gt; into a file:/// URI, escaping spaces
        /// and using forward slashes on every platform.
        /// </summary>
        public static string StreamingAssetUrl(string fileName)
        {
            string path = Path.Combine(Application.streamingAssetsPath, fileName);

            if (!File.Exists(path))
            {
                Debug.LogError(
                    $"[LoadPrototypePage] Missing page: {path}. " +
                    "Run unity/sync-prototype.sh against the Unity project, or copy " +
                    "prototype/standalone.html into Assets/StreamingAssets/ by hand.");
            }

            // new Uri(...).AbsoluteUri gives file:///C:/... on Windows and
            // file:///Users/... on macOS, with %20 for spaces.
            return new Uri(path).AbsoluteUri;
        }
    }
}
