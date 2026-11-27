# Phase 2 — Vertical slice: Chapter 1, Lesson 1

**Started:** 2026-11-27
**Goal:** Lesson 1 playable end to end — the Workshop, a walkable camera, the bench, and the "Assemble and boot" checkpoint — with every control operable by keyboard and readable by a screen reader.
**Source of truth for content:** `Design/Chapter 1/Chapter-1-Design.md`, "Lesson 1: Meet and rebuild the computer".

## The decision that shapes the slice

**Every control and every piece of text the player must act on lives in the web layer.** The Unity scene supplies the world, the camera, the sense of place, and positional prompts; it never becomes the only route to information.

The reason is the one this project already proved: Unity's own UI is not exposed to screen readers, and a texture-based webview is not either (`docs/webview-evaluation.md`). A real browser window is. So the bench interaction is an HTML page, and the 3D Workshop is what the player is standing in when they open it.

For Lesson 1 that means: 3D bench as the thing the player approaches, and an accessible "workbench" page where parts are selected, placed, and inspected. The design's "collapsible parts-and-purpose guide" is a panel on that page.

## Tasks, in order

| # | Task | Done when |
|---|---|---|
| 1 | Workshop scene: floor, walls, bench, chassis placeholder, lighting, camera at standing height | Play shows a bench at human scale, lit, no warnings |
| 2 | Move and look: WASD plus mouse look, Escape releases the pointer | Player can walk to the bench and back |
| 3 | Approach and use: a trigger volume with a prompt, **E** opens the lesson page, closing it returns to the game | Keyboard only, no mouse click required |
| 4 | Lesson page shell: `prototype/lesson-1.html`, same accessibility scaffolding as the prototype (skip link, polite and assertive live regions, focus rules, text size, simulated marker) | Automated checks pass on it; Tab order sound |
| 5 | Parts matching: eight parts to their purposes, with specific feedback and a free retry | Wrong answers name the part and the mistake; no penalty |
| 6 | Safety card: shown before assembly, dismissible, re-openable | Dialog semantics, Escape closes, focus returns |
| 7 | Assembly: eleven placement steps, validated by resulting state not order, with the four named diagnostics | Each diagnostic fires only for its own condition; result screen shows the POST block |
| 8 | Result and hand-off: `POWER: ON … WINDOWS: STARTING`, then "Workshop application: Not responding" | The lesson ends in the story beat, not a dead end |
| 9 | Slice playtest: keyboard only, NVDA, one tester, report written | `docs/playtests/` entry with pass/fail per task |

## Explicitly not in the slice

- Lessons 2–7 and the Restoration boss.
- The split-screen Learn & Try layout — that belongs to the lessons that use the simulated desktop (Windows, files, accounts, protection, software). Lesson 1 is the bench-only case.
- Save and load, the Unity↔page IPC bridge, real 3D art, audio.
- Handing completion back to Unity. The slice proves the lesson runs; wiring the result into Unity state is the next slice's first task.

## First three tasks in Unity, concretely

1. **Scene.** New scene `Assets/Scenes/Workshop.unity`. Add a **Plane** scaled to 8×8 as the floor, a **Cube** at `(0, 1, 2)` scaled `(1.6, 0.1, 0.8)` as the bench top, and a **Cube** on it scaled `(0.4, 0.4, 0.2)` as the chassis placeholder. One **Directional Light**, default settings. A **Main Camera** at `(0, 1.6, -2)` looking forward — that is standing height, which is what makes the room read as human-sized.
2. **Move and look.** Add a `CharacterController` to a new empty `Player` object at `(0, 0.9, -2)`, move the camera inside it at `(0, 0.7, 0)`. Movement script to come with task 2's code.
3. **Approach and use.** A **Box Collider** with *Is Trigger* in front of the bench, radius about 1.5 m, and a prompt that appears while inside it. `ComputerBrowserWindow.Open("lesson-1.html")` on **E**; the `Closed` event returns the game to walking.

Nothing in those steps depends on a package. The page is the only part that needs writing next, and it reuses the prototype's accessibility helpers.
