# Spike test — automated DOM checks on the web layer

**Date:** 2026-11-27
**Tester:** automated (`prototype/tests/spike-checks.mjs`)
**Build:** `prototype/standalone.html`
**Environment:** Chromium 156.0.8078.73, headless, on Linux; Node 24.15.0; puppeteer-core 23
**Purpose:** cover the structural half of `prototype/ACCESSIBILITY-TEST.md` that the 2026-11-26 session did not run, and catch regressions before the Unity embedding step.

## What this is not

There is no speech in this environment. NVDA, VoiceOver, JAWS, and the quality of what a reader actually says are **not** tested here, and a green run does not replace the manual script. What it does prove is that the DOM a reader consumes is correct: live-region text arrives once, focus lands and returns where it should, dialogs trap and release focus, tables carry headers, every control has a name, and the accessibility media queries take effect.

## What was run

```bash
cd prototype
npm install
npm test
```

68 checks, driven with the keyboard (`Tab`, `Shift+Tab`, `Enter`, `Escape`) against `standalone.html` served over local HTTP.

| Area | Checks | Result |
|---|---|---|
| Load announcement, visible marker, mirror | 3 | Pass |
| Structure: one `h1`, no skipped levels, every control named, nothing focusable inside `aria-hidden`, skip link | 5 | Pass |
| Test announcement, no duplicate announcement | 2 | Pass |
| Skip link moves focus to the desktop | 1 | Pass |
| Window opens by keyboard, heading focused, labelled by heading | 4 | Pass |
| Folder change and file selection announcements, `aria-current`, details group | 6 | Pass |
| File with no per-file permissions: dialog named for that file, no blank table | 5 | Pass |
| Recovery file Security table: caption, four column headings, row headers, Allow/Deny, explanatory text | 7 | Pass |
| Focus trap forwards and backwards, Escape closes, focus returns, close announcement | 5 | Pass |
| Denial dialog: names the file, explains it is not damage, assertive region, focus return | 5 | Pass |
| Terminal: labelled log, reachable by Tab, `dir`, `whoami`, unknown command | 6 | Pass |
| Text size: 124 percent, announcement, no horizontal overflow, clamps at 87 percent | 4 | Pass |
| Reduced motion, high contrast, no console errors | 3 | Pass |

## Defects found and fixed

1. **The permissions dialog named the wrong file.** Selecting `sensor.log` and choosing **View permissions** opened a dialog titled `practice.cfg — Properties` while its own body said "Permissions for sensor.log". Any file selection produced that title. Fixed: the title is built from the selected file.
2. **Files without per-file permissions showed a table of "Not listed".** For any file except `practice.cfg`, the Security table claimed every account was "Not listed" and the dialog asserted "Your account can read this file. It cannot write to it" — which contradicted the file list for a writable log file. Fixed: those files now say plainly that this simulation does not model per-file permissions, and no table or read-only claim is shown.
3. **`prefers-contrast: more` was documented but not implemented.** `prototype/README.md` claimed it was respected; no such media query existed. Fixed by adding one to `standalone.html` and `styles/controls.css`, now covered by a check.

Both copies of the page (the modules under `scripts/` and the inline bundle in `standalone.html`) were fixed together.

## Still untested

- Every spoken result: NVDA and VoiceOver, and whether the announcement wording is understandable at speed.
- VoiceOver on macOS with Safari, in full.
- Colour contrast ratios measured rather than asserted (the high-contrast palette is white on black, but the default palette has not been measured).
- 150 percent text size (the run stops at 124 for overflow, then checks the clamp at the floor).
- The same page inside Unity, which is the second half of the spike.

## Next

`docs/unity-embedding-run-sheet.md`: build the surface, load the page, and repeat these same checks with a reader attached.
