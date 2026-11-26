# Chapter 5: The Security Gateway

**Status:** Working design with five condensed lessons and a complete boss design. Mechanics remain subject to implementation and playtesting.
**Updated:** 2026-11-25

Each lesson ends with one checkpoint containing a guided stage and an independent task. Progress saves after each completed stage.

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

## Lesson 1: Security Foundations

**Depth:** Brief overview.

### Story purpose

Finch has recovered an inventory associated with the offline security gateway. Mara wants the player to understand what the facility is protecting before they attempt to restore access.

> **Finch:** “The inventory has assets, owners, and a few labels that appear designed to make me nervous.”
>
> **Mara:** “Start with what needs protection and how it could be harmed.”

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All assets and scenarios are fictional.

#### Page 1: Assets and data

An **asset** is something valuable that needs protection, such as a computer, account, file, service, or record.

Some assets are **critical** because operations depend on them. Others are **sensitive** because exposure or misuse could harm a person or organization. An asset can be both.

Data can be gathered, correlated with other records, summarized into reports, analyzed for patterns, used in large or fast-moving datasets, or used to generate revenue. Combining ordinary fields can reveal identifying information. Data can have monetary value without being appropriate to sell or share freely.

#### Page 2: Hackers and motives

The word **hacker** can describe someone who explores computer systems, not necessarily a criminal. Authorization and intent matter. An approved security tester has permission within agreed limits; someone who accesses systems without permission or causes harm may be committing a crime.

Possible motives include money, disruption, espionage, embarrassment, and obtaining access to another system. A motive is a possible explanation, not proof of who acted.

#### Page 3: Confidentiality, integrity, and availability

The **CIA triad** describes three security goals:

- **Confidentiality:** only authorized people or systems can access the information.
- **Integrity:** information remains accurate and protected from unauthorized change.
- **Availability:** authorized people or systems can access it when needed.

One incident can affect more than one goal.

### Checkpoint: Review the gateway's assets

#### Guided stage: Classify one asset

Finch presents a maintenance visitor log containing a visitor name, organization, arrival time, and employee contact.

The player labels it **sensitive** and **potentially identifying**, then identifies the primary confidentiality concern: unauthorized people could learn who visited and when.

Feedback explains that ordinary fields can become identifying when combined. Keyboard selection, three hints, and unlimited penalty-free retries remain available.

#### Main task: Review the asset inventory

For each asset, the player selects all applicable labels: **public**, **sensitive**, **operationally important**, and **potentially identifying**.

| Asset | Accepted labels |
|---|---|
| Account credentials | Sensitive; potentially identifying when linked to a person |
| Public repair guide that is the only gateway reference | Public and operationally important |
| Gateway telemetry | Operationally important |
| Biometric archive | Sensitive and potentially identifying |
| Maintenance report linked to names and locations | Potentially identifying; may also be operationally important |

The game accepts equivalent combinations when the player can justify them.

The player then identifies the primary CIA concern in three incidents:

- Reading a private record without permission → **Confidentiality**
- Changing a gateway setting without authorization → **Integrity**
- Preventing authorized staff from using the gateway → **Availability**

Finally, the player matches three scenarios to possible motives: selling records → **money**, stopping access → **disruption**, and obtaining credentials for another system → **access**.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable.

- **Assets:** “Ask what harm exposure, change, or loss would cause.”
- **CIA:** “Is the problem disclosure, unauthorized change, or lack of access?”
- **Motives:** “Identify what the actor gains, not who they are.”

Hints and retries are unlimited and penalty-free.

### Completion and story clue

The reviewed inventory reveals a restricted entry:

```text
ASSET: SUBJECT-BIOMETRIC-ARCHIVE
CLASSIFICATION: RESTRICTED
RELATED ROLE: RESEARCH-OBSERVATION
```

Only the inventory metadata is visible. No protected biometric record is opened or displayed.

> **Finch:** “A biometric archive connected to a role called Research Observation?”
>
> **Mara:** “Old research media. It has nothing to do with the gateway.”

Finch records the entry and Mara's explanation in **Unresolved Records**, marking the explanation as unverified. The gateway remains offline.

Progress saves after each completed checkpoint stage. If the player leaves during a stage, that stage resumes with completed answers and prior progress preserved.

### Accessibility

- Asset cards and multi-select labels are keyboard operable.
- Screen readers announce the full asset, labels, selections, and results.
- **Correct** and **Try again** use text rather than color alone.
- Restricted metadata is exposed without granting access to the protected record itself.

## Lesson 2: People and Physical Security

**Depth:** Brief overview with practical judgment.

### Story purpose

A recovered gateway record shows that a legitimate employee credential was used, but not how the person obtained it.

> **Mara:** “Echo must have stolen the credential remotely.”
>
> **Finch:** “Possibly. A door record from near the security office shows more than one thing happened.”
>
> **Mara:** “Then find the fastest safe way to secure the area.”

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint.

#### Page 1: Confidentiality and observation

**Confidentiality** means limiting information to authorized people and systems.

- **Snooping:** viewing information without authorization.
- **Eavesdropping:** listening to or observing a communication.
- **Wiretapping:** intercepting a communication.
- **Protocol analyzer:** a tool for examining network traffic, which can support authorized troubleshooting but can also be misused.

Encryption such as properly established HTTPS helps protect traffic in transit. It does not prove that the destination is trustworthy.

#### Page 2: Social engineering and phishing

**Social engineering** persuades someone to share information or take an unsafe action.

**Phishing** uses deceptive messages. **Spear phishing** targets a particular person or group; **whaling** targets senior or high-profile people.

An address, caller ID, or sender name can be **spoofed**. Displayed identity alone is not proof.

Verify unexpected requests through a separate trusted channel. Preserve suspicious messages and do not open attachments, follow payment links, or disclose passwords or authentication codes.

#### Page 3: Physical security

- **Shoulder surfing:** watching someone enter or view private information. Reposition the screen or use a privacy screen.
- **Dumpster diving:** recovering information from discarded materials. Shred sensitive documents and securely dispose of storage media.
- **Hardware theft:** removing equipment that contains information or supports operations.
- **Hardware damage:** interrupting service through accidental or deliberate damage.

Locks, badges, visitor checks, screen privacy, and secured cabinets reduce risk. A badge record shows which authorization was used, not who held the badge.

### Checkpoint: Investigate the security incidents

#### Guided stage: Name the threat

The player classifies three cards:

- A message asks for a sign-in code → **phishing**
- Someone watches an employee enter a PIN → **shoulder surfing**
- A discarded sheet contains configuration data → **dumpster diving**

They then choose the matching defense: verify through a trusted channel, reposition the screen, or shred and securely dispose.

#### Main task: Investigate the incidents

The player selects the concern and response for each incident:

| Incident | Concern | Response |
|---|---|---|
| Captured traffic reveals credentials | Unauthorized observation/interception | Encrypt the traffic |
| Someone watches a PIN entered | Shoulder surfing | Reposition the screen or use privacy filter |
| Caller impersonates support and requests a password | Social engineering | Refuse and verify separately |
| Email imitates a known sender and asks for a token | Phishing | Preserve it and verify separately |
| Discarded documents contain access information | Dumpster diving | Shred and securely dispose |
| Gateway component removed from cabinet | Hardware theft | Secure the room and cabinet |
| Damaged cable and spilled liquid interrupt access | Hardware damage | Protect equipment and restore a safe environment |

The player then chooses physical protections: locked room, authorized badges, visitor checks, and a secured gateway cabinet.

Suspicious messages are inert game text. **Preserve evidence** copies them without opening links, executing attachments, or contacting real people. No real social engineering or discarded-material search is performed.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable.

- **Observation:** distinguish viewing, listening, intercepting, and taking discarded material.
- **Deception:** identify an attempt to influence the recipient, then verify independently.
- **Physical controls:** consider who can enter, see, remove, or recover information.
- **Attribution:** an account or badge record identifies an authorization, not a person.

Hints and retries are unlimited and penalty-free.

### Completion and story clue

```text
02:08  SECURITY AREA DOOR: OPENED
       AUTHORIZATION USED: M.VALE

02:10  EMPLOYEE CREDENTIAL: USED
```

> **Mara:** “My badge was cloned. Echo had access to identity records.”
>
> **Finch:** “The record proves the authorization was used, not who held it.”

Finch adds both the records and Mara's explanation to **Unresolved Records**, keeping evidence separate from interpretation.

Progress saves after each completed checkpoint stage. If the player leaves during a stage, that stage resumes with completed answers and prior progress preserved.

### Accessibility

- Incident cards and protection controls are keyboard operable.
- Screen readers announce the full scenario, selected concern, selected response, and feedback.
- Sender names and warning states use text rather than color or hover-only cues.
- The physical-security diagram has a text description.
- Simulated messages contain no working links or executable attachments.

## Lesson 3: Malware, Integrity, and Availability

**Depth:** Detailed. This lesson covers the most important technical material in the chapter.

### Story purpose

The recovery panel shows conflicting device status and failed connections. At the same time, Finch finds a quarantine system holding suspicious files.

> **Finch:** “One record says a device is working. Another says it is disconnected. That is not a healthy disagreement.”
>
> **Mara:** “The records are damaged and the quarantine files are probably junk. Bypass the warnings and bring the gateway online.”
>
> **Finch:** “I would rather understand what is happening before we ignore it.”

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All incidents are simulated.

#### Page 1: Integrity and availability

**Integrity** means information remains accurate, consistent, and protected from unauthorized change.

**Availability** means authorized people and systems can reach what they need when they need it.

A changed record can cause a bad decision. An unavailable service can stop legitimate work. Both can occur without exposing confidential information.

#### Page 2: Interference with information

- **Unauthorized alteration:** changing information without permission.
- **Impersonation or spoofing:** presenting a false identity.
- **On-path attack:** an unauthorized device or process between systems observes or changes traffic.
- **Replay attack:** a captured message is sent again to trigger an unauthorized result.

An **insider** has legitimate access. An account appearing in a log proves that the account was used, not who controlled it or whether the action was approved.

Protection can include integrity checks, verified identities, protected connections, and rejection of reused or altered messages.

#### Page 3: Availability problems

Availability can be affected by equipment damage, power loss, environmental problems, network interference, or overwhelming traffic.

- **DoS:** one source attempts to make a service unavailable.
- **DDoS:** multiple sources participate.
- Wireless interference can cause an outage without proving deliberate jamming.
- A **UPS** provides temporary battery power for safe operation or shutdown; it does not run indefinitely.

#### Page 4: Malware and vulnerabilities

**Malware** is software designed to cause harm or perform unwanted actions. A **vulnerability** is a weakness; an **exploit** misuses it. Trusted updates and **patches** correct known weaknesses but do not prevent every attack.

| Type | Primary behavior |
|---|---|
| Virus | Attaches to a host file and spreads when the infected file is used |
| Worm | Spreads between systems without a person opening every copy |
| Trojan | Disguises itself as useful or trustworthy |
| Adware | Displays unwanted advertising |
| Spyware | Secretly gathers information |
| Ransomware | Restricts access and demands payment |
| Rootkit | Hides activity or access from normal tools |
| Backdoor | Bypasses normal access controls |
| Keylogger | Records keystrokes |

Categories can overlap.

#### Page 5: Spread, detection, and recovery

Malware can arrive through deceptive messages, shared files, removable media, or network connections. **Spam** is unwanted bulk messaging and may carry malicious links or attachments. **Password cracking** attempts to discover passwords; strong unique passwords and MFA reduce risk. No guessing activity is performed here.

Antimalware tools can use **signatures** or behavior to detect suspicious files, but detection is not perfect. A safe response is:

1. **Contain:** isolate the device, share, or carrier.
2. **Preserve:** keep relevant messages and records.
3. **Update and patch:** use verified updates.
4. **Recover:** restore from a checked clean backup and test the result.

**Quarantine** prevents normal use while a file is reviewed. A backup called “clean” is not trusted until checked.

### Checkpoint: Triage and contain the incident

#### Guided stage: Triage one incident

Finch presents a practice alert:

```text
ALERT: A captured sign-in message was reused.
SHARE: A suspicious executable is spreading between systems.
POWER: Essential gateway equipment reports no UPS.
```

The player:

1. Identifies the first event as a **replay attack** affecting integrity and access.
2. Identifies the second as worm-like spread requiring the share to be isolated.
3. Confirms the UPS should be connected before power risk interrupts recovery.

Feedback explains that containment precedes investigation and recovery. No real traffic, malware, or equipment is used. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

#### Main task: Contain and recover

The player works through a three-part incident board.

#### Part 1: Identify the incidents

| Incident | Primary identification |
|---|---|
| A stored configuration value is changed without authorization | Unauthorized alteration; integrity |
| A captured authentication message is reused | Replay attack |
| A rogue device between systems changes traffic | On-path attack |
| A forged monitoring message claims a trusted identity | Impersonation or spoofing |
| One source floods a service with fake requests | DoS; availability |
| Many sources flood a service | DDoS; availability |
| A wireless link fails from unexplained interference | Availability problem; deliberate jamming is not established |
| Essential equipment shuts down during a power failure | Availability; UPS could help |
| An account changes a configuration outside its approved duties | Potential insider alteration; investigate before naming the person |

The game shows the incident descriptions and choices, not the identification table.

#### Part 2: Identify the malware

The player matches fictional samples to behavior:

| Sample behavior | Match |
|---|---|
| Attaches to a document-like executable and spreads when opened | Virus |
| Spreads through a share without each copy being opened | Worm |
| Claims to be a scanner while performing a hidden action | Trojan |
| Displays unwanted advertising | Adware |
| Secretly reports browsing activity | Spyware |
| Restricts files and demands payment | Ransomware |
| Hides activity from normal tools | Rootkit |
| Bypasses normal authentication | Backdoor |
| Records keystrokes | Keylogger |

The player also identifies the primary security concern for each sample. Overlapping behavior is accepted when the primary match is supported.

#### Part 3: Contain and recover

The player must:

1. Isolate the infected carrier.
2. Restrict the affected recovery share and removable-media connection.
3. Keep the suspicious sample quarantined and preserve the original evidence.
4. Apply the verified patch and trusted signature updates.
5. Connect essential simulated equipment to the UPS.
6. Select a checked clean backup and restore the affected files.
7. Reject the simulated ransom request and payment link.
8. Confirm that the recovery service responds.

Choosing to delete all files, block all traffic, or restore an unchecked backup receives specific feedback and can be corrected.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable.

**Integrity attacks**
1. “Was information reused, intercepted between systems, spoofed, or altered?”
2. “A replay reuses an old message; an on-path attacker sits between systems.”
3. “If a saved record changes without approval, which property and attack apply?”

**Availability**
1. “Is the outage caused by too many requests, lost power, physical damage, or interference?”
2. “Check whether the source is one system, many systems, or not established.”
3. “If several infected systems flood one service, which term applies?”

**Malware**
1. “Identify behavior instead of trusting the filename.”
2. “Separate disguise, self-spreading, concealment, and payment demands.”
3. “A file that pretends to be a scanner but opens a hidden route has both Trojan and backdoor behavior.”

**Recovery**
1. “Contain the spread before investigating or restoring.”
2. “A verified backup must be checked before use.”
3. “If the backup contains the same infected file, would restoring it solve the incident?”

Hints and retries are unlimited and penalty-free.

### Completion and story clues

The simulated spread is contained, the service is available, and the verified backup restores the affected files. The gateway remains offline.

Two records are preserved:

```text
VERSION LABELED ORIGINAL:
HABITAT ACCESS = DENIED

VERSION LABELED MODIFIED:
HABITAT ACCESS = M.VALE
```

```text
FILE: ObservationArchive.exe
QUARANTINED BY: E.C.H.O_Thread_01
```

> **Mara:** “Echo changed the policy and planted that file. He wanted us to run out of power.”
>
> **Finch:** “The second record says Echo quarantined it. Storage space has never been the most important question, but why would sabotage preserve evidence?”
>
> **Mara:** “A stolen account can still do useful-looking things. Preserve both and keep moving.”

The labels and quarantine entry establish what was recorded, not who performed each action or why. Finch adds both findings and Mara's explanation to **Unresolved Records**.

Progress saves after each completed checkpoint stage. If the player leaves during a stage, that stage resumes with completed answers and prior progress preserved.

### Accessibility

- Incident and sample cards present complete text and never execute a file.
- Classification controls are keyboard operable.
- Screen readers announce the incident, selected classification, selected response, and feedback.
- Containment steps use an ordered checklist with current and completed states.
- Attack, malware, backup, and quarantine states use text rather than color alone.
- Any alert sound has a visual message and caption.

## Lesson 4: Authentication and Access Control

**Depth:** Detailed.

### Story purpose

The recovery environment requests more than a password before allowing work. After authentication, Mara wants the player to take full administrator access so they can finish faster.

> **Finch:** “The module requires more than a password.”
>
> **Mara:** “Disable the second check and give yourself full administrator access. We are wasting time.”
>
> **Finch:** “Or we can establish who should have access—and to what.”
>
> **Mara:** “Fine. Be quick about it.”

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All accounts, factors, and policies are fictional.

#### Page 1: Authentication and authorization

**Authentication** checks an identity claim: “Are you who you say you are?”

**Authorization** decides what the authenticated account may do.

A successful sign-in does not grant access to everything. Permissions and policy still apply.

#### Page 2: Authentication factors

- **Something you know:** password, PIN, or security question.
- **Something you have:** hardware token, software token, or smart card.
- **Something you are:** fingerprint, face, retina, or another biometric.
- **Somewhere you are:** an approved location or network condition.

**Multifactor authentication** uses factors from different categories. Two passwords remain one category. A token and the one-time code it generates remain one possession-based check. A location condition can support access but does not by itself prove identity.

Biometrics are sensitive and cannot be changed like a password. No biometric check is perfect.

#### Page 3: Single sign-on

**SSO** lets one authentication session open multiple connected applications, subject to each application's authorization.

SSO is not the opposite of MFA. A user can complete MFA through SSO and then open approved applications. SSO does not grant permission to everything.

#### Page 4: Permissions and least privilege

**Authorization** uses permissions such as reading a record or changing a setting.

**Least privilege** means granting only the access required, for only as long as required. A diagnostic unit that submits readings should not manage accounts or read restricted records.

A **standard account** has limited permissions. An **administrator account** can manage more system settings and accounts. Even administrators should elevate only when needed.

#### Page 5: Access-control models and classifications

- **Mandatory access control (MAC):** centrally managed classification rules.
- **Discretionary access control (DAC):** an owner grants access within system rules.
- **Role-based access control (RBAC):** permissions come through assigned roles.
- **Rule-based access control:** conditions such as terminal location or time determine access.

Systems can combine models. A **classification** describes how information must be protected. An **access control list (ACL)** identifies who may perform which actions on a resource.

### Checkpoint: Restore secure access

#### Guided stage: Reasons and restrictions

Finch presents two practice cases:

1. A password plus a smart card → **knowledge and possession**, so the categories differ.
2. A recovery role that works only from the Workshop terminal → **role-based permissions plus a rule-based location condition**.

The player also identifies that a fingerprint and facial scan are two biometric samples from the same broad category, and that a token's generated code is part of the token check.

Feedback explains that MFA counts categories, not prompts, and that authorization combines roles with restrictions. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

#### Main task: Authenticate and assign access

The player works in a fictional recovery simulator. The gateway remains offline.

#### Part 1: Identify the factors

| Combination | Expected identification |
|---|---|
| Password + hardware token | Knowledge and possession |
| Password + PIN | Two items from the same category |
| Hardware token + its one-time code | One token-based check |
| Fingerprint + facial scan | Two biometric samples from one broad category |
| Password + token + approved location | Multiple categories plus a location condition |

#### Part 2: Sign in safely

The player completes:

1. A fictional password
2. The approved hardware token
3. A one-time code before it expires
4. The approved Workshop location
5. A simulated biometric confirmation

If the code expires, the player requests a new one. Repeated failures produce a temporary simulated lockout. No real credential, biometric, or location is collected.

Mara again suggests disabling MFA. The player keeps it enabled and completes sign-in.

#### Part 3: Use SSO

The player opens two approved recovery applications through SSO. Each application still checks authorization. The player identifies that SSO shared the sign-in while MFA checked multiple factors.

#### Part 4: Assign least privilege

The player configures access:

| Identity | Allowed | Denied |
|---|---|---|
| Player | Gateway recovery and approved records | Protected evidence and account management |
| Finch | Monitoring | Changing permissions |
| Diagnostic unit | Submit readings | Read restricted records |
| Mara | Review approved records under policy | Protected evidence and administrator actions |
| External support | Temporary limited access after approval | Standing or unrestricted access |

The player applies the recovery role, the Workshop-terminal rule, the classifications, and the ACL. Granting full administrator access is blocked by policy and must be corrected.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable.

- **Factors:** count categories, not prompts. A token and its code remain one possession check.
- **Safe sign-in:** keep MFA, use the approved token and location, and handle expiring codes correctly.
- **SSO:** SSO changes how many times the player signs in, not what the account may access.
- **Least privilege:** start with the task each identity performs.
- **Access models:** distinguish owner decisions, central classifications, roles, and conditions.

Hints and retries are unlimited and penalty-free.

### Completion and story clues

The simulated applications open with scoped permissions.

```text
LEGACY PROFILE: E.C.H.O_Thread_01
LOCAL AUTHENTICATION: ACCEPTED
```

Finch also finds:

```text
ROLE: RESEARCH-OBSERVATION
MEMBER: M.VALE
CATEGORY: HABITAT
STATUS: ACTIVE UNTIL FACILITY FAILURE
```

> **Mara:** “A stale mapping and a retired training role. Those records are unreliable.”
>
> **Finch:** “The role was active the night the facility failed.”
>
> **Mara:** “Keep working.”

The records do not establish what Mara did with the role or why the player's sign-in produced an Echo profile. Finch adds both findings and Mara's explanation to **Unresolved Records**. The protected evidence store remains sealed.

Progress saves after each completed checkpoint stage. If the player leaves during a stage, that stage resumes with completed answers and prior progress preserved.

### Accessibility

- Factor and permission controls are keyboard operable.
- Simulated credential fields support paste and labeled show/hide controls.
- Screen readers announce each authentication step, expiration, result, and simulated lockout.
- Access tables use labeled row and column headers.
- **Allowed** and **Denied** use text labels.
- The factor table associates each item with its category and MFA result.
- Protected evidence is omitted from output unless access is explicitly granted.
- No real credentials, biometrics, locations, or accounts are collected.

## Lesson 5: Evidence, Accountability, and Privacy

**Depth:** Detailed. This lesson carries the chapter's central investigation and ends by protecting the evidence that will matter later.

### Story purpose

Finch brings together the security records. Mara claims Echo altered them and wants the recovery finished without further investigation. Finch wants to reconstruct what each record actually establishes. The recovered records also contain personal information.

> **Mara:** “Echo altered those records. Upload the entire archive with a public link and move on.”
>
> **Finch:** “Those are two different mistakes. We need to understand the evidence, and we should not expose personal information while doing it.”
>
> **Mara:** “Then finish the report and leave the records alone.”

The player opens the lesson on their laptop.

### Lesson pages

The player can use **Next** and **Back** and review the pages during the checkpoint. All records are fictional and the protected evidence store remains sealed.

#### Page 1: Accounting and evidence

**Accounting** records activity for later review. Logs can show sign-ins, configuration changes, service events, and door activity. Windows Event Viewer can display Security, System, and Application events.

A log entry records what a system observed. An account name does not prove which person controlled the account. Logs may be incomplete, inaccurate, or altered, so compare sources where possible.

Other evidence includes browser history, physical-access records, camera footage, device location, biometric records, and receipts. Each has limits:

- Browser history does not prove who used the browser.
- A badge record does not prove who held the badge.
- Video may be incomplete or need authentication.
- GPS and cell data are approximate.
- Biometrics may be mistaken and are sensitive.

#### Page 2: Nonrepudiation

**Nonrepudiation** makes it harder for someone to deny an action.

A digital signature can show which key signed a record and whether the record changed afterward. A receipt can show that a system accepted or transferred something. Neither proves every claim: a key could be used by someone else, and a receipt does not prove that file contents are true.

#### Page 3: Privacy and personal information

**Privacy** concerns how information about people is collected, used, stored, and shared. **PII** can identify someone directly or when combined with other details.

Ask:

- Why is this information needed?
- Is all of it necessary for this purpose?
- Who is authorized to receive it?
- How long must it be kept?

**Consent** permits a particular use; it does not automatically authorize every later purpose. The U.S. Privacy Act, CCPA, and GDPR are examples with different scopes. This lesson introduces privacy principles, not legal advice.

#### Page 4: Communication, sharing, and cookies

Posts, email, and instant messages can expose information through content, audience, forwarding, and later copying.

Safer sharing means limiting information and recipients, requiring MFA, using expiring links, applying current software, encrypting data in transit and at rest, and sending any package password through a separate trusted channel. Avoid untrusted public Wi-Fi for sensitive work.

A **cookie** is information a site stores in a browser. First-party cookies belong to the visited site; third-party cookies belong to another content provider. Essential cookies may support required functions; analytics and advertising are optional in this task.

### Checkpoint: Reconstruct and preserve the incident

#### Guided stage: Separate evidence from interpretation

Finch presents three short items:

1. `02:11 ACCOUNT M.VALE: AUDIT POLICY DISABLED`
   → Original log entry showing what the system recorded.
2. “The account owner personally disabled the policy.”
   → Interpretation not established by the account name alone.
3. “The diagnostic unit moved to the satellite terminal.”
   → Unverified reconstruction of missing text, not an original fact.

The player labels each item, then decides which three fields an incident auditor needs:

- Event timestamps
- Relevant configuration changes
- Unrelated employee home addresses
- Fingerprint images
- Account identifiers needed to explain the recorded activity

**Needed:** timestamps, configuration changes, and necessary account identifiers.
**Not needed:** unrelated addresses and fingerprint images.

Feedback connects evidence limits to privacy minimization. Keyboard controls, three hints, and unlimited penalty-free retries remain available.

#### Main task: Build the timeline and package

#### Part 1: Build the timeline

The player orders the events, identifies each source, and marks what is established and what remains uncertain:

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

Supporting records include the independent security monitor, a camera clip with an obscured face, browser history, device location, a signed manifest, and a transfer receipt. The signed manifest can show that signed content has not changed since signing; it does not prove who made an earlier change.

#### Part 2: Select the supported conclusion

1. **An external attacker performed all relevant actions.** Incorrect: contradicted by the independent monitor and Workshop-terminal origin.
2. **Mara personally changed the policy.** Overclaim: her account was used, but the evidence does not prove who controlled it.
3. **An authenticated internal account changed the policy through the Workshop terminal; the responsible person and Echo's motive remain unproven.** Correct.

#### Part 3: Prepare the evidence package

The package must include the verified timeline, relevant configuration records, necessary account identifiers, and source/uncertainty labels. It excludes unrelated names, addresses, fingerprints, medical images, training documents, AI reconstructions, and anything from the sealed store.

The player:

1. Preserves the original records unchanged.
2. Creates a working copy.
3. Redacts unnecessary personal information.
4. Requires MFA and named authorized recipients.
5. Uses an expiring link, encryption, current software, and the private Workshop connection.
6. Sends any package password through a separate trusted channel.
7. Selects essential cookies only.

#### Part 4: Verify the package

| Test | Expected result |
|---|---|
| Authorized recipient opens the package | Access granted |
| Unauthorized recipient uses the link | Access denied |
| Authorized recipient uses an expired test link | Access denied |

The package is not sent until all tests pass.

### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable.

- **Timeline:** use recorded times and sources; distinguish account, device, location, and person.
- **Evidence:** explain what each record establishes and what it cannot prove.
- **Conclusion:** choose a claim supported by multiple records without overstating identity.
- **Package:** include only what supports the report, protect the originals, and restrict access.
- **Cookie choice:** collect only categories needed for the task.

Hints and retries are unlimited and penalty-free.

### Completion and story clue

The timeline and restricted package are preserved. The original records remain unchanged, and the protected evidence store remains sealed.

Finch finds records using **SUBJECT** identifiers alongside real-looking medical information.

> **Finch:** “These aren't training records.”
>
> **Mara:** “They are old consent files. You aren't authorized to interpret them. Finish the report.”
>
> **Finch:** “I can finish the report and still record that these exist.”

Finch adds the finding and Mara's explanation to **Unresolved Records**, without treating her explanation as verified. The gateway remains offline and ready for final recovery.

Progress saves after each completed checkpoint stage. If the player leaves during a stage, that stage resumes with completed answers and prior progress preserved.

### Accessibility

- Timeline cards can be reordered with keyboard-accessible move-up and move-down controls.
- Evidence cards expose complete text and limitations without requiring image interpretation.
- Screen readers announce event time, source, evidence status, and timeline position.
- **Established**, **Uncertain**, and **Unsupported** use text labels rather than color alone.
- Evidence fields announce whether they are included, excluded, or redacted.
- Redacted and restricted values are omitted from accessibility output unless authorized.
- Cookie choices state their purpose and current value without relying on toggle color.
- Camera and physical evidence have text descriptions.

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

### Ending

The Systems Wing door opens with a visible **Door unlocked** message and caption. Before the player enters, Finch brings the unresolved findings back into view:

```text
02:14  HABITAT ACCESS CHANGED: M.VALE
       ORIGIN: WORKSHOP TERMINAL

HIDDEN ROLE: RESEARCH-OBSERVATION
LEGACY IDENTITY: E.C.H.O_Thread_01
PROTECTED EVIDENCE STORE: STILL SEALED
```

Mara sees the preserved records.

> **Mara:** “Why is that still open? We agreed to leave those records alone.”
>
> **Finch:** “We agreed to leave the protected store sealed. I preserved the records we were already authorized to review.”
>
> **Mara:** “They are incomplete. Incomplete records are how people get accused of things they didn’t do.”
>
> **Finch:** “Then the complete record should help clear things up.”
>
> **Mara:** “We don’t have time for this.”

The player can respond with either dialogue option. The choice records the player's tone for later conversations but does not change access, rewards, or the current objective.

**Option A**

> **Player:** “I’ll keep working. But we’re not leaving these questions buried.”

**Option B**

> **Player:** “Fine. The gateway comes first.”

Finch confirms the incident result:

```text
MALWARE SPREAD: STOPPED
RECOVERY SERVICE: AVAILABLE
MFA: ENABLED
ACCESS: LEAST PRIVILEGE
PACKAGE: RESTRICTED AND VERIFIED
```

Mara immediately turns toward the Systems Wing.

> **Mara:** “The automation core controls backups, maintenance routines, and the remaining environmental systems. It has to be restored.”
>
> **Finch:** “It also lists a fragmented audit archive.”
>
> **Mara:** “The audit archive is not the priority.”
>
> **Finch:** “It might be the only complete record of what happened.”

### Reward

Finch notices a sealed security case inside the gateway cabinet.

> **Finch:** “One more item survived the lockdown. I believe this belongs to the project.”

The case contains a physical thumb drive with the **Testing Agent build component**.

- Standard boss completion provides the standard Testing Agent.
- A perfect finish provides the upgraded Testing Agent instead.
- The player never receives both versions.
- The component is added to the in-game project build.
- It is not launched or used during gameplay.
- The finished app remains intended for download only after the full campaign and Chapter 7 boss.

Mara barely acknowledges the case.

> **Mara:** “Good. Bring it with you.”
>
> **Finch:** “She didn’t ask what it was.”

Finch preserves the Unresolved Records, including each source, each uncertainty, and Mara's explanations kept separate from the original findings. Mara is already walking toward the Systems Wing.

The chapter ends as the player crosses the unlocked threshold.

### Chapter 6 handoff

The Systems Wing opens onto the automation and recovery core:

```text
SYSTEMS WING: ACCESS GRANTED
AUTOMATION CORE: SAFE MODE
BACKUP QUEUE: HALTED
SCHEDULED MAINTENANCE: OFFLINE
AUDIT ARCHIVE: FRAGMENTED
RECOVERY LOGS: AVAILABLE
```

Finch believes the halted recovery queue can reconstruct parts of the deleted audit history. Mara insists that restoring the automation core is the priority.

Chapter 6 begins with the player entering the Systems Wing. Its immediate objective is to restore the Automation Core and recover the queued audit records before the remaining backups become unusable.

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
