# Unity spike — glue for the embedded browser

The Unity project itself (`SafehouseSpike`) is **not** in this repository: `Library/`, `Temp/`, builds, and the licence are all machine-local and git-ignored. This folder holds only the pieces that have to be copied into it, so they can be reviewed and versioned alongside the prototype.

| File | What it is |
|---|---|
| `Scripts/ComputerBrowserWindow.cs` | Opens the page in a **real** Edge/Chrome app-mode window pinned over the game view, and returns focus to Unity when it closes. This is the accessible host. |
| `Archive/LoadPrototypePage.cs` | The old loader for the UnityWebBrowser surface. **Do not copy it into a project without that package** — it will not compile. See `Archive/README.md`. |
| `sync-prototype.sh` | Copies `prototype/standalone.html` into the Unity project's `Assets/StreamingAssets/` |

## Use

```bash
./unity/sync-prototype.sh /path/to/SafehouseSpike
```

Then, in the Unity project:

1. Copy `Scripts/ComputerBrowserWindow.cs` into `Assets/Scripts/`.
2. Add it to any GameObject, and press Play. The page opens in its own window.
3. Call `Open()` / `Close()` from the interaction that seats the player at the computer.

`sync-prototype.sh` is the only step that needs a shell; on Windows it is just as easy to copy `prototype/standalone.html` into `Assets/StreamingAssets/` in File Explorer.

## What the host assumes

- Windows, with Edge or Chrome installed. Windows 11 ships Edge.
- `Assets/StreamingAssets/standalone.html` present.
- Nothing else: no package and no registry. **Mono is still required**, but for a different reason now: `Process.Start` opens the browser, and IL2CPP does not support `System.Diagnostics.Process`. Desktop stays on Mono; a player build works with Mono.

The full walkthrough, including the package IDs and the fields to set, is `docs/unity-setup.md` step 7. If you have not used Unity before, start with `docs/unity-walkthrough.md` instead — it is the same procedure written as ten click-by-click steps with a check after each one.
