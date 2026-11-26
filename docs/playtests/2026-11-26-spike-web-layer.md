# Spike test — accessible web layer

**Date:** 2026-11-26
**Tester:** project owner
**Build:** `prototype/standalone.html` (single file, 28,779 bytes, commit `e1e0ca5` or later)
**Purpose:** decide whether the in-game computer can be built as real DOM inside the game, per `docs/engine-decision.md`

## What was run

1. Loaded the page with a screen reader active.
2. Pressed **Test announcement** and confirmed the screen reader spoke the sentence.
3. Opened **Practice → Logs → sensor.log**, activated **View permissions**, and listened to the Security dialog.
4. Pressed **Escape** and checked where focus went.

## Results

| Check | Result |
|---|---|
| Screen reader reads a change made by the page | **Pass** — the test sentence was spoken |
| Simulated-computer notice is announced | Pass, from the test button |
| Security dialog announces its title | **Pass** |
| Permission table reads its column headings — Account, Read, Write, Role note | **Pass** |
| Escape closes the dialog | **Pass** |
| Focus returns to the control that opened the dialog | **Pass** |

No blocking findings. The permissions table reading with its headings is the specific result this spike existed to obtain.

## Defects found and fixed before the test

- Live regions and manual announcements both fired, so several messages would have been spoken twice.
- The skip link could not move focus to the desktop, because the target was not focusable.
- Closing a dialog announced "Close closed" rather than the dialog's name.

## Not yet tested

- The remaining steps of `prototype/ACCESSIBILITY-TEST.md`: file selection announcement, folder-change counts, the permission-denied dialog, terminal output, text-size controls, reduced motion.
- The exact screen reader and browser versions. Record them before treating this as the formal pass.
- Mobile screen readers (TalkBack, iOS VoiceOver).
- The same page inside the Unity shell, which is the second half of the spike.

## Next

Unity shell embedding: an HDRP interior with a walkable camera, this page in an embedded browser component, and the same reader checks across the boundary.

## Note

This report covers one tester's session on one machine. It confirms the approach is viable; it does not replace the formal pass with recorded versions and more than one tester.
