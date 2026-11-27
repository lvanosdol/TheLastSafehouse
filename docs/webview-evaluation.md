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
- **If Edge or Chrome is already running, it may take the page** instead of the process the game started, and then the window cannot be found by process. The component falls back to matching the window title (`Window Title Fragment`, default `Safehouse`); closing other browser windows makes it deterministic.
- **It needs a browser installed.** Windows 11 has Edge; the component also accepts Chrome.

## Integrating it into the scene

1. **Turn off the old surface.** Disable or delete the object carrying `Web Browser Basic`: with `ComputerBrowserWindow` in place the game would otherwise start two browsers, one of them invisible and unreadable, and the UnityWebBrowser engine process keeps running for nothing.
2. **Wire the interaction.** Call `Open()` when the player sits at the computer, `Close()` when they stand up, and subscribe to `Closed` so a player who closes the window themselves is returned to the game state rather than left standing in a scene that thinks they are still seated.
3. **Uninstall UnityWebBrowser once the switch is settled.** It is no longer on the critical path and it adds hundreds of megabytes to a build. Removing it makes IL2CPP *selectable* but not usable for this host — `Process.Start`, which opens the browser, is unsupported under IL2CPP — so desktop stays on Mono and the mobile targets will need a native webview or the system browser instead. Keep the packages installed only while comparing the two hosts.

## Why the project stays on Mono

`ComputerBrowserWindow` opens the browser with `System.Diagnostics.Process.Start`, and **IL2CPP does not support `System.Diagnostics.Process`**. A build compiled with IL2CPP would start, run the world, and then silently fail to open the computer. Mono is the correct backend for this host and is a normal shipping choice for Windows and macOS desktop.

If IL2CPP is installed but not offered in **Player Settings → Other Settings → Configuration → Scripting Backend**, the usual reasons are:

- the **platform tab** at the top of Player Settings is not the one with IL2CPP support — switch to the Windows tab;
- **Architecture** is set to `x86` (32-bit); IL2CPP needs `x86_64` or ARM64;
- the editor was already running when the module finished installing — restart it, or use Hub → ⋯ → **Verify files**.

None of that needs fixing for this project. The mobile versions in Phase 7 will need IL2CPP *and* a different host, because neither WebView2 nor a launched Edge exists on a phone.

### Removing UnityWebBrowser

1. Stop Play mode and save the scene.
2. In the Hierarchy, delete any object still carrying a browser component. After the packages are gone those components appear as **Missing (Mono Script)** and will not clean themselves up.
3. **Window → Package Manager → Packages: In Project**, and remove in this order, because each depends on the one below:
   1. `Unity Web Browser CEF Engine (Windows x64)`
   2. `Unity Web Browser CEF Engine`
   3. `Unity Web Browser`
   Click **Remove** for each and let the reimport finish.
4. UniTask and the other dependencies go with them. If any remains listed, remove it too — it exists only for UnityWebBrowser.
5. Optional tidy-up: **Project Settings → Package Manager → Scoped Registries**, remove `VoltUPR`. It is harmless to leave, and re-adding it is the first step of reinstalling.
6. Optional disk reclaim: delete `%LOCALAPPDATA%\Unity\cache\packages` to throw away the downloaded archives — several gigabytes for the CEF engine.

**Verify:** the three packages are gone from **In Project**, the Console is clean, and Play still opens the simulated computer in its own window.


