# Chapter 4: The Archive Recovery

**Status:** Draft outline and boss concept. The story, lessons, checkpoints, and boss will be developed together.

## Story setup

The Asset Registry identifies a backup called `ARCHIVE-09`, but its local copy is damaged. A remote copy still exists in Safehouse storage.

Because the facility is remote, its working external connection is through a satellite relay. Mara wants the archive because it should contain infrastructure records and the remaining facility map. She warns that Echo may have corrupted its contents.

Finch is hopeful that the archive contains some of his missing memories.

> **Finch:** "My memories are in remote storage. I'm not sure whether that makes me backed up or extremely absent-minded."

The chapter progresses from restoring the network, to reaching the archive, to evaluating what its AI-assisted recovery reveals.

## Lesson 1: Network communication and network models

**Topics:**

- How devices communicate
- LANs and WANs
- Client/server and peer-to-peer models
- Throughput units: bps, Kbps, Mbps, Gbps, and Tbps
- The difference between throughput and stored file size

**Story purpose:** Finch needs to retrieve records from several locations: the Workshop file server, the local archive appliance, and remote storage. The player must understand which connections stay inside the Safehouse and which cross the WAN.

**Checkpoint:** Label a network diagram showing:

- Workshop devices communicating over the LAN
- The satellite connection providing WAN access
- The player's laptop acting as a client
- The file server responding to requests
- Two diagnostic units communicating peer to peer

Then compare two throughput measurements and determine whether the satellite link can transfer the archive during its available window.

**Visible result:** Finch produces a communication map and calculates the estimated archive-transfer time.

## Lesson 2: Network devices and identifiers

**Topics:**

- Modems, routers, switches, access points, and firewalls
- IP addresses, MAC addresses, and ports
- The different jobs performed by each identifier

**Story purpose:** The physical communication rack is intact, but its recovered configuration labels have been mixed up.

**Checkpoint:** Build the communication path by placing each device in the correct role:

```text
Laptop -> Switch -> Router -> Satellite modem -> Remote archive
```

Add the access point for the mobile diagnostic unit and the firewall protecting the facility connection. Then match:

- MAC addresses to local network interfaces
- IP addresses to network locations
- Port numbers to particular services

**Visible result:** The local network comes online, but the satellite link remains unavailable.

## Lesson 3: Internet connections and network storage

**Topics:**

- Fiber, cable, DSL, RF wireless, satellite, and cellular
- NAS, file servers, and cloud storage
- Advantages and limitations of different connection types

**Story purpose:** Mara offers several recovered service records. The player must determine which connection the Safehouse actually uses and where each archive copy resides.

**Checkpoint:** Match connection types to fictional scenarios, including why the remote Safehouse relies on satellite rather than fiber. Then identify:

- `FINCH-NAS`: Local network-attached storage
- `WORKSHOP-FILES`: File server
- `ARCHIVE-09`: Cloud-stored backup

Select the appropriate storage location for recovering the remote archive.

**Visible result:** The satellite modem connects. Finch locates `ARCHIVE-09`, but cannot yet retrieve it because the required services are unavailable.

## Lesson 4: Network services and protocols

**Topics:**

- DNS, DHCP, and NAT
- Ports, TCP, and UDP
- HTTP and HTTPS
- Secure browsing, file transfer, and email

**Story purpose:** The satellite link works, but the laptop cannot translate the archive's name into an address, and the firewall is blocking the recovery service.

**Checkpoint:** Complete a simulated service configuration:

- Obtain an approved address through DHCP
- Resolve `archive.safehouse7.test` through the simulated DNS
- Select HTTPS for the secure archive connection
- Match the service with its correct port
- Identify why TCP is appropriate for a complete, reliable file transfer
- Review a fictional NAT mapping that lets the remote service respond through the facility router

**Visible result:** The archive sign-in page appears through a secure simulated connection.

## Lesson 5: Wireless configuration and security

**Topics:**

- 802.11n/ac/ax
- Speed considerations, interference, and attenuation
- 2.4 GHz, 5 GHz, and 6 GHz bands
- SSIDs and changing default passwords
- Open networks, pre-shared keys, WPA, WPA2, and WPA3

**Story purpose:** Finch needs a mobile diagnostic unit near the satellite equipment. Its wireless configuration uses an old default SSID, an open network, and a crowded channel.

**Checkpoint:** Produce a secure configuration by:

- Assigning the approved fictional SSID
- Changing the default administrator password
- Selecting WPA3, or WPA2 if the simulated device does not support WPA3
- Choosing a band supported by both the access point and diagnostic unit
- Selecting a channel with less interference
- Checking that signal strength is adequate near the equipment

**Visible result:** The mobile unit connects and reports that the remote archive is ready for recovery.

## Lesson 6: Virtualization and cloud technologies

**Topics:**

- Virtualization, hypervisors, and guest operating systems
- IaaS, PaaS, and SaaS
- On-premises, cloud, and hybrid deployments
- Why virtualization and cloud computing are related but not identical

**Story purpose:** The archive's recovery application cannot run directly on the player's laptop. Finch provides an isolated virtual machine image for it.

**Checkpoint:** Prepare the recovery environment by:

- Selecting the hypervisor to run the guest operating system
- Identifying the guest OS inside the virtual machine
- Matching IaaS, PaaS, and SaaS to fictional service examples
- Choosing a hybrid deployment: the recovery application runs locally while the archive remains in cloud storage until downloaded

**Visible result:** The isolated recovery environment starts and downloads the damaged archive.

## Lesson 7: AI-assisted recovery and verification

**Topics:**

- AI chatbots and assistants
- Generative AI, including generated content and code
- AI predictions and suggestions
- Why plausible AI output still needs verification

**Story purpose:** Parts of the archive are unreadable. An AI recovery assistant offers to summarize the damage, suggest repairs, and reconstruct missing text.

**Checkpoint:** Review several AI suggestions and decide how each should be treated:

- A suggested configuration supported by system evidence: potentially usable after verification
- A generated repair script: inspect and test before running
- A reconstructed sentence from a damaged log: label as reconstructed, not original evidence
- A confident claim contradicted by timestamps: reject
- A summary of readable records: compare with the source before accepting

**Visible result:** The assistant recovers the readable records while clearly separating original evidence, AI-generated suggestions, and uncertain reconstructions.

That distinction can become important throughout the rest of the game.

## Boss concept: Archive recovery

**Status:** Initial concept to be refined after the lessons.

### Boss sequence

1. **Restore the communication path:** Place the network devices correctly and identify the LAN and WAN portions.
2. **Select storage and connection records:** Locate the remote archive and confirm the satellite link can support the transfer.
3. **Restore required services:** Complete DHCP, DNS, HTTPS, port, and protocol selections.
4. **Secure the diagnostic unit:** Correct its SSID, password, encryption, band, and channel settings.
5. **Start the recovery environment:** Select the hypervisor, guest OS, and hybrid recovery arrangement.
6. **Evaluate the AI assistance:** Approve appropriate assistance, reject unsupported claims, and preserve the distinction between evidence and reconstruction.
7. **Verify the archive:** Confirm the downloaded file matches its simulated checksum and that all required records are present.

### Phase 1: Restore the communication path

#### Identify the network roles

Select labels for important parts of the map:

- Workshop LAN
- Satellite WAN
- Laptop as client
- Archive server
- Two diagnostic units exchanging a signal map peer to peer

#### Locate the correct storage

Inspect three destinations:

- `FINCH-NAS`: Contains the local recovery VM
- `WORKSHOP-FILES`: Contains maintenance documents
- `ARCHIVE-09`: Contains the required remote backup

#### Check the transfer time

The archive is `600 MB`, and the satellite connection provides `20 Mbps`. The player chooses the closest estimate: approximately four minutes, ignoring overhead.

This uses Chapter 2's bits-and-bytes knowledge alongside the throughput lesson.

#### What makes it fun

Every correct connection illuminates part of the map. A small simulated packet travels from the laptop toward the archive but stops at the firewall, giving the player a visible reason to begin the next phase.

Finch comments on the progress:

> **Finch:** "We have a route. Unfortunately, the firewall appears to be taking its responsibilities seriously."

### Phase 2: Establish the secure link

The player now works between two connected panels: Network Services and Mobile Unit. Neither requires fast mouse movement; the satellite timer simply continues while they think.

#### Restore the network services

The player completes a small set of related decisions:

- Use DHCP to obtain the laptop's approved address.
- Use DNS to resolve `archive.safehouse7.test`.
- Select HTTPS and the appropriate secure-web port for the archive connection.
- Choose TCP for the archive transfer because the complete file must arrive reliably.
- Identify UDP as suitable for the satellite's frequent position updates, where the latest update matters more than recovering every older one.
- Complete a fictional NAT mapping so the remote server can respond to the laptop through the facility router.

To cover the basic service examples, the mission can include three final actions:

- Open the secure archive page.
- Start the file transfer.
- Send Mara an automated status email.

#### Connect the mobile diagnostic unit

The unit near the satellite equipment cannot maintain a connection. The player receives a wireless status report:

- The unit supports 802.11ac but not 6 GHz operation.
- The current network uses the default SSID.
- The administrator password is still the default.
- The network is open.
- The current channel has heavy interference.

The player must:

1. Assign the approved fictional SSID.
2. Replace the default administrator password.
3. Select WPA3 if supported, or WPA2 for this older simulated unit.
4. Choose an appropriate band supported by both devices.
5. Select a clearer channel.
6. Confirm adequate signal strength after accounting for interference and attenuation.

#### What makes it fun

The mobile unit begins transmitting its camera feed. The player watches the satellite equipment come into view while the archive connection progresses from Unreachable to Securely connected.

### Phase 3: Recover the archive

The remote archive requires a recovery application that cannot run directly on the player's laptop.

#### Start the recovery environment

The player must:

- Retrieve the VM image from `FINCH-NAS`.
- Start it using the local hypervisor.
- Identify the guest operating system.
- Confirm that the arrangement is hybrid: local recovery software working with cloud-stored data.
- Match one additional example each to IaaS, PaaS, and SaaS through the available service catalog.

The download then begins inside the isolated recovery environment.

#### Evaluate the AI recovery assistant

While the archive downloads, the AI assistant presents three situations:

1. **A suggested configuration change:** The player compares it with the network evidence and accepts or rejects it.
2. **A generated repair script:** The player inspects it and tests it inside the VM rather than running it blindly.
3. **A reconstructed message:** The AI has filled in missing text from a damaged team log. The player must label it AI-reconstructed, not original evidence.

One suggestion should be confident but contradicted by timestamps, requiring rejection.

#### Finish the mission

The player verifies the archive's simulated checksum and confirms that the expected records are present. The download finishes just as the satellite reaches the edge of the window, allowing a cinematic final transfer without requiring the player to wait through a real progress bar.

### Why this should be enjoyable

- The player repairs a visible system, rather than answering disconnected questions.
- Each phase produces a meaningful transformation: route established, secure connection acquired, archive recovered.
- The satellite creates urgency without requiring reflexes.
- Finch and the mobile unit provide character and movement.
- The AI segment adds judgment and story tension rather than another configuration exercise.
- The final recovered log provides the narrative payoff immediately.

For pacing, allow 30-35 minutes, pause the timer during hints and story sequences, and preserve all completed work if the window closes. Finch can then report that another satellite pass is available, allowing the player to continue rather than restart.

### Ending discovery

Inside the recovered archive, the player finds a partially damaged exchange between two original team members:

```text
TOMAS: The shutdown did not come from an external connection.
TOMAS: It originated inside the Safehouse.
NIA: Then explain the emergency exits.
NIA: They opened before the central systems failed.
```

Mara responds:

> **Mara:** "Echo had access to those records. It could have altered them to make itself look protective."

That remains a reasonable interpretation for the player. But it introduces a genuine question: why would a saboteur open emergency exits before destroying the facility?

The archive also contains a drive image for the Coding Agent, connecting the chapter reward to the recovery. Finch retains the recovered records, and the story moves forward with the first substantial evidence that Mara's account may not explain everything.

## Reminders for discussion

These are suggestions to revisit when developing the relevant parts, not approved changes to the outline:

- **Story setup and Lessons 3-4:** Explain how the approved archive connection relates to Chapter 3's `REMOTE ACCESS: DENIED` safeguard without establishing Echo's motive.
- **Story setup and Lessons 6-7:** Clarify whether the remote archive also contains unreadable sections, since the local copy is damaged and the AI recovery requires damaged material.
- **Lesson 1:** Provide an estimated satellite throughput and archive size for the transfer calculation; explain that actual transfer time can vary. `Tbps` means terabits per second.
- **Lesson 2:** Consider describing the local network's physical connections as restored, with address and service configuration still to come in Lesson 4.
- **Lesson 6:** Consider a restricted recovery VM that can reach the authorized archive rather than a completely disconnected VM.
- **Boss timer:** Decide whether the perfect bonus is affected if the satellite window expires; the draft preserves completed work for the next pass.
- **Boss verification:** Review download and checksum order, and use a trusted expected checksum. A match checks file integrity, not the truth of its contents.
- **Boss wireless configuration:** Specify compatible security and bands for both devices; 802.11ac support alone does not establish WPA3 support.
- **Boss ending:** Keep readable original log text distinct from AI reconstruction.
- **Boss continuity:** Revisit how the authorized archive connection relates to Chapter 3's `REMOTE ACCESS: DENIED` safeguard.
