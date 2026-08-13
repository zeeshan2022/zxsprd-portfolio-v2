---
title: Enterprise Dynamic Host Configuration Protocol (DHCP) Failover
client: Business Systems House
year: "2025"
image: /images/uploads/Enterprise-Dynamic-Host-Configuration-Protocol-(DHCP)-Failover.png
excerpt: Deployed high-availability Windows DHCP Failover in Load-Balance mode across dual domain controllers, securing scope options and IP reservation pools.
tech:
  - Windows Server DHCP
  - DHCP Failover
  - IPAM
  - Active Directory
  - Option 81 DNS Updates
---
<h2>Enterprise Dynamic Host Configuration Protocol (DHCP) Failover</h2><p>Architected redundant DHCP service infrastructure to eliminate single points of failure in IP address lease assignment across departmental VLANs.</p><h3>Key Features & Implementation</h3><ul><li><strong>Load-Balanced DHCP Failover:</strong> Configured active-active 50/50 load-sharing DHCP failover relationships between primary and secondary servers.</li><li><strong>Rogue DHCP Server Detection:</strong> Enabled Active Directory DHCP authorization and switch-level DHCP Snooping to block unauthorized routers.</li><li><strong>Dynamic DNS Registration:</strong> Configured secure DHCP Option 81 credentials to dynamically update Forward/Reverse DNS records upon lease assignment.</li></ul>
