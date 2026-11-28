// The bench: a trigger volume, a positional prompt, and E.
//
// The trigger decides only when the prompt shows and when E means "use the
// bench". The lesson itself is lesson-1.html in a real browser window, because
// that is the only surface a screen reader can read
// (docs/webview-evaluation.md). Nothing here is a control the player must
// operate: the prompt is decoration, and E is the one key Unity listens for.

using Safehouse.Spike;
using UnityEngine;
using UnityEngine.InputSystem;

namespace Safehouse.Workshop
{
    [AddComponentMenu("Safehouse/Bench Interaction")]
    public sealed class BenchInteraction : MonoBehaviour
    {
        [Header("Lesson")]
        [Tooltip("File inside Assets/StreamingAssets/. Task 4 writes lesson-1.html; until then set this to standalone.html to check the trigger.")]
        [SerializeField] private string lessonPage = "lesson-1.html";

        [Tooltip("The host that opens the page. Found on this GameObject when left empty.")]
        [SerializeField] private ComputerBrowserWindow browser;

        [Tooltip("The player whose movement pauses while the page is open. Found in the scene when left empty.")]
        [SerializeField] private PlayerMove player;

        [Header("Interaction")]
        [Tooltip("The key that opens the page while the player stands at the bench.")]
        [SerializeField] private Key interactKey = Key.E;

        [Tooltip("Shown only while the player stands at the bench. Leave empty if the scene has no prompt yet.")]
        [SerializeField] private GameObject prompt;

        [Tooltip("Turn the prompt to face the player, so its text reads from any approach.")]
        [SerializeField] private bool faceViewer = true;

        private bool playerInside;

        private bool PageOpen => browser != null && browser.IsOpen;

        private void Awake()
        {
            if (browser == null)
                browser = GetComponent<ComputerBrowserWindow>();

            if (browser == null)
                Debug.LogError("[BenchInteraction] No ComputerBrowserWindow on this object or in Browser, so the bench cannot open the lesson.");

            if (player == null)
                player = FindAnyObjectByType<PlayerMove>();

            // One line that says whether this component can do its job at all.
            // It turns "nothing happens at the bench" into a named missing
            // reference instead of a guess.
            Debug.Log("[BenchInteraction] Bench ready: page " + lessonPage +
                      ", browser " + (browser != null ? browser.name : "NOT FOUND") +
                      ", player " + (player != null ? player.name : "NOT FOUND") + ".");
        }

        private void OnEnable()
        {
            if (browser != null)
                browser.Closed += OnPageClosed;

            SetPromptVisible(false);
        }

        private void OnDisable()
        {
            if (browser != null)
                browser.Closed -= OnPageClosed;
        }

        private void Update()
        {
            // Self-heal. Relying on Closed alone left a playtester unable to move
            // after shutting the page, because the event never arrived. As soon
            // as the host reports no window, the controls come back regardless of
            // which event did or did not fire.
            if (player != null && !player.InputEnabled && !PageOpen)
            {
                player.SetInputEnabled(true);
                RefreshPrompt();
            }

            if (!playerInside || PageOpen)
                return;

            if (Keyboard.current == null)
                return;

            if (Keyboard.current[interactKey].wasPressedThisFrame)
                OpenLesson();
        }

        private void LateUpdate()
        {
            if (prompt == null || !prompt.activeSelf || !faceViewer)
                return;

            Transform view = player != null ? player.View : null;
            if (view == null)
                return;

            prompt.transform.rotation = Quaternion.LookRotation(prompt.transform.position - view.position);
        }

        private void OnTriggerEnter(Collider other)
        {
            if (!IsPlayer(other))
                return;

            playerInside = true;
            RefreshPrompt();
            Debug.Log("[BenchInteraction] Player at the bench. Press E to open " + lessonPage + ".");
        }

        private void OnTriggerExit(Collider other)
        {
            if (!IsPlayer(other))
                return;

            playerInside = false;
            RefreshPrompt();
            Debug.Log("[BenchInteraction] Player left the bench.");
        }

        private void OpenLesson()
        {
            if (browser == null)
            {
                Debug.LogError("[BenchInteraction] The bench has no browser host, so " + lessonPage + " cannot open.");
                return;
            }

            // Movement off before the window opens. The browser takes keyboard
            // focus immediately, and a key held at that moment would otherwise
            // still read as pressed when the player comes back.
            if (player != null)
                player.SetInputEnabled(false);

            SetPromptVisible(false);
            browser.Open(lessonPage);

            // If no browser could be started (no Edge or Chrome, or a broken
            // path), give the controls straight back instead of leaving the
            // player frozen in front of a bench they cannot leave.
            if (!browser.IsOpen)
            {
                if (player != null)
                    player.SetInputEnabled(true);

                RefreshPrompt();
                return;
            }

            Debug.Log("[BenchInteraction] Opened " + lessonPage + " over the Workshop.");
        }

        private void OnPageClosed()
        {
            if (player != null)
                player.SetInputEnabled(true);

            RefreshPrompt();

            if (playerInside)
                Debug.Log("[BenchInteraction] Back in the Workshop. Press E to return to the bench.");
        }

        private static bool IsPlayer(Collider other)
        {
            return other.GetComponentInParent<PlayerMove>() != null;
        }

        private void RefreshPrompt()
        {
            SetPromptVisible(playerInside && !PageOpen);
        }

        private void SetPromptVisible(bool visible)
        {
            if (prompt != null)
                prompt.SetActive(visible);
        }
    }
}
