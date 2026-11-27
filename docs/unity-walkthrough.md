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
4. With the Raw Image selected, look at the Inspector → **Rect Transform** → click the small anchor square → hold **Alt** and **Shift** → click the **stretch / stretch** preset (bottom right). This makes the picture fill the screen instead of sitting in a tiny square.
5. Still on the Raw Image: **Add Component** → type `Web Browser Basic` → press Enter.
6. The new component is one section called **Web Browser Basic**, and inside it are two blocks. If **Browser Client** looks like a single collapsed line, click its header to open it — `Initial Url` is the first field inside, and that collapsed block is where the setting went missing on 2026-11-26. Fill in **two slots** (for each: click the small circle at the right of the box, type the name, press Enter):
   - In the **Browser Client** block: **Engine** → `Cef Engine Configuration`
   - In the outer part of the component: **Input Handler** → `Old Input Handler`
7. In the same **Browser Client** block, set **Engine Startup Timeout** to `10000`. Leave **Resolution** at its default.
8. Leave **Initial Url** alone — it still says `https://voltstro.dev`, and that is useful: if you ever see Voltstro's site appear, the browser itself is working.
9. **Add Component** → type `Load Prototype Page` → press Enter, so it is on the same Raw Image. Leave **Use Local Server** unticked.

**You should see:** in the Hierarchy, `Canvas` and `EventSystem` (if `EventSystem` is missing, right-click in the Hierarchy → **UI → Event System** — without it, clicks and keystrokes never reach the page). In the Inspector, the Raw Image now has: Rect Transform, Canvas Renderer, Raw Image, Web Browser Basic, Load Prototype Page.

---

## Step 8 — Press Play

1. Click **Play** (▶).
2. Wait. The first Play compiles and starts a second program; give it five seconds.

**You should see:** one to three seconds of flat colour, then the dark-blue simulated desktop reading "Safehouse 7 — Workshop computer".

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
