# Superseded Design Sections

_Historical reference only; these sections are not authoritative. Consult the current design in the master document._

## 4. Chapter 1 — Python foundations and the safehouse

**Status: SUPERSEDED.** This Python-first Chapter 1 outline is retained for history only. Use Section 18, **IT-first Chapter 1 rewrite**, as the current Chapter 1 curriculum.

### Workshop and Python foundations

1. **Workshop setup:** On Windows/macOS, use the bundled-runtime goal and restricted in-game terminal. Teach `venv`: create, activate, verify, install one approved package with `pip`, deactivate. Explain `venv` versus the game's execution restrictions. On mobile, guide the player through a simulation.
2. **Ready-to-code cutscene:** Confirm workshop setup is complete and the player is ready to begin.
3. **`print()` and strings introduction:** Use backup status as story context. Teach `print()`, parentheses, quoted text, and that strings represent text. State that printing “Backup complete” only displays text; it does not create a backup.
4. **Variables:** Teach variable names and values, assignment, and how changing a value affects output.
5. **Strings fundamentals:** Explain quotes, spaces, and punctuation in more detail.
6. **Strings and variables with `+`:** Teach concatenation with `+` and variables. After this lesson, a character asks the player to gather supplies.
7. **F-strings:** Teach after concatenation as a comparison. Exact placement relative to the supply cutscene remains open; the supply cutscene was specifically planned after the strings-and-variables lesson.

### Supply story and lists

8. **Supply-gathering cutscene and exploration:** A character says the group needs supplies for the adventure. The player explores the safehouse and interacts with items to collect a flashlight, radio, map, and backup drive, then finds a backpack and returns to the console.
9. **Create the backpack list:** Teach brackets, commas, items, and order. The player fills starter-code blanks to make and print a list using the supplies. Any order is accepted in this checkpoint; check required items and Python syntax. Later indexing lessons use a separate fixed order so indexes are unambiguous.
10. **Add and remove list values:** Teach `append()` and `remove()` before a combined checkpoint. Later story pickups/changes bring the player back to the console to update the Python inventory.
11. **List indexing:** Teach zero-based indexes, with positions `0` through `3`. Explicitly say the player is filling in the index inside `backpack[ ]`; `print()` displays the item at that position.
12. **Change items in the middle:** Teach `insert()` and `pop()`, including how indexes shift after removal or insertion.
13. **Dictionaries: keys and values:** Use a safehouse status board; teach braces, keys, values, colons, and commas.
14. **Dictionary lookup:** Teach retrieving a value by key, then printing it.

### Chapter 1 checkpoint drafts

1. **`print()` prediction:** Predict the output of `print("Backup complete")` from choices, then run it. After a wrong prediction, show actual output and explain that quotes/code aren’t displayed, then require a fresh similar prediction-and-run before completing. Hints focus on strings, the text inside quotes, and distinguishing output from code.
2. **Variables:** Change `status = "Backup pending"` so `print(status)` outputs `Backup verified`. Verify both output and use of the variable. If output is right but hard-coded, explain that the variable skill wasn’t demonstrated.
3. **Strings fundamentals:** Edit a string so it prints exactly `Door power is stable.` Check exact characters while accepting valid matching quote styles. Use a fresh exact-message retry if needed.
4. **Concatenation:** Given `system = "Signal receiver"` and `status = "ready"`, use `+` to output `Signal receiver: ready`. Verify result and use of variables and concatenation.
5. **F-strings:** Build the same output with an f-string and the provided variables. Verify output and f-string use; compare with `+` afterward.
6. **Backpack list:** Fill four starter blanks with `flashlight`, `radio`, `map`, `backup drive`. Accept any order; verify all required strings occur exactly once in a printed list.
7. **`append()`/`remove()`:** Starting with flashlight, radio, map, and first-aid kit, remove `first aid kit` and add `backup drive`. Expected final list is flashlight, radio, map, backup drive. Verify output and both methods. The exact story reason for this practice-list swap is open.
8. **Indexing:** Teach a fixed index table: 0 flashlight, 1 radio, 2 map, 3 backup drive. Prompt explicitly says to fill the blank with the index of `backup drive`; `print()` displays the item at that index.
9. **`pop()`/`insert()`:** Start with radio, first-aid kit, backup drive. Remove the first-aid kit using its index, then insert flashlight at index 1. Teach index shifting before the check. Expected result: radio, flashlight, backup drive.
10. **Dictionary pair:** Add `"signal_receiver": "offline"` to a status dictionary. Verify the pair is present; pair order does not matter.
11. **Dictionary lookup:** Retrieve the value for `signal_receiver` from the dictionary and print `offline`; verify lookup by key, not hard-coded output.



## 5. Echo code-unlock puzzle

**Status: SUPERSEDED.** This Python-only puzzle and its reveal timing belong to the previous Chapter 1 design. The current Chapter 1 direction is in Section 18; preserve only story elements that are explicitly carried forward there.

After the dictionary lessons, the player repairs corrupted code at a workshop access console. They can freely inspect and run code, review the Codes menu, and request optional hints. This puzzle is separate from the three boss repair trials and has no Logic Chip bonus penalty.

The player repairs string assignments and concatenates fragments so the message is revealed when the code runs:

```python
signal_start = "A signal waits "
signal_middle = beneath
signal_endd = "the noise."
print(signal_start + signal_middle signal_end)
```

Intended repairs:

- Make `beneath ` a string assigned to `signal_middle`.
- Correct the inconsistent `signal_endd` name to `signal_end`.
- Add the missing `+` operator between the last two values.
- Preserve spaces across fragments so the successful output is exactly:

```text
A signal waits beneath the noise.
```

The player does not initially know the phrase came from The Echo. The open approach allows players to inspect/print individual variables if curious; the design does not promise that the fragments are impossible to inspect.

Progressive hints:

1. Start with the first issue Python reports; fixing it and running again may reveal another.
2. Python treats a bare word as a name; text needs quotes. Names must match where assigned and used.
3. Join all three values with `+`, and compare each name with its assignment.

Feedback should show actual Python errors or output and point to the problem without showing the expected phrase. The tutor can discuss an error and ask a guiding question, but does not provide the full repaired block. Successful output triggers an unexplained signal disturbance and the Console Repair emergency; the cause and the player’s identity remain hidden.



## 6. Console Repair boss level

**Status: SUPERSEDED.** The three Python repair trials, timer, and Logic Chip rules below are from the previous Chapter 1 design. The current integrated restoration boss and Sentinel Field Kit Pro rules are in Section 18.

A signal disturbance follows the successful output. Alarms, flashing red lights, and warnings announce the emergency and guide the player to three failing systems; the player does not yet know the source:

1. **Finch’s display:** Use variables, concatenation, and `print()` to output `Finch display status: online`. Passing simulates Finch’s display returning online.
2. **Door power:** Use `pop()` and `insert()` to put a fictional circuit list into the required order. Passing simulates door power returning.
3. **Signal receiver:** Look up the `"signal_receiver"` key in a fictional repair-message dictionary and print its value. Passing simulates the receiver returning online.

### Timer and retry rules

- The timer starts at 30 minutes.
- It runs during active repair gameplay and pauses for cutscenes and menus.
- After the first repair, a cutscene warns that 20 minutes remain; after the second, a warning says 10 minutes remain.
- Each failed repair run counts as a retry and forfeits the Logic Chip bonus for that chapter run.
- Repairs already completed remain completed. After a failed code run, continue with the time remaining.
- If the timer reaches zero, start a fresh 30-minute clock, keep completed repairs, and forfeit the bonus.
- Help remains available after confirmation, but confirming a hint/tutor request forfeits the bonus. The player can still finish.
- Players can replay the whole chapter for another bonus attempt; story progress and other rewards remain.

### Repair-complete reveal and rewards

After all three systems are repaired, a final cutscene shows everyone sighing in relief and a hidden drawer opening.

Normal Console Repair completion rewards:

- Workshop Frame.
- Signal Shards.
- Precision Console Plate.
- Scout’s blueprint.
- Intake Component.
- Log Organizer.

Perfect-run bonus:

- Logic Chip, only if all three repair challenges pass on the first run without hints or tutor help during the repairs.

Lesson hints/retries and the Echo puzzle do not affect this bonus.



## 7. Chapter Summary, crafting, and menus

**Status: LEGACY INTERFACE DRAFT.** The summary/menu concepts may remain useful, but Python-only inventory behavior, Scout crafting, and earlier reward assumptions must be reviewed against the IT-first toolkit and rewards in Section 18.

### Chapter Summary

One menu with tabs: **Summary, Backpack, Agents, Components, Codes**.

The Summary shows completed lessons/checkpoints, skills demonstrated, suggested checkpoints to revisit, and time spent. Players can inspect rewards and learned code.

### Backpack

- One persistent backpack is shared by the Backpack menu and Python inventory exercises.
- Menu edits apply directly. Python exercises use a practice copy; only a successfully completed inventory task applies its result to the persistent backpack.
- Menu supports adding, removing, and reordering items.
- Players can select from the full item catalog, including items not yet found.
- An item added before it is earned can appear in the backpack, but does not grant story or crafting effects until earned.
- Duplicate copies are allowed and shown as quantities.
- Item details show name/story description, role or possible use, whether it is used/still needed, and its current Python-list index.
- Story pickup/update timing is determined by the story.

### Codes menu

- Organized by topic categories, grouped by lesson, with search/filter.
- Future topics can appear as locked previews, without code or explanations.
- Unlocked entries include explanation, labeled example, output, and common mistakes.
- **Try it** opens a separate editable copy in the practice workspace; the saved reference is unchanged.
- Players may explicitly save their own successful solutions alongside curated examples.

### Agents menu and Scout

- Show locked agent previews with names and unlock requirements.
- Players can bring one agent on missions at first. A later level unlocks a second agent slot.
- Scout’s profile includes role, abilities, sorting rules, a fictional example, strengths, and weakness.
- Scout organizes/sorts incoming signal records, identifies missing context, sorts high-to-low priority, and flags `warning` or `offline` records.
- Scout does not decide what action to take.
- Scout can process signal records collected in the story when available and can demonstrate on fictional sample records before any are collected.
- After crafting Scout, play a short introduction and open Scout’s profile in the Agents menu.

### Scout crafting

- Craft at an in-world station in a separate workshop/hub after the chapter summary.
- Station displays Scout’s recipe.
- Crafting consumes the Scout blueprint and all Signal Shards awarded in Chapter 1.



## 9. Toolkit components and bonus-item pool

**Status: LEGACY CYBERSECURITY-FOCUSED POOL.** These components and bonuses are retained as historical/candidate ideas, not the current Chapter 1 reward plan. Reassess them against the Sentinel Field Kit direction and revised seven-chapter IT/networking/database curriculum.

The player eventually assembles a defensive security operations toolkit. Components can be removed or combined if the story calls for it. The campaign target is seven chapters; assign the remaining components and perfect-boss rewards after the chapter outlines are developed.

### Functional components proposed

1. **Intake Component:** Receives security records and validates structure. Expected fields include username, timestamp, device identifier, IP address, event type, and success/failure status. Reject malformed or unsafe input so bad data does not spread.
2. **Log Organizer:** Normalizes timestamps; groups by user/device/IP; sorts chronologically; separates successful and failed activity; preserves original evidence.
3. **Failed-Login Detector:** Detects repeated failures against one account, many accounts from one source, repeated attempts in a short period, and sudden increases in failed activity.
4. **Unusual-Time Detector:** Flags activity outside an established schedule or quiet period, and sudden activity after inactivity. Flags for review rather than declaring it malicious.
5. **Unfamiliar-Device Detector:** Identifies first-seen devices, new device/location combinations, device changes after repeated failures, and unfamiliar devices shared by multiple users.
6. **Alert-Triage Engine:** Combines detector signals and assigns informational, low, needs-review, or high-priority levels. Alerts are evidence, not proof of an attack.
7. **Incident Timeline Builder:** Reconstructs related events into a readable timeline.
8. **Explainability and Evidence Layer:** Explains what was detected, which records caused the alert, why it received its priority, what information is missing, and what a human reviewer should check next.
9. **Audience Converter:** Creates technical analyst, manager, nontechnical employee, incident-response team, and portfolio-reviewer versions without changing the facts.
10. **Claim Calibration Desk:** Distinguishes directly supported facts, reasonable suspicion, and claims requiring stronger proof.
11. **Persistent Case Store:** Saves raw/normalized records, alerts, timelines, analyst notes, reports, and test results for later review.
12. **Testing and Reliability Layer:** Automated tests for input validation, detectors, priorities, timeline ordering, persistence/reload, report accuracy, edge cases, and regressions.
13. **Command-Line Portfolio Tool:** A simple CLI for the completed project.

### Bonus-item pool

Each boss may award its relevant perfect-run component. **Sentinel Core** is reserved for the finale.

- Workshop Frame — core project structure and execution shell.
- Console Core — Python execution and reusable utilities.
- Signal Shard Array — story component installed by Mara in Chapter 2; detects one faint outside signal.
- Logic Chip — conditional detection and alert rules.
- Pattern Lens — failed-login, time, and device anomaly detection.
- Memory Archive — persistence and incident timelines.
- Agent Relay — coordination between specialized agents.
- Evidence Prism — explainability and evidence-linked alerts.
- Briefing Module — audience-specific reporting.
- Reliability Seal — testing, validation, and dependable behavior.
- Sentinel Core — fully integrated final toolkit; finale reward.

The earlier Chapter 1 reward assignment in this pool is superseded by the Sentinel Field Kit starter modules and Sentinel Field Kit Pro perfect-run upgrade in Section 18.



## 14. Chapter 2 — The Missing Access Keys (early outline; superseded by Sections 15 and 17)

**Status: Early working outline retained for reference. Its lesson order, clue design, and reward notes are superseded by the more complete current design in Section 17.**
### Chapter 2 story arc

**Repair/bring the Workshop online → teach and checkpoint the Chapter 2 skills → search for the missing access clues → validate the clues with Python → reopen the safehouse access system → install the Signal Shard Array.**

Chapter 1 teaches the player how to operate the console. Chapter 2 first teaches and checks the new investigation skills; its ending boss then proves the player can use Python to investigate and organize information, not only display it. Installing the Signal Shard Array is the proposed story milestone at the end of Chapter 2; whether and how it is formally assigned as a chapter reward remains subject to the plan to finish all chapter outlines before finalizing component/reward placement.

### Learning goals under consideration

- Use `if`/`else` decisions to compare information and separate valid, suspicious, and malformed fictional input.
- Use `for` and `while` loops to inspect and filter a series of records; explain when a loop processes a known collection versus repeats until a condition changes.
- Understand what an IP address and a port represent, how DNS relates a human-readable name to an address, and how HTTP and HTTPS fit into web communication. Focus on interpreting fictional examples, not memorizing port numbers or configuring real systems.
- Choose useful Python structures for the task: lists for ordered log entries, dictionaries for named fields and system-to-key relationships, and sets for unique IP addresses or de-duplication.
- Navigate a safe, in-game fictional file tree to locate clue files and logs, understand folders and paths, and identify which records are relevant.

### Lessons first: teach, practice, check

The player completes the lessons and their checkpoints before beginning the scavenger hunt. A lesson introduces the concept, explains it in plain language, shows a worked example, and offers a small guided practice. The checkpoint then checks that specific concept before moving on. Do not expect players to use an unintroduced Python construct in a checkpoint.

Use the Chapter 1 learning loop for every checkpoint: state the task; let the player try in the practice workspace; check both the answer and the target skill; on failure, show the actual output/error and point to the relevant area without silently fixing the code; offer three progressive hints and the optional AI tutor; and, on success, explain what worked, save progress, and unlock the next lesson. The tutor can see the code/output with clear notice, asks guiding questions, and does not edit code or reveal the whole solution. Retries are unlimited and penalty-free. Use short fictional sample data in lessons, not the boss's missing-key scavenger clues.

#### Lesson 1 — Navigate the Workshop's virtual files

Teach folders, filenames, paths, and how to list/open a file using the in-game navigator or simulated console. Explicitly distinguish this virtual workspace from the player's real computer.

- **Checkpoint 1 — Find a practice file:** Navigate to a named sample file in the tutorial folder and open it. Check the destination and file contents, not one exact command; allow equivalent accessible controls.

#### Lesson 2 — Recognize IP addresses

Teach that an IP address identifies a network endpoint, while a device name is a human-readable label. Use documentation-only addresses and explain that an address alone does not establish who owns or controls a device.

- **Checkpoint 2 — Match label and address:** Match sample device cards to their displayed addresses, then identify which address appears in a short fictional event. Check the distinction between label and address.

#### Lesson 3 — Understand ports

Teach that a port identifies a service endpoint on a device; an address plus port describes a more specific connection destination. Emphasize meaning and context rather than memorizing many port numbers.

- **Checkpoint 3 — Read an endpoint:** Given a few fictional service cards, select the matching address-and-port entry and point out which part is the address and which is the port.

#### Lesson 4 — Follow DNS names

Teach that DNS looks up a hostname and returns address information. A conflicting entry is a clue to verify, not automatic proof of malicious activity. Use only a supplied offline lookup table.

- **Checkpoint 4 — Use the sample DNS table:** Look up a fictional safehouse service name and report its listed address. Compare a second supplied record and mark a mismatch as needing verification; do not make a live DNS query.

#### Lesson 5 — Compare HTTP and HTTPS

Teach that HTTP and HTTPS are web communication protocols and HTTPS uses TLS to protect data in transit and help authenticate the server. Explain that HTTPS does not by itself prove a site is trustworthy. Use static, fictional connection summaries only.

- **Checkpoint 5 — Interpret a connection card:** Identify whether sample connections use HTTP or HTTPS and select what HTTPS protects. Check understanding without capturing or sending traffic.

#### Lesson 6 — Represent event records with lists and dictionaries

Briefly review Chapter 1 lists and dictionary key/value lookup, then introduce the combined shape: an ordered list of event dictionaries. Each dictionary uses named fields such as `time`, `source_ip`, `service`, and `status`. Show how list order and dictionary keys help answer different questions.

- **Checkpoint 6 — Read a sample event:** Given a tiny provided event list, retrieve a requested field from the specified event. Check actual key lookup and correct event selection, not hard-coded output.

#### Lesson 7 — Use sets for unique values

Teach that a set stores unique values and has no guaranteed display order. Compare a list with repeated addresses to the set of distinct addresses; explain that sets are useful for uniqueness, not event chronology.

- **Checkpoint 7 — Identify unique addresses:** Collect distinct addresses from a short fictional sample. Compare results without requiring order and check that duplicates are removed but no different address is lost.

#### Lesson 8 — Use a `for` loop

Teach the loop before asking players to use it: explain that it repeats a block once for each item in a known collection. Trace each pass through a tiny example and show how the loop variable changes. Do not introduce filtering or `if` yet.

- **Checkpoint 8 — Visit each sample record:** Use a `for` loop to display one field from every supplied record, in order. Check that the target loop processes each record exactly once; give a fresh similarly sized sample after a failed attempt.

#### Lesson 9 — Make a choice with `if`/`else`

Teach a Boolean condition, comparison, and the two branches using one record at a time. Explain that a rule can flag something for review but does not prove malicious intent. Test the two branches with separate sample values; do not require a loop yet.

- **Checkpoint 9 — Classify two sample records:** Write an `if`/`else` that applies a stated rule to each of two individually supplied records, with one exercising each branch. Check condition, branch behavior, and use of the record's value.

#### Lesson 10 — Filter a collection with `for` and `if`/`else`

Only after both constructs have been taught and checked separately, demonstrate how a `for` loop can visit each event and an `if` can select matching records. Show a worked trace that includes both matching and non-matching events. Use neutral labels such as `review`/`normal`, not unsupported claims that an event is malicious.

- **Checkpoint 10 — Filter a practice log:** From a small unrelated sample log, collect the records matching a clearly stated rule. Check included and excluded record IDs and require both the loop and condition as the learning objective.

#### Lesson 11 — Use a `while` loop safely

Teach that `while` repeats as long as a condition is true, unlike `for`, which naturally visits a known collection. Trace how the condition changes, how the loop terminates, and what an accidental infinite loop means. Use a small bounded counter and a visible maximum in the lesson; never teach repeated key guessing.

- **Checkpoint 11 — Stop when review is complete:** Use a `while` loop with a progress value to process a tiny fixed number of practice items, then stop. Check that progress changes, the stopping condition is correct, and the loop terminates; enforce a runtime limit in the exercise harness.

#### Lesson 12 — Practice choosing a structure

Bring together already-taught ideas on a new, small, non-boss example. Ask the learner to explain which information belongs in an ordered list, which fields belong in a dictionary, and which values should be unique in a set. Have them read and filter the sample records using learned loops and conditions. This is a review lesson, not the access-key boss.

- **Checkpoint 12 — Complete the practice summary:** Organize the provided sample, report its unique addresses, and flag records that match a stated rule. Check each concept and the explanation; allow another attempt with different sample records.

After this final checkpoint, transition into the ending boss. The boss may combine skills but must not introduce new Python syntax, networking concepts, or file-navigation mechanics. All boss clues are recovered during the hunt; none are preloaded into the lesson exercises.
### Ending boss — The Missing Access Keys

Only after all lessons and checkpoints have been completed, the player begins the chapter-ending scavenger hunt. The safehouse access system has lost pieces of configuration data. The player searches the safehouse and recovers fictional clues from terminals, notes, and device displays, then brings the clues to the Workshop Console. The Echo has planted a fake or malformed key among them.

The boss sequence is:

1. Search the safehouse for several physical and/or virtual clues.
2. Enter each recovered clue into the Workshop Console.
3. Use the Python skills already learned to organize and validate the information.
4. Determine which candidate key belongs to which fictional safehouse system, using the supplied evidence.
5. Reject The Echo's fake or malformed candidate and identify the evidence that makes it invalid or suspicious.
6. Enter the supported final key into the in-game access panel, reopening the safehouse access system.
7. Install the Signal Shard Array as the story's chapter-ending milestone. Its formal reward assignment remains open until all chapter outlines are complete.

The boss should combine the taught tools (virtual-file navigation, lists, dictionaries, sets, `for`, `if`/`else`, and a bounded `while` only if it genuinely helps) without requiring any new construct. The player should reason from clues, not automate guesses: do not provide repeated key attempts, real credentials, real network targets, or real-system testing. Use only fictional credentials, a closed game simulation, and clear evidence-based validity rules.
### Open Chapter 2 questions from early outline (review against Section 17)

This early outline is retained for history only. Its story assumptions, clue count, clue logic, and reward notes are superseded by the current story in Section 15 and Chapter 2 design in Section 17.

## Early Chapter 1 Windows Security alert concept (historical; superseded)

This earlier concept placed a sample-alert lesson before the Chapter 1 boss so players could practice responding to an in-game Windows Security alert first. The custom alert offered two controls:

- **Quarantine (RECOMMENDED):** stop the flagged file from running and retain it for later review.
- **Delete:** remain available after a clear warning; deleting the file removed it from later evidence review only. It did not prevent completing the repair or affect the perfect-run reward, and essential story clues were available elsewhere.

The alert used custom threat wording: “Threat detected: `WorkshopSync_ECHO-01.ps1` is disrupting startup.” This was fictional, game-authored alert text rather than a claim about Windows Security’s standard wording.

This concept was superseded by the screenshot-modeled Windows Security flow in the current Chapter 1 file, `..\Chapter 1\Chapter-1-Design.md`.
