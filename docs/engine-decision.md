# Engine Decision

**Status:** Chosen, with one validation gate still open — the accessibility spike described below.
**Date:** 2026-11-26

## Decision

Build the game in **Unity** (current LTS release at project start), and render the in-game computer — the simulated Windows desktop, File Explorer, Settings, Device Manager, Services, terminal, SQL console, Python editor, and evidence panels — as a **real web UI** (HTML, CSS, TypeScript) inside an embedded browser component. Unity owns the 3D world, movement, cutscenes, dialogue, timers, and save system. The web layer owns everything the player learns to operate.

## Why

- **Graphics.** Small interior spaces seen up close — a Workshop, a server corridor, a security office — are well within HDRP's range. The visual ceiling here is art direction and asset quality, not the renderer.
- **Iteration speed.** Most of this game is logic and text. C# and Unity's tooling make those cheap to change.
- **One project, four platforms.** Windows, macOS, Android, and iOS from a single Unity project, with the web layer shared unchanged.
- **Accessibility where it actually lives.** The design requires a screen reader to read a permission dialog, a table row, an error message, and a focus order. A real DOM gives that by default; Unity's UI does not.
- **Cost.** No royalties. Personal is free below the revenue cap and Pro seats apply above it; verify current terms before release.

## What this does not solve

- **Unity's own accessibility is partial.** Its accessibility package targets mobile screen readers most strongly; Windows needs a bridge and **macOS VoiceOver is the weak point**. That is why the accessible surface is the web layer, not Unity's UI.
- **The shell still has accessibility work.** Focus handoff between the 3D world and the computer, captions, reduced motion, pause behaviour, and keyboard navigation around the scene all belong to Unity.
- **Two UI toolchains.** Web UI for the computer, Unity UI for the world and menus. That is the maintenance cost of this choice.
- **Render pipelines differ by platform.** HDRP is desktop-oriented and is not the mobile path; mobile will use URP. The open question is whether desktop also uses URP for consistency or HDRP for visual quality — decide during the spike.

## Validation gate

The web half of the spike is built — see `prototype/` and its `ACCESSIBILITY-TEST.md`, with results in `docs/playtests/2026-11-26-spike-web-layer.md`; its structural half is now covered automatically by `prototype/tests/spike-checks.mjs` (`docs/playtests/2026-11-27-spike-web-layer-automated.md`). **The accessible-UI half passed on 2026-11-26**: a screen reader read the permission table with its column headings, and Escape returned focus correctly.

**The Unity half is measured. The first host failed; the second passed.**

On 2026-11-26 an embedded Chromium surface rendered a live page inside Unity 6.6, at the cost of a Mono backend, a patched UniTask package, and deleted editor files. On 2026-11-27 the reader test was run: NVDA read `prototype/standalone.html` normally in Edge — with the mouse and with Tab — and said nothing at all inside Unity by either route, and keys were only forwarded once the pointer entered the Raw Image. Full record: `docs/playtests/2026-11-27-spike-unity-embedding.md`.

The follow-up test replaced the texture with a **real browser window** opened and positioned by the game (`unity/Scripts/ComputerBrowserWindow.cs`). **NVDA read the page normally inside that window**, which passes the accessibility condition. Full record: `docs/playtests/2026-11-27-spike-browser-window.md`; the comparison behind the choice is `docs/webview-evaluation.md`.

**Consequence:** the engine decision stands — Unity for the world, web for the simulated computer — and the container is a real browser window rather than an embedded texture. No plugin purchase is required, and the web layer is unchanged. Removing UnityWebBrowser also restores IL2CPP, which the Phase 7 mobile targets need.

1. A Unity HDRP interior with a walkable camera.
2. An embedded web page containing the Chapter 1 mock desktop, the folder Security dialog, and one terminal command.
3. Run with **NVDA on Windows** and **VoiceOver on macOS**, keyboard only.
4. Complete one checkpoint's worth of interaction without a mouse.
5. Record build size, memory, and input latency on a mid-range laptop.

**Pass:** both screen readers announce the dialog's fields, buttons, errors, and focus changes, and the keyboard path works end to end. **Fail:** the fallback is the web-first build (TypeScript plus Three.js or Babylon), which trades visual ceiling for accessibility certainty.

## Rejected options

- **Godot 4** — free and light, but no built-in screen-reader support; accessibility would be custom work on the platform where it matters most.
- **Unreal 5** — the strongest raw visuals, but heaviest for a text-dense game and the weakest macOS screen-reader story.
- **Web-first with Three.js only** — the best accessibility and cost, but a lower visual ceiling and you build the scene layer yourself. Retained as the fallback.
- **Godot with an embedded web view** — the hybrid idea without Unity's tooling or asset ecosystem.

## Open items

- Exact Unity LTS version at project start.
- Which embedded-browser component (Vuplex 3D WebView or an equivalent), and its licence.
- HDRP on desktop versus URP everywhere.
- The IPC contract between Unity and the web layer: state handoff, pause, save, and accessibility focus transfer.
- Target operating-system version, which the fidelity rule depends on (`Design/Chapter 1/Chapter-1-Design.md`, Simulation fidelity).
