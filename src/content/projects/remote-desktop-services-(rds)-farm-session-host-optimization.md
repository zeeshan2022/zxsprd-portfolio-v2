---
title: Remote Desktop Services (RDS) Farm & Session Host Optimization
client: Business Systems House
year: "2025"
image: /images/uploads/Remote-Desktop-Services-(RDS)-Farm-Session-Host-Optimization.png
excerpt: Deployed a redundant Remote Desktop Services (RDS) farm with Connection Broker load balancing, Gateway MFA, and Session Host profile disk roaming.
tech:
  - Windows Server RDS
  - RD Gateway
  - RD Connection Broker
  - UDP User Profile Disks
  - Duo MFA
---
<h2>Remote Desktop Services (RDS) Farm & Session Host Optimization</h2><p>Architected high-availability Remote Desktop Session Host environments for multi-user application hosting and centralized thin-client management.</p><h3>Key Features & Implementation</h3><ul><li><strong>RD Connection Broker Load Balancing:</strong> Distributed incoming user RDP sessions evenly across redundant Session Host instances.</li><li><strong>RD Gateway MFA Integration:</strong> Encapsulated internal RDP traffic inside HTTPS (Port 443) through RD Gateway with mandatory Duo MFA.</li><li><strong>User Profile Disk (UPD) Storage:</strong> Configured centralized User Profile Disks on high-speed network storage for seamless user profile roaming.</li></ul>
