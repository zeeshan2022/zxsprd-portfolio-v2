---
title: Segmented Jump Server & Bastion Access Control
client: Business Systems House
year: "2026"
image: /images/uploads/Segmented-Jump-Server-Bastion-Access-Control.png
excerpt: Deployed dedicated group-segmented Jump Servers (IT, Tech, End-User, UAT) with strict RBAC access controls for administrative cloud management.
tech:
  - Windows Server Jump Hosts
  - OCI Bastion Service
  - RDP
  - Active Directory RBAC
  - Duo MFA
---
<h2>Segmented Jump Server & Bastion Access Control</h2><p>Architected a zero-trust administrative access model using dedicated Jump Servers and OCI Bastion hosts to isolate management interfaces from public networks.</p><h3>Key Features & Implementation</h3><ul><li><strong>Group-Segmented Jump Hosts:</strong> Isolated administrative environments into dedicated Jump Hosts (IT, TECH, END USER, UAT) to prevent lateral privilege movement.</li><li><strong>MFA & Session Logging:</strong> Enforced Duo MFA on all administrative RDP sessions and enabled session recording for compliance auditing.</li><li><strong>Fallback Cloud Bastion:</strong> Deployed OCI IAM Bastion Service as an emergency secondary access route for IT administrators.</li></ul>
