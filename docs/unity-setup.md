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
