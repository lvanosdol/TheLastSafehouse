# The Last Safehouse — Chapter 1 Design

> This is the authoritative Chapter 1 design. The [previous draft](../Previous%20Drafts/Chapter-1-Previous-Draft-2026-11-20.md) is preserved for historical reference.

## 18. IT-first Chapter 1 rewrite

**Status:** Approved working direction and authoritative current Chapter 1 design. The campaign story is in [Section 15 of the master design](../The-Last-Safehouse-Design.md#15-campaign-story--working-narrative).

### Chapter 1 purpose

Chapter 1 teaches real-world introductory IT skills before the player encounters the networking and database chapters. It uses a safe, fictional Workshop PC and system state. Python may be taught for a suitable automation or data task, but it is not the default language or the required solution for every IT problem.

Primary tools:

- Cross-platform IT concepts with Windows as the primary Chapter 1 environment.
- Windows navigation, File Explorer, and plain-text evidence files.
- Windows Security and device protection in a fictional simulation.
- A conceptual introduction to graphical and command-line interfaces; shell commands are not Chapter 1 lessons.
- SQL later in the curriculum, not as a Chapter 1 requirement.

### Opening scene: The onsite apprenticeship

The player is living an ordinary life and applies to a college Information Technology and Networking program as a beginner with no computer-repair experience. At a program open house, Mara notices the player's drive and willingness to learn. She offers a paid, beginner-friendly apprenticeship at a remote, decommissioned training facility: the work is onsite, the player will stay there during the placement, room and meals are provided, and Mara will teach from the basics. The player accepts as a voluntary step toward college and an IT career.

When Mara introduces herself, she asks the player's name. The player types a name to use for their character; this does not change the later reveal that the player is Echo.

Mara presents the facility as a hands-on training opportunity. She does not reveal that the player is the Echo or that he destroyed the facility to stop her experiments. The cause and timing of his memory loss remain open. Her respect for his potential may be genuine, but it is not the full reason she sought him out.

> **Player:** “I don’t have experience yet. I’m hoping college will teach me.”
>
> **Mara:** “Experience isn’t the only thing that matters. You’re curious, and you don’t give up when you don’t know something.”
>
> **Player:** “You think I could learn it?”
>
> **Mara:** “I do. I have a paid apprenticeship at a remote, decommissioned training facility. It’s onsite, so you’d stay there during the placement. Room and meals are provided, and I’ll teach you from the basics.”

### Arrival at the Safehouse

After accepting the apprenticeship, the player travels to the remote Safehouse. Mara greets him and leads him to the Workshop, where a broken PC is waiting. This is the room where Chapter 1's lessons take place. Mara explains that she will teach him step by step; she does not expect him to know how to repair it already. The broken PC is the player's first hands-on lesson, and once it powers on it becomes the computer used for later training.

### Chapter 1 lesson sequence

#### Lesson 1: Meet and rebuild the computer

**Mara's introduction:** "Before we put this computer back together, let's meet its parts. You don't need to know everything yet—we'll take them one at a time."

**The parts:** Mara introduces the motherboard as the main board connecting components; the processor as the part that carries out instructions; RAM as temporary working memory; storage as the place files remain after power is off; and the power supply as the component that provides power. She briefly shows common storage devices such as hard drives, SSDs, and external drives. She also introduces graphics, networking, cooling, and peripherals such as the monitor, keyboard, and mouse as the player encounters them.

**Safety:** Before the fictional rebuild, Mara explains that real computers should be powered off and unplugged before working inside them, and that players should never open a power supply.

**Practice:** The player examines each fictional part and matches it to its name and purpose. Mara gives a short explanation when a part is selected.

**Checkpoint:** The player assembles the PC, connects the labeled cables and peripherals, and powers it on. Incorrect placements provide specific, helpful feedback; hints and retries are unlimited and penalty-free. Windows starts, but the Workshop remains unresponsive and Finch glitches in and out. The repaired PC is used for later lessons.

The [previous pre-rebuild sequence](../Previous%20Drafts/Chapter-1-Pre-Rebuild-Lessons-2026-11-20.md) is historical. Related concepts are introduced in the lessons below when they become useful.

After the computer boots, these five short lessons follow. The repaired computer presents the lessons with interactive explanations and examples. Mara remains available for optional help and guidance and can introduce or connect lessons when needed. Each lesson includes a simple example, hands-on practice, and a checkpoint with unlimited help and penalty-free retries. Windows works, but the Workshop remains unresponsive and Finch glitches.

2. **Computing basics:** Mara introduces the activity: "Now that the computer is working, let's see what happens when you ask it to do something." The computer teaches input, storage, processing, and output while the player opens a saved picture of the Workshop: the mouse click provides an instruction, the stored picture is retrieved from the drive, the computer processes its information, and the picture appears on the screen. Each job is highlighted as it happens. An interactive comparison shows how memory and storage support the computer's work. Introduce ROM as non-volatile memory, and explain that NVMe is a way some SSDs communicate, not a separate storage device. **Checkpoint:** Sort four new examples into the four jobs: pressing a key, a processor calculating a total, sound playing through speakers, and saving a document to a drive. Wrong answers receive helpful feedback and another attempt. The three optional hint levels offer a reminder, suggest where to look, and ask a guiding question without revealing the complete solution.
3. **Operating systems and using Windows:** The computer explains how an operating system helps programs and hardware work together. An interactive diagram shows it managing files, devices, applications, and user access. The lesson briefly compares operating systems on computers, phones, servers, and other devices. The player explores the Windows desktop, Start menu, taskbar, Settings, notifications, and File Explorer; selecting each shows what it is used for. The lesson also introduces a background service (a program working behind the scenes), a driver (software that helps Windows communicate with a device), and the command line as another way to interact with a computer, without requiring commands. **Checkpoint:** Identify the operating system's role; find Settings and File Explorer; identify a running application or background service in a simulated example; and recognize that Windows works even though the Workshop application does not. Mara is available for help; hints and retries remain unlimited and penalty-free. The [previous separate lessons](../Previous%20Drafts/Chapter-1-OS-and-Windows-Lessons-2026-11-20.md) are preserved for reference.
4. **Files, folders, and permissions:** The computer teaches through a small interactive practice area.

   - **Files and folders:** The player opens a practice folder, examines a `.log` file, and sees its name, location, and properties. A visual example shows that a path tells them where a file is located. Introduce file types, extensions, and naming rules. Compare file and drive sizes on screen and introduce bits, bytes, KB, MB, GB, TB, and PB in order without requiring detailed calculations. Briefly distinguish storage capacity from processor clock frequency, measured in MHz or GHz.
   - **Copying:** The player makes a review copy of a practice file. The computer shows both files so the player can see that the original remains unchanged. It briefly compares compression, which can reduce file size, with encryption, which protects information from being read without the right key.
   - **Accounts and permissions:** An interactive example shows that signing in identifies the user, while permissions determine what they can read or change. The player compares a standard account with an administrator account and sees an example of access being denied.

   **Checkpoint:** Open `CREDENTIALS.txt` directly on the simulated desktop and use its fictional sign-in details to sign in to a simulated standard account. In the prepared practice area, create an evidence copy of a practice log, leaving the original intact without changing permissions. The player remains signed in to that account for the boss and does not have to sign in again; any authorized setup practice in later lessons is separate. The file and credentials are only for the fictional exercise; explain that real passwords should not be stored in an ordinary readable file. The exercise does not sign in to or change the player's real device. Mara is available for help; hints and retries remain unlimited and penalty-free.

   The [previous separate lessons](../Previous%20Drafts/Chapter-1-Files-and-Permissions-Lessons-2026-11-20.md) and [account-creation checkpoint](../Previous%20Drafts/Chapter-1-Account-Creation-Checkpoint-2026-11-20.md) are preserved for reference.
5. **Protecting the device:** The computer presents interactive examples: antivirus looks for harmful software, a firewall helps control network connections, and updates deliver fixes and improvements, including security fixes. The player explores a simulated Windows Security screen, selecting each protection to learn what it does, and learns how to find Windows Security from Start or Settings. **Checkpoint:** Find Windows Security and turn on real-time antivirus protection and the firewall in a fictional practice screen. The practice uses an already-authorized setup session, so the standard account needs no extra permissions. No threat alert or threat response appears until the boss. The exercise changes nothing on the player's real device. Mara is available for help; hints and retries remain unlimited and penalty-free.
6. **Choosing and managing software:** The computer presents interactive examples comparing open-source and proprietary software, one-time purchases and subscriptions, and the purpose of a product key. It explains how to check the publisher and source before downloading, including app stores, and why pirated software can be risky. The player compares fictional download choices and explores the simulated list of installed apps. **Checkpoint:** Choose a trustworthy source for a fictional app, find an unwanted app in the installed-apps list, and remove it using **Uninstall**. If the simulated removal needs administrator approval, the exercise uses an already-authorized setup session rather than changing the standard account's permissions. All software and actions are fictional. Mara is available for help; hints and retries remain unlimited and penalty-free.

### Restoration boss

**Status:** Approved working direction. The [previous boss draft](../Previous%20Drafts/Chapter-1-Previous-Draft-2026-11-20.md) is historical. The revised boss uses the Chapter 1 lessons without requiring shell commands or a separate fake-fix challenge.

Windows works, but the Workshop is unresponsive and Finch flickers. The player uses a README on the fictional desktop to guide the recovery. There is no Echo message or taunt in Chapter 1.

#### Workshop Recovery README

**Goal:** Restore the Workshop while preserving its records.

1. Check what is and isn't working on the computer.
2. Organize the Workshop's loose log and startup files.
3. Preserve a review copy of every `.log` file. Leave the originals intact.
4. Restore the settings using the trusted copies in **Recovery**. Leave those originals intact.
5. Confirm you can access the evidence without changing your account permissions.
6. Review any Windows Security alert that appears.

**Folder guide:**

- **Logs:** Original log files.
- **Evidence:** Copies of logs for review.
- **Startup:** Workshop startup files.
- **Settings:** Active Workshop settings.
- **Recovery:** Trusted original settings files.

The README states goals and folder purposes, not the clicks or complete solutions. It remains available without affecting the perfect bonus. Completed steps are crossed out and labeled **Complete**; if a task is undone, its step becomes incomplete again. Status is readable without relying on color or strikethrough alone.

#### Passing checks

1. The player identifies that Windows works but the Workshop does not.
2. The original `door.log`, `boot.log`, and `workshop-status.log` are in `Logs`. `WorkshopBootStatus.ps1`, `WorkshopDisplayInit.ps1`, and the disguised `WorkshopSync_ECHO-01.ps1` are in `Startup`.
3. Each original log has a matching review copy in `Evidence/Workshop`, and the originals are unchanged.
4. `Workshop.cfg` and `Display.cfg` are copied from `Recovery` into `Settings`, with matching, unchanged originals remaining in `Recovery`.
5. Already signed in as the standard user from Lesson 4, the player opens `Evidence/Workshop` and opens each of the three review copies to confirm they can read them. The game checks that the player is using the standard account and has not changed permissions; no second sign-in is required. Once all three copies have been opened, the README marks this step **Complete**. The player need not edit either the copies or originals.

The game checks actual file and permission state, not just a report. Once these checks pass, the simulated Windows Security alert appears. All files and actions are contained in the game and do not touch the player's real computer or network. The player does not write or run startup scripts.

#### Boss log contents

These short fictional records are preserved unchanged, with a matching review copy of each in `Evidence/Workshop`. The door entry is a story clue, not an additional boss objective.

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

#### Windows Security and the cutscene

The alert identifies **Windows Security**, **Virus & threat protection**, and **Threats found**. Selecting **Get details** opens a simulated **Current threats** card showing `WorkshopSync_ECHO-01.ps1` as **Severe**. **Block threat** is selected, and the player clicks **Start actions**. The file is blocked; the player is not asked to delete or quarantine it.

After the checks pass and the file is blocked, the boss completes and the cutscene begins automatically. Finch's hologram flickers into view and steadies.

> **Finch:** "Oh! There I am. For a moment, I thought I'd misplaced myself."
>
> *He looks at the player.*
>
> **Finch:** "You must be the one who got things working again. Thank you. I'm Finch—the Safehouse's system. Well, the parts of it I can remember."
>
> *Finch pauses, studying the player.*
>
> **Finch:** "Have we met before? You look… Never mind. My memory isn't quite what it used to be."
>
> *He glances around the Workshop.*
>
> **Finch:** "Now, where did I put your welcome present?"

A secret compartment opens at the end of the cutscene with a thumb drive containing the Project Planning Agent and any earned perfect-finish upgrade. Finch is the Safehouse's system in holographic form, with a comedic personality and damaged memories; his system was destroyed years earlier when Echo destroyed the facility.

Mara presents the recovery as a victory. Later, the player learns that the corrupted file was a safeguard left by Echo to prevent Mara's lab from returning; its harmful effects are real but do not prove Echo intended harm.

#### Chapter-ending cutscene

*The player picks up the thumb drive from Finch's secret compartment.*

> **Finch:** "One Project Planning Agent, ready for duty. Well, almost. It needs somewhere to live."
>
> *Mara brings over a laptop and hands it to the player.*
>
> **Mara:** "This is yours. You'll need it for your studies, practice, and homework while you're here."
>
> **Finch:** "And for me to send you very important reminders."
>
> **Mara:** "Finch."
>
> **Finch:** "Fine. Mostly important reminders."
>
> *Mara gestures to the drive.*
>
> **Mara:** "Plug that in when you're ready. Each component you recover will help you build something of your own."

The player looks at the laptop and the drive as the scene fades out, ending Chapter 1. The first component remains on the drive until the player installs it.

The in-game laptop is the player's computer for later lessons and checkpoints. Each chapter's earned software component is delivered on a separate in-game thumb drive, which the player plugs into the laptop to install the component and build the app. The first drive comes from Finch's secret compartment; it can be used after the player receives the laptop. The laptop is a story and learning tool, not an additional chapter reward. In-game installation does not affect the player's real computer or change the app's intended real-world availability.

### Story and checkpoint behavior

- Every lesson begins with a story purpose and ends with a single concrete, inspected result.
- Show actual tool output or visible system state. Identify the missed concept, offer a hint or guiding question, preserve the player's work, and allow unlimited penalty-free retries.
- Offer three hint levels: a concept reminder, where to look, and a guiding question or similar example. Hints do not reveal the full solution.
- The protecting-the-device lesson introduces the simulated Windows Security interface without a threat. The first threat alert and the **Block threat** response remain reserved for the boss.
- Chapter 1 save points can follow hardware assembly, the OS and evidence lessons, and before the boss. Exact save points remain open.

### Chapter 1 perfect-run and rewards

Completing the chapter awards the **Project Planning Agent**, which helps the user brainstorm ideas and save approved drafts in an organized project folder. A perfect boss finish upgrades this agent to compare alternative ideas and create a more detailed development roadmap. The app's name remains open.

Finch is a story character and the Safehouse's holographic system, not a reward or blueprint. No other reward types are currently planned. The full seven-agent reward plan is in [Section 8 of the master design](../The-Last-Safehouse-Design.md#8-software-development-agents-and-chapter-rewards). The previous reward list remains in the [historical Chapter 1 draft](../Previous%20Drafts/Chapter-1-Previous-Draft-2026-11-20.md).

Ordinary mistakes and corrections do not forfeit the upgrade. Using a boss hint or Mara's AI-powered help forfeits it after a warning; cancelling preserves eligibility. Lesson help and retries remain penalty-free. The boss completes automatically after the checks pass and the player blocks the threat; there is no separate final Submit.

### Open Chapter 1 implementation questions

- Exact fictional boot and hardware error names.
- Whether the configuration and startup file contents need to be shown to the player.
- Accessible layout and state changes for the simulated Windows Security interface in the protecting-the-device lesson and the boss-only threat alert.
- How the player sees accounts and permissions in desktop and mobile views.
- How to present real-world safe-repair guidance without encouraging unsafe hardware work.
