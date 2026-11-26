# Unity setup for the spike

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
   - **Windows Build Support (IL2CPP)** — so the game can be built for Windows.
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
| **UnityWebBrowser** | Free (MIT) | Windows, Linux | https://github.com/Voltstro-Studios/UnityWebBrowser | Chromium-based; self-contained but adds a large amount to the build |
| **WebView2 wrapper** (Microsoft Edge runtime) | Free | Windows | https://learn.microsoft.com/microsoft-edge/webview2/ | Small build because Edge is already on Windows; needs a native plugin, and you write the glue |
| **gree/unity-webview** | Free (MIT) | Android, iOS, macOS | https://github.com/gree/unity-webview | Mobile-first; not a Windows desktop answer |
| **ZFBrowser / Embedded Browser** | Free source, historically paid | Windows, macOS | https://github.com/ZenFulcrum/EmbeddedBrowser | Check current licence and maintenance before relying on it |

**Recommendation for the spike:** **WebView2** if you are comfortable adding a small native plugin, because it keeps the build small and uses the Edge runtime already installed on Windows 10 and 11. **UnityWebBrowser** if you want something self-contained that does not depend on a system runtime, and can accept a much larger build.

**Caution:** these projects change. Check the last commit date and open issues before committing to one, and confirm the licence terms yourself rather than trusting this table.

## Step 7 - Embed the prototype

Once the project opens and plays, the embedded page is the next piece. It needs one of the components above and a small amount of glue:

1. Import the chosen webview package into the project.
2. Create an empty GameObject in the scene and attach the component's browser script.
3. Point it at a local file: copy `prototype/standalone.html` into `Assets/StreamingAssets/`, or use a local address such as `http://localhost:8000/` while testing.
4. Set the browser surface size, then enter Play mode and confirm the page appears in the Game view.

Nothing on the page needs changing: it is already a normal web page, and an embedded browser treats it as one.

## Step 8 - Repeat the reader checks

With the page inside Unity, repeat the checks from `prototype/ACCESSIBILITY-TEST.md`, then confirm the boundary behaves:

- The screen reader still reads the page after entering Play mode.
- Keyboard focus does not escape the browser surface into the Unity window while a dialog is open.
- Escape closes the dialog rather than leaving Play mode.
- Pausing the game and returning does not lose the page's state.

If focus or the reader breaks at that boundary, that is the failure the spike exists to find, and the fallback in `docs/engine-decision.md` applies.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Hub will not activate a licence | Licence server or sign-in | Sign out and in again; check the licence page in the Hub |
| Editor opens but the Game view is black | HDRP on unsupported hardware | Recreate the project with the URP template |
| No compatible graphics device | Driver or GPU too old | Update the graphics driver; if it persists, use URP |
| Template import takes very long | Shader compilation on first open | Wait; it is a one-time cost per project |
| Browser surface is blank | Wrong file path or missing permission | Put the page in `StreamingAssets` and use the platform's streaming path |
| Build is very large | Chromium bundled by the webview | Accept it, or switch to the WebView2 route |

## What this does not cover

- Mobile builds, which come after the desktop spike.
- Packaging the final game, code signing, or store requirements.
- Art assets, lighting quality, or performance tuning.
