# Chapter 2 Design

**Status:** Redesign from scratch. The [previous Chapter 2 draft](../Previous%20Drafts/Chapter-2-Previous-Draft-2026-11-20.md) is superseded and preserved for reference. Its lessons, story, and boss are not current requirements.

Chapter 2 focuses on programming fundamentals and is being developed together. Database lessons are planned for Chapter 3; the later chapter order will be rearranged before work begins on Chapter 3. Remaining topics, lesson depth, story, and boss details remain open for discussion. The reference images are guides, not text to copy.

The previously agreed Chapter 2 reward is the Design Agent, with an upgraded version for a perfect boss finish. Its details are in [Section 8 of the master design](../The-Last-Safehouse-Design.md#8-software-development-agents-and-chapter-rewards).

## Opening scene

The next morning, the player sits down with their in-game laptop and the thumb drive Finch gave them.

> **Mara:** "Yesterday you brought a computer back to life. Today, we'll start looking at how we tell computers what to do."
>
> **Finch:** "And how to do it without upsetting them. They can be surprisingly sensitive."
>
> **Mara:** "First, let's get your Project Planning Agent installed."

The player plugs the drive into the in-game laptop and follows a simple installation prompt. Once it is installed, the computer opens the first lesson. Mara remains available for help, and Finch can occasionally add commentary. The simulated installation does not affect the player's real computer.

## Lesson 1: How computers represent information

**Pacing:** Keep the lesson and checkpoint short and quick, while teaching and demonstrating everything needed to complete the conversion.

The laptop teaches that a bit can be `0` or `1` and that eight bits make a byte. It introduces decimal, binary, and hexadecimal as different ways to write numbers, with a brief introduction to octal. It also explains that systems such as Unicode let computers represent text.

**Practice:** The player opens the simulated Calculator and follows guidance to select **Programmer** mode from its menu. They enter numbers and compare their binary, decimal, hexadecimal, and octal representations. These are number systems, not programming languages.

The lesson shows an eight-bit reference chart and explains that a `1` contributes its position's value while a `0` contributes nothing. For example:

| Position value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|
| Example binary | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |

The example's decimal value is 32 + 4 + 1 = **37**. Present the chart as readable text, not color alone.

**Checkpoint — Binary conversions:** The Workshop's monitoring console detects three devices, but an old diagnostic report displays their numeric identifiers in binary. Mara asks the player to convert the identifiers to decimal so they can be matched to the Workshop's inventory.

The player converts three different eight-digit binary numbers to decimal by adding the position values under their `1` digits. Each correct answer identifies a device in the inventory, such as a temperature sensor, a door sensor, or a backup battery monitor. As each device is identified, its console entry changes from **Unidentified** to its name.

The reference chart remains available throughout; all three answers must be correct to complete the checkpoint. Teach and demonstrate the method before testing it. Mara remains available for help, and the three hint levels and retries are unlimited and penalty-free.

## Lesson 2: Types of computer languages

**Pacing:** Keep the lesson and checkpoint short and quick, with enough explanation and practice to choose the appropriate language types.

The laptop introduces what different languages do:

- **Programming and scripting languages** give a computer instructions, such as calculating a result or automating a task.
- **Markup languages**, such as HTML, describe the structure of content.
- **Query languages**, such as SQL, help work with information in a database.
- **Assembly language** uses instructions closely related to a processor's machine instructions.

The lesson also shows two ways programs can be run: a **compiler** translates code, while an **interpreter** runs instructions through another program. Some languages and tools use a combination of approaches.

**Practice:** The player explores interactive examples and matches each kind of language to what it does.

**Checkpoint — Monitoring restoration plan:** Now that the devices are identified, Mara and Finch plan how to restore their monitoring display. Recovered files include instructions for processing sensor readings, a page describing the display's layout, stored device information to retrieve, and a low-level hardware diagnostic.

The player chooses an appropriate kind of language for each task. As the player selects the tools, they appear in a simple restoration plan:

| Needed result | Appropriate tool |
|---|---|
| Present the monitoring page | Markup language |
| Retrieve device records | Query language |
| Process current readings | Programming or scripting language |
| Inspect processor-level behavior | Assembly language |

The player is choosing tools, not creating the page, database query, script, or diagnostic. This prepares them for later work on the monitoring script. Mara is available for help, and the three hint levels and retries remain unlimited and penalty-free.

## Cutscene: Before Lesson 3

Finch panics because he cannot tell whether the Workshop's backup battery is charging. The player begins learning the skills needed to prepare a battery readout for him.

## Lesson 3: Data, variables, and the terminal

**Depth:** Teach these foundations thoroughly through reading, interactive examples, and guided practice. Divide the material into manageable sections rather than omitting important concepts for brevity.

1. **The terminal:** Explain that a terminal is a text-based window, a shell accepts commands, and Python is a programming language. The player opens an in-game simulated terminal and practices entering Python in an interactive Python prompt. The simulation does not run code on the player's real computer.
2. **Data types:** Introduce characters and strings (text), integers (whole numbers), floating-point numbers (which can represent decimal measurements), and Boolean values (`True` and `False`). Show that text such as `"12"` and the number `12` are different types and may behave differently. In Python, a single character is also a string.
3. **Variables:** Explain that a variable is a name referring to a value. Show assignment, using a value, and assigning a new value. The player changes a simulated room temperature and watches the result update.
4. **Constants:** Explain why some values are intended to remain fixed and how that differs from a variable. In Python, uppercase names are a convention for values intended as constants, not a guarantee that they cannot be changed. Other languages can enforce different rules.
5. **Putting concepts together:** Walk through a small example step by step, following how values are read, a variable is updated, and a constant is used. Connect the concepts to fictional device information that may later be stored in a database.

**Practice:** Use interactive displays and guided Python prompt exercises to identify data types, assign and change variables, distinguish a constant by its intended use, and predict what a short sequence will display. The player completes code with missing pieces using a provided drag-and-drop selection; provide a keyboard-accessible alternative.

For the guided practice, a fictional door sensor starts at **19 degrees**, is **online**, and then rises by **1 degree**:

```python
DEVICE = ____
temperature = ____
online = ____
temperature = temperature + ____
print(____)
```

The available pieces are `"Door sensor"`, `19`, `True`, `1`, and `temperature`. After the player places them and runs the example, it displays **20**. The laptop explains each line, including why `DEVICE` is intended as a constant and how changing `temperature` works.

**Checkpoint — Workshop backup-power readout:** Finch asks the player to prepare a fictional readout. The Workshop's backup battery starts at **45%**, charging is **on**, and the latest reading shows a **15-point increase**. The simulated terminal presents code with missing elements for the player to type:

```python
LOCATION = ____
battery = ____
charging = ____
battery = battery + ____

print("Location:", LOCATION)
print("Battery:", ____, "%")
print("Charging:", charging)
```

Running a correct solution displays the Workshop location, a **60%** battery reading, and `True` for charging. The readout is fictional and does not change a battery. The tasks also check identifying data types in the record and recognizing a value intended to remain constant. Teach and practice the required syntax first, including addition and displaying values; accept different correct answers where possible, provide clear feedback, and preserve the player's work. Mara is available for help; three levels of hints and retries remain unlimited and penalty-free. No code runs on the player's real computer.

## Lesson 4: Program logic and decisions

**Depth:** Teach these foundations thoroughly through reading, examples, and guided practice. Divide the material into manageable sections rather than omitting important concepts for brevity.

Teach how Python follows instructions in order and makes decisions using `if` and `else`, building on the variables, values, and constants from Lesson 3. Before the checkpoint, explain and practice comparisons such as `<` and `<=`, how indentation groups a line with a condition, when each branch runs, and why a named low-battery threshold is useful. Show that `<=` includes the threshold itself. Python uppercase constant names are a convention, not enforced.

**Checkpoint — Backup-battery warning:** Finch asks the player to add a warning to the existing Workshop battery readout so he does not have to watch the percentage manually. The player keeps their Lesson 3 code and adds a `LOW_BATTERY_LIMIT` constant of `20`, an `if` comparison, a low-battery warning, and an `else` message for a normal reading. The existing charging value remains in the readout but does not need its own condition.

The simulation tests the player's warning against separate current readings, after the Lesson 3 update has produced its readout. A **60%** test reading should produce a normal-status message, and a **15%** reading should produce a low-battery warning. Validate the appropriate behavior and meaning rather than requiring exact message wording. The simulation also verifies that a reading of **20%** triggers the warning. Preserve the player's work, give clear feedback, and provide three levels of hints and unlimited penalty-free retries. The exercise remains fictional and runs only in the game's simulation.

**Cutscene — After the checkpoint:** Finch sighs in relief and says:

> **Finch:** "Excellent. Now I'll only be notified when there's actually a problem. My anxiety appreciates the efficiency."

## Cutscene: Before Lesson 5

After Finch's relieved response, Mara tells the player that is enough for the day and to get some rest for a busy day tomorrow.

During the night, strange power surges wake the player, but they fall back asleep. In the morning, the player picks up their laptop and asks Mara and Finch whether they noticed the surges. Finch seems nervous, says of course he noticed them, and asks the player to help find out what happened. The player returns to the laptop and begins Lesson 5.

## Lesson 5: Lists, functions, and loops

**Depth:** Teach each new concept thoroughly in manageable sections before combining them. Explain and practice how a list holds multiple values, how a function receives an input and returns a result, and how a `for` loop visits each item in a list. Revisit the `if`/`else` decision, threshold constant, variables, and strings from earlier lessons. Use guided examples before asking the player to combine the concepts.

**Interactive practice:** After each explanation, give the player a small, guided activity before moving on:

1. **Lists:** Arrange a few fictional battery readings into a list and identify individual values.
2. **Functions:** Follow a reading into a function and identify the status it returns for a low or normal reading.
3. **Loops:** Step through a loop one reading at a time and see which list item is being processed.
4. **Putting it together:** Complete a short guided example that passes readings from a list through a function and displays their statuses.

Explain the relevant Python syntax and show worked examples before each activity. Provide a keyboard-accessible alternative to drag-and-drop, clear feedback, three hint levels, and unlimited penalty-free retries. The examples run only in the game's simulation.

**Checkpoint — Overnight battery report:** The Workshop's backup power fluctuated overnight. Finch saved several battery readings but has been checking them one at a time. He asks the player to turn the battery-warning code into a reusable program that reviews the whole list.

> **Finch:** "I have last night's battery readings. I've checked the first one twelve times, but I suspect that isn't what programmers mean by efficiency."

The player stores the readings in a list, moves the low-battery decision into a function, and uses a loop to process each reading. The report displays each reading and an appropriate normal or warning status. One possible solution is:

```python
LOW_BATTERY_LIMIT = 20

battery_readings = [60, 15, 42, 18, 55]


def get_battery_status(battery):
    if battery <= LOW_BATTERY_LIMIT:
        return "WARNING: Backup battery low"
    else:
        return "Backup battery level is okay"


for battery in battery_readings:
    status = get_battery_status(battery)
    print("Battery:", battery, "% -", status)
```

The expected report marks **60%, 42%, and 55%** as okay and **15% and 18%** as low. Both readings below the threshold and readings above it exercise the decision. Explain how the list, function, loop, constant, variables, and strings each contribute. A value at the threshold also counts as low because the comparison uses `<=`.

Accept equivalent correct solutions and status messages that communicate the right result rather than requiring exact wording. Preserve the player's work, give clear feedback, and provide three levels of hints and unlimited penalty-free retries. The code and report remain inside the game's simulation. Do not require dictionaries, nested lists, or multiple functions for this checkpoint.

**Story result:** After the report succeeds, the console saves it as the **Workshop Overnight Battery Report**. Finch sees that the battery reached a low level twice, rather than having only one isolated dip.

> **Finch:** "Two low readings. Thank you for organizing my concerns so efficiently."
>
> **Mara:** "And now we know where to investigate next. A good program doesn't just produce answers—it helps you decide what needs attention."

This may lead into investigating why the readings were low, without requiring another mystery clue in the checkpoint.

## Lesson 6: Debugging and testing

**Working direction — Finding and fixing mistakes:** Finch has a copy of the battery-report program that is not working. Keep the lesson focused and manageable, with examples and guided practice before the checkpoint.

1. **Run the program:** Explain that an error message is a clue, not a failure, and show where Python reports a problem.
2. **Find the mistake:** Practice spotting a misspelled variable name or a missing colon.
3. **Fix and rerun:** Let the player correct a small example and see it work.
4. **Test the result:** Explain that a program can run without an error and still give the wrong answer. Practice checking a normal reading and a low reading.

**Checkpoint — Repair the battery report:** Finch gives the player a broken copy of the overnight report. The player reads the error, fixes the mistake, and tests the report with readings including **60%, 20%, and 15%** to check the normal result, threshold, and warning. Exact activity and checkpoint details remain open for discussion.

Mara is available for help, with three levels of hints and unlimited penalty-free retries. The exercise remains inside the simulated computer.

## Cutscene: After Lesson 6

The Workshop lights flicker, then the main power shuts down. Backup lights come on as the facility switches to backup power, leading into the boss.

> **Finch:** "Good news: the essential systems are protected. Bad news: we have approximately twenty-five minutes before this console goes back to sleep."
>
> **Mara:** "That's enough time. Work carefully, and don't skip the tests. A fast repair isn't useful if it gives us the wrong readings."

The countdown begins after the cutscene and boss instructions, not during Finch's dialogue. The initial 25-minute limit can be adjusted after playtesting.

## Chapter 2 boss: Working direction

After main power fails, the player repairs a program on Finch's simulated system to restore power and the auxiliary monitor.

**Binary puzzle and repair:** The program is significantly unfinished, but enough code remains to provide structure. `#` comments above each code section explain its purpose. The missing words appear with faint letters.

1. The player uses the eight-bit reference chart to convert a binary number to decimal.
2. The game automatically darkens the corresponding letter everywhere it appears in the missing words. One correct conversion unlocks all occurrences of that letter; the player does not need to learn a letter-to-number key.
3. When all the letters in a word are unlocked, the word becomes available to drag into a blank in the terminal. Provide a keyboard-accessible alternative.
4. Any unlocked word can be placed in any blank. The player uses the code, comments, and earlier lessons to work out where each word belongs, rather than being told its position.
5. The player presses **Run** to test the program. If a word is in the wrong space, the code does not work. The player can move pieces and try again; all words must be correctly placed for the repair to succeed.

The comments are part of the task, not optional boss hints. Mistakes and corrections do not forfeit the perfect bonus. Code and system interactions remain inside the game's simulation.

**Timer and rewards:** The initial limit is approximately 25 minutes, subject to playtesting, and starts after the opening cutscene and instructions. Give the player calm warnings at **15 minutes** and **5 minutes** remaining during the initial countdown. Explain before the countdown that letting time run out forfeits the perfect bonus.

If time runs out, Finch says he will shut down unnecessary Workshop lights to give the player more time. The player keeps their progress and has unlimited time to finish, with no second countdown. They forfeit the perfect bonus but can still complete the chapter and receive the standard agent. Accepting a boss hint or Mara's help also forfeits the bonus, but only after a warning and confirmation; cancelling preserves eligibility.

**Successful repair:** Once the program runs successfully, main power returns and the lights and systems come back on. The restored system displays:

```text
AUXILIARY MONITOR: ONLINE
CHARGING RELAY: DISCONNECTED
NON ESSENTIAL POWER LOADS: IDENTIFIED
LOCAL CONTROL: AVAILABLE
REMOTE ACCESS: DENIED
SAFEGUARD: ECHO-02
```

Finch uses the monitor to disconnect nonessential loads and restore local charging control. The battery stops falling, resolving the immediate danger. Mara and Finch then react to the Echo safeguard:

> **Mara:** "Echo locked the charging relay out of remote control. He wanted us to run out of power."
>
> **Finch:** "Possibly. Fortunately, you restored something he apparently didn't expect us to recover: local control."

**Reward cutscene:** Finch unlocks a small compartment beneath the restored monitor.

> **Finch:** "One more thing survived the outage. I believe you've earned it."

Inside is a thumb drive containing the Design Agent. Mara hands the drive to the player, who plugs it into their laptop and installs the agent. If the player earned the perfect boss bonus, the drive contains the upgraded Design Agent instead.

The exact program, missing words, binary values, timer pause behavior, and additional timer accessibility options remain to be designed together.
