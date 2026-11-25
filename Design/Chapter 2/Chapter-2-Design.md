# Chapter 2 Design

**Status:** Working design with six lessons and a boss direction. The [previous Chapter 2 draft](../Previous%20Drafts/Chapter-2-Previous-Draft-2026-11-20.md) is preserved for historical reference.

Chapter 2 focuses on programming fundamentals. The lessons and boss remain working designs that can be refined during development. The reference images are guides, not text to copy.

The previously agreed Chapter 2 reward is the Design Agent, with an upgraded version for a perfect boss finish. Its details are in [Section 8 of the master design](../The-Last-Safehouse-Design.md#8-software-development-agents-and-chapter-rewards).

## Lesson navigation and progress

Present teaching material one manageable section at a time, with Next and Back buttons. Players can review earlier explanations during a lesson and its checkpoint without losing completed progress.

Save completed lesson activities automatically. If the player closes and returns during an unfinished lesson activity or checkpoint, that activity restarts from the last completed point. Within an activity, preserve the player's work while they receive feedback and retry. Lesson sticky notes continue to save automatically, and the boss follows its separate resume rules.

## Opening scene

The next morning, the player sits down with their in-game laptop and the thumb drive Finch gave them.

> **Mara:** "Yesterday you brought a computer back to life. Today, we'll start looking at how we tell computers what to do."
>
> **Finch:** "And how to do it without upsetting them. They can be surprisingly sensitive."
>
> **Mara:** "First, let's add your Project Planning Agent component to the project build."

The player plugs the drive into the in-game laptop and selects **Add component for current user**. The simulated installer does not request administrator approval, change system-wide settings, or affect the player's real computer:

```text
APPLICATION COMPONENT: PROJECT PLANNING AGENT
BUILD SLOT: 1 OF 7
INSTALL SCOPE: CURRENT USER
ADMINISTRATOR APPROVAL: NOT REQUIRED
REAL COMPUTER CHANGES: NONE
```

Adding the component updates the in-game project build and unlocks the first lesson. The Project Planning Agent is not launched or used as an in-game assistant. Once it is added, Mara remains available for help, Finch can occasionally add commentary, and the next lesson opens.

## Lesson 1: How computers represent information

**Pacing:** Keep the lesson and checkpoint short and quick, while teaching and demonstrating everything needed to complete the conversion.

The laptop teaches that a bit can be `0` or `1` and that eight bits make a byte. It briefly introduces four number systems, their digits, and where each can be used. The same value can be written in different systems:

| Number system | Digits used | Example value |
|---|---|---|
| Decimal (base 10) | 0-9 | `37` |
| Binary (base 2) | 0-1 | `00100101` |
| Octal (base 8) | 0-7 | `45` |
| Hexadecimal (base 16) | 0-9 and A-F | `25` |

These are different representations of the same value, not different programming languages. The laptop also explains that standards such as Unicode let computers represent text.

**Practice:** The player opens the simulated Calculator and follows guidance to select **Programmer** mode from its menu. They enter numbers and compare their binary, decimal, hexadecimal, and octal representations. These are number systems, not programming languages.

The lesson shows an eight-bit reference chart and explains that a `1` contributes its position's value while a `0` contributes nothing. For example:

| Position | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|
| Bit | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |
| Base | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Explain that each base entry is a power of two: for example, 2³ means multiplying three 2s together, giving 8, and 2⁰ equals 1. Each value doubles moving left. Add the values under the `1` bits; in this example, 32 + 4 + 1 = **37**. Present the chart as readable text, not color alone.

**Checkpoint — Binary conversions:** The Workshop's monitoring console detects three devices, but an old diagnostic report displays their numeric identifiers in binary. Mara asks the player to convert the identifiers to decimal so they can be matched to the Workshop's inventory.

The player converts three different eight-digit binary numbers to decimal by adding the position values under their `1` digits. Each correct answer identifies a device in the inventory, such as a temperature sensor, a door sensor, or a backup battery monitor. As each device is identified, its console entry changes from **Unidentified** to its name.

| Binary identifier | Decimal identifier | Device |
|---|---|---|
| `00001010` | 10 | Temperature sensor |
| `00010100` | 20 | Door sensor |
| `00111100` | 60 | Backup battery monitor |

These numbers identify devices; they are not temperature or battery readings.

The reference chart remains available throughout; all three answers must be correct to complete the checkpoint. Teach and demonstrate the method before testing it. Mara remains available for help, and the three hint levels and retries are unlimited and penalty-free.

**Checkpoint hints:** For each identifier: (1) remind the player that a `1` contributes its place value and a `0` contributes nothing; (2) point to the chart positions above that identifier's `1` digits; (3) show how to convert a different binary number. A wrong answer allows a retry without revealing the answer; a correct answer reveals the device name.

## Lesson 2: Types of computer languages

**Pacing:** Keep the lesson and checkpoint short and quick, with enough explanation and practice to choose the appropriate language types.

The laptop introduces what different languages do:

- **Programming and scripting languages** give a computer instructions, such as using Python to process a battery reading.
- **Markup languages**, such as HTML, describe the structure of content, such as headings on a monitoring page.
- **Query languages**, such as SQL, help work with information in a database, such as finding device records.
- **Assembly language** uses instructions closely related to a processor's machine instructions, such as in a low-level diagnostic.

The lesson also shows two ways programs can be run: a **compiler** translates code, while an **interpreter** runs instructions through another program. Some languages and tools use a combination of approaches.

**Practice:** The player matches four small examples to the language types. The laptop explains each match before the checkpoint.

**Checkpoint — Monitoring restoration plan:** Now that the devices are identified, Mara and Finch plan how to restore their monitoring display. Recovered files include instructions for processing sensor readings, a page describing the display's layout, stored device information to retrieve, and a low-level hardware diagnostic.

The player chooses an appropriate kind of language for each task. As the player selects the tools, they appear in a simple restoration plan:

| Needed result | Appropriate tool |
|---|---|
| Present the monitoring page | Markup language |
| Retrieve device records | Query language |
| Process current readings | Programming or scripting language |
| Inspect processor-level behavior | Assembly language |

The player is choosing tools, not creating the page, database query, script, or diagnostic. This prepares them for later work on the monitoring script. Mara is available for help, and the three hint levels and retries remain unlimited and penalty-free.

**Checkpoint hints:** (1) Remind the player that language types serve different purposes: structuring content, working with stored information, giving instructions, or working close to a processor; (2) point them to the task's goal and the lesson's language descriptions; (3) show a separate example, such as using HTML to organize an article's headings, without completing the restoration plan. Wrong choices can be corrected without penalty.

## Lesson 3: Data, variables, and the terminal

**Depth:** Teach these foundations thoroughly through reading, interactive examples, and guided practice. Divide the material into manageable sections rather than omitting important concepts for brevity.

### The terminal and Python

A terminal is a text-based window; a shell reads commands and responds; Python is a programming language. In the simulated terminal, entering `python` at the shell starts Python. The `>>>` prompt indicates Python is ready; the player does not type the prompt itself.

```text
>>> print("Hello, Workshop!")
Hello, Workshop!
```

`print` displays information, parentheses hold what is displayed, and quotation marks identify text. Demonstrate that `exit()` leaves Python and returns to the shell. These examples run only in the game.

### Data types

A data type describes what kind of value Python is working with:

- **Strings (`str`)** hold text such as `"Door sensor"` or `"19"`; even a single character such as `"A"` is a string in Python.
- **Integers (`int`)** are whole numbers, such as `19`, `0`, and `-5`.
- **Floating-point numbers (`float`)** can have a decimal part, such as `19.5`. Some decimal values are stored approximately.
- **Booleans (`bool`)** are `True` or `False`, written with capital letters.

Compare `"19"` (text) with `19` (a number): `19 + 1` produces `20`, while `"19" + 1` produces an error. Demonstrate `type(19)` to show how Python reports a value's type.

**Practice — Data types:** The player matches `"Door sensor"` to string, `19` to integer, `19.5` to floating-point number, and `True` to Boolean. After each match, the laptop explains why it fits. The player can correct mistakes, use three hints, and retry without penalty. Provide a keyboard-accessible alternative.

### Variables

A variable is a name referring to a value. In `temperature = 19`, Python assigns the value on the right to the name on the left. Here `=` means assignment, not a comparison, and the line alone displays nothing.

`print(temperature)` looks up the value and displays `19`. Compare it with `print("temperature")`, which displays the word `temperature`. Quotation marks identify text and are not displayed as part of it; matching single quotes can also be used. In `print("Temperature:", temperature)`, the comma separates the displayed pieces and the output is `Temperature: 19`.

In `temperature = temperature + 1`, Python reads the current value, adds `1`, and assigns the result back to the name. A subsequent `print(temperature)` displays `20`. Explain that variable names are case-sensitive, cannot contain spaces, and cannot begin with a number; descriptive names help make code readable.

**Practice — A changing reading:** The player drags pieces into the blanks:

```python
temperature = ____
print(____)
temperature = temperature + ____
print(____)
```

The tray contains `18`, `1`, and two `temperature` pieces. Running the example displays **18** and **19**. The laptop explains how the value changed and why each `print` displays it. Provide a keyboard-accessible alternative, helpful feedback, three hints, and unlimited penalty-free retries.

### Constants

A constant is a value intended to stay fixed while the program runs. Python's uppercase naming convention signals that intention; Python does not prevent reassignment.

```python
DEVICE = "Window sensor"
print(DEVICE)
```

Explain that `DEVICE` refers to the text and that `print` displays `Window sensor` without the quotation marks. Contrast its intended fixed use with a changing `temperature` reading.

**Practice — Constants:** Show `DEVICE = "Door sensor"` and `temperature = 19`. The player selects which name is intended to stay fixed and which value may change with new readings. Feedback explains that uppercase `DEVICE` signals an intended constant, but Python does not enforce it. Hints and retries remain penalty-free.

### Putting concepts together

Walk through the names, values, data types, quotation marks, parentheses, assignment, addition, and output in this example:

```python
DEVICE = "Window sensor"
temperature = 16
online = True

temperature = temperature + 2
print(DEVICE)
print(temperature)
print(online)
```

The output is `Window sensor`, `18`, and `True` on separate lines. Explain why `DEVICE` is intended as a constant, why `temperature` changes, and why `online` holds a Boolean.

**Practice — Door sensor:** A fictional door sensor starts at **19 degrees**, is **online**, and then rises by **1 degree**:

```python
DEVICE = ____
temperature = ____
online = ____
temperature = temperature + ____
print(____)
```

The available pieces are `"Door sensor"`, `19`, `True`, `1`, and `temperature`. After the player places them and runs the example, it displays **20**. The laptop explains each line, including why `DEVICE` is intended as a constant and how changing `temperature` works.

**Cutscene — Before the checkpoint:** Finch panics because he cannot tell whether the Workshop's backup battery is charging.

> **Finch:** "Wait—is the backup battery charging? I can't tell, and I would very much like to tell."
>
> **Mara:** "Calm down, Finch. Our new apprentice can use what they've learned to make a readout for you."

The battery checkpoint opens.

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

**Checkpoint hints:** Adapt the hint to the blank: (1) remind the player of the relevant concept, such as text, Boolean values, assignment, or addition; (2) point to the matching part of Finch's request and the code line involved; (3) show a different example, such as starting at `30`, adding `5`, and producing `35`. Feedback explains what needs attention without supplying the missing answer.

## Lesson 4: Program logic and decisions

**Depth:** Teach these foundations thoroughly through reading, examples, and guided practice. Divide the material into manageable sections rather than omitting important concepts for brevity.

### Instructions and comparisons

Python normally follows instructions from top to bottom. A comparison checks values and produces a Boolean result:

```python
temperature = 25
print(temperature < 30)
```

The output is `True` because 25 is less than 30. Explain that `<` means less than and `<=` means less than or equal to: `20 <= 20` is `True`, while `20 < 20` is `False`.

**Practice — Comparisons:** The player selects `True` or `False` for `18 < 20`, `20 < 20`, and `20 <= 20`. The respective answers are `True`, `False`, and `True`; do not show these answers before the player responds. After each answer, explain the result, especially that `<=` includes equality. Incorrect answers can be changed, with three hints and unlimited penalty-free retries.

### Decisions with `if` and `else`

An `if` statement runs its indented instructions when its condition is `True`; `else` provides instructions for when it is `False`:

```python
temperature = 25

if temperature > 30:
    print("Temperature is high")
else:
    print("Temperature is normal")
```

Explain `>` as greater than. With `25`, the comparison is `False`, so the output is `Temperature is normal`. With `35`, it is `True`, so the output is `Temperature is high`. The colon starts each section; indentation shows which instructions belong to it. Four spaces are the usual Python convention, and consistent indentation, spelling, and colons matter.

**Practice — `if` and `else`:** The player places `if` and `else` into the blanks:

```python
signal = 45

____ signal > 50:
    print("Signal high")
____:
    print("Signal normal")
```

The player predicts the message for `45`, then runs the example and sees `Signal normal`. They also try `65` and see `Signal high`. Feedback explains the condition and which branch ran. Provide keyboard access, three hints, and unlimited penalty-free retries.

### Applying a threshold

A threshold is a decision point. Demonstrate using a named constant with `<=` in a separate sensor example, including a reading equal to the threshold. Explain that uppercase constant names signal intent in Python but are not enforced. Teach the required syntax before the checkpoint.

**Practice — Thresholds:** The laptop first demonstrates:

```python
LOW_LEVEL = 10
water_level = 10
print(water_level <= LOW_LEVEL)
```

The output is `True` because the reading equals the limit. The player predicts the results for readings of `9`, `10`, and `11` before checking them. Feedback explains that `<=` includes the limit itself. Hints and retries are penalty-free.

**Checkpoint — Backup-battery warning:** Finch asks the player to add a warning to the existing Workshop battery readout so he does not have to watch the percentage manually. The player keeps their Lesson 3 code and completes the added warning by dragging pieces from a tray into blanks, with a keyboard-accessible alternative:

```python
LOW_BATTERY_LIMIT = ____

____ battery ____ LOW_BATTERY_LIMIT:
    print("Warning: low battery")
____:
    print("Battery level is fine")
```

The pieces include `20`, `if`, `<=`, and `else`. The existing charging value remains in the readout but does not need its own condition.

After the player places the pieces, Finch activates a visible **test bench**:

> **Finch:** “I’ve loaded three sample readings. This will run your completed warning logic against each one without changing your saved code.”

The test bench explains that it temporarily supplies the `battery` value for each run and does not modify the player’s program. The player selects **Run tests** and receives:

| Test reading | Expected result | Output |
|---:|---|---|
| `60%` | Normal status | The player’s normal message |
| `15%` | Warning | The player’s warning message |
| `20%` | Warning | The player’s warning message |

Each result receives a **Pass** or **Needs attention** label. The checkpoint validates whether the player’s messages communicate the correct status rather than requiring exact wording.

Feedback identifies the failed case without supplying the answer:

- **60% produces a warning:** “The program warns even when the battery is healthy. Check which branch runs when the condition is false.”
- **20% produces a normal status:** “Readings at or below the limit should warn. Check whether the comparison includes equality.”
- **15% produces a normal status:** “The low reading did not enter the warning branch. Compare the condition with the threshold.”
- **No output or an error:** Show the simulated error and point to the relevant line without correcting it.

The player may revise the code and rerun the tests without penalty. Passing all three completes the checkpoint.

After the tests pass, the Workshop’s ordinary readout still shows its current `60%` reading. The sample values are test inputs and do not change the backup battery. The checkpoint remains fictional and runs only inside the game's simulation.

**Checkpoint hints:** (1) Remind the player that `if` checks a condition and `else` runs when it is false; (2) point to the comparison with the named limit and remind them that the warning includes the limit itself; (3) show a separate sensor example using `<=` and explain its two branches. Feedback identifies which test reading did not produce the expected type of message without placing pieces for the player.

**Cutscene — After the checkpoint:** Finch sighs in relief and says:

> **Finch:** "Excellent. Now I'll only be notified when there's actually a problem. My anxiety appreciates the efficiency."

## Cutscene: Before Lesson 5

After Finch's relieved response, Mara dismisses the player for the day:

> **Mara:** "That's enough for today. Get some rest—we have a busy day ahead of us."

During the night, the lights flicker badly enough to wake the player; the power nearly goes out but stays on. The player falls back asleep. In the morning, they pick up their laptop and find Mara and Finch.

> **Player:** "Did either of you see the lights flickering last night?"
>
> **Finch:** *Nervously* "Of course I noticed! Could you help me find out what happened?"

The player returns to the laptop and begins Lesson 5.

## Lesson 5: Lists, functions, and loops

**Depth:** Teach each new concept thoroughly in manageable sections before combining them. Explain and practice how a list holds multiple values, how a function receives an input and returns a result, and how a `for` loop visits each item in a list. Revisit the `if`/`else` decision, threshold constant, variables, and strings from earlier lessons. Use guided examples before asking the player to combine the concepts.

### Lists

A list stores several values together under one name:

```python
battery_readings = [60, 15, 42]
print(battery_readings)
```

Square brackets mark the list, commas separate values, and the output is `[60, 15, 42]`. Each item has a position called an index. Python starts at **0**: `battery_readings[0]` is `60`, index `1` is `15`, and index `2` is `42`.

**Practice — Lists:** The player places `70`, `25`, and `40` in that order into `readings = [____, ____, ____]`, then identifies the values at indices `0` and `2`. Feedback explains that indexing starts at zero: the respective answers are `70` and `40`. Provide keyboard access, three hints, and unlimited penalty-free retries.

### Functions

A function is a named group of instructions a program can use more than once. It can receive information, work with it, and return a result:

```python
def add_one(reading):
    return reading + 1

result = add_one(18)
print(result)
```

Explain `def`, the function name, the parameter `reading`, the colon and indentation, and the `return` instruction. Calling `add_one(18)` supplies `18` as an argument; the function returns `19`, which is assigned to `result` and displayed. `return` gives a result back and ends the call; `print` displays information. A returned value is not displayed just because it was returned.

**Practice — Functions:** The player follows an input through this function and predicts the value of `result` before running it:

```python
def add_two(reading):
    return reading + 2

result = add_two(18)
print(result)
```

The output is `20`. Feedback explains that `18` is passed to the function, `return` sends `20` back, and `print` displays it. The player also sees a function return a normal or warning message using `if`/`else`. Three hints and unlimited penalty-free retries remain available.

### Loops

A loop repeats instructions. A `for` loop can visit each item in a list:

```python
battery_readings = [60, 15, 42]

for reading in battery_readings:
    print(reading)
```

Explain `for`, the current-item name `reading`, `in battery_readings`, the colon, and indentation. The loop prints `60`, `15`, and `42` on separate lines, then ends after all items are processed.

**Practice — Loops:** The player steps through a loop over `readings = [70, 25, 40]` that prints each `reading`. Highlight the current value and show output growing from `70` to `25` to `40`; explain that the loop ends after the final item. Provide keyboard controls, hints, and unlimited penalty-free retries.

### Putting the concepts together

The laptop demonstrates how a loop calls a function for each reading:

```python
LIMIT = 10
readings = [8, 12]

def describe_reading(reading):
    if reading <= LIMIT:
        return "At or below the limit"
    else:
        return "Above the limit"

for reading in readings:
    status = describe_reading(reading)
    print(reading, status)
```

Explain the named limit, the list, each function call and returned message, and the assignment to `status`. The output is `8 At or below the limit` and `12 Above the limit` on separate lines.

**Practice — Putting it together:** The player completes a short example with the pieces `values` and `add_one`:

```python
values = [3, 7]

def add_one(value):
    return value + 1

for value in ____:
    result = ____(value)
    print(result)
```

A correct run displays `4`, then `8`. Feedback follows each value through the loop, function call, return, and output. Provide a keyboard-accessible alternative, three hints, and unlimited penalty-free retries.

Explain relevant syntax and show worked examples before each activity. Provide a keyboard-accessible alternative to drag-and-drop, clear feedback, three hint levels, and unlimited penalty-free retries. The examples run only in the game's simulation.

**Checkpoint — Overnight battery report:** The Workshop's backup power fluctuated overnight. Finch saved several battery readings but has been checking them one at a time. He asks the player to turn the battery-warning code into a reusable program that reviews the whole list.

> **Finch:** "I have last night's battery readings. I've checked the first one twelve times, but I suspect that isn't what programmers mean by efficiency."

The player stores the readings in a list, moves the low-battery decision into a function, and uses a loop to process each reading. The report displays each reading and an appropriate normal or warning status. The player drags pieces into a partially written program, with a keyboard-accessible alternative:

```python
LOW_BATTERY_LIMIT = 20
battery_readings = [____]

____ get_battery_status(battery):
    ____ battery <= LOW_BATTERY_LIMIT:
        return "Warning: low battery"
    else:
        return "Battery level is okay"

____ battery in battery_readings:
    status = ____(battery)
    print("Battery:", battery, "% -", status)
```

The tray includes the five readings as one piece, plus `def`, `if`, `for`, and `get_battery_status`. One possible completed solution is:

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

**Checkpoint hints:** Focus on the list, function, decision, or loop the player is working on: (1) explain the relevant idea, such as a loop visiting each item; (2) point to the section that holds readings, checks a reading, or repeats the work; (3) show a different short example, such as a loop displaying a list, without filling in the report. Feedback identifies the part needing attention and lets the player move pieces and retry.

**Story result:** After the report succeeds, the console saves it as the **Workshop Overnight Battery Report**. Finch sees that the battery reached a low level twice, rather than having only one isolated dip.

> **Finch:** "Two low readings. Thank you for organizing my concerns so efficiently."
>
> **Mara:** "And now we know where to investigate next. A good program doesn't just produce answers—it helps you decide what needs attention."

This may lead into investigating why the readings were low, without requiring another mystery clue in the checkpoint.

## Lesson 6: Debugging and testing

**Finding and fixing mistakes:** Finch has a copy of the battery-report program that is not working. Keep the lesson focused and manageable, with examples and short practices before the checkpoint.

An error message is a clue, not a failure. Python reports information that can help locate a problem; the reported line is a starting point, and the mistake can be nearby. Demonstrate that `print("Battery status"` has a syntax error because the closing parenthesis is missing; correcting it to `print("Battery status")` displays `Battery status`.

**Practice — Punctuation:** The player runs `print("Workshop ready"` and sees a syntax error. They edit the line freely, add the missing punctuation, and run it again; a correct run displays `Workshop ready`. Feedback helps them read the error without automatically fixing the code. Three hints and unlimited penalty-free retries are available.

Next, demonstrate a `NameError` with `battery = 60` followed by `print(batery)`. Python does not recognize the misspelled name; correcting it to `print(battery)` displays `60`.

**Practice — Misspelled name:** The player runs `device = "Door sensor"` followed by `print(devce)`, sees a `NameError`, and compares the misspelling with the earlier variable name. After editing and rerunning, the correct output is `Door sensor`. Preserve work and provide penalty-free hints and retries.

Explain that a program can run without an error and still produce a wrong result. The intended battery warning is **20% or below**; `< 20` fails at exactly 20, while `<= 20` includes it. Demonstrate testing **15%, 20%, and 60%** for a low reading, the boundary, and a normal reading.

**Practice — Wrong result:** The laptop explains that this program should identify readings at or below 10, but a test gives the wrong result:

```python
LIMIT = 10
reading = 10

if reading < LIMIT:
    print("At or below the limit")
else:
    print("Above the limit")
```

The player runs it, sees the incorrect message for `10`, and edits the comparison. They then test `9`, `10`, and `11`. Feedback shows results without making the correction; hints and retries remain unlimited and penalty-free.

**Checkpoint — Repair the battery report:** Finch gives the player this broken copy of the overnight report:

```python
LOW_BATTERY_LIMIT = 20
battery_readings = [60, 20, 15]

def get_battery_status(battery):
    if battery < LOW_BATTERY_LIMIT:
        return "Warning: low battery"
    else:
        return "Battery level is okay"

for battery in battery_readings:
    status = get_battery_status(batery)
    print("Battery:", battery, "% -", status)
```

The code contains both a misspelled variable (`batery`) and an incorrect threshold comparison (`<` instead of `<=`). The player can freely edit the code in the simulated terminal, run it, and test **60%, 20%, and 15%**. The intended result is a normal status at 60 and warnings at 20 and 15. Show relevant errors and test results without revealing the fix. Preserve work and accept equivalent correct solutions that produce the intended behavior.

**Checkpoint hints:** Adapt to the error or incorrect test result: (1) remind the player that an error is a clue and a program can run but give a wrong result; (2) point to the line named in the error or the comparison when the result at the limit is wrong; (3) show a separate misspelled variable example or a different threshold comparison without correcting the player's code.

Mara is available for help, with three levels of hints and unlimited penalty-free retries. The exercise remains inside the simulated computer.

## Cutscene: After Lesson 6

The Workshop lights flicker, then the main power shuts down. Backup lights come on as the facility switches to backup power, leading into the boss.

> **Finch:** "Good news: the essential systems are protected. Bad news: we have approximately thirty minutes before this console goes back to sleep."
>
> **Mara:** "That's enough time. Work carefully, and don't skip the tests. A fast repair isn't useful if it gives us the wrong readings."

The countdown begins after the cutscene and boss instructions, not during Finch's dialogue. The initial 30-minute limit can be adjusted after playtesting.

## Chapter 2 boss: Working direction

After main power fails, the player repairs a program on the Safehouse system to restore power and the auxiliary monitor.

**Screen reference:** Use the supplied [boss-screen image](Boss-Screen-Reference.png) as a visual reference. The large Workshop monitor shows the code terminal on the left, the word bank and output on the right, the timer at the top, and a Run button inside the code window. A smaller laptop screen in front shows a binary puzzle and the eight-bit place-value chart. The Hint, Ask Mara, and sticky-note controls are accessible from the screen.

The reference image's terminal text and word bank are illustrative; use the Python program and puzzle defined below. Its displayed time is also illustrative; the initial timer is approximately 30 minutes. Keep controls keyboard-accessible and make status understandable without relying on color or faintness alone.

**Binary puzzle and repair:** The program is significantly unfinished, but enough code remains to provide structure. `#` comments above each code section explain its purpose.

The word bank initially shows each missing word as blank letter slots with its length and a **Locked** label. Locked letters are not displayed faintly and are not exposed to screen readers. As letters unlock, they appear in every matching slot. The complete word is revealed and becomes available for typing only when all its letters are unlocked.

1. The player uses the eight-bit reference chart to convert a binary number to decimal, entering the place-value contributions and their total as described below.
2. A correct conversion reveals the corresponding letter everywhere it appears in the word bank. One conversion unlocks all occurrences of that letter; the player does not need to learn a letter-to-number key.
3. When all the letters in a word are unlocked, its full text appears with an **Unlocked** label and the player can type it into a blank in the terminal.
4. The player can type an unlocked word into any blank, using the code, comments, and earlier lessons to work out where it belongs rather than being told its position.
5. Once all words are entered, the player presses **Run**. The word bank marks correctly placed words green and incorrectly placed words red, with **Correct** and **Incorrect** text labels so the feedback does not depend on color alone. The player can edit the code and run it again; all words must be correctly placed for the repair to succeed.

The first Run is free and does not forfeit the perfect bonus. If the player runs the code again and any words are still in the wrong places, the perfect bonus is forfeited, even if different words are wrong. A correct Run after the first preserves the bonus unless another forfeit already applied. The player keeps their progress and can continue correcting the code to earn the standard reward. Explain this rule before the boss begins.

The boss displays a persistent perfect-finish status:

```text
PERFECT FINISH: AVAILABLE
PLACEMENT CHECK: FIRST RUN FREE
```

After the first incorrect Run, it changes to:

```text
PERFECT FINISH: AT RISK
ANOTHER INCORRECT RUN WILL FORFEIT THE UPGRADE
```

Before every Run after the first, display a confirmation:

> **This placement check can forfeit your perfect finish if any words are incorrect.**
>
> **Run anyway** · **Return to code**

**Return to code** cancels without counting a Run or affecting eligibility. A correct Run preserves the bonus. An incorrect Run changes the status to **Perfect finish forfeited**, preserves all progress, and leaves the standard reward available. If the bonus was already forfeited through time or help, the warning states that instead of implying it can still be protected.

The comments are part of the task, not optional boss hints. Code and system interactions remain inside the game's simulation.

### Binary screen and navigation

Keep the Workshop appearance of the screen reference, but arrange the chart like the Lesson 1 chart: rows for **Position** (8 through 1), **Bit**, **Base** (2⁷ through 2⁰), and **Value** (128 through 1). Underneath, provide an entry for each position and a field for the decimal total.

The player enters the position's value beneath each `1`. Beneath a `0`, either a blank entry or `0` is correct. The player adds the contributions, enters the total, and submits. A correct submission unlocks its letter; an incorrect submission marks the entries or total needing attention without revealing the answers. Preserve entries for revision. Incorrect submissions do not count as a boss Run or affect the perfect bonus.

Show one binary puzzle at a time with a **Skip** button. Skip moves past the current puzzle without solving it or counting as a Run; skipped, unsolved puzzles return in the cycle. Solved puzzles stay solved, and partially entered answers remain when the player returns. The timer continues during puzzle navigation. Playtest the time needed to enter all place-value contributions.

### Boss program

The unfinished program checks saved battery readings, sets the fictional main-power status, and displays the recovered diagnostics:

```python
LOW_BATTERY_LIMIT = 20
battery_readings = [60, 15, 42, 18, 55]

# Decide whether one battery reading needs a warning.
____ get_battery_status(battery):
    ____ battery <= LOW_BATTERY_LIMIT:
        ____ "WARNING: Backup battery low"
    ____:
        return "Backup battery level is okay"

# Check each saved reading and display its status.
____ reading in battery_readings:
    status = get_battery_status(reading)
    ____("Battery:", reading, "% -", status)

# Restore main power in the Safehouse system.
main_power_online = ____

# Display the recovered diagnostic information.
if main_power_online:
    print("AUXILIARY MONITOR: ONLINE")
    print("CHARGING RELAY: DISCONNECTED")
    print("NON-ESSENTIAL POWER LOADS: IDENTIFIED")
    print("LOCAL CONTROL: AVAILABLE")
    print("REMOTE ACCESS: DENIED")
    print("SAFEGUARD: ECHO-02")
```

The missing words are `def`, `if`, `return`, `else`, `for`, `print`, and `True`. Python capitalization matters when typing, including the capital `T` in `True`. The power variable is fictional: the game simulation responds to a correctly completed program; it does not control real power.

### Binary conversions

Use one conversion per distinct letter. When the player enters the correct decimal answer, the game reveals that letter everywhere it appears in the word bank, regardless of letter case. The player does not need to learn the mapping below; it defines the game's automatic unlocks.

| Binary | Decimal | Letter unlocked |
|---|---:|---|
| `00000100` | 4 | D |
| `00000101` | 5 | E |
| `00000110` | 6 | F |
| `00001001` | 9 | I |
| `00001100` | 12 | L |
| `00001110` | 14 | N |
| `00001111` | 15 | O |
| `00010000` | 16 | P |
| `00010010` | 18 | R |
| `00010011` | 19 | S |
| `00010100` | 20 | T |
| `00010101` | 21 | U |

Incorrect conversions can be retried and do not count as a Run. Playtest whether the 12 conversions fit comfortably within the initial timer.

### Boss accessibility

- Each word displays its length and **Locked** or **Unlocked** state as text.
- A screen-reader list reports unlocked letters, completed words, and progress such as “E unlocked. Four of twelve letters found.”
- Locked letters are not present in accessibility output or conveyed through faintness.
- Correctly and incorrectly placed words use the words **Correct** and **Incorrect**, not only green and red.
- Players can review the current word bank, code, and unlocked-letter list at any time.

### Hints

The boss provides two separate help controls. **Hint** offers the progressive hints below. **Ask Mara** opens in-character conversational guidance.

The player chooses whether they need help with a binary conversion or a code gap. Each Hint has three levels:

| Level | Binary puzzle | Code placement |
|---|---|---|
| 1: Reminder | Remind the player that each `1` contributes its place value. | Remind them what kind of task the code section performs. |
| 2: Where to look | Point to the relevant positions on the eight-bit chart. | Point to the `#` comment above the section. |
| 3: Similar example | Show how to convert a different binary number. | Show a similar, separate Python example without completing the boss code. |

Before revealing any Hint or opening Ask Mara, warn that using either help method forfeits the perfect bonus. Confirmation reveals the help and forfeits the bonus; cancelling preserves eligibility. The first Run's placement feedback is not a hint and remains free.

**Timer and rewards:** Use the standard timer only, without separate extended-time or no-timer settings. The initial limit is approximately **30 minutes**, subject to playtesting, and starts after the opening cutscene and instructions. Give the player calm warnings at **15 minutes** and **5 minutes** remaining during the initial countdown. Explain before the countdown that letting time run out forfeits the perfect bonus.

> **Finch, at 15 minutes:** "We have fifteen minutes left. Power use hasn't changed."
>
> **Finch, at 5 minutes:** "Five minutes until safe mode. Take a breath—we're getting closer."
>
> **Finch, when time runs out:** "I'm shutting down the unnecessary Workshop lights. That should give you the time you need."

If time runs out, the game clearly reports that the perfect bonus has been forfeited. The player keeps their progress and has unlimited time to finish, with no second countdown. They can still complete the chapter and receive the standard agent. Accepting a **Hint** or **Ask Mara** help also forfeits the bonus, but only after a warning and confirmation; cancelling preserves eligibility.

The countdown pauses during cutscenes, the pause menu, displayed Hint overlays, Ask Mara help, and mandatory accessibility overlays. It resumes at the remaining time when the overlay closes. Closing the game stops the countdown; reopening resumes with the remaining time. Restore solved puzzles, partial answers, code, boss sticky notes, remaining time, Run history, and perfect-bonus eligibility so closing the game does not reset the attempt. Boss sticky notes are still removed when the boss ends.

The [sticky note app](../The-Last-Safehouse-Design.md#sticky-notes) is available during the boss, but lesson notes are hidden and boss notes are removed when the boss ends. The timer continues while a note is open or being edited.

**Successful repair:** Once the program runs successfully, main power returns and the lights and systems come back on. The restored system displays:

```text
AUXILIARY MONITOR: ONLINE
CHARGING RELAY: DISCONNECTED
NON-ESSENTIAL POWER LOADS: IDENTIFIED
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

Inside is a thumb drive containing the Design Agent build component. Mara hands the drive to the player, who adds it to the in-game project build. The agent is not launched or used during gameplay. If the player earned the perfect boss bonus, the drive contains the upgraded Design Agent component instead; the player never receives both versions.

## Open implementation questions

- Final initial timer after beginner playtesting; the current baseline is 30 minutes
- Exact binary-entry focus order, keyboard controls, and error formatting
- How skipped puzzles cycle without creating a soft lock
- Whether partially completed puzzles and the unlocked-letter list remain visible together
- Exact meaning of a Run when required words are missing
- Whether the second-Run warning appears again after cancellation without counting as a Run
- Whether the timer pauses when the application loses focus
- Exact saved state when closing during a Hint, Ask Mara, or Run confirmation
- How the per-user project-build installation is represented visually
- How the word bank and placement feedback adapt for screen readers and mobile
- Final timing and readability checks for all 12 conversions on the target display sizes
