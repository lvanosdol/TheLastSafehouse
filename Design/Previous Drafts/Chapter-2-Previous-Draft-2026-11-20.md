# Chapter 2 Design — Previous Draft

> **Historical:** This entire Chapter 2 draft has been superseded. The user will redesign Chapter 2 from scratch after Chapter 1 is finished.

## 17. Chapter 2 — Current detailed design: The Missing Access Keys

**Status:** Working draft based on the user's direction. This section supersedes the earlier Chapter 2 outline in Section 14. Chapter 2 will be revisited after Chapter 1 is complete, including its reliance on lessons removed from Chapter 1. Its former reward assignments below are superseded by the seven-agent plan.

### Story and learning flow

The Workshop is repaired and online. Mara briefly welcomes the player back; Finch has a playful cameo:

> Finch: “Workshop’s online! Three green lights, two yellow ones, and one light that might be blinking at me.”  
> Mara explains that it is the power indicator.  
> Finch: “It could blink less judgmentally.”

The player completes Chapter 2 lessons and an unrelated integrated practice before the boss. Mara then runs a diagnostic and notices that, because of the earlier system malfunction, several pieces of the safehouse access configuration were lost even though the Workshop is now repaired. She does not yet blame The Echo. The player searches for clues to restore the missing configuration.

**Previous flow, awaiting Chapter 2 redesign:** Workshop welcome → teach and checkpoint concepts → unrelated integrated practice → Mara's diagnostic/cutscene → search for access clues → manually enter clue records at the Workshop Console → code investigation → review and submit the mapping → restore access → story Array installation and hidden compartment → Chapter Summary/mastery recap and Sentinel crafting. Sentinel crafting is superseded as a reward.

### Lesson and checkpoint design

All relevant concepts are taught and checked before the boss; the boss may combine skills but must not introduce new syntax or networking/file-navigation concepts. Use clear tasks, editable practice, actual result and target-skill checks, visible errors, progressive hints, optional AI-powered guidance from Mara, and unlimited penalty-free retries. With notice, Mara's guidance automatically sees code, output, and selections; she asks guiding questions and never edits code or supplies the full solution. Boss help rules are separate from lesson help.

Pacing decision: Keep each concept as its own short lesson rather than combining concepts into larger lessons. Complete the cybersecurity-concepts block (network basics and fictional file navigation) before the Python-for-investigation block; then use integrated practice and the boss to combine them. Chapter 2 may span multiple play sessions, so save progress at natural lesson/checkpoint boundaries and make it easy to pause and resume.
#### Networking concepts

1. **IP addresses:** An IP identifies a network endpoint; a device label is human-readable, and an address alone does not establish ownership. Match fictional safehouse systems to `192.0.2.10` (Workshop Console), `192.0.2.20` (Door Controller), and `192.0.2.30` (Signal Receiver), then identify a message destination. These are documentation-range examples.
   - Teach the device/address mapping with a fictional Safehouse network map before the checkpoint; players are not expected to know or infer the assignments. Keep the map visible as a reference during the checkpoint so the test measures interpretation rather than memorization.
   - Draft checkpoint: match each of the three devices to its mapped address, then inspect 14:06 | source: 192.0.2.20 | destination: 192.0.2.30 | message_sent and identify 192.0.2.30 as the destination. Check all three matches and the destination selection; on error, explain source versus destination and allow a no-penalty retry. Exact presentation remains to be finalized.
2. **Ports:** A port identifies a service endpoint; address plus port identifies a more specific destination. Teach common defaults DNS `53`, HTTP `80`, HTTPS `443`, while noting services can use non-default ports. Checkpoint matches all three services and interprets `192.0.2.10:443`.
3. **DNS:** Use an offline table mapping `workshop.safehouse.example` to `192.0.2.10`, `door.safehouse.example` to `192.0.2.20`, and `receiver.safehouse.example` to `192.0.2.30`. Resolve each using the supplied table; no live DNS query. A mismatch is a clue to verify, not proof of malicious activity.
4. **HTTP and HTTPS:** Compare static cards for the same fictional page. Explain HTTPS uses TLS to protect data in transit and help authenticate the server; HTTPS alone does not prove a site or its content is trustworthy. No captured or transmitted traffic.

#### Virtual file navigation

Teach navigation after networking and before Python log-analysis. Use a visual, fictional game file tree, separate practice files, and no access clues. Find/open `practice_events.txt`, use the breadcrumb, and return. The navigator must not expose the player's real files.

#### Python data and control flow

Use fictional, unrelated lesson samples; keep all boss clues out of lessons.

1. **Lists:** Review Chapter 1 lists and `append()`. Preserve order and repeated events. The checkpoint appends `backup_restored` to a list containing `door_open` and two `login_failed` entries.
2. **Dictionaries:** Review key/value lookup through fictional event fields such as `time`, `source_ip`, `service`, and `status`. The checkpoint retrieves `status` rather than hard-coding the answer.
3. **Sets:** Teach uniqueness, `set()`, `.add()`, and that sets have no guaranteed useful order. Distinguish `set()` (empty set) from `{}` (empty dictionary). Checkpoint adds four supplied IP values with one repeated and checks unique membership without requiring order.
4. **Membership:** Teach `in` separately using an unrelated `available_tools = {"map", "radio"}` example. Test both present and absent values.
5. **`for`:** Teach iteration over a known collection and trace the loop variable. Checkpoint prints each item from the repeated-event list once, preserving order; player writes the loop and `print()`.
6. **`if`/`else`:** Use a device status. The value unknown yields review; otherwise it yields normal. Check both branches using the supplied value.
7. **`and`:** Use an unrelated equipment example: north_room and offline together yield review. Check all four true/false combinations.
8. **Filtering:** After separately teaching the loop and conditional, combine them on separate sample events A1/A2/A3. Put failed events in review, others in normal, preserve order, and avoid declaring activity malicious.
9. **`while`:** Teach condition-controlled repetition with a countdown from 3 to 1. Require progress and termination; use safe runtime limits and never teach repeated key guessing.
10. **Integrated practice — Training Signal Packet:** Use an offline DNS/service card and three unrelated events with documentation-range source IPs (`198.51.100.x`). Build unique source IPs with a set and a loop; filter records where status is failed only. This is practice, not a boss clue or a new concept.
### Scavenger-hunt boss: clue collection and evidence tray

The player searches the safehouse in any order. Each clue has a consistent, accessible visual cue and an Inspect prompt; there are no area markers. Inspect opens the clue for reading, then the player chooses Collect as a separate action. Collected clues can be reviewed in an anytime-accessible tray. The player returns to the Workshop Console and manually enters the evidence; clues are never silently preloaded.

The tray is an evidence-assembly board with three system slots. Players manually place each clue in the slot for the system it informs, not necessarily the place it was found. Each clue card keeps its source and the system/key it concerns visible. Clues can be moved or reassigned freely without penalty; this is a reasoning workspace, not a scored placement puzzle. Show per-slot capacity and completion: Archive Vault 2/2, Signal Relay 3/3, and Control Grid 2/2. When all seven are collected and placed, all slots show complete, giving the player a chance to compare evidence before coding.

Use device-adaptive keyboard/mouse or touch controls, readable text, and cues that do not rely on color alone. The three system areas are visibly labeled; no marker points to missing clue locations.

Systems and supported keys:

- Archive Vault → `NORTH-7`
- Signal Relay → `RELAY-5`
- Control Grid → `WORKSHOP-7`
- `ECHO-3` is the decoy candidate for Signal Relay; conflicting independent records undermine it, not malformed formatting.

Seven clues and proposed 3D locations:

1. **Archive Vault display — Archive Vault:** `VAULT INDEX — OFFLINE`; the archive index cannot load; “Last stable configuration fragment: NORTH-7.” Place at the vault entrance/display.
2. **Vault recovery panel — Archive Vault:** “Archive Vault recovery check — `NORTH-7` accepted.” Place on a separate local access panel in the vault area; this is independent corroboration for the display.
3. **Maintenance note — Control Grid:** Control Grid door relays remain locked; last verified fragment `WORKSHOP-7`. Place on the Workshop maintenance board.
4. **Unverified note — Signal Relay:** Claims Signal Relay should use `ECHO-3`. Place near the Workshop Console and clearly mark it as unverified, not malformed.
5. **Radio log — Signal Relay:** At 21:14, a Signal Relay check; `RELAY-5` acknowledged. Place in the communications alcove.
6. **Control Grid audit — Signal Relay:** At 21:16, Signal Relay verification passed; fragment `RELAY-5`. Place in the Control Grid area; its source is a Control Grid audit, but it informs Signal Relay.
7. **Door-controller diagnostic — Control Grid:** “Control Grid relay self-test — `WORKSHOP-7` recognized.” Place at the Control Grid door/controller; this is independent corroboration for the maintenance note.

Group clue cards by the system they inform: the Vault display and recovery panel in Archive Vault (2); the unverified note, radio log, and Control Grid audit in Signal Relay (3); and the maintenance note plus door-controller diagnostic in Control Grid (2). Keep each origin/source explicit even when the clue is placed under a different system.
### Console coding boss and submission rules

Use a code workspace with prompts as `#` comments only. Reveal one section at a time; the player writes executable code. Four sections:

1. Record all seven collected clues as a list of dictionaries with fields such as source, system, and key. The check verifies every clue is represented accurately, with one record per clue; dictionary order does not matter.
2. Use a `for` loop to group candidate source identifiers by key. Validate source sets without relying on set display order: `NORTH-7` has the vault display and recovery-panel record; `WORKSHOP-7` has the maintenance note and door-controller diagnostic; `ECHO-3` has only the unverified note; `RELAY-5` has the radio log and Control Grid audit.
3. Use membership (`in`) and `and` to validate independent Signal Relay evidence and expose the conflict around `ECHO-3`.
4. Create and print the final system-to-key mapping.

Each section check must pass before the next section is revealed. A failed section check is ordinary debugging and does not forfeit a bonus. A full Run is an editable preview, not a submission. The final mapping is reviewed, then submitted through the access panel using the Workshop Console.

Wrong mapping consequences are shown and can be corrected before final Submit. Submit is the irreversible final action and locks the attempt. A wrong final Submit fails the boss and forfeits the perfect-run bonus; collected clues remain and the failed code is retained as an editable draft for another attempt. The player cannot brute-force keys or use real credentials/targets.

Using a hint or Mara's AI-powered help during the boss forfeits the perfect-run bonus; lesson help and retries do not. Warn before help is used, and preserve eligibility if the player cancels. This condition applies only to the boss bonus. Section-check retries and preview Runs do not forfeit it.
### Chapter 2 outcome, rewards, and mastery

The current reward plan awards the **Design Agent**, which helps plan screens, navigation, and accessible layouts. A perfect boss finish upgrades it to explore and compare multiple layout concepts. See [the seven-agent plan](../The-Last-Safehouse-Design.md#8-software-development-agents-and-chapter-rewards). No other reward types are currently planned.

The earlier outcome below must be reconsidered during the Chapter 2 redesign. The [old reward assignments and Sentinel crafting](../Previous%20Drafts/Earlier-Reward-Ideas.md#previous-chapter-2-rewards) are superseded.

On successful submission, restore the safehouse systems. Mara installs the **Signal Shard Array** as a story milestone for everyone; it detects one faint outside signal. A hidden compartment opens with standard rewards and any earned perfect-run bonus.

After the rewards, the Chapter Summary has no numeric grade. It shows five skill tiles:

1. **Network basics** — IP addresses, ports, DNS, HTTP/HTTPS.
2. **Safe file navigation** — locating and opening practice evidence.
3. **Python data structures** — lists, dictionaries, and sets.
4. **Python logic and iteration** — membership, loops, conditionals, filtering.
5. **Evidence-based configuration** — comparing clues and using independent records to restore a mapping.

A passed lesson checkpoint marks a tile **Practiced**; correctly applying the skill in the boss marks it **Demonstrated**. Keep this mastery status separate from perfect-run bonus status. The previous guided Sentinel craft is superseded.
### Remaining Chapter 2 follow-ups

- Ensure the virtual file navigator is accessible and understandable on desktop and mobile.
- Refine final scene dialogue, timing, voice direction, and the on-screen feedback for code checks and final submission. Mara's own voice is a later production goal.
- Connect the Chapter 2 ending and reward presentation to the final-chapter player-as-Echo reveal.
- Finalize validator acceptance criteria and failure presentation when implementation begins; preserve the design rules above.
### Latest approved Chapter 2 refinements

#### Pacing and save milestones

- Keep concepts as separate short lessons, not combined large lessons.
- Complete the cybersecurity-concepts block before the Python-for-investigation block.
- Chapter 2 may span multiple play sessions.
- Save after any checkpoint and provide suggested resume milestones after: the cybersecurity block; the Python data-structure lessons; the Python logic lessons and integrated practice; and clue collection before the coding boss.

#### Finch foreshadowing

Use three subtle, small moments rather than a repeated obvious pattern:

1. **Opening:** When the terminal boots, Finch glitches briefly and says, “You feel familiar. Sorry—that sounded like a memory. New memory, probably.”
2. **During clue collection:** A matching pattern unsettles Finch. Working line: “That pattern again. Weird. I mean—patterns are weird. You know that.”
3. **Post-boss:** After the systems restore, Finch watches the player and says, “That worked… a little too much like you belong here.”

The hints remain innocent and ambiguous until the final identity reveal.

#### Mara's Chapter 2 presentation

Mara appears warm and sincere, but deliberately exploits the player's trust and memory loss. She frames restoring access and systems as helping the Safehouse, while withholding that the work also restores her lab. She does not reveal the player's identity or her true motive in Chapter 2. Her dialogue can remain factually plausible while misleading by omission; avoid obvious villain signals or near-slips that would make the deception unconvincing. Working beats:

- **After integrated practice:** “The malfunction left configuration gaps, but we can recover them by comparing the records—not guessing.”
- **At boss start:** “One source is not enough when independent evidence conflicts. Keep your records, compare them, and let the code show what each clue supports.”
- **After successful restore:** “You restored the systems and reasoned from evidence. That judgment matters more than the result itself.”

#### Lesson and boss feedback

- Lesson checkpoints use actual output or selections, identify the specific missed concept, ask a guiding question or offer a hint, preserve editable code/selections, and allow unlimited penalty-free retries.
- Boss section checks use clear evidence/code feedback, preserve the draft, offer hints, and remain penalty-free for the perfect-run bonus.
- Run previews are editable previews and do not submit or lock the attempt.
- A wrong mapping before final Submit can be corrected in the review screen.
- A wrong final Submit explains the mismatch, then shows the boss-failure scene. It forfeits the perfect-run bonus, preserves collected clues and the code draft, and requires a new attempt.

#### Desktop, mobile, and accessibility baseline

Use WCAG 2.2 AA as the design baseline:

- Clue, tray, menu, Run, Submit, and retry controls support keyboard and touch.
- Every clue and tray card has a readable text label and visible focus.
- Completion and status cues are not conveyed by color alone.
- The code editor does not require pointer dragging or pointer-only actions.
- Readable text and accessible dialog feedback are used for Inspect, Collect, hint, error, review, and Submit states.
- The final implementation should be audited for accessibility before user-facing release.

