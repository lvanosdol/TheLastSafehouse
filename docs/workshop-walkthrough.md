# Workshop walkthrough — the bench, from an almost empty scene

Written for someone who has not used Unity before. Do the steps **in order**. Every step ends with a **You should see** line: if what you see is different, stop there and say so, because the later steps assume the earlier ones worked.

This builds tasks 1–3 of `docs/phase2-vertical-slice.md`: the room, a walkable camera, and a bench that opens the lesson page. About 40 minutes the first time.

**Starting point:** the scene holds `Main Camera`, `Computer`, `Global Volume` and `Directional Light`. Everything else in this document is built from scratch.

## Finding the parts of the editor

| What the steps call it | Where it is |
|---|---|
| **Hierarchy** | Top-left panel: every object in the open scene |
| **Scene** view | The large middle panel: the 3D view you build in |
| **Game** view | The tab beside **Scene**: what the camera sees |
| **Inspector** | Right-hand panel: the settings of the selected object, with its name at the top |
| **Project** | Bottom panel: the files under `Assets` |
| **Console** | The tab beside **Project**: errors, warnings and messages |
| **Add Component** | The button at the *bottom* of the Inspector once an object is selected; the **Component** menu in the top bar does the same and has a search box |

Three habits: **Add Component applies to the object selected in the Hierarchy**, so glance at the Inspector's title first; **Ctrl+S saves the scene**, which is not automatic; **edits made while Play mode is highlighted are thrown away when you stop**, so leave Play before editing.

## Step 0 — Start from four objects

The scene must hold exactly `Main Camera`, `Computer`, `Global Volume`, `Directional Light` before the rebuild.

1. **If `Main Camera` sits indented under `Player`, drag it out first** — onto the scene name `Workshop` at the top of the Hierarchy. Deleting a parent deletes its children, camera included.
2. Delete everything else: `Player`, `Bench Trigger`, `Bench Prompt`, `Floor`, `Bench`, `Chassis`. Right-click each → **Delete**.
3. Keep `Computer` — it carries the browser host — and `Global Volume`, which is post-processing and does no harm.

**You should see:** four objects in the Hierarchy, and selecting `Computer` still showing a **Computer Browser Window** component.

## Step 1 — The three scripts

`Assets/Scripts` must hold exactly three files, with exactly these names. Unity binds a component to a file whose name matches the class, so `BenchInteraction (1).cs` or `PlayerMove.cs.txt` will not work.

- `PlayerMove.cs`
- `BenchInteraction.cs`
- `ComputerBrowserWindow.cs`

1. If a file is missing or misnamed, download it, rename it to the exact name **before** dragging it in, then drop it onto `Assets/Scripts`:
   - `https://github.com/lvanosdol/TheLastSafehouse/blob/main/unity/Scripts/PlayerMove.cs`
   - `https://github.com/lvanosdol/TheLastSafehouse/blob/main/unity/Scripts/BenchInteraction.cs`
   - `https://github.com/lvanosdol/TheLastSafehouse/blob/main/unity/Scripts/ComputerBrowserWindow.cs`
   The **download** arrow is at the right-hand end of the file's header bar. If Unity asks about replacing `ComputerBrowserWindow.cs`, choose **Replace** — never delete that file inside Unity, or `Computer` loses its component and its settings.
2. Delete any duplicate or `.txt` copy in `Assets/Scripts`: right-click → **Delete**.

**You should see:** three files in `Assets/Scripts`, no red `error CS` lines in the Console, and **Add Component** offering **Safehouse → Player Move** and **Safehouse → Bench Interaction**.

## Step 2 — The new Input System

The scripts read the keyboard through Unity's new Input System.

1. **Window → Package Manager → Packages: Unity Registry**, search `Input System`. If the button says **Install**, click it and answer **Yes** to the restart.
2. **Edit → Project Settings → Player → Other Settings → Active Input Handling** must read **Both** or **Input System Package (New)**. If it reads **Input Manager (Old)**, change it, accept the restart, and reopen the scene (`Assets → Scenes → Workshop`).

**You should see:** the scene open again, no red errors, and `PlayerMove.cs` with no error marks in the Project panel.

## Step 3 — Floor, Bench, Chassis

Menu **GameObject → 3D Object → …**, then rename each object in the Inspector's name box before moving on.

| Name | Primitive | Position | Rotation | Scale |
|---|---|---|---|---|
| `Floor` | Plane | `(0, 0, 0)` | `(0, 0, 0)` | `(0.8, 1, 0.8)` |
| `Bench` | Cube | `(0, 1, 2)` | `(0, 0, 0)` | `(1.6, 0.1, 0.8)` |
| `Chassis` | Cube | `(0, 1.25, 2)` | `(0, 0, 0)` | `(0.4, 0.4, 0.2)` |

A Plane is 10 m at scale 1, so `0.8` gives an 8 m room. A Quad is 1 m at scale 1, so use a Plane, not a Quad. These numbers put the bench top at `y = 1.05` and its front face at `z = 1.6`, which the trigger and the prompt are spaced around — so do not move `Bench` in Z.

Add nothing to these three. A Plane brings a **Mesh Collider** and a Cube a **Box Collider**, and both are needed. A yellow note on the Mesh Collider about *pre-baked triangle collision* is expected and harmless.

Then place the camera: select `Main Camera`, **Position** `(0, 1.6, -2)`, **Rotation** `(0, 0, 0)`, **Scale** `(1, 1, 1)`, **Tag** `MainCamera`.

**You should see,** in the Game view without pressing Play: floor filling the lower half, the bench slab four metres ahead just below the middle and about a quarter of the frame wide, the chassis box on it reaching roughly the horizon. Then **Ctrl+S**.

## Step 4 — The Player and its body

1. **GameObject → Create Empty**, rename it `Player`, **Position** `(0, 0, -2)`, **Rotation** `(0, 0, 0)`, **Scale** `(1, 1, 1)`.
2. **Add Component** → `Character Controller` → **Enter**. Set **Center** `(0, 0.9, 0)`, **Radius** `0.35`, **Height** `1.8`, **Skin Width** `0.08`, **Slope Limit** `45`, **Step Offset** `0.3`.

An empty object draws nothing, so the room will look unchanged. Centre is what decides eye height in the next step: the capsule bottom sits at `y = 0` and its top at `1.8`.

**You should see:** a green capsule in the Scene view with its bottom on the floor — select `Player`, hover the Scene view, press **F**. The capsule is a drawing: if **Gizmos** (top right of the Scene view) is off, you will not see it, and nothing is broken.

## Step 5 — The camera inside the Player

1. Drag `Main Camera` onto `Player` in the Hierarchy so it is indented underneath.
2. Select it: **Position** `(0, 1.6, 0)`, **Rotation** `(0, 0, 0)`. Parenting keeps the world position, so the field will probably already read `(0, 1.6, 0)` — the same place on screen, now measured from the Player.

**You should see:** `Main Camera` under `Player`, and the Game view unchanged.

## Step 6 — The walking script

1. Select `Player`, **Add Component → Safehouse → Player Move**.
2. Drag `Main Camera` from the Hierarchy into the **View** field. Leaving it empty also works — the script looks for a camera under the Player at startup — but assigning it explicitly is one less thing to get wrong, and it is what the field is for.

Nothing else needs typing. The values arrive from the script:

| Field | Value | Meaning |
|---|---|---|
| Walk Speed | `2.4` | metres per second |
| Gravity | `-20` | keeps you on the floor |
| View | empty | the camera |
| Mouse Sensitivity | `0.12` | degrees per pixel while the pointer is locked |
| Key Turn Speed | `100` | degrees per second with the arrow keys |
| Pitch Limit | `80` | how far up or down you may look |
| Lock Pointer On Start | ticked | hides the pointer; **Escape** releases it |

**You should see:** those values and no red in the Console.

## Step 7 — Walk before building anything else

1. **Play**, then **click once inside the Game view** — Unity ignores keys while another panel has focus.
2. Check: **W A S D**, mouse look, **left and right arrows** turning without the mouse, **Escape** releasing the pointer, a click taking it back.
3. Walk up to the bench: you stop against it instead of passing through. Walk back.
4. Stop Play.

**You should see:** all of that, with no red in the Console and no `[PlayerMove]` warning. If it warns that the player is *standing on nothing*, the floor is at fault, not the script. If the view drifts downwards, stop and say so rather than continuing.

## Step 8 — The trigger volume at the bench

1. **GameObject → Create Empty**, rename it `Bench Trigger`, **Position** `(0, 0.9, 1.0)`, **Rotation** `(0, 0, 0)`.
2. **Add Component** → `Box Collider` → **Enter**. Tick **Is Trigger**. **Center** `(0, 0, 0)`, **Size** `(2.6, 1.8, 1.6)`.

The volume then reaches from `z = 0.2` to `z = 1.8`, so it is entered about a step before the bench stops you.

**You should see:** a green wireframe box in front of the bench — select it, hover the Scene view, press **F**. An unticked **Is Trigger** is not a cosmetic mistake: it becomes an invisible wall that stops you short, and then neither the prompt nor **E** ever happens.

## Step 9 — The browser host on Computer

1. Select `Computer`. It should already carry **Computer Browser Window**; add it if it does not.
2. **Untick Open On Start.** It is ticked by default and opens a page the moment you press Play.
3. Leave **Page File Name** at `standalone.html`.

**You should see:** under **Page**, Page File Name `standalone.html` and **Open On Start unticked**; under **Window**, Inset Percent, Use Isolated Profile, Focus On Open and Window Title Fragment at their defaults. Pressing Play opens nothing now.

## Step 10 — The bench interaction

1. Select `Bench Trigger`, **Add Component → Safehouse → Bench Interaction**.
2. **Lesson Page**: `lesson-1.html`. The lesson and the rebuild are two pages, so both files must be in `Assets/StreamingAssets/` — `unity/sync-prototype.sh` copies all three. `standalone.html` was the placeholder while the lesson was being written and is no longer what the bench should open: it is the simulated computer, which is what the machine shows *after* it boots, for the lessons that come later.
3. **Browser**: drag `Computer` from the Hierarchy into this field.
4. Leave **Player** empty (it is found in the scene). **Interact Key** stays `E`.

> **Testing shortcut.** `Lesson Page` also accepts a URL. During development, set it to
> `https://lvanosdol.github.io/TheLastSafehouse/prototype/lesson-1.html` and the game always opens the
> current page: no copying into `StreamingAssets`, and no chance of testing last night's copy. The page's
> own links are relative, so the build page resolves on the same site. It needs an internet connection, so
> the finished game should ship local files; this is for testing.

**You should see:** Lesson Page `standalone.html`, Browser reading `Computer (ComputerBrowserWindow)`, Interact Key `E`, Face Viewer ticked.

## Step 11 — The prompt

The prompt is a label for a sighted player; everything the game needs is in the page, so it can be plain.

1. **GameObject → 3D Object → Text - TextMeshPro**. If Unity offers to import TMP Essentials, accept. Do not use the legacy `TextMesh`: this project draws with URP, where it renders pink.
2. Rename it `Bench Prompt`. It carries a **RectTransform**, so its fields are **Pos X** `0`, **Pos Y** `1.5`, **Pos Z** `1.1`, and **Scale** `(0.01, 0.01, 0.01)` at the bottom of that same block — leave the default 1 and the words are metres tall. **Width** and **Height** only decide where the text wraps; leave them.
3. In the **TextMeshPro** block, the first field is a large box labelled **Text Input** holding `New Text`: click inside, **Ctrl+A**, type `Press E`. Set **Font Size** `36` below it. Leave the colour — white reads well in this room.
4. Untick `Bench Prompt` in the Hierarchy. The script switches it on near the bench.
5. Drag `Bench Prompt` into **Bench Interaction → Prompt**.

**You should see:** the Prompt field reading `Bench Prompt`, and the object unticked. Tick it once to look at the text in the Scene view — about a metre wide above the bench — then untick it again.

## Step 12 — Pre-flight, then the whole test

| Select | It must carry |
|---|---|
| `Main Camera` (under `Player`) | Camera, Audio Listener, Universal Additional Camera Data; Position `(0, 1.6, 0)` |
| `Player` | Character Controller (Center `(0, 0.9, 0)`, Height `1.8`, Radius `0.35`), Player Move (View empty) |
| `Bench Trigger` | Box Collider, **Is Trigger ticked**, Size `(2.6, 1.8, 1.6)`; Bench Interaction (Lesson Page `standalone.html`, Browser `Computer`, Prompt `Bench Prompt`) |
| `Computer` | Computer Browser Window, **Open On Start unticked** |
| `Bench Prompt` | TextMeshPro, unticked in the Hierarchy |
| `Floor`, `Bench`, `Chassis` | The positions and scales from Step 3, ticked |

1. **Ctrl+S**.
2. **Play**, then click once inside the Game view.
3. Walk forward: the prompt appears above the bench and turns to face you. **E** opens the lesson; from there the lesson links to the rebuild, and the rebuild links back.
4. Press **E**: a browser window opens over the whole editor, showing the simulated desktop.
5. Try **W A S D E**: nothing moves behind the browser.
6. Close the window with its own **X** (top right) or **Alt+F4**.
7. The game returns with the prompt back, and **E** opens the page again. Close it and stop Play.

**You should see,** in the Console, in this order:

```text
[BenchInteraction] Bench ready: page lesson-1.html, browser Computer, player Player.
[BenchInteraction] Player at the bench. Press E to open lesson-1.html.
[ComputerBrowserWindow] Opened file:///…/StreamingAssets/lesson-1.html
[BenchInteraction] Opened lesson-1.html over the Workshop.
[ComputerBrowserWindow] Browser window closed.
[BenchInteraction] Back in the Workshop. Press E to return to the bench.
```

`NOT FOUND` in place of `Computer` or `Player` in the first line names the field to fill. No `Bench ready` line at all means `Bench Interaction` is not on an active object.

## If something goes wrong

| What you see | What it means | Fix |
|---|---|---|
| **Add Component** has no **Safehouse** section | The scripts are not in the project, or did not compile | Step 1, then read the first red Console line |
| `CS0246` naming `UnityEngine.InputSystem` | New Input System missing or not active | Step 2 |
| `CS1501: No overload for method 'Open' takes 1 arguments` | The project's `ComputerBrowserWindow.cs` predates `Open(page)` | Download it again, replace the file, Step 1 |
| `warning CS0618: FindFirstObjectByType … is obsolete` | An older `BenchInteraction.cs` | Replace it with the current file, Step 1 |
| A script named `BenchInteraction (1)1.cs` | The browser renames duplicate downloads; Unity cannot bind a class to a mismatched file name | Delete every copy with brackets in its name, download once, rename, Step 1 |
| `The referenced script (Unknown) on this Behaviour is missing!` | A component points at a deleted or renamed script file; it runs no code at all | Right-click the **Missing (Mono Script)** block → **Remove Component**, add it again, restore its fields (Step 12 table) |
| `W` does nothing | Another editor panel has keyboard focus | Click once inside the Game view |
| Turning does not turn the view | Camera is not a child of `Player` | Step 5 |
| `[PlayerMove] No camera found` | At startup no camera was under the Player, or the Console is showing a line from an earlier Play session | Clear the Console and Play again. If it returns, drag `Main Camera` into **Player Move → View** |
| No green capsule after Step 4 | It is a Scene-view drawing: gizmos off, `Collider` unticked, or the view is elsewhere | Select `Player`, press **F**, check the **Gizmos** button. If the Inspector lists Character Controller, nothing is broken |
| The player drops a few centimetres at Play and stops | Normal: the controller settles by its skin width | Nothing to do |
| The player falls and `Position Y` keeps dropping, Console says `[PlayerMove] The player is standing on nothing` | Nothing solid is under the player | Check `Floor` is a Plane at `(0, 0, 0)` with rotation zero and **no zero in its Scale**; check `Player` is at `(0, 0, -2)` and the controller Centre is `(0, 0.9, 0)`. To split a bad floor from a bad player: stop Play, add a Cube at `(0, 0, -2)` scaled `(4, 0.2, 4)`, Play — standing on the Cube means the floor is at fault |
| Console: `Mesh 'Plane' … missing pre-baked triangle collision` | Unity bakes plane collision at runtime; a future build-pipeline change only | Ignore it |
| No prompt and no **E**, and no `Player at the bench` line | The game does not think you are at the bench | Is **Is Trigger** ticked? Is `Bench Interaction` on the same object as the Box Collider? Walk right up to the bench |
| `Bench ready` says `browser NOT FOUND` | The **Browser** field is empty | Drag `Computer` into it, Step 10 |
| `Bench ready` says `player NOT FOUND` | No active object carries **Player Move** | Step 6; check `Player` is ticked |
| `Player at the bench` but no text | The **Prompt** field is empty or points at the wrong object | Step 11 |
| The prompt is pink or magenta | Legacy `TextMesh` instead of TextMeshPro, which URP does not draw properly | Delete it, Step 11 |
| The prompt reads backwards | The billboard faces the back of the text at the player | Untick **Face Viewer** on Bench Interaction, set the prompt's Rotation Y to `180` |
| A browser opens on a file-not-found page | `Assets/StreamingAssets/standalone.html` is missing | Copy `prototype/standalone.html` there |
| Two browser windows at Play | **Open On Start** still ticked | Step 9 |
| A dark band on the floor in front of the bench | The bench's shadow, or a stray flat Cube | Click `Computer`: a **Mesh Filter** means it is an object, so move or strip it. No mesh means it is a shadow: `Bench` → **Mesh Renderer → Cast Shadows → Off** |
| `Unable to use UDP port 56458 for VS/Unity messaging` | The Visual Studio Editor package could not claim its port for script-open and debugger attach — usually a second Unity instance or a leftover process holds it | Ignore it. It does not affect compiling or Play mode. Close other editor instances or restart Unity if script-open stops working |
| `TransientArtifactProvider … call is not allowed when transient artifacts are getting updated` | A Unity editor assert during asset import (UUM-96903) | Ignore it; restart the editor if it repeats on every Play |
| Still frozen after closing the browser | `Closed` did not fire | Tell me; that is a real defect |

## What to send back

A screenshot of the **Game** view standing at the bench, and four answers:

1. Did the prompt appear before you pressed **E**?
2. Did the page open over the game, and did NVDA read it?
3. Did the Console print the six lines in Step 12, in that order?
4. Anything that felt wrong — speed, eye height, the trigger volume too small or too large.

Then the lesson page itself starts, which is mine to write.
