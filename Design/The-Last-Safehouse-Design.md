# The Last Safehouse — Working Design Record

**Status:** Brainstorming draft; no implementation decisions are final unless explicitly confirmed below.
**Updated:** 2026-11-20
**Purpose:** Serve as the main working record for the game's confirmed decisions, brainstormed drafts, and open questions. Keep it updated as planning continues.

**Navigation:** [Authoritative Chapter 1](Chapter%201/Chapter-1-Design.md) | [Current campaign story (Section 15)](#15-campaign-story--working-narrative) | [Curriculum map (Section 16)](#16-seven-chapter-curriculum-scaffold) | [Current Chapter 2 design](Chapter%202/Chapter-2-Design.md) | [Earlier reward ideas](Previous%20Drafts/Earlier-Reward-Ideas.md) | [Archived historical sections](Superseded/Superseded-Design-Sections.md)

## 1. Product vision

*The Last Safehouse* is a 3D, story-driven IT and networking learning game for adult beginners. It teaches real-world computer, operating-system, networking, database, automation, troubleshooting, and defensive-security skills through short explanations, examples, exploration, hands-on practice, and meaningful checkpoints.

The player gradually builds a seven-agent software-development app, earning one agent after each chapter and an optional upgraded version for a perfect boss finish. The complete app is intended to be downloadable and useful beyond the game. The campaign target is seven chapters.

The app's final name and implementation remain open. Real-world use needs separate safety, security, privacy, compatibility, and reliability design; game simulations use fictional records and contained exercises.

## 2. Platforms and implementation direction

- **Full desktop experience:** Windows and macOS.
- **Mobile experience:** Downloadable Android and iOS apps with a smaller feature set than desktop.
- The engine has not been selected. Godot is present in the supplied project, but the rebuild should re-evaluate the engine rather than automatically inherit Manus's setup.
- The intended desktop experience includes Windows-style navigation and a cross-platform terminal workspace. Tools are selected according to the task: PowerShell for Windows administration, Bash for Unix-style environments, SQL for databases, Python for suitable automation/data work, and text/report formats for documentation.
- Desktop workshop setup may teach environment isolation and Python packages later when Python is the appropriate task.
- The mobile version should simulate environment setup rather than require terminal commands.
- Teach explicitly that a virtual environment isolates project dependencies but is not a security sandbox. Runtime restrictions are a separate protection.
- An approved-package install is part of the current desktop workshop draft. The exact package and safe network/package policy remain to be validated.
- The uploaded `C:\Users\Babyg\Downloads\The Last Safehouse.zip` has only been inspected. It is an existing Godot project. Its contents have not been changed or reorganized.
- The game will be built as a fresh project after the design drafting is complete; Manus's existing project structure and code will not be carried over by default. The ZIP is optional reference material only.

## 3. Teaching and checkpoint principles

### Lesson style

- Explain each idea in plain language.
- Show labeled examples and explain what each relevant piece does.
- Once the Workshop PC is working, present lessons on the in-game computer with interactive explanations and examples. Mara remains available for optional guidance and help, and can introduce or connect lessons when needed.
- After Chapter 1, the player's in-game laptop supports later lessons, practice, homework, and checkpoints.
- Match lesson depth to the importance and complexity of the subject. Cover important information thoroughly rather than shortening it to fit a fixed lesson length; reading can supplement interactive examples when it helps teach the material.
- Give players chances to predict, run, edit, and observe results.
- Teach in small steps and check understanding before advancing.
- Use story and 3D exploration to give practice a purpose.

### General checkpoint loop

1. State the task clearly.
2. Let the player interact with the relevant simulated tools or, when appropriate, inspect and run code in the practice workspace.
3. Check both the actual result and the concept the checkpoint is intended to teach.
4. On failure, show the relevant result or error and point toward the problem without automatically giving the fix.
5. Offer help immediately: progressive hints and optional AI-powered guidance from Mara.
6. On success, show the output, name the skill that worked, save progress, and unlock the next step.
7. If a player still does not demonstrate the concept, offer a fresh, similar task and another attempt.

Accept alternate valid solutions unless a specific technique is the learning objective. If the task explicitly teaches `+`, `append()`, or another target technique, verify that technique as well as the result.

Lesson checkpoints have unlimited retries and no penalty. Lesson hints/retries do not affect the Console Repair bonus.

### Progressive hints

Hints are available immediately. Use three levels:

1. Concept reminder.
2. Where to look.
3. A guiding question or similar example.

Hints should not reveal a complete solution.

### Mara's AI-powered guidance

- Mara is the player's tutor and guide, providing optional AI-powered help in character. This replaces the earlier neutral, separate workshop-assistant concept.
- Can answer general questions and tailor explanations to course progress and recent mistakes.
- Automatically sees current exercise code and output, with a clear notice to the player.
- Cybersecurity help should remain educational and defensive; practical security exercises should be fictional and contained in the game.
- On a checkpoint error, explain the likely issue first and then ask a guiding question.
- May offer a small, targeted code suggestion, but does not edit code automatically or supply the entire solution. The player makes the edits.
- When a player is frustrated or lost, acknowledge it without judgment, simplify the idea, and offer one manageable next step.
- Lesson help and retries are penalty-free. During a boss, warn before a hint or Mara's AI help is used: confirming help forfeits the perfect bonus, while cancelling preserves eligibility.

### Console Repair help and bonus

**Status: SUPERSEDED.** The previous rules are in [Earlier Reward Ideas](Previous%20Drafts/Earlier-Reward-Ideas.md#console-repair-help-and-bonus). Use the current agent-upgrade rules in Section 8 and Chapter 1.

## 4. Chapter 1 — Python foundations and the safehouse

**Status: SUPERSEDED.** This earlier Chapter 1 outline is retained in the [historical archive](Superseded/Superseded-Design-Sections.md).

## 5. Echo code-unlock puzzle

**Status: SUPERSEDED.** This earlier puzzle design is retained in the [historical archive](Superseded/Superseded-Design-Sections.md).

## 6. Console Repair boss level

**Status: SUPERSEDED.** This earlier boss design is retained in the [historical archive](Superseded/Superseded-Design-Sections.md).

## 7. Chapter Summary, crafting, and menus

**Status: LEGACY INTERFACE DRAFT.** Historical interface details are retained in the [archive](Superseded/Superseded-Design-Sections.md).

## 8. Software-development agents and chapter rewards

**Status:** Approved working direction. Each chapter awards its standard agent; a perfect boss finish awards that agent's upgraded version. No other reward types are currently planned. The app can be downloaded and saved for real-world use after completion, subject to future design and testing.

| Chapter | Standard agent | Perfect-finish upgrade |
|---|---|---|
| 1 | **Project Planning:** Brainstorms ideas with the user and saves approved drafts in an organized project folder. | Compares alternative ideas and builds a more detailed development roadmap. |
| 2 | **Design:** Plans screens, navigation, and accessible layouts. | Explores and compares multiple layout concepts. |
| 3 | **Development Setup:** Explains and compares tools, resources, add-ons, and packages; checks compatibility and provides official download links. The user chooses and installs them. | Compares complete tool combinations side by side. |
| 4 | **Coding:** Helps write and explain code, with approval before changing files. | Helps coordinate larger changes across related files. |
| 5 | **Testing:** Helps create and run tests and explain results. | Suggests additional unusual cases to test. |
| 6 | **Debugging:** Investigates errors and suggests fixes. | Helps trace problems across multiple parts of a project. |
| 7 | **Release:** Guides the user through preparing a release. | Helps plan releases for multiple platforms. |

Version control is a shared app feature rather than an eighth agent. After the user enables it, the app can automatically track project changes; restoring versions or sending files online remains under the user's control. The details are still open.

Standard agents must remain useful on their own. Safety, accessibility, and user approval apply to both standard and upgraded versions. Compatibility claims must be checked where possible and uncertainty made clear. The development setup agent never installs software for the user.

Each chapter's earned component arrives on a separate in-game thumb drive. The player plugs it into the in-game laptop to install the component as the app grows; the first drive comes from Finch's secret compartment. The laptop is a learning tool rather than another chapter reward, and the app's intended real-world download remains separate from the fictional installation.

### Previous agent roster

**Status: SUPERSEDED reward direction.** The [previous roster](Previous%20Drafts/Earlier-Reward-Ideas.md#previous-agent-roster) is retained for historical reference; the seven development agents above are the current reward plan.

## 9. Toolkit components and bonus-item pool

**Status: LEGACY CYBERSECURITY-FOCUSED POOL.** Historical reward ideas are retained in the [archive](Superseded/Superseded-Design-Sections.md).

## 10. Open design and validation questions

**Status:** Updated for the IT/networking direction. Chapter 1-specific questions are maintained in Section 18; the earlier Python-only lesson, f-string, and Console Repair timer questions are superseded.

- Final engine and desktop/mobile architecture.
- How to safely execute or simulate PowerShell, Bash, and any later Python/SQL practice without granting access to the player's real machine or network.
- Exact command subsets, script-editor behavior, and equivalent-solution validation for cross-platform shell lessons.
- Detailed outlines for Chapters 2–7, including the introductory networking and major database blocks.
- How deeply to cover each topic and which advanced subjects should remain optional as the seven-chapter curriculum develops.
- How the downloadable development app can responsibly support real-world use, including privacy, security, testing, reliability, and AI-service requirements.

## 11. Planning workflow

- Work through the project one step at a time.
- Brainstorm ideas together before treating decisions as final.
- Keep this Desktop design record current with confirmed decisions, useful brainstorms and drafts, and unresolved questions.
- Do not change or reorganize the uploaded ZIP without explicit agreement.
- Refine the seven agent rewards and their chapter connections as the remaining chapter outlines develop.

## 12. Clean rebuild and design-record workflow

- The user wants to preserve the game's overall concept while starting implementation over from the ground up after drafting is complete.
- The Manus project setup is not the foundation for the rebuild. The ZIP may be consulted for selected ideas or assets, but nothing from it is assumed to be reused.
- This file in the Desktop Design folder is the primary working record. Update it as planning progresses so decisions, drafts, and open questions are not lost.
- No engine or implementation architecture has been selected yet; decide those after the game design is sufficiently drafted.
## 13. Cybersecurity curriculum ideas

**Status: Mixed.** The previous Chapter 2 networking and Python draft is superseded; Chapter 2 is being redesigned around programming fundamentals, with database lessons planned for Chapter 3. Other topics and chapter assignments below remain candidates, not approved requirements. Keep the curriculum beginner-friendly and connect each concept to a story problem, a safe simulation, and a clear learning check. Avoid turning the game into a glossary.

### Strong candidates for the core learning path

- **Networking basics:** IP addresses identify network endpoints; ports identify services; DNS connects human-readable names to IP addresses; HTTP and HTTPS describe web communication, with HTTPS protecting data in transit through TLS. Teach what each is for and how they relate, without requiring players to configure real networks or study cryptography in depth.
- **Operating-system basics:** Files and folders, processes and services, user accounts, permissions, and where useful logs come from. Teach only what players need to understand fictional incident evidence and the defensive tools they build.
- **Identity and access:** Authentication versus authorization, strong unique passwords, multi-factor authentication, least privilege, and recognizing suspicious login activity.
- **Reading security evidence:** Timestamps and time zones, event fields, failed logins, unfamiliar devices, unusual activity, preserving records, and building a timeline. This aligns with the planned Scout, Watcher, Archivist, and Verifier roles.
- **Safe incident response:** Distinguish detection, triage, containment, recovery, and communication. Practice on fictional records and explain why preserving evidence and checking claims matter.
- **Everyday security habits:** Phishing and social engineering, updates, backups and recovery, and careful handling of sensitive information. Backups/recovery already appear in Chapter 1 and can be revisited rather than overexplained there.

### Possible structure, not a chapter assignment

A natural progression could move from the Chapter 1 safehouse and backup/recovery story into how devices and services communicate (DNS, IP addresses, ports, HTTP/HTTPS), then how operating systems and identity generate security-relevant activity, and later how to investigate and respond using logs and the player's growing toolkit. The exact order should follow the story and chapter count.

### Safety and teaching guardrails

- Use fictional addresses, domains, devices, accounts, and event records in exercises.
- Keep hands-on networking activities inside a simulated lab; do not make real-world scanning or interaction with systems a lesson requirement.
- Explain jargon in plain language, then let players identify or interpret it in a realistic-looking but fictional scenario.
- Favor practical understanding and judgment over memorizing port numbers or protocol details.
## 14. Chapter 2 — The Missing Access Keys (early outline; superseded by Sections 15 and 17)

**Status: Early working outline retained for reference. Its lesson order, clue design, and reward notes are superseded by the more complete current design in Section 17.**

Historical details are retained in the [archive](Superseded/Superseded-Design-Sections.md).

## 15. Campaign story — working narrative

**Status:** The apparent-villain and dual-reveal storyline below is the current direction. The player initially believes Mara is the ally and The Echo is the enemy; later, the player discovers they are The Echo and that Mara is the true villain. Exact reveal timing, foreshadowing, dialogue, and final outcomes remain open.

### Premise and hidden history

The player appears to be an outsider helping Mara Vale restore Safehouse 7, its Workshop, and its damaged systems. Mara presents the work as a rescue and restoration effort. The Echo appears to be deliberately sabotaging that work through threatening messages and disruptive files.

The hidden history is that Mara built Safehouse 7 and its systems as a laboratory for abusive experiments on people and robots. She tortured subjects while trying to create an army of indestructible robo-people. The Echo, an intelligent system with the original identity `E.C.H.O_Thread_01`, discovered what Mara was doing and destroyed the lab and its systems to stop the experiments and save lives. The Echo later lost his memories. Mara exploits that memory loss to make the player rebuild the very facility he destroyed, without the player understanding who he is or why he destroyed it. The cause and timing of the memory loss remain open.

The experience takes place in the real Safehouse 7, while the player-facing interface and some evidence are simulated. The player's actions still change isolated Safehouse systems. The full boundaries and purpose of the simulation remain to be reconciled with Mara's deception and the late-game reveal.

### Characters

- **Mara Vale:** The apparent ally and lead architect of Safehouse 7; in truth, she is the villain. She built the lab and its systems for abusive human and robot experiments, and manipulates the player into restoring them. Her exact motives beyond the indestructible robo-people project remain open.
- **The Echo / player:** The player is The Echo, but initially believes they are an outside helper. His earlier destruction of the lab was intended to save its human and robotic subjects. His messages and actions look hostile from the player's limited perspective; their protective purpose is revealed later.
- **Finch:** The Safehouse's system in holographic form, with a comedic personality and damaged memories. His system was destroyed years earlier when Echo destroyed the facility. After glitching earlier, Finch appears properly after the Chapter 1 boss, thanks the player, and introduces himself. His glitches and recognition can become early clues that he knows more about the player than he can explain.
- **Original team:** Imani focused on evidence integrity and the difference between an alert and evidence; she suspected The Echo was not an external attacker. Tomas worked on infrastructure and communications, distrusted system independence, and noticed unusual agent communication. Nia focused on human communication and emergency response, insisted warnings must be understandable, and was the first to describe The Echo as a possible intelligence. How each member relates to Mara's lab and the Echo's actions remains open.

### Gradual foreshadowing and dual reveal

Let the player reasonably interpret Mara's guidance as helpful and The Echo's interference as malicious. Seed fair, initially ambiguous clues that can be read both ways: Echo-signed files, messages that sound like taunts, records that do not fit Mara's explanation, and Finch's glitches or fearful recognition. The early clues should make the later answer feel earned without making it obvious.

In Chapter 1, `WorkshopSync_ECHO-01.ps1` appears to be a startup helper that belongs with the restored Workshop files. Its name hints at Echo's authorship, but its apparent effect makes The Echo look dangerous; there is no Echo message or taunt in this chapter. After the player sorts and restores the files, simulated Windows Security flags the damaged file. Selecting **Block threat** appears to be a sensible success and leads to Finch's return; later context reveals that the file was a corrupted safeguard left by The Echo to keep Mara's lab from returning.

In the late game, evidence links the player's own actions and identity to The Echo (`E.C.H.O_Thread_01`). The player then learns that The Echo destroyed the lab to protect his human and robotic subjects, while Mara used the player's memory loss to make them rebuild it. The harmful effects of the corrupted file are real, but they do not prove that The Echo intended harm.

### Endgame direction

The previous endings based on joining Mara's Sentinel partnership or rejecting her rehabilitation are superseded. The final confrontation, player choices, and consequences need to be designed for the new reveal. Do not frame the player's anger or sense of betrayal as wrongdoing; future choices should center on safety, autonomy, evidence, and what happens to the lab's subjects.
## 16. Seven-chapter curriculum scaffold

**Status:** Seven chapters is the campaign target. The subject map is a working direction, not a finalized chapter-by-chapter curriculum.

The campaign aims for a beginner-to-practical pathway in IT, networking, databases, troubleshooting, and task-appropriate automation. It teaches foundations and evidence-based judgment rather than trying to cover every specialization.

1. **Computer and Workshop restoration:** Begin by learning the components and rebuilding the broken PC, then use it to learn computing basics, operating systems, Windows navigation, files and permissions, device protection, and software choices. The boss uses file sorting, evidence preservation, permissions, and a simulated Windows Security alert; the story introduces the apparent Echo threat and the first signs of Mara's deception.
2. **Programming fundamentals:** See the [Chapter 2 design](Chapter%202/Chapter-2-Design.md).
3. **Databases:** Database lessons are planned here; their detailed scope remains open.
4. **Later chapters:** The remaining chapter assignments will be rearranged before work begins on Chapter 3. Previous candidates include network hardware and addressing; network services and protocols; and troubleshooting, logs, backups, and automation.
5. **Later chapter:** Assignment to be decided.
6. **Later chapter:** Assignment to be decided.
7. **IT capstone and identity resolution:** Apply the curriculum, discover that the player is The Echo (`E.C.H.O_Thread_01`), learn that Echo destroyed Mara's lab to save its subjects, and uncover Mara's manipulation. Final choices and endings remain open.

Pace each chapter in manageable steps with practice and meaningful checks. Some topics need extensive lessons and reading to teach important information thoroughly; do not make brevity or interactivity a reason to leave it out. The campaign need not attempt to teach every specialization.
## 17. Chapter 2 — Redesign

**Status:** Redesign from scratch. The [Chapter 2 design file](Chapter%202/Chapter-2-Design.md) tracks the new direction; the earlier detailed draft is archived.

## 18. IT-first Chapter 1 rewrite

For the authoritative current Chapter 1 design, see the [Chapter 1 design file](Chapter%201/Chapter-1-Design.md).

