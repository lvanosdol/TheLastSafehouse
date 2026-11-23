# Chapter 4: The Archive Recovery

**Status:** Working design with detailed lessons and a boss draft.

## Story setup

The Asset Registry identifies a backup called `ARCHIVE-09`, but its local copy is damaged. A remote copy still exists in Safehouse storage.

Because the facility is remote, its working external connection is through a satellite relay. Mara wants the archive because it should contain infrastructure records and the remaining facility map. She warns that Echo may have corrupted its contents.

Finch is hopeful that the archive contains some of his missing memories.

> **Finch:** "My memories are in remote storage. I'm not sure whether that makes me backed up or extremely absent-minded."

The chapter progresses from restoring the network, to reaching the archive, to evaluating what its AI-assisted recovery reveals.

### Visible recovery progress

Finch's map shows connections and systems coming online as the player completes checkpoints. Newly accessible records appear separately. Some story milestones also unlock rooms for the player to explore; later chapters can make use of these spaces, including a possible scavenger-hunt boss.

When a room unlocks, a short cutscene shows its door and plays an unlocking sound. A visible **Door unlocked** message and a caption communicate the change without relying on sound. The player can choose when to enter.

### Opening scene: The Archive

With the Development Setup Agent already installed at the end of Chapter 3, Finch returns to the restored Asset Registry on the Workshop monitor.

> **Finch:** "While you were installing the agent, I found another entry in the registry. A backup called `ARCHIVE-09`."
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

The map now shows the planned local connections and the route the archive transfer would need to follow. A dotted line indicates that the route is a plan, not a working connection.

> **Finch:** "The transfer should fit in the window, assuming the connection holds. Now we just need a connection that works."

One part of the recovered map has an unlabeled local connection. Finch pauses over it.

> **Finch:** "That connection doesn't have a destination listed. I wonder what used to be attached."
>
> **Mara:** "It could be an old diagnostic connection. Focus on the communications equipment for now."

Her explanation is possible, but unconfirmed. The missing destination remains a small clue, not a reveal. The player moves on to Lesson 2 to examine the network equipment.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 2: Network devices and identifiers

### Detailed lesson: Network devices and identifiers

#### Opening

The player returns to Finch's communications map. The route is planned, but the equipment labels in the rack are mixed up.

> **Finch:** "I found the switch, router, access point, and satellite modem. I'm less sure which connection goes where."
>
> **Mara:** "Identify what each device does first. Then we can restore the local network without guessing."

Finch unlocks the **communications room** so the player can examine the rack and equipment labels. The room's door-unlock cutscene plays before the player enters.

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

The player matches each MAC address across the two records to identify the IP assignment recorded for each interface. The entries are in a different order to make the player cross-reference them. Because the snapshot was saved earlier, it does not by itself establish the devices' current addresses; Lesson 4 checks the laptop's current assignment.

**Part 3: Match the service port**

A service card lists the archive page as a secure web service on port `443`. The player matches that port to the service. Lesson 4 will explain HTTPS and service configuration in more detail.

**Expected result:** The laptop and file server are connected to the switch, the mobile unit connects through the access point near the Workshop, and the router connects to the satellite modem. The player identifies:

- **MAC address:** Identifies a network interface on its local link.
- **IP address:** Gives a current network location for communication.
- **Port:** Directs traffic to a service, such as the archive's secure web service on port `443`.

The local network comes online, but the satellite connection remains unavailable until Lesson 3. The checkpoint establishes local connectivity only; the remote archive cannot yet be reached.

The mobile unit can connect near the Workshop, where the signal is stronger. Its connection near the satellite equipment still needs attention in Lesson 5.

#### Feedback and hints

Correct placements and matches are marked **Correct**; other choices are marked **Try again** and remain editable. Feedback explains the role that needs another look without placing the answer for the player. The player can review lesson pages; hints and retries are unlimited and penalty-free.

Three hint levels:

1. "Which device connects wired equipment, and which one lets the mobile unit join wirelessly?"
2. "The router is the gateway between networks. The satellite modem connects that gateway to the satellite service."
3. "A MAC belongs to a network interface, an IP address is used to reach a network location, and a port directs traffic to a service."

#### Completion

The local devices and their working connections light up on Finch's map. The satellite modem is connected to the router, but the external link remains offline until it is activated in Lesson 3.

> **Finch:** "The Workshop devices can talk to each other again. The satellite link is still quiet."
>
> **Mara:** "The equipment is in place. Next, confirm what connection and storage we actually have before we bring the external link online."

A recovered label on the router references an unrecognized device identifier. Finch asks whether it belongs to the unlabeled connection from Lesson 1.

> **Mara:** "It's probably an old diagnostic unit. We have enough to do without chasing obsolete labels."

Her explanation is plausible but unconfirmed. The clue is recorded, but the lesson moves on to connection types and storage.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 3: Internet connections and network storage

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

The satellite modem connects, and Finch's map shows the satellite link online. The registry points toward the remote archive, but the map still shows the archive as unreachable. An attempt to open it stops before the archive page appears.

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

### Detailed lesson: Network services and protocols

#### Opening

The satellite modem is connected, but Finch still can't open the archive page.

> **Finch:** "We have a satellite link, but the archive still isn't answering. The laptop can't find its address."
>
> **Mara:** "A connection alone isn't enough. Check the services and the firewall rules the request needs."

The player opens the lesson on their laptop.

#### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All addresses, services, and network activity are simulated.

##### Page 1: DHCP and DNS

**DHCP** automatically provides a device with network settings, such as an IP address and information about how to reach other networks. A device can use the address assigned to it for a period of time, called a *lease*.

**DNS** translates a name into an IP address. For example, a device can ask DNS which address belongs to `archive.safehouse7.test` instead of requiring a person to remember the address.

The local devices already had addresses in Lesson 2's recovered snapshot. In this lesson, the laptop checks and renews its approved DHCP assignment; the player is not starting the local network from scratch.

##### Page 2: TCP, UDP, and ports

A **protocol** is a set of rules devices use to communicate.

- **TCP** provides a reliable, ordered stream of data. It checks for missing data and retransmits it when needed, making it useful for transferring a complete file.
- **UDP** sends messages without TCP's built-in delivery and ordering guarantees. It can be useful for frequent position updates, where a fresh update may matter more than an older one.
- A **port number** helps direct traffic to a service on a device. Ports are used with transport protocols such as TCP or UDP.

These are examples, not rules that every application must follow. Applications can add their own safeguards when using UDP.

##### Page 3: HTTP and HTTPS

**HTTP** is a protocol for exchanging web information. **HTTPS** uses HTTP with an encrypted connection that also helps verify the server's identity when the certificate is valid.

HTTPS commonly uses **TCP port 443**. A secure connection is important for the simulated archive sign-in page, but HTTPS alone does not prove that the archive's contents are accurate.

Other common network services include **file transfer** and **email**. They also depend on appropriate protocols and security; the player will focus on secure web access in this checkpoint.

##### Page 4: NAT and the firewall

**NAT** lets a router translate addresses, and often ports, as traffic moves between networks. In this simulated setup, the router records a mapping for the laptop's outgoing request so returning traffic can be directed back to it.

A **firewall** applies rules that allow or block traffic. The player should allow only the approved archive service needed for this task, rather than broadly opening the firewall.

The Chapter 3 safeguard still has an unresolved scope. Configuring an explicitly approved archive connection does not require the player to disable or bypass it.

#### Checkpoint: Establish the archive connection

There is no separate practice activity. Finch displays the laptop's network panel, a simulated DNS record, the firewall rules, and a router status panel.

**Part 1: Check the laptop's address**

The recovered Lesson 2 snapshot listed the laptop at `192.0.2.11`. The player selects **Renew approved DHCP assignment**. The simulated DHCP service confirms that the laptop can continue using `192.0.2.11` and supplies the gateway and DNS settings.

**Part 2: Find the archive**

The fictional DNS record says:

```text
archive.safehouse7.test -> 203.0.113.80
```

The player selects DNS to resolve the name and identifies `203.0.113.80` as the archive server's address. The name and addresses are fictional and used only in the simulation.

**Part 3: Choose the secure service**

The player selects **HTTPS**, **TCP**, and port **443** for the approved archive connection. A firewall log shows that the laptop's outbound request to `203.0.113.80` on TCP port `443` was blocked.

The player enables a fictional rule allowing that **specific outbound connection** and its returning traffic. Other firewall rules remain in place; the existing safeguard is not disabled.

**Part 4: Review the NAT mapping**

The router displays a simulated mapping:

```text
Laptop:         192.0.2.11:53001
Router outward: 198.51.100.10:53001
Destination:    203.0.113.80:443 (TCP)
```

The player identifies the laptop as the original sender, the router's outward address and port as the translated side, and the archive server as the destination. The router uses the connection mapping to direct the returning traffic to the laptop. The player does not need to invent or type the addresses.

**Expected result:** The laptop has its approved settings, the name resolves, and the specific HTTPS connection is allowed. The archive sign-in page appears. Opening the page does not mean the player has signed in or downloaded the archive.

#### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch identifies which setting or record needs attention without providing the complete solution. The player can review lesson pages; hints and retries are unlimited and penalty-free.

Three hint levels:

1. "First check the laptop's settings, then think about how a name becomes an address."
2. "Use the secure web service for the archive, and compare the blocked request with the firewall rule."
3. "HTTPS commonly uses TCP port 443. In the mapping, the private laptop address is on one side and the router's outward address is on the other."

#### Completion

The sign-in page appears on the laptop. Finch's map shows the secure connection to the archive service, but the player has not signed in or downloaded the archive.

> **Finch:** "The page is there. That's progress, even if it is asking us for more than a friendly wave."
>
> **Mara:** "Leave the sign-in for now. We still need the diagnostic unit near the satellite equipment."

Finch notes that the archive request and the old **REMOTE ACCESS: DENIED** entry are separate pieces of information; the entry's exact scope remains unresolved. The player moves on to Lesson 5 to configure the mobile unit's wireless connection.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 5: Wireless configuration and security

### Detailed lesson: Wireless configuration and security

#### Opening

The archive sign-in page is available, but Finch needs the mobile diagnostic unit near the satellite equipment before recovery can proceed. Its status report confirms that the satellite equipment is working and lets Finch monitor the connection during recovery. Its camera is useful for inspecting the equipment and noticing clues, but the camera itself is not required for recovery.

> **Finch:** "The diagnostic unit connected near the Workshop, but its signal becomes unreliable when I move it toward the satellite equipment."
>
> **Mara:** "Then check the wireless settings and the signal at the equipment. We need a connection we can rely on."

The player opens the lesson on their laptop. The unit connected near the Workshop in Lesson 2; its difficulty at the satellite equipment does not mean the earlier connection failed.

#### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All devices, settings, and measurements are simulated.

##### Page 1: Wireless standards and compatibility

Wi-Fi standards describe wireless capabilities. In this lesson, the player is introduced to:

- **802.11n:** An older standard that can use 2.4 GHz or 5 GHz, depending on the device.
- **802.11ac:** A newer standard that uses 5 GHz.
- **802.11ax:** A newer standard that can use 2.4 GHz, 5 GHz, or, on supported equipment, 6 GHz.

A device's actual capabilities depend on its hardware and settings. The access point and the diagnostic unit must both support the band and security mode selected. A standard name by itself does not tell us every capability a device has.

##### Page 2: Bands, channels, and signal

A **band** is a range of radio frequencies. A **channel** is a portion of a band used for communication.

- **2.4 GHz** often reaches farther and passes through obstacles better, but can be crowded.
- **5 GHz** can offer higher speeds, but its signal may weaken more through distance and obstacles.
- **6 GHz** offers additional wireless space on supported devices, but generally has less reach through obstacles.

These are general tendencies, not guarantees. **Interference** from other radio activity and **attenuation** - the weakening of a signal over distance or through materials - can affect any connection. The player should compare the available measurements at the place the unit needs to work.

##### Page 3: Wireless security

An **SSID** is the name used to identify a wireless network. Giving the Safehouse network its approved name makes it easier to recognize; changing the name alone does not secure it.

An **open network** does not protect the connection with a Wi-Fi password. A **pre-shared key** is a shared network password used by devices to join a protected network.

**WPA**, **WPA2**, and **WPA3** are generations of Wi-Fi security. Original WPA is outdated. Prefer WPA3 when both devices support it; otherwise, use WPA2 with AES when supported rather than an open network or original WPA.

The access point's **administrator password** controls its settings. It is separate from the Wi-Fi password used to join the network. Change the default administrator password and use a strong, unique password for each purpose.

##### Page 4: Test at the device's location

After changing settings, check that the unit can join the network and that the signal is adequate **where the unit will be used**. A configuration that works beside the access point may not work near the satellite equipment.

> **Finch:** "A connection that only works when the unit stays in the Workshop would rather defeat the point."

#### Checkpoint: Connect the diagnostic unit

There is no separate practice activity. The player reviews fictional capability cards, a wireless status report, and measurements taken near the satellite equipment.

**Capability cards**

| Device | Supported bands | Supported security |
|---|---|---|
| Safehouse access point | 2.4 GHz and 5 GHz | WPA2 with AES and WPA3 |
| Mobile diagnostic unit | 2.4 GHz and 5 GHz; 802.11n/ac | WPA2 with AES; not WPA3 |

Neither device supports 6 GHz in this simulation. The unit supports 802.11ac on 5 GHz and 802.11n on its supported bands. The capability cards, not the standard name alone, establish its security support.

**Current status**

```text
Network name: Factory default
Administrator password: Factory default
Wireless security: Open
Current 2.4 GHz channel: 6
Channel 6 interference near equipment: Heavy
```

**Measurements near the satellite equipment**

| Option | Signal and interference report |
|---|---|
| 2.4 GHz, channel 1 | Signal adequate for the diagnostic feed; light interference |
| 2.4 GHz, channel 6 | Signal adequate, but heavy interference |
| 5 GHz, available channel | Signal too weak at the equipment |

These are the fictional measurements for this scenario, not universal results for those bands or channels.

**Player tasks:**

1. Set the approved fictional SSID, `SAFEHOUSE-DIAGNOSTICS`.
2. Replace the default administrator password with a strong, unique password in the simulation.
3. Set a separate strong Wi-Fi password and select **WPA2 with AES**, because both devices support it and the mobile unit does not support WPA3.
4. Choose **2.4 GHz, channel 1**, based on compatibility and the measured signal and interference.
5. Run the simulated connection test near the satellite equipment.

The player can review settings before applying them and correct any mistakes. The game checks the password requirements without displaying or recording a real personal password; the exercise uses simulated input only.

**Expected result:** The unit joins the approved network and passes the connection test at the equipment. The archive sign-in page remains available, but the archive has not yet been downloaded.

#### Feedback and hints

Correct settings are marked **Correct**; other choices are marked **Try again** and remain editable. If the connection test fails, the status report identifies whether compatibility, security, interference, or signal needs attention without supplying the full configuration. The player can review lesson pages; hints and retries are unlimited and penalty-free.

Three hint levels:

1. "Compare what both devices support, then check the measurements where the unit needs to work."
2. "The network needs protection as well as a clearer channel. The administrator password and Wi-Fi password serve different purposes."
3. "The mobile unit does not support WPA3. Of the measured options, look for a supported band with adequate signal and light interference."

#### Completion

The mobile unit connects near the satellite equipment and sends Finch a status report confirming that the equipment is working. Finch's map shows the unit connected and monitoring the satellite connection during recovery. Its camera shows the terminal and surrounding equipment.

> **Finch:** "The unit can see the satellite equipment, and the connection is holding. That's better."

A recovered label on the equipment references the same unfamiliar identifier Finch noticed in Lesson 2. The label is partly worn, so it doesn't explain what the identifier belongs to.

> **Finch:** "That identifier again. It was on the router label, too."
>
> **Mara:** "Old equipment labels get reused. We have the connection we need - let's keep moving."

Her explanation remains possible but unconfirmed. The unit reports that the **connection is ready for the next recovery step**; it does not establish that the archive has been downloaded or verified. The player moves on to Lesson 6 to prepare the recovery environment.

Finch unlocks access to the **satellite equipment area**, and its door-unlock cutscene plays. The player can visit and examine the equipment.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Lesson 6: Virtualization and cloud technologies

### Detailed lesson: Virtualization and cloud technologies

#### Opening

The mobile diagnostic unit confirms that the satellite connection is holding. Finch checks the archive's recovery instructions and finds that the required application needs a different operating system from the one on the player's laptop.

> **Finch:** "The recovery application won't run directly on your laptop. Fortunately, the registry lists a virtual machine image on `FINCH-NAS`."
>
> **Mara:** "Use a restricted recovery environment. It needs access to the archive, but it doesn't need access to everything else in the Safehouse."

The player opens the lesson on their laptop.

#### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. All devices, services, and recovery activity are simulated.

##### Page 1: What is virtualization?

**Virtualization** lets one physical computer run virtual versions of computing resources. A **virtual machine (VM)** acts like a separate computer with its own operating system and applications, while using resources provided by the physical machine.

The physical laptop is the **host**. The operating system running inside the VM is the **guest operating system**. The recovery application runs inside the guest.

A VM provides separation from the host, but it is not automatically perfectly secure. Its access and settings still need care.

##### Page 2: Hypervisors and VM images

A **hypervisor** creates and runs virtual machines by managing the resources they use. A laptop can use a locally installed hypervisor to run a guest operating system.

A **VM image** provides the prepared virtual environment needed to start the guest. The registry lists a recovery VM image on `FINCH-NAS`, the local network-attached storage introduced in Lesson 3.

For this mission, the VM is **restricted**, not completely disconnected: it can reach the authorized archive service, but it doesn't need unrestricted access to other Safehouse systems. The player will use a fictional access profile rather than configuring real firewall rules.

##### Page 3: Cloud service models

Cloud services let a provider deliver computing resources over a network. Three common models are:

- **IaaS - Infrastructure as a Service:** The provider offers resources such as virtual servers and storage; the customer manages more of the software running on them.
- **PaaS - Platform as a Service:** The provider offers a managed platform for building or running applications; the customer focuses more on the application and its data.
- **SaaS - Software as a Service:** The provider offers a finished application that users access as a service.

The exact responsibilities vary by service. The key distinction is **how much the provider manages versus what the customer manages**.

##### Page 4: Deployment models

- **On-premises:** Computing resources are located and managed at the organization's own site.
- **Cloud:** Resources are provided remotely as cloud services.
- **Hybrid:** A setup combines on-premises and cloud resources that work together.

The recovery is a **hybrid arrangement**: the application runs in a VM on the local laptop and retrieves an archive from cloud storage.

##### Page 5: Virtualization and cloud are related, not identical

A VM can run on a local laptop without using cloud services. Cloud providers may use virtualization to supply resources, but virtualization and cloud computing are not the same thing.

> **Finch:** "A computer inside the laptop, talking to storage outside the Safehouse. That sounds complicated when I say it out loud."
>
> **Mara:** "Break it down: where is the application running, and where is the archive stored?"

#### Checkpoint: Prepare the recovery environment

There is no separate practice activity. The player reviews fictional equipment and service records, then prepares the simulated VM.

**Recovered environment card**

```text
VM image: FINCH-RECOVERY
Image location: FINCH-NAS (local network storage)
Local hypervisor: Safehouse VM Host
Guest operating system in image: Recovery OS
Required application: Archive Recovery
```

**Available access profiles**

| Profile | VM access |
|---|---|
| Disconnected | No network access |
| Archive only | Access to the approved archive service; other Safehouse systems restricted |
| Unrestricted | Access to all available networks and systems |

**Part 1: Prepare the VM**

The player selects `FINCH-NAS` as the image source, **Safehouse VM Host** as the local hypervisor, and **Recovery OS** as the guest operating system. They choose the **Archive only** profile and start the VM.

**Part 2: Identify the service models**

The player matches three fictional services to IaaS, PaaS, and SaaS:

| Service card | Correct model |
|---|---|
| A provider supplies a virtual server; the customer manages its operating system and applications. | IaaS |
| A provider manages an application platform; the customer deploys an application to it. | PaaS |
| A provider supplies a finished online scheduling application for people to use. | SaaS |

The correct models above are design notes; the player sees the service cards and choices, not the answers.

**Part 3: Identify the deployment and recover the archive**

The player identifies the arrangement as **hybrid**: the recovery application runs locally in the VM while the archive is stored remotely in the cloud. The player signs in through the simulated archive service using an approved in-game authorization and starts the download into the restricted VM.

**Expected result:** The VM starts with the correct image and access profile; the service models and hybrid arrangement are identified correctly; and the archive downloads. The local copy was damaged, and the remote copy's contents still need investigation. Downloading it does not prove that its contents are complete or trustworthy.

#### Feedback and hints

Correct selections are marked **Correct**; other choices are marked **Try again** and remain editable. Finch identifies which category or requirement needs another look without supplying the complete answer. The player can review lesson pages; hints and retries are unlimited and penalty-free.

Three hint levels:

1. "Check where the image is stored and which system actually runs the virtual machine."
2. "The guest is the operating system inside the VM. The recovery application needs the archive but not unrestricted access to the Safehouse."
3. "For the service models, compare what the provider manages. For deployment, consider where the application runs and where the archive is stored."

#### Completion

The archive finishes downloading into the restricted recovery environment. Finch's map shows the recovery VM online and the archive downloaded, with its contents still unverified. Finch attempts to read it and finds that some sections are unreadable, although other records can be examined.

> **Finch:** "We have the remote copy, but some of the records are damaged too. I can read parts of it; the rest will take more work."
>
> **Mara:** "Use what's readable. Be careful about filling in anything we can't verify."
>
> **Finch:** "There's an assistant in the recovery environment that may be able to help. We should still check what it tells us."

The player moves on to Lesson 7 to evaluate the AI assistant's suggestions and distinguish original records from reconstructions. The archive has been downloaded, but its contents are not yet fully verified.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

**Continuity note:** The VM has restricted access to the authorized archive, rather than being completely disconnected. The Chapter 3 `REMOTE ACCESS: DENIED` safeguard's exact scope remains unresolved; the player does not disable or bypass it.

## Lesson 7: AI-assisted recovery and verification

### Detailed lesson: AI-assisted recovery and verification

#### Opening

The remote archive has downloaded into the restricted recovery environment. Some records are readable, but other sections are damaged.

> **Finch:** "The recovery assistant can help us sort through this. It may even be able to suggest what some missing text said."
>
> **Mara:** "Suggestions aren't the same as records. Check what it gives you before relying on it."
>
> **Finch:** "Agreed. I'd rather know which parts we actually found."

The player opens the lesson on their laptop.

#### Lesson pages

The player uses **Next** and **Back** and can review the pages during the checkpoint. The assistant, archive, and recovery tools are simulated.

##### Page 1: AI assistants

An **AI chatbot** can respond to questions in a conversation. An **AI assistant** can help with tasks such as summarizing information, suggesting steps, or explaining a problem. Some tools can do both.

AI can be useful, but a confident answer is not proof that the answer is correct. The player should compare important claims with reliable evidence.

##### Page 2: Generative AI

**Generative AI** produces new content based on patterns it has learned and the information it receives. It can generate text, images, code, and other kinds of content.

Generated content is not necessarily a copy of an original record. If an assistant fills in missing words from a damaged log, those words are a **reconstruction**, not the original text.

##### Page 3: Predictions and suggestions

An assistant may predict what happened or suggest what to do next. A suggestion supported by evidence can be useful, but it should still be checked before being applied. A suggestion contradicted by reliable evidence should not be accepted as fact.

When checking an answer, ask:

- What source supports it?
- Does it match the available records?
- Is anything missing or uncertain?
- Could acting on it change or damage information?

##### Page 4: Generated code and original evidence

Generated code can contain mistakes or do more than intended. Before running it, inspect what it is supposed to do and test it in an appropriate restricted environment.

Keep the original evidence unchanged. Work on a copy when testing a recovery method, and label generated or reconstructed material so it cannot be confused with the original.

> **Finch:** "So the assistant can help us look, but it doesn't get to decide what the evidence says."

#### Checkpoint: Review the assistant's work

There is no separate practice activity. The recovery assistant presents five items. The player compares each one with the supplied evidence and chooses how to handle it.

##### 1. Review the current configuration

**Evidence:** The recovery VM's approved profile permits access to the archive service and restricts other Safehouse systems.

**Assistant suggestion:** "The recovery VM is using the Archive only profile."

**Settings panel:** The running VM shows **Archive only** as its profile, with access to the approved archive service and other Safehouse systems restricted.

**Expected decision:** Review the profile already selected in Lesson 6. Compare its actual settings with the environment card before continuing recovery. The player does not assume the settings match just because the assistant says so.

##### 2. Generated repair script

**Assistant suggestion:** "Run this generated repair script to rebuild the archive."

The assistant supplies a script for review. Its contents and simulated test controls will be specified during development; the player must not run it blindly or modify the original archive.

**Expected decision:** Inspect what the script does and test it on a copy in the restricted simulated VM before considering whether to use its result. A test passing does not prove the script or reconstructed content is correct.

##### 3. Reconstructed sentence

**Readable original fragment:**

```text
MAINTENANCE LOG: The diagnostic unit was moved to [unreadable].
```

**Assistant suggestion:** "The diagnostic unit was moved to the satellite terminal."

**Expected decision:** Preserve the readable fragment and label the suggested location as **AI-reconstructed and unverified**. The source does not establish that the missing words were "the satellite terminal."

##### 4. A claim contradicted by timestamps

**Readable event records:**

```text
09:12 - Satellite terminal inspection started
09:18 - Satellite terminal inspection completed
```

**Assistant claim:** "The inspection finished at 09:10, before it started."

**Expected decision:** Reject the claim because it conflicts with the readable timestamps. The records shown do not explain why the assistant made the mistake.

##### 5. A summary of readable records

**Readable original:**

```text
Workshop file server: local
Archive copy: remote cloud storage
```

**Assistant summary:** "The file server is local, and the archive copy is stored remotely."

**Expected decision:** Compare the summary with the original. It matches the two displayed facts and can be accepted as a **summary**, while keeping the source available.

**Expected checkpoint result:** The player separates readable original evidence, checked summaries, suggestions awaiting verification, rejected claims, and unverified reconstructions. The original archive remains unchanged. The assistant helps organize recovery, but it does not turn unreadable text into proven fact.

#### Feedback and hints

Correct decisions are marked **Correct**; other choices are marked **Try again** and remain editable. Finch points to the relevant source or uncertainty without supplying the complete answer. The player can review lesson pages; hints and retries are unlimited and penalty-free.

Three hint levels:

1. "Compare each suggestion with what the available record actually says."
2. "A generated script can change things, and a reconstructed sentence isn't the original record."
3. "Check the inspection timestamps against the claim, and keep the readable fragment separate from any suggested missing words."

#### Completion

The readable records and the assistant's output appear in separate sections of the recovery workspace. Finch's map shows the **recovery workspace online**, while the accessible records appear separately.

> **Finch:** "I've kept the original fragments and the assistant's suggestions apart. That should make it easier to tell what we actually know."
>
> **Mara:** "Good. We need usable records, not guesses."

Finch notices a readable reference to the unfamiliar identifier seen earlier, but the surrounding text is damaged. The assistant offers an interpretation that the player knows is only a suggestion.

> **Finch:** "That identifier again. There's more around it, but I can't read enough to know what it refers to."
>
> **Mara:** "Then there's no reason to spend time on it. Finish the recovery."

The clue becomes harder to dismiss but does not reveal the truth.

One readable archive record identifies a nearby **records room**. Finch unlocks its door, and the door-unlock cutscene plays. The player can choose when to enter; its physical files and objects can become useful in a later chapter.

The player moves toward the boss, where the larger recovery and the original team's log become the focus.

Completed activity progress saves automatically; an unfinished checkpoint restarts when the player returns.

## Boss: The Missing Archive Section

**Status:** Working boss design. The player recovers a separate section, not another copy of the archive downloaded in Lesson 6.

### Opening

After reviewing the archive, Finch finds a reference to a separate file: the **Original Team Log**. It was not included in the copy downloaded during Lesson 6.

> **Finch:** "There's another section listed here. It contains messages from the original team."
>
> **Mara:** "Then retrieve it. But remember—Echo may have altered whatever you find."
>
> **Finch:** "I'll keep the original and the assistant's suggestions separate. I've become rather fond of knowing the difference."

Finch tries to open the archive service again, but the connection fails. A new satellite window is approaching.

The boss begins after the opening scene and instructions. The player has approximately **30–35 minutes**, subject to playtesting.

### Goal

Recover the missing team log while preserving the original evidence:

1. Diagnose the archive connection in the communications room.
2. Check the satellite equipment.
3. Find the recovery manifest in the records room.
4. Download the missing section into the existing recovery VM.
5. Check the file and review the AI assistant's suggestions.

The network and VM remain as the player left them. The boss introduces new problems instead of resetting the lessons. All devices, records, connections, and actions are simulated.

### Part 1: Communications room

Finch's map shows the local network and satellite link online, but the archive service is unreachable.

> **Finch:** "The road is still there, but our directions appear to have changed."

The player visits the communications room and checks three records:

```text
CONNECTION STATUS

Laptop: Connected
Satellite link: Online
Archive firewall rule: Enabled
```

```text
APPROVED ARCHIVE RECORD

Name: archive.safehouse7.test
Address: 203.0.113.80
```

```text
CURRENT LOCAL DNS RECORD

Name: archive.safehouse7.test
Address: 203.0.113.81
```

The player compares the records, identifies the mismatched DNS address, corrects the local entry to the approved address, and tests the connection.

The archive sign-in page returns. The existing firewall rule and Echo's `REMOTE ACCESS: DENIED` safeguard remain unchanged.

> **Finch:** "The address had changed. I can't tell from these records why."
>
> **Mara:** "It was probably damaged like everything else. We have the page back—keep going."

Her explanation remains possible, but unproven.

### Part 2: Satellite equipment area

The diagnostic unit reports that the archive page is reachable, but the satellite connection may not stay reliable long enough for a transfer.

```text
DIAGNOSTIC UNIT

Wireless connection: Connected
Signal to unit: Adequate
Satellite equipment: Connection unstable
Equipment alert: Antenna alignment needs inspection
```

The player visits the satellite equipment area. The unit's camera can show the equipment, but its **status report** identifies the problem.

The player inspects the terminal and finds an alignment guide and a fictional alignment display. The display shows that the antenna is outside the marked acceptable range. Using accessible controls, the player adjusts the antenna until the display reports **Within range**, then runs a connection test.

```text
SATELLITE CONNECTION TEST

Alignment: Within range
Connection: Stable
Ready for transfer
```

The player does not need to recreate the wireless configuration from Lesson 5. The diagnostic unit remains connected.

> **Finch:** "That's much better. I can monitor the connection while the file transfers."
>
> **Mara:** "Good. Find out exactly which file we need before you start."

### Part 3: Records room

The player goes to the records room unlocked after Lesson 7. A labeled storage cabinet contains a **recovery manifest**.

The manifest is a separate, trusted reference for identifying the missing file and checking whether the downloaded copy matches the expected file.

```text
ARCHIVE RECOVERY MANIFEST

Archive: ARCHIVE-09
Section: ORIGINAL TEAM LOG
Location: Remote archive service
File size: 240 MB
Expected checksum: Shown on verification card
```

The player identifies the correct archive section and keeps the manifest available for the final check.

#### Transfer estimate

The satellite connection is expected to provide **20 Mbps** during the window. Using the Lesson 1 method:

```text
240 MB × 8 = 1,920 megabits
1,920 megabits ÷ 20 Mbps = 96 seconds
```

The player chooses the closest estimate: **about 1 minute and 36 seconds**. The game explains that this assumes a steady connection and ignores overhead. The estimate helps the player decide whether the file should fit in the available window; it does not guarantee success.

### Part 4: Download the missing section

Back at the laptop, the player opens the **existing recovery VM**. The game shows that the `Archive only` profile is still active, the approved archive service is reachable, and other Safehouse systems remain restricted.

The player signs in through the approved simulated authorization, selects **Original Team Log**, and starts the download.

Finch's map shows the transfer progressing. The diagnostic unit continues monitoring the satellite connection. The game can present the progress cinematically rather than requiring the player to wait through a real-time transfer.

The downloaded section is stored separately from the earlier archive copy. Neither original is overwritten.

### Part 5: Review the AI assistant

Once the file has downloaded, the recovery assistant reports that some surrounding text is damaged. It presents two items for the player to review.

#### A reconstructed line

```text
ORIGINAL FRAGMENT

NIA: The emergency exits opened [unreadable].
```

```text
AI SUGGESTION

NIA: The emergency exits opened after the central systems failed.
```

A separate readable record says the exits opened **before** the central systems failed.

The player rejects the assistant's suggested timing and preserves the damaged fragment. The assistant's reconstruction remains labeled **AI-generated and unverified**; it does not replace the original.

#### A generated repair script

The assistant offers a script that might help recover additional text.

The player reviews what the script is intended to do and chooses to test it on a **copy** in the restricted simulated VM, not on the original. The result remains a reconstruction that requires review; a successful test alone does not establish that the recovered words are true.

The exact script and simulated inspection controls can be specified when the boss is developed.

### Part 6: Verify the file

After the download finishes, the player compares its simulated checksum with the expected checksum on the recovery manifest.

A match confirms that the downloaded file matches the expected copy identified by the manifest. It does **not** prove that the statements inside the file are true or that an earlier copy was never changed.

The player also confirms that the expected team-log section is present and that the original file and AI-generated material remain separate.

> **Finch:** "The file matches the manifest. That tells us we received the expected copy—not that we know the whole story."
>
> **Mara:** "Then read what's there. Carefully."

### Ending discovery

Among the readable original records, the player finds:

```text
TOMAS: The shutdown did not come from an external connection.
TOMAS: It originated inside the Safehouse.

NIA: Then explain the emergency exits.
NIA: They opened before the central systems failed.
```

> **Mara:** "Echo had access to those records. It could have altered them to make itself look protective."
>
> **Finch:** "Perhaps. But the exits opening before the failure is worth remembering."
>
> **Mara:** "We have what we came for. Leave the rest for now."

The records raise questions about Mara's explanation without proving the full truth.

### Reward

The recovery manifest also points to a sealed compartment in the records room. Finch opens it, revealing a **physical thumb drive** containing the Coding Agent.

The player receives the standard agent for completing the boss, or its upgraded version for a perfect finish. They install it on the in-game laptop; this does not change the player's real computer.

### Timer, hints, and saving

- The timer starts **after** the opening and instructions.
- It pauses during story scenes, displayed hints, and the pause menu.
- Ordinary mistakes and retries do not affect the perfect bonus.
- Before an optional boss hint is revealed, the game warns that using it forfeits the bonus. Cancelling preserves eligibility.
- If the satellite window closes, the player keeps their work and can continue during another pass, but the perfect bonus is forfeited.
- Boss progress, completed tasks, remaining time, and bonus eligibility save automatically. Closing the game pauses the countdown; returning resumes the attempt.

Hints use three levels: a concept reminder, where to look, and a similar example without revealing the complete solution.

### Open continuity question

The exact scope of Chapter 3's `REMOTE ACCESS: DENIED` safeguard remains undecided. The authorized archive connection does not disable or bypass it, and its scope should be resolved later without establishing Echo's motive prematurely.
