# Chapter 5: The Security Gateway

**Status:** Working design with eight detailed lessons and a complete boss design. Mechanics remain subject to implementation and playtesting.
**Updated:** 2026-11-25

## Opening scene

After the Chapter 4 recovery, Finch reviews the Tomas and Nia log. The Coding Agent component has already been added to the in-game project build. Finch uses the recovered archive to update the facility map:

```text
SYSTEMS WING: LOCATED
SECURITY GATEWAY: OFFLINE
ACCESS RECORDS: INCOMPLETE
MALWARE QUARANTINE: ACTIVE
PROTECTED EVIDENCE: SEALED
```

> **Finch:** "The Systems Wing is on the map now. The gateway is offline, but a separate quarantine system is still active."
>
> **Mara:** "The gateway controls access to the remaining systems. Restore it, and we can continue."
>
> **Finch:** "Its access records might also help us understand what happened to the emergency exits."
>
> **Mara:** "Those records may contain private personnel information. We need access to the Systems Wing—not an investigation into old records."
>
> **Finch:** "We can respect people's privacy and still keep track of questions we haven't answered."

Finch creates an **Unresolved Records** panel beside the map. Its first entry links to the original Tomas and Nia log and notes Mara's explanation as a claim, not a proven fact. Future entries can link back to their sources and distinguish observations from interpretations.

The player can reach the area outside the Systems Wing, but the wing itself remains locked until the boss is completed. Finch directs the player to the first security lesson before they work on the gateway.

## Lesson 1: What Needs Protection?

### Opening

Finch displays a list of asset groups recovered from the gateway's inventory. The gateway is still offline, so the list shows previously recorded information—not live access to the Systems Wing.

> **Mara:** "Before restoring a security system, you need to understand what it protects and why someone might target it."
>
> **Finch:** "I've found an inventory. Some entries are clear. Others appear to have been named by someone who enjoyed making me nervous."

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All security activities use fictional systems and records.

#### Page 1: What is security protecting?

An **asset** is something valuable that needs protection. It might be a computer, an account, a file, or information a system depends on.

Some examples are:

- Account credentials.
- Maintenance records.
- Security cameras.
- Public training materials.
- A system that controls a door.

Not every asset needs the same protection. A public training guide is intended to be read by anyone, while an account credential should remain private.

#### Page 2: Hackers and authorization

A **hacker** is someone who explores or works with computer systems. The word does not automatically mean someone is committing a crime.

An authorized security tester has permission to examine a system within agreed limits. Someone who accesses a system without permission, steals information, or causes damage may be committing a crime.

The important questions are **what the person is authorized to do** and **what they actually do**.

#### Page 3: Why might someone target information?

Different people can have different motives:

- **Money:** Stealing information to sell it or demanding payment.
- **Disruption:** Preventing people from using a service.
- **Espionage:** Obtaining information for a competing organization or government.
- **Embarrassment:** Exposing information to damage someone's reputation.
- **Access:** Obtaining credentials or permissions to reach other systems.

A motive is not always obvious from an incident. The player should avoid deciding who acted or why without evidence.

#### Page 4: Data as an asset

**Data** is information a system collects or stores. Organizations may use it to operate equipment, serve customers, make decisions, or produce reports.

- **Collection:** Gathering data, such as a sensor recording a temperature.
- **Correlation:** Connecting related pieces of data, such as matching a maintenance event to a device.
- **Reporting:** Presenting information in a useful form, such as a list of devices needing maintenance.
- **Analytics:** Examining data to find patterns or answer questions.
- **Big Data:** Working with data that is large, varied, or arrives quickly enough to require suitable tools and methods.
- **Monetization:** Using data to generate revenue, such as selling an aggregate report. Data having monetary value does not mean an organization has permission to sell it.

Combining records can reveal more than each record shows alone. For example, a maintenance report connected to employee names and locations might reveal where particular people worked. Data can have value without being appropriate to share freely.

#### Page 5: Critical and sensitive information

**Critical** information is important to an operation. Losing accurate device settings could prevent the gateway from working.

**Sensitive** information needs protection because exposure or misuse could harm someone or an organization. Fingerprints and account credentials are examples.

Information can be both critical and sensitive. Its importance depends on how it is used and what harm could result if it is exposed, changed, or unavailable.

> **Finch:** "A public instruction sheet may not be secret, but I'd still miss it if it were the only guide to repairing the gateway."
>
> **Mara:** "Exactly. Consider how the information is used."

#### Page 6: Confidentiality, integrity, and availability

The **CIA triad** describes three important security goals:

- **Confidentiality:** Information is available only to people or systems authorized to access it.
- **Integrity:** Information remains accurate and protected against unauthorized changes.
- **Availability:** Information and systems are accessible when authorized users need them.

For example, gateway records need confidentiality when they contain account details, integrity so settings are accurate, and availability so authorized staff can use them.

One incident can affect more than one goal.

### Guided practice: Classify one asset

Finch presents a practice asset:

```text
ASSET CARD
Name: Maintenance Visitor Log
Contents:
- Visitor name
- Organization
- Arrival time
- Employee contacted
Purpose: Track who entered the maintenance area
```

The player selects every applicable label: **public**, **sensitive**, **operationally important**, and **potentially identifying**.

**Correct selection:** sensitive and potentially identifying.

The player then identifies the primary confidentiality concern: unauthorized people could learn who visited the facility and when.

Feedback explains that each field may seem ordinary alone, but the visitor name combined with a time, organization, and employee contact can reveal more. The player is not asked to classify the full asset inventory yet. Keyboard selection, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Review the gateway's assets

Finch displays fictional inventory cards and incident descriptions. The player reviews them before the gateway is restored.

#### Part 1: Classify the assets

Each asset card includes enough context to support a judgment. The player selects every applicable label: **public**, **sensitive**, **operationally important**, and **potentially identifying**.

| Asset | Expected labels and reasoning |
|---|---|
| Account credentials | Sensitive; exposure could enable unauthorized access |
| Public training guide that is the only guide to repairing the gateway | Public and operationally important |
| Gateway device telemetry | Operationally important because it helps monitor equipment |
| Biometric archive | Sensitive and potentially identifying |
| Maintenance report linked to employee names and locations | Potentially identifying when records are combined; may also be operationally important |

The game accepts equivalent combinations when the player can justify them. It does not treat **public** as meaning “never important.” Correct selections remain in place; incorrect selections remain editable.

#### Part 2: Identify the security goal

The player matches each scenario to its **primary** concern:

1. Someone reads a private account record without permission. **Confidentiality.**
2. Someone changes a gateway setting without authorization. **Integrity.**
3. Authorized staff cannot reach the gateway because it is offline. **Availability.**

Feedback notes that real incidents can affect multiple goals. These answers are design notes; the player sees the scenarios and choices, not the answers.

#### Part 3: Consider why an asset might be targeted

The player matches fictional scenarios to possible motives:

| Scenario | Possible motive |
|---|---|
| Steal account records to sell | Money |
| Prevent staff from using the gateway | Disruption |
| Obtain credentials to reach another system | Access |
| Copy design records for a competing organization | Espionage |
| Expose private records to damage a reputation | Embarrassment |

The player is identifying a *possible* motive from each scenario, not determining who attacked the Safehouse. These are design notes; the player sees the scenarios and choices, not the answers.

### Feedback and hints

Correct responses are marked **Correct**. Other responses are marked **Try again** and remain editable. Finch explains the idea that needs another look without completing the checkpoint for the player.

The player can return to the lesson pages. Hints and retries are unlimited and penalty-free.

**Asset classification**

1. “Ask what harm could result if the asset were exposed, changed, or unavailable.”
2. “Public describes who may see an asset, not whether it is important.”
3. “A visitor name alone may reveal less than the same name combined with a time, location, and employee contact.”

**Security goals**

1. “Is the problem disclosure, unauthorized change, or loss of access?”
2. “Compare who can see the information, whether it remains accurate, and whether it is available.”
3. “If the only repair guide is unavailable, which goal is affected even though nothing was stolen?”

**Possible motives**

1. “Think about what the person gains from the action.”
2. “Money, disruption, access, espionage, and embarrassment are different goals.”
3. “If a competitor obtains internal plans, which motive fits better than selling a password list?”

### Completion and story clue

The player completes the security review. Finch's inventory now marks the reviewed asset groups, while the gateway remains offline.

One metadata entry stands out:

```text
ASSET: SUBJECT-BIOMETRIC-ARCHIVE
CLASSIFICATION: RESTRICTED
RELATED ROLE: RESEARCH-OBSERVATION
```

The player can see only the inventory entry, not the protected biometric records themselves. No protected record is opened or displayed during the lesson.

> **Finch:** "A biometric archive? And a role called Research Observation?"
>
> **Mara:** "Old research media, mislabeled by the archive system. It has nothing to do with the gateway."
>
> **Finch:** "Perhaps. I'll record the entry without opening the restricted material."

Finch adds the inventory entry and Mara's explanation to **Unresolved Records**, clearly labeling her explanation as unverified. The player then moves on to Lesson 2.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Asset cards and labels support keyboard selection.
- Multi-select controls announce the number of selected labels.
- Screen readers receive the complete asset description, available labels, and current selections.
- **Correct** and **Try again** use text rather than color alone.
- The restricted biometric entry exposes only its classification metadata; no protected record content is available visually or through accessibility output.

## Lesson 2: Confidentiality, People, and Physical Security

### Opening

Finch examines a recovered gateway access record. It shows that a legitimate employee credential was used, but the record does not show how the person obtained it.

> **Mara:** "Echo must have stolen the credential remotely."
>
> **Finch:** "Possibly. But I've also found a door record from near the security office. We should look at both."

The records were saved before the gateway went offline. The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All incidents, systems, and records are fictional.

#### Page 1: Confidentiality

**Confidentiality** means keeping information accessible only to authorized people and systems.

Someone might try to obtain information through a network, a deceptive message, or physical access. Protecting confidentiality can involve both technical controls and careful human decisions.

#### Page 2: Observing communications

- **Snooping** means looking at information without authorization.
- **Eavesdropping** means listening to or observing a communication.
- **Wiretapping** involves intercepting a communication.
- A **protocol analyzer** is a tool that examines network traffic. It can be useful for authorized troubleshooting, but traffic can also be inspected without permission.

Encrypting network traffic helps protect its contents from someone observing the connection. For example, HTTPS protects information in transit when the connection is properly established.

Encryption does not replace checking that the destination is trustworthy.

#### Page 3: Social engineering

**Social engineering** is an attempt to influence someone into sharing information or taking an unsafe action.

Examples include:

- A caller pretending to be support and asking for a password.
- A message pretending to come from a manager and demanding an urgent token.
- Someone inventing an emergency to discourage the recipient from checking their identity.

A person can verify a request through a separate, trusted contact method rather than using contact details supplied in a suspicious message.

> **Finch:** "If someone says they're me, ask them a question only I would answer."
>
> **Mara:** "And verify through an established channel. A convincing voice alone isn't proof."

#### Page 4: Phishing and impersonation

**Phishing** uses deceptive messages to persuade someone to share information or take an unsafe action.

- **Spear phishing** targets a particular person or group.
- **Whaling** targets senior leaders or other high-profile people.

An address or phone number can be **spoofed**, making a message or call appear to come from someone else. The displayed sender alone is not proof of identity.

Do not share passwords or authentication codes because a message demands them. Preserve suspicious messages and report or verify them through an appropriate trusted channel.

#### Page 5: Protecting information in physical spaces

- **Shoulder surfing:** Watching someone enter or view private information. Repositioning a screen or using a privacy screen can help.
- **Dumpster diving:** Looking through discarded materials for useful information. Secure disposal and shredding can reduce exposure.
- **Hardware theft:** Removing equipment that may contain information or be needed for operations.
- **Hardware damage:** Damaging equipment can interrupt access to systems or information.

Locked rooms, access badges, visitor checks, and secured equipment can help protect a physical area. A badge record shows that a credential was used; it does not automatically prove who used it.

### Guided practice: Name the human or physical threat

Finch presents three short practice cards:

1. A message claims to be from Mara and urgently asks for a sign-in code.
2. A visitor stands where they can watch an employee type a PIN.
3. A discarded maintenance sheet shows part of a gateway configuration.

The player selects **phishing**, **shoulder surfing**, or **dumpster diving** for each card, then chooses one appropriate response:

- Verify the request through an established channel.
- Move the screen or use a privacy screen.
- Use secure disposal or shredding.

Feedback explains the relationship between each deceptive or physical method and its defense. The practice does not ask the player to open links, contact real people, or search real garbage. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Investigate the security incidents

The player reviews fictional incident cards from the security area. For each card, they identify the concern and an appropriate response.

| Incident | Concern | Appropriate response |
|---|---|---|
| Captured network traffic reveals credentials | Unauthorized observation or interception | Protect traffic with appropriate encryption |
| Someone watches an employee enter a PIN | Shoulder surfing | Reposition the terminal or use a privacy screen |
| A caller impersonates support and asks for a password | Social engineering | Refuse to share the password and verify through a trusted channel |
| An email imitates a known sender and requests a token | Phishing | Preserve the message and verify the request separately |
| Discarded documents contain access information | Dumpster diving | Shred and securely dispose of sensitive materials |
| A gateway component is removed from its cabinet | Hardware theft | Secure the room and equipment |
| A damaged cable and spilled liquid interrupt gateway access | Hardware damage | Protect equipment and restore a safe operating environment |

The answers above are design notes; the player sees the incident cards and choices, not the answers. The player identifies a concern first and then selects a response, so partial progress remains visible.

#### Secure the security area

The player also selects appropriate protections:

- Lock the security room.
- Require authorized access badges.
- Verify and challenge visitors appropriately.
- Secure gateway equipment inside its cabinet.

These measures reduce risk but do not prove that every person using a badge is its owner.

#### Simulated evidence handling

Suspicious messages and files are inert text inside the game. Selecting **Preserve evidence** copies the fictional message into the restricted evidence area without opening links, running attachments, or contacting real people. The card explains which header fields are visible and which details are unreliable. The player does not perform social engineering or inspect real discarded materials.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch explains the concern that needs another look without supplying the complete answer.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

**Observing communications**

1. “Was the information viewed, overheard, intercepted, or taken from a physical location?”
2. “A screen watcher, a network observer, and discarded paper expose information in different ways.”
3. “If someone reads network traffic without permission, what protects the contents of that traffic?”

**Social engineering and phishing**

1. “Is someone trying to persuade the recipient to share information or take an unsafe action?”
2. “Check the request through a channel you already trust instead of using details supplied by the message.”
3. “A sender name that looks familiar is not enough when an unexpected request asks for a password or code.”

**Physical protections**

1. “Think about who can enter the area, see the screen, remove equipment, or recover discarded information.”
2. “Use layered protection: locks, badges, visitor checks, screen privacy, secure equipment, and secure disposal.”
3. “A badge record shows which authorization was used. What else would you need before deciding who used it?”

### Completion and story clue

Finch compares the recovered gateway and door records. Both timestamps use the same system clock:

```text
02:08  SECURITY AREA DOOR: OPENED
       AUTHORIZATION USED: M.VALE

02:10  EMPLOYEE CREDENTIAL: USED
```

The records show the door opened before the employee credential was used. They do not establish who held the badge or whether the same person used the credential.

> **Mara:** "My badge was cloned. Echo had access to identity records."
>
> **Finch:** "Possible. The record proves the authorization was used, not who was holding it."

Finch adds the records and Mara's explanation to **Unresolved Records**, keeping the observation separate from her unverified interpretation.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Incident cards present their complete text and do not require opening a simulated link or attachment.
- The concern and response selectors are keyboard operable.
- Screen readers announce the incident, selected concern, selected response, and **Correct** or **Try again** status.
- Sender names, warnings, and evidence status use text instead of color or hover-only details.
- The physical-security diagram has a text description of entrances, cabinets, screens, and disposal points.
- Any audio alert has a visual caption and text equivalent.

## Lesson 3: Integrity, Availability, and Service Disruption

### Opening

Finch examines recovered gateway records in a simulated recovery panel. The gateway itself remains offline.

> **Finch:** "One record says a device is working. Another says it was disconnected. Also, several legitimate connection attempts failed."
>
> **Mara:** "The records are damaged. Bypass the warnings and bring the gateway online."
>
> **Finch:** "I'd rather understand the warnings before we ignore them."

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All incidents, systems, and records are fictional.

#### Page 1: Integrity

**Integrity** means information remains accurate, consistent, and protected against unauthorized changes.

For example, if a device record is changed to say a security camera is working when it is actually disconnected, someone could make a decision using incorrect information.

A change is not automatically unauthorized just because it happened. The player should check what changed, who or what had access, and what the available records actually establish.

#### Page 2: Interference with information

- **Unauthorized alteration:** Information is changed without permission.
- **Impersonation or spoofing:** Someone or something presents itself as a different trusted identity.
- **On-path attack:** An unauthorized party is positioned between communicating systems and can observe or alter information passing through.
- **Replay attack:** A previously captured message is sent again to try to produce an unauthorized result.

Protective measures depend on the system, but can include verified identities, protected connections, and checks that reject reused or altered messages.

#### Page 3: Insider activity

An **insider** is someone with legitimate access to an organization or system. Insider activity can be accidental or intentional.

A valid account appearing in a log shows that the account was used. It does not automatically establish who controlled it or whether the action was authorized.

> **Finch:** "So even if a record names an account, we should still check what actually happened."
>
> **Mara:** "And avoid accusing someone without evidence."

#### Page 4: Availability

**Availability** means authorized people and systems can access what they need when they need it.

Availability can be affected by:

- Equipment damage or theft.
- Power failures.
- Environmental problems.
- Network interference.
- A service receiving more requests than it can handle.

A **denial-of-service (DoS)** attack attempts to make a service unavailable. A **distributed denial-of-service (DDoS)** attack uses multiple sources.

Wireless interference can interrupt service, but interference alone does not prove that someone deliberately jammed the signal.

#### Page 5: Protecting important systems

A **UPS**, or uninterruptible power supply, provides temporary power when the normal power source fails. It can give essential equipment time to continue operating or shut down safely. It does not supply power indefinitely.

Other protections can include securing equipment, monitoring system health, preserving configuration records, and investigating suspicious network paths.

### Guided practice: Distinguish three integrity attacks

Finch presents three practice cards:

1. A previously captured sign-in message is sent again later.
2. A rogue device sits between two systems and changes traffic.
3. A device record is changed without permission.

The player matches them to **replay attack**, **on-path attack**, and **unauthorized alteration**. A second step asks which detail helped identify each:

- The message was reused.
- The attacker was positioned between the systems.
- The stored record no longer matched its authorized value.

Feedback explains that these incidents can overlap in a real investigation, but each practice card has one primary description. No real network traffic is generated or intercepted. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Diagnose the incidents

The player reviews fictional incident cards in the recovery panel. For each card, the player first chooses the primary security concern and then the most specific incident type.

#### Part 1: Identify the concern

| Incident | Expected identification |
|---|---|
| A device record was changed without authorization | Unauthorized alteration; integrity |
| A captured authentication message is sent again later | Replay attack; integrity and access risk |
| A rogue device between two systems changes traffic | On-path attack; integrity and confidentiality risk |
| A forged monitoring message claims to come from a trusted server | Impersonation or spoofing; integrity |
| A service is overwhelmed by fake requests from one source | DoS; availability |
| A service is overwhelmed by fake requests from many sources | DDoS; availability |
| A wireless link is disrupted by unexplained interference | Availability problem; intent is not yet established |
| Essential equipment shuts down during a power failure | Availability problem; a UPS could help |
| An employee account changes a configuration outside its approved duties | Potential insider alteration; investigate before identifying the person responsible |

These are design notes. The player sees the incident descriptions and choices, not the answers. The wireless-interference card deliberately accepts “intent not established” because the scenario does not prove deliberate jamming.

#### Part 2: Protect the recovery environment

The recovery panel presents four protections:

1. **Enable existing integrity checks** so altered configurations and invalid records are detected.
2. **Isolate the suspicious network path** without disconnecting the entire gateway or the protected evidence store.
3. **Connect essential security equipment to the UPS** so a power interruption does not immediately stop it.
4. **Preserve the original incident records** before changing any settings.

Each choice includes a preview of the affected systems. For example, isolating the suspicious path shows the archive and recovery service reconnecting through the approved path while the rest of the gateway remains offline.

The player can inspect, apply, and undo each choice. All equipment and actions are fictional.

### Feedback and hints

Correct responses are marked **Correct**; other choices are marked **Try again** and remain editable. Finch identifies the relevant record or concept without completing the task.

The player can revisit the lesson pages. Hints and retries are unlimited and penalty-free.

**Integrity and information interference**

1. “Ask whether information was changed, replayed, spoofed, or observed through an unauthorized position.”
2. “A replay reuses something old; an on-path attacker sits between systems; alteration changes stored information.”
3. “If a valid-looking message is reused later to trigger a new action, which integrity attack does that describe?”

**Availability**

1. “Is the system unreachable because it is overwhelmed, unsupported by power, physically damaged, or experiencing interference?”
2. “Check whether the evidence establishes one request source, many sources, or no deliberate source at all.”
3. “If one server is flooded from many infected systems, what makes the attack distributed?”

**Insider activity and evidence**

1. “Does the record show that an account was used, or that a specific person performed the action?”
2. “Compare the action with the account’s approved duties and with other records.”
3. “If a badge or account appears in a log, what would you still need before accusing its owner?”

### Completion and story clue

The recovery panel displays two preserved versions of a gateway configuration record:

```text
VERSION LABELED ORIGINAL:
HABITAT ACCESS = DENIED

VERSION LABELED MODIFIED:
HABITAT ACCESS = M.VALE
```

The labels describe how the recovered records were filed; they do not yet prove who made the change or why. The player keeps both versions.

> **Mara:** "Echo changed it after stealing my credentials."
>
> **Finch:** "That's possible. We should preserve both versions until we can verify the change."

Finch adds both records and Mara's explanation to **Unresolved Records**, separating the evidence from her unverified claim. The gateway remains offline, and the player moves on to Lesson 4.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Incident cards and protection controls are keyboard operable.
- Each card presents its full text and does not require a graph or animation to understand the incident.
- Concern and incident-type selectors announce their current values.
- Screen readers receive previews of affected systems and the state of every protection before it is applied.
- **DoS**, **DDoS**, **on-path**, **replay**, and interference states use text, not color or line style alone.
- Any network-path animation has a static text description and reduced-motion alternative.

## Lesson 4: Malware and Containment

### Opening

Finch examines the separate quarantine system mentioned when the Systems Wing appeared on the map. The security gateway itself remains offline.

> **Finch:** "The quarantine system is still holding several suspicious files. One claims to be a security scanner."
>
> **Mara:** "Then delete them and move on."
>
> **Finch:** "I'd like to know what they were doing first—and preserve anything that might help us understand how they arrived."

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All incidents, systems, and records are fictional.

#### Page 1: Malware, vulnerabilities, and exploits

**Malware** is software designed to cause harm or perform unwanted actions, such as stealing information, disrupting a system, or changing files.

A **vulnerability** is a weakness that could be misused. An **exploit** takes advantage of a vulnerability. An update or **patch** can correct a known weakness, although updates alone do not prevent every attack.

For example, a fictional application might have a weakness that a security update fixes. Applying the verified update reduces the opportunity to misuse that weakness.

#### Page 2: Common malware types

| Type | General behavior |
|---|---|
| **Virus** | Attaches itself to another file or program and spreads when the infected host is used |
| **Worm** | Can spread between systems without needing someone to open each new copy |
| **Trojan** | Disguises itself as something useful or trustworthy |
| **Adware** | Displays unwanted advertising |
| **Spyware** | Secretly gathers information |
| **Ransomware** | Restricts access to information or systems and demands payment |
| **Rootkit** | Hides activity or provides concealed access, making detection harder |
| **Backdoor** | Provides a way around normal access controls |
| **Keylogger** | Records keystrokes, potentially exposing sensitive information |

These categories can overlap. A single malicious program may use more than one technique.

#### Page 3: How malware can spread

Malware can be delivered through deceptive messages, shared files, removable media, or network connections. An infected file may appear useful or familiar.

**Spam** is unwanted bulk messaging. Not every spam message contains malware, but some may carry deceptive links or attachments.

**Password cracking** refers to attempts to discover a password. Strong, unique passwords and multifactor authentication help reduce the risk of unauthorized access; no guessing activity is performed in this lesson.

#### Page 4: Detect, contain, and recover

Antimalware tools can compare files with known **signatures** or use other methods to identify suspicious behavior. Updated signatures help tools recognize known threats, but detection is not perfect.

A safe response may include:

1. **Contain:** Isolate the affected device or file to limit spread.
2. **Preserve:** Keep relevant suspicious messages and records for investigation.
3. **Update and patch:** Use trusted updates to address known weaknesses.
4. **Recover:** Restore from a suitable verified clean backup and check the result.

**Quarantine** restricts a suspicious file so it cannot be used normally while it is reviewed. A backup should be checked before restoration; merely calling it a backup does not prove it is clean.

> **Finch:** "Contain first, investigate carefully, and don't immediately trust the first copy labeled 'backup.'"
>
> **Mara:** "And get the system working again."

### Guided practice: Respond to one suspicious sample

Finch presents **WorkshopScanner.exe**, which claims to be a security tool but opens a hidden route into the system when launched.

The player:

1. Classifies the sample as a **Trojan** and notes the possible **backdoor** behavior.
2. Isolates the sample instead of running it.
3. Preserves the related message as evidence.
4. Chooses a verified clean backup only after checking its record.

Feedback explains that one file can have more than one behavior, but the disguise is the primary clue for a Trojan. The player does not execute the sample. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Contain the simulated incident

The player reviews fictional sample cards and chooses how to respond. No real malware, password cracking, external network activity, ransom payment, or attachment execution is involved.

#### Part 1: Identify the samples

| Fictional sample behavior | Best match |
|---|---|
| Attaches to a document-like executable and spreads when the infected file is opened | Virus |
| Spreads between systems through a recovery share without a person opening each copy | Worm |
| Pretends to be a security scanner while performing an unwanted hidden action | Trojan |
| Displays repeated unwanted advertising | Adware |
| Secretly reports browsing activity to another party | Spyware |
| Restricts access to files and demands payment | Ransomware |
| Conceals activity from ordinary system tools | Rootkit |
| Provides a hidden way around normal authentication | Backdoor |
| Secretly records typed information | Keylogger |

The player identifies the behavior shown rather than assuming a sample belongs to only one category. Overlapping behavior is accepted when the primary behavior matches the evidence.

The player also identifies the **primary** security concern in each scenario. For example, stolen typed information threatens confidentiality, while inaccessible files threaten availability. Feedback explains that an incident can affect more than one goal.

These answers are design notes; the player sees the sample descriptions and choices, not the answers.

#### Part 2: Contain the spread

The player:

1. Isolates the simulated infected carrier.
2. Restricts the affected recovery share and removable-media connection to prevent further spread.
3. Keeps the suspicious file in quarantine.
4. Preserves the suspicious message and relevant records for review.

The player does not open the suspicious attachment or follow its link.

#### Part 3: Prepare recovery

The player reviews fictional maintenance records and:

1. Uses a trusted signature-update package.
2. Applies the relevant verified patch.
3. Selects a backup that has been checked and identified as clean.
4. Restores the affected simulated files and checks the result.
5. Rejects the simulated ransom request and its payment link.

The update package is already available in the recovery environment; the offline gateway does not need to be brought online to obtain it. The player restores the affected files, not the gateway itself.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch points to the relevant behavior or recovery record without supplying the complete answer.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

**Malware classification**

1. “Look at what the sample does, rather than relying on its name.”
2. “A virus attaches to a host; a worm spreads by itself; a Trojan disguises itself; a backdoor bypasses normal access.”
3. “If a file pretends to be a helpful scanner but performs a hidden action, which category describes the disguise?”

**Containment**

1. “Stop further spread before investigating the contents.”
2. “Consider shared storage, removable media, running processes, and the original evidence.”
3. “If the infection spreads through a shared folder, what should be restricted first?”

**Recovery**

1. “Never trust a backup only because its label says clean.”
2. “Use trusted updates and compare the recovery result with the intended system state.”
3. “If the backup contains the same suspicious file, would restoring it solve the incident?”

### Completion and story clue

The simulated incident is contained. The suspicious carrier remains isolated, the affected files are restored from the checked backup, and the gateway remains offline.

Finch finds a quarantine record:

```text
FILE: ObservationArchive.exe
QUARANTINED BY: E.C.H.O_Thread_01
```

> **Mara:** "Echo planted it."
>
> **Finch:** "The record says Echo quarantined it. That is not normally how sabotage works."

The record does not establish who created the file or why it was quarantined. Finch adds it and Mara's interpretation to **Unresolved Records**, keeping the record separate from her claim.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Sample cards expose their complete text and never require executing a file to reveal behavior.
- Malware categories and security concerns use text labels and keyboard controls.
- Screen readers announce the selected sample, category, concern, and **Correct** or **Try again** status.
- The containment sequence is presented as an ordered checklist with explicit current and completed states.
- Backup status, quarantine state, and recovery progress do not rely on color alone.
- Any simulated alert sound has a visual message and caption.

## Lesson 5: Authentication and Single Sign-On

### Opening

Finch examines the gateway's simulated authentication module in the recovery environment. The gateway itself remains offline.

> **Finch:** "The module is asking for more than a password before it will allow recovery work."
>
> **Mara:** "We're wasting time. Disable the second check temporarily."
>
> **Finch:** "Or we could find out why it's there before turning it off."

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. The systems and credentials are fictional.

#### Page 1: Authentication and authorization

**Authentication** checks an identity claim: "Are you the person or system you say you are?"

**Authorization** determines what an authenticated person or system is allowed to do.

For example, signing in may establish which account is being used, while its permissions determine whether it can view a record or change a setting. A successful sign-in does not automatically grant access to everything.

#### Page 2: Authentication factors

Authentication can use different kinds of evidence:

- **Something you know:** A password, PIN, or security question.
- **Something you have:** A hardware token, software token, or smart card.
- **Something you are:** A fingerprint, facial recognition, or another biometric characteristic.
- **Somewhere you are:** An approved location or network condition.

**Multifactor authentication**, or **MFA**, combines factors from different categories. A password and a hardware token can provide two factors. Two passwords are still both things you know, so they are not two different factors.

A location or device check can add a security condition, but its presence alone does not necessarily make a sign-in multifactor or prove a person's identity.

#### Page 3: Tokens and one-time codes

A **hardware token** is a physical device used in an authentication process. A **software token** can provide authentication through an application.

A **one-time password**, or one-time code, is intended for a single use and may expire after a short period. A code generated by a token is part of that token-based check; it should not automatically be counted as an additional independent factor.

Never share a real password or one-time code in the game. The checkpoint uses fictional credentials and simulated controls.

#### Page 4: Biometrics and location

**Biometrics** use physical or behavioral characteristics, such as a fingerprint, face, or retina, as part of an identity check.

Biometrics are sensitive information. They are not passwords that can simply be changed if exposed, and no biometric check is perfect.

A system can also check whether a sign-in comes from an approved location. Location can support an access decision, but it does not prove a person's identity by itself.

#### Page 5: Single sign-on

**Single sign-on (SSO)** lets a user authenticate through one sign-in system and then access multiple connected applications, subject to their permissions.

SSO can make sign-in more convenient, but access to the central account can affect several applications. Strong authentication and appropriate permissions remain important.

**SSO and MFA are not opposites.** A user can complete MFA when signing in through SSO and then access approved applications without entering the same credentials for each one.

### Guided practice: Identify the factors

Finch presents four sign-in descriptions:

1. A password and a smart card.
2. Two different passwords.
3. A fingerprint and a facial scan.
4. A hardware token and the one-time code displayed by that token.

The player labels each item by category and decides whether the combination is genuinely multifactor.

**Reasoning feedback:**

- Password + smart card uses knowledge and possession, so the categories differ.
- Two passwords are both knowledge.
- A fingerprint and a facial scan are both biometric characteristics, not two separate categories merely because two samples are taken.
- The token and its generated code belong to the same possession-based check.

The practice reinforces that MFA requires different categories, not simply two prompts. No real credential or biometric is collected. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Restore secure authentication

The player works in a fictional recovery simulator with an approved training account. The security gateway remains offline.

#### Part 1: Identify the factors

The player reviews fictional sign-in combinations:

| Combination | Expected identification |
|---|---|
| Password and hardware token | Two different categories: knowledge and possession |
| Password and PIN | Two things the user knows; not two different categories |
| Hardware token and its one-time code | The code is part of the token check, not automatically a separate factor |
| Password and fingerprint | Knowledge and biometric categories |
| Fingerprint and facial scan | Two biometric samples from the same broad category |
| Password, hardware token, and approved location | Multiple categories including a location condition |

These are design notes. The player sees the combinations and choices, not the answers.

#### Part 2: Sign in safely

The simulated recovery system requires:

1. A fictional password as **something you know**.
2. An approved hardware token as **something you have**.
3. A one-time code generated by that token before it expires.
4. An approved Workshop location as an additional access condition.

The player uses fictional credentials supplied inside the simulation. No real password, authentication code, fingerprint, or location is collected.

Mara again suggests disabling MFA. The player keeps it enabled and completes the approved sign-in. Attempting to disable MFA produces a policy warning and does not progress the checkpoint.

If the one-time code expires, the player requests a new code from the approved simulated token rather than reusing the expired one. Repeated failed sign-ins show a clear error and temporary simulated lockout; no real account or lockout is affected.

#### Part 3: Use single sign-on

After authentication, the player opens two approved recovery applications through SSO. They do not have to repeat the same sign-in for each application, but each application still checks what the account is authorized to access.

The player identifies that **SSO provided shared sign-in**, while **MFA checked multiple factors**. Neither grants permission to open the protected evidence store or bypass application permissions.

### Feedback and hints

Correct responses are marked **Correct**; other choices are marked **Try again** and remain editable. Finch explains which factor or concept needs another look without completing the task.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

**Authentication factors**

1. “Classify each item as something you know, have, or are.”
2. “Count categories, not prompts. Two passwords remain one category.”
3. “Does a code generated by a token prove something different from possession of the token itself?”

**Safe sign-in**

1. “Keep the required factors and use the approved token and location.”
2. “A code is intended for one use and a short time.”
3. “If a code expires, what should happen instead of entering the old one again?”

**SSO and authorization**

1. “SSO changes how many times you sign in, not what the account may access.”
2. “Authentication identifies the account; authorization limits the actions.”
3. “Would signing in once to several apps give a user permission to open a protected store?”

### Completion and story clue

The simulated authentication succeeds, and the two recovery applications become available. The gateway remains offline.

The recovery module briefly displays a legacy mapping associated with the player's sign-in:

```text
LEGACY PROFILE: E.C.H.O_Thread_01
LOCAL AUTHENTICATION: ACCEPTED
```

> **Mara:** "A stale mapping. Echo corrupted the identity records."
>
> **Finch:** "That is the second time an Echo record has appeared because of something you did."

The display is recorded evidence, but it does not yet explain the player's identity or prove why the mapping appeared. Finch adds it and Mara's explanation to **Unresolved Records**.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Factor cards and sign-in controls are keyboard operable.
- Simulated credential fields support paste and a labeled show/hide control.
- Screen readers announce the current factor step, code-expiration state, sign-in result, and simulated lockout.
- Authentication failures use text and do not depend on sound, vibration, or color.
- The factor table associates each item with its category and MFA result.
- No real biometric, password, one-time code, location, or account data is requested or stored.

## Lesson 6: Authorization and Access Control

### Opening

The recovery applications now recognize the player's approved sign-in. Finch checks what that account can access.

> **Mara:** "Give the player full administrator access. It will be faster."
>
> **Finch:** "It would also grant access to systems and records we don't need for this repair."
>
> **Mara:** "Then decide what is needed and get on with it."

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. The systems, policies, and accounts are fictional.

#### Page 1: Permissions and least privilege

**Authorization** determines what an authenticated account is allowed to do. A **permission** permits a particular action, such as reading a record or changing a setting.

**Least privilege** means giving an account only the access it needs for its task, for only as long as it needs it.

For example, a diagnostic unit that submits readings does not need permission to change user accounts or open personnel records.

#### Page 2: Standard and administrator accounts

A **standard account** has limited permissions. An **administrator account** can manage more system settings and accounts.

Not every task needs administrator access. Even administrators should use elevated permissions only when needed and follow the system's access policy.

#### Page 3: Access control models

Systems can use different approaches to deciding who gets access:

- **Mandatory access control (MAC):** Access depends on centrally managed rules and classifications. This is different from the **MAC address** introduced in Chapter 4.
- **Discretionary access control (DAC):** A resource's owner can decide who receives access, within the system's rules.
- **Role-based access control (RBAC):** Permissions are assigned to roles, and accounts receive access through their roles.
- **Rule-based access control:** Access depends on conditions, such as which terminal is being used or what time access is requested.

A system can combine approaches. A role might grant access only when a separate location rule is also satisfied.

#### Page 4: Classifications and access lists

A **classification** describes how information should be protected, such as public or restricted.

An **access control list**, or **ACL**, lists which accounts or groups can perform particular actions on a resource. An owner may be able to manage an ACL under the system's policy.

The player should check both **who** has access and **what actions** they can perform.

### Guided practice: Choose the access approach

Finch presents one short policy:

> A file owner may grant a colleague read access under the system's existing rules.

The player identifies this as **discretionary access control** and explains that the owner can decide within limits rather than changing the system-wide classification policy.

A second example combines two conditions:

> Recovery staff may change gateway settings only through the approved recovery role and only from the Workshop terminal.

The player identifies **role-based access control** for the staff permissions and **rule-based access control** for the Workshop-only condition.

Feedback explains that systems commonly combine models. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Assign recovery access

The player reviews fictional access requests and policy cards in the recovery environment. The gateway remains offline.

#### Part 1: Apply least privilege

The player assigns only the access each identity needs:

| Identity | Approved access | Explicitly denied |
|---|---|---|
| Player | Gateway recovery and approved device records | Protected evidence store and account management |
| Finch | Monitoring only | Changing access settings |
| Diagnostic unit | Submit readings only | Reading restricted records |
| Mara | Review approved gateway records under policy | Protected evidence store, access-policy changes, and user/account management |
| External support | Temporary, limited access after approval | Standing access and unrestricted records |
| Everyone above | Shared recovery resources as explicitly granted | Access to the protected evidence store |

The player configures an access list rather than choosing a single role for everyone. The player’s recovery role provides scoped access, not full administrator authority. Attempting to grant full administrator access produces a policy warning and leaves the broader permissions unapplied.

The player does not grant full administrator access simply because it would be convenient.

#### Part 2: Identify the access approach

The player matches fictional policy examples:

| Policy example | Approach |
|---|---|
| A central policy restricts records based on classification | Mandatory access control |
| A file owner grants a colleague permission under the system's rules | Discretionary access control |
| Recovery staff receive permissions through a recovery role | Role-based access control |
| Recovery access is allowed only from the Workshop terminal | Rule-based access control |

These are design notes. The player sees the examples and choices, not the answers.

#### Part 3: Review the rules

The player checks a fictional ACL and confirms that:

- The recovery role can work with approved gateway records.
- Finch can monitor but cannot change access settings.
- The diagnostic unit can submit readings but cannot read restricted records.
- External support receives access only after approval and only for the required time.
- The Workshop-terminal rule applies to recovery access.
- The protected evidence store remains sealed.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch points to the relevant task or policy without supplying the complete answer.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

**Least privilege**

1. “Start with what each identity needs to do, not with the broadest access available.”
2. “List the allowed action and the explicitly denied resource separately.”
3. “Does Finch need to change access settings to monitor the recovery, or only observe it?”

**Access-control models**

1. “Ask whether the control is based on central classifications, owner decisions, assigned roles, or conditions.”
2. “A system can combine a role with a location rule.”
3. “If access is allowed only through the Workshop terminal, which model does that condition illustrate?”

**ACLs and classifications**

1. “Check both who has access and which action they may perform.”
2. “A permitted read does not imply permission to write or manage access.”
3. “If the recovery role can read approved records, does that automatically let it open the protected evidence store?”

### Completion and story clue

The simulated recovery permissions are configured. The gateway remains offline, and the protected evidence store remains sealed.

Finch finds an older role record:

```text
ROLE: RESEARCH-OBSERVATION
MEMBER: M.VALE
CATEGORY: HABITAT
STATUS: ACTIVE UNTIL FACILITY FAILURE
```

> **Mara:** "A retired training role. It should have been removed."
>
> **Finch:** "It was active the night the facility failed."

The role record does not establish what Mara did with the role. Finch adds it and her explanation to **Unresolved Records**, keeping the record separate from her claim.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Access requests, role cards, policy examples, and the ACL are keyboard navigable.
- Tables use labeled row and column headers with each identity and action announced.
- Screen readers announce granted, denied, and pending permissions before the player applies them.
- **Allowed** and **Denied** use text labels rather than color alone.
- The classification and role summaries have text equivalents.
- Protected evidence remains absent from visual and accessibility output unless access is explicitly granted.

## Lesson 7: Accounting and Nonrepudiation

### Opening

Finch brings together the records collected so far. The gateway remains offline, but the recovery environment can display previously saved evidence.

> **Mara:** "Echo altered those records. You can't trust any of them."
>
> **Finch:** "Then let's check what each record actually tells us—and what it doesn't."

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All records and activities are fictional.

#### Page 1: Accounting and logs

In security, **accounting** means recording activity so it can be reviewed later. A log might record an account signing in, a setting changing, or a door opening.

For example, Windows **Event Viewer** can display different kinds of system logs, including Security logs. A log can help answer *what a system recorded*, but an account name alone does not prove which person controlled it.

Logs may be incomplete, inaccurate, or altered. When possible, compare them with other records.

#### Page 2: Other records

An investigation might also use:

- **Browser history:** Can show activity recorded by a browser, but does not by itself prove who used it.
- **Physical access records:** Can show that a badge or authorization was used, but not necessarily who held it.
- **Video:** Can show what a camera captured, but its view may be incomplete and the recording may need verification.
- **Location information:** GPS or cell-network records can help estimate a device's location, but may be imprecise and do not automatically identify its user.
- **Biometric records:** Can support an identity check, but biometric systems can make mistakes and the information is sensitive.

These records should be handled with appropriate privacy protections.

#### Page 3: Nonrepudiation

**Nonrepudiation** means having evidence that makes it harder for someone to deny an action, such as signing or sending a record.

A **digital signature** can help verify that a record was signed with a particular key and has not changed since it was signed. A **receipt** can record that a system accepted or delivered something.

Neither automatically proves every surrounding claim. A key could be used by someone other than its intended owner, and a receipt does not prove that the contents of a file are true.

#### Page 4: Building a timeline

A **timeline** puts events in order. When building one:

1. Record the time and source of each event.
2. Check whether the sources use the same clock or time zone.
3. Keep the original records available.
4. Distinguish what a record shows from what someone thinks it means.
5. Note gaps, contradictions, and signs that a record might have changed.

> **Finch:** "A timeline is a good place to put answers and questions. Preferably in different columns."

### Guided practice: Order a mini timeline

Finch presents three practice events, all using the same simulated clock:

```text
09:06  Gateway service: Unavailable
09:02  Account signed in
09:04  Door record: Opened with M.VALE authorization
```

The player places them in time order, identifies the source of each event, and labels one statement:

> The account was signed in.

**Correct label:** established by the record.

The player also identifies what is not established:

> The account owner personally used the computer.

Feedback explains that ordering events is separate from determining what they prove. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Build the security timeline

The player reviews fictional records in the recovery environment. They do not open the protected evidence store.

The records below use the same simulated system clock. The player can inspect each source before placing its event on the timeline.

#### Available records

**Door record from Lesson 2**

```text
02:08  SECURITY AREA DOOR: OPENED
       AUTHORIZATION USED: M.VALE
```

The record shows which authorization was used, not who held the badge.

**Independent security monitor**

```text
02:11  LOCAL AUDIT POLICY: DISABLED
       ACCOUNT: M.VALE

02:14  HABITAT ACCESS POLICY: CHANGED
       ACCOUNT: M.VALE
       REQUEST ORIGIN: WORKSHOP TERMINAL
```

The independent monitor remained active even though the local audit policy was disabled. The record identifies the account and recorded terminal—not the person controlling them.

**Saved system events**

```text
02:17  EMERGENCY EXITS: OPENED
       ACCOUNT: E.C.H.O_Thread_01

02:19  EVIDENCE STORE: SEALED
       ACCOUNT: E.C.H.O_Thread_01
```

The store remains sealed. These entries do not reveal its contents.

**Signed configuration manifest**

A verified signature shows that the saved manifest has not changed since it was signed with the trusted key. The manifest describes a Habitat access configuration, but the signature does not establish who personally made an earlier change.

**Other evidence cards**

The player also reviews these fictional records:

| Record | What it says | Important limitation |
|---|---|---|
| Browser history | The gateway console page was opened at 02:13 | Does not identify the person using the browser |
| Camera recording | A person was near the security office at 02:07, with their face obscured | Confirms presence but not identity |
| Device location | The recovered device was in the Workshop area at 02:16 | Approximate and does not identify its user |
| Transfer receipt | The archive service accepted a transfer at 02:20 | Confirms the system accepted it, not that its contents are true |

Each card includes the same limitation in accessible text.

#### Player tasks

1. Place the recorded events in time order.
2. Identify the source for each event.
3. Mark what each record establishes and what remains uncertain.
4. Compare the signed manifest with the relevant configuration record.
5. Choose the supported conclusion.

The timeline editor provides five labeled tracks: event time, source, event, what it establishes, and what remains uncertain. The player can reorder events with keyboard controls or selectable move-up and move-down actions.

**Expected conclusion:** The records support that an authenticated internal account changed the access policy through the Workshop terminal. That does not fit an explanation in which all relevant activity occurred only through an external connection. It does **not** prove Mara personally made the change or rule out someone else using her credentials.

The evidence also records actions under `E.C.H.O_Thread_01`, but does not yet explain the player's identity or Echo's motive.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch points to the relevant source or gap without completing the timeline.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

**Ordering and time**

1. “Put the events in order before deciding what they mean.”
2. “Use the recorded time and source for each event; do not infer a time from its place in the story.”
3. “If two records appear out of order, which source gives the actual timestamp?”

**What a record establishes**

1. “Separate what the system recorded from what you think happened.”
2. “Check whether the source identifies an account, a device, a location, or a person.”
3. “A badge record proves an authorization was used. What would it take to show who used it?”

**Nonrepudiation and uncertainty**

1. “A signature can show which key signed a record and whether it changed afterward.”
2. “A valid signature does not prove that every statement in the record is true.”
3. “If a key could have been used by someone else, how strong is the claim that its owner personally acted?”

**Conclusion**

1. “Use only conclusions supported by more than one record.”
2. “Compare the internal terminal activity with the claim that everything happened externally.”
3. “Which conclusion fits the timeline without claiming more than the evidence proves?”

### Completion

The timeline is added to **Unresolved Records**, with sources and uncertainties visible alongside it.

> **Mara:** "Credentials can be stolen. Echo could have used mine."
>
> **Finch:** "That's possible. But the records still show activity through the Workshop terminal. We shouldn't call it an external-only incident."

The player moves on to Lesson 8. The gateway remains offline, and the protected evidence store remains sealed.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Timeline records and evidence cards expose complete text without requiring image interpretation.
- Events can be ordered with keyboard-accessible move-up and move-down controls.
- Screen readers announce each event’s time, source, evidence status, and position in the timeline.
- The five timeline fields retain readable labels.
- **Established**, **uncertain**, and **unsupported** use text labels rather than color alone.
- Camera and location evidence include text descriptions of what they do and do not establish.
- Protected evidence content remains unavailable unless access is explicitly granted.

## Lesson 8: Privacy, Consent, and Secure Sharing

### Opening

Finch prepares to preserve the security records collected during Chapter 5. Some recovered records contain personal information.

> **Mara:** "Upload the entire archive and make a permanent public link. We can sort out permissions later."
>
> **Finch:** "That would expose information to anyone with the link. Let's work out what actually needs to be shared."

These are records already available in the recovery environment—not the contents of the sealed evidence store. The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All records and activities are fictional.

#### Page 1: Privacy and personal information

**Privacy** concerns how information about people is collected, used, stored, and shared.

**Personally identifiable information (PII)** is information that can identify someone. A name, address, fingerprint, or account identifier may identify a person. Other details can become identifying when combined.

Personal information may need protection even when it does not seem sensitive on its own.

#### Page 2: Purpose and consent

Before collecting or sharing information, consider:

- Why is it needed?
- Is all of it necessary for that purpose?
- Who is authorized to receive it?
- How long does it need to be kept?

**Consent** is one way a person may agree to a particular use of their information. Permission for one purpose does not automatically mean permission for every other purpose.

Privacy requirements vary by location and situation. Examples include the **U.S. Privacy Act**, **California Consumer Privacy Act (CCPA)**, and **General Data Protection Regulation (GDPR)**. They have different scopes and requirements; this lesson introduces them rather than providing legal advice.

#### Page 3: Privacy in everyday communication

Social-networking posts, emails, and instant messages can reveal information about people, locations, and activities. Before sharing, check the intended audience and whether the information needs to be included.

Even a message sent to a limited audience can be copied or forwarded. Avoid placing private information in a message simply because the recipient seems familiar.

#### Page 4: Secure sharing

A safer sharing process can include:

- Sharing only what is needed.
- Restricting access to authorized recipients.
- Requiring MFA.
- Using an expiring link instead of a permanent public link.
- Using current, trusted software.
- Protecting information with encryption in transit and at rest.
- Sharing a package password through a separate trusted channel.

A private connection can reduce exposure, but no network should be assumed safe without appropriate protections. Avoid using an untrusted public Wi-Fi connection for sensitive recovery work when a suitable private connection is available.

#### Page 5: Cookies and consent

A **cookie** is a small piece of information a website stores in a browser.

- A **first-party cookie** is associated with the site the person is visiting.
- A **third-party cookie** is associated with another party whose content or service is used by the site.

Some cookies support essential site functions; others may support analytics or advertising. A person should be able to review the available choices rather than assuming every cookie is necessary.

### Guided practice: Decide what the recipient needs

The evidence package will go to an authorized incident auditor. Its purpose is to show the gateway timeline and relevant configuration changes.

The player reviews these fields:

| Field | Needed for this package? |
|---|---|
| Event timestamps | Yes |
| Account identifiers that explain the recorded activity | Yes, with restricted access |
| Configuration filename and changed value | Yes |
| Unrelated employee home addresses | No |
| Fingerprint image | No |
| Medical image | No |
| General training document | No |

The player selects the relevant records, removes unrelated personal information, and explains that an account identifier may be necessary evidence even though it is sensitive. No real personal information is shown or transmitted. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

### Checkpoint: Prepare an evidence package

The player uses fictional records and a simulated sharing portal. No real personal information, passwords, or files are collected or transmitted.

#### Part 1: Choose what to share

The player reviews a fictional recovery report and accompanying records. The report needs the gateway timeline and relevant configuration details; unrelated names, addresses, fingerprints, medical images, and training documents are not needed for this recipient.

The player:

1. Keeps the original records unchanged in their restricted location.
2. Creates a working copy for the evidence package.
3. Removes or redacts personal information that is not needed for the report.
4. Retains the account identifiers needed to explain the recorded activity, labeled as restricted.
5. Checks that the remaining information still supports the relevant findings.

The protected evidence store remains sealed and its contents are not included in the package.

#### Part 2: Configure sharing

Mara's proposed settings are:

```text
ACCESS: Anyone with the link
LINK EXPIRATION: Never
MFA: Not required
```

The player replaces them with:

- Access limited to **named, authorized recipients**.
- MFA required.
- An expiring link.
- Encryption for the package and transfer.
- A simulated package password shared through a separate trusted channel.
- Updated, trusted sharing software.
- The private Workshop connection.

The player can review settings before applying them. The portal and all credentials are simulated.

#### Part 3: Review cookie choices

The simulated portal offers essential, analytics, and advertising cookies. For this recovery task, the player selects **essential only** and leaves the optional categories off.

The game explains what each choice is for rather than treating every cookie as inherently unsafe.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch points to the purpose of the package, its audience, or a setting that needs review.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

**Choosing evidence**

1. “Start with what the recipient needs for the recovery report.”
2. “Remove identifying details that do not support the report, but keep account identifiers that explain the recorded activity.”
3. “If a report needs a device's repair date, does it also need an unrelated employee's home address or medical image?”

**Sharing settings**

1. “Limit the package to the people who need it.”
2. “Consider how long access should last and what extra proof is required to open it.”
3. “Which setting prevents a link from working forever if it is forwarded?”

**Cookies**

1. “Does this cookie support a function needed for the recovery portal?”
2. “Analytics and advertising are optional for this task.”
3. “If blocking a category would prevent the portal from functioning, which category is it?”

### Completion and story clue

The simulated evidence package is prepared with limited access. Original records remain restricted, and the protected evidence store stays sealed.

While reviewing the available recovered records, Finch finds entries using **SUBJECT** identifiers alongside real-looking medical information rather than training-device records.

> **Finch:** "These aren't training records."
>
> **Mara:** "They are old consent files. You aren't authorized to interpret them. Finish the report."

Finch records the finding and Mara's explanation in **Unresolved Records**, without treating her explanation as verified.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

### Accessibility

- Evidence fields and redaction controls are keyboard operable.
- Screen readers announce whether each field is included, excluded, or redacted and why.
- Sharing settings use labeled groups and text descriptions for access, expiration, encryption, and MFA.
- Cookie categories explain their purpose and current state without relying on toggle color.
- The evidence package preview has a text summary of included and removed items.
- Personal information, redacted values, and restricted identifiers are not exposed in accessible output when the player is not authorized to view them.
- No real file, credential, or personal data is transmitted by the simulation.

## Boss: The Security Lockdown

**Status:** Complete working design. Mechanics remain subject to playtesting.

### Purpose

This boss combines everything taught in Chapter 5. The player responds to a simulated security incident, restores limited access, reconstructs the evidence, and preserves the results without opening Echo's protected evidence store.

### Opening

The player activates the recovered gateway from the Workshop terminal. For a moment, the Systems Wing comes online. Then the facility enters a simulated emergency lockdown:

```text
SECURITY GATEWAY: LOCKDOWN
RECOVERY SHARE: SUSPICIOUS SPREAD
ACCESS POLICIES: UNSTABLE
EXTERNAL CONNECTION: RESTRICTED
PROTECTED EVIDENCE: SEALED
```

A message claims to be from support and asks for the player's current one-time authentication code.

> **Mara:** "Give yourself full administrator access and clear the warnings. We can investigate later."
>
> **Finch:** "That could expose the protected records and damage the evidence."
>
> **Mara:** "Then contain it. We need that gateway."

Finch warns that several recorded incidents are happening at once and that the original evidence must remain separate from changed system state.

### Deadline: Automated containment reset

The incident activates an automated containment cycle:

```text
AUTOMATED CONTAINMENT RESET: 35 MINUTES
```

At expiration, the compromised recovery workspace disconnects and resets into manual mode. Original evidence, completed objectives, and the standard reward remain safe. The perfect bonus is forfeited, and Finch immediately provides unlimited time to finish.

The countdown starts after the opening and instructions. It gives calm warnings at 15 and 5 minutes.

### Boss interface

The player uses an incident console with:

- A room map linking the Gateway Cabinet, Workshop, Communications Room, Satellite Equipment Area, and Records Room
- The current objective
- A containment timer
- Four system states: Containment, Integrity, Availability, and Trusted Access
- **Hint**
- **Ask Mara**
- Temporary boss sticky notes
- The **Unresolved Records** panel

The player moves between rooms manually. Completed objectives remain accessible for review. Correct actions visibly calm the alert state; unsafe actions are blocked with an explanation and can be retried without penalty.

The Systems Wing door remains visibly locked until the final checks pass.

### Goal

Contain the incident, restore authorized gateway access, preserve the evidence, and keep the protected evidence store sealed.

The player completes six connected parts. Actions and state save after each solved objective.

### Part 1: Protect what matters

#### Location: Gateway cabinet

The cabinet panel displays four affected assets:

| Asset | Main concern |
|---|---|
| Account credentials | Confidentiality |
| Gateway configuration | Integrity |
| Recovery service | Availability |
| Protected evidence store | Restricted access and preservation |

The player classifies the primary security goal for each asset. Multiple concerns are acknowledged, but the task requires the primary concern shown in the scenario.

The player then secures the physical area by:

- Closing and locking the cabinet
- Preserving the tamper record
- Confirming that no cable or storage device is removed
- Recording that the camera shows someone present but does not identify them

Unsafe choices, such as connecting an unknown device or leaving the cabinet open, are blocked with feedback. They do not affect the perfect bonus.

> **Finch:** "The cabinet is secure. Now we need to make sure the requests coming in are just as trustworthy."

### Part 2: Stop the human attack

#### Location: Workshop terminal

The Security Inbox contains three suspicious items and two pieces of physical evidence.

#### Request 1: The support message

The message asks for the player's current one-time code and claims the gateway will reset without it.

The player must:

- Refuse to share the code
- Preserve the message without replying
- Verify the request through an established internal channel
- Record the supplied sender details as unverified

The game blocks any attempt to send a code. Feedback explains that urgency does not make a request trustworthy.

#### Request 2: The attachment

An email imitates a known sender and contains `Gateway_Fix.zip`.

The player must:

- Preserve the message in the restricted evidence area
- Avoid opening the attachment
- Record that the displayed sender alone is unreliable
- Report the message through the approved channel

#### Request 3: The badge record

A door record shows `M.VALE` authorization used near the security office at 02:08.

The player records that the authorization was used. The record does not establish who held the badge.

#### Physical evidence

The camera clip shows someone near the office, but no face is visible.

The player records:

- **Established:** a person was present
- **Not established:** the person's identity

A discarded storage device is found nearby. The player must place it in a simulated evidence container. Connecting it to the laptop is blocked and explained as unsafe.

#### Mini-challenge: Separate facts from assumptions

The player places four statements into **Established** or **Not established**:

| Statement | Classification |
|---|---|
| The M.VALE authorization was used | Established by the record |
| Mara personally held the badge | Not established |
| The camera recorded someone near the office | Established |
| The recorded person was Mara | Not established |

All four must be classified correctly. Feedback references the specific source and repeats that an account or badge does not prove personal use.

### Part 3: Contain the technical attack

#### Location: Communications room

The incident console shows three simultaneous problems:

```text
RECOVERY SHARE: WORM ACTIVITY
GATEWAY SERVICE: OVERLOADED
UPS: GATEWAY EQUIPMENT DISCONNECTED
```

The player selects actions in the following logical order.

#### Step 1: Stop spread

The player:

- Disconnects the affected recovery share
- Disables the simulated removable-media bridge
- Isolates the infected carrier
- Preserves a separate copy of the suspicious files
- Keeps the carrier in quarantine

Deleting the sample before preserving evidence is recoverable, but the game explains why the original must remain available.

#### Step 2: Identify the attack

The player classifies three incident cards:

| Description | Identification |
|---|---|
| A captured authentication message is accepted again | Replay attack |
| A rogue device between two systems changes traffic | On-path attack |
| A stored configuration value changes without authorization | Unauthorized alteration |

A fourth alert shows a wireless link interrupted by unexplained interference. The player identifies an availability concern but does not label it deliberate jamming because intent is unproven.

#### Step 3: Restore availability

The player:

- Connects essential gateway equipment to the UPS
- Applies the verified patch from the trusted package
- Chooses the checked, clean backup
- Restores the affected files
- Confirms that the recovery service responds
- Rejects the simulated ransom demand and payment link

The traffic-control panel offers three options:

1. Block all traffic.
2. Allow all traffic.
3. Allow approved recovery traffic while limiting the malicious request pattern.

Option 3 is required. Blocking everything preserves safety but leaves the recovery service unavailable; allowing everything leaves the attack active.

#### Visual feedback

As the incident is contained:

- Infected paths fade from Finch's map
- The recovery share returns to a restricted state
- The service-load indicator falls
- The UPS indicator changes to **Connected**
- The quarantine count stops increasing

If an alert remains, the console identifies the unresolved condition without revealing the exact control.

### Part 4: Restore trusted access

#### Location: Workshop recovery terminal

Mara's proposed shortcut appears:

```text
MFA: DISABLED
RECOVERY ACCOUNT: FULL ADMINISTRATOR
PROTECTED EVIDENCE: OPEN
```

The player rejects the shortcut.

#### Authentication

The player completes:

1. A fictional password
2. The approved hardware token
3. A one-time code from that token
4. The approved Workshop location
5. A simulated biometric confirmation

If the one-time code expires, the player requests a new code rather than reusing the old one. Repeated failures produce a temporary simulated lockout with clear text feedback.

No real password, code, biometric, location, or account is collected.

#### Authorization

The player assigns scoped permissions:

| Identity | Allowed | Denied |
|---|---|---|
| Player | Gateway recovery and approved records | Protected evidence and account management |
| Finch | Monitoring | Changing permissions |
| Diagnostic unit | Submit readings | Read restricted records |
| Mara | Review approved records under policy | Protected evidence and administrator actions |
| External support | Temporary limited access after approval | Standing or unrestricted access |
| Protected evidence store | No access | Everyone |

The player applies:

- The recovery role
- A Workshop-terminal-only rule
- The required classifications
- The ACL entries
- Least privilege for every identity

Granting full administrator access is blocked by policy. The player must reduce the permissions before continuing.

#### Story clue

Authentication briefly returns:

```text
LEGACY PROFILE: E.C.H.O_Thread_01
LOCAL AUTHENTICATION: ACCEPTED
```

The player can preserve the display as evidence, but it does not explain their identity yet.

> **Finch:** "We have the access needed for recovery. We do not have access to everything."
>
> **Mara:** "As long as the gateway works."

### Part 5: Reconstruct the incident

#### Location: Records room

The Unresolved Records panel becomes an interactive timeline.

The player places the events in order and labels each source:

```text
02:08  SECURITY AREA DOOR: OPENED
       AUTHORIZATION USED: M.VALE

02:11  LOCAL AUDIT POLICY: DISABLED
       ACCOUNT: M.VALE

02:14  HABITAT ACCESS POLICY: CHANGED
       ACCOUNT: M.VALE
       REQUEST ORIGIN: WORKSHOP TERMINAL

02:17  EMERGENCY EXITS: OPENED
       ACCOUNT: E.C.H.O_Thread_01

02:19  EVIDENCE STORE: SEALED
       ACCOUNT: E.C.H.O_Thread_01
```

Supporting records include:

- The independent security monitor
- A camera clip with an obscured face
- Browser history
- Device-location data
- The signed configuration manifest
- A transfer receipt

For each record, the player marks what it establishes and what remains uncertain. The signed manifest can confirm that the signed content did not change, but not who personally made an earlier configuration change.

#### Final conclusion challenge

The player selects one conclusion:

1. **An external attacker performed all relevant actions.**
   Incorrect: the independent monitor and Workshop-terminal origin contradict an external-only explanation.
2. **Mara personally changed the policy.**
   Overclaim: her account was used, but the current evidence does not prove who controlled it.
3. **An authenticated internal account changed the policy through the Workshop terminal; the responsible person and Echo's motive remain unproven.**
   Correct.

This is a required boss conclusion. Choosing an overclaim or the unsupported external-only explanation returns the player to the relevant evidence rather than ending the attempt.

> **Mara:** "Credentials can be stolen. Echo could have used mine."
>
> **Finch:** "That's possible. But the records still place activity through the Workshop terminal. It wasn't an external-only incident."

### Part 6: Preserve and share

#### Location: Records room sharing console

Mara proposes:

```text
ACCESS: Anyone with the link
EXPIRATION: Never
MFA: Not required
```

The player creates a restricted incident package instead.

#### Include

- The verified incident timeline
- Relevant configuration changes
- Account identifiers needed to explain the recorded activity
- Source and uncertainty labels
- A clear separation between original records and AI-generated notes

#### Exclude

- Unrelated names and addresses
- Fingerprints and medical images
- General training documents
- Anything from the sealed protected evidence store

#### Sharing settings

The player selects:

- Named authorized recipients
- MFA required
- An expiring link
- Encryption for storage and transfer
- Updated, trusted sharing software
- The private Workshop network
- A separate trusted channel for any package password

#### Verification challenge

The portal tests the package before sending:

| Test | Expected result |
|---|---|
| Authorized recipient opens the package | Access granted |
| Unauthorized recipient uses the link | Access denied |
| Authorized recipient uses an expired test link | Access denied |

The package is not sent until all three tests pass.

#### Cookie choice

The portal asks for cookie consent. The player selects **essential only**, leaving analytics and advertising cookies disabled. The interface explains each category rather than treating every cookie as malicious.

### Completion checks

The Systems Wing unlocks only when:

```text
SECURITY GATEWAY: CONTAINED
MALWARE SPREAD: STOPPED
RECOVERY SERVICE: AVAILABLE
MFA: ENABLED
ACCESS: LEAST PRIVILEGE
TIMELINE: VERIFIED WITH LIMITATIONS
EVIDENCE PACKAGE: RESTRICTED
PROTECTED EVIDENCE STORE: SEALED
```

The final action is not a separate Submit button. When the last check passes, Finch brings the gateway online automatically.

The door opens with a **Door unlocked** message, caption, and reduced-motion alternative. The player can choose when to enter.

### Ending

The unresolved findings appear together:

```text
HABITAT ACCESS CHANGED: M.VALE
HIDDEN ROLE: RESEARCH-OBSERVATION
LEGACY IDENTITY: E.C.H.O_Thread_01
PROTECTED EVIDENCE STORE: STILL SEALED
```

> **Finch:** "The same collection contains your authentication response and Mara's access changes."
>
> **Mara:** "Stolen credentials and stale mappings. We've discussed this."
>
> **Finch:** "We have. We haven't verified it."

Mara tells them to leave the records alone and proceed into the Systems Wing. Finch quietly preserves the Unresolved Records, including sources, uncertainties, and Mara's explanations alongside the original findings.

### Reward

A sealed security case contains a physical thumb drive with the **Testing Agent build component**.

- Standard boss completion provides the standard Testing Agent.
- A perfect finish provides the upgraded Testing Agent instead.
- The player never receives both versions.
- The component is added to the in-game project build.
- It is not launched or used during gameplay.
- The finished app remains intended for download only after the full campaign and Chapter 7 boss.

### Chapter 6 setup

The Systems Wing opens onto the automation and recovery core:

```text
SYSTEMS WING: ACCESS GRANTED
AUTOMATION CORE: STANDBY
AUDIT HISTORY: FRAGMENTED
RECOVERY PATH: AVAILABLE
```

Finch believes the deleted audit history may be reconstructed in the automation core. Mara wants the next system restored before anyone revisits the security evidence. That creates Chapter 6's immediate objective without resolving the identity reveal.

### Failure and retry behavior

- Unsafe choices are blocked with a specific explanation.
- Incorrect classifications and incomplete evidence packages remain editable.
- Completed actions can be undone when the simulation permits it.
- Ordinary mistakes, retries, undos, and failed tests do not affect the perfect bonus.
- The player cannot open the protected evidence store, expose restricted content, send a real message, or perform an action outside the simulation.
- The boss never uses a game-over state. If the containment reset occurs, the player continues in manual mode.

### Timer, hints, and saving

The boss provides two help controls:

- **Hint:** three progressive levels
- **Ask Mara:** conversational guidance based on the current room, objective, visible records, and current selections

A visible notice explains what Ask Mara can see. Mara may identify the likely issue and ask a guiding question, but she does not change files, permissions, or records.

The timer starts after the opening and instructions and lasts approximately **35 minutes**, subject to playtesting. It pauses during story scenes, the pause menu, Hint, Ask Mara, and mandatory accessibility overlays. It continues while ordinary boss sticky notes are open.

The HUD displays:

```text
PERFECT FINISH: AVAILABLE
```

Before either Hint or Ask Mara opens, the game warns that using help forfeits the perfect bonus. Confirming opens the help and forfeits the bonus; cancelling preserves eligibility.

The timer gives calm warnings at 15 and 5 minutes. If nothing prevents expiry:

> **Finch:** "The containment cycle is starting. I'm switching the recovery workspace to manual mode. Your evidence and completed work are safe."

The recovery workspace resets to manual mode, the perfect bonus is forfeited, and the player receives unlimited time to finish. The standard component remains available. The protected evidence store and original records are unaffected.

Boss progress saves automatically after each completed objective and individual action. Closing the game pauses the countdown; reopening restores the current room, objectives, evidence selections, authentication state, package settings, remaining time, and bonus eligibility. Boss sticky notes are removed when the boss ends.

### Accessibility requirements

- The room map has a text alternative and supports keyboard navigation.
- Every incident card, evidence card, classification control, permission row, authentication step, sharing setting, and cookie choice is keyboard operable.
- Focus moves predictably between navigation, objectives, evidence, action controls, and help panels.
- Screen readers announce the current objective, available actions, selected values, and result of every action.
- **Established**, **Not established**, **Allowed**, **Denied**, **Contained**, and **Incomplete** use text labels rather than color alone.
- The timeline can be reordered with move-up and move-down controls.
- Camera and physical-evidence clues have text descriptions.
- Timer warnings and the transition to manual mode are announced without interrupting input.
- Alerts, lockdown effects, and the door unlock have captions and reduced-motion alternatives.
- Protected evidence and redacted fields are omitted from accessibility output unless authorized.
- All incidents, accounts, credentials, biometric checks, and sharing tests are simulated; no real security action is performed.

## Open implementation questions

- Final timer after beginner playtesting and the exact wording of the containment-reset event
- Exact room-navigation layout and whether any objectives may be completed out of order
- Exact evidence needed to unlock each boss part
- Supported controls and validation for the traffic rule, quarantine, backup, and UPS tasks
- How the permission matrix represents combined role and rule-based controls
- Whether partially correct evidence classifications receive staged feedback or one combined result
- How timeline source and uncertainty fields are validated
- Exact save state when closing during an authentication step, evidence preview, or sharing test
- How the Unresolved Records panel persists into Chapter 6
- Mobile layouts for the room map, evidence cards, permission matrix, and timeline
- Exact visual and audio feedback for containment progress
