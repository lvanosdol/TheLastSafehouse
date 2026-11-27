# Spike test — a real browser window as the accessible host

**Date:** 2026-11-27
**Tester:** project owner, with NVDA
**Build:** `unity/Scripts/ComputerBrowserWindow.cs`, opening `Assets/StreamingAssets/standalone.html` in Edge app mode
**Purpose:** test option A in `docs/webview-evaluation.md` — can the game put an accessible browser on screen instead of a texture?

## Why this test exists

`docs/playtests/2026-11-27-spike-unity-embedding.md` showed that a texture-based webview renders the page but exposes nothing to a screen reader. This test asked whether a **real window**, opened and positioned by the game, is read normally.

## Environment

| Field | Value |
|---|---|
| Operating system | Windows 11 |
| Unity | 6.6 — `6000.6.11f1` |
| Browser | Microsoft Edge, app mode (`--app=`), isolated profile |
| Screen reader | NVDA, version not recorded |
| Project path | `C:\UnityProjects\SafehouseSpike` |
| Page | `file:///C:/UnityProjects/SafehouseSpike/Assets/StreamingAssets/standalone.html` |

## What was run

`ComputerBrowserWindow` on an empty GameObject with **Open On Start** ticked. Play, wait for the window, then with NVDA running, Tab through the page.

## Results

| Check | Result |
|---|---|
| Window opens when Play starts | **Pass** |
| Chromeless app mode — no address bar, no tabs | **Pass** |
| Simulated desktop renders in it | **Pass** |
| NVDA reads the page, by Tab, inside the window Unity opened | **Pass** |
| Window closes with Play mode | **Pass** |
| Closing the window returns focus to Unity and fires `Closed` | **Pass** — reported by the tester after the package removal |
| Built player rather than the editor | not run |
| Text-size controls, terminal typing, Escape inside the page | not run |

## Verdict

**Option A works.** The accessible surface is a real Chromium window driven by the game, and a screen reader reads it without any special handling. No plugin purchase is needed, and the web layer is unchanged.

## What this means for the project

- The engine decision stands: Unity for the world, web for the computer. What changed is the **host**, not the engine and not the page.
- UnityWebBrowser comes off the critical path, and the Mono requirement no longer comes from it. The project stays on Mono for a different reason: `ComputerBrowserWindow` starts the browser with `System.Diagnostics.Process`, which IL2CPP does not support — so desktop remains Mono (fine for Windows and macOS), and the Phase 7 mobile targets will need their own host rather than this one.
- The interaction to build next is the seating one: `Open()` when the player sits at the computer, `Close()` when they stand up, and handle `Closed` for a player who closes the window themselves.

## Defect found after the first run

`NullReferenceException` at `ComputerBrowserWindow.cs:174` in the positioning coroutine. Two ways in, both real:

1. **Edge hands the page to an already-running browser instance.** The process we start exits immediately, `Update()` clears the field, and the coroutine then dereferenced a null process.
2. **Play mode stopped while the coroutine was still polling** for a window handle — `Close()` nulls the same field.

Fixed by giving the coroutine its own reference to the process, tolerating an exited process, and falling back to finding the window by title (`Window Title Fragment`, default `Safehouse`) when the page lands in a browser process we did not start. Symptom to watch for if it regresses: the page opens but the window is not moved into place.

## Known costs, recorded while they are fresh

- The browser is an **overlay**: 3D props cannot occlude it. Acceptable because sitting at a computer fills the screen anyway.
- **Unity receives no input while the browser has focus** — correct for a seated player, but the game cannot react to keys during that time.
- It appears in the **taskbar and on alt-tab**, unlike a true embedded surface.
- In the editor it covers the whole editor, because the editor's window is what gets measured.
- It requires Edge or Chrome to be installed.
