# The Last Safehouse — Development Roadmap

> Owned by the **Planner** agent (read-only: it drafts here in chat, the Game Mentor saves).
> Updated as milestones are confirmed. Nothing here is final until the owner approves it.

## Phase 0 — Design (complete)

The campaign target is seven chapters. Each chapter awards one development-agent component, with an upgraded version for a perfect boss finish; the finished seven-agent app is offered for download only after the Chapter 7 boss.

### Chapter designs

- [x] Chapter 1 — seven focused lessons and the Restoration boss (approved working direction)
- [x] Chapter 2 — six programming lessons and the boss direction
- [x] Chapter 3 — six database lessons and the Registry Investigation boss
- [x] Chapter 4 — seven networking lessons and The Missing Archive Section boss
- [x] Chapter 5 — five condensed security lessons and The Security Lockdown boss
- [x] Chapter 6 — six automation lessons and The Recovery Cascade boss, ending in the Echo and Mara reveals
- [x] Chapter 7 — four lessons, the six-stage final boss, the ending decision, and the three endings (individual ending scenes remain to be written)
- [x] Final design pass: resolve every chapter's open implementation questions with the owner before implementation is treated as final

### Design records and decisions

- [x] Decision log kept current in `docs/decisions.md`
- [x] Split-screen Learn & Try workspace defined and applied to every applicable lesson
- [x] Standalone practice activities removed; each checkpoint is the guided practice and assessment point
- [x] One export path thread carried through Chapter 6's records and into Chapter 7
- [x] Refresh `MARKDOWN-ACCESSIBILITY-AUDIT.md`; it now covers all seven chapters, the master record, the superseded archive, and `docs/`
- [x] Record the engine decision in `docs/engine-decision.md` (Game Mentor)

## Phase 1 — Project setup (complete 2026-11-27)

- [x] Engine evaluation and decision — Unity with an embedded web UI for the in-game computer (`docs/engine-decision.md`), pending the accessibility spike
- [x] Install required software — Unity Hub, a Personal licence, an LTS editor, and Windows build support (`docs/unity-setup.md`)
- [x] Scaffold the fresh game project (`SafehouseSpike`)
- [x] Verify the empty project runs — the template scene plays in the Game view
- [x] Show `prototype/standalone.html` inside the Unity shell — rendered on 2026-11-27 with UnityWebBrowser 2.2.8 (Unity 6.6, Mono); configuration recorded in `docs/playtests/2026-11-27-spike-unity-embedding.md`
- [x] Repeat the reader checks across the Unity boundary — **failed on the embedded surface:** NVDA reads the page in Edge and said nothing inside Unity, and keys were gated on the pointer. Record in `docs/playtests/2026-11-27-spike-unity-embedding.md`
- [x] Test a real browser window as the host — **passed** on 2026-11-27: NVDA read the page inside the window Unity opened (`docs/playtests/2026-11-27-spike-browser-window.md`)
- [ ] Wire the seating interaction: `Open()` when the player sits at the computer, `Close()` on standing up, and handle `Closed` — this is the first task of Phase 2
- [x] Remove UnityWebBrowser from the project — removed 2026-11-27; the project now carries no third-party browser packages. IL2CPP is deliberately unused: the host needs `System.Diagnostics.Process`, which IL2CPP does not support, so desktop stays on Mono and mobile will need its own host

## Phase 2 — Vertical slice (Chapter 1, first lesson) — current

- [x] Break the Chapter 1 design (`Design/Chapter 1/Chapter-1-Design.md`) into buildable tasks — 2026-11-27, nine tasks in `docs/phase2-vertical-slice.md`
- [ ] Workshop scene and interaction skeleton — the walk and bench scripts are written and compile-checked; the scene and the attach steps are waiting on the owner's editor
- [ ] Split-screen workspace prototype with a simulated-only Try pane
- [ ] Lesson 1 plus its checkpoint working end to end
- [ ] Playtest report and fixes

## Phase 3 — Chapter 1 complete

- [ ] Lessons 2–7
- [ ] Restoration boss, perfect-run rules, and the Project Planning Agent reward
- [ ] Accessibility pass against the chapter's stated requirements
- [ ] Playtest report and fixes

## Phase 4 — Chapters 2–3

- [ ] Chapter 2 lessons and boss (30-minute timer, binary and word-placement puzzle)
- [ ] Chapter 3 lessons and the Registry Investigation boss
- [ ] Playtest reports and fixes

## Phase 5 — Chapters 4–6

- [ ] Chapter 4 networking lessons and archive boss
- [ ] Chapter 5 security lessons and lockdown boss
- [ ] Chapter 6 automation lessons and the Recovery Cascade boss, including the reveal scene
- [ ] Playtest reports and fixes

## Phase 6 — Chapter 7 and endings

- [ ] Chapter 7 ending scenes — the three outcomes, their shared guarantees, and the final scene rules are designed (Chapter 7); the individual scenes are not written
- [ ] Implement the three ending frameworks and the guarantees they share
- [ ] Campaign-wide playtest against the checkpoint, hint, retry, and perfect-bonus rules

## Phase 7 — The finished app

- [ ] Assemble the earned standard or upgraded components into the seven-agent app
- [ ] Safety, security, privacy, compatibility, and reliability work for real-world use
- [ ] Offer the completed app for download after the Chapter 7 boss
- [ ] Decide how the shared version-control feature is implemented

## Cross-cutting before release

- [ ] Mobile versions, with environment setup simulated rather than typed
- [ ] Keyboard, screen reader, caption, and reduced-motion pass across all seven chapters
- [ ] Save-state review for every tool, lesson checkpoint, and boss stage
- [ ] Confirm no exercise can touch a real computer, account, or network

*Ask the Planner to expand any phase into detailed steps.*
