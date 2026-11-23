# Chapter 4: The Archive Recovery

**Status:** Draft outline. The story, lessons, checkpoints, and boss will be developed together. The boss concept is still to be shared.

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

## Reminders for discussion

These are suggestions to revisit when developing the relevant parts, not approved changes to the outline:

- **Story setup and Lessons 3-4:** Explain how the approved archive connection relates to Chapter 3's `REMOTE ACCESS: DENIED` safeguard without establishing Echo's motive.
- **Story setup and Lessons 6-7:** Clarify whether the remote archive also contains unreadable sections, since the local copy is damaged and the AI recovery requires damaged material.
- **Lesson 1:** Provide an estimated satellite throughput and archive size for the transfer calculation; explain that actual transfer time can vary. `Tbps` means terabits per second.
- **Lesson 2:** Consider describing the local network's physical connections as restored, with address and service configuration still to come in Lesson 4.
- **Lesson 6:** Consider a restricted recovery VM that can reach the authorized archive rather than a completely disconnected VM.
