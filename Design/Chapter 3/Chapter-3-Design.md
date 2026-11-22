# Chapter 3 Design

**Status:** Working design. Chapter 3 focuses on databases; its lessons, story details, and boss will be developed together.

## Opening scene

The Workshop is quiet again. With main power restored and the Design Agent installed, the player sits down with their in-game laptop. Finch appears beside the monitoring display.

> **Finch:** "The monitor is working again, but it's found a rather impressive collection of Workshop records. I'm not sure where to start."
>
> **Mara:** "Then let's learn how those records are organized. A database can help us find the information we need."
>
> **Finch:** "Oh, good, because I think we both know I wasn't going to do it anyway."

Mara directs the player to the laptop's first database lesson. The records stay inside the game's simulation.

## Lesson 1: How databases organize information

### Opening

The chapter's opening scene plays. Mara directs the player to the first database lesson on their laptop.

> **Finch:** "The monitor can see more devices, but some of their names and locations are missing. That seems like an inconvenient detail to leave out."
>
> **Mara:** "The records may still be there. First, you need to understand how to read them."

### Lesson pages

The player moves through the pages using **Next** and **Back** and can return to them during the checkpoint.

#### Page 1: What is a database?

A database is an organized collection of information. It makes information easier to find, review, and update. The Safehouse Asset Registry is a database containing records about equipment in the facility.

#### Page 2: Tables, records, and fields

A **table** groups related information. A **record** is one row in that table, describing one item. A **field** is a column describing one kind of information about each item.

| Device ID | Device name | Room |
|---|---|---|
| `DEV-01` | Battery Monitor | Workshop |
| `DEV-02` | Charging Controller | Workshop |

In this example, the whole grid is a table. The `DEV-01` row is a record. **Room** is a field, and **Workshop** is a value in that field.

#### Page 3: Data types

A data type describes what kind of value a field holds:

- **Text:** Words, letters, symbols, or combinations such as `DEV-01`. An ID can be text even when it contains numbers.
- **Number:** A value used for quantities or measurements, such as a temperature of `22.5`.
- **True/false:** A value with two possible states, such as whether a device is online.

These are the types used in this lesson; databases can support other types too.

#### Page 4: Reading incomplete records

A record can have missing information. A shared device ID can help match a record to a recovered label. Before using the label, check that its ID matches the record being updated.

> **Finch:** "So the ID is the part that tells us which label belongs to which device. Good. I was about to start guessing."

### Checkpoint: Identify the devices

There is no separate practice activity. The player sees these incomplete records:

| Device ID | Name | Room | Temperature | Online |
|---|---|---|---|---|
| `DEV-04` | Unknown | Unknown | 22.5 | True |
| `DEV-05` | Unknown | Unknown | 18.0 | False |

The recovered labels say:

- `DEV-04`: Air Filter - Workshop
- `DEV-05`: Water Sensor - Storage

The player selects a name and room for each record, then selects the data type for **device ID**, **device name**, **temperature**, and **online status** from text, number, and true/false.

**Expected result:** `DEV-04` is the Air Filter in the Workshop; `DEV-05` is the Water Sensor in Storage. Device ID and name are text, temperature is a number, and online status is true/false.

### Feedback and hints

The player submits their answers. Correct selections are marked **Correct**; incorrect selections are marked **Try again**, without automatically showing the answer. Correct selections remain in place while the player revises the others. Retries and hints are unlimited and penalty-free.

Finch offers three hint levels:

1. "Compare the records with the labels, and think about what kind of information each field contains."
2. "Use the device IDs to match labels to records. For the types, consider whether a value is written as words, a measurement, or a yes-or-no state."
3. "An ID containing letters isn't a quantity to calculate with. An online field describes whether something is true or false."

### Completion

The recovered names and rooms appear on Finch's monitor.

> **Finch:** "Air Filter in the Workshop, Water Sensor in Storage. That's better. Now I know what I'm looking at."
>
> **Mara:** "Good. But knowing what a record says doesn't mean the registry is reliable. Let's look at how it's structured."

This leads into Lesson 2. Completed activity progress saves automatically; if the player leaves before finishing the checkpoint, it restarts when they return.

## Lesson 2: Schemas and primary keys

### Opening

Finch reviews the newly identified devices but notices something strange in the registry.

> **Finch:** "I found two devices with the same ID. Either the registry is confused, or one of them has learned to be in two places at once."
>
> **Mara:** "Then we need to look at the table's structure. A reliable registry needs a way to tell its records apart."

### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint.

#### Page 1: What is a schema?

A **schema** is a description of how a database is organized. A table's schema describes its fields, the types of values they hold, and any rules those values must follow.

For example, the device table might have these fields:

| Field | Data type | Purpose |
|---|---|---|
| Device ID | Text | Identifies a device |
| Device name | Text | Describes the device |
| Room | Text | Records its location |
| Serial number | Text | Identifies the physical equipment |

A schema describes the structure and rules; the table's records contain the actual device information.

#### Page 2: What is a primary key?

A **primary key** is a field, or combination of fields, used to identify each record in a table. Its value must be **unique** and cannot be missing.

For the registry's device table, Device ID is intended to be the primary key. Each device should have its own ID, even if two devices share a name or are in the same room.

A room is not a good primary key here: several devices can be in one room, and a device can move. A device name may also be shared. A suitable key should reliably distinguish records.

#### Page 3: Duplicate and missing IDs

A **duplicate** occurs when the same value appears more than once. Two device records with the same ID cannot both be kept under a rule requiring unique IDs.

A missing ID is also a problem for a primary key. Before the rule can be enforced, existing records must be corrected so each has an ID and no two IDs match.

> **Finch:** "So first we fix the records, and then the registry can stop the same problem from happening again?"
>
> **Mara:** "Exactly. The rule protects the table once its existing records follow it."

### Checkpoint: Repair duplicate IDs

There is no separate practice activity. Finch displays two device records with the same ID:

| Device ID | Device name | Room | Serial number |
|---|---|---|---|
| `DEV-06` | Ventilation Sensor | Workshop | `VS-17` |
| `DEV-06` | Coolant Monitor | Storage | `CM-22` |

A recovered equipment list provides the missing evidence:

- Serial `VS-17`: Ventilation Sensor, assigned ID `DEV-06`
- Serial `CM-22`: Coolant Monitor, assigned ID `DEV-07`

The player completes these steps:

1. Identify `DEV-06` as the duplicated ID.
2. Choose **Device ID** as the intended primary key from Device ID, Device name, and Room.
3. Use the equipment list and serial numbers to correct the Coolant Monitor's ID to `DEV-07`, leaving the Ventilation Sensor's ID unchanged.
4. Run a validation check, then enable the primary-key rule once the records pass.

The validation check confirms that every device ID is present and unique. If an ID is missing or duplicated, the rule cannot be enabled yet; the player can correct the records and check again.

### Feedback and hints

The player receives **Correct** or **Try again** feedback for submitted selections without the game automatically revealing answers. Correct selections remain in place while the player revises the others. Validation explains whether IDs are missing or duplicated. Hints and retries are unlimited and penalty-free.

Finch offers three hint levels:

1. "Look for a value that appears more than once, and compare the records with the equipment list."
2. "The serial numbers connect each device record to its equipment-list entry. A primary key needs a different, non-missing value for each record."
3. "Compare the Coolant Monitor's serial number with its entry in the equipment list. Check the records before turning on the rule."

### Completion

The registry accepts the primary-key rule after validation succeeds.

> **Finch:** "Two different devices, two different IDs. Much less confusing."
>
> **Mara:** "Now that the records can be identified, we can start asking the registry useful questions."

This leads into Lesson 3's SQL queries. Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 3: Finding information with SQL

### Opening

With the duplicate IDs corrected, Finch wants to know which devices need attention first.

> **Finch:** "We have a registry full of devices, but I'd rather not check every single record by hand."
>
> **Mara:** "Then ask the database for the information you need. That's what a query is for."

### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All queries and records are simulated within the game.

#### Page 1: What is SQL?

**SQL** stands for **Structured Query Language**. It is a language used to work with information in a database. A **query** is a request for information; it can tell the database which fields and records to return.

The player will use the simulated `devices` table. Its field names use lowercase letters and underscores, such as `device_id` and `device_name`.

#### Page 2: Choose fields with `SELECT` and a table with `FROM`

```sql
SELECT device_id, device_name
FROM devices;
```

- `SELECT` names the fields to include in the result.
- `FROM` names the table to read.
- A comma separates selected fields, and the semicolon marks the end of the statement.

This query returns each device's ID and name without changing the table.

#### Page 3: Filter records with `WHERE`

```sql
SELECT device_id, device_name, room
FROM devices
WHERE room = 'Workshop';
```

`WHERE` keeps only records that meet a condition. Here, `room = 'Workshop'` selects devices in the Workshop. Single quotes surround the text value `'Workshop'`.

The `online` field uses a true/false value. For example, `WHERE online = FALSE` selects offline devices. `FALSE` is a true/false value, not text, so it is not surrounded by quotes.

#### Page 4: Sort results with `ORDER BY`

```sql
SELECT device_id, device_name, priority
FROM devices
ORDER BY priority ASC;
```

`ORDER BY` sorts the returned records. `ASC` means ascending: smaller numbers appear first. `DESC` means descending: larger numbers appear first.

In this registry, a **smaller priority number means more urgent attention**. A priority of `1` appears before `2` when sorted ascending.

#### Page 5: Put the parts together

A query can select fields, filter records, and sort the result:

```sql
SELECT device_id, device_name, priority
FROM devices
WHERE room = 'Workshop'
ORDER BY priority ASC;
```

The clauses appear in this order: `SELECT`, `FROM`, `WHERE`, then `ORDER BY`. This example returns Workshop devices sorted from the smallest priority number to the largest. It does not change any records.

### Checkpoint: Find the offline devices

There is no separate practice activity. Finch displays these registry records:

| device_id | device_name | room | online | priority |
|---|---|---|---|---|
| `DEV-04` | Air Filter | Workshop | TRUE | 2 |
| `DEV-05` | Water Sensor | Storage | FALSE | 2 |
| `DEV-06` | Ventilation Sensor | Workshop | FALSE | 3 |
| `DEV-07` | Coolant Monitor | Storage | TRUE | 1 |
| `DEV-08` | Habitat Ventilation Controller | Habitat 02 | FALSE | 1 |

**Player task:** Write and run a query that shows each offline device's ID, name, room, and priority, with the most urgent devices first.

**Expected query:**

```sql
SELECT device_id, device_name, room, priority
FROM devices
WHERE online = FALSE
ORDER BY priority ASC;
```

**Expected result:** `DEV-08`, `DEV-05`, and `DEV-06`, in that order. The player can use equivalent valid query formatting; capitalization and spacing do not have to match the example exactly.

### Feedback and hints

The player enters their query and presses **Run**. If the query has a syntax error, Finch identifies the problem without giving the full answer. If it runs but selects the wrong fields, includes the wrong devices, or sorts them incorrectly, feedback identifies what still needs attention. The query stays editable. Hints and retries are unlimited and penalty-free.

Finch offers three hint levels:

1. "We need only the offline devices, and the most urgent ones should appear first."
2. "Choose the four requested fields, filter using the online field, and sort using priority."
3. "An offline device has `online = FALSE`. A smaller priority number is more urgent, so think about which sorting direction puts smaller numbers first."

### Completion

The report shows the offline devices, including the Habitat Ventilation Controller in **Habitat 02**.

> **Finch:** "Habitat 02? I don't see that location on the facility map."
>
> **Mara:** "Old records can contain outdated locations. Focus on the devices we can reach."
>
> **Finch:** "Right. Still, I'll keep the record."

The discovery remains unexplained. The player moves on to Lesson 4, where they learn how to change records safely. Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 4: Adding and changing records

### Opening

Finch compares the registry with recovered maintenance notes and finds that some information needs correcting.

> **Finch:** "The report helped, but some of these records don't match the maintenance notes. Can we fix them without making things worse?"
>
> **Mara:** "Yes. Review each change before applying it, and make sure you know which record you're changing."

### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All records and changes are simulated within the game.

#### Page 1: Changing a database

In Lesson 3, `SELECT` retrieved information without changing it. SQL can also change records:

- `INSERT` adds a new record.
- `UPDATE` changes an existing record.
- `DELETE` removes a record.

Changes deserve care. The player will preview each checkpoint change before deciding whether to apply it.

#### Page 2: Add a record with `INSERT`

```sql
INSERT INTO devices (device_id, device_name, room, online, priority, status)
VALUES ('DEV-99', 'Test Sensor', 'Workshop', FALSE, 2, 'Active');
```

`INSERT INTO` names the table and fields. `VALUES` supplies a value for each field in the same order. Text values use single quotes; `FALSE` is a true/false value and `2` is a number.

This is an example, not a checkpoint instruction. The Device ID must be unique because of the primary-key rule established in Lesson 2.

#### Page 3: Change a record with `UPDATE`

```sql
UPDATE devices
SET room = 'Workshop'
WHERE device_id = 'DEV-99';
```

`UPDATE` names the table. `SET` identifies the field and new value. `WHERE` identifies which record to change.

Without a `WHERE` condition, an update can change **every record** in the table. Check the condition and preview the affected record before applying the change.

#### Page 4: Remove a record with `DELETE`

```sql
DELETE FROM devices
WHERE device_id = 'DEV-99';
```

`DELETE FROM` names the table, and `WHERE` identifies the record to remove. Without a `WHERE` condition, the command can remove **every record** in the table.

Deleting is different from archiving: an archived record stays in the database with a status showing it is archived. Delete only when the task clearly calls for removal.

#### Page 5: Preview before applying

For this simulated lesson, pressing **Preview** shows the records a statement would add, change, or remove. The player can cancel the preview and edit their statement. Selecting **Apply** confirms the change; the player can undo an applied checkpoint change if they need to correct it.

> **Finch:** "A chance to look before we change anything? I approve of this system."

### Checkpoint: Correct the registry

There is no separate practice activity. Finch shows the player a few relevant records. The `status` field describes whether a record is Active or Archived; it is separate from the device's true/false `online` field.

| device_id | device_name | room | online | priority | status |
|---|---|---|---|---|---|
| `DEV-07` | Coolant Monitor | Storage | TRUE | 1 | Active |
| `DEV-10` | Temporary Test Entry | Workshop | FALSE | 3 | Active |
| `DEV-11` | Habitat Pressure Sensor | Habitat 02 | FALSE | 2 | Archived |

The rest of the registry remains in place. The notes provide these instructions:

1. **Add:** Device `DEV-09` is a Pump Sensor in the Workshop. It is offline, has priority `2`, and its record is Active. Its ID is not already in use.
2. **Update:** The Coolant Monitor (`DEV-07`) was moved from Storage to the Workshop. Correct its room.
3. **Delete:** `DEV-10` is a temporary test entry, not a real device record. Remove it.
4. **Preserve:** Leave the archived `DEV-11` record unchanged. Its Archived status was deliberately set in an earlier record, but the notes do not explain why.

The player writes each SQL statement, previews the affected record, and applies it when satisfied. They can cancel a preview or undo an applied checkpoint change. Successful completion requires all three requested changes and the archived record to remain intact.

**Expected statements:**

```sql
INSERT INTO devices (device_id, device_name, room, online, priority, status)
VALUES ('DEV-09', 'Pump Sensor', 'Workshop', FALSE, 2, 'Active');

UPDATE devices
SET room = 'Workshop'
WHERE device_id = 'DEV-07';

DELETE FROM devices
WHERE device_id = 'DEV-10';
```

Equivalent valid statements and formatting can be accepted when they produce the requested changes without altering other records.

### Feedback and hints

A syntax error identifies the part of the statement that needs attention without providing the full answer. The preview shows what would change before anything is applied. If a statement targets the wrong records or produces the wrong values, Finch explains what needs review. The player's statement remains editable. Hints and retries are unlimited and penalty-free.

Finch offers three hint levels:

1. "Use the maintenance notes to decide which record to add, change, or remove. Leave the archived record alone."
2. "Use `INSERT` for the new device, `UPDATE` for the room correction, and `DELETE` for the temporary entry. Check the preview each time."
3. "For changes to existing records, use the device ID in a `WHERE` condition so you target the right record. For the new record, match the values to the listed fields in order."

### Completion

The registry reflects the maintenance notes, while the archived Habitat record remains preserved.

> **Finch:** "The corrections are in place. And that Habitat record is still here, just marked Archived."
>
> **Mara:** "Archived records aren't always useful. Leave it for now."
>
> **Finch:** "All right. I'd still like to know why someone kept it."

This leads into Lesson 5, where the player learns how device, room, and maintenance records relate to one another. Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 5: Relationships and joins

### Opening

The corrected registry contains device records, but Finch also finds separate lists of rooms and maintenance events.

> **Finch:** "The devices are in one list, the rooms are in another, and the maintenance notes have their own list. I'm beginning to understand why this took so long."
>
> **Mara:** "The lists are connected. Learn how to follow those connections, and you can bring the information together."

### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All records and queries are simulated within the game.

#### Page 1: Why use separate tables?

A database can keep different kinds of information in separate tables. The registry uses:

- **`devices`:** Information about each device.
- **`rooms`:** Information about each room.
- **`maintenance_events`:** Records of maintenance performed on devices.

Separate tables help organize related information without repeating every room detail in every device record.

For this lesson, the registry has been organized so each device's existing room is represented by a `room_id`. The room names are still preserved in the `rooms` table. The player does not need to perform this reorganization.

#### Page 2: Primary and foreign keys

In Lesson 2, the player learned that a **primary key** identifies each record in a table. A **foreign key** is a field that connects a record to a record in another table.

For example:

- `rooms.room_id` identifies a room in the `rooms` table.
- `devices.room_id` refers to that room's ID.
- `devices.device_id` identifies a device in the `devices` table.
- `maintenance_events.device_id` refers to the device associated with an event.

The notation `devices.room_id` means the `room_id` field in the `devices` table. A foreign key helps the database keep relationships valid: a device's room ID should refer to a room that exists.

#### Page 3: Joining devices and rooms

A **join** combines related information from tables in a query result. It does not merge or change the stored tables.

```sql
SELECT devices.device_name, rooms.room_name
FROM devices
JOIN rooms ON devices.room_id = rooms.room_id;
```

- `JOIN rooms` adds the rooms table to the query.
- `ON` explains how the records match.
- `devices.room_id = rooms.room_id` matches each device's room ID with the corresponding room record.

The result shows device names alongside room names. This is an **inner join**: only records with matching values in both tables appear.

#### Page 4: Adding maintenance events

A query can join another table by adding another `JOIN` and `ON` condition:

```sql
SELECT devices.device_id, maintenance_events.event_description
FROM devices
JOIN rooms ON devices.room_id = rooms.room_id
JOIN maintenance_events ON devices.device_id = maintenance_events.device_id;
```

The first join connects devices to rooms. The second connects devices to their maintenance events. A device with several matching events appears once for each event. A device with no matching event does not appear in this inner-join result.

This lesson shows **matching events**. It does not ask the player to find the latest event.

#### Page 5: Choosing fields from joined tables

After joining tables, `SELECT` can include fields from any of them. Use the table name and a period before each field, such as `devices.device_name` or `rooms.room_name`, to make it clear where the field comes from.

> **Finch:** "So the tables stay separate, but the report can still show their information together. That's much tidier than the pile of notes I found."

### Checkpoint: Build a maintenance report

There is no separate practice activity. The registry shows these records:

**`rooms`**

| room_id | room_name |
|---|---|
| `RM-01` | Workshop |
| `RM-02` | Storage |
| `RM-03` | Habitat 02 |

**`devices`**

| device_id | device_name | room_id |
|---|---|---|
| `DEV-07` | Coolant Monitor | `RM-01` |
| `DEV-08` | Habitat Ventilation Controller | `RM-03` |
| `DEV-09` | Pump Sensor | `RM-01` |
| `DEV-11` | Habitat Pressure Sensor | `RM-03` |

The Coolant Monitor's room reflects the correction from Lesson 4. The archived Habitat Pressure Sensor record is still preserved.

**`maintenance_events`**

| event_id | device_id | event_description |
|---|---|---|
| `EVT-01` | `DEV-07` | Coolant level checked |
| `EVT-02` | `DEV-08` | Ventilation filter inspected |
| `EVT-03` | `DEV-08` | Airflow sensor tested |
| `EVT-04` | `DEV-11` | Pressure sensor calibrated |

**Player tasks:**

1. Identify `devices.room_id` as the field that connects a device to a room, and `maintenance_events.device_id` as the field that connects an event to a device.
2. Write and run a query joining all three tables. Show each matching device's ID, name, room name, and event description.

**Expected query:**

```sql
SELECT devices.device_id, devices.device_name, rooms.room_name,
       maintenance_events.event_description
FROM devices
JOIN rooms ON devices.room_id = rooms.room_id
JOIN maintenance_events ON devices.device_id = maintenance_events.device_id;
```

**Expected report:**

| Device ID | Device name | Room | Maintenance event |
|---|---|---|---|
| `DEV-07` | Coolant Monitor | Workshop | Coolant level checked |
| `DEV-08` | Habitat Ventilation Controller | Habitat 02 | Ventilation filter inspected |
| `DEV-08` | Habitat Ventilation Controller | Habitat 02 | Airflow sensor tested |
| `DEV-11` | Habitat Pressure Sensor | Habitat 02 | Pressure sensor calibrated |

`DEV-09` does not appear because it has no matching maintenance event in these records. The result order is not required; equivalent valid queries and formatting can be accepted.

### Feedback and hints

Correct field selections are marked **Correct**; incorrect selections are marked **Try again**. When the player runs the query, syntax feedback identifies what needs attention without providing the full answer. If the result is incomplete or contains incorrect matches, feedback points the player toward the fields or join conditions to review. The query stays editable. Hints and retries are unlimited and penalty-free.

Finch offers three hint levels:

1. "Start with devices and rooms, then connect the maintenance events to their devices."
2. "Match the room ID fields for the first join. For the second, look for the field shared by devices and maintenance events."
3. "Each `JOIN` needs an `ON` condition. Select the requested fields from all three tables, and remember that a device can have more than one matching event."

### Completion

The report shows several maintenance events associated with Habitat 02, including the archived pressure sensor's event.

> **Finch:** "There are several maintenance records for Habitat 02. Someone was checking equipment there."
>
> **Mara:** "It was an unused training area. Those must be old records."
>
> **Finch:** "Maybe. I'll keep them with the rest of the report."

The records raise questions but do not yet establish what happened in Habitat 02. The player moves on to Lesson 6 to verify the registry's integrity. Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 6: Data integrity and verification

### Opening

Finch's maintenance report is complete, but Mara wants to make sure the recovered records can be trusted before other systems use them.

> **Mara:** "A report is only as useful as the information behind it. Before we rely on this registry, we need to check it."
>
> **Finch:** "Please tell me there's a way to do that without reading every record out loud."
>
> **Mara:** "There is. We can test the rules and investigate anything that fails."

### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All records, checks, and changes are simulated within the game.

#### Page 1: What is data integrity?

**Data integrity** means keeping information accurate and consistent according to the rules it is supposed to follow.

For the registry, useful checks include:

- Are required values present?
- Are device IDs unique?
- Do foreign keys point to records that exist?
- Do queries return the records and fields we expect?

A successful check gives evidence that a rule is being followed. It does not prove that every detail in the database is true.

#### Page 2: Required values

Some fields must contain a value. For example, a maintenance event needs a description so someone can tell what was done.

In this lesson, a missing value is shown as `NULL`. It means the value is absent or unknown; it is not the same as the text `'NULL'`.

If a required value is missing, find reliable information before filling it in. Don't guess just to make a check pass.

#### Page 3: Checking keys and relationships

A primary key must be present and unique. The device registry uses `device_id` to distinguish devices.

A foreign key connects records across tables. For example, `devices.room_id` should refer to a room that exists in `rooms`. A device pointing to a nonexistent room would have an invalid relationship.

The player can test these rules with isolated simulated attempts. The test does not change the actual registry.

#### Page 4: Checking query results

A query can run without an error and still return the wrong information. Compare its results against the task and the records:

- Are the requested fields present?
- Are the right records included?
- Do joined records match through the correct keys?
- Is any important information missing?

For example, a report showing a device and room is not complete if the requested maintenance description is missing.

#### Page 5: Correct, then check again

When a check finds a problem:

1. Identify what failed.
2. Look for evidence that tells you the correct value.
3. Preview and apply the correction.
4. Run the checks again.

> **Finch:** "So a failed check isn't the end of the world. It tells us where to look."
>
> **Mara:** "Exactly. Correcting a problem is part of verification."

### Checkpoint: Verify the recovered records

There is no separate practice activity. Finch adds a newly recovered maintenance event to the records under review. Its description is missing:

**`maintenance_events`**

| event_id | device_id | event_description |
|---|---|---|
| `EVT-05` | `DEV-09` | `NULL` |

From Lesson 4, `DEV-09` is the Pump Sensor in the Workshop. A recovered maintenance note says:

```text
Event: EVT-05
Device: DEV-09
Work completed: Pump sensor inspected
```

The verification screen checks:

1. **Required value:** Every maintenance event must have a non-missing description. This check initially fails for `EVT-05`.
2. **Duplicate prevention:** An isolated test tries to add another device with the existing ID `DEV-07`. The test passes if the duplicate is rejected; it does not add a record to the registry.
3. **Valid relationships:** An isolated test tries to assign a device to nonexistent room `RM-99`. The test passes if the invalid relationship is rejected; it does not change the registry.
4. **Query result:** After the correction, a report for `EVT-05` must show its device ID, device name, room name, and maintenance description.

**Player tasks:**

1. Run the checks and identify the missing description.
2. Use the recovered note to write an `UPDATE` statement for `EVT-05`. Preview the change and apply it.
3. Run the checks again, including the isolated duplicate and relationship tests.
4. Write and run the joined report for `EVT-05`, then verify its result.

**Expected correction:**

```sql
UPDATE maintenance_events
SET event_description = 'Pump sensor inspected'
WHERE event_id = 'EVT-05';
```

**Expected report query:**

```sql
SELECT devices.device_id, devices.device_name, rooms.room_name,
       maintenance_events.event_description
FROM devices
JOIN rooms ON devices.room_id = rooms.room_id
JOIN maintenance_events ON devices.device_id = maintenance_events.device_id
WHERE maintenance_events.event_id = 'EVT-05';
```

**Expected result:** `DEV-09` | Pump Sensor | Workshop | Pump sensor inspected.

The recovered event is being checked before its description requirement is enforced. Once the value is corrected, the checkpoint can confirm that the required-value rule is in place and would reject another missing description. Equivalent valid statements and formatting can be accepted when they produce the requested result without changing other records.

### Feedback and hints

Each check reports **Pass** or **Needs attention** and identifies the rule involved. A preview shows what the correction would change before the player applies it; the player can cancel or undo the checkpoint change. Query feedback identifies syntax errors or discrepancies without providing the complete answer. The player's statements remain editable. Hints and retries are unlimited and penalty-free.

Finch offers three hint levels:

1. "Start with the check that needs attention, then compare that record with the recovered note."
2. "The maintenance event's description is missing. Use its event ID to target the correction, then rerun the checks."
3. "A joined report needs the device-to-room and device-to-event connections from Lesson 5. Filter by the event ID to review just the recovered event."

### Completion

The corrected records pass the checks, and the recovered registry section becomes available to Finch's auxiliary monitor.

> **Finch:** "The checks passed, and the monitor can use the recovered records now."
>
> **Mara:** "Good. Keep the report ready. There may be more of the registry to restore."
>
> **Finch:** "I'll keep the Habitat records, too. They passed the checks, even if we still don't know their whole story."

The player moves toward the boss recovery operation. The checks verify this recovered section; they do not finish the larger registry restoration or resolve the Habitat mystery. Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.
