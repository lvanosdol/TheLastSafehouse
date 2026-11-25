# Chapter 5: The Security Gateway

**Status:** Working design. The opening is approved; lessons and the boss will be developed together.

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

### Checkpoint: Review the gateway's assets

There is no separate practice activity. Finch displays fictional inventory cards and incident descriptions. The player reviews them before the gateway is restored.

#### Part 1: Classify the assets

The player can select multiple applicable labels, such as **public**, **sensitive**, **operationally important**, and **potentially identifying**. Asset cards provide the context needed to make each choice:

| Asset | What the player should recognize |
|---|---|
| Account credentials | Sensitive; exposure could enable unauthorized access |
| Public training guide that is the only guide to repairing the gateway | Public and operationally important |
| Gateway device telemetry | Operationally important because it helps monitor equipment |
| Biometric archive | Highly sensitive information |
| Maintenance report linked to employee names and locations | Potentially identifying when records are combined |

The game accepts reasonable explanations where an asset fits more than one category. It does not treat "public" as meaning "never important."

#### Part 2: Identify the security goal

The player matches each scenario to its **primary** concern:

1. Someone reads a private account record without permission. **Confidentiality.**
2. Someone changes a gateway setting without authorization. **Integrity.**
3. Authorized staff cannot reach the gateway because it is offline. **Availability.**

Feedback notes that real incidents can affect multiple goals. These answers are design notes; the player sees the scenarios and choices, not the answers.

#### Part 3: Consider why an asset might be targeted

The player matches fictional scenarios to plausible motives:

- A criminal wants to sell stolen account records: **money**.
- Someone wants to stop staff from using the gateway: **disruption**.
- A person wants credentials to reach another system: **access**.

The player is identifying a *possible* motive from each scenario, not determining who attacked the Safehouse. The answers are design notes rather than visible solutions.

### Feedback and hints

Correct responses are marked **Correct**. Other responses are marked **Try again** and remain editable. Finch explains the idea that needs another look without completing the checkpoint for the player.

The player can return to the lesson pages. Hints and retries are unlimited and penalty-free.

Three hint levels:

1. "Think about how each asset is used and what could happen if someone misuses it."
2. "Confidentiality concerns who can see information; integrity concerns unwanted changes; availability concerns access when it is needed."
3. "Consider a separate example: if a public notice is secretly changed, which security goal is affected?"

### Completion and story clue

The player completes the security review. Finch's inventory now marks the reviewed asset groups, while the gateway remains offline.

One metadata entry stands out:

```text
ASSET: SUBJECT-BIOMETRIC-ARCHIVE
CLASSIFICATION: RESTRICTED
RELATED ROLE: RESEARCH-OBSERVATION
```

The player can see the inventory entry, not the protected biometric records themselves.

> **Finch:** "A biometric archive? And a role called Research Observation?"
>
> **Mara:** "Old research media, mislabeled by the archive system. It has nothing to do with the gateway."
>
> **Finch:** "Perhaps. I'll record the entry without opening the restricted material."

Finch adds the inventory entry and Mara's explanation to **Unresolved Records**, clearly labeling her explanation as unverified. The player then moves on to Lesson 2.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

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

### Checkpoint: Investigate the security incidents

There is no separate practice activity. The player reviews fictional incident cards from the security area and identifies the concern and an appropriate response.

| Incident | Concern | Appropriate response |
|---|---|---|
| Captured network traffic reveals credentials | Unauthorized observation or interception | Protect traffic with appropriate encryption |
| Someone watches an employee enter a PIN | Shoulder surfing | Reposition the terminal or use a privacy screen |
| A caller impersonates support and asks for a password | Social engineering | Refuse to share the password and verify through a trusted channel |
| An email imitates a known sender and requests a token | Phishing | Preserve the message and verify the request separately |
| Discarded documents contain access information | Dumpster diving | Shred and securely dispose of sensitive materials |
| A gateway component is removed from its cabinet | Hardware theft | Secure the room and equipment |

The answers above are design notes; the player sees the incident cards and choices.

#### Secure the security area

The player also selects appropriate protections:

- Lock the security room.
- Require authorized access badges.
- Verify and challenge visitors appropriately.
- Secure gateway equipment inside its cabinet.

These measures reduce risk but do not prove that every person using a badge is its owner.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch explains the concern that needs another look without supplying the complete answer.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

1. "Consider whether the information was observed, requested through deception, or taken from a physical place."
2. "Check an unexpected request through a trusted channel, and protect sensitive material both on screens and when disposing of it."
3. "For a separate example: if someone asks for a one-time code while claiming to be support, what could you do to check the request without giving them the code?"

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

### Checkpoint: Diagnose the incidents

There is no separate practice activity. The player reviews fictional incident cards in the recovery panel.

#### Part 1: Identify the concern

| Incident | Expected identification |
|---|---|
| A device record was changed without authorization | Unauthorized alteration; integrity |
| A captured authentication message is sent again later | Replay attack |
| A rogue device between two systems changes traffic | On-path attack |
| A service is overwhelmed by fake requests from many sources | DDoS; availability |
| A wireless link is disrupted by unexplained interference | Availability problem; intent is not yet established |
| Essential equipment shuts down during a power failure | Availability problem; a UPS could help |
| An employee account changes a configuration outside its approved duties | Potential insider alteration; investigate before identifying the person responsible |

These are design notes. The player sees the incident descriptions and choices, not the answers.

#### Part 2: Protect the recovery environment

The player:

1. Enables the existing simulated integrity checks.
2. Isolates the identified suspicious network path without disabling the whole gateway.
3. Connects essential simulated security equipment to the UPS.
4. Preserves the original incident records for review.

The player can inspect each choice before applying it. All equipment and actions are fictional.

### Feedback and hints

Correct responses are marked **Correct**; other choices are marked **Try again** and remain editable. Finch identifies the relevant record or concept without completing the task.

The player can revisit the lesson pages. Hints and retries are unlimited and penalty-free.

1. "Consider whether the incident changes information, exposes it, or prevents an authorized system from working."
2. "Check whether the description identifies one source or many, and whether it actually establishes that interference was deliberate."
3. "For a separate example: if a previously recorded request is accepted a second time when it should not be, what kind of attack does that suggest?"

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
