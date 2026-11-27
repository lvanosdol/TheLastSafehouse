# Archive — do not copy into a project

Files here are kept as the record of a route the project no longer takes. They are **not** meant to be copied into `Assets/`.

| File | Why it is here |
|---|---|
| `LoadPrototypePage.cs` | The loader for the UnityWebBrowser route. It compiles only while the `dev.voltstro.unitywebbrowser` package is installed, so copying it into a project that has removed the package produces `CS0246: BaseUwbClientManager could not be found`. Superseded by `Scripts/ComputerBrowserWindow.cs`; the story is in `docs/webview-evaluation.md`. |

If you need any of these again, reinstall the package it depends on first — the procedure is in `docs/unity-setup.md` step 7.
