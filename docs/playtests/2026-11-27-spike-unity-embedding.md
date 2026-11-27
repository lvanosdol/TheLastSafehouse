# Spike test — embedding the page in the Unity shell

**Date:** 2026-11-27
**Tester:** project owner, with NVDA
**Page:** `prototype/standalone.html`, copied into `Assets/StreamingAssets/`
**Purpose:** the second half of the spike in `docs/engine-decision.md` — does a screen reader still work once the page is inside Unity?

## Result in one line

**The page renders and the page is accessible; the embedded surface is not.** NVDA read the page normally in Edge, with the mouse and with Tab, and said nothing at all inside Unity with either.

## Environment

| Field | Value |
|---|---|
| Operating system | Windows 11 |
| Unity version | 6.6 — `6000.6.11f1` |
| UnityWebBrowser | 2.2.8 (`dev.voltstro.unitywebbrowser@d72acb9349b2`) |
| Engine package | `dev.voltstro.unitywebbrowser.engine.cef.win.x64@0ce162ea1f46` |
| Screen reader | NVDA, version not recorded |
| Graphics card / render pipeline | NVIDIA GTX 1650, URP |
| Scripting | Mono, Api Compatibility `.NET Framework`, Active Input Handling = Input System package |
| Project path | `C:\UnityProjects\SafehouseSpike` |
| Page address | `file:///C:/UnityProjects/SafehouseSpike/Assets/StreamingAssets/standalone.html` |

## Configuration that worked

`Web Browser Basic` on the Raw Image object, with **Engine** = `Cef Engine Configuration`, **Communication Layer** = `TCP Communication Layer`, **Input Handler** = `Old Input Handler`, **Engine Startup Timeout** = `10000`, **Initial Url** as above. Canvas → **Canvas Scaler** = *Scale With Screen Size*, reference `1920×1080`, Match `0.5`. The Raw Image keeps a centre anchor at `1920×1080`.

## A. Does it render — pass

| # | Check | Result | Notes |
|---|---|---|---|
| A1 | Play mode shows the simulated desktop | **Pass** | `[UWB]: UWB startup success, connecting...` in the Console |
| A2 | No engine or handler errors | **Pass** | after fixing the Communication Layer slot and the Canvas Scaler |
| A3 | `UnityWebBrowser.Engine.Cef` process runs | **Pass** | launched from the PackageCache path |
| A4 | Engine exits when Play stops | not checked | |
| A5 | Same page in a built player | not run | `Initial Url` holds an editor path; the build needs its own path or the loader script |
| A6 | `<Game>_Data/UWB/` exists after a build | not run | |

## B. Does a reader work — fail

| # | Check | Result | Notes |
|---|---|---|---|
| B1 | Reader announces anything inside Play mode | **Fail** | complete silence |
| B2 | Page's **Test announcement** button speaks | **Fail** | not reached by the reader |
| B3 | Selection of `sensor.log` is spoken | not applicable | nothing is exposed to read |
| B4 | Permission table headings announced | not applicable | this is the result the spike existed to obtain, and it cannot be obtained from this component |
| B5 | Escape returns focus with an announcement | not applicable | |
| B6 | Escape does not stop Play mode | not checked | untestable while nothing is exposed |
| B7 | Whole path by keyboard only | **Fail** | keys are only forwarded once the pointer enters the Raw Image (`RawImageUwbClientInputHandler.OnPointerEnter`), so keyboard-only operation is impossible as shipped |

**Control test:** the same file opened directly in Edge, with NVDA, reads the simulation notice, the desktop icons, and the terminal — by mouse and by Tab. The difference is the container, not the page.

## C. Boundary behaviour and D. cost

Not reached. There is no accessible boundary to test until a component exposes one.

## Traps hit before A1 passed

1. The imported sample prefab carried no browser component on its display object.
2. The **Communication Layer** slot was empty → `NullReferenceException` at `WebBrowserClient.Init()` and a flat white surface.
3. `Old Input Handler` throws under the Input System package; it needs `Input System Handler` or Active Input Handling = `Both`.
4. The Raw Image was larger than the Game view, so the visible area was the empty middle of the page until a Canvas Scaler was added.

## Verdict

- The web layer is **not** the problem. It is accessible in a real browser, which is what the 2026-11-26 report and the automated checks already showed.
- UnityWebBrowser 2.2.8 cannot carry it: its CEF surface renders off-screen into a texture and returns no accessibility handler, so there is no accessible tree, and its keyboard path depends on the pointer.
- The pass condition in `docs/engine-decision.md` is therefore **not met by this component**. The engine choice is not yet overturned, but the container is.

## Next

Test a component whose surface is a real window, which assistive technology can attach to — **WebView2** first, since it uses the Edge runtime already present on Windows and keeps the build small. The page needs no changes for that test; only the host does.

**That assumption was checked on 2026-11-27 and narrowed:** every Unity browser plugin renders to a texture on Windows, so the choice is between a real window driven by the game, a hand-written WebView2 child window, and the web-first build. See `docs/webview-evaluation.md`.

## Appendix — how to repeat this with another browser component

1. Install NVDA if needed, and open **NVDA menu → Tools → Speech Viewer** so everything spoken is also written down.
2. Control test outside Unity: open the same page in Edge and Tab through it. The reader must announce the notice and the desktop icons. If not, the test cannot be judged.
3. NVDA menu → **Preferences → Settings → Mouse** → untick **Enable mouse tracking**, so "the pointer is here" is not mistaken for "focus moved here".
4. Inside Unity: Play, click once on the Game view, Tab five or six times, then try to reach **Practice** and press Enter.
5. Press **Insert+Tab** once; it should read the focused window's title. That proves the reader sees the Unity window, which is what makes silence meaningful.
6. Record one line per check, quoting the Speech Viewer where possible.

