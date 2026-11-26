# Chapter 2 Design

**Status:** Working design with six lessons and a boss direction. The [previous Chapter 2 draft](../Previous%20Drafts/Chapter-2-Previous-Draft-2026-11-20.md) is preserved for historical reference.

Chapter 2 focuses on programming fundamentals. The lessons and boss remain working designs that can be refined during development. The reference images are guides, not text to copy.

The previously agreed Chapter 2 reward is the Design Agent, with an upgraded version for a perfect boss finish. Its details are in [Section 8 of the master design](../The-Last-Safehouse-Design.md#8-software-development-agents-and-chapter-rewards).

## Lesson navigation and progress

Present teaching material one manageable section at a time, with Next and Back buttons. Players can review earlier explanations during a lesson and its checkpoint without losing completed progress.

Each lesson ends with one checkpoint that provides guided coaching and an assessed result. Earlier code samples and demonstrations are explanatory examples, not separate scored practice activities.

Checkpoint progress saves after each completed step. If the player closes and returns during a checkpoint, that step resumes with prior answers and progress preserved. Lesson sticky notes continue to save automatically, and the boss follows its separate resume rules.

## Learn & Try workspace

Every programming lesson uses a split-screen learning workspace on supported displays. The lesson explanation stays on the left; an editable simulated Python console and output panel appear on the right.

- Selecting a lesson example offers **Load into workspace**; it does not run automatically.
- The player can change values, run the example, read errors, and reset to the original.
- The workspace supports the Python prompt, multi-line code, and output needed by the current lesson.
- Example output remains separate from the lesson text and checkpoint state.
- A checkpoint opens from a controlled starting snapshot. If the player wants to reuse exploration work, the game identifies what will carry over before beginning.
- Narrow displays use **Lesson** and **Try It** tabs.

No Python code runs on the player's real computer outside the game's simulation.

## Opening scene

The next morning, the player sits down with their in-game laptop and the thumb drive Finch gave them.

> **Mara:** "Yesterday you brought a computer back to life. Today, we'll start looking at how we tell computers what to do."
>
> **Finch:** "And how to do it without upsetting them. They can be surprisingly sensitive."
>
> **Mara:** "First, let's add your Project Planning Agent component to the project build."

The player plugs the drive into the in-game laptop. A small installer window opens with the package details and a single choice, **Install for me only**, followed by a progress step and a completion line naming the **Installed apps** entry it now occupies. No administrator prompt appears, because a per-user install does not need one, and the window says so:

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

**Example:** The lesson uses the simulated Calculator's **Programmer** mode to compare the same value in binary, decimal, hexadecimal, and octal. These are number systems, not programming languages.

The lesson shows an eight-bit reference chart and explains that a `1` contributes its position's value while a `0` contributes nothing. For example:

| Position | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|
| Bit | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |
| Base | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Explain that each base entry is a power of two: for example, 2³ means multiplying three 2s together, giving 8, and 2⁰ equals 1. Each value doubles moving left. Add the values under the `1` bits; in this example, 32 + 4 + 1 = **37**. Present the chart as readable text, not color alone.

### Checkpoint: Binary conversions

The Workshop's monitoring console detects three devices, but an old diagnostic report displays their numeric identifiers in binary. Mara asks the player to convert the identifiers to decimal so they can be matched to the Workshop's inventory.

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

**Example:** The lesson presents one example of each language type and explains what it does.

### Checkpoint: Monitoring restoration plan

Now that the devices are identified, Mara and Finch plan how to restore their monitoring display. Recovered files include instructions for processing sensor readings, a page describing the display's layout, stored device information to retrieve, and a low-level hardware diagnostic.

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

**Example — Data types:** The lesson labels `"Door sensor"` as a string, `19` as an integer, `19.5` as a floating-point number, and `True` as a Boolean, explaining why each fits.

### Variables

A variable is a name referring to a value. In `temperature = 19`, Python assigns the value on the right to the name on the left. Here `=` means assignment, not a comparison, and the line alone displays nothing.

`print(temperature)` looks up the value and displays `19`. Compare it with `print("temperature")`, which displays the word `temperature`. Quotation marks identify text and are not displayed as part of it; matching single quotes can also be used. In `print("Temperature:", temperature)`, the comma separates the displayed pieces and the output is `Temperature: 19`.

In `temperature = temperature + 1`, Python reads the current value, adds `1`, and assigns the result back to the name. A subsequent `print(temperature)` displays `20`. Explain that variable names are case-sensitive, cannot contain spaces, and cannot begin with a number; descriptive names help make code readable.

**Example — A changing reading:** The lesson follows the completed example as the variable changes:

```python
temperature = ____
print(____)
temperature = temperature + ____
print(____)
```

The completed values display **18** and then **19**. The lesson explains how the value changed and why each `print` displays it.

### Constants

A constant is a value intended to stay fixed while the program runs. Python's uppercase naming convention signals that intention; Python does not prevent reassignment.

```python
DEVICE = "Window sensor"
print(DEVICE)
```

Explain that `DEVICE` refers to the text and that `print` displays `Window sensor` without the quotation marks. Contrast its intended fixed use with a changing `temperature` reading.

**Example — Constants:** The lesson contrasts `DEVICE = "Door sensor"` with `temperature = 19`. The uppercase name signals an intended constant, while `temperature` may change, but Python does not enforce that convention.

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

**Example — Door sensor:** A fictional door sensor starts at **19 degrees**, is **online**, and then rises by **1 degree**. The completed example is:

```python
DEVICE = "Door sensor"
temperature = 19
online = True
temperature = temperature + 1
print(temperature)
```

The output is **20**. The lesson explains each line, including why `DEVICE` is intended as a constant and how changing `temperature` works.

**Cutscene — Before the checkpoint:** Finch panics because he cannot tell whether the Workshop's backup battery is charging.

> **Finch:** "Wait—is the backup battery charging? I can't tell, and I would very much like to tell."
>
> **Mara:** "Calm down, Finch. Our new apprentice can use what they've learned to make a readout for you."

The battery checkpoint opens.

### Checkpoint: Workshop backup-power readout

Finch asks the player to prepare a fictional readout. The Workshop's backup battery starts at **45%**, charging is **on**, and the latest reading shows a **15-point increase**. The simulated terminal presents code with missing elements for the player to type:

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

**Example — Comparisons:** The lesson evaluates `18 < 20` as `True`, `20 < 20` as `False`, and `20 <= 20` as `True`, explaining that `<=` includes equality.

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

### Applying a threshold

A threshold is a decision point. Demonstrate using a named constant with `<=` in a separate sensor example, including a reading equal to the threshold. Explain that uppercase constant names signal intent in Python but are not enforced. Teach the required syntax before the checkpoint.

**Example — Thresholds:** The lesson demonstrates:

```python
LOW_LEVEL = 10
water_level = 10
print(water_level <= LOW_LEVEL)
```

The output is `True` because the reading equals the limit. The lesson compares readings of `9`, `10`, and `11`, showing that `<=` includes the limit itself.

### Checkpoint: Backup-battery warning

Finch asks the player to add a warning to the existing Workshop battery readout so he does not have to watch the percentage manually. The player keeps their Lesson 3 code and completes the added warning by dragging pieces from a tray into blanks, with a keyboard-accessible alternative:

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

### Functions

A function is a named group of instructions a program can use more than once. It can receive information, work with it, and return a result:

```python
def add_one(reading):
    return reading + 1

result = add_one(18)
print(result)
```

Explain `def`, the function name, the parameter `reading`, the colon and indentation, and the `return` instruction. Calling `add_one(18)` supplies `18` as an argument; the function returns `19`, which is assigned to `result` and displayed. `return` gives a result back and ends the call; `print` displays information. A returned value is not displayed just because it was returned.

### Loops

A loop repeats instructions. A `for` loop can visit each item in a list:

```python
battery_readings = [60, 15, 42]

for reading in battery_readings:
    print(reading)
```

Explain `for`, the current-item name `reading`, `in battery_readings`, the colon, and indentation. The loop prints `60`, `15`, and `42` on separate lines, then ends after all items are processed.

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

### Checkpoint: Overnight battery report

The Workshop's backup power fluctuated overnight. Finch saved several battery readings but has been checking them one at a time. He asks the player to turn the battery-warning code into a reusable program that reviews the whole list.

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

**Finding and fixing mistakes:** Finch has a copy of the battery-report program that is not working. Keep the lesson focused and manageable, with clear examples before the checkpoint.

An error message is a clue, not a failure. Python reports information that can help locate a problem; the reported line is a starting point, and the mistake can be nearby. Demonstrate that `print("Battery status"` has a syntax error because the closing parenthesis is missing; correcting it to `print("Battery status")` displays `Battery status`.

Next, demonstrate a `NameError` with `battery = 60` followed by `print(batery)`. Python does not recognize the misspelled name; correcting it to `print(battery)` displays `60`.

Explain that a program can run without an error and still produce a wrong result. The intended battery warning is **20% or below**; `< 20` fails at exactly 20, while `<= 20` includes it. Demonstrate testing **15%, 20%, and 60%** for a low reading, the boundary, and a normal reading.

### Checkpoint: Repair the battery report

Finch gives the player this broken copy of the overnight report:

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
5. When every blank is filled, the player presses **Run**. The word bank marks correctly placed words green and incorrectly placed words red, with **Correct** and **Incorrect** text labels so the feedback does not depend on color alone. The player can edit the code and run it again; all words must be correctly placed for the repair to succeed.

Run stays pressable while a blank is unfilled. Pressing it then shows **Not yet: 3 required words are still missing** and does not count as a Run, does not enter the Run history, and never affects the perfect bonus. That keeps an incomplete submission separate from an incorrect placement, which is the distinction the perfect-finish rule depends on.

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

**Return to code** cancels without counting a Run or affecting eligibility, and cancelling changes nothing about the risk: the next Run shows the same confirmation, and cancelling again is equally free. A correct Run preserves the bonus. An incorrect Run changes the status to **Perfect finish forfeited**, preserves all progress, and leaves the standard reward available. If the bonus was already forfeited through time or help, the warning states that instead of implying it can still be protected.

The comments are part of the task, not optional boss hints. Code and system interactions remain inside the game's simulation.

### Binary screen and navigation

Keep the Workshop appearance of the screen reference, but arrange the chart like the Lesson 1 chart: rows for **Position** (8 through 1), **Bit**, **Base** (2⁷ through 2⁰), and **Value** (128 through 1). Underneath, provide an entry for each position and a field for the decimal total.

The player enters the position's value beneath each `1`. Beneath a `0`, either a blank entry or `0` is correct. The player adds the contributions, enters the total, and submits. A correct submission unlocks its letter; an incorrect submission marks the entries or total needing attention without revealing the answers. Preserve entries for revision. Incorrect submissions do not count as a boss Run or affect the perfect bonus.

Tab order runs through the contribution fields in position order, then the total, then **Submit**; Enter advances and no field traps focus. Errors are specific without giving answers: a wrong contribution reports **Check the contribution at position 16**, while a total that does not match the entries already present reports **Your total does not match the contributions you entered**, so arithmetic and knowledge produce different feedback.

Show one binary puzzle at a time with a **Skip** button. Skip moves past the current puzzle without solving it or counting as a Run, and a skipped puzzle re-enters at the end of the queue rather than at the front. A conversion list is always available showing all twelve with their solved or unsolved state, so the player can jump to any unsolved puzzle; when only skipped puzzles remain, the console says so and points at the list instead of offering another Skip. Skipped puzzles never block progress, solved puzzles stay solved, and partially entered answers remain when the player returns. The timer continues during puzzle navigation.

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

- Each word displays its length and **Locked** or **Unlocked** state as text, read as a list item such as “Locked, five letters” or “Unlocked: print”.
- A screen-reader list reports unlocked letters, completed words, and progress such as “E unlocked. Four of twelve letters found.”
- Placement feedback is announced as a sentence: “Placement check: four of seven correct. Incorrect: blank two, blank five.”
- Locked letters are not present in accessibility output or conveyed through faintness.
- Correctly and incorrectly placed words use the words **Correct** and **Incorrect**, not only green and red.
- The current puzzle or chart and the unlocked-letter list stay visible at the same time. Narrow screens use tabs with the solved count on the tab label, so progress is never hidden.
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

**Pacing budget for playtesting:** the twelve conversions should take no more than twelve minutes, reading and placement no more than fifteen, leaving about three minutes of slack. If testers average longer on the conversions, the chart or the entry flow needs attention before the timer does.

> **Finch, at 15 minutes:** "We have fifteen minutes left. Power use hasn't changed."
>
> **Finch, at 5 minutes:** "Five minutes until safe mode. Take a breath—we're getting closer."
>
> **Finch, when time runs out:** "I'm shutting down the unnecessary Workshop lights. That should give you the time you need."

If time runs out, the game clearly reports that the perfect bonus has been forfeited. The player keeps their progress and has unlimited time to finish, with no second countdown. They can still complete the chapter and receive the standard component. Accepting a **Hint** or **Ask Mara** help also forfeits the bonus, but only after a warning and confirmation; cancelling preserves eligibility.

The countdown pauses during cutscenes, the pause menu, displayed Hint overlays, Ask Mara help, mandatory accessibility overlays, and whenever the game window loses focus. It resumes at the remaining time when the overlay closes or the window returns. Closing the game stops the countdown; reopening resumes with the remaining time.

Closing during a confirmation never decides it: a pending Run confirmation is discarded on close, so quitting forfeits nothing, while a Hint or Ask Mara forfeit that was already confirmed stands because it was chosen before closing. Reopening returns to the code with any overlay closed and the Run history intact.

Restore solved puzzles, partial answers, code, boss sticky notes, remaining time, Run history, and perfect-bonus eligibility so closing the game does not reset the attempt. Boss sticky notes are still removed when the boss ends.

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

- First beginner playtest results: the average time for the twelve conversions, and whether it fits the twelve-minute budget
- Whether the chart, entry fields, and word bank fit the smallest supported display without scrolling
