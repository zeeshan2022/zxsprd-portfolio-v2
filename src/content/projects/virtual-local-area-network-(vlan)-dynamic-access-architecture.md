---
title: Virtual Local Area Network (VLAN) Dynamic Access Architecture
client: Business Systems House
year: "2025"
image: /images/uploads/Virtual-Local-Area-Network-(VLAN)-Dynamic-Access-Architecture.png
excerpt: Engineered dynamic VLAN assignment via RADIUS 802.1X authentication, placing connected user devices automatically into designated network subnets.
tech:
  - 802.1X
  - RADIUS (NPS)
  - Dynamic VLAN Assignment
  - FortiSwitch
  - Active Directory OU
---
<h2>Virtual Local Area Network (VLAN) Dynamic Access Architecture</h2><p>Automated network edge access control by dynamically assigning VLAN tags to switch ports upon user credentials verification.</p><h3>Key Features & Implementation</h3><ul><li><strong>RADIUS-Driven VLAN Tagging:</strong> Configured Windows NPS to return Tunnel-Pvt-Group-ID attributes during 802.1X port authentication.</li><li><strong>Rogue Device Quarantine:</strong> Configured un-authenticated fallback VLANs restricting untrusted devices to isolated internet-only guest access.</li><li><strong>Port Access Hardening:</strong> Standardized MAC-based bypass (MAB) for non-802.1X IoT devices with central address whitelisting.</li></ul>
