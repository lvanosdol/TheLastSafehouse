# Unity walkthrough — from "it plays" to "my page is inside it"

Written for someone who has never used Unity before. Do the steps **in order**. Every step ends with a **You should see** line. If what you see is different, stop there and report it — the later steps assume the earlier ones worked.

Plan on about 25 minutes, most of it downloads.

This assumes Windows. On macOS only two things differ: the native package name in step 3, and the path the script reports in step 8. Say so if you are on macOS.

**One rule that saves an hour:** never type a Windows file path into a browser address box. Step 6 gives you a script that builds the correct address for you.

---

## Step 1 — Open the project

1. Open **Unity Hub**.
2. Click **Projects** in the left bar.
3. Click `SafehouseSpike`.

The first open takes a while: shaders compile and the template imports. Let the spinner finish. Warnings in the Console are normal; red errors are not.

**You should see:** the Unity editor, a scene already open, and the **Play** button (▶) at the top centre.

### Step 1b — Check *where* the project lives

In Unity Hub, hover your project card and look at its path, or right-click `Assets` in Unity's Project window → **Show in Explorer** and read the address bar.

The path must **not** contain `AppData\Roaming\UnityHub\Templates`. That folder is Unity Hub's template storage. Projects put there can be overwritten when Hub installs or updates a template, they are ignored by Hub's project list, and on a work machine with a roaming profile they get copied around at logoff — which is how projects get corrupted.

If you find it there, move it once, now, before building anything else:

1. **Close Unity** (Unity Hub can stay open).
2. In File Explorer, create `C:\UnityProjects`.
3. Drag the whole `SafehouseSpike` folder from `Templates` into `C:\UnityProjects`. Same drive, so the move is instant — `Library` is huge and copying would take far longer.
4. Open Unity Hub → **Projects** → **Add** → **Add project from disk** → select `C:\UnityProjects\SafehouseSpike`.
5. Remove the old entry from the Hub list (right-click → **Remove project from list**); that only forgets the path, it does not delete files.
6. Open the project from the new entry and confirm your scene and `Assets/Scripts/LoadPrototypePage.cs` are still there.

**You should see:** one project entry, at a path outside `AppData`, opening with your work intact.

---

## Step 2 — Tell Unity where the browser package lives

The browser component is not in Unity's normal package store, so you add the store it lives in.

1. Menu **Edit → Project Settings**.
2. In the left-hand list, click **Package Manager**.
3. Scroll to **Scoped Registries** and click the **+**.
4. Fill in exactly:

   | Box | What to type |
   |---|---|
   | Name | `VoltUPR` |
   | URL | `https://upr.voltstro.dev` |
   | Scope(s) | `dev.voltstro` |

5. In **Scope(s)**, type `dev.voltstro` and press **Enter** (or click the small **+** beside it).
6. Repeat for two more scopes, one at a time: `org.nuget`, then `com.cysharp.unitask`.

The three scopes are not optional — the browser package depends on code hosted in the same registry, and without them the install fails with an "invalid dependencies" error. Check the URL character by character: `upr`, not `urp`. A single swapped pair of letters here cost an evening on 2026-11-26.

**You should see:** three scope entries listed under Scope(s), and no red error.

---

## Step 3 — Install three packages

1. Menu **Window → Package Manager**.
2. At the top left, change the dropdown from **Packages: In Project** to **Packages: My Registries**.
3. If the list is empty, click the circular **refresh** arrow. If it is still empty, step 2 is wrong — usually a missing scope.
4. In the search box, type `Unity Web Browser`.
5. Select a package in the list and click **Install** (bottom right). Install these three, one after another:

   1. **Unity Web Browser**
   2. **Unity Web Browser CEF Engine**
   3. **Unity Web Browser CEF Engine (Windows x64)**

The third one is the big download (hundreds of megabytes) and it is the one people forget. It holds the actual browser engine.

Two things that happened the first time this was tried on 2026-11-26:

- **Unsigned packages:** Unity may warn that four packages are not signed. That is expected for this registry; approve them to continue.
- **UniTask will not compile on Unity 6.6 as shipped.** The Console fills with `obsolete`-as-error messages about `TreeView`, `TreeViewItem`, and `TreeViewState` inside UniTask's editor extras. Those files are an optional tracker window, so deleting them from the UniTask package clears the errors. If you would rather not edit a package, tell me and we will change the plan instead.

**You should see:** all three listed with a version number (2.2.8 or newer), the Console free of red errors, and the spinner in the bottom right finishing.

---

## Step 4 — Two settings that decide whether it works

1. Menu **Edit → Project Settings**.
2. Click **Player** in the left list.
3. Expand **Other Settings** and scroll to **Configuration**.
4. Set:

   | Setting | Value |
   |---|---|
   | **Api Compatibility Level** | `.NET Framework` (not `.NET Standard 2.1`) |
   | **Scripting Backend** | `Mono` (not IL2CPP) |

5. If Unity offers to restart the editor, let it.

**You should see:** after any restart, both dropdowns still showing the values you chose.

Why: the browser runs as a separate program. The `.NET Standard` profile cannot start programs, and IL2CPP cannot either. Play mode survives both mistakes; a built game does not. Mono is fine for Windows and macOS desktop builds — it only becomes a real constraint when the mobile versions are built much later.

---

## Step 5 — Give the page a home

1. In the **Project** window (bottom), click **Assets** once.
2. Right-click an empty area → **Create → Folder**. Name it exactly `StreamingAssets` (capital S, capital A, no space).
3. Open this repository's `prototype` folder in File Explorer, and copy `standalone.html`.
4. Paste it into `Assets\StreamingAssets` — either by dragging it into that folder in Unity's Project window, or by pasting into `<your project>\Assets\StreamingAssets` in File Explorer.

**You should see:** `standalone.html` listed inside `Assets/StreamingAssets` in the Project window.

Why: Unity copies `StreamingAssets` into the finished game exactly as it is, which is what a web page needs.

---

## Step 6 — Add the script that loads the page

1. In the Project window, click **Assets** again.
2. Right-click → **Create → Folder**. Name it `Scripts`.
3. Copy `unity/Scripts/LoadPrototypePage.cs` from this repository into that folder.
   - Saving straight from the browser works too: aim the save dialog at `Assets\Scripts` inside the Unity project, set **Save as type** to **All Files**, and type `LoadPrototypePage.cs` as the name. Otherwise Windows quietly saves `LoadPrototypePage.cs.txt` and Unity ignores it.
   - The folder under `Assets` does not matter to Unity — `Scripts` is just the convention. What must match is the **file name and the class name**, so do not rename the file.
4. Click the file once in Unity.

**You should see:** the Inspector shows the script's source code and there is no red error in the Console. If the Console says the script failed to compile, send me the message — do not continue.

### If you are saving it with Ctrl+S in the browser

The file has to land **inside the Unity project**, in `<your project>\Assets\Scripts\`. A copy in `Downloads` does nothing — Unity only compiles what is under `Assets`.

1. In Unity, right-click the `Scripts` folder in the Project window → **Show in Explorer**. That opens the exact folder.
2. Click in that window's address bar and copy the path (Ctrl+C).
3. In the browser's save dialog, paste that path into the **File name** box, add `\LoadPrototypePage.cs` on the end, and set **Save as type** to **All Files**.

### Easier: skip the download entirely

1. On the GitHub **Raw** page, press **Ctrl+A** then **Ctrl+C**.
2. In Unity: right-click `Assets/Scripts` → **Create → C# Script** → name it `LoadPrototypePage` → press Enter.
3. Double-click it to open your code editor, press **Ctrl+A** then **Ctrl+V** to replace everything, then **Ctrl+S**.

Unity creates the file in the right folder with the right name and extension, so there is nothing left to get wrong.

The script does three things: waits for the browser engine to start, builds the correct `file:///` address from `StreamingAssets`, and loads the page.

---

## Step 7 — Build the screen

1. **Save the scene first:** press **Ctrl+S**, name it `Workshop`, and save it into an `Assets/Scenes` folder.
2. In the **Hierarchy** window (left), right-click empty space → **UI → Canvas**.
3. Right-click the **Canvas** you just made → **UI → Raw Image**.
4. **Make the picture fill the screen.** This is cosmetic — skip it if it fights you and the page still works, just inside a 100×100 square in the middle. To do it without any modifier keys:
   - With the Raw Image selected, look at the top of **Rect Transform**. On its left is a small square icon, the **anchor preset** button. Click it.
   - A grid opens: nine single squares and, along its right edge and bottom edge, four **stretch** presets.
   - Click the **bottom-right** one — "stretch / stretch".
   - The fields underneath change from *Pos X / Pos Y / Width / Height* to **Left / Right / Top / Bottom**. Set all four to `0` and press Enter.

   The Raw Image now covers the whole Game view. (The `Alt+Shift` in other guides is just a shortcut that also zeroes those four offsets.)
5. Still on the Raw Image: **Add Component** → type `Web Browser Basic` → press Enter.
6. The new component is one section called **Web Browser Basic**, and inside it are two blocks. If **Browser Client** looks like a single collapsed line, click its header to open it — `Initial Url` is the first field inside, and that collapsed block is where the setting went missing on 2026-11-26. There are **three** slots to fill (for each: click the small circle at the right of the box, type the name, press Enter):
   - In the **Browser Client** block: **Engine** → `Cef Engine Configuration`
   - In the **Browser Client** block, under **IPC Settings**: **Communication Layer** → `TCP Communication Layer`
   - In the outer part of the component, **below the Browser Client block and above the two "Disable … Inputs" checkboxes**: **Input Handler** → `Old Input Handler`

   Each of those three, left empty, fails in a different way: no engine gives a null reference on the engine path, no communication layer gives a null reference in `Init()` and a flat white screen, and no input handler throws on start.
7. In the same **Browser Client** block, set **Engine Startup Timeout** to `10000`. Leave **Resolution** at its default.
8. Leave **Initial Url** alone for now. When you need a control test, use `https://example.com` rather than the field's own default: example.com is a plain white page with a large black "Example Domain" heading, so there is no chance of confusing a rendered page with a blank surface. If example.com appears, the browser and the rendering path both work and only your page's address is in question.
   - **Or skip the script entirely:** `Initial Url` is handed to the engine as its starting address, so you can paste the page's `file:///` address straight into it and never add `LoadPrototypePage` at all. Forward slashes only, three after `file:`, for example `file:///C:/UnityProjects/SafehouseSpike/Assets/StreamingAssets/standalone.html`. The script exists only to build that address correctly for you and to survive the move from editor to build.
9. **Add Component** → type `Load Prototype Page` → press Enter, so it is on the same Raw Image. Leave **Use Local Server** unticked.
   - **What that is:** the script you saved in step 6, `Assets/Scripts/LoadPrototypePage.cs`. Unity writes class names with spaces in its menus, so `LoadPrototypePage` appears as **Load Prototype Page**. It is the only custom script in the project — everything else in the list belongs to Unity or to the browser package.
   - **You can also just drag the file:** drag `LoadPrototypePage.cs` from the Project window onto the Raw Image object. That adds the component without searching for it.
   - **If it is not in the list,** the script is not compiling, and the Console is where the reason is. A file named `LoadPrototypePage.cs.txt`, a file outside `Assets`, or a compile error in the browser package will each hide it.

**You should see:** in the Hierarchy, `Canvas` and `EventSystem` (if `EventSystem` is missing, right-click in the Hierarchy → **UI → Event System** — without it, clicks and keystrokes never reach the page). In the Inspector, the Raw Image now has: Rect Transform, Canvas Renderer, Raw Image, Web Browser Basic, Load Prototype Page.

### If you are using UnityWebBrowser's sample prefab instead

Then you do not build a Canvas at all — a second browser surface on screen causes one of them to stay blank. The package requires a `RawImage` on the same object as the browser component (`[RequireComponent(typeof(RawImage))]` on `RawImageUwbClientManager`), so in the sample hierarchy the component is on the object **holding the Raw Image**, not on the `WebBrowser` wrapper above it. Select that object, scroll its Inspector to the bottom, and add **Load Prototype Page** beside the existing **Web Browser Basic** / **Web Browser Full** component.

If the objects in that prefab show only Rect Transform, Canvas Renderer and Raw Image — with **Add Component** as the last entry — then no browser component exists in the instance and it will never render. Before rebuilding, type `Web Browser Basic` into **Add Component**: if it appears, the package is fine and you can build the Canvas trio from steps 7.2–7.9 instead of using the prefab; if it does not appear, the package's scripts are not compiling, and the Console is where the real error is.

**The deterministic option, when a prefab's wiring is unclear:** delete the prefab instance from the Hierarchy (its asset stays in `Packages`, nothing is lost), then follow 7.2–7.9 exactly. A Canvas, a Raw Image, `Web Browser Basic` with two slots filled, and `LoadPrototypePage` is the whole configuration — there is nothing else to discover.

---

## Step 8 — Press Play

1. Click **Play** (▶).
2. Wait. The first Play compiles and starts a second program; give it five seconds.

**You should see:** one to three seconds of flat colour, then the dark-blue simulated desktop reading "Safehouse 7 — Workshop computer".

### Seeing the whole screen while you test

- **Maximise the Game view:** double-click its tab. Double-click again to restore.
- **Make Play fill the window automatically:** in the Game view's toolbar, tick **Maximize On Play**.
- **See it at true size:** set the Game view's **Aspect** to `1920 × 1080` and **Scale** to `1x`, so the layout is exactly what a player would get rather than shrunk to fit the panel.
- **Truly fullscreen, no Unity around it:** that is the built player — step 10 — not something the editor does.

Also check:

- **Console:** a line beginning `[LoadPrototypePage] Loading file:///C:/...` — that is the address it built.
- **Task Manager:** `UnityWebBrowser.Engine.Cef.exe` running while you are in Play mode, and gone after you press Play again to stop.

If you see something else, match it here:

| What you see | What it means | Do this |
|---|---|---|
| Blank surface, and the Console *does* show `Loading file:///...` | The address was built but the file is not there | Check the spelling and location from step 5 |
| Blank surface, no `Loading` line at all | The script is not running | Is **Load Prototype Page** on the Raw Image, and ticked? |
| Voltstro's website appears and stays | The browser works; the script did not take over | Same as above |
| Console: `The engine did not get ready within engine startup timeout!` | The native package is missing or blocked | Step 3, third package; also raise Engine Startup Timeout to 20000 |
| Console: `NullReferenceException: The input handler is null!` | The Input Handler slot is empty | Step 7, item 6 |
| Console: `InvalidOperationException` mentioning `UnityEngine.Input` | The project uses the new Input System only | Project Settings → Player → **Active Input Handling** → **Both** |
| Nothing at all happens | The component was added to the Canvas instead of the Raw Image | Step 7, item 5 |

---

## Step 9 — Try it with your screen reader

1. Start **NVDA** (or VoiceOver on macOS) before pressing Play.
2. Press **Play**.
3. Press **Tab** a few times and listen.

**Expected result:** silence. UnityWebBrowser draws the page off-screen into a picture, so there is no accessible text for a reader to find. That is the finding the spike exists to produce — it is not something you did wrong. Write down what happened either way.

4. Open `docs/unity-embedding-run-sheet.md` and fill in the environment table and section **A** (does it render) and section **B** (does the reader work). Copy the Console text into the notes column.
5. Stop Play mode.

---

## Step 10 — Build it once (only after Play works)

1. Menu **File → Build Settings**.
2. Select **Windows**, click **Build**, choose an empty folder.
3. First build takes 10–20 minutes and several gigabytes.
4. Run the `.exe` and confirm the page appears there too.
5. Check that a folder called `UWB` exists inside `<Game>_Data`.

**You should see:** the same simulated desktop in the built game.

---

## If you get stuck

Send back:

1. The exact line(s) from the Console — copy and paste, do not retype.
2. Which step's **You should see** did not match.
3. A screenshot of the Inspector with the Raw Image selected, so I can see the component list and the two filled slots.

With those three things I can usually name the cause in one reply.
