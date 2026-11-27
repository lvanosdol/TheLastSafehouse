# Handoff brief — Phase 2 vertical slice

Paste everything below the line as the first message of a fresh task.

---

## What this is

**The Last Safehouse** — a 3D story-driven IT/networking learning game for adult beginners. Seven chapters, written, in `Design/`. This task is **Phase 2: the Chapter 1 vertical slice** — Lesson 1 playable end to end.

**Repo:** `github.com/lvanosdol/TheLastSafehouse`, branch `main`, cloned to the workspace root. Current head is clean and pushed.

## Read these first, in this order

1. `docs/phase2-vertical-slice.md` — the plan you are executing: nine tasks with acceptance criteria.
2. `Design/Chapter 1/Chapter-1-Design.md`, section "Lesson 1: Meet and rebuild the computer" — the content: parts matching, the safety card, eleven assembly steps, an inspected checkpoint, four named diagnostics, and the boot result.
3. `docs/webview-evaluation.md` — why the browser host is a real window.
4. `docs/playtests/2026-11-27-spike-browser-window.md` — the host that works, and its costs.
5. `prototype/README.md` and `prototype/ACCESSIBILITY-TEST.md` — the accessibility rules the web layer already follows.

## Settled decisions — do not re-litigate

- **Unity 6.6 desktop, Mono backend, `.NET Framework` API level.** IL2CPP is deliberately unused: the host calls `Process.Start`, which IL2CPP does not support.
- **No third-party browser packages.** UnityWebBrowser was removed after measurement; the registry, the packages and the patched UniTask are gone.
- **Every control the player must operate lives in the web layer.** Unity supplies the room, camera and positional prompts only. Reason, measured: Unity UI is not exposed to screen readers, and neither is a texture-based webview. A real browser window is.
- **Host = `unity/Scripts/ComputerBrowserWindow.cs`.** Opens Edge/Chrome in `--app=` mode over the game window; `Open(page)` accepts a page name or URL; `Closed` fires when it shuts. Verified readable by NVDA.
- **Textured webviews are a dead end.** Do not reintroduce one.

## Current state

- Phase 1 complete: rendering proven, host proven, packages removed, project on Mono.
- `prototype/` — the accessible simulated desktop, `standalone.html` plus ES modules, and 69 automated DOM checks (`cd prototype && npm test`, needs `npm install` once).
- `unity/Scripts/ComputerBrowserWindow.cs` — the only Unity script; compiles clean.
- Nothing is half-finished; no uncommitted work.

## What to build

The nine tasks in `docs/phase2-vertical-slice.md`. Order matters: scene → move/look → approach-and-use → lesson page shell → parts matching → safety card → assembly with diagnostics → result beat → playtest.

Physics/art are placeholders: primitives and a bench-sized box are enough. The slice proves the loop, not the look.

## Conventions in this repo

- Markdown: plain, declarative prose; tables where they help; no filler.
- Every significant decision gets a dated row in `docs/decisions.md`.
- Test sessions get a report in `docs/playtests/YYYY-MM-DD-topic.md`, including what failed.
- Commits are small, with a body explaining the *why*; push to `main`.
- Docs that are superseded say so at the top rather than being deleted.

## How to validate work

- **Web layer:** `cd prototype && npm test` — 69 keyboard-driven checks over `standalone.html`; extend the harness for new pages rather than testing by eye.
- **Unity scripts:** no Unity here, so compile-check against stubs (a throwaway `net8.0` project in `/tmp` with a minimal `UnityEngine` shim and stubs for the APIs used). Say plainly in the summary what was verified by compilation versus by the user.
- **Accessibility:** keyboard-only first, then NVDA. Never mark a control "accessible" without one of those.

## First three actions

1. Read the four documents above; summarise the slice in five lines and confirm understanding with the owner.
2. Ask the owner for the current Game view of `Assets/Scenes/Workshop.unity` (they are building it now: floor, bench, chassis box, light, camera at 1.6 m).
3. Write `unity/Scripts/PlayerMove.cs` (WASD + mouse look, new Input System) and a bench trigger that calls `ComputerBrowserWindow.Open("lesson-1.html")` on **E**, then hand the owner exact steps to attach them.

Do not start the lesson page until tasks 1–3 run in the editor.
