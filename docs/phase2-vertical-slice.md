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

**Task 4 done 2026-11-27:** `prototype/lesson-1.html` exists with the scaffolding, the eight-part guide and 28 automated checks (`cd prototype && npm test`), single-file because the host loads pages over `file://`. Tab order is asserted by the harness; the NVDA pass comes with task 9.
| 5 | Parts matching: eight parts to their purposes, with specific feedback and a free retry | Wrong answers name the part and the mistake; no penalty |
| 6 | Safety card: shown before assembly, dismissible, re-openable | Dialog semantics, Escape closes, focus returns |
| 7 | Assembly: eleven placement steps, validated by resulting state not order, with the four named diagnostics | Each diagnostic fires only for its own condition; result screen shows the POST block |
| 8 | Result and hand-off: `POWER: ON … WINDOWS: STARTING`, then "Workshop application: Not responding" | The lesson ends in the story beat, not a dead end |
| 9 | Slice playtest: keyboard only, NVDA, one tester, report written | `docs/playtests/` entry with pass/fail per task |

**Status 2026-11-27:** tasks 1–3 confirmed in the editor — see `docs/playtests/2026-11-27-workshop-first-run.md`. The click-by-click version for a first-time Unity user is `docs/workshop-walkthrough.md`.

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

## Editor steps for tasks 1–3 (2026-11-27)

`unity/Scripts/PlayerMove.cs` and `unity/Scripts/BenchInteraction.cs` are written and compile-checked against stubs. They are not confirmed in the editor yet; the steps below are what confirms them.

The same steps are written click-by-click for a first-time Unity user in `docs/workshop-walkthrough.md`. That version is the one to follow at the keyboard; this section is the reference.

### Before either script

1. **Window → Package Manager → Packages: Unity Registry**, install **Input System** if it is not already in the project.
2. **Edit → Project Settings → Player → Other Settings → Active Input Handling** = **Both** (or **Input System Package (New)**). Unity restarts.
3. Copy both scripts from `unity/Scripts/` into `Assets/Scripts/`.

No `.inputactions` asset is needed: both scripts read the keyboard and mouse directly, so there is nothing to wire in the Input Actions editor. If the Console reports `CS0246` naming `UnityEngine.InputSystem`, step 1 or 2 is not done.

### Task 1 — what the scripts assume the scene contains

| Object | Position | Scale | Notes |
|---|---|---|---|
| Floor | `(0, 0, 0)` | Plane, scale `0.8` → 8 m × 8 m | A Plane primitive is 10 m at scale 1 |
| Bench Top | `(0, 1, 2)` | `(1.6, 0.1, 0.8)` | Cube |
| Chassis | `(0, 1.25, 2)` | `(0.4, 0.4, 0.2)` | Cube, sits on the bench |
| Directional Light | default rotation | — | One is enough |
| Main Camera | child of Player | — | Local position `(0, 1.6, 0)`, rotation zero |

The bench front edge is at `z = 1.6`. Nothing in the scripts depends on the floor's size, only on the bench and the player's start.

### Task 2 — Player and walk

1. **GameObject → Create Empty**, name `Player`, position `(0, 0, -2)`, rotation zero.
2. **Add Component → Character Controller**, then set **Center** `(0, 0.9, 0)`, **Height** `1.8`, **Radius** `0.35`. The capsule now stands on the floor and the object's origin is at the player's feet.
3. Drag **Main Camera** onto `Player` in the Hierarchy. Set its **local** position to `(0, 1.6, 0)` and rotation to zero. The eye is at 1.6 m, which is what makes the bench read at human scale.
4. With `Player` selected, **Add Component → Safehouse → Player Move**.
5. Play. The pointer locks. Check, in order: **W** walks forward, **S** back, **A**/**D** sideways; the mouse turns and looks up and down; the **left** and **right arrows** turn without touching the mouse; **Escape** releases the pointer and the mouse no longer turns the view; clicking inside the Game view takes the pointer back. Walk to the bench and back without using the mouse.

If the Console says `[PlayerMove] The camera is not parented under the Player`, step 3 did not take and the view will not follow the body.

### Task 3 — Approach and use

1. **GameObject → Create Empty**, name `Bench Trigger`, position `(0, 0.9, 1.0)`, rotation zero.
2. **Add Component → Box Collider**: tick **Is Trigger**, set **Size** to `(2.6, 1.8, 1.6)`. That volume reaches from `z = 0.2` to `z = 1.8`, so it is entered a step before the bench stops the player.
3. Add **Computer Browser Window** to the same object. **Untick Open On Start** — otherwise Play opens a second window before the player has moved.
4. Add **Bench Interaction** to the same object. Its fields:
   - **Lesson Page**: `lesson-1.html` for the final check. Set `standalone.html` until task 4 writes the lesson page.
   - **Browser**: leave empty; it finds the component on the same object.
   - **Player**: leave empty; it finds the `Player` in the scene.
   - **Interact Key**: `E`.
   - **Prompt**: the object from the next step.
5. **GameObject → Create Empty**, name `Bench Prompt`, position `(0, 1.5, 1.1)`. **Add Component → Mesh → TextMesh**. Unity may offer to import the legacy font — accept it. Set **Text** to `Press E to use the workbench`, **Font Size** `64`, **Character Size** `0.08`, **Anchor** `Middle Center`, and a light **Color**. Leave its rotation at zero: the script turns it to face the player.
6. Drag `Bench Prompt` into the **Prompt** field and untick it in the Inspector so the scene starts without it.
7. Play, walk forward, and check: the prompt appears at the bench and turns to face you; **E** opens the browser window over the game; **W A S D** do nothing while it is open; closing the window with its own X returns you to the Workshop with the prompt back and **E** opening it again.

Expected Console lines: `[ComputerBrowserWindow] Opened …lesson-1.html`, then `[BenchInteraction] Opened lesson-1.html over the Workshop.`, then `[ComputerBrowserWindow] Browser window closed.` and `[BenchInteraction] Back in the Workshop. Press E to return to the bench.`

### What is verified, and by whom

| Check | How |
|---|---|
| Both scripts and `ComputerBrowserWindow.cs` compile at C# 9 against a UnityEngine and Input System shim | Compiler in this task; not a Unity build |
| Pointer lock, walking speed, arrow-key turning, trigger size, prompt readability | Needs Play mode on the owner's machine — nothing above is a claim about how it feels |
| `E` opens the page and `Closed` returns the player, with keyboard only | Play mode, then NVDA |
