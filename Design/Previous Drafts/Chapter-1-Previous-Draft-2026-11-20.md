# The Last Safehouse — Chapter 1 Previous Draft

> **Historical archive:** This is the Chapter 1 draft preserved before the lesson sequence was revised. It is not authoritative. Use [the current Chapter 1 design](../Chapter%201/Chapter-1-Design.md) instead.

> The text below reflects its status at the time it was saved.

## 18. IT-first Chapter 1 rewrite

**Status:** Approved working direction and authoritative current Chapter 1 draft. This section supersedes Sections 4–6 and the earlier Chapter 1 reward assignments in Section 9. Section 7's summary/menu ideas remain legacy concepts to reconcile. The apparent-villain and dual-reveal story is in Section 15.

### Chapter 1 purpose

Chapter 1 teaches real-world introductory IT skills before the player encounters the networking and database chapters. It uses a safe, fictional Workshop PC and system state. Python may be taught for a suitable automation or data task, but it is not the default language or the required solution for every IT problem.

Primary tools:

- Cross-platform IT concepts with Windows as the primary Chapter 1 environment.
- PowerShell and Bash-style commands and scripts.
- File Explorer/terminal navigation and plain-text evidence files.
- Windows and Unix-like user/account terminology with a clear distinction between them.
- SQL later in the curriculum, not as a Chapter 1 requirement.

### Opening scene: The onsite apprenticeship

The player is living an ordinary life and applies to a college Information Technology and Networking program as a beginner with no computer-repair experience. At a program open house, Mara notices the player's drive and willingness to learn. She offers a paid, beginner-friendly apprenticeship at a remote, decommissioned training facility: the work is onsite, the player will stay there during the placement, room and meals are provided, and Mara will teach from the basics. The player accepts as a voluntary step toward college and an IT career.

Mara presents the facility as a hands-on training opportunity. She does not reveal that the player is the Echo, that he destroyed the facility to stop her experiments, or that he sealed away his memories. Her respect for his potential may be genuine, but it is not the full reason she sought him out.

> **Player:** “I don’t have experience yet. I’m hoping college will teach me.”
>
> **Mara:** “Experience isn’t the only thing that matters. You’re curious, and you don’t give up when you don’t know something.”
>
> **Player:** “You think I could learn it?”
>
> **Mara:** “I do. I have a paid apprenticeship at a remote, decommissioned training facility. It’s onsite, so you’d stay there during the placement. Room and meals are provided, and I’ll teach you from the basics.”

### Arrival at the Safehouse

After accepting the apprenticeship, the player travels to the remote Safehouse. Mara greets him and leads him to the Workshop, where a broken PC is waiting. This is the room where Chapter 1's lessons take place. Mara explains that she will teach him step by step; she does not expect him to know how to repair it already. Short lessons introduce the basics before the rebuild.

### Chapter 1 lesson sequence

The first four lessons are short, interactive preparation for the rebuild. Each has a quick checkpoint and unlimited, penalty-free help and retries.

1. **Computing basics:** Explain input, processing, output, and storage with an everyday example.
2. **Measurements:** Introduce bit, byte, KB, MB, GB, TB, and PB in order, and distinguish storage capacity from CPU frequency in MHz and GHz. Keep the lesson focused on recognition rather than detailed calculations.
3. **Internal components:** Introduce the motherboard, firmware/BIOS, CPU, RAM, GPU, storage, and network interface card. Briefly compare wired and wireless connections and onboard versus expansion-card network interfaces.
4. **Memory and storage:** Contrast volatile and non-volatile storage, then introduce RAM, ROM, HDDs, SSDs, optical media, and external flash drives. Explain NVMe as a protocol commonly used by SSDs, not a separate storage medium.
5. **Workshop PC rebuild:** Mara guides the fictional rebuild: install the components, connect labeled matching cables and ports, and run a boot test. Introduce the cooler, PSU, fans, peripherals, and other practical build parts as the player encounters them. Wrong placements show one specific fictional error and a hint; retries are unlimited and penalty-free. The PC boots and Windows is available, but the Workshop does not function correctly and Finch glitches in and out instead of appearing normally.
6. **Boot process and basic troubleshooting:** Teach power, firmware/POST, boot device, operating-system load, sign-in, and Workshop readiness. A symptom checkpoint matches reboot/cooling, missing boot device, storage, or sign-in evidence to the relevant stage. Use the Workshop failure to distinguish a successful Windows boot from a later application-readiness problem. It does not require real hardware disassembly or unsafe repair steps.
7. **Windows desktop, settings, and notifications:** Teach the desktop, Taskbar, Start menu, Settings, File Explorer, and notifications. The checkpoint locates Settings, opens File Explorer, and inspects a notification. Windows Terminal is introduced in the first PowerShell lesson, when the player is ready to use it. Windows Security alerts are not part of this lesson.
8. **Files, folders, paths, types, and evidence preservation:** Teach filename/extension, path, folder hierarchy, and the difference among logs, configuration, scripts, and executables. Keep a `Workshop Restore README` on the desktop. It provides a category map, not procedural steps:
   - `Logs`: original logs.
   - `Evidence/Workshop`: review copies.
   - `Settings`: active configuration.
   - `Startup`: startup helpers.
   - `Recovery`: trusted copies.
   Practice with three harmless files: move `practice-door.log` from `Unsorted` to `Logs` and copy it to `Evidence/Workshop`; copy the known-good `Workshop.cfg` from `Recovery` to `Settings`; and place `Workshop-Startup-Check.ps1` in `Startup`. Use File Explorer for this practice. Shell-based file actions are introduced later in the PowerShell and optional Bash lessons.
9. **Accounts and permissions:** Distinguish authentication from authorization; explain standard and administrator accounts and fictional read/write/execute rights. The checkpoint shows a standard user preserving a log in Evidence without gaining administrator access or excessive rights.
10. **Required PowerShell foundations:** Teach the six short lessons and checkpoints in the PowerShell breakdown below. The final lesson provides a guided `.ps1` validation scaffold that produces the four-line boss report. The scaffold runs only in the fictional environment and performs no real destructive or network action.
11. **Optional Bash side activity:** Teach the six short lessons and checkpoints in the Bash breakdown below. This path is optional, does not gate chapter completion or the perfect-run reward, and grants a small knowledge note. Players who complete it may use a matching guided Bash validation scaffold for the boss. Teach syntax differences explicitly; do not imply PowerShell and Bash are interchangeable.
12. **Integrated practice:** The required route combines PC status, file restoration, account/permission verification, and the PowerShell workflow. Players who completed the optional Bash block may complete the same practice with Bash.
13. **Restoration boss:** After the Echo-triggered crash:
   1. **File sorting and known-good restoration**
      1. Use the desktop README to sort six loose files: three logs into `Logs` and three startup scripts into `Startup`.
      2. `Logs` contains `door.log` (an access clue), `boot.log` (startup stages), and `workshop-status.log` (system readiness). The prepared `door.log` contains:

         ```text
         time=08:14 door=NorthEntry result=ACCESS_GRANTED
         time=08:15 door=WorkshopDoor result=ACCESS_DENIED
         ```
      3. `Startup` contains `WorkshopBootStatus.ps1`, `WorkshopDisplayInit.ps1`, and `WorkshopSync_ECHO-01.ps1`. The first two scripts are ordinary helpers.
      4. Create a review copy of each original log in `Evidence/Workshop`. Leave the two known-good configuration copies in `Recovery` unchanged, and copy them into `Settings` as `Workshop.cfg` and `Display.cfg`.
   2. **Evidence, permissions, and report**
      1. Preserve all three original logs and check that the settings files are in place using the README and the practiced file-navigation skills.
      2. Use the practiced permission view to verify that the player remains a standard user and can write review copies to `Evidence/Workshop`; do not elevate the account or broaden permissions. The game validates this as a separate boss check, not as a fifth report line. Then run the practiced PowerShell validation scaffold (or its Bash equivalent if the optional block was completed) to save a report with four results: Windows boot passed, Workshop status is Ready, three original logs have three Evidence copies, and both settings files are present.
      3. The scaffold uses known filenames and status terms supplied in the template. The game separately validates that all three original logs remain in `Logs` with one matching review copy each in `Evidence/Workshop`; all three startup scripts are in `Startup`; both original configurations remain unchanged in `Recovery` with matching copies in `Settings`; and the permission check passes. Report text alone does not prove these states.
      4. Integrated practice adds harmless files and repetitions of file sorting, known-good restoration, evidence preservation, permission checks, and report checks; it does not include Windows Security.
   3. **Windows Security: Defender alert and Block threat**
      1. Before the alert, power, POST, storage, Windows load, and sign-in all succeed; when `WorkshopSync_ECHO-01.ps1` runs, the desktop flickers and the Workshop does not become ready.
      2. `boot.log` identifies the startup stage where the failure occurs. A simulated toast modeled on the supplied reference displays: **Windows Security**; **Virus & threat protection**; **Threats found**; “Microsoft Defender Antivirus found threats.”; and **Get details.**
      3. Clicking **Get details** opens the simulated Virus & threat protection page. Its **Current threats** card shows `WorkshopSync_ECHO-01.ps1`, severity **Severe**, the **Block threat** action selected, and a **Start actions** button.
      4. The player clicks **Start actions** to apply **Block threat**. The simulated threat state becomes Blocked and the script no longer runs; the player is not asked to delete or quarantine it. The familiar **Allow on device** option appears only as shown in the reference UI; it is not selected and does not create another decision branch. This in-game Windows Security view is simulated and is not connected to the player’s real device.
   4. **Reboot verification**
      1. After **Block threat** is applied, `WorkshopSync_ECHO-01.ps1` no longer runs. Reboot to verify that the same boot stages pass, Windows reaches the desktop, and `workshop-status.log` reports `status=READY` and `desktop=AVAILABLE`.
      2. `boot.log` contains a first failed Workshop startup attempt and a later successful attempt. Example entries:

         ```text
         attempt=1 stage=WindowsLoad result=PASS
         attempt=1 stage=SignIn result=PASS
         attempt=1 stage=WorkshopStartup result=FAIL item=WorkshopSync_ECHO-01.ps1
         attempt=1 stage=WorkshopReady result=FAIL
         ```

         After restart, it appends:

         ```text
         attempt=2 stage=WindowsLoad result=PASS
         attempt=2 stage=SignIn result=PASS
         attempt=2 stage=WorkshopStartup result=PASS
         attempt=2 stage=WorkshopReady result=PASS
         ```

      3. The guided report records all four boss checks and is saved:

         ```text
         Windows boot: PASS
         Workshop status: READY
         Evidence copies: 3/3
         Settings: 2/2
         ```
      4. `workshop-status.log` is a current-state snapshot. Before remediation it contains:

         ```text
         status=NOT_READY
         desktop=AVAILABLE
         ```

         After the successful restart it contains:

         ```text
         status=READY
         desktop=AVAILABLE
         ```
   5. **Finch and story outcome**
      1. After glitching in and out earlier, Finch appears properly after success to thank the player and introduce himself.
      2. The detected file is later revealed as a corrupted safeguard left by The Echo, so applying **Block threat** appears to defeat the enemy but helps Mara restore the lab. Keep the detection available as later story context without adding another player decision.

### Shell lesson breakdown and checkpoints

All shell commands and scripts run only in the game's fictional, isolated environment. They cannot access the player's real computer, files, or network. Each checkpoint gives specific feedback and allows unlimited, penalty-free retries.

#### PowerShell block

1. **Open PowerShell and find your location:** Open Windows Terminal from Start and recognize the PowerShell prompt; distinguish a command from its output, and use `Get-Location` to see the current directory. **Checkpoint:** Launch Windows Terminal, identify the prompt and output, then confirm the starting folder.
2. **Navigate and list:** Use `Set-Location` and `Get-ChildItem` to move through folders and list their contents. **Checkpoint:** Navigate to the fictional Workshop folder and list its contents without changing files.
3. **Read and search evidence:** Use `Get-Content` to read a prepared evidence file and `Select-String` to find `north` in a copy of `door.log`; an in-game help tip can show how to look up `Select-String`. **Checkpoint:** Locate the NorthEntry clue while leaving the preserved original untouched.
4. **Use variables:** Store `north` in `$clue` and reuse it as the search pattern. **Checkpoint:** Confirm that the saved value finds the expected line.
5. **Connect commands and save output:** Use `|` to pass search results to the next command, then `Out-File` to save them in a designated report file. **Checkpoint:** Verify the clue and report, and learn that writing to an existing report can replace its contents.
6. **Loop and validation script:** Learn a `foreach` loop, then complete a guided `.ps1` scaffold by filling in known filenames and status terms. Practice on harmless sample files using the same four boss checks: Windows boot passed, Workshop status is Ready, three original logs have three Evidence copies, and both settings files are present. The game separately checks actual file placements. **Checkpoint:** Run the scaffold in the fictional Workshop, inspect the four results, and save the report.

#### Bash block

1. **Prompt and location:** Recognize the prompt, distinguish a command from its output, and use `pwd` to see the current directory. **Checkpoint:** Identify the prompt and output, then confirm the starting folder.
2. **Navigate and list:** Use `cd` and `ls` to move through folders and list their contents. **Checkpoint:** Navigate to the fictional Workshop folder and list its contents without changing files.
3. **Read and search evidence:** Use `cat` to read a prepared evidence file and `grep` to find a keyword in a copy of `door.log`. **Checkpoint:** Locate the clue while leaving the preserved original untouched.
4. **Use variables:** Store the clue as `clue="north"` and reuse it as the `grep` search term. Explicitly compare Bash's `name=value` syntax with PowerShell's `$name = value` syntax. **Checkpoint:** Confirm that the saved value finds the expected line.
5. **Connect commands and save output:** Use `|` to pass a Workshop listing to `grep`, then use `>` to save matching log names in a designated report file. **Checkpoint:** Verify the report and learn that `>` replaces the destination's contents.
6. **Loop and validation script:** Learn a `for` loop, then complete a guided Bash scaffold by filling in known filenames and status terms. Practice on harmless sample files using the same four checks and report as the PowerShell route, while the game separately checks actual file placements. **Checkpoint:** Run it with `bash script-name.sh` in the fictional Workshop, inspect the four results, and save the report.

### Story and checkpoint behavior

- Every lesson begins with a story purpose and ends with a single concrete, inspected result.
- Show actual tool output or visible system state. Identify the missed concept, offer a hint or guiding question, preserve the player's work, and allow unlimited penalty-free retries.
- The desktop README gives a category-based destination map but no step-by-step directions. The file lesson practices a small, harmless three-file set; integrated practice builds toward the larger boss sort. Keep the README available during the boss. The simulated Defender screen appears only during the boss, not as a lesson or practice task.
- Checkpoints cover the file map, known-good restore, evidence preservation, and four-check report actions. The Defender screen is shown only in the boss; it is not a separate checkpoint or practice task. The boss combines practiced boot, file, permission, and shell skills with this one-time simulated Windows Security flow; it does not retest hardware assembly.
- During the final checkpoint, the player restores the disguised startup helper and believes the Workshop is fixed. A cutscene shows the resulting crash and an Echo-signed taunt that implies the player fell for a trick without literally saying “suckers.” The boss begins after the crash; the player believes Echo deliberately attacked the Safehouse.
- `boot.log` uses simple `stage=` and `result=` entries. Before remediation it shows Windows loading and sign-in passing, followed by `WorkshopStartup` and `WorkshopReady` failing; after remediation, the later boot attempt shows the stages passing.
- `workshop-status.log` is a short snapshot: before remediation it shows `status=NOT_READY` and `desktop=AVAILABLE`; after restart it shows `status=READY` and `desktop=AVAILABLE`.
- After sorting and restoration, the final folder contents are three original logs, three evidence copies, two active settings files, three startup scripts, and two unchanged Recovery copies (13 file items total).
- The boss distinguishes a successful Windows boot from a failed Workshop startup helper: Windows loads and sign-in succeeds before the helper causes the desktop instability. After **Block threat** is applied and the system restarts, the same boot stages pass and the Workshop reaches Ready.
- The Echo's disruptive file and taunting-looking message make it appear to be the enemy. Mara presents the repair as a victory; the later reveal shows the player has unknowingly restored the lab The Echo destroyed to protect its subjects.
- After glitching in and out while the Workshop is not functioning correctly, Finch appears properly once it is restored, thanks the player, introduces himself, and becomes a recurring companion.
- Chapter 1 save points can follow hardware assembly, OS/evidence lessons, shell blocks, integrated practice, and before the boss.

### Chapter 1 perfect-run and rewards

Core app name: **Sentinel Field Kit**.

Normal completion rewards:

- Sentinel Field Kit starter package.
- System Inventory Module.
- Evidence Organizer Module.
- Issue-Report Template.
- Boot and Hardware Reference.
- Finch blueprint.

Perfect boss completion upgrade:

- **Sentinel Field Kit Pro**.
- Stronger report formatting.
- Reusable scripts.
- Automated tests or validation where appropriate.
- Additional customization of modules and reports.

Perfect-run rules match Chapter 2: failed boss section checks and Run previews do not forfeit the Pro package; using boss hints or the AI tutor, or making a wrong irreversible final Submit, forfeit it. Lesson help and retries remain penalty-free.

### Open Chapter 1 implementation questions

- Exact fictional boot and hardware error names.
- Exact file contents and status-log messages.
- Whether a terminal environment or script editor is the primary shell interface.
- Exact PowerShell/Bash command subset and alternate-solution validators, including how Bash completion enables the optional boss route.
- Accessible layout and state changes for the simulated Defender screen shown only in the boss (not a lesson or practice task).
- Exact wording and timing for the Echo-signed cutscene taunt.
- How the player sees accounts and permissions in desktop and mobile views.
- How to present real-world safe-repair guidance without encouraging unsafe hardware work.
