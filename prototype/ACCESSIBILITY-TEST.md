# Spike accessibility test

Run this against `prototype/` before the engine decision is treated as final. It takes about twenty minutes and produces a pass or fail, not an opinion.

## Setup

```bash
cd prototype
python3 -m http.server 8000
```

Open `http://localhost:8000/` in Chrome or Edge. Run it three times: once with **NVDA on Windows**, once with **VoiceOver on macOS** (Safari), and once with no screen reader, keyboard only, monitor off if you can.

## The script

| # | Do this | Pass looks like |
|---|---|---|
| 1 | Load the page and wait two seconds | A polite announcement says the computer is simulated and nothing affects the real device. The visible marker is also present. |
| 2 | Press Tab once | The skip link appears and is readable. |
| 3 | Press Tab to reach the desktop icons, then Enter on **Practice** | A window opens, the screen reader reads its title, and focus is on the window heading. |
| 4 | Tab into the file table and open `Logs`, then `sensor.log` | The row's name, type, size, date, and read-only state are read. The selection announcement names all five. |
| 5 | Select `sensor.log` and activate **View permissions** | A dialog opens; the screen reader reads the title, the intro, and the table with **Account**, **Read**, **Write** and **Role note** as column headers. Each row is read with its account name first. |
| 6 | Tab to the last control and press Tab again | Focus wraps inside the dialog and never escapes to the page behind it. Escape closes the dialog and focus returns to the button that opened it. |
| 7 | Open **Recovery**, select `practice.cfg`, activate **Try to edit this file** | A dialog reads the denial, the file name, and the sentence explaining that a denial does not mean the file is damaged. |
| 8 | Open **Terminal**, type `dir`, run it; then type `bogus` | Output is announced as a log; the listing is readable line by line; the unknown command announces as an error and lists the available commands. |
| 9 | Use **A+** twice | Text grows, the announcement states the new percentage, and nothing overlaps or is cut off. |
| 10 | Enable reduced motion and reload | No animation runs; every state change still happens instantly. |

## Pass criteria

- Every step above completes **without a mouse**.
- Nothing is announced as "button" without its name, or as "unlabeled".
- No information is available only through colour.
- Focus never disappears, loops somewhere unexpected, or lands on an invisible element.
- The table is navigable row by row, and column headers are announced with the cells.

## If it fails

Record the step number, the screen reader and version, the browser, and what was actually announced. A failure at step 5 or 6 is decisive: the engine decision falls back to the web-first build. A failure at step 9 or 10 is a fix, not a rejection.
