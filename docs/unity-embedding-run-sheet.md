# Run sheet — embedding the page in the Unity shell

**Status:** not yet run. This is the recording sheet for the second half of the accessibility spike; fill it in during the session, then rename it `docs/playtests/YYYY-MM-DD-spike-unity-embedding.md`.
**Setup:** `docs/unity-setup.md` step 7. **Page:** `prototype/standalone.html`, copied into `Assets/StreamingAssets/` with `./unity/sync-prototype.sh`.
**Gate it serves:** `docs/engine-decision.md` — a reader must announce the dialog's fields inside Unity, keyboard only.

## Environment, record before starting

| Field | Value |
|---|---|
| Date and tester | |
| Operating system and build | |
| Unity version (Help → About Unity) | |
| UnityWebBrowser version (Package Manager) | |
| Screen reader and version (NVDA, VoiceOver) | |
| Graphics card / render pipeline (HDRP or URP) | |

## A. Does it render

| # | Check | Expected | Result | Notes |
|---|---|---|---|---|
| A1 | Play mode with the browser component enabled | Simulated desktop appears in the Game view after 1–3 s | | |
| A2 | Console | No `engine did not get ready`, no `input handler is null` | | |
| A3 | Process list | `UnityWebBrowser.Engine.Cef` runs beside the editor | | |
| A4 | Stop Play mode | Engine process exits | | |
| A5 | Build (Mono, .NET Framework) | Same page appears in the standalone build | | |
| A6 | Build folder | `<Game>_Data/UWB/` exists | | |

## B. Does a reader still work — the pass condition

| # | Check | Expected | Result | Notes |
|---|---|---|---|---|
| B1 | With NVDA running, enter Play mode | Reader announces something from the page | | Expected to fail; see `docs/unity-setup.md`, "What UnityWebBrowser cannot prove" |
| B2 | Press the page's **Test announcement** button | The test sentence is spoken | | |
| B3 | Open **Practice → Logs → sensor.log** by keyboard | Selection is spoken with size, date, read-only | | |
| B4 | **View permissions**: listen to the table | Account, Read, Write, Role note announced as column headings; each row starts with its account | | This is the specific result the spike exists to obtain |
| B5 | Escape from the dialog | Dialog closes; focus returns to **View permissions**; reader says where it went | | |
| B6 | Escape again | Play mode continues — Escape does not stop the editor | | |
| B7 | Complete one interaction without touching the mouse | Whole path by keyboard only | | Keyboard input may require the pointer over the surface; record whether it does |

## C. Boundary behaviour

| # | Check | Expected | Result | Notes |
|---|---|---|---|---|
| C1 | Tab past the last control in the page | Focus stays inside the browser surface while a dialog is open | | |
| C2 | Opening a Unity-side menu or pausing | Focus returns to the page with its state intact | | |
| C3 | Pause, wait, resume | Page state (open windows, text size) survives | | |
| C4 | Change text size inside the page, then leave and return | Setting persists, or the loss is recorded | | |

## D. Cost, from the same session

| Measure | Value |
|---|---|
| Build size (with and without the CEF package) | |
| Memory at idle in the page | |
| Input latency when typing in the simulated terminal | |
| Time from Play to first visible paint | |

## Verdict

- **Pass** if B3–B5 hold with a reader attached and C1–C3 hold; then the engine decision stands and the boundary rules go into `docs/decisions.md`.
- **Fail** if a reader cannot reach the dialog: record it, and move to the WebView2 route before taking the web-first fallback — an off-screen texture cannot expose an accessible tree, but a real child window can.
