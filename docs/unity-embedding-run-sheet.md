# Run sheet — embedding the page in the Unity shell

**Status:** partially complete. Rendering passed on 2026-11-27; the reader and boundary sections are still open. This is the second half of the accessibility spike — fill the rest in during the next session, then rename it `docs/playtests/YYYY-MM-DD-spike-unity-embedding.md`.
**Setup:** `docs/unity-setup.md` step 7. **Page:** `prototype/standalone.html`, copied into `Assets/StreamingAssets/`.
**Gate it serves:** `docs/engine-decision.md` — a reader must announce the dialog's fields inside Unity, keyboard only.

## Environment, record before starting

| Field | Value |
|---|---|
| Date and tester | 2026-11-27, project owner |
| Operating system and build | Windows 11 |
| Unity version (Help → About Unity) | 6.6 — `6000.6.11f1` |
| UnityWebBrowser version (Package Manager) | 2.2.8 (`dev.voltstro.unitywebbrowser@d72acb9349b2`) |
| Engine package | `dev.voltstro.unitywebbrowser.engine.cef.win.x64@0ce162ea1f46` |
| Screen reader and version (NVDA, VoiceOver) | not yet attached |
| Graphics card / render pipeline (HDRP or URP) | NVIDIA GTX 1650, URP |
| Scripting | Mono, Api Compatibility `.NET Framework`, Active Input Handling = Input System package |
| Project path | `C:\UnityProjects\SafehouseSpike` |
| Page address | `file:///C:/UnityProjects/SafehouseSpike/Assets/StreamingAssets/standalone.html` |

## Configuration that worked

`Web Browser Basic` on the Raw Image object, with **Engine** = `Cef Engine Configuration`, **Communication Layer** = `TCP Communication Layer`, **Input Handler** = `Old Input Handler` (see the input note below), **Engine Startup Timeout** = `10000`, **Initial Url** as above. Canvas → **Canvas Scaler** = *Scale With Screen Size*, reference `1920×1080`, Match `0.5`. The Raw Image keeps a centre anchor at `1920×1080`.

## A. Does it render

| # | Check | Expected | Result | Notes |
|---|---|---|---|---|
| A1 | Play mode with the browser component enabled | Simulated desktop appears in the Game view after 1–3 s | **Pass** | `[UWB]: UWB startup success, connecting...` in the Console |
| A2 | Console | No `engine did not get ready`, no `input handler is null` | **Pass** | Two fixed first: Communication Layer empty, then Canvas Scaler |
| A3 | Process list | `UnityWebBrowser.Engine.Cef` runs beside the editor | **Pass** | engine launch logged from the PackageCache path |
| A4 | Stop Play mode | Engine process exits | not checked | |
| A5 | Build (Mono, .NET Framework) | Same page appears in the standalone build | pending | `Initial Url` is an editor path; the build needs its own path or the loader script |
| A6 | Build folder | `<Game>_Data/UWB/` exists | pending | |

**Traps hit before A1 passed**, in order: the sample prefab carried no browser component; the **Communication Layer** slot was empty, which throws `NullReferenceException` at `WebBrowserClient.Init()` and leaves a white surface; `Old Input Handler` throws under the Input System package; the Raw Image was larger than the Game view, so the visible area was the empty middle of the page.

## B. Does a reader still work — the pass condition

| # | Check | Expected | Result | Notes |
|---|---|---|---|---|
| B1 | With NVDA running, enter Play mode | Reader announces something from the page | | Expected to fail; see `docs/unity-setup.md`, "What UnityWebBrowser cannot prove" |
| B2 | Press the page's **Test announcement** button | The test sentence is spoken | | needs `Input System Handler` or Active Input Handling = Both |
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
