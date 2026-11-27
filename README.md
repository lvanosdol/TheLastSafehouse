# The Last Safehouse

A 3D, story-driven IT and networking learning game for adult beginners. Seven chapters teach computer basics, operating systems, files and permissions, programming, databases, networking, security, automation, troubleshooting, and digital literacy — each chapter ending in a boss and awarding one component of a seven-agent software project the player assembles.

**Status:** design complete for all seven chapters; implementation has not started. Engine chosen: **Unity**, with the in-game computer rendered as an embedded web UI. See [`docs/engine-decision.md`](docs/engine-decision.md).

## Where things are

| Path | What it holds |
|---|---|
| `Design/Chapter 1` … `Design/Chapter 7` | The authoritative design for each chapter — lessons, checkpoints, boss, rewards |
| `Design/The-Last-Safehouse-Design.md` | The campaign record: story, curriculum map, agent rewards, decision summary |
| `docs/engine-decision.md` | The engine choice, why, and what still has to be proven |
| `docs/roadmap.md` | Phase-by-phase plan |
| `docs/decisions.md` | Dated log of every significant decision |
| `docs/playtests/` | Playtest and spike reports |
| `docs/unity-walkthrough.md` | Beginner walkthrough: Unity play mode to the page inside the shell, one step at a time |
| `docs/webview-evaluation.md` | Why texture-based webviews cannot be read, what each alternative costs, and the test that decides |
| `docs/unity-setup.md` | Install walkthrough, UnityWebBrowser steps, and free browser-component options |
| `docs/playtests/2026-11-27-spike-unity-embedding.md` | The embedding test and its result: rendering passed, the reader inside Unity did not |
| `prototype/` | The accessible simulated computer, runnable in a browser |
| `unity/` | Glue for the Unity spike project: the page-loader script and the StreamingAssets sync script |
| `MARKDOWN-ACCESSIBILITY-AUDIT.md` | Latest audit of the documentation |

## Running the prototype

`prototype/standalone.html` is the whole thing in one file — open it in a browser. For the modular version:

```bash
cd prototype
python3 -m http.server 8000
```

## Licences

**Project licence:** proprietary, all rights reserved. See [`LICENSE`](LICENSE).

**Unity licence:** *not* stored in this repository, and it should not be. Unity's Personal seat is bound to a Unity ID and activated locally through the Unity Hub on each machine that builds the game. Cloning this repository does not grant access to any Unity licence, and building requires your own Unity account with an activated seat. Never commit Unity licence files, `.ulf` files, or account credentials here.
