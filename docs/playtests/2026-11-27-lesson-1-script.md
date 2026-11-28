# Playtest script — Chapter 1, Lesson 1 (v1)

**Written:** 2026-11-27
**For:** task 9 of `docs/phase2-vertical-slice.md` — keyboard only, then NVDA, one tester, a written report
**What it tests:** that a beginner can get from the Workshop bench to a running computer without a mouse, and that a screen reader says what the page is doing at every turn.
**What it does not test:** sound, art, save/load, or anything after the Lesson 1 result.

Run it twice: **Run A** with the monitor on and no screen reader, **Run B** with NVDA and Speech Viewer open. Run A proves the mouse is never needed. Run B proves the words arrive.

Two ways to reach the pages. Use whichever is easier, and say which you used:

- **In the game:** Play in Unity, walk to the bench with **W** and the **arrow keys**, press **E**. This also tests the hand-off, which the browser link does not.
- **In the browser:** <https://lvanosdol.github.io/TheLastSafehouse/prototype/lesson-1.html>

Do not fix anything during a run. Write it down and keep going — a half-fixed run hides the next fault.

## Before you start

| | |
|---|---|
| Screen reader | NVDA, with **Speech Viewer** open (NVDA menu → Tools → Speech Viewer) |
| Browser | Edge or Chrome, maximised, window at least 1280 × 720 |
| Game | Unity Play mode, if testing the hand-off |
| Something to write on | This file, or a copy of the report template at the end |

**One rule:** don't use the mouse. If you reach for it, that is a finding — note the step.

## Run A — keyboard only, no screen reader

| # | Do this | Pass looks like |
|---|---|---|
| A1 | In the game: walk to the bench with **W**, turn with the **arrow keys**, press **E** | The prompt appears as you approach, the page opens over the game, and the pointer is free |
| A2 | Press **Tab** once | A skip link appears at the top left |
| A3 | **Tab** through the page | Every stop shows a visible focus outline, and nothing is skipped that you needed |
| A4 | On the safety note, press **Enter** | The note folds away; press **Enter** again and it comes back |
| A5 | Open three parts with **Enter** | Each opens and closes without losing your place |
| A6 | Pick up a part with **Enter**, **Tab** to a purpose, **Enter** to place it | The purpose shows "Matched: …" and the part leaves the bench |
| A7 | Put two parts in the wrong places and press **Check my answers** | Each wrong purpose says what is wrong; nothing is locked; you can fix both |
| A8 | Fix them, check again, then follow the link to the build | The matching reports all eight matched, and the build page opens |
| A9 | On the build, try the cooler first, then a processor onto the memory slots | Both are refused with a reason, and nothing is misplaced |
| A10 | Build it completely, closing the clips, switching the supply on, pressing the button | The POST block appears, then **WORKSHOP APPLICATION: NOT RESPONDING**, then the flicker line |
| A11 | Follow the link back to the lesson | It returns, with the lesson still usable |
| A12 | On either page, press **A+** twice | Text grows, nothing overlaps or is cut off, and the last line is still readable |

## Run B — with NVDA

Start NVDA before opening the page. Read the Speech Viewer, not just the sound, so you can quote what was said.

| # | Do this | Pass looks like |
|---|---|---|
| B1 | Load the lesson page | Within a second: a polite announcement that the workbench is simulated, the safety rules are in a note, and there are eight parts to meet |
| B2 | Press **Tab** once | "Skip to the workbench, link" |
| B3 | **Tab** to the safety note and press **Enter** | "Safety note collapsed" is spoken, and the state is announced as collapsed |
| B4 | **Tab** to the first part and press **Enter** | The part's name, then its purpose, where it connects and one thing worth knowing — each read as separate lines, not one run-on |
| B5 | **Tab** to a part in the matching, press **Enter** | "<part> picked up. Choose the purpose it belongs to, then press Enter." |
| B6 | **Tab** to a purpose and press **Enter** | The purpose it was matched to is spoken, and focus stays on that purpose |
| B7 | Put one part somewhere wrong and press **Check my answers** | The summary says how many are right and which part is wrong; the wrong purpose, when tabbed to, reads "Not yet. That is <part>'s job…" |
| B8 | Solve all eight and check | "All 8 matched…", focus lands on the summary, and the rebuild link is reachable by Tab |
| B9 | On the build page, try the cooler first | The refusal is spoken as an error, and it names the processor |
| B10 | Press the power button with the switch off | "Nothing happens. No fans, no lights." spoken as an error, with the no-response line visible |
| B11 | Finish the build and press the power button | Each POST line is readable, the not-responding line is read, and the flicker sentence is read |
| B12 | Anywhere: press **A+** twice | The new size is announced, and no text runs off the side of the window |

## Pass criteria

- Every step completes **without a mouse**.
- No control is announced as "button" with no name, or as "unlabeled".
- Every state change the game makes is either spoken or visible in text — never colour alone.
- Focus never disappears, never lands on something invisible, and never traps you except inside a dialog.
- Nothing overlaps or is clipped at 124% text size.

## Report template

Copy this into `docs/playtests/YYYY-MM-DD-lesson-1.md` and fill it in.

```markdown
# Lesson 1 playtest — <YYYY-MM-DD>

**Tester:**
**Run:** A (keyboard, no reader) / B (NVDA, version …)
**Reached the pages via:** the game / the browser link
**Environment:** Windows …, Edge/Chrome …, NVDA …, 1280x720

## Results

| # | Expected | What actually happened | Pass/Fail |
|---|---|---|---|
| A1 | | | |
| A2 | | | |
| A3 | | | |
| A4 | | | |
| A5 | | | |
| A6 | | | |
| A7 | | | |
| A8 | | | |
| A9 | | | |
| A10 | | | |
| A11 | | | |
| A12 | | | |
| B1 | | | |
| B2 | | | |
| B3 | | | |
| B4 | | | |
| B5 | | | |
| B6 | | | |
| B7 | | | |
| B8 | | | |
| B9 | | | |
| B10 | | | |
| B11 | | | |
| B12 | | | |

## What failed

Step number, what was announced or shown, and what you expected. One line each.

## Beginner's view

Where you hesitated, what you would have done next without being told, and whether the
build felt like a computer or like a quiz.

## Fixes, in priority order

1.
```


## How to judge a failure

| Kind of failure | What it means |
|---|---|
| A step could not be done without the mouse | **Serious.** The slice's promise is keyboard only |
| NVDA read nothing where the script expects speech | **Serious.** It is the reason the page exists |
| A message was read but made no sense | A wording fix, not a design fix |
| Text clipped or overlapping at 124% | A fix before release, not a redesign |
| The build felt like a quiz rather than a build | Worth a conversation about the interaction, not a bug |

A failure at B5, B6, B9 or B10 is decisive for this slice: those are the four places where the accessible path and the teaching path meet.
