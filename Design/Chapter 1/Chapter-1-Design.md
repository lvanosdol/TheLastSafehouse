# The Last Safehouse — Chapter 1 Design

> This is the authoritative Chapter 1 design. Earlier drafts are historical and must not be treated as current requirements.

**Status:** Approved working direction. Rebuilt around seven focused lessons and the Restoration boss.
**Updated:** 2026-11-25

## Chapter purpose

Chapter 1 introduces real-world introductory IT skills through the fictional Safehouse system computer and contained system state. The player learns computer components, basic computing, operating systems, Windows navigation, files and permissions, device protection, and trustworthy software sources before later chapters introduce programming, databases, networking, security, and automation.

The chapter teaches cross-platform IT concepts with Windows as the primary environment. It uses Windows navigation, File Explorer, plain-text records, and a simulated Windows Security interface. Graphical and command-line interfaces are introduced conceptually; Chapter 1 does not require shell commands, SQL, real system changes, or real network access.

All hardware, software, accounts, files, alerts, and system state in the chapter are fictional and contained in the game. The player's actions must not change their real computer, accounts, or network.

## Teaching principles

- Explain each idea in plain language and introduce it in small steps.
- Show labeled examples before asking the player to act.
- Give the player chances to predict, inspect, edit, and observe results.
- Check understanding before advancing.
- Use story events to give practice a purpose.
- Accept alternate valid solutions unless a specific method is the learning objective.
- Show actual simulated output or system state rather than relying on a success message.
- Preserve the player's work after mistakes.
- Offer three hint levels: a concept reminder, where to look, and a guiding question or similar example.
- Do not reveal the complete solution through a hint.
- Keep lesson hints and retries unlimited and penalty-free.
- Never rely on color, sound, or animation alone.

The general checkpoint loop and campaign rules remain in the [master design](../The-Last-Safehouse-Design.md#3-teaching-and-checkpoint-principles).

## Opening scene: The onsite apprenticeship

The player is living an ordinary life and applies to a college Information Technology and Networking program as a beginner with no computer-repair experience.

At a program open house, Mara notices the player's curiosity, willingness to learn, and persistence when they do not understand something. She offers a paid, beginner-friendly apprenticeship at a remote, decommissioned training facility. The placement is onsite, room and meals are provided, and Mara will teach from the basics. The player accepts as a voluntary step toward college and an IT career.

> **Player:** “I don’t have experience yet. I’m hoping college will teach me.”
>
> **Mara:** “Experience isn’t the only thing that matters. You’re curious, and you don’t give up when you don’t know something.”
>
> **Player:** “You think I could learn it?”
>
> **Mara:** “I do. I have a paid apprenticeship at a remote, decommissioned training facility. It’s onsite, so you’d stay there during the placement. Room and meals are provided, and I’ll teach you from the basics.”

Mara asks for the player's name, which becomes their character name. This does not change the later reveal that the player is Echo.

Mara presents the facility as a hands-on training opportunity. She does not reveal the player's connection to Echo or that Echo destroyed the facility to stop her experiments. The cause and timing of the player's memory loss remain open. Mara's respect for the player's potential may be genuine, but it is not her full reason for seeking them out.

Use neutral language such as “the player” or “they” whenever the character's gender has not been established.

## Arrival at the Safehouse

Mara greets the player at the remote Safehouse and leads them to the Workshop. A partially disassembled Safehouse system computer waits there. This room becomes the main setting for Chapter 1's lessons.

Mara explains that she will teach step by step and does not expect the player to repair the computer alone. Once the PC powers on, it becomes the computer used for the remaining lessons.

Windows works, but the Workshop application remains unresponsive. A holographic figure flickers in and out without fully appearing. No name or message is provided yet.

## Lesson map

1. **Meet and rebuild the computer:** components, purposes, safe assembly, connections, and first boot.
2. **Computing basics:** input, processing, storage, output, memory, and common data sizes.
3. **Operating systems and Windows:** OS responsibilities, Windows navigation, applications, services, and drivers.
4. **Files, folders, and preserving evidence:** paths, extensions, copying, organization, and evidence preservation.
5. **Accounts, permissions, and trusted recovery files:** standard accounts, least privilege, access, and configuration restoration.
6. **Device protection and Windows Security:** antivirus, firewall, updates, protection history, and alert review.
7. **Choosing and managing software:** trustworthy sources, licensing, per-user installation, and uninstalling unwanted software.

## Lesson 1: Meet and rebuild the computer

### Story purpose

Mara brings the player to the Safehouse system chassis whose components were removed and placed on the Workshop bench. This avoids implying that the player is performing a dangerous internal power-supply repair.

> **Mara:** “Before we put this computer back together, let’s meet its parts. You don’t need to know everything yet—we’ll take them one at a time.”

### Learning goal

The player identifies the main parts of a desktop computer, explains their basic purposes, places them correctly, makes the required connections, and recognizes a successful boot.

### Concepts and components

Each component appears as a labeled, selectable part. Selecting it reveals its name, purpose, usual connection, and one practical example.

- **Motherboard:** connects components and allows them to communicate.
- **Processor:** carries out instructions.
- **RAM:** temporary working memory used by running programs.
- **Storage:** keeps files after power is off.
- **Power supply:** provides power to the system.
- **Graphics:** produces display output.
- **Cooling:** prevents components from overheating.
- **Case:** holds and protects the system.
- **Peripherals:** provide input and output, such as the monitor, keyboard, and mouse.

RAM is temporary workspace; storage keeps files after shutdown. Common storage examples include hard drives, SSDs, and external drives.

### Safety guidance

Before assembly, Mara explains:

- Real computers must be shut down and unplugged before internal work.
- Never open a power supply because it can retain dangerous electrical charge.
- Prevent static discharge before handling sensitive components.
- Never force a component or connector into place.
- Consult the equipment manual before disassembling unfamiliar hardware.
- Some repairs should be left to qualified professionals.
- The simulation teaches concepts and is not instructions for dismantling the player's real computer.

### Practice and assembly

The player first matches each component to its purpose. This checks understanding before placement.

The guided assembly then proceeds in a logical order:

1. Install the processor using its alignment marker.
2. Install the RAM using the alignment notch and seat it until the clips close.
3. Install the cooling assembly and connect the fan cable to the labeled header.
4. Place and secure the motherboard using the labeled standoffs and screws.
5. Install the SSD in its labeled M.2 slot.
6. Install the power supply without opening it.
7. Connect the labeled 24-pin motherboard and processor power cables.
8. Install the graphics card in the correct PCIe slot.
9. Connect the monitor to the graphics card, not the motherboard video port.
10. Connect the monitor, keyboard, mouse, and power cable.
11. Confirm the power-supply switch position, then press the case power button.

The Safehouse system chassis has its front-panel buttons and indicators preconnected so the lesson does not become a tiny-cable memory exercise. The simulation uses a pre-applied thermal pad; real thermal-compound application is explained only as a safety note.

### Checkpoint: Assemble and boot the computer

The player must correctly match the required components to their functions, install the processor, RAM, cooler, storage, and graphics card, place the motherboard and power supply, connect the required cables, and power on the system.

The checkpoint inspects the simulated placement and connection state, then runs the startup sequence.

Mistakes provide specific clues:

- **Missing processor power:** the fans start briefly, but the system does not complete POST; check the labeled CPU power connection.
- **RAM not fully seated:** the system reports a memory detection error; inspect the RAM seating.
- **Monitor connected to the motherboard:** the monitor has no signal although the graphics card is installed; check the display cable.
- **Power supply switched off:** no response; check the power cable and switch.

The player can recheck the guidance, correct the placement, and retry without penalty.

### Result

```text
POWER: ON
POST: COMPLETE
STORAGE: DETECTED
MEMORY: DETECTED
WINDOWS: STARTING
```

Windows loads successfully. The Workshop application then reports **Not responding**, and the holographic figure briefly glitches into view. The player has clearly succeeded at getting the computer running while a separate Workshop problem remains.

### Accessibility

Every drag action has a keyboard-accessible select-and-place alternative. Component labels are readable without color, ports use distinct shapes and text, audio cues have visual equivalents, and the assembly can be reset without losing completed component learning.

## Lesson 2: Computing basics

### Story purpose

With the computer running, Mara connects the first boot to the lesson.

> **Mara:** “Now that the computer is working, let’s see what happens when you ask it to do something.”

The lesson follows a saved Workshop photograph through the computer.

### Concepts

The four computing jobs are:

- **Input:** receiving data or instructions.
- **Processing:** working with information.
- **Storage:** keeping data for later.
- **Output:** presenting a result.

Opening the photograph demonstrates all four: clicking the file provides input, storage supplies the saved file, the processor handles its information, and the monitor displays the image.

RAM is temporary working memory used by running programs. Storage keeps files after the computer shuts down. A program and its current work move through memory while in use; a saved photograph remains in storage after the program closes.

The player sees the relative order of bit, byte, kilobyte, megabyte, gigabyte, and terabyte. A byte contains eight bits. Chapter 1 does not require conversions or detailed calculations.

ROM is reference-only: non-volatile memory containing essential low-level instructions. NVMe is reference-only: a way some SSDs communicate, not a separate storage category. Neither is assessed.

### Practice

The player reviews four actions and predicts which computing job is involved: pressing a key, a processor calculating a total, a drive retrieving a document, and speakers playing sound. The computer then reopens the Workshop photograph and shows where it waited after shutdown.

### Checkpoint: Sort the computing jobs

The player sorts four new examples:

| Example | Correct job |
|---|---|
| Pressing a key | Input |
| A processor calculating a total | Processing |
| Sound playing through speakers | Output |
| Saving a document to a drive | Storage |

The player also answers where a reopened document must have been kept after shutdown: **storage**.

Incorrect answers receive a specific reminder and another attempt. Hints and retries remain unlimited and penalty-free.

### Result

```text
INPUT RECEIVED
DATA PROCESSED
OUTPUT DISPLAYED
SOURCE: STORAGE
```

The Workshop photograph appears successfully. Windows and the desktop work normally, reinforcing that the remaining problem belongs to the Workshop application. A faint voice says, “That isn’t supposed to—” and cuts out before identifying itself.

### Accessibility

Sorting uses text labels rather than colors, supports keyboard input, captions all spoken feedback, and communicates the photograph’s loaded state through text as well as animation.

## Lesson 3: Operating systems and using Windows

### Story purpose

The PC starts, but the Workshop still does not work. Mara asks the player to determine what is functioning and what is not.

> **Mara:** “A computer can be working while one of its programs is not. Let’s find out which part is failing.”

### Concepts

The operating system helps hardware, applications, files, devices, and user accounts work together. An interactive diagram places it between the computer's hardware, installed applications, stored files, connected devices, and the user.

The player explores the simulated Windows desktop, Start menu, taskbar, Settings, notifications, File Explorer, and window controls. Each selection explains its purpose and how to find it again. Icons always include readable labels or accessible names.

The lesson introduces:

- **Application:** a program the player opens for a task.
- **Background service:** a program that runs without a main window.
- **Driver:** software that helps Windows communicate with a device.

Closing an application window may not stop a background service. The player observes this in a simulated process view but does not terminate anything.

Windows provides a graphical interface through windows, icons, and menus. A command-line interface offers another way to interact through typed commands. Terminals, shells, and commands remain conceptual; no commands are required in Chapter 1.

The lesson briefly compares operating systems across computers, phones, servers, and other devices without claiming that one is universally better or completely secure.

### Practice: Inspect the running system

The player opens a simulated system-status view containing Windows Explorer running, Settings running, the Workshop application **Not responding**, a Workshop background service **Waiting**, and a display driver **Working normally**. Each item explains what its status means and whether it is an application, service, or driver.

### Checkpoint: Identify the failing part

The player completes a diagnostic card by:

1. Identifying one role of the operating system.
2. Opening Settings and File Explorer.
3. Identifying one application, one background service, and one driver.
4. Explaining why closing an application window does not necessarily stop its service.
5. Selecting the supported conclusion.

**Correct conclusion:** Windows and File Explorer are working; the Workshop application is not responding.

Incorrect conclusions receive evidence-based feedback. For example: “The desktop and File Explorer respond, so Windows itself is running. Compare that with the Workshop application’s status.” Hints and retries remain unlimited and penalty-free.

### Result

```text
WINDOWS: OPERATIONAL
FILE EXPLORER: OPERATIONAL
SETTINGS: OPERATIONAL
WORKSHOP APPLICATION: NOT RESPONDING
WORKSHOP SERVICE: WAITING
DISPLAY DRIVER: WORKING
```

A holographic figure briefly appears and says, “Not the system—the room. The room is…” before disappearing.

### Accessibility

Navigation supports keyboard and pointer input. Every icon and status has a readable label, focus order follows the visual layout, status is not communicated by color alone, diagrams have text equivalents, and Finch's partial appearance has a reduced-motion alternative.

## Lesson 4: Files, folders, and preserving evidence

### Story purpose

The Workshop contains loose records that must be organized before the player changes settings.

> **Mara:** “Before we change anything, we need to know where the files are and preserve what we already have. A repair is only useful if it doesn’t destroy the evidence.”

The player practices on a separate fictional folder so the boss can later apply the method independently.

### Concepts

The player opens a practice folder and inspects a `.log` file. File properties show its name, extension, location, size, and date modified.

- A **file** contains information.
- A **folder** groups related files.
- A **path** describes where a file is located.
- An **extension** suggests the file's type but does not prove its contents are safe.
- File Explorer can display hidden extensions, helping the player identify exactly what they are handling.

The player turns on visible file extensions and checks that a file does not have a misleading name or extra extension.

### Copying versus moving

The player copies a practice log into another folder. Both files remain visible: the original stays in its source folder and the copy appears in the destination. Editing the copy does not change the original.

The player then moves a disposable file and observes that it disappears from its original location. This demonstrates why preserving evidence requires a copy, not a move.

**Optional reference, not assessed:** Compression can reduce a file's size, while encryption protects its contents from being read without the correct key.

### Folder organization

The player creates:

```text
Practice/
  Logs/
  Evidence/
  Recovery/
  Settings/
```

Only `Logs` and `Evidence` are used in this lesson. The other folders are used in Lesson 5.

### Practice: Inspect a practice log

The player opens `Practice/Logs`, selects `sensor.log`, reads its properties, turns on visible filename extensions, and previews the file without editing it. Previewing is distinguished from editing, and the original remains unchanged.

### Checkpoint: Create a complete evidence set

The practice folder contains `sensor.log`, `power.log`, and `display.log`. The player must:

1. Create `Practice/Evidence`.
2. Copy all three logs into `Evidence`.
3. Leave all three originals in `Logs`.
4. Open the evidence folder once and preview one copy.
5. Confirm all three copies are present and readable.

The interface verifies every copy and confirms the originals remained in place. The player does not need to open every copy individually.

Expected result:

```text
ORIGINALS: 3 PRESENT, UNCHANGED
EVIDENCE COPIES: 3 PRESENT
EVIDENCE ACCESS: READABLE
ORIGINAL LOCATION: LOGS
```

Feedback identifies a missing copy, a moved original, an edited source, an extension mistake, or an unreadable copy. Hints and retries remain unlimited and penalty-free. The practice folder can be reset without resetting completed lesson progress.

### Result

```text
PRACTICE EVIDENCE SET: COMPLETE
ORIGINALS PRESERVED
COPIES VERIFIED
NO PERMISSION CHANGES
```

> **Mara:** “Now we can organize without guessing—and without losing what was already there.”

### Accessibility

Copy, paste, preview, and folder creation support keyboard input. File states use text, paths remain screen-reader accessible, hidden-extension settings have visible state and explanation, and drag-and-drop has an equivalent copy/paste interface.

## Lesson 5: Accounts, permissions, and trusted recovery files

### Story purpose

The player must inspect records and restore practice settings without unnecessary administrator access. Mara cannot grant administrator approval because the facility stopped accepting her administrator credentials after Echo locked her out. She needs the player because the recovery account already holds the access required.

This is a subtle story clue, not something the player understands in Chapter 1.

> **Mara:** “A repair account should have enough access to do the job—and no more. The Workshop already has a prepared standard account for this work.”

### Concepts

Signing in tells Windows which user is using the computer. The account carries its own permissions, desktop settings, and accessible files.

- A **standard account** is intended for routine work. It can use permitted applications and files but cannot make unrestricted system changes.
- An **administrator account** can approve system-wide changes and manage other accounts. Administrator access is not automatically safer or better, and routine work should use the standard account.

**Least privilege** means granting only the access required for the current task.

| Task | Appropriate access |
|---|---|
| Reading a log | Read |
| Copying an evidence file | Read from source and create in the evidence folder |
| Changing Workshop settings | Access to the writable Settings folder |
| Installing system-wide software | Administrator approval |
| Managing another user account | Administrator access |

### Temporary lab credentials

Mara provides a clearly labeled **Temporary Setup Card** in the simulation:

```text
TEMPORARY LAB ACCOUNT
USERNAME: trainee
PASSWORD: [hidden until revealed]
PURPOSE: CHAPTER 1 PRACTICE
STATUS: CHANGE AFTER SETUP
```

The password can be revealed, copied, or shown briefly. The credentials are fictional. Real passwords should normally be stored in an approved password manager, not an ordinary readable text file. The lab password is changed after setup. The game never uses or changes the player's real account.

### Prepared Workshop permissions

The practice area uses permissions already provisioned by the facility:

| Folder | Standard-account access |
|---|---|
| `Logs` | Read |
| `Evidence` | Create files and read |
| `Recovery` | Read-only |
| `Settings` | Read and write Workshop application settings |

These are Workshop application folders, not Windows system folders. The standard account can perform the recovery because the folders were prepared with exactly the required access. Mara did not create or alter these permissions.

The player attempts one prohibited change in `Recovery` and receives: “Permission denied. You can read the trusted file, but you cannot change or remove it.” This demonstrates that a denial does not mean the file is damaged, encrypted, or inaccessible.

### Trusted recovery files

**Settings** contains the Workshop files currently in use. **Recovery** contains trusted originals supplied for restoration.

The rule is:

1. Read the trusted file from `Recovery`.
2. Copy it into `Settings`.
3. Leave the original in `Recovery`.
4. Verify the active copy without editing either file manually.

### Practice: Inspect account access

The player opens the account panel, identifies the standard account, reviews the four folder permissions, opens a practice log read-only, attempts to modify a file in `Recovery`, and explains why read access is sufficient for that file.

No actual permissions are changed.

### Checkpoint: Restore a practice setting safely

The player must:

1. Sign out of the setup session.
2. Sign in using the temporary standard account.
3. Confirm that the account type is **Standard**.
4. Open `Practice/Recovery`.
5. Copy `practice.cfg` into `Practice/Settings`.
6. Confirm the original remains in `Recovery`.
7. Confirm both copies are present and unchanged.
8. Confirm that no permissions were modified.

Expected result:

```text
ACCOUNT: STANDARD
RECOVERY ORIGINAL: PRESENT
ACTIVE SETTING: RESTORED
PERMISSIONS CHANGED: NONE
EVIDENCE ACCESS: READABLE
```

Feedback identifies a wrong account, a moved Recovery original, an unchanged Settings folder, a permission change, or manual editing. Hints and retries remain unlimited and penalty-free.

The player remains signed in to this standard account for the rest of Chapter 1.

### Result

The practice setting is restored using the standard account.

> **Finch:** “Standard access, originals preserved, and no unnecessary permissions. Almost professional.”
>
> *Finch flickers.*
>
> **Finch:** “Which is more than I can say for the last person who—”

The hologram disappears before finishing.

> **Mara:** “The recovery policy still recognizes this account. Interesting. Keep working.”

Mara's reaction is deliberately brief and ambiguous.

### Accessibility

Password reveal is a labeled control, password entry supports paste without exposing the value visually, account and permission states use full text labels, permission tables are keyboard navigable and screen-reader compatible, and denial is communicated through text and an icon.

## Lesson 6: Device protection and Windows Security

### Story purpose

Mara asks the player to verify that the Workshop's existing protection services are functioning. She cannot change system-wide settings and does not suggest bypassing them.

> **Mara:** “The machine already has protection policies configured. I can’t approve changes to them, but we can check whether they’re still active.”

### Concepts

- **Antivirus:** looks for harmful software and records detections.
- **Firewall:** helps control network connections.
- **Updates:** provide fixes, improvements, and security corrections.
- **Protection history:** records previous scans, actions, and detections.

Operating-system and application updates should come from trusted sources. Protection should not be disabled merely to make an unknown program work.

### Managed settings

The simulated Windows Security interface shows:

```text
MANAGED BY FACILITY POLICY
CHANGES REQUIRE SYSTEM ADMINISTRATOR
```

The player can inspect settings but cannot alter them. This reinforces the standard-account boundary instead of inventing an approval Mara cannot provide.

The lesson distinguishes **viewing**, **responding to an alert**, and **changing system-wide protection policy**.

### Navigating Windows Security

The player opens the interface through Start or Settings and explores Virus & threat protection, Firewall & network protection, Windows Update, and Protection history.

Each area displays its current state, who manages it, what the state means, and whether the standard account can change it.

### Windows Security dry run

The player reviews a benign simulated notification. The exercise identifies its source, affected protection area, displayed status, **Get details**, where severity appears, the available response controls, and why details must be reviewed before acting.

The player chooses **Review**, confirms no threat is present, and closes the notification. No blocking action is performed yet. The actual security alert and **Block threat** response remain reserved for the boss.

### Checkpoint: Verify the protection state

The player must:

1. Locate Windows Security.
2. Confirm real-time antivirus protection is enabled.
3. Confirm the firewall is enabled.
4. Confirm updates are current.
5. Identify that these settings are managed by facility policy.
6. Open the benign notification, review its details, and close it without changing protection settings.

Expected result:

```text
ANTIVIRUS: ON — MANAGED BY POLICY
FIREWALL: ON — MANAGED BY POLICY
UPDATES: CURRENT
NOTIFICATION REVIEWED
PROTECTION CHANGES: NONE
```

Feedback warns against disabling protection, changing unrelated managed settings, or closing an alert without reviewing it. Hints and retries remain unlimited and penalty-free.

### Result

```text
ANTIVIRUS: OPERATIONAL
FIREWALL: OPERATIONAL
UPDATES: CURRENT
ALERT RESPONSE: DELEGATED TO RECOVERY ACCOUNT
```

> **Mara:** “Delegated to the recovery account? I never set that.”
>
> **Finch:** “Perhaps the recovery account set it for itself.”
>
> **Mara:** “Keep working.”

The player does not yet understand why the trainee account has a delegated security-response permission.

### Boss connection

Existing facility policy grants the recovery account one specific action during the boss: **respond to a detected threat**. The player can review and block the suspicious startup file but still cannot change protection policy, manage accounts, or grant additional access.

### Accessibility

Managed and changeable settings use text labels as well as icons. Every alert control has a keyboard-accessible name, severity is written as text, sounds have visual and caption equivalents, and practice is clearly distinguished from a real detection.

## Lesson 7: Choosing and managing software

### Story purpose

Mara asks the player to install a small fictional Workshop reference tool and remove an unwanted trial application. Because the player uses a standard account, the lesson uses software installed for the current user rather than system-wide.

> **Mara:** “Not every program needs access to the whole computer. We’ll use software that belongs to your user account.”

### Concepts

**Open-source software** has source code available for review and reuse under its license. **Proprietary software** does not generally provide its source code, and use follows the publisher's license. Neither type is automatically safe or trustworthy; the player must check the publisher and source.

The player compares one-time purchases, subscriptions with continuing access while payments remain active, free software with optional paid features, and product keys used to activate licensed software. A product key is not proof that a download is trustworthy.

Before downloading, the player checks:

- Publisher name
- Official website or approved app store
- Exact application name
- Compatibility
- Cost or subscription terms
- Permissions or access requested
- Whether the software is already installed

Repackaged installers and pirated software can contain malware or bundled unwanted applications.

### Per-user versus system-wide installation

| Installation type | Typical access |
|---|---|
| Per-user application | Can often be installed with the prepared standard account |
| System-wide application | Normally requires administrator approval |
| Changing Windows protection policy | Requires administrator access |

The player is not asked to bypass an administrator requirement. If a fictional application requires system-wide installation, the correct action is to stop and request an approved administrator, not search for a workaround.

### Installed applications and uninstalling

The simulated **Installed apps** list shows application name, publisher, installation source, approximate size, and an Uninstall control. Some applications are installed for the current user; others are managed system-wide and cannot be removed with the standard account.

### Practice: Compare download sources

The player reviews three fictional listings for the same application: an official publisher page, an approved app store listing, and a third-party page offering a “full unlocked version.” The player compares publisher, source, requested permissions, and licensing. The third-party listing is rejected despite appearing cheaper or more capable.

### Checkpoint: Install and remove software safely

The player must:

1. Select the official source for **Workshop Field Notes**.
2. Confirm the publisher and application name.
3. Confirm that the application supports per-user installation.
4. Install it using the simulated installer.
5. Open the Installed apps list.
6. Identify **Workshop Helper Trial** as unwanted software.
7. Confirm that the trial is installed for the current user.
8. Uninstall it and complete the simulated removal.
9. Confirm that Workshop Field Notes remains installed and the trial application is gone.

Expected result:

```text
INSTALLED: WORKSHOP FIELD NOTES
SOURCE: OFFICIAL PUBLISHER
INSTALL TYPE: CURRENT USER
UNINSTALLED: WORKSHOP HELPER TRIAL
ACCOUNT: STANDARD
ADMINISTRATOR APPROVAL: NOT REQUIRED
```

Feedback identifies a wrong source, a system-wide installer, an unlocated unwanted app, a system-managed app, or an incorrect installation scope. Hints and retries remain unlimited and penalty-free. No actual software is installed on the player's computer.

### Result

> **Finch:** “Protection first. Trusted software second. Keep them—”
>
> *His image fractures.*
>
> **Finch:** “—together. That’s what I was supposed to say.”

He disappears again. This is a character moment, not a puzzle clue.

### Accessibility

Installer choices and the Installed apps list support keyboard navigation. Source, publisher, installation scope, and uninstall status use text labels. No confirmation relies on color or sound alone.

## Restoration boss

### Status and approach

The Chapter 1 boss is untimed. It checks the player's understanding and the actual simulated file, account, configuration, and protection state. It does not require shell commands, script execution, real system changes, or a separate final Submit.

The player applies the seven lessons to restore the Workshop and preserve its records.

### Opening

The player powers on the repaired PC. Windows starts normally, but the Workshop remains unresponsive. Finch flickers without fully appearing.

A **Workshop Recovery README** is available on the desktop. It explains the goal and folder purposes but does not provide exact clicks.

The Workshop status board shows:

```text
POWER: ON
WINDOWS: OPERATIONAL
WORKSHOP APPLICATION: NOT RESPONDING
WORKSHOP SERVICE: WAITING
RECORDS: UNORGANIZED
PROTECTION: STATUS UNKNOWN
```

There is no Echo message or taunt in Chapter 1.

### Workshop Recovery README

**Goal:** Restore the Workshop while preserving its records.

1. **Diagnose the Workshop.**
2. **Protect the existing records.**
3. **Restore the Workshop settings.**
4. **Resolve the detected security threat.**

**Folder guide:**

- **Logs:** original log files.
- **Evidence:** review copies of logs.
- **Startup:** Workshop startup files.
- **Settings:** active Workshop settings.
- **Recovery:** trusted original settings files.

The README states goals and folder purposes, not a complete walkthrough. It remains available throughout the boss and does not affect the perfect bonus. Completed goals are labeled **Complete**; an undone requirement makes its goal incomplete again. Status is readable without color or strikethrough alone.

### Goal 1: Diagnose the Workshop

The player inspects Windows, File Explorer, Settings, the Workshop application status, the Workshop background service, and Finch's connection status.

**Required conclusion:** Windows is working; the Workshop application is not responding.

The player does not restart Windows or randomly change system settings.

Result:

```text
DIAGNOSIS: WORKSHOP APPLICATION FAILURE
OPERATING SYSTEM: OPERATIONAL
```

### Goal 2: Protect the existing records

This goal combines file organization, evidence preservation, and standard-account verification.

#### Organize the loose files

The Workshop desktop contains:

- `door.log`
- `boot.log`
- `workshop-status.log`
- `WorkshopBootStatus.ps1`
- `WorkshopDisplayInit.ps1`
- `WorkshopSync_ECHO-01.ps1`

The player places the three logs in **Logs** and the three startup files in **Startup**. The unknown `WorkshopSync_ECHO-01.ps1` must be handled without being opened, edited, or run.

**Requirement:** every original is in the correct folder and no startup script has executed.

#### Preserve the evidence

The player creates:

```text
Evidence/
  Workshop/
```

They copy each log into `Evidence/Workshop`, leaving the originals in `Logs`. The player opens the evidence folder once and previews one review copy. The interface then verifies that all three copies are present and readable.

**Requirement:** three originals remain unchanged and three readable copies exist. Opening every copy individually is not required.

#### Confirm standard access

The player is already signed in to the prepared standard account from Lesson 5. They confirm:

- The account type is **Standard**.
- No permissions were changed.
- The evidence folder is readable.
- The trusted Recovery files remain read-only.

**Requirement:** the player can perform the recovery without administrator access or permission changes.

#### Story moment

After the evidence set is verified, Finch briefly reads the recovered logs.

> **Finch:** “North entrance access granted at 08:14. Workshop door access denied at 08:15. Then the computer starts at 08:20. Someone entered the building but not this room.”
>
> **Mara:** “Or an old record is missing context. Preserve it and keep moving.”

The door record must include a date or source marker that distinguishes it from the player's own arrival. It is a story clue, not another objective.

Result:

```text
RECORDS: ORGANIZED
EVIDENCE: PRESERVED
ACCOUNT: STANDARD
PERMISSIONS: UNCHANGED
```

### Goal 3: Restore the Workshop settings

The Workshop reports that its active configuration is missing. The player opens **Recovery** for trusted files and **Settings** for active Workshop settings.

They copy:

- `Workshop.cfg`
- `Display.cfg`

from Recovery into Settings, leaving both originals in Recovery. The player does not edit configuration content by hand.

The Workshop status changes to:

```text
SETTINGS: RESTORED
DISPLAY CONFIGURATION: VERIFIED
WORKSHOP APPLICATION: STARTING
WORKSHOP SERVICE: READY
```

The Workshop attempts to load. This completes the restoration tasks.

Result:

```text
TRUSTED SETTINGS: RESTORED
RECOVERY ORIGINALS: PRESERVED
```

### Goal 4: Resolve the detected security threat

The Windows Security notification appears only after the earlier recovery checks pass: diagnosis is complete, the records are organized, evidence copies are preserved, standard access is verified, and the trusted settings are restored.

Delaying the alert prevents the player from blocking the suspicious file before completing the rest of the recovery.

The notification identifies:

- Windows Security
- Virus & threat protection
- Threats found

The player:

1. Selects **Get details**.
2. Reviews the simulated **Current threats** card.
3. Finds `WorkshopSync_ECHO-01.ps1` listed as **Severe**.
4. Selects **Block threat**.
5. Selects **Start actions**.

The file is blocked but is not deleted or quarantined by the player. Existing facility policy delegates threat response to the recovery account. The player cannot change protection policy, manage accounts, or grant additional access.

After the action completes, the Workshop verifies:

```text
ANTIVIRUS: ON
FIREWALL: ON
UPDATES: CURRENT
THREAT RESPONSE: COMPLETE
```

The boss completes automatically after all final checks pass. There is no separate Submit button.

### Passing checks

1. The player identifies that Windows works but the Workshop does not.
2. The three logs are in **Logs**, the three startup files are in **Startup**, and no startup script ran.
3. Each log has a readable review copy in `Evidence/Workshop`; every original remains unchanged in **Logs**.
4. `Workshop.cfg` and `Display.cfg` are copied unchanged into **Settings**, with both trusted originals remaining in **Recovery**.
5. The player remains on the prepared standard account, can read the evidence, and has not changed permissions.
6. The player reviews the Windows Security alert, identifies the severe file, blocks it, and starts the actions.
7. Antivirus, firewall, and updates remain in their required states.

The game checks the actual simulated folder, file, account, configuration, and protection state rather than accepting a written report.

### Feedback

Mistakes provide specific technical clues without completing the task:

- **Unknown startup file run:** “The unknown script executed. That was not required for recovery. Undo the action and inspect the filename and location instead.”
- **File moved instead of copied:** “A source log left Logs. Evidence preservation requires a copy.”
- **Evidence missing:** “Compare the filenames in Logs and Evidence.”
- **Wrong account:** “Recovery must be completed with the prepared standard account.”
- **Permissions changed:** “Changing permissions was not required. Restore the prepared access.”
- **Configuration edited manually:** “Use the trusted recovery copy rather than changing the file contents.”
- **Alert skipped:** “Review the detected item’s details before choosing an action.”

The player can undo, retry, and reopen the README at no penalty.

### Visual restoration feedback

The Workshop physically recovers as goals complete:

- **Goal 1:** diagnostic lights activate.
- **Goal 2:** the record cabinet opens, evidence folders populate, and file states become verified.
- **Goal 3:** displays flicker on and the Workshop progress bar advances.
- **Goal 4:** the security shield activates, the alert closes, and Finch stabilizes.

Finch contributes short lines as each goal completes rather than remaining silent until the ending. Every animation and sound has a reduced-motion and text alternative.

### Fictional log contents

The door entry is a story clue, not an additional boss objective. It must not be mistaken for the player's own arrival record; implementation must include a visible source, date, or location distinction.

**door.log**

```text
08:14  North entrance: Access granted
08:15  Workshop door: Access denied
```

**boot.log**

```text
08:20  Computer powered on
08:21  Windows started successfully
08:21  User signed in
```

**workshop-status.log**

```text
08:22  Workshop application: Not responding
08:22  Workshop system: Not ready
```

Later context reveals that `WorkshopSync_ECHO-01.ps1` was a corrupted safeguard intended to prevent Mara's lab from returning. Its harmful effects were real but do not prove that Echo intended harm.

### Boss completion and cutscene

After the checks pass and the file is blocked, Finch's hologram flickers into view and steadies.

> **Finch:** “Oh! There I am. For a moment, I thought I’d misplaced myself.”
>
> *He looks at the player.*
>
> **Finch:** “You must be the one who got things working again. Thank you. I’m Finch—the Safehouse’s system. Well, the parts of it I can remember.”
>
> *Finch pauses, studying the player.*
>
> **Finch:** “Have we met before? You look… Never mind. My memory isn’t quite what it used to be.”
>
> *He glances around the Workshop.*
>
> **Finch:** “Now, where did I put your welcome present?”

A secret compartment opens at the end of the cutscene with a thumb drive containing the Project Planning Agent and any earned perfect-finish upgrade.

Finch is the Safehouse's system in holographic form, with a comedic personality and damaged memories. His system was destroyed years earlier when Echo destroyed the facility.

Mara presents the recovery as a victory. The player does not yet know that blocking the file removed one of Echo's safeguards.

### Chapter-ending cutscene

The player picks up the thumb drive from Finch's secret compartment.

> **Finch:** “One Project Planning Agent, ready for duty. Well, almost. It needs somewhere to live.”
>
> *Mara brings over a laptop and hands it to the player.*
>
> **Mara:** “This is yours. You’ll need it for your studies, practice, and homework while you’re here.”
>
> **Finch:** “And for me to send you very important reminders.”
>
> **Mara:** “Finch.”
>
> **Finch:** “Fine. Mostly important reminders.”
>
> *Mara gestures to the drive.*
>
> **Mara:** “Plug that in when you’re ready. Each component you recover will help you build something of your own.”

The player looks at the laptop and the drive as the scene fades out, ending Chapter 1.

The in-game laptop is the player's computer for later lessons and checkpoints. Each chapter's earned software component arrives on a separate in-game thumb drive. The first drive comes from Finch's secret compartment and can be used after the player receives the laptop. Installing a component does not affect the player's real computer.

## Story and checkpoint behavior

- Every lesson begins with a story purpose and ends with a single concrete, inspected result.
- Show actual tool output or visible system state.
- Identify the missed concept, offer a hint or guiding question, preserve the player's work, and allow unlimited penalty-free retries.
- Offer three hint levels without revealing the complete solution.
- Lesson hints and retries never affect the perfect bonus.
- The device-protection lesson introduces the simulated Windows Security interface and a benign notification. The actual threat alert and **Block threat** response remain reserved for the boss.
- The player stays on the prepared standard account throughout the chapter. Mara cannot authorize administrator actions and never offers to do so.
- The Workshop folders and delegated security response exist because of the facility's old administration. This prepares the later reveal that Echo held the administrator identity.
- The threat alert appears only after all earlier boss recovery checks are complete.
- No Echo message or taunt appears in Chapter 1.

## Saving

Automatically save progress after:

- Completing the hardware assembly
- Completing the evidence lesson
- Completing the account and recovery lesson
- Completing the device-protection lesson
- Entering the boss
- Completing each boss goal and individual recovery action

Returning restores files, folders, account state, sign-in state, README progress, alert state, and the current boss goal.

## Perfect-run rules and rewards

Ordinary mistakes, corrections, undos, and repeated attempts do not forfeit the perfect bonus.

Using an optional boss hint or Mara's AI-powered help triggers a warning. Confirming help forfeits the upgrade; cancelling preserves eligibility. Lesson hints and retries never affect eligibility.

Completing the chapter awards the **Project Planning Agent**, which helps the player brainstorm ideas and save approved drafts in an organized project folder. A perfect boss finish upgrades it to compare alternative ideas and create a more detailed development roadmap.

Finch is a story character and the Safehouse's holographic system, not a reward. No other Chapter 1 rewards are currently planned. The app's final name remains open.

## Accessibility requirements

- All hardware placement activities support keyboard-only input.
- Drag actions have an equivalent select-then-place interaction.
- File status and folder purposes never rely on color alone.
- Windows Security alerts have clear focus order, readable severity labels, and keyboard-accessible buttons.
- The benign dry-run notification is clearly identified as practice.
- Finch's glitches have a reduced-motion alternative and do not carry essential dialogue through distortion.
- Captions accompany all spoken dialogue and system sounds.
- Save-state, completion, and error feedback are available as text.
- File permission tables and installed-app lists are screen-reader compatible.

## Open implementation questions

- Exact fictional boot and hardware error names
- Exact startup and configuration file contents
- The date or source marker that distinguishes the door-log clue from the player's arrival
- How the prepared standard account and folder permissions are presented on desktop and mobile
- How the hardware activity adapts to the mobile version
- Final wording for real-world repair safety guidance
- Final illustrated layout of the simulated Windows Security alert
- Exact save-point frequency after playtesting
