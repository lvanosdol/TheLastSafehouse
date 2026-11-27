# Unity spike — glue for the embedded browser

The Unity project itself (`SafehouseSpike`) is **not** in this repository: `Library/`, `Temp/`, builds, and the licence are all machine-local and git-ignored. This folder holds only the pieces that have to be copied into it, so they can be reviewed and versioned alongside the prototype.

| File | What it is |
|---|---|
| `Scripts/LoadPrototypePage.cs` | Loads `StreamingAssets/standalone.html` into a UnityWebBrowser surface as a correct `file:///` URL, and waits for the engine to connect first |
| `sync-prototype.sh` | Copies `prototype/standalone.html` into the Unity project's `Assets/StreamingAssets/` |

## Use

```bash
./unity/sync-prototype.sh /path/to/SafehouseSpike
```

Then, in the Unity project:

1. Copy `Scripts/LoadPrototypePage.cs` into `Assets/Scripts/`.
2. Add it to the same GameObject as the UWB **Web Browser Basic** component.
3. Press Play. The Console prints the exact URL it loaded.

Leave **Use Local Server** unticked to load the page from `StreamingAssets` (the way a build works). Tick it to load `http://localhost:8000/standalone.html` from `python3 -m http.server` in `prototype/`, which is the quicker loop while editing the page.

## Requirements the script assumes

- UnityWebBrowser 2.2.8 via the VoltUPR registry: core, CEF engine, and the CEF native package for the platform.
- **Scripting Backend: Mono** — UWB launches a separate engine process with `System.Diagnostics.Process`, which IL2CPP does not support.
- **Api Compatibility Level: .NET Framework** — `.NET Standard 2.1` does not expose `System.Diagnostics.Process`.
- The browser component's **Engine** and **Input Handler** fields both assigned; `RawImageUwbClientInputHandler` throws if the input handler is null.

The full walkthrough, including the package IDs and the fields to set, is `docs/unity-setup.md` step 7. If you have not used Unity before, start with `docs/unity-walkthrough.md` instead — it is the same procedure written as ten click-by-click steps with a check after each one.
