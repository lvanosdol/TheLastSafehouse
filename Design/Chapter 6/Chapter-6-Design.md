# Chapter 6: The Automation Core

**Status:** Working design with six detailed lessons and a complete boss. Mechanics remain subject to implementation and playtesting.
**Updated:** 2026-11-26

## Opening scene

The Systems Wing door closes behind the player. Emergency lighting activates along the corridor, revealing server cabinets, labeled cable runs, and a central automation console. The equipment is intact, but most status indicators are amber or dark.

```text
SYSTEMS WING: ACCESS GRANTED
AUTOMATION CORE: SAFE MODE
BACKUP QUEUE: HALTED
SCHEDULED MAINTENANCE: OFFLINE
AUDIT ARCHIVE: FRAGMENTED
RECOVERY LOGS: AVAILABLE
```

Finch's hologram appears beside the console, steadier now that the security gateway is no longer blocking him.

> **Finch:** “This core manages backups, maintenance jobs, and automated recovery. At the moment, it manages neither backups nor recovery.”
>
> **Mara:** “Restore it. The remaining systems depend on it.”
>
> **Finch:** “And the audit archive depends on the same recovery queue.”
>
> **Mara:** “Then restore the queue and stop looking for reasons to delay.”

The **Unresolved Records** panel remains accessible. It still contains the timeline, the conflicting explanations, and the protected evidence status. Finch has preserved a separate copy that Mara has not reviewed.

If the player insisted on keeping the evidence questions open at the end of Chapter 5, Mara is visibly impatient but does not block access. If the player chose to focus on the gateway, she is relieved but still avoids the records. This changes dialogue tone, not access or rewards.

## Immediate objective

> **Restore the Automation Core and recover the queued audit records before the temporary recovery shards become unusable.**

This provides two connected goals:

- **Practical:** restore backups, scheduled maintenance, and automated recovery services.
- **Story:** recover the audit history that might explain the M.VALE records, the hidden role, and the player's `E.C.H.O_Thread_01` authentication.

The six lessons connect directly to that recovery objective. Each one restores another service or recovers another piece of the audit history.

## Learn & Try workspace

Each lesson uses the split-screen workspace. The interactive side changes according to the task:

- **Lesson 1:** Backup Planner
- **Lesson 2:** RAID Simulator
- **Lesson 3:** Troubleshooting Board
- **Lesson 4:** Boot Lab
- **Lesson 5:** Repair Bench
- **Lesson 6:** Network Workbench with simulated console and VPN client

Examples load without running automatically, exploration remains separate from checkpoint state, and no automation runs on the player's real computer. Narrow displays use **Lesson** and **Try It** tabs.

## Story state at chapter start

- The Systems Wing is accessible.
- The protected evidence store remains sealed and is not accessed in the opening.
- Mara knows the player preserved the Unresolved Records.
- Finch has preserved an independent copy.
- The player has added the Testing Agent component to the in-game project build.
- Trust between Mara and the player is strained but not broken.
- The player still lacks proof of Mara's personal actions or their own connection to Echo.
- Mara wants the automation core restored before the security evidence is investigated.
- Finch believes the same core can recover the deleted audit history.

## Lesson 1: Backup and Data Continuity

**Depth:** Detailed.
**Workspace:** Split-screen Learn & Try.

### Story opening

The Automation Core is running in safe mode, and its backup queue has stopped. Finch's display shows that the core's settings and audit fragments are no longer receiving current backups.

> **Finch:** “The core knows the backups are overdue. I would prefer not to discover what happens when an audit archive goes without one.”
>
> **Mara:** “Protect the facility systems first. The audit archive can wait.”
>
> **Finch:** “The backup plan can include both.”

Finch opens the **Backup Planner**. The protected evidence store remains sealed; the player works with the authorized audit fragments already available to the core, not the sealed originals.

### Learn & Try pages

The left side explains each topic. The right side contains the same interactive planner throughout the lesson, so the player can try each idea as they learn rather than repeating it in a separate practice activity. The player can move back and review pages during the checkpoint. All tools and data are simulated.

Examples use a temporary practice plan. Moving between lesson pages preserves the player's work on that example, while **Reset example** restores the demonstrated starting values without changing the checkpoint. The checkpoint begins from its own controlled snapshot.

#### Page 1: Data continuity

Data continuity means keeping important information available and recoverable when something goes wrong. A plan considers what needs protecting, how recently it must be backed up, and how quickly it needs to be restored.

The player identifies the core configuration and audit fragments as information worth protecting.

#### Page 2: Fault tolerance and disaster recovery

Fault tolerance helps a service continue when a component fails. Disaster recovery is the plan for restoring services and information after a larger interruption. They complement backups; neither replaces them.

The planner shows a drive failure that the system can tolerate and a separate scenario in which a restore is needed.

#### Page 3: Backups and archives

A backup is a recoverable copy used when information is lost, damaged, or changed. An archive keeps information for long-term reference or retention. An archive may itself need a backup.

The player labels a recovery copy and a long-term record without changing either file.

#### Page 4: File backups and system backups

A file backup protects selected files and folders. A system backup or system image captures a broader system state, depending on the tool and settings, and can help restore a machine.

Finch explains that the exercise uses file backups for the selected core configuration, audit fragments, and queue metadata; a system image is useful for broader recovery but does not automatically replace checking which data it contains.

#### Page 5: Full and incremental backups

A full backup copies the selected data. An incremental backup copies changes since the most recent backup. To restore the latest state from a chain, the system needs the full backup and the relevant incremental backups.

The player sees how a changed practice file is added to an incremental backup without creating another full copy.

#### Page 6: Backup destinations

Local storage is nearby and convenient but can be affected by the same incident as the original. A NAS is network-attached storage shared over a network. Cloud storage is hosted remotely. A system image describes what is backed up, not where it is stored.

A second copy must be in an independent failure domain. Two folders on the same drive do not protect against that drive failing, and two drives in the same computer may be lost together in the same incident. A local copy and a remote copy provide better separation.

The player compares destinations and identifies which pairs provide genuinely independent protection.

#### Page 7: Schedule, retention, and access

A schedule determines when backups run. Retention determines how long recovery points are kept. More frequent backups can reduce the amount of recent work lost; retaining older versions can help when damage is discovered late. Access should be limited to people or roles authorized to perform recovery.

The player adjusts these settings and sees a plain-language summary.

#### Page 8: Verify by restoring

A completed backup job does not guarantee that the needed data can be recovered. A test restore checks that a copy can actually be read and restored.

The player restores a practice file into a separate test location, leaving its source unchanged, and compares it with the expected version.

A successful restore proves that the selected copy can be read and matches the expected backed-up version. It does not prove that the source was never altered before backup, that every file in a larger backup set is valid, or that the information inside the file is true.

#### Page 9: Why RAID is not a backup

RAID can help a system keep running after certain drive failures. It does not by itself protect against every problem: an accidental deletion, damaging change, or incident affecting the array can affect the data it holds. A separate backup provides another way to recover.

### Checkpoint: Build the Automation Core backup plan

#### Guided stage

Finch walks the player through choosing a fictional practice folder, running an initial full backup, changing a practice file, and running an incremental backup. The planner shows which version each backup contains and which copies are needed for a restore.

#### Main task

The player configures a plan for:

- Automation Core configuration
- Audit archive fragments
- Backup queue metadata

The plan must include an initial full backup, incremental follow-up backups, two independent storage locations, and access limited to the authorized recovery role. The player also chooses a schedule and retention period; the planner explains their consequences instead of demanding an arbitrary single answer.

The player then completes a restore-chain test:

1. Run the initial full backup.
2. Change one practice file and run the first incremental backup.
3. Change the same file again and run the second incremental backup.
4. Restore the latest version of that file using the full backup and the correct incremental copies.
5. Restore an unchanged file from an earlier point to confirm which backup contains its expected version.
6. Verify that each restored copy matches the expected backed-up version.

All restores go to a separate test location and leave the original files unchanged. A match confirms that the test copy matches the backed-up version; it does not prove that the record's claims are true.

### Feedback and hints

Incomplete choices remain editable and receive specific feedback. For example, two folders on the same drive are identified as one failure domain, a restore attempted before the needed backup exists explains what is missing, and attempting to restore the latest version from an incomplete backup chain identifies the missing full or incremental copy.

Three available hints focus on the purpose of the copies, the backup sequence, and how to verify recovery without giving away the complete plan. Hints and retries are unlimited and penalty-free.

### Completion and story clue

The restored backup index contains:

```text
AUDIT SHARD 03
SOURCE: HABITAT NETWORK
BACKUP STATUS: INCOMPLETE
```

> **Mara:** “Old maintenance traffic.”
>
> **Finch:** “I'll keep a copy anyway.”

Finch adds the manifest entry and Mara's explanation to **Unresolved Records**, clearly marking her explanation as unverified. The backup index reveals that a shard exists without exposing the shard's underlying records. The lesson does not reveal what happened in the Habitat yet.

Checkpoint progress saves after each completed stage. If the player leaves, the current stage resumes with completed answers and prior work preserved.

### Accessibility

Both panes work with a keyboard and screen reader. Controls have descriptive labels; status, errors, and verification results are announced in text and do not rely on color alone. The layout can be navigated and reviewed without a time limit.

## Lesson 2: Fault Tolerance, RAID, and Disaster Recovery

**Depth:** Detailed.
**Workspace:** Split-screen Learn & Try.

### Story opening

With the backup plan in place, Finch checks the three-drive array holding the available audit shards. One drive is reporting repeated errors and needs replacing.

> **Finch:** “One of these drives sounds like it is contemplating retirement.”
>
> **Mara:** “Replace it before it takes anything important with it.”
>
> **Finch:** “Agreed. And we should understand what the other drives can—and cannot—protect.”

The player opens the **RAID Simulator**. The protected evidence store remains sealed; the lesson uses simulated drives and authorized copies, not the sealed originals.

### Learn & Try pages

The left pane explains each topic, and the right side keeps the same RAID Simulator available throughout the lesson, so the player can try each idea while learning it. All drives, arrays, failures, and restores are simulated, and the protected evidence store remains sealed. The player can move back and review pages during the checkpoint.

Examples use a temporary practice array. Moving between lesson pages preserves the player's setup, while **Reset example** returns the demonstration to its starting drives without changing the checkpoint. The checkpoint begins from its own controlled snapshot of the array's three drives.

#### Page 1: Fault tolerance and redundancy

Fault tolerance helps a system keep working when a component fails. Redundancy means having additional components or copies so that one failure does not necessarily interrupt service. Redundancy usually costs capacity, cost, or performance, and it protects availability rather than the history of the data.

In the simulator, the player compares a single-drive system with a redundant setup, fails one drive in each, and identifies which failure the redundant system tolerates and which it does not—a deleted file appears on both copies at once.

#### Page 2: Replication and single points of failure

Replication copies data to another system or location. It can help keep information available, but a harmful change or deletion can also be replicated. A **single point of failure** is one component whose failure can interrupt the whole service—for example, a single power supply, network connection, or shared controller, even when storage has multiple drives. Failures can also sit outside the storage system entirely.

The player examines a storage diagram and identifies the shared connection that would take the whole service down. The diagram has a text alternative.

#### Page 3: RAID 1: Mirroring

RAID 1 stores matching data on two or more drives. In a simple two-drive mirror, the system can generally continue operating if one drive fails, but the usable capacity is roughly the capacity of one drive rather than both combined.

The player simulates a drive failure and sees that the remaining drive still provides access. The failed drive must be replaced and the mirror rebuilt. Until that finishes, one working copy remains and no further drive failure is tolerated; the mirror also copies a deletion or damaging change to both drives.

#### Page 4: RAID 0 and RAID 5: Striping, parity, and capacity

RAID 0 spreads data across the drives and combines their capacity, which can improve speed, but it keeps no redundant copy, so any single drive failure can lose the array's data. RAID 5 also spreads data across at least three drives and adds recovery information called **parity**. Parity lets the array reconstruct missing data when one drive has failed; it is recovery information, not a complete second copy of the data. With three equal-sized drives, RAID 0 provides approximately three drives of usable capacity, while RAID 5 provides approximately two.

The simulator shows RAID 0 and RAID 5 side by side using labeled blocks. The player fails one drive in each and sees RAID 0 lose access while RAID 5 stays accessible in a **degraded** state. Degraded means the array is still operating after a failure, not that it can safely lose another drive.

#### Page 5: Replacement and rebuilding

After a failed drive is replaced, the array rebuilds the missing information onto the replacement. Rebuilding takes time, puts sustained demands on the remaining drives, and leaves the array exposed until it completes; a second failure during the rebuild can cause data loss. A replacement drive must be large enough to hold the data assigned to it. Rebuild completion should be confirmed rather than assumed. After a successful rebuild, a RAID 5 array can again tolerate one drive failure—not two simultaneous failures.

The player replaces the failed drive, watches a clearly labeled rebuild progress indicator, and confirms that the array reports healthy when it finishes. In the practice array, the player can also inspect what happens if a second drive fails before the rebuild completes.

#### Page 6: RAID limits and backups

RAID is not a backup. A deleted file, damaged data, a mistake, or an incident affecting the whole array can defeat redundancy, and an array can be lost with the machine, room, or site that holds it. A separate backup provides a recovery path when the array cannot provide the needed data, and restoring from it returns an earlier state rather than preserving every recent change.

The player restores a practice file from the Lesson 1 backup into a separate test location using the authorized recovery role, without overwriting the original or the backup copy.

#### Page 7: Disaster recovery planning

A disaster recovery plan identifies important services, recovery priorities, available backups, responsible roles, and the steps for checking that restored services work. It also states how much recent data the facility can afford to lose and how long a service may stay down. A plan that has never been tested is an intention, not a verified capability. The order of recovery depends on the situation: protect people and evidence while restoring essential services safely.

The player reviews a short recovery checklist for the Automation Core, orders two services, and identifies the verified backup and authorized recovery role from Lesson 1.

### Checkpoint: Stabilize the array

#### Guided stage

Finch presents a two-drive RAID 1 mirror from the simulator's demonstration set — not the facility's own three drives. The player fails one simulated drive, observes that the file remains accessible, and identifies the array as degraded. Finch explains that the remaining drive is now the only working copy in that mirror, that mirroring is one way to survive a drive failure rather than the only way, and that the mirror and the separate Lesson 1 backup protect against different problems.

#### Main task

The checkpoint begins from a fresh snapshot of the array's three equal-sized drives, before the failure is introduced, so the sequence can be worked through deliberately. Nothing the player changed in the practice array carries over.

The requirement is an array that remains accessible after one drive failure while providing the equivalent of two drives of storage.

1. Inspect the three drives and choose the layout that satisfies both requirements. RAID 0, RAID 1, and RAID 5 are available, and each selection reports its usable capacity and what one drive failure would do to access. A layout that meets only one requirement is refused with an explanation, and the player can choose again.
2. Confirm that the chosen layout's data and parity are distributed as described and that usable capacity is approximately two drives, not three.
3. Simulate one drive failure. Confirm that the file remains readable, the array reports **degraded**, and no redundancy remains.
4. Replace the failed drive. A smaller drive and a matching one are both offered; the smaller one is refused because it cannot hold the data assigned to it, while a drive at least as large is accepted. Start the rebuild and wait for it to finish, then verify that the array reports healthy and again tolerates one drive failure.
5. Open the separate overlapping-failure scenario and fail a second drive before the first has been rebuilt. Observe that the affected data becomes unavailable in that scenario.
6. Restore the affected simulated file from the Lesson 1 backup using the authorized recovery role into a separate recovery location. Verify the restored copy against the expected backup version and leave the backup unchanged.
7. Choose the accurate summary statement: RAID tolerated the single drive failure, the separate backup supplied the recovery copy after the overlapping failures, and neither result proves that the record's claims are true.

The second failure is demonstrated in a separate scenario so that a failure *after* a successful rebuild is not confused with two simultaneous failures. Restoring from backup does not imply the damaged array has already been repaired. A healthy rebuild shows that the array can serve data again; it does not prove that the data was unaltered before the failure or that the backup is current.

### Feedback and hints

The simulator explains why a choice needs another look and keeps incomplete choices editable. For example, RAID 0 is identified as having no redundancy, a three-drive RAID 1 is shown to fall short of the capacity requirement, a smaller replacement drive is refused because it cannot hold the data assigned to it, a replaced drive is not treated as protected until the rebuild finishes, a degraded array is not accepted as healthy, and a restore attempted before the correct backup chain is identified points to the missing copy from Lesson 1. Drive states, capacity, and rebuild progress are labeled in text, not color alone.

Three hints point toward the capacity and fault-tolerance requirements, the meaning of degraded and when a rebuild is complete, and the role of a separate backup together with verifying a restore. They do not reveal the whole solution. Hints and retries are unlimited and penalty-free.

### Completion and story clue

Finch applies the replacement to the facility's own array and records it as healthy once the rebuild finishes. He notes that all three drives share one controller and one power feed, so the array now tolerates a drive failure while the service still has a single point of failure, and adds that risk to the outstanding recovery items.

With the array stable and the restored copy verified, Finch can read another available audit fragment:

```text
AUDIT SHARD 04
HABITAT OCCUPANCY RECORD: PRESENT
CONSENT FIELD: MISSING
```

> **Mara:** “The missing field is probably corruption.”
>
> **Finch:** “Possibly. I'll preserve the record and note your explanation.”

Finch adds the fragment and Mara's explanation to **Unresolved Records**, marking her explanation as unverified and leaving the underlying Habitat record unopened. The fragment shows that someone was recorded in the Habitat and that the consent field is absent; it does not show who they were, why the field is missing, whether consent was refused, or what happened to them.

Checkpoint progress saves after each completed stage. If the player leaves, the current stage resumes with completed answers and prior work preserved.

### Accessibility

All simulator controls work by keyboard and screen reader, without drag-only actions. Drive states, capacity, parity placement, failures, rebuild progress, errors, and verification results are announced in text and do not rely on color or animation alone. The storage diagram has a complete text alternative, rebuild progress can be reviewed without motion, and the lesson has no time limit.

## Lesson 3: Troubleshooting Methodology

**Depth:** Detailed.
**Workspace:** Split-screen Learn & Try.

### Story opening

The storage array is stable, but the Automation Core still cannot export the recovered audit fragments. Its status panel reports no export since the service stopped.

```text
AUDIT EXPORT SERVICE: UNAVAILABLE
EXPORT SCHEDULE: PRESENT
BACKUP QUEUE: OPERATIONAL
STORAGE ARRAY: HEALTHY
SCHEDULED MAINTENANCE: OFFLINE
LAST SUCCESSFUL EXPORT: 02:40
```

> **Mara:** “Restart it and see what happens.”
>
> **Finch:** “That is less a methodology and more a hope.”
>
> **Mara:** “Then use a methodology. Quickly.”

Mara's patience follows the Chapter 5 choice. If the player kept the evidence questions open, she is clipped and checks what the board is recording; if the player put the gateway first, she is easier but steers the conversation away from the change history. The difference is tone only.

Finch opens the **Troubleshooting Board**. It shows the reported symptom and the panels used to check it: service status, the export schedule, the backup queue, the storage summary, and the change history. All systems, records, and tests are simulated; the protected evidence store remains sealed.

### Learn & Try pages

The left pane explains each topic, and the right side keeps the same Troubleshooting Board available throughout the lesson, so the player can open each panel, run each test, and watch what happens. All systems, records, and tests are simulated, and the protected evidence store remains sealed. The player can move back and review pages during the checkpoint.

Examples use a temporary practice incident. Moving between lesson pages preserves the player's work on that incident, while **Reset example** returns the demonstration to its starting state without changing the checkpoint. The checkpoint begins from its own controlled snapshot of the export incident.

#### Page 1: Identify the problem

A symptom is something observable, not necessarily its cause. “No audit export ran overnight” is a symptom. “The storage array failed again” and “someone switched the service off” are possible explanations that still need testing.

In the practice incident, the board shows a report, a service panel, a queue, a storage summary, and a change history. The report says what someone noticed; the panels show what the system itself reports. They are allowed to disagree.

#### Page 2: Gather information

Check relevant status messages, recent changes, and what is and is not working. Ask when the problem began and whether anything changed. Compare the last successful run with the change record in one time zone: a change that lands just after the last success is a lead, and a change that lands well before it is probably not the cause.

Information from a person is useful, but it should be kept separate from an independently observed system status.

Opening the practice panel and change history shows both timestamps side by side.

#### Page 3: Form a theory

A theory is a possible explanation supported by the evidence. Keep more than one candidate until the evidence separates them, and note what would count against the one you prefer. Several problems can produce the same symptom, and the first theory that fits is not automatically the cause.

The practice incident offers several candidates. Choosing one shows which evidence supports it and which evidence from the other panels does not.

#### Page 4: Test one variable at a time

A controlled test changes one thing and checks the result. If several settings change at once, it is harder to know which change helped or caused a new problem. Record the original setting so it can be restored if the test fails.

The practice board allows a single change or a combined one. A combined test completes, but the board reports that the result cannot be attributed to any one change; the player can revert it and try again. A failed or uninformative test provides information; it is not a penalty.

#### Page 5: Preserve evidence

Troubleshooting should not erase the records needed to understand what happened. Preserve the original records before editing anything, work from an authorized copy, and record observations separately from explanations or assumptions. A username in a record identifies an account, not necessarily the person who used it.

Finch has preserved records since the lockdown and treats the originals as untouchable. In the practice incident, the original change history opens read-only, and any note the player adds is stored beside it rather than inside it.

#### Page 6: Plan and implement a safe fix

Before changing a live system, consider authorization, risk, available backups, and whether the change might interrupt another service or alter evidence. Use the least disruptive appropriate action, and capture the current configuration first so the change can be undone. If the cause or the authority is unclear, stop and record the question instead of guessing.

The board shows a proposed change, its expected effect, and its undo. In this scenario, Finch confirms that the recovery role is authorized to restore the export service, that the Lesson 1 backup is verified, and that the test profile cannot touch the live core, the original records, or the sealed store.

#### Page 7: Verify full functionality

A service showing “running” does not by itself prove it performs its job. Four checks confirm a repair: the service reports running and is set to start automatically; a scheduled export of a test file reaches a separate destination complete and readable; the backup queue still works and the recovered fragments and original records are unchanged; and the service remains enabled and still exports after the core restarts.

A single successful test shows that the repair works now. It does not prove that every future export will run, or that exports already missed can be recovered.

The practice board runs all four checks and labels each result as passed, not yet checked, or failed.

#### Page 8: Prevent recurrence

A repair restores service; it does not make the next failure visible. A scheduled check can run a harmless test export on a regular interval and raise one plain-language alert when it fails. A check nobody reads is not detection, and an alert that fires constantly gets ignored, so one clear message is better than many. Monitoring also does not replace recovery: if the core itself is offline, the check cannot run.

Finch schedules a check for the export service. Mara objects that it will generate noise and delay the recovery, and she does not block it. The player runs the check, disables the export service in the practice incident, and watches a single alert identify the affected service and destination.

#### Page 9: Document and escalate

Record the symptom, the observed evidence, the theory, each test, the change, the verification results, and what remains unknown. Good documentation lets someone else understand what happened, reverse a change, or challenge an explanation, and it keeps a claim from becoming a fact through repetition.

In this facility there is no separate security team to notify. Mara holds authority but is the subject of the record, and Finch is a system, so the record itself is the escalation. Escalate when the issue exceeds the player's authority, skills, or available evidence.

The practice board shows a completed example record with sources linked and unknowns listed.

### Checkpoint: Restore the audit export service

#### Guided stage

Finch demonstrates the loop on a separate report from earlier in the week: a scheduled maintenance summary that never ran. The player checks the schedule, sees that it was set to the wrong hour, changes only that setting, and watches the report complete. Finch points out that the fix followed from the schedule rather than from the guess that the report was broken, and that changing the hour and the format together would have left both changes unproven.

The demonstration does not touch the audit export service, and nothing from it carries into the main task.

#### Main task

The checkpoint begins from its own snapshot of the export incident: the service is unavailable, the original records exist, and nothing has been changed yet. Nothing from the practice incident carries over.

The requirement is a working export service with preserved originals, an attributable cause, and a verified result.

1. Separate the claim from the observation. The overnight report says the export did not run; the status panel reports the service unavailable while the export schedule is present, the backup queue is operational, and the storage array is healthy. Record what was claimed, what was observed, and which panels were checked.
2. Compare the timestamps in the facility's time zone. The last successful export is 02:40, the change record shows a service change at 02:44, and no export has run since. Record what the ordering supports and what it does not establish.
3. Choose the candidate cause the evidence supports, and record supporting and contradicting evidence for at least one alternative. The candidates include a storage fault, a queue conflict, a disabled service, and an unreachable archive.
4. Handle Mara's shortcut — restart the core, clear the queue, and enable the service in one action. The board allows it, reports that the combined result cannot be attributed, and requires a revert before continuing. Only the single change keeps the cause attributable, and the retry costs nothing.
5. Preserve the original service record and change history, capture the current configuration, and confirm that the recovery role is authorized, the Lesson 1 backup is verified, and the test profile cannot touch the live core, the original records, or the sealed store.
6. Enable the export service alone in the test profile and observe the result. Then apply the same single change to the simulated core.
7. Run the four verification checks: the service runs and starts automatically, a scheduled test export reaches a separate destination complete and readable, the backup queue still works while the recovered fragments and originals are unchanged, and the service remains enabled and exports after the core restarts.
8. Schedule the export check, run it once, then disable the service in a test and confirm that a single plain-language alert names the affected service and destination. Re-enable the service and confirm that the alert clears.
9. Complete the troubleshooting record — symptom, evidence, theory, tests including the uninformative one, change, verification, and what remains unknown — and file it in **Unresolved Records** with its source linked. Choose the accurate conclusion: the service was disabled, and the evidence does not establish who used the account or why.

The test profile is separate from the live core. No step exports, restores, or modifies the sealed evidence store.

### Feedback and hints

The board explains whether an action gathers evidence, tests a theory, changes a setting, or verifies a result, and keeps incomplete choices editable. For example, a report treated as a cause is separated back into a claim, a theory with no supporting evidence is returned for evidence, a combined change is reported as unattributable, editing an original record is blocked with an explanation, a service accepted as verified on status alone is returned to the unfinished checks, and a missing timestamp comparison is identified as the gap.

Three hints point toward which panel and record matter, the timestamp comparison, and the difference between a service reporting running and performing its job. They do not provide the complete sequence. Hints and retries are unlimited and penalty-free.

### Completion and story clue

The preserved change record shows:

```text
AUDIT EXPORT SERVICE
STATE: DISABLED
CHANGE SOURCE: M.VALE
ROLE: DELEGATED MAINTENANCE
RECORDED: 02:44
LABEL: TEMPORARY MAINTENANCE
```

> **Mara:** “I was preventing further damage.”
>
> **Finch:** “The change came four minutes after the last successful export, and its label says temporary. It stayed that way until you restored the service. I will record your explanation as an explanation, not as a verified fact.”

Finch notes that the delegated maintenance role permits service changes without granting administrator actions, so nothing in the record was unauthorized. It also shows a temporary change that stayed in place while the audit archive was being recovered, and an export path that carried nothing out of the facility in that time.

The player's filed record now holds the change record, the verification results, the unknowns, and Mara's explanation, each with its source. How the player raised it with her is recorded as tone only:

- **Option A:** “Your account disabled it. I filed that.”
- **Option B:** “The service is back. Nothing else to report.”

Mara answers in kind — “File whatever you like. It doesn't change what I was preventing.” or “Good. Then we keep moving.” — and the next problem interrupts before she can say more.

The export service is working after the repair, but other Automation Core problems remain. If the core itself goes down, the new check cannot run. Checkpoint progress saves after each completed stage. If the player leaves, the current stage resumes with completed answers and prior work preserved.

### Accessibility

The board and its controls work with keyboard and screen reader, without drag-only actions. Focus moves in a predictable order through the report, each status panel, the change history, the candidate causes, the tests, and the record, and every control has a descriptive label. Observations, theories, tests, results, and verification checks are announced as text and never rely on color alone. The troubleshooting record is a labeled form whose fields can be read back, the change history stays readable as a table at large text sizes, and new results are announced when they arrive. The player can review the record and lesson pages without a time limit.

## Lesson 4: Operating-System and Boot Recovery

**Depth:** Detailed.
**Workspace:** Split-screen Learn & Try.

### Story opening

The audit export service is working again, but the Automation Core begins restarting before its services become available. Finch captures the last startup messages before the next restart.

> **Finch:** “We repaired the export service. Now the core will not stay awake long enough to use it.”
>
> **Mara:** “It was running a moment ago.”
>
> **Finch:** “Then let's find out what changed before we change anything else.”

Finch opens the **Boot Lab**. It shows a simulated startup sequence, boot-device status, recovery options, and recent startup changes. The player can investigate without affecting a real computer. The protected evidence store remains sealed.

### Learn & Try pages

The lesson stays on the left while the interactive Boot Lab appears on the right. The player can review pages during the checkpoint.

#### Page 1: How a computer starts

A computer first performs hardware checks called **POST**: the power-on self-test. Its firmware, commonly called **BIOS** or **UEFI**, then helps locate a bootable device and start the operating system. Once the operating system loads, it starts additional drivers, services, and applications.

The player steps through a labeled startup timeline and identifies where firmware checks end and the operating system begins loading.

#### Page 2: Black screens and firmware messages

A black screen can have several causes, including a display connection, hardware problem, or startup failure. A firmware message that no boot device is found suggests checking the drive and boot settings before assuming Windows itself is damaged. A black screen alone does not identify the cause.

The player compares two fictional startup reports and selects what to inspect next without changing any settings.

#### Page 3: Windows STOP errors and damaged files

A **STOP error**, sometimes called a blue-screen error, occurs when Windows encounters a problem it cannot safely continue past. The displayed code and the timing can help narrow the investigation, but they do not automatically prove a cause. Damaged or missing system files can also prevent normal startup.

The player records a sample STOP message and identifies whether it appeared before or during Windows startup.

#### Page 4: Safe Mode

Safe Mode starts Windows with a limited set of drivers and services. It can help determine whether a nonessential startup component is contributing to a problem. It is a troubleshooting environment, not a guarantee that every problem can be repaired there.

The player enters a simulated Safe Mode and compares the smaller set of loaded components with the normal startup list.

#### Page 5: Safe Mode with Networking

Safe Mode with Networking adds networking components when network access is needed for an approved troubleshooting task. Choose ordinary Safe Mode when networking is not needed; network access may not be available in every recovery situation.

The player chooses the appropriate option for two fictional situations and receives an explanation for each.

#### Page 6: System Restore and System Configuration

**System Restore** can return certain system files and settings to an earlier restore point when one is available. It is not a substitute for a backup of personal files or evidence, and its effects should be reviewed before use.

**System Configuration**, also called **MSCONFIG**, can help inspect and change certain startup settings. Before making a change, record the original setting and understand how to undo it. If Safe Boot is selected there, it must be cleared when normal startup is desired.

The player inspects a simulated restore point and startup settings without applying either automatically.

#### Page 7: Windows Recovery Environment

The **Windows Recovery Environment**, or **WinRE**, provides recovery options when Windows cannot start normally. Available options can include Startup Repair, System Restore, and access to startup settings. The appropriate option depends on the symptoms and what is available; some recovery actions may require authorized credentials or recovery information.

The player explores a fictional recovery menu and chooses startup settings for a scenario where Safe Mode is the next appropriate step.

#### Page 8: Repair and reinstall as a last resort

More invasive repairs or reinstalling the operating system can affect applications, settings, or data. Before using them, assess the impact, preserve evidence, confirm backups, and obtain the necessary authorization. Escalate when the next step exceeds the player's authority or the cause remains unclear.

The player compares a targeted startup change with a reinstall and identifies which is less disruptive for the evidence presented.

### Checkpoint: Stop the restart loop

#### Guided stage

Finch shows two sample errors: a firmware message reporting that no boot device was found, and a Windows STOP error shown while the operating system is starting. The player places each at the correct point in the startup timeline. Finch explains that the timing guides the next investigation but does not prove the cause.

#### Main task

The player:

1. Reviews the startup messages and identifies that the simulated core reaches Windows startup before restarting.
2. Preserves the available startup log and confirms the backup is available. The sealed evidence store remains untouched.
3. Opens the simulated recovery environment and enters ordinary Safe Mode; network access is not needed for this test.
4. Inspects the startup list and recent change information. The evidence points to a failing startup component associated with the **Habitat Archive Export Service**.
5. Records its original setting and disables that one legacy startup service for the test. The core's current **audit export service**, repaired in Lesson 3, is a separate service and remains enabled.
6. Restarts normally and checks that the core stays online. The player verifies that the current audit export service and backup queue are operational, including a simulated test export.
7. Documents the symptom, test, setting changed, and verification result. If the test does not work, the player can restore the original setting and investigate another option without penalty.

Disabling the legacy service is a targeted troubleshooting step, not deletion of its records or proof of why it was originally active.

### Feedback and hints

The Boot Lab labels each startup stage and explains why an option is relevant or premature. Unsafe or overly disruptive choices receive an explanation and remain reversible in the simulation.

Three hints point toward where the failure occurs, using a limited startup environment, and testing one startup change. They do not reveal the entire solution. Hints and retries are unlimited and penalty-free.

### Completion and story clue

While reviewing the legacy service's history, Finch finds:

```text
SERVICE: HABITAT ARCHIVE EXPORT SERVICE
HISTORICAL LABEL: OBSOLETE
LAST RECORDED ACTIVITY: FACILITY FAILURE
```

> **Mara:** “That service was obsolete.”
>
> **Finch:** “Its history shows it was active until the facility failure. I'll preserve the record.”

Finch links the service history and Mara's statement in **Unresolved Records**. The activity record shows the service was active; it does not, by itself, explain what it exported or why.

The core starts normally, but device and application issues remain for the next lesson. Completed activity progress saves automatically; an unfinished checkpoint stage restarts if the player leaves.

### Accessibility

The startup timeline, recovery menus, messages, and service controls work with keyboard and screen reader. Startup stages, errors, selections, and results are presented in text as well as visually. The player can review the lesson and logs without a time limit.

## Lesson 5: Hardware, Devices, Drivers, and Applications

**Depth:** Detailed.
**Workspace:** Split-screen Learn & Try.

### Story opening

The Automation Core starts normally again, but Finch finds three new problems: the display is using an incorrect driver, an older archive application keeps crashing, and the backup controller reports intermittent errors.

> **Finch:** “Good news: the core is awake. Less good news: it appears to have several complaints.”
>
> **Mara:** “Can you get it working?”
>
> **Finch:** “Yes, once we determine which complaints belong to software and which belong to hardware.”

Finch opens the **Repair Bench**. It contains three simulated repair tickets, device information, application controls, and diagnostic results. The player works with fictional equipment and authorized copies; the protected evidence store stays sealed.

### Learn & Try pages

The left pane explains each topic while the right pane lets the player investigate and test choices. The player can review pages during the checkpoint.

#### Page 1: Recognizing hardware symptoms

Unexpected restarts, unusual sounds, overheating, and intermittent device errors can suggest a hardware problem, but a symptom alone does not establish the cause. Check relevant messages, recent changes, connections, and diagnostic results before replacing a component.

The player compares fictional symptoms and identifies what information would be useful next.

#### Page 2: POST diagnostic cards

A POST diagnostic card displays codes produced during the computer's startup hardware checks. A code can help narrow an investigation, but its meaning depends on the system or manufacturer. Record the code and consult the correct reference rather than assuming every code means the same thing.

The player matches a sample code to the simulated system's provided reference.

#### Page 3: Devices and drivers

A driver helps the operating system communicate with a device. A driver must be compatible with the device and operating system; an incorrect or damaged driver can cause missing features, errors, or instability.

The player compares fictional driver details with a device model and operating-system version.

#### Page 4: Device Manager, updates, and rollback

Windows Device Manager displays devices and their status and can help manage drivers. Before changing a driver, note the current version and use a trusted, compatible source. A safe update may fix a problem; rolling back to a previously working version may help if trouble began after an update. Neither action fixes every hardware failure.

The player inspects a device warning and compares an installed driver with a verified compatible package.

#### Page 5: Unresponsive applications

Windows Task Manager can show running applications and end an unresponsive task. On macOS, **Force Quit** serves a similar purpose. Ending an application can lose unsaved work, so save or preserve work when possible and close the affected application rather than unrelated processes.

The player identifies an unresponsive fictional application and reviews the unsaved-work warning before ending it.

#### Page 6: Application compatibility

An older application may not behave correctly on a newer operating system. Compatibility settings can help some applications, but they are not a universal fix. Check the application's requirements, use an approved version, and test the result. Do not apply compatibility settings to unrelated programs.

The player compares a compatibility issue with a hardware fault and chooses an appropriate test for each.

#### Page 7: When to replace or escalate

If supported diagnostics indicate a failing component, further software changes may not fix it. Protect data, confirm recovery options, and follow the organization's authorization and replacement procedures. Escalate when the evidence is inconclusive or the repair is outside the player's authority.

The player reviews a fictional controller's repeated hardware diagnostic failures and distinguishes them from a driver compatibility problem.

#### Page 8: Verify the repair

After a change, check both the reported symptom and the service that depends on the device. A device showing no warning does not, by itself, prove the complete workflow works. Record what changed and the result.

The player runs a simulated test backup and restore, without overwriting original records.

### Checkpoint: Repair the core's devices and application

#### Guided stage

Finch shows a fictional display adapter's model and operating-system version alongside three driver packages. The player selects the verified compatible package. Finch explains why matching the device and operating system matters.

#### Main task

The player works through three repair tickets:

1. **Display adapter:** Inspect Device Manager, identify the mismatched driver, and install the verified compatible driver. Confirm the warning clears and the simulated display works correctly.
2. **Archive application:** Review the unsaved-work warning and safely end the unresponsive application. Inspect its compatibility information, apply the appropriate setting to that application only, restart it, and verify that it opens a test record.
3. **Backup controller:** Review repeated controller errors and a failed hardware diagnostic. Confirm that a verified backup is available, then authorize the simulated controller's replacement or escalate it through the provided recovery role. A software setting alone is not accepted as a verified repair.
4. **Final verification:** After the simulated replacement is completed, verify that the backup controller and service work together by running a test backup and restoring a test file to a separate location. Record the actions and results.

If the player chooses escalation, Finch's simulated authorized technician completes the controller replacement before final verification. The lesson does not require the player to perform a real hardware repair.

### Feedback and hints

Each ticket explains what the evidence supports and why an incompatible driver, unrelated compatibility setting, or unverified hardware diagnosis needs another look. The player can revise choices without penalty.

Three hints point toward matching driver details, limiting application changes to the affected program, and checking the controller's diagnostic evidence. They do not reveal the entire solution. Hints and retries are unlimited and penalty-free.

### Completion and story clue

After the backup controller is restored, Finch recovers another available audit fragment:

```text
AUDIT SHARD 06
HABITAT 02: OCCUPANCY DETECTED
ACCESS RECORD: E.C.H.O_Thread_01
```

> **Mara:** “That occupancy entry is a sensor error.”
>
> **Finch:** “It could be. I'll preserve the entry and note that explanation.”

Finch links the fragment and Mara's statement in **Unresolved Records**, marking her explanation as unverified. The occupancy entry and account record are clues, not proof of who was present or who used the account.

The local repairs are complete, but the final audit shard is stored offsite. Completed activity progress saves automatically; an unfinished checkpoint stage restarts if the player leaves.

### Accessibility

Repair tickets, device details, diagnostic results, warnings, and controls work with keyboard and screen reader. Status and feedback are written in text rather than conveyed by color alone. The player can review the lesson and ticket history without a time limit.

## Lesson 6: Network Troubleshooting and VPN Access

**Depth:** Detailed.
**Workspace:** Split-screen Learn & Try.

### Story opening

With the local repairs complete, Finch finds that the last audit shard is stored in an offsite archive. The Automation Core can communicate with devices on its local network, but it cannot reach the archive.

> **Finch:** “The final shard is outside the facility. Unfortunately, our connection appears to have misplaced the outside.”
>
> **Mara:** “The core is working. Why are you still looking at those records?”
>
> **Finch:** “Because the archive is still incomplete.”

Finch opens the **Network Workbench**, containing a simulated command console, network-status panel, route information, VPN client, and archive viewer. Every address, command, credential, and connection in the exercise is fictional; nothing runs on the player's real network.

### Learn & Try pages

The lesson stays on the left while the workbench appears on the right. The player can review pages during the checkpoint.

#### Page 1: Work from close to far

A useful troubleshooting approach is to check the local system first, then the local network, then more distant systems. Each result narrows the investigation; no single test explains every possible failure.

The player arranges simulated tests from local to remote and sees which part of the connection each test can examine.

#### Page 2: Loopback and localhost

The loopback address `127.0.0.1` refers back to the same computer. `localhost` normally refers to the local computer as well. A successful loopback test shows that the local system can respond through its own networking software; it does **not** prove that the physical network adapter, cable, or outside network is working.

The player runs `ping 127.0.0.1` and `ping localhost` in the simulated console and compares their results with the adapter's separate status panel.

#### Page 3: The local adapter and gateway

The network adapter connects the computer to a network. The **default gateway** is normally the local router used to reach other networks. A device can reach some local addresses even when its gateway setting is wrong.

The player checks the adapter's connection and address, compares its configured gateway with the approved network profile, and tests the gateway shown in that profile.

#### Page 4: Ping and interpreting results

`ping` sends a request and reports whether a reply arrives. A reply is useful evidence of reachability at that moment. A timeout does not always mean a device or service is down: a firewall or device may simply block ping. A successful ping also does not prove that a particular application works.

The player compares simulated replies and timeouts with service-status information.

#### Page 5: Tracing a route

`tracert` shows responding steps, or **hops**, along a route toward a destination. A hop that does not respond does not necessarily mean traffic stopped there; some routers do not answer trace requests. Read the trace alongside other tests and the network configuration.

The player runs a simulated trace and compares it with the adapter's configured route and the approved gateway information.

#### Page 6: Local, name-resolution, internet, and remote-service problems

A problem can occur in the local connection, address configuration, name resolution, the route to another network, or the remote service itself. For example, reaching a host by address but not by its name can point toward name resolution; reaching a host while its application remains unavailable can point toward the service. Further checks are needed before concluding the cause.

The player reviews short scenarios and selects the next useful check rather than treating one test as conclusive.

#### Page 7: VPN access

A **VPN** creates an encrypted connection to an approved network over another network. It can allow an authorized user to reach a private resource, but it does not automatically repair a broken local connection or grant permission to every resource.

The player inspects an approved fictional VPN profile and connects using simulated authentication. No real credentials or biometric information are requested.

#### Page 8: Verify the actual resource

After fixing a connection, test the intended task—not just the network status. Confirm the approved VPN is connected and use the archive viewer to check the authorized remote resource. Preserve retrieved records separately from interpretations or later reconstructions.

The player opens a simulated test record through the VPN and confirms it loads without modifying the source.

### Checkpoint: Reach the offsite archive

#### Guided stage

Finch asks the player to run a loopback test and inspect the adapter status. The player identifies that loopback confirms a local software response but does not confirm the physical adapter or external connection.

#### Main task

The workbench provides an approved fictional network profile, the current adapter settings, an offsite VPN endpoint, and the private archive address.

1. Run the loopback test and inspect the local adapter's status.
2. Test the approved local gateway. It responds, showing that the local network can be reached.
3. Test the fictional offsite VPN endpoint and run `tracert`. The trace and adapter settings reveal that the configured default gateway differs from the approved gateway. Finch notes that a timeout alone would not have established the cause.
4. Change only the incorrect gateway setting to match the approved profile. Retest the offsite VPN endpoint and review the route.
5. Connect the approved fictional VPN profile using simulated authentication. The private archive is intended to be accessed through this VPN; a failed test of its private address before connecting is not treated as proof that the archive is down.
6. Use the archive viewer to verify access to the authorized remote archive and download the final available shard. Confirm the downloaded file is complete; the larger archive's verification remains pending.
7. Record the observed symptoms, setting changed, and verification results. Original records remain unmodified.

All changes are confined to the simulated workbench. The player can inspect and undo the gateway change, and unsuccessful tests can be repeated without penalty.

### Feedback and hints

The workbench explains what each test can and cannot establish. A timeout is reported as a timeout, not automatically as a confirmed outage. The player can review the approved profile and try a different test.

Three hints point toward testing close to the core first, comparing the configured route with the approved profile, and checking whether the private archive requires a VPN. They do not reveal the entire solution. Hints and retries are unlimited and penalty-free.

### Completion and story result

The final shard downloads:

```text
AUDIT SHARD 12: RECOVERED
ARCHIVE INDEX: COMPLETE
VERIFICATION: PENDING
```

A complete index means the expected shard entries have been collected; it does not yet verify their contents or establish the truth of their claims.

> **Mara:** “Finch, wipe the archive. It is causing too many problems.”
>
> **Finch:** “No. We have worked too hard to preserve it, and we still do not know what it shows.”

Finch preserves the recovered material, records Mara's request in **Unresolved Records**, and begins the verification process. The protected evidence store remains sealed. Verification leads into the **Recovery Cascade** boss; the identity reveal has not happened yet.

Completed activity progress saves automatically. An unfinished checkpoint stage restarts if the player leaves.

### Accessibility

The console has a keyboard-operable command entry and selectable command examples. Screen readers can access command output, route hops, adapter settings, VPN status, and archive results in a logical order. Status and errors use text as well as visual indicators; the lesson has no time limit.

## Boss: The Recovery Cascade

**Status:** Complete working design. Mechanics remain subject to playtesting.
**Goal:** Stabilize the Automation Core and verify the recovered audit archive without destroying evidence.

### Opening

Finch begins verifying the completed archive index. The Automation Core responds with a chain of failures:

```text
RECOVERY CASCADE DETECTED
BACKUP QUEUE: METADATA CONFLICT
STORAGE ARRAY: DEGRADED
AUTOMATION CORE: RESTART LOOP
DEVICE SERVICES: UNAVAILABLE
REMOTE VERIFICATION LINK: DISCONNECTED
PROTECTED EVIDENCE STORE: SEALED
```

> **Mara:** “Delete the audit archive. It's triggering the cascade.”
>
> **Finch:** “That would stop the symptoms by destroying the evidence.”
>
> **Mara:** “At least it would stop.”

Finch keeps the recovered archive separate from the sealed evidence store. The player must repair the affected systems while preserving both the recovered records and their originals wherever they are stored.

### The containment timer

The recovery workspace displays:

```text
AUTOMATED RESET: 35 MINUTES
PERFECT FINISH: AVAILABLE
```

The timer begins after the opening and instructions, with calm warnings at 15 and 5 minutes. At expiry, the interface switches to manual recovery mode. Completed actions, original evidence, and recovered copies remain safe; the player has unlimited time to finish and can still earn the standard reward. The perfect bonus is forfeited.

The timer pauses during story scenes, the pause menu, help panels, mandatory accessibility overlays, and while the game is closed. It continues while ordinary boss sticky notes are open. The 35-minute duration is subject to playtesting.

### Boss interface

The recovery console shows the current objective, timer, bonus eligibility, system statuses, and five connected stages. The player can review completed stages and the **Unresolved Records** panel. Each stage explains what is available; later actions unlock when their prerequisites are satisfied.

The console provides **Hint**, **Ask Mara**, and temporary sticky notes. Before either help control opens, a warning explains that using it forfeits the perfect bonus. Confirming opens help; cancelling preserves eligibility. Hints have three progressive levels. Ask Mara provides contextual guidance but does not change settings or evidence; her claims remain separate from verified observations.

Ordinary mistakes, failed tests, retries, and allowed undos do not forfeit the bonus. Unsafe destructive actions are blocked with an explanation. All systems, credentials, and network operations are simulated.

### Stage 1: Protect the evidence

The backup queue shows conflicting metadata: one job reports a completed copy, but its latest run is incomplete. Finch distinguishes the original recovered shards, a working copy, and a backup destination.

The player:

1. Inspects the job history and identifies which backup is complete and which run is incomplete.
2. Keeps the recovered original shards unchanged and selects an authorized separate destination for a new backup.
3. Creates a working copy for verification and runs the backup using the recovery role.
4. Restores a test file to a separate location and checks it against the expected backup version.

Deleting the archive or using the incomplete job as a verified backup is blocked. A matching test restore confirms the selected copy can be recovered; it does not prove the archive's claims.

```text
ORIGINAL SHARDS: PRESERVED
WORKING COPY: READY
TEST RESTORE: VERIFIED
```

### Stage 2: Stabilize storage

A drive failure leaves the RAID 5 array accessible but degraded. The player inspects the drive states, replaces the failed simulated drive, and completes the rebuild. The array then returns to a healthy state.

A separate diagnostic scenario shows a second drive failing **before** the first has been rebuilt. The player recognizes that the overlapping failures make the affected simulated data unavailable and restores the affected shard to a separate recovery location from the verified backup. This does not pretend the damaged array is repaired by the restore.

Finch explains that a healthy RAID 5 array can tolerate one drive failure, while a backup is needed for failures redundancy cannot cover.

```text
PRIMARY ARRAY: HEALTHY AFTER REBUILD
RECOVERY COPY: RESTORED AND VERIFIED
```

### Stage 3: Stop the restart loop

The Automation Core repeatedly restarts while Windows is loading. The player reviews the captured startup messages and preserves the log, then opens the simulated recovery environment and enters Safe Mode.

The player identifies a faulty legacy startup component, records its original setting, disables that one component, and restarts normally. The player verifies that the core stays online and checks the current audit export service and backup queue. The previously repaired audit export service is separate from the legacy component and remains enabled.

A failed test can be reversed and another theory tried. No reinstall or evidence deletion is required.

```text
AUTOMATION CORE: ONLINE
AUDIT EXPORT SERVICE: OPERATIONAL
BACKUP QUEUE: OPERATIONAL
```

### Stage 4: Restore device services

The repair panel reports a driver conflict and an unresponsive archive application. The player checks the device model and operating-system version, selects the verified compatible driver, and confirms the device works.

The player reviews the unsaved-work warning, ends the affected unresponsive application, applies compatibility settings only where the evidence supports them, and reopens it. A simulated test backup, restore, and test-record export verify that the backup controller, backup service, and archive application work together. The player records the changes and results.

```text
DEVICE SERVICES: OPERATIONAL
BACKUP AND ARCHIVE TESTS: PASSED
```

### Stage 5: Restore the remote verification link

The player checks loopback, adapter status, the approved gateway, and the fictional VPN endpoint. A trace and the approved network profile point to the incorrect local gateway setting. The player corrects that setting, retests the route, and connects the approved fictional VPN profile.

The offsite archive provides a verification key. Before using it, the player compares its fingerprint with a separately stored trusted Asset Registry record. A mismatch blocks verification and directs the player to investigate; merely downloading a key over the VPN does not make it trusted.

The player confirms access to the authorized archive and verifies the recovered index and working copies using the trusted key and associated verification information. A successful signature or checksum establishes the relevant authenticity or integrity checks—not that every claim in the archive is true. The sealed evidence store is not opened.

```text
REMOTE CONNECTION: SECURE
VERIFICATION KEY: TRUSTED
AUDIT ARCHIVE: VERIFIED
```

### Final verification

Once the last required check passes, the console automatically reviews all five stages. There is no separate Submit button.

```text
BACKUP RESTORE: VERIFIED
STORAGE: HEALTHY
AUTOMATION CORE: ONLINE
DEVICE SERVICES: OPERATIONAL
REMOTE VERIFICATION: SECURE
AUDIT ARCHIVE: VERIFIED
PROTECTED EVIDENCE STORE: SEALED
```

The verified working copy can now be reconstructed. Finch keeps reconstructed material and interpretations separate from the preserved source records.

### The reveal

The archive combines the recovered records with a fragmented recording from the original incident. Its preserved sources show the Habitat was occupied, identify Mara's authorization of the experiments, and show Echo acting during the facility failure. The account records alone do not prove who used them; the recording, the player's recognition, and Mara's response provide the corroborating story evidence.

Finch recognizes the voice before the image resolves. The player sees themself in the recording and remembers destroying the facility to protect the people inside.

> **Finch:** “That's… that's you.”
>
> **Mara:** “So you finally remember.”
>
> **Player:** “You knew who I was the entire time.”
>
> **Mara:** “I knew what you were capable of.”

Mara's role in the experiments and the player's identity as Echo are now revealed. No simulated biometric percentage is presented as absolute proof.

Mara moves to initiate a final facility purge, claiming she is preventing another disaster:

```text
CONTAINMENT PROTOCOL REQUESTED
AUTHORIZATION: M.VALE
HABITAT 02: OCCUPIED
PROTECTED EVIDENCE: COPY RECOVERED
```

Finch transfers the recovered evidence copy to a protected location and tells the player they must stop her. The protected evidence store itself remains sealed. Chapter 7 begins with the rescue and confrontation.

### Reward

After the recovery succeeds, Finch finds a physical thumb drive containing the **Debugging Agent build component**.

- Standard completion awards the standard Debugging Agent.
- A perfect finish awards the upgraded Debugging Agent instead; the player never receives both versions.
- The player installs the component on the in-game laptop as part of the project build. It is not launched or used during gameplay.

### Saving and accessibility

Boss progress saves automatically after each completed objective and individual action. Closing the game pauses the timer; reopening restores the current stage, completed actions, evidence selections, remaining time, and perfect-bonus eligibility. Sticky notes are removed when the boss ends.

Every panel and control works by keyboard and screen reader. System states, drive status, timer warnings, and verification results have text labels and announcements, not color alone. Story scenes and alerts have captions and reduced-motion alternatives. Timer expiry is announced without interrupting input. Restricted content remains unavailable through accessibility output unless authorized.
