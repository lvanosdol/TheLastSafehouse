// First-person walking for the Workshop, on the new Input System.
//
// Two routes to every direction on purpose: the mouse while the pointer is
// locked, and the arrow keys always. Arrow keys are not a convenience. A
// keyboard-only player cannot turn with a mouse, and the bench has to be
// reachable without one (prototype/ACCESSIBILITY-TEST.md, "every control is
// reachable and operable by keyboard").
//
// Escape releases the pointer; a click inside the Game view takes it back.
// Movement and looking are switched off while the lesson page is open
// (BenchInteraction calls SetInputEnabled) because the browser takes keyboard
// focus, and a key held at that moment would otherwise still read as pressed
// when the player returns.

using UnityEngine;
using UnityEngine.InputSystem;

namespace Safehouse.Workshop
{
    [RequireComponent(typeof(CharacterController))]
    [AddComponentMenu("Safehouse/Player Move")]
    public sealed class PlayerMove : MonoBehaviour
    {
        [Header("Movement")]
        [Tooltip("Metres per second. At 2.4 the 8 m Workshop takes about three seconds to cross.")]
        [SerializeField] private float walkSpeed = 2.4f;

        [Tooltip("Keeps the player on the floor. The Workshop has no stairs and no jumping.")]
        [SerializeField] private float gravity = -20f;

        [Header("Look")]
        [Tooltip("The camera, parented under this object. Found under this object when left empty.")]
        [SerializeField] private Transform view;

        [Tooltip("Degrees per pixel of mouse movement while the pointer is locked.")]
        [SerializeField] private float mouseSensitivity = 0.12f;

        [Tooltip("Degrees per second when turning with the arrow keys. This is the keyboard-only route to the bench.")]
        [SerializeField] private float keyTurnSpeed = 100f;

        [Tooltip("How far up or down the camera may look, in degrees either side of level.")]
        [Range(0f, 89f)]
        [SerializeField] private float pitchLimit = 80f;

        [Header("Pointer")]
        [Tooltip("Lock and hide the pointer on Play. Escape releases it, a click takes it back.")]
        [SerializeField] private bool lockPointerOnStart = true;

        private CharacterController controller;
        private float pitch;
        private float verticalSpeed;
        private float airborneTime;
        private bool warnedAboutFalling;
        private Vector3 startPosition;
        private bool inputEnabled = true;

        /// <summary>The camera transform, for anything that has to face the player.</summary>
        public Transform View => view;

        public bool InputEnabled => inputEnabled;

        private void Awake()
        {
            controller = GetComponent<CharacterController>();
            startPosition = transform.position;

            if (view == null)
            {
                Camera camera = GetComponentInChildren<Camera>();
                if (camera != null)
                    view = camera.transform;
            }

            if (view == null)
                Debug.LogWarning("[PlayerMove] No camera found. Add the Main Camera under the Player, or drag it into View.");
            else if (view.parent != transform)
                Debug.LogWarning("[PlayerMove] The camera is not parented under the Player, so turning the body will not turn the view. Drag the Main Camera onto the Player in the Hierarchy.");
        }

        private void Start()
        {
            if (lockPointerOnStart)
                LockPointer();
        }

        private void Update()
        {
            if (!inputEnabled)
                return;

            UpdatePointer();
            Look();
            Walk();
        }

        private void OnDisable()
        {
            UnlockPointer();
        }

        /// <summary>
        /// Switches walking and looking off or on. Used while the lesson page has
        /// the keyboard, and again when it closes.
        /// </summary>
        public void SetInputEnabled(bool enabled)
        {
            inputEnabled = enabled;

            if (enabled)
            {
                if (lockPointerOnStart)
                    LockPointer();
                return;
            }

            UnlockPointer();
        }

        private void UpdatePointer()
        {
            if (Keyboard.current != null && Keyboard.current.escapeKey.wasPressedThisFrame)
                UnlockPointer();

            if (Cursor.lockState != CursorLockMode.Locked &&
                Mouse.current != null &&
                Mouse.current.leftButton.wasPressedThisFrame)
            {
                LockPointer();
            }
        }

        private void Look()
        {
            float yaw = 0f;
            float pitchChange = 0f;

            if (Cursor.lockState == CursorLockMode.Locked && Mouse.current != null)
            {
                Vector2 delta = Mouse.current.delta.ReadValue();
                yaw += delta.x * mouseSensitivity;
                pitchChange -= delta.y * mouseSensitivity;
            }

            // Arrow keys work whether or not the pointer is locked, so a player
            // with no mouse is never stuck facing one way.
            if (Keyboard.current != null)
            {
                float turn = keyTurnSpeed * Time.deltaTime;

                if (Keyboard.current.leftArrowKey.isPressed)
                    yaw -= turn;
                if (Keyboard.current.rightArrowKey.isPressed)
                    yaw += turn;
                if (Keyboard.current.upArrowKey.isPressed)
                    pitchChange += turn;
                if (Keyboard.current.downArrowKey.isPressed)
                    pitchChange -= turn;
            }

            if (yaw != 0f)
                transform.Rotate(0f, yaw, 0f, Space.World);

            pitch = Mathf.Clamp(pitch + pitchChange, -pitchLimit, pitchLimit);

            if (view != null)
                view.localRotation = Quaternion.Euler(pitch, 0f, 0f);
        }

        private void Walk()
        {
            float sideways = 0f;
            float forwards = 0f;

            if (Keyboard.current != null)
            {
                if (Keyboard.current.dKey.isPressed)
                    sideways += 1f;
                if (Keyboard.current.aKey.isPressed)
                    sideways -= 1f;
                if (Keyboard.current.wKey.isPressed)
                    forwards += 1f;
                if (Keyboard.current.sKey.isPressed)
                    forwards -= 1f;
            }

            Vector3 direction = transform.right * sideways + transform.forward * forwards;
            if (direction.sqrMagnitude > 1f)
                direction.Normalize();

            if (controller.isGrounded && verticalSpeed < 0f)
                verticalSpeed = -2f;

            verticalSpeed += gravity * Time.deltaTime;

            controller.Move((direction * walkSpeed + Vector3.up * verticalSpeed) * Time.deltaTime);

            CheckStanding();
        }

        /// <summary>
        /// Turns "the player is falling" into a Console line, and puts the player
        /// back if the room has no floor under them. Placeholder geometry loses
        /// colliders easily, and falling forever has no way out of it.
        /// </summary>
        private void CheckStanding()
        {
            if (controller.isGrounded)
            {
                airborneTime = 0f;
                return;
            }

            airborneTime += Time.deltaTime;

            if (airborneTime > 1.5f && !warnedAboutFalling)
            {
                warnedAboutFalling = true;
                Debug.LogWarning(
                    "[PlayerMove] The player is standing on nothing. Check that a Floor object is active, " +
                    "carries a collider, and sits at y = 0. The Character Controller Centre should be (0, 0.9, 0).");
            }

            if (transform.position.y < startPosition.y - 10f)
            {
                Debug.LogWarning("[PlayerMove] Fell out of the world; returned to the start position.");
                controller.enabled = false;
                transform.position = startPosition;
                verticalSpeed = 0f;
                controller.enabled = true;
                airborneTime = 0f;
            }
        }

        private static void LockPointer()
        {
            Cursor.lockState = CursorLockMode.Locked;
            Cursor.visible = false;
        }

        private static void UnlockPointer()
        {
            Cursor.lockState = CursorLockMode.None;
            Cursor.visible = true;
        }
    }
}
