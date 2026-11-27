# Unity setup for the spike

> **Superseded on 2026-11-27, except steps 1–6.** The project hosts the simulated computer in a real browser window now (`unity/Scripts/ComputerBrowserWindow.cs`), because texture-based webviews expose nothing to a screen reader — see `docs/webview-evaluation.md` and `docs/playtests/2026-11-27-spike-browser-window.md`. Step 7 below is kept as the record of the UnityWebBrowser route that was tried and measured, not as the plan to follow.

**Date:** 2026-11-26
**Goal:** get Unity running and an empty project open, so the Chapter 1 web prototype can be embedded and tested.
**Decision it serves:** `docs/engine-decision.md`

macOS support is optional for this spike. Windows alone is enough to test the embedded-UI idea.

## What you will install

| Item | Link | Notes |
|---|---|---|
| Unity ID (free account) | https://id.unity.com/ | Needed to activate a free Personal licence |
| Unity Hub | https://unity.com/download | The launcher that installs and manages editors |
| Unity Editor, current LTS | offered inside the Hub | Choose the release marked **LTS**, not a Tech Stream |
| Older editor versions | https://unity.com/releases/editor/archive | Only if a specific version is needed |
| Licence and pricing terms | https://unity.com/pricing | Confirm the Personal revenue cap before release |

## Step 1 — Create a Unity ID

1. Open https://id.unity.com/ and create an account, or sign in with Google or Apple.
2. Verify the email address; the Hub will not activate without it.

## Step 2 — Install Unity Hub

1. Download the Hub from https://unity.com/download for your operating system.
2. Install it with the default options and open it.
3. Sign in with the Unity ID from step 1.

## Step 3 — Activate a free licence

1. In the Hub, open **Settings → Licences** (older versions: the gear icon → Licences).
2. Choose **Add → Get a free personal licence**.
3. Wait for it to show **Active**. If it fails, sign out and back in, then retry.

## Step 4 — Install an editor

1. Open the **Installs** tab and choose **Install Editor**.
2. Pick the release marked **LTS**. Avoid anything labelled Tech Stream or Beta.
3. Under **Add modules**, tick:
   - **Windows Build Support (Mono)** — so the game can be built for Windows *and* run the embedded browser. Do not build with IL2CPP: UnityWebBrowser starts a separate engine process through `System.Diagnostics.Process`, which IL2CPP does not support, so the browser cannot work in an IL2CPP build.
   - **Windows Build Support (IL2CPP)** — optional, and only for later work that does not use the embedded browser.
   - **Documentation** — optional but useful.
   - **Mac Build Support (Mono)** only if macOS is still wanted.
   - Leave Android and iOS unticked for now.
4. Install. This is a large download; expect several gigabytes and some time.

## Step 5 — Create the spike project

1. **Projects → New project**.
2. Template: choose **3D (HDRP)** for the best-looking interiors, or **3D (URP)** if the machine has a modest graphics card, is a laptop with integrated graphics, or the editor reports unsupported hardware. URP still looks good and runs far better on weak hardware.
3. Name it `SafehouseSpike`, choose a short path with no spaces, and create it.
4. First open is slow: Unity compiles shaders and imports the template. Let it finish.

## Step 6 — Prove the project runs

1. Open the sample scene that comes with the template.
2. Press the **Play** button at the top.
3. You should see the scene in the Game view and be able to look around if the template includes a camera.
4. Press **Play** again to stop. If that works, the install is complete.

## Free browser components for the embedded computer

The paid option is the easiest. Free ones exist, and dropping macOS widens the field.

| Option | Cost | Platforms | Link | Trade-off |
|---|---|---|---|---|
| **Vuplex 3D WebView** | Paid | Windows, macOS, Android, iOS, WebGL | https://developer.vuplex.com/webview/overview | Best supported, least work; costs money |
| **UnityWebBrowser** | Free (MIT) | Windows, Linux, macOS | https://github.com/Voltstro-Studios/UnityWebBrowser | Chromium-based; self-contained but adds a large amount to the build, and draws off-screen, so a screen reader gets no accessible tree from it |
| **WebView2 wrapper** (Microsoft Edge runtime) | Free | Windows | https://learn.microsoft.com/microsoft-edge/webview2/ | Small build because Edge is already on Windows; needs a native plugin, and you write the glue |
| **gree/unity-webview** | Free (MIT) | Android, iOS, macOS | https://github.com/gree/unity-webview | Mobile-first; not a Windows desktop answer |
| **ZFBrowser / Embedded Browser** | Free source, historically paid | Windows, macOS | https://github.com/ZenFulcrum/EmbeddedBrowser | Check current licence and maintenance before relying on it |

**Recommendation for the spike:** **WebView2** if you are comfortable adding a small native plugin, because it keeps the build small, uses the Edge runtime already installed on Windows 10 and 11, and draws into a real window that assistive technology can attach to. **UnityWebBrowser** if you want something self-contained that does not depend on a system runtime and can accept a much larger build — but see *What UnityWebBrowser cannot prove* below before treating it as the answer, because it renders off-screen and publishes no accessible tree.

**Caution:** these projects change. Check the last commit date and open issues before committing to one, and confirm the licence terms yourself rather than trusting this table.

## Step 7 - Embed the prototype

This is the step that usually stalls. If you have not used Unity before, follow `docs/unity-walkthrough.md` instead — it is this section, one click at a time, with a "you should see" check after every step. What follows is the same procedure in reference form, for **UnityWebBrowser 2.2.8** (MIT, current release at the time of writing), checked against its published docs and source on 2026-11-27. The paid Vuplex route has a shorter version of the same four moves: install, add the component, assign an engine, give it a URL.

### 7a - Install three packages, not one

UnityWebBrowser is not on Unity's default registry, and it is split into a core package, an engine package, and a per-platform native package. Missing the native one is the most common failure.

1. Add its registry: **Edit → Project Settings → Package Manager → Scoped Registries**, then add

   | Field | Value |
   |---|---|
   | Name | VoltUPR |
   | URL | `https://upr.voltstro.dev` |
   | Scope(s) | `dev.voltstro`, `org.nuget`, `com.cysharp.unitask` |

   The two extra scopes are not optional: the core package depends on `org.nuget.voltrpc` and `com.cysharp.unitask`, which the same registry mirrors. Without them the install stops with an invalid-dependencies error.

2. **Window → Package Manager → My Registries**, and install all three:

   | Package | ID |
   |---|---|
   | Unity Web Browser (core) | `dev.voltstro.unitywebbrowser` |
   | Unity Web Browser CEF Engine | `dev.voltstro.unitywebbrowser.engine.cef` |
   | Unity Web Browser CEF Engine (Windows x64) | `dev.voltstro.unitywebbrowser.engine.cef.win.x64` |

   On Linux or macOS, use `…engine.cef.linux.x64`, `…engine.cef.macos.x64`, or `…engine.cef.macos.arm64` instead of the Windows package. The native package holds the actual `UnityWebBrowser.Engine.Cef` binaries; without it, Play mode fails with *“The engine did not get ready within engine startup timeout!”*

### 7b - Two Player settings that break it silently

**Edit → Project Settings → Player → Other Settings**:

- **Scripting Backend: Mono.** UnityWebBrowser does not support IL2CPP because it launches a separate process with `System.Diagnostics.Process`. This only bites in a build, not in Play mode, which is why it is easy to miss.
- **Api Compatibility Level: .NET Framework**, not *`.NET Standard 2.1`*. The standard profile does not expose `System.Diagnostics.Process` at all.

### 7c - Build the surface

1. Hierarchy → right-click → **UI → Canvas** (Screen Space - Overlay).
2. Right-click the Canvas → **UI → Raw Image**, and stretch it to the frame the computer should occupy.
3. With the Raw Image selected: **Add Component → UWB → Web Browser Basic**.
4. In that component's **Browser Client**, fill in:

   | Field | Value |
   |---|---|
   | Engine | `Cef Engine Configuration`, from Packages → Unity Web Browser CEF Engine → Resources |
   | Initial Url | see 7d |
   | Resolution | 1280×720, or whatever matches the Raw Image |
   | Communication Layer | `TCP Communication Layer`, from Packages → Unity Web Browser → Resources |
   | Input Handler | `Old Input Handler`, from Packages → Unity Web Browser → Resources |
   | Engine Startup Timeout | `10000` for the first runs; the engine is slow to start cold |

   `Communication Layer` sits under **IPC Settings** inside Browser Client and defaults to *None*. Leaving it empty produces a `NullReferenceException` at `WebBrowserClient.Init()` — the screen goes flat white and no engine process starts.

   The **Input Handler** slot is the one that fails loudly rather than quietly: leave it empty and Play mode stops with `NullReferenceException: The input handler is null!` If the project uses the new Input System, pick `Input System Handler` from the same folder instead, or set **Player → Active Input Handling** to **Both** — the old handler reads `UnityEngine.Input`, which throws while the Input System package is the only active handler.

### 7d - Point it at the page

`Initial Url` takes a **URL**, not a file path. A bare `C:\Games\SafehouseSpike\Assets\StreamingAssets\standalone.html` is treated as a search term and loads a blank page; the scheme, the three slashes, and the forward slashes all matter.

**Quickest first success**, which removes the path question entirely:

```bash
cd prototype
python3 -m http.server 8000
```

then set `Initial Url` to `http://localhost:8000/standalone.html` and press Play. If you want the plainest possible control test, use `https://example.com` instead: it is a white page with a large "Example Domain" heading, so it cannot be mistaken for a blank surface. If example.com loads, the browser and the render path work and only your page's URL is wrong.

**For anything that has to ship**, the page loads from `StreamingAssets` as a local file:

```bash
./unity/sync-prototype.sh /path/to/SafehouseSpike
```

which copies `prototype/standalone.html` into `Assets/StreamingAssets/`. The matching URL is

```
file:///C:/Users/you/SafehouseSpike/Assets/StreamingAssets/standalone.html
```

Hand-writing that, and keeping it correct between editor and build, is needless work, so `unity/Scripts/LoadPrototypePage.cs` generates it at runtime:

1. Copy the script into `Assets/Scripts/`.
2. Add it to the same GameObject as the browser component.
3. Leave **Use Local Server** unticked for the build; tick it to use the http URL above while iterating.

On Play it waits for the engine process to connect, then loads the page and logs the exact URL to the Console. It waits because `browserClient.LoadUrl()` throws `UwbIsNotConnectedException` if it is called before the engine reports ready.

`standalone.html` needs no changes: it is one file with one inline classic script, no modules and no fetches, so `file://` is fine. The modular `prototype/index.html` is not — its ES modules require the http server.

### 7e - What success looks like

- One to three seconds of flat colour, then the simulated desktop.
- A `UnityWebBrowser.Engine.Cef` process appears alongside the editor while playing.
- Pressing Play again disposes it; a leftover process means a previous run did not shut down cleanly.

### 7f - Record what the reader actually does

When the page appears, do Step 8 before drawing conclusions — and read the next section first, because the expected result is not the one the spike was hoping for. Fill in `docs/playtests/2026-11-27-spike-unity-embedding.md` as you go; it is the record the engine decision needs.


## Step 8 - Repeat the reader checks

With the page inside Unity, repeat the checks from `prototype/ACCESSIBILITY-TEST.md`, then confirm the boundary behaves:

- The screen reader still reads the page after entering Play mode. Expect this one to fail on UnityWebBrowser, for the structural reason given in the previous section — record it either way.
- Keyboard focus does not escape the browser surface into the Unity window while a dialog is open.
- Escape closes the dialog rather than leaving Play mode.
- Pausing the game and returning does not lose the page's state.

If focus or the reader breaks at that boundary, that is the failure the spike exists to find, and the fallback in `docs/engine-decision.md` applies.

## What UnityWebBrowser cannot prove

Check the source before reading anything into a silence here. In UnityWebBrowser 2.2.8, `UwbCefRenderHandler.GetAccessibilityHandler()` returns `null`, and the browser is drawn off-screen into a `Texture2D` that is shown on a `Raw Image`. Two consequences follow, and neither is a configuration mistake:

- **There is no accessible tree for a screen reader to attach to.** NVDA will most likely read nothing once the page is inside the surface, even though the same page reads correctly in Edge on the same machine. The pass condition in `docs/engine-decision.md` — a reader announcing the dialog's fields inside Unity — will probably not be met by this component.
- **Keyboard input is gated on the pointer.** `RawImageUwbClientInputHandler` only forwards keys while the pointer is inside the Raw Image, so keyboard-only operation is not possible without a custom input handler.

**This was measured on 2026-11-27**, not just predicted: NVDA read the page in Edge by mouse and by Tab, and said nothing inside Unity by either route. See `docs/playtests/2026-11-27-spike-unity-embedding.md`. It is a finding about the component, not a bug to chase — and it is why the WebView2 route stays on the table: a real child window is something UIA and IAccessible can see, while an off-screen texture is not.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Hub will not activate a licence | Licence server or sign-in | Sign out and in again; check the licence page in the Hub |
| Editor opens but the Game view is black | HDRP on unsupported hardware | Recreate the project with the URP template |
| No compatible graphics device | Driver or GPU too old | Update the graphics driver; if it persists, use URP |
| Template import takes very long | Shader compilation on first open | Wait; it is a one-time cost per project |
| `The engine did not get ready within engine startup timeout!` | Native engine package missing, engine executable blocked, or a cold start slower than the timeout | Install the `…engine.cef.<platform>.x64` package, allow `UnityWebBrowser.Engine.Cef` in antivirus, raise **Engine Startup Timeout** |
| `NullReferenceException` at `WebBrowserClient.Init()` with a white screen and no engine process | **Communication Layer** slot empty (Browser Client → IPC Settings) | Assign `TCP Communication Layer` from Packages → Unity Web Browser → Resources |
| `NullReferenceException` naming `engine.GetEngineAppPath` or a missing engine executable | **Engine** slot empty | Assign `Cef Engine Configuration` |
| `NullReferenceException: The input handler is null!` | **Input Handler** slot empty | Assign `Old Input Handler` (or `Input System Handler`) from Packages → Unity Web Browser → Resources |
| `InvalidOperationException` about `UnityEngine.Input` | New Input System is the only active handler | Use `Input System Handler`, or set **Active Input Handling** to **Both** |
| Console floods with `obsolete` errors naming `TreeView`, `TreeViewItem`, `TreeViewState` | UniTask's optional tracker window does not compile on Unity 6.6 | Delete that editor-only script from the UniTask package; see step 3 |
| Unity warns four packages are unsigned | Expected for this registry | Approve them to continue |
| Console warning: `The powerPreference option is currently ignored when calling requestAdapter() on Windows` | Chromium's own WebGPU setup on Windows (crbug 369219127). The page does not use WebGPU — the prototype has no `navigator.gpu` call at all | Ignore it. It is a warning, not an error, and it also proves the engine's console is being forwarded to Unity |
| The **Initial Url** field cannot be found | The nested **Browser Client** block is collapsed | Click the **Browser Client** header to expand it; or use `LoadPrototypePage.cs` and skip the field entirely |
| **Load Prototype Page** never appears in Add Component | The loader script is not compiling | Check the file is `LoadPrototypePage.cs` (not `.cs.txt`) inside `Assets`, and read the Console for `error CS…`. Meanwhile, paste the `file:///` address into **Initial Url** — it loads without the script |
| Invalid dependencies or missing packages on install | Registries installed without the `org.nuget` and `com.cysharp.unitask` scopes | Re-add the registry with all three scopes, then refresh the Package Manager |
| Browser surface stays blank, Console shows no error | `Initial Url` is a file path rather than a URL | Use `file:///C:/…/standalone.html`, or `http://localhost:8000/standalone.html` |
| Blank screen, and you cannot tell whether the surface is drawing | The Raw Image may not be rendering at all | Set the Raw Image's **Color** to bright red and Play. Red means it draws and the page or URL is at fault; still unchanged means it is not on screen — check it sits under the Canvas, that the object is active, and that the Canvas is *Screen Space - Overlay* |
| `voltstro.dev` or `example.com` loads instead of the page | A control-test URL is still in `Initial Url` | The browser works; only the URL is wrong |
| Page renders but is stretched or cropped | Browser resolution does not match the Raw Image aspect | Set the browser resolution to the same aspect as the image |
| Works in Play mode, blank in the build | IL2CPP, or no `UWB` folder beside the build | Build with **Mono**; confirm `<Game>_Data/UWB/` exists and the engine process is not blocked |
| Build is very large | Chromium bundled by the webview | Accept it, or switch to the WebView2 route |

## What this does not cover

- Mobile builds, which come after the desktop spike.
- Packaging the final game, code signing, or store requirements.
- Art assets, lighting quality, or performance tuning.
