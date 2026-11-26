# Chapter 5: The Security Gateway

**Status:** Working design with an approved opening, detailed lessons, and a boss draft.

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

### Checkpoint: Contain the simulated incident

There is no separate practice activity. The player reviews fictional sample cards and chooses how to respond. No real malware, password cracking, or external network activity is involved.

#### Part 1: Identify the samples

| Fictional sample behavior | Best match |
|---|---|
| Pretends to be a security scanner | Trojan |
| Spreads between systems through a recovery share | Worm |
| Secretly records typed information | Keylogger |
| Restricts access to files and demands payment | Ransomware |
| Conceals its activity from ordinary system tools | Rootkit |

The player identifies the behavior shown rather than assuming a sample can belong to only one category.

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

1. "Look at what each sample does, rather than relying on its name."
2. "Before restoring anything, consider how to stop further spread and preserve useful evidence."
3. "For a separate example: if a file pretends to be a helpful tool but performs an unwanted action, which category describes that disguise?"

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

- **Something you know:** A password or PIN.
- **Something you have:** A hardware token or smart card.
- **Something you are:** A fingerprint or facial recognition.

**Multifactor authentication**, or **MFA**, combines factors from different categories. A password and a hardware token can provide two factors. Two passwords are still both things you know, so they are not two different factors.

A location or device check can add a security condition, but its presence alone does not necessarily make a sign-in multifactor.

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

### Checkpoint: Restore secure authentication

There is no separate practice activity. The player works in a fictional recovery simulator with an approved training account. The security gateway remains offline.

#### Part 1: Identify the factors

The player reviews fictional sign-in combinations:

| Combination | Expected identification |
|---|---|
| Password and hardware token | Two different factor categories |
| Password and PIN | Two things the user knows; not two different factor categories |
| Hardware token and its one-time code | The code is part of the token check, not automatically a separate factor |
| Password and fingerprint | Knowledge and biometric factors |

These are design notes. The player sees the combinations and choices, not the answers.

#### Part 2: Sign in safely

The simulated recovery system requires:

1. A fictional password as **something you know**.
2. An approved hardware token as **something you have**.
3. A one-time code generated by that token before it expires.
4. An approved Workshop location as an additional access condition.

The player uses fictional credentials supplied inside the simulation. No real password, authentication code, fingerprint, or location is collected.

Mara again suggests disabling MFA. The player keeps it enabled and completes the approved sign-in.

#### Part 3: Use single sign-on

After authentication, the player opens two approved recovery applications through SSO. They do not have to repeat the same sign-in for each application, but each application still checks what the account is authorized to access.

The player identifies that **SSO provided shared sign-in**, while **MFA checked multiple factors**. Neither grants permission to open the protected evidence store.

### Feedback and hints

Correct responses are marked **Correct**; other choices are marked **Try again** and remain editable. Finch explains which factor or concept needs another look without completing the task.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

1. "Consider whether each item is something you know, have, or are."
2. "Two pieces of information from the same category do not necessarily make two different factors."
3. "For a separate example: signing in once can give access to multiple approved apps, but what extra checks might still protect that sign-in?"

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

### Checkpoint: Assign recovery access

There is no separate practice activity. The player reviews fictional access requests and policy cards in the recovery environment. The gateway remains offline.

#### Part 1: Apply least privilege

The player assigns the following access:

| Identity | Approved access |
|---|---|
| Player | Gateway recovery and approved device records |
| Finch | Monitoring only |
| Diagnostic unit | Submit readings only |
| Mara | Administrative review under the stated policy |
| External support | Temporary, limited access after approval |
| Everyone above | No access to the protected evidence store |

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

1. "Start with what each account needs to do, not what would give it the most access."
2. "Compare the role's permissions with the separate rule restricting where recovery access can be used."
3. "For a separate example: would a sensor that only sends temperature readings need permission to edit user accounts?"

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

### Checkpoint: Build the security timeline

There is no separate practice activity. The player reviews fictional records in the recovery environment. They do not open the protected evidence store.

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

The player also reviews a fictional browser-history entry, a camera recording, a device-location record, and a transfer receipt. Each card includes a short description of its limitations. The player decides what each can support without treating any one of them as complete proof of a person's identity.

#### Player tasks

1. Place the recorded events in time order.
2. Identify the source for each event.
3. Mark what each record establishes and what remains uncertain.
4. Compare the signed manifest with the relevant configuration record.
5. Choose the supported conclusion.

**Expected conclusion:** The records support that an authenticated internal account changed the access policy through the Workshop terminal. That does not fit an explanation in which all relevant activity occurred only through an external connection. It does **not** prove Mara personally made the change or rule out someone else using her credentials.

The evidence also records actions under `E.C.H.O_Thread_01`, but does not yet explain the player's identity or Echo's motive.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch points to the relevant source or gap without completing the timeline.

The player can review lesson pages. Hints and retries are unlimited and penalty-free.

1. "Put the events in order before deciding what they mean."
2. "Check which source recorded each event and whether the record identifies an account, a device, or a person."
3. "For a separate example: if a badge opens a door, what does that establish—and what would you still need to know about who used it?"

### Completion

The timeline is added to **Unresolved Records**, with sources and uncertainties visible alongside it.

> **Mara:** "Credentials can be stolen. Echo could have used mine."
>
> **Finch:** "That's possible. But the records still show activity through the Workshop terminal. We shouldn't call it an external-only incident."

The player moves on to Lesson 8. The gateway remains offline, and the protected evidence store remains sealed.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

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

### Checkpoint: Prepare an evidence package

There is no separate practice activity. The player uses fictional records and a simulated sharing portal. No real personal information, passwords, or files are collected or transmitted.

#### Part 1: Choose what to share

The player reviews a fictional recovery report and accompanying records. The report needs the gateway timeline and relevant configuration details; unrelated names, addresses, fingerprints, and medical images are not needed for this recipient.

The player:

1. Keeps the original records unchanged in their restricted location.
2. Creates a working copy for the evidence package.
3. Removes or redacts personal information that is not needed for the report.
4. Checks that the remaining information still supports the relevant findings.

The protected evidence store remains sealed.

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

1. "Start with what the recipient needs for the recovery report."
2. "Keep the original records protected, and consider who can open the shared copy and for how long."
3. "For a separate example: if a report needs a device's repair date, does it also need an unrelated employee's home address?"

### Completion and story clue

The simulated evidence package is prepared with limited access. Original records remain restricted, and the protected evidence store stays sealed.

While reviewing the available recovered records, Finch finds entries using **SUBJECT** identifiers alongside real-looking medical information rather than training-device records.

> **Finch:** "These aren't training records."
>
> **Mara:** "They are old consent files. You aren't authorized to interpret them. Finish the report."

Finch records the finding and Mara's explanation in **Unresolved Records**, without treating her explanation as verified.

Completed activities save automatically; an unfinished checkpoint restarts when the player returns.

## Boss: The Security Lockdown

**Status:** Working boss design.

### Opening

Finch confirms that the recovery work is ready. The player activates the gateway from the Workshop terminal.

The gateway briefly comes online—then the Systems Wing locks down. Alerts appear on Finch's map:

```text
SECURITY GATEWAY: LOCKDOWN
RECOVERY SHARE: SUSPICIOUS ACTIVITY
ACCESS POLICIES: UNSTABLE
PROTECTED EVIDENCE: SEALED
```

A message appears claiming to be from support and asking for the player's authentication token.

> **Mara:** "Give yourself full administrator access and clear the warnings. We can investigate later."
>
> **Finch:** "That could expose the protected records—and we might lose evidence of what happened."
>
> **Mara:** "Then contain it. We need that gateway."

The player can move between the Workshop, communications room, satellite equipment area, records room, and the area outside the Systems Wing. The wing itself remains locked until the boss is completed.

All incidents, files, accounts, and actions are simulated.

### Goal

Contain the incident, restore authorized gateway access, and preserve the evidence without opening the protected evidence store.

The boss has six connected parts. The player can review completed work while moving between rooms.

### Part 1: Protect what matters

At the gateway cabinet outside the Systems Wing, Finch displays an asset list:

| Asset | Main concern |
|---|---|
| Account credentials | Unauthorized disclosure |
| Gateway configuration | Unauthorized changes |
| Recovery service | Availability |
| Protected evidence store | Restricted access and preservation |

The player identifies the main confidentiality, integrity, or availability concern for each alert. More than one concern can apply; the game asks for the **primary** concern shown in each scenario.

The player also closes and locks the gateway cabinet. This secures the equipment but does not restore the gateway by itself.

> **Finch:** "The cabinet is secure. Now we need to make sure the requests coming in are just as trustworthy."

### Part 2: Check the requests and access records

In the Workshop, the player reviews three items:

1. A **support message** asks for the player's one-time token.
2. An **email** imitates a known sender and asks the player to open an attachment.
3. A recovered **badge record** shows that `M.VALE` authorization was used near the security office.

The player:

- Refuses to share the token.
- Preserves the suspicious message and email without opening the attachment.
- Checks the support request through an established trusted channel.
- Records that the badge authorization was used without concluding who held it.

A camera clip shows a person near the security office, but their face is not visible. The clip supports that someone was present; it does not identify the person.

A discarded storage device is also found near the office. The player places it in a simulated evidence container rather than connecting it to the recovery laptop.

### Part 3: Contain the incident

The diagnostic panel shows:

```text
RECOVERY SHARE: SUSPICIOUS SPREAD DETECTED
REMOVABLE MEDIA: CONNECTION AVAILABLE
GATEWAY SERVICE: OVERLOADED
UPS: NOT CONNECTED TO GATEWAY EQUIPMENT
```

#### Player tasks

The player:

1. Isolates the simulated infected carrier.
2. Restricts the affected recovery share and removable-media connection.
3. Keeps the suspicious sample in quarantine.
4. Uses the trusted update package and applies the relevant patch.
5. Connects essential simulated gateway equipment to the UPS.
6. Uses an available simulated traffic-control option to reduce the overload without blocking all legitimate recovery access.

The player then reviews a checked backup record, restores the affected simulated files, and checks that the recovery service responds.

The gateway remains in lockdown until the remaining access and evidence checks are complete.

#### Incident review

Finch displays three previously encountered descriptions. The player identifies the concern in each:

- A captured authentication message is reused: **replay attack**.
- A device between two systems changes traffic: **on-path attack**.
- A configuration record is changed without authorization: **integrity concern**.

### Part 4: Restore trusted identity and access

The player returns to the recovery terminal. Mara's proposed shortcut is displayed:

```text
MFA: DISABLED
RECOVERY ACCOUNT: FULL ADMINISTRATOR
PROTECTED EVIDENCE: OPEN
```

The player rejects those settings.

Instead, they:

1. Authenticate with the approved simulated password and hardware token.
2. Complete the required simulated location and biometric checks.
3. Keep MFA enabled.
4. Use SSO to open the approved recovery applications.
5. Apply the recovery role and Workshop-terminal rule.
6. Check the classifications and access list.
7. Confirm that the protected evidence store remains sealed.

No real password, authentication code, fingerprint, or location is collected.

> **Finch:** "We have the access needed for recovery. We do not have access to everything."
>
> **Mara:** "As long as the gateway works."

### Part 5: Reconstruct the incident

The player opens the **Unresolved Records** panel in the records room. It contains the timeline and supporting records assembled during the lessons.

The player compares:

- The door authorization record.
- The independent security monitor.
- The saved emergency-exit and evidence-store events.
- The signed configuration manifest.
- The available camera, location, browser-history, and receipt records.

The player places the relevant events in order and selects what the evidence supports:

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

**Supported conclusion:** An internal account was used to change the access policy through the Workshop terminal. The records do not support an explanation in which all relevant activity occurred only through an external connection.

They do **not** prove Mara personally made the change, establish who held the badge, or rule out someone else using her credentials.

### Part 6: Preserve and share

The player prepares a limited incident package using the process from Lesson 8.

They:

- Keep the original records restricted and unchanged.
- Create a working copy.
- Remove personal information not needed for the incident report.
- Keep AI-generated notes separate from original evidence.
- Limit access to named, authorized recipients.
- Require MFA and an expiring link.
- Use the simulated encrypted sharing option.
- Select only essential cookies in the recovery portal.

The protected evidence store remains sealed.

### Completion

Once the simulated incident is contained, authorized access is restored, and the evidence package is prepared, Finch brings the gateway online. The Systems Wing door unlocks.

A short cutscene shows the door and plays an unlocking sound. A visible **"Door unlocked"** message and caption communicate the change without relying on sound. The player can choose when to enter.

### Ending

Finch displays the unresolved findings together:

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

Mara tells them to leave the records alone. Finch quietly preserves the **Unresolved Records** panel.

The player finds a sealed security case containing a **physical thumb drive** with the Testing Agent. A perfect boss finish provides its upgraded version. The player installs it on the in-game laptop.

The ending points toward Chapter 6 and the Systems Wing's automation and recovery core, where Finch believes deleted audit history might be recoverable.

### Timer, hints, and saving

- The containment window starts **after** the opening and instructions and lasts approximately **35 minutes**, subject to playtesting.
- The timer pauses during story scenes, displayed hints, and the pause menu.
- Ordinary mistakes and retries do not affect the perfect bonus.
- Before a boss hint is revealed, the game warns that using it forfeits the bonus. Cancelling preserves eligibility.
- If time expires, the perfect bonus is forfeited, but progress remains and the player has unlimited time to finish.
- Boss progress, completed work, remaining time, and bonus eligibility save automatically. Closing the game pauses the countdown.

Hints use three levels: a reminder, where to look, and a similar example without supplying the complete solution.
