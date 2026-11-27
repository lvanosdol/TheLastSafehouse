# Embedded browser evaluation — why texture-based webviews cannot be accessible

**Date:** 2026-11-27
**Status:** decides the next engineering step after `docs/playtests/2026-11-27-spike-unity-embedding.md`
**Question:** which host lets a screen reader read the simulated computer inside the game?

## The finding

It is not a choice of plugin. It is a choice of **rendering architecture**.

A browser whose output is copied into a Unity `Texture2D` has no window on screen, so Windows exposes no accessible tree for a screen reader to walk. A browser that is a **real window** is exposed exactly as it is in Edge — which is what the 2026-11-27 test showed.

| Component | How Windows renders it | Accessible to a screen reader |
|---|---|---|
| UnityWebBrowser 2.2.8 | CEF off-screen → `Texture2D`; `GetAccessibilityHandler()` returns `null` | **No** — measured 2026-11-27: NVDA silent by mouse and by Tab |
| gree/unity-webview | Windows support "rendered offscreen and displayed as a texture in the game view" | No — same pattern |
| Vuplex 3D WebView | Windows: Chromium rendered to a `Texture2D`. **Native 2D Mode — the mode that positions a real webview in front of the game view — is Android, iOS, macOS WebKit, WebGL and UWP only** | No on Windows; probably yes on the platforms with Native 2D Mode |
| A real browser window (Edge) | real window | **Yes** — measured: NVDA read the page by mouse and by Tab |

**Consequence for the "price Vuplex" note in `docs/playtests/2026-11-26-spike-web-layer.md`:** buying Vuplex would not solve the Windows problem, because the Windows package renders to a texture too. Do not spend that money on accessibility grounds.

## What the options actually cost

| Option | Accessibility | UX cost | Engineering cost |
|---|---|---|---|
| **A. Real browser window driven by Unity** — launch Edge in app mode, or your own WebView2 window, positioned over the game view | Certain: it is a normal Chromium window | The computer cannot be partly hidden behind 3D props; it is a flat overlay. Unity input pauses while the browser has focus | Small — a launcher, a positioner, a focus handoff |
| **B. WebView2 as a child window inside the game window** — `CoreWebView2Controller` parented to the Unity HWND | Very likely: a real child window, as WebView2 apps are readable in practice | Same overlay limitation, but no separate window in the taskbar or on alt-tab | Large — native interop, message pump, DPI and resize handling |
| **C. Web-first build** — Three.js/Babylon, no Unity | Certain | Lose the 3D interior quality and the Unity tooling | Large — the scene layer and the world are rebuilt |
| **D. Keep a texture-based webview** | None | Fully immersive, occludable by geometry | None (already built) — and permanently unreadable |

The design already treats the computer as something the player **sits down at**, which is a full-window moment. That makes A a defensible shipping answer rather than a hack: when the player sits at the computer, the game hands the screen to a real browser window and takes it back when they stand up.

## Recommended next step

**A first**, because it is the cheapest thing that is certainly accessible, and it answers the open design question — is a flat overlay acceptable when the player is seated at the terminal? If yes, ship A and revisit B only if the window seams annoy playtesters. If no, C is the honest fallback and B is the expensive middle.

## The acceptance test, identical for any option

1. NVDA running, Speech Viewer open.
2. Enter the computer from inside the game (Play mode, walk up, interact).
3. Reader must announce the simulation notice, then the desktop icons, by **Tab alone**.
4. Open **Practice → Logs → sensor.log → View permissions** and hear **Account, Read, Write, Role note** as column headings.
5. Escape returns focus with an announcement and does not quit the game.
6. Mouse parked outside the window the whole time — keyboard only.

A pass on 3 and 4 is the spike's pass condition. Anything less is a fail for that option, recorded the same way as `docs/playtests/2026-11-27-spike-unity-embedding.md`.

## Option A, implemented

`unity/Scripts/ComputerBrowserWindow.cs` does the plumbing: it finds Edge or Chrome, opens the page with `--app=` (chromeless, no address bar, no tabs), waits for the window handle, moves the window onto the game window's client area, and brings it to the front. `Close()` closes the browser and focuses the game again; closing the window by hand raises `Closed`, so the interaction that seated the player can stand them back up.

Copy it into `Assets/Scripts/`, drop it on any object, leave `Open On Start` ticked for the first test, and press Play.

Known limits, all acceptable for a spike and worth knowing before they surprise you:

- **The browser is an overlay.** It cannot be partly hidden behind 3D props, because it is a separate window on top.
- **Unity receives no input while the browser has focus.** That is the desired behaviour when the player is seated at the computer, but it means the game cannot react to keys during that time.
- **In the editor it covers the editor**, because the editor's main window is what gets measured. In a built player it covers the game window, which is the real target.
- **It appears in the taskbar and on alt-tab**, which a true embedded surface would not.
- **It needs a browser installed.** Windows 11 has Edge; the component also accepts Chrome.

