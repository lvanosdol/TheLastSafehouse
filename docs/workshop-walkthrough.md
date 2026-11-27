# Workshop walkthrough — from a scene to the bench opening the lesson

Written for someone who has not used Unity before, like `docs/unity-walkthrough.md`. Do the steps **in order**. Every step ends with a **You should see** line: if what you see is different, stop there and say so, because the later steps assume the earlier ones worked.

This covers tasks 1–3 of `docs/phase2-vertical-slice.md`. About 20 minutes, most of it finding things in the Inspector.

## Before you start

1. Open **Unity Hub**, click **Projects**, open `SafehouseSpike`. Let it finish loading; the spinner at the bottom right must stop.
2. In the **Project** window (bottom of the screen) open `Assets → Scenes` and double-click `Workshop`. The scene name appears at the top of the **Hierarchy** (left of the screen).
3. Look at the **Hierarchy** list. If there is an object named something like `Web Browser` or `Browser`, and its Inspector shows **Missing (Mono Script)**, right-click it → **Delete**. The browser packages are gone, so that object cannot work and would confuse the next steps.

**You should see:** a Hierarchy containing the scene's geometry, the light and a camera — nothing with a missing script — and an empty Console (Window → General → Console, then the Clear button).

## Step 0 — Clear out the old browser surface

If the Hierarchy lists `Canvas`, `EventSystem` or `Computer`, those are left over from the Phase 1 spike: a Canvas with a Raw Image that drew the page into a texture. The game no longer draws the page itself, so none of it is used.

1. Click `Canvas`, right-click → **Delete**. Do the same for `EventSystem`.
2. `Computer` **stays**. It carries **Computer Browser Window** — the host that opens the page in a real window — so it is doing exactly the job it should. Step 9 configures it. Only delete it if its Inspector shows **Missing (Mono Script)**, which would mean the host never made it into this scene; step 9 then adds one back.
3. Leave `Global Volume` alone. It is the post-processing volume and does no harm.

**You should see:** the Hierarchy down to Main Camera, Directional Light, Global Volume, Computer, plus whatever room geometry exists.

## Step 0b — Build the room, if it is not there yet

Three primitives are all the slice needs. Menu **GameObject → 3D Object → Plane** or **Cube**, then rename the object in the Inspector name box *before* moving on, because the later steps refer to these names.

| Object | Primitive | Position | Scale |
|---|---|---|---|
| `Floor` | Plane | `(0, 0, 0)` | `(0.8, 1, 0.8)` — a Plane is 10 m at scale 1, so this is 8 m × 8 m |
| `Bench` | Cube | `(0, 1, 2)` | `(1.6, 0.1, 0.8)` |
| `Chassis` | Cube | `(0, 1.25, 2)` | `(0.4, 0.4, 0.2)` |

Then place the camera: select **Main Camera**, set **Position** `(0, 1.6, -2)` and **Rotation** `(0, 0, 0)`.

**You should see,** in the Game view without pressing Play: floor filling the lower half, a bench-shaped slab four metres ahead and a little below the middle of the screen, spanning about a quarter of the screen's width, with the small chassis box on top of it reaching roughly the horizon line. If the bench is small and far away, or the view is still only sky, compare the numbers above with the Inspector — the camera's Position is the one that changes distance.

## Step 1 — Put the two scripts in the project

The project needs two files: `PlayerMove.cs` and `BenchInteraction.cs`, both from the repository's `unity/Scripts` folder.

**If the repository is cloned on this PC:** open that folder in File Explorer, select both files, **Ctrl+C**, then click inside `Assets/Scripts` in Unity's Project panel and **Ctrl+V**.

**If it is not** — likely, if all your work happens in Unity — download them from GitHub:

1. Open these two addresses in your browser:
   - `https://github.com/lvanosdol/TheLastSafehouse/blob/main/unity/Scripts/PlayerMove.cs`
   - `https://github.com/lvanosdol/TheLastSafehouse/blob/main/unity/Scripts/BenchInteraction.cs`
2. On each page, click the **download** arrow at the right-hand end of the file's header bar. The browser saves it to `Downloads` with the right name, extension included.
3. In Unity, open `Assets/Scripts` in the **Project** panel, then drag both files from the `Downloads` window into it.

Either way, the file names must end in `.cs`. A file called `PlayerMove.cs.txt` will be ignored by Unity — if that happens, rename it and drop the `.txt`.

### The host file must be current too

If the project already has `Assets/Scripts/ComputerBrowserWindow.cs` from the Phase 1 spike, it is out of date: it was written before the host could open a page by name. `BenchInteraction` calls `Open("lesson-1.html")`, so that older copy fails to compile with:

```text
error CS1501: No overload for method 'Open' takes 1 arguments
```

Replace it with the current file from `https://github.com/lvanosdol/TheLastSafehouse/blob/main/unity/Scripts/ComputerBrowserWindow.cs`. Drag the downloaded file onto `Assets/Scripts` and choose **Replace** when Unity asks.

**Replace, do not delete.** Deleting the script inside Unity and importing it again gives it a new identity, and the `Computer` object's component would be lost with it, along with its settings. Overwriting the file keeps the component and only changes the code. It also brings the window-positioning fix recorded in `docs/playtests/2026-11-27-spike-browser-window.md`.

**You should see:** no red in the Console, `Computer` still listing **Computer Browser Window** with **Open On Start** still unticked, and **Add Component** offering **Safehouse → Bench Interaction**.

**You should see:** both files listed in `Assets/Scripts`. Click `PlayerMove` once and its code appears in the **Inspector** on the right. If the Console turns red with `error CS…`, copy the first red line and tell me.

## Step 2 — Turn on the new Input System

The scripts read the keyboard through Unity's new Input System. If it is not installed, they will not compile.

1. Menu **Window → Package Manager**.
2. At the top left, set the dropdown to **Packages: Unity Registry**.
3. Type `Input System` in the search box.
4. If the button on the right says **Install**, click it. If it says **Installed**, close the window and skip to item 6.
5. Unity asks whether to enable the new input backends and restart. Answer **Yes** and let it restart.
6. After the restart, check **Edit → Project Settings → Player → Other Settings → Active Input Handling**. It must read **Both** or **Input System Package (New)**. If it reads **Input Manager (Old)**, change it and accept the restart.

**You should see:** after reopening the scene, the Console has no red errors, and `Assets/Scripts/PlayerMove.cs` shows no error marks in the Project window.

## Step 3 — Make the Player object

1. Menu **GameObject → Create Empty**. A new object appears at the bottom of the Hierarchy, selected.
2. With it selected, look at the **Inspector** (right of the screen), at the top: the name box reads `GameObject`. Click it, type `Player`, press **Enter**.
3. In the **Transform** block just below, set **Position** to `X 0`, `Y 0`, `Z -2`. Leave Rotation and Scale alone.

**You should see:** a `Player` entry in the Hierarchy, sitting two metres behind the bench, and its Transform showing `(0, 0, -2)`.

## Step 4 — Give the Player a body

1. With `Player` still selected, click **Add Component** at the bottom of the Inspector.
2. Type `Character Controller` in the search box and press **Enter** on the first result.
3. In the new **Character Controller** block, set **Center** to `(0, 0.9, 0)`, **Height** to `1.8`, **Radius** to `0.35`.

**You should see:** a green capsule outline drawn around the Player in the **Scene** view (the large middle panel), standing on the floor rather than half sunk into it. If it looks sunk, the Center is not `(0, 0.9, 0)`.

## Step 5 — Put the camera inside the Player

The camera is the player's eyes. It must be a child of the Player, or turning the body will not turn the view.

1. In the **Hierarchy**, find **Main Camera**.
2. Drag **Main Camera** onto the word `Player` in the Hierarchy and release. It must land *under* Player, indented. Dragging in the Scene view does not do this; use the Hierarchy.
3. Click **Main Camera** (now a child) and set its **Position** to `(0, 1.6, 0)` and **Rotation** to `(0, 0, 0)`. If the Player was made first and the camera was already at `(0, 1.6, -2)`, parenting has kept it in place and the Position field will already read `(0, 1.6, 0)` — that is the same place on screen, now measured from the Player.

**You should see:** in the Hierarchy, `Main Camera` indented under `Player`, and in the Scene view the camera icon sitting at eye height over the Player capsule.

## Step 6 — Add the walking script

1. Select `Player` again.
2. **Add Component → Safehouse → Player Move**. If **Safehouse** is not in the list, step 1 or 2 failed; check the Console.

**You should see:** a **Player Move** block with Walk Speed, Gravity, View, Mouse Sensitivity, Key Turn Speed, Pitch Limit, Lock Pointer On Start. Leave **View** empty — the script finds the camera under the Player.

## Step 7 — Test walking, before touching the bench

1. Click the **Play** button (▶) at the top centre. The Game view takes over.
2. **Click once inside the Game view.** Unity ignores the keyboard while the Inspector or Hierarchy has focus, so this click matters.
3. The pointer disappears and is held in place. Check, one at a time:
   - **W** walks forward, **S** back, **A** and **D** sideways.
   - Moving the mouse turns and looks up and down.
   - The **left and right arrow keys** turn without touching the mouse. This is the keyboard-only route, so it must work.
   - **Escape** gives the pointer back; the mouse no longer turns the view.
   - Clicking inside the Game view takes the pointer again.
4. Walk up to the bench and back.
5. Click **Play** again to stop.

**You should see:** all of the above, and no red text in the Console. If the Console says `[PlayerMove] The camera is not parented under the Player`, redo step 5.

## Step 8 — The trigger volume at the bench

This invisible box is how the game knows you are standing at the bench.

1. **GameObject → Create Empty**, then rename it `Bench Trigger` (Inspector name box).
2. Set its **Position** to `(0, 0.9, 1.0)`.
3. **Add Component →** search `Box Collider` → **Enter**.
4. In the **Box Collider** block, tick **Is Trigger**, and set **Size** to `(2.6, 1.8, 1.6)`.

**You should see:** a green wireframe box in the Scene view, standing in front of the bench and a little on either side of it. Green, not solid — ticked **Is Trigger** is what makes it pass-through.

## Step 9 — The browser host

The host lives on its own object, `Computer`, which is where it already is if you kept the spike's object. Keeping it separate is deliberate: the host belongs to the machine, the trigger belongs to the spot you stand in, and later interactions can point at the one host.

1. Select `Computer` in the Hierarchy. It should already carry **Computer Browser Window**. If it does not, **Add Component →** search `Computer Browser Window`.
2. **Untick Open On Start.** This is the tick that has been opening the page the moment you press Play. The bench now decides when the page opens; with this left on you would get two windows, one at Play and one on **E**.
3. Leave **Page File Name** at `standalone.html` and the rest at their defaults.

**You should see:** the block with Page File Name `standalone.html`, Inset Percent, Use Isolated Profile, Focus On Open, Window Title Fragment, and Open On Start unticked. Pressing Play now opens nothing until the trigger asks.

## Step 10 — The bench interaction

1. Select `Bench Trigger`, **Add Component →** search `Bench Interaction`.
2. In its **Lesson** block, set **Lesson Page** to `standalone.html` for now. `lesson-1.html` does not exist yet; it is my next task. This is the only value you will change back later.
3. Drag `Computer` from the Hierarchy into the **Browser** field. Without this the bench has no host to open and the Console will say so.
4. Leave **Player** and **Prompt** empty for the moment. The player is found in the scene; the prompt is step 11.

**You should see:** Lesson Page `standalone.html`, Browser reading `Computer (ComputerBrowserWindow)`, Interact Key `E`, Face Viewer ticked.

## Step 11 — The prompt

1. **GameObject → Create Empty**, rename it `Bench Prompt`, set **Position** `(0, 1.5, 1.1)`.
2. **Add Component →** search `TextMesh` → **Enter**. If Unity asks to import a legacy font, accept.
3. In the **TextMesh** block, set **Text** to `Press E to use the workbench`, **Font Size** `64`, **Character Size** `0.08`, **Anchor** `Middle Center`, and pick a light **Color**.
4. In the Hierarchy, click the checkbox left of `Bench Prompt` to hide it in the scene. It is shown only when the player is close.
5. Select `Bench Trigger`, and drag `Bench Prompt` from the Hierarchy into the **Prompt** field of **Bench Interaction**.

**You should see:** the TextMesh settings above; the prompt no longer drawn in the Scene view; and the Prompt field reading `Bench Prompt`.

## Step 12 — The whole test

1. **Ctrl+S** to save the scene.
2. Click **Play**. Click once inside the Game view.
3. Walk forward with **W**. A few steps in, the text appears in front of the bench and turns to face you as you move.
4. Press **E**. A browser window opens over the whole editor, showing the simulated desktop.
5. Try **W**, **A**, **S**, **D**, **E**. Nothing should move behind the browser.
6. Close the browser window with its own **X** (top right) or **Alt+F4**. Do not press Play/Stop in Unity for this; that is behind the window anyway.
7. The game comes back, the prompt is there again, and **E** opens the page once more. Close it and press **Play** to stop.

**You should see,** in the Console, in this order:

```text
[ComputerBrowserWindow] Opened file:///…/StreamingAssets/standalone.html
[BenchInteraction] Opened standalone.html over the Workshop.
[ComputerBrowserWindow] Browser window closed.
[BenchInteraction] Back in the Workshop. Press E to return to the bench.
```

If the page opens but does not move into place, or the Console says `Missing page`, say so and which line appeared — that is the host's known weak spot, not something you did.

## If something goes wrong

| What you see | What it means | Fix |
|---|---|---|
| **Add Component** has no **Safehouse** section | The scripts are not in the project, or did not compile | Check `Assets/Scripts` holds both `.cs` files (Step 1), then read the first red Console line |
| `CS0246` naming `UnityEngine.InputSystem` | New Input System not installed or not active | Step 2 |
| `CS1501: No overload for method 'Open' takes 1 arguments` | The project's `ComputerBrowserWindow.cs` is the Phase 1 copy, before `Open(page)` existed | Replace that file with the current one — Step 1, "The host file must be current too" |
| `W` does nothing | The editor's other panels have keyboard focus | Click once inside the Game view |
| Turning does not turn the view | Camera not a child of Player | Step 5 |
| No prompt at the bench | Not inside the box, or the box is not a trigger | Step 8, and walk closer |
| **E** does nothing, prompt visible | `Bench Interaction` not on the same object as the box, or **Lesson Page** blank | Step 10 |
| A browser opens showing a file-not-found page | `Assets/StreamingAssets/standalone.html` is missing | Copy `prototype/standalone.html` there, or run `unity/sync-prototype.sh` |
| Two browser windows at Play | **Open On Start** still ticked | Step 9 |
| A dark band on the floor in front of the bench | Usually the bench's own shadow, sometimes a stray flat cube someone made while experimenting | Click `Bench` in the Hierarchy: if the band gets an orange outline in the Scene view it is an object, and its Inspector tells you which; if nothing outlines it, it is a shadow and harmless |
| Still frozen after closing the browser | `Closed` did not fire | Tell me; that is a real defect |

## What to send back

A screenshot of the **Game** view in Play mode standing at the bench, and these four answers:

1. Did the prompt appear before you pressed E?
2. Did the page open over the game, and did NVDA read it?
3. Did all four Console lines appear, in that order?
4. Anything that felt wrong — speed, height, the box being too small or too large.

Then the lesson page itself starts, which is mine to write.
