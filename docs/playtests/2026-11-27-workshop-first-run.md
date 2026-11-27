# First end-to-end run — the bench opens the page

**Date:** 2026-11-27
**Tester:** project owner, in the editor (Unity 6000.6.11f1, Windows 11)
**Build:** `Workshop.unity` rebuilt during the session from an almost empty scene; `unity/Scripts/PlayerMove.cs`, `BenchInteraction.cs`, `ComputerBrowserWindow.cs`
**Purpose:** the gate for Phase 2 tasks 1–3 — walk to the bench, read the prompt, press **E**, have the page open in a real window, and get the game back when it closes
**Script followed:** `docs/workshop-walkthrough.md`

## Result

| Task | What was checked | Result |
|---|---|---|
| 1 | Floor, bench, chassis, light, camera at 1.6 m | **Pass** |
| 2 | WASD, mouse look, arrow-key turning, Escape releases the pointer | **Pass** |
| 3 | Trigger volume, prompt on approach, **E** opens `standalone.html` over the game, closing returns to walking | **Pass** |

Console on the passing run: one `Bench ready: page standalone.html, browser Computer, player Player.`, `Player at the bench.` on arrival, the host's `Opened …` and `Browser window closed.`, and `Back in the Workshop.` — in that order.

**Not run:** NVDA against the opened page (Phase 1 already proved the window readable; this run was about the game's side of the handoff), and a built player.

## What failed, and what it was

Every one of these cost time and is now answered in the walkthrough. None was a fault in the slice's design.

| Symptom | Cause |
|---|---|
| `CS1501: No overload for method 'Open' takes 1 arguments` | The project's `ComputerBrowserWindow.cs` was the Phase 1 copy, from before `Open(page)` existed |
| `The referenced script (Unknown) on this Behaviour is missing!` | Scripts downloaded as `BenchInteraction (1)1.cs`; Unity binds a component to a file whose name matches the class |
| Two `Bench ready` lines with different page names; `[PlayerMove] No camera found`; the player stopped mid-room | Components had been added to `Computer` (Character Controller, Player Move, Bench Interaction) because **Add Component applies to the selected object** |
| `Player at the bench.` one second after Play, and **E** working anywhere | `Bench Trigger` had been dragged under `Player`, so the volume travelled with the player |
| A prompt that would have rendered pink | The first prompt was a legacy `TextMesh`; the project renders with URP |
| The view stopped turning after a camera rebuild | The new camera was created but not parented under `Player` |
| The player fell through the floor | Never reproduced deterministically; the floor was rebuilt twice, and `PlayerMove` now names the condition and returns the player instead of falling forever |

## What the failures were really about

Two of the seven were code (a stale host file, a deprecated API call). The other five were **the document**: it assumed a reader who knew where Add Component lives, what an empty GameObject looks like, that a RectTransform labels its position `Pos X/Y/Z`, where TextMeshPro keeps its text, and which component belongs on which object. Each of those is now a named step or a troubleshooting row.

## What this changes

- Tasks 1–3 are done as far as the editor can prove. Task 9's playtest still has to be run by a tester with a screen reader, on the finished lesson.
- The lesson page must be a **single self-contained HTML file**, because the host opens it over `file://` and ES modules do not load there. Recorded in `docs/decisions.md`.
- No automated test covers the Unity glue. The compile check against stubs catches type errors; only Play mode catches wiring, which is why the walkthrough's Console lines matter.
