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
