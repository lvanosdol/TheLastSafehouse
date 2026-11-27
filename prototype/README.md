# Web layer prototype

The accessible half of the engine spike: the simulated computer, built as real HTML/CSS/JavaScript so screen readers and keyboard focus work as they do in a real application.

**Easiest start:** `standalone.html` in this folder is the whole prototype in one file. Download it and double-click it — no server, no installs.

This prototype exists to answer one question: **can a screen reader read the simulated desktop, and can the whole flow be completed by keyboard alone?** It is not the game. Unity will host it in an embedded browser; the Unity bridge is not written yet — `unity/` only loads the page into a browser surface.

## Run it

No build step and no dependencies. Serve the folder over HTTP (ES modules do not load from `file://`):

```bash
cd prototype
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Automated checks

The structural half of `ACCESSIBILITY-TEST.md` runs without a screen reader:

```bash
npm install   # once, installs puppeteer-core
npm test
```

It drives `standalone.html` in headless Chromium with the keyboard and asserts what a screen reader depends on: live-region text, focus order, modal focus trapping, table headers, accessible names, the denial dialog, terminal output, text-size clamping, reduced motion, and high contrast. It does not hear anything — speech, VoiceOver, and NVDA still need the manual script.

## What is here

- A simulated desktop with two folders from Chapter 1 (`Practice` and `Recovery`).
- A File Explorer window with a folder tree, a file list, and a details pane.
- A Properties dialog with a **Security** tab showing Allow and Deny per account.
- A permission-denial dialog for the read-only file in `Recovery`.
- A terminal that answers `dir`, `whoami`, and `help`, and rejects anything else by name.
- Text-size controls and a persistent "simulated" marker.
- `lesson-1.html` — the Chapter 1 workbench page: the eight parts with their purposes as a collapsible guide, keyboard-operable, with the same scaffolding as the desktop. The parts are read first, in a collapsible guide, then matched by dragging them onto their purposes — or from the keyboard, Enter to pick up, Tab to a purpose, Enter to place. Feedback names the part and the mistake, and retrying is free. The real-world safety rules sit in a note at the top of the page, visible before the first control rather than behind a dialog.
- `assembly.html` — the rebuild, on its own page: twelve parts, thirteen places, physical refusals with reasons, and the four faults a real machine shows (nothing at all, fans that blip without POST, memory detection error, no signal). The safety card, rebuild and result screen are added in later tasks.

## Accessibility rules this prototype follows

- Every control is reachable and operable by keyboard; nothing needs a drag or a precise pointer.
- Focus is always visible and always moves somewhere predictable.
- Changes are announced through a polite live region; errors through an assertive one.
- Status is written in text, never carried by colour alone.
- Windows are dialogs with a title, a close control, and focus trapped only while modal.
- `prefers-reduced-motion` removes animation; `prefers-contrast: more` and forced colours are respected.
- The whole surface is announced as simulated, once, on load.

## Deliberately not here yet

Unity, the 3D world, save/load, the IPC bridge, TypeScript tooling, and the other five chapters' tools. Production will use TypeScript and a bundler; this uses plain ES modules so it runs with nothing installed.
