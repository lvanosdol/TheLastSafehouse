# Chapter 4: The Archive Recovery

**Status:** Draft outline and boss concept. The story, lessons, checkpoints, and boss will be developed together.

## Story setup

The Asset Registry identifies a backup called `ARCHIVE-09`, but its local copy is damaged. A remote copy still exists in Safehouse storage.

Because the facility is remote, its working external connection is through a satellite relay. Mara wants the archive because it should contain infrastructure records and the remaining facility map. She warns that Echo may have corrupted its contents.

Finch is hopeful that the archive contains some of his missing memories.

> **Finch:** "My memories are in remote storage. I'm not sure whether that makes me backed up or extremely absent-minded."

The chapter progresses from restoring the network, to reaching the archive, to evaluating what its AI-assisted recovery reveals.

### Opening scene: The Archive

The player plugs the Development Setup Agent's thumb drive into their laptop. Once it's installed, Finch returns to the restored Asset Registry on the Workshop monitor.

> **Finch:** "While you were installing that, I found another entry in the registry. A backup called `ARCHIVE-09`."
>
> **Mara:** "What's in it?"
>
> **Finch:** "The description mentions infrastructure records and a facility map. Or at least, it did when the entry was last updated."
>
> **Mara:** "Open it."

Finch tries the local copy. The monitor pauses, then displays:

```text
ARCHIVE-09: LOCAL COPY DAMAGED
REMOTE COPY: LISTED IN REGISTRY
SATELLITE CONNECTION: UNAVAILABLE
```

> **Finch:** "The local copy isn't readable. The registry lists another one in remote storage, but I can't reach it."
>
> **Mara:** "Then we'll restore the connection. Those records could show us more of the facility."

Finch hesitates. Another line in the registry mentions that the archive *may* contain system memory records.

> **Finch:** "There might be something of mine in there, too. I don't know how much is left."
>
> **Mara:** "Echo had access to those records. Don't assume everything in that backup is trustworthy."
>
> **Finch:** "My memories are in remote storage. I'm not sure whether that makes me backed up or extremely absent-minded."

Finch brings up an incomplete map of the Safehouse's communications equipment. Some devices are visible, but their connections aren't clear.

> **Mara:** "Before we can reach the archive, you need to understand how the devices here communicate—and how they connect beyond the Safehouse."
>
> **Finch:** "A map we can actually finish. That would be a nice change."

The player opens the first networking lesson on their laptop.

**Continuity note:** The remote-copy location comes from the local registry, not a successful connection. What Chapter 3's `REMOTE ACCESS: DENIED` safeguard applies to remains open; the scene does not establish why access was denied or what Echo intended.

### Story direction (design spoilers)

Chapter 4 is where the player begins noticing a pattern of increasingly obvious clues, without learning the full truth until Chapter 7. Early oddities can have plausible explanations; as further clues appear, Mara becomes more insistent about directing attention away from suspicious records. Her interpretation remains a claim, not established fact.

Finch is genuinely curious and does not remember that the player is Echo or what Mara used to do. As the Safehouse system, Finch was involved in her work and saved data from her experiments, but his missing memories prevent him from recognizing that history. Finch and the player discover clues together. Original evidence must remain distinguishable from AI reconstructions.

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

### Detailed lesson: How networks communicate

#### Opening

Finch brings up the incomplete communications map on the Workshop monitor.

> **Finch:** "I can see the laptop, the file server, and the satellite equipment. I'm less certain about how everything connects."
>
> **Mara:** "Start with the basics. Once you understand the connections, you can work out what needs restoring."

The player opens the lesson on their laptop.

#### Lesson pages

The player can use **Next** and **Back** and review the lesson during the checkpoint. All devices and network activity are simulated.

##### Page 1: What is a network?

A **network** connects devices so they can exchange information. A laptop might request a file from a server, or two diagnostic devices might exchange readings.

Information travels as small pieces called **packets**. The receiving device uses them to put the information back together.

##### Page 2: LANs and WANs

A **local area network (LAN)** connects devices in a relatively small area, such as the Safehouse Workshop. The laptop and Workshop file server can communicate over the LAN.

A **wide area network (WAN)** connects networks across larger distances. The satellite connection provides the Safehouse with a route beyond its local network to remote storage.

A device can use the local network to reach another network; the LAN and WAN are different parts of the journey.

##### Page 3: Clients, servers, and peers

A **client** requests a service or information. A **server** provides it. For example, the player's laptop can request a file from the Workshop file server.

In a **peer-to-peer** exchange, devices communicate directly as peers. Two diagnostic units can exchange a signal map with each other rather than requesting it from a central file server.

A device's role depends on what it is doing: a laptop can act as a client when requesting a file.

##### Page 4: Throughput

**Throughput** is the amount of data transferred per second. It is often measured in **bits per second**:

| Unit | Meaning |
|---|---|
| `bps` | bits per second |
| `Kbps` | kilobits per second |
| `Mbps` | megabits per second |
| `Gbps` | gigabits per second |
| `Tbps` | terabits per second |

Each step in this list is 1,000 times the previous one. For example, `1 Gbps` equals `1,000 Mbps`.

A higher throughput means more data can be transferred per second. Actual speeds can change with conditions and other network activity.

##### Page 5: Bits, bytes, and transfer time

A file's **size** describes how much data it contains. A connection's **throughput** describes how quickly data is transferred. They are different measurements.

File size is often shown in **bytes**, while network speed is often shown in **bits per second**. Lowercase **b** means bits, as in `Mbps`; uppercase **B** means bytes, as in `MB`. There are **8 bits in one byte**. For this lesson's estimates, use decimal units: `1 MB = 8 megabits`.

For example, a `100 MB` file contains `800 megabits`. At an estimated `10 Mbps`, the transfer would take about `80 seconds`:

```text
100 MB × 8 = 800 megabits
800 megabits ÷ 10 Mbps = 80 seconds
```

This is an estimate assuming the speed stays constant and ignoring overhead. A real transfer may take longer.

#### Checkpoint: Map the connection

There is no separate practice activity. Finch displays a simulated map showing the Workshop laptop, file server, two diagnostic units, satellite connection, and remote archive server. It shows the planned communication route, not a working connection; the player begins restoring the equipment in Lesson 2.

**Part 1: Label the map**

The player identifies:

1. The **Workshop LAN** connecting the local devices.
2. The **satellite WAN connection** leading beyond the Safehouse.
3. The **laptop as client** requesting a file.
4. The **file server** responding to the request.
5. The two diagnostic units exchanging a signal map **peer to peer**.

**Part 2: Compare and estimate**

The map lists two estimated connection speeds:

- Workshop connection: `100 Mbps`
- Satellite connection: `20 Mbps`

The player identifies the Workshop connection as the faster one. A recovered transfer record says the archive is `600 MB` and the satellite window is **6 minutes**. Assuming a steady `20 Mbps` and ignoring overhead, the player estimates the transfer time and decides whether it fits.

**Expected result:**

```text
600 MB × 8 = 4,800 megabits
4,800 megabits ÷ 20 Mbps = 240 seconds = 4 minutes
```

The estimated four-minute transfer fits within the six-minute window under those assumptions. It is not a guarantee of actual performance. Completing the checkpoint creates a plan; it does not restore the satellite connection or download the archive.

#### Feedback and hints

Map selections are marked **Correct** or **Try again**. For the calculation, the game identifies whether the conversion, time estimate, or window comparison needs another look without displaying the complete answer. The player can revise their work and review the lesson pages. Hints and retries are unlimited and penalty-free.

Finch offers three hint levels:

1. "Think about which connections stay nearby and which one reaches beyond the Safehouse."
2. "The laptop requests the file; the server provides it. For the transfer, compare the units in the file size and the connection speed."
3. "Convert the file size from bytes to bits before dividing by the speed. Then compare the estimated time with the six-minute window."

#### Completion

The map now shows the local connections and the route the archive transfer would need to follow.

> **Finch:** "The transfer should fit in the window, assuming the connection holds. Now we just need a connection that works."

One part of the recovered map has an unlabeled local connection. Finch pauses over it.

> **Finch:** "That connection doesn't have a destination listed. I wonder what used to be attached."
>
> **Mara:** "It could be an old diagnostic connection. Focus on the communications equipment for now."

Her explanation is possible, but unconfirmed. The missing destination remains a small clue, not a reveal. The player moves on to Lesson 2 to examine the network equipment.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

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

### Detailed lesson: Network devices and identifiers

#### Opening

The player returns to Finch's communications map. The route is planned, but the equipment labels in the rack are mixed up.

> **Finch:** "I found the switch, router, access point, and satellite modem. I'm less sure which connection goes where."
>
> **Mara:** "Identify what each device does first. Then we can restore the local network without guessing."

#### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. The network is simulated; the player is identifying roles, not configuring real equipment.

##### Page 1: Devices that connect a network

- A **switch** connects wired devices within a local network, such as a laptop and file server.
- A **wireless access point (AP)** lets wireless devices join the local network.
- A **router** connects different networks and directs traffic between them. The Safehouse router is the gateway between the LAN and the satellite connection.
- A **modem** connects the router to the service provider's communication system. Here, the satellite modem links the Safehouse router to the satellite service.
- A **firewall** allows or blocks network traffic according to rules. In this fictional setup, the firewall is part of the router, rather than a separate box in the cable path.

The path is: local devices -> switch or access point -> router/firewall -> satellite modem -> satellite WAN. The local server can be reached within the LAN; reaching the remote archive also requires the WAN link and services from later lessons.

##### Page 2: MAC and IP addresses

A **MAC address** identifies a network interface on its local network link. It helps local network traffic reach the correct interface. A device with wired and wireless connections can have a different MAC address for each interface.

An **IP address** is a logical network address used to deliver traffic between networks. It can change when a device joins a different network or receives a new assignment.

In short: MAC identifies a local interface; IP identifies a network location for communication. Neither is the same as a person's name or a device's permanent physical location.

##### Page 3: Ports identify services

A **port number** helps direct network traffic to a particular service on a device. The IP address helps reach the device; the port helps reach the service on it. For example, secure web traffic commonly uses port `443` for HTTPS. Lesson 4 will cover service and protocol choices in more detail.

#### Checkpoint: Restore the local communication path

There is no separate practice activity. The player examines the communications rack, connects the local equipment, and uses recovered records to identify network interfaces and addresses. All devices and network activity are simulated.

**Part 1: Place the devices**

- Connect the laptop and Workshop file server to the **switch**.
- Connect the mobile diagnostic unit to the local network through the **access point**.
- Identify the **router** as the gateway between the Safehouse LAN and the satellite connection, with its firewall function protecting traffic.
- Connect the router to the **satellite modem**, which leads toward the satellite WAN and remote archive.

For this simulated network, the firewall is integrated into the router. The player identifies it as the device protecting traffic, not as a separate box in the cable path. The diagram distinguishes the local LAN from the satellite WAN.

**Part 2: Find the address matches**

The player inspects equipment tags in the communications rack and on the mobile diagnostic unit. Each tag identifies an interface and its MAC address.

**Interface inventory**

| Device/interface | MAC address |
|---|---|
| Laptop - wired interface | `02:00:00:00:00:11` |
| Workshop file server - network interface | `02:00:00:00:00:20` |
| Access point - network interface | `02:00:00:00:00:02` |
| Mobile diagnostic unit - wireless interface | `02:00:00:00:00:30` |

Finch opens a saved status snapshot from the router's local maintenance console. It lists MAC-to-IP address assignments but has no device names:

**Recovered address assignments**

| MAC address | IP address |
|---|---|
| `02:00:00:00:00:30` | `192.0.2.30` |
| `02:00:00:00:00:11` | `192.0.2.11` |
| `02:00:00:00:00:02` | `192.0.2.2` |
| `02:00:00:00:00:20` | `192.0.2.20` |

The player matches each MAC address across the two records to identify which current IP assignment belongs to each interface. The entries are in a different order to make the player cross-reference them.

**Part 3: Match the service port**

A service card lists the archive page as a secure web service on port `443`. The player matches that port to the service. Lesson 4 will explain HTTPS and service configuration in more detail.

**Expected result:** The laptop and file server are connected to the switch, the mobile unit connects through the access point, and the router connects to the satellite modem. The player identifies:

- **MAC address:** Identifies a network interface on its local link.
- **IP address:** Gives a current network location for communication.
- **Port:** Directs traffic to a service, such as the archive's secure web service on port `443`.

The local network comes online, but the satellite connection remains unavailable until Lesson 3. The checkpoint establishes local connectivity only; the remote archive cannot yet be reached.

#### Feedback and hints

Correct placements and matches are marked **Correct**; other choices are marked **Try again** and remain editable. Feedback explains the role that needs another look without placing the answer for the player. The player can review lesson pages; hints and retries are unlimited and penalty-free.

Three hint levels:

1. "Which device connects wired equipment, and which one lets the mobile unit join wirelessly?"
2. "The router is the gateway between networks. The satellite modem connects that gateway to the satellite service."
3. "A MAC belongs to a network interface, an IP address is used to reach a network location, and a port directs traffic to a service."

#### Completion

The local devices appear on Finch's map. The satellite modem is connected to the router, but the external link remains unavailable until it is activated in Lesson 3.

> **Finch:** "The Workshop devices can talk to each other again. The satellite link is still quiet."
>
> **Mara:** "The equipment is in place. Next, confirm what connection and storage we actually have before we bring the external link online."

A recovered label on the router references an unrecognized device identifier. Finch asks whether it belongs to the unlabeled connection from Lesson 1.

> **Mara:** "It's probably an old diagnostic unit. We have enough to do without chasing obsolete labels."

Her explanation is plausible but unconfirmed. The clue is recorded, but the lesson moves on to connection types and storage.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

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

### Detailed lesson: Internet connections and network storage

#### Opening

The Workshop's local equipment is connected, but the satellite link is still unavailable. Mara brings up recovered service and storage records.

> **Mara:** "Before we activate anything, we need to know what connection the Safehouse uses and where the backup is stored."
>
> **Finch:** "I've found a few records. Some are more helpful than others, which seems to be a theme around here."

The player opens the lesson on their laptop.

#### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All services, storage, and network activity are simulated.

##### Page 1: Connecting beyond the local network

A LAN connects local devices, but reaching remote storage also requires a connection beyond the Safehouse. Different locations can use different kinds of internet service:

- **Fiber:** Uses light through fiber-optic cable; it can provide high speeds but requires fiber infrastructure.
- **Cable:** Uses a cable provider's network; service may be affected by shared local capacity.
- **DSL:** Uses telephone lines; speed can depend on distance and line quality.
- **RF wireless:** Uses radio signals, such as a fixed wireless link between an antenna and a nearby provider's tower; a clear path can matter.
- **Satellite:** Uses a satellite link and can reach remote locations, though latency and weather can affect service.
- **Cellular:** Uses a mobile network; service depends on coverage and available capacity.

Satellite and cellular also use radio signals. Here, **RF wireless** is a fixed wireless example, not a completely separate kind of radio technology.

No connection type is always best. Availability, speed, reliability, latency, and cost all matter. **Latency** is the delay before information travels between points; it's different from throughput, the amount transferred per second.

##### Page 2: Where network files live

A **network-attached storage device (NAS)** is storage available to devices on a network. The Safehouse's `FINCH-NAS` is local storage on the Workshop network.

A **file server** provides files to other devices. `WORKSHOP-FILES` is the Workshop's file server. NAS devices can also provide files; the terms can overlap.

**Cloud storage** keeps data on remote systems accessed through a network. The registry lists a remote copy of `ARCHIVE-09` in cloud storage.

The name `ARCHIVE-09` identifies the **backup**, while cloud storage describes where that remote copy is kept. The same backup can have more than one copy in different locations.

##### Page 3: Choosing the right source

Before opening or recovering a file, check **what you need**, **where each copy is**, and **whether it's available**. A local copy can be faster to reach, but it isn't useful for recovery if it is damaged. A remote copy may be available, but reaching it requires a working connection and the right services.

> **Finch:** "So the nearest copy isn't necessarily the one we want."
>
> **Mara:** "Right. Check the records before deciding."

#### Checkpoint: Find the connection and the archive

There is no separate practice activity. The player reviews fictional service cards and recovered Safehouse records.

**Part 1: Match connection types**

The player matches each scenario to **fiber, cable, DSL, fixed RF wireless, satellite, or cellular**:

1. A building connects through fiber-optic lines that carry light. **Fiber.**
2. A home connects through its cable provider's network. **Cable.**
3. A small office connects through its telephone line. **DSL.**
4. A building's antenna connects by radio to a nearby provider's tower. **Fixed RF wireless.**
5. A remote site communicates through a satellite terminal. **Satellite.**
6. A mobile unit connects through a mobile-network provider. **Cellular.**

These answers are for the design and feedback; the player sees the scenarios and choices, not the answers.

**Part 2: Read the Safehouse service records**

The player examines three recovered records:

```text
SERVICE SURVEY
Fiber line to Safehouse: Not installed
Fixed wireless tower coverage: Not available
Cellular coverage: Not available
```

```text
SATELLITE SERVICE RECORD
Installed equipment: Satellite terminal and modem
Service status: Available for activation
```

```text
CONNECTION HISTORY
Previous external service: Satellite
```

The player identifies **satellite** as the Safehouse's documented external connection and selects its service record. The evidence explains this Safehouse's situation; it does not mean every remote location must use satellite.

**Part 3: Identify the storage**

The player reviews the recovered inventory:

| Record | Description |
|---|---|
| `FINCH-NAS` | Local network-attached storage; contains a recovery VM image |
| `WORKSHOP-FILES` | Local file server; contains maintenance documents |
| `ARCHIVE-09` | Backup with a damaged local copy and a remote copy listed in cloud storage |

The player identifies the NAS and file server, then selects the **remote cloud copy of `ARCHIVE-09`** as the source to investigate for recovery. The registry lists its location, but the player has not yet verified the remote copy's condition.

**Part 4: Activate the link**

After selecting the documented connection and archive source, the player selects **Activate satellite service**. The simulated modem reports that its satellite link is connected. This does **not** make the archive reachable yet: name resolution and firewall/service configuration still need attention in Lesson 4.

#### Feedback and hints

Correct matches and selections are marked **Correct**; incorrect choices are marked **Try again** and remain editable. Finch points the player toward the relevant records without giving the complete answer. The player can review lesson pages; hints and retries are unlimited and penalty-free.

Three hint levels:

1. "Compare each scenario with how the connection carries information. Then look for the Safehouse's own service and storage records."
2. "The survey describes what is unavailable; the service record and connection history describe equipment and service that are available."
3. "Look for the installed terminal in the service record. For recovery, distinguish the backup itself from the location of its remote copy."

#### Completion

The satellite modem connects, and the registry points Finch toward the remote archive. An attempt to open it stops before the archive page appears.

> **Finch:** "The satellite link is awake, but I still can't open the archive. It seems having a road and knowing where to go are two different problems."
>
> **Mara:** "Then we'll check the services the connection depends on."

Finch also notices the earlier safeguard entry: **REMOTE ACCESS: DENIED**.

> **Finch:** "The registry still says remote access was denied. I don't know exactly what that safeguard was blocking."
>
> **Mara:** "Whatever it was, it doesn't change what we need to do now."

The player does not bypass the safeguard, and the scene does not establish its scope or Echo's motive. That detail remains open for later chapter development.

The player moves on to Lesson 4 to investigate the network services. Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

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
