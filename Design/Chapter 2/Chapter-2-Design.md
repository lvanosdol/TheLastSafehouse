# Chapter 2 Design

**Status:** Redesign from scratch. The [previous Chapter 2 draft](../Previous%20Drafts/Chapter-2-Previous-Draft-2026-11-20.md) is superseded and preserved for reference. Its lessons, story, and boss are not current requirements.

The user intends to develop Chapter 2 together after finishing Chapter 1. Reference images suggest programming and database fundamentals; the exact topics, lesson order, depth, story, and boss remain open for discussion. The images are references, not text to copy.

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

The laptop teaches that a bit can be `0` or `1` and that eight bits make a byte. It introduces decimal, binary, and hexadecimal as different ways to write numbers, with a brief introduction to octal. It also explains that systems such as Unicode let computers represent text.

**Practice:** The player opens the simulated Calculator and follows guidance to select **Programmer** mode from its menu. They enter numbers and compare their binary, decimal, hexadecimal, and octal representations. These are number systems, not programming languages.

The lesson shows an eight-bit reference chart and explains that a `1` contributes its position's value while a `0` contributes nothing. For example:

| Position value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|
| Example binary | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |

The example's decimal value is 32 + 4 + 1 = **37**. Present the chart as readable text, not color alone.

**Checkpoint:** The player converts three different eight-digit binary numbers to decimal by adding the position values under their `1` digits. The reference chart remains available throughout; all three answers must be correct to complete the checkpoint. Teach and demonstrate the method before testing it. Mara remains available for help, and the three hint levels and retries are unlimited and penalty-free.

## Lesson 2: Types of computer languages

The laptop introduces what different languages do:

- **Programming and scripting languages** give a computer instructions, such as calculating a result or automating a task.
- **Markup languages**, such as HTML, describe the structure of content.
- **Query languages**, such as SQL, help work with information in a database.
- **Assembly language** uses instructions closely related to a processor's machine instructions.

The lesson also shows two ways programs can be run: a **compiler** translates code, while an **interpreter** runs instructions through another program. Some languages and tools use a combination of approaches.

**Practice:** The player explores interactive examples and matches each kind of language to what it does.

**Checkpoint:** The player chooses an appropriate language type for a few fictional tasks without needing to write code. Mara is available for help, and hints and retries remain unlimited and penalty-free.

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

The remaining Chapter 2 lessons will be decided together.
