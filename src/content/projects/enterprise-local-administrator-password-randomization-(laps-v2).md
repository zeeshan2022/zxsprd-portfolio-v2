---
title: Enterprise Local Administrator Password Randomization (LAPS v2)
client: Business Systems House
year: "2026"
image: /images/uploads/Enterprise-Local-Administrator-Password-Randomization-(LAPS-v2).png
excerpt: Upgraded Windows LAPS to Windows Server 2022 LAPS v2, enforcing encrypted password storage and automated post-use rotation.
tech:
  - Windows LAPS v2
  - Active Directory
  - Entra ID
  - GPO
  - PowerShell
  - Privilege Management
---
<h2>Enterprise Local Administrator Password Randomization (LAPS v2)</h2><p>Upgraded endpoint local administrator security by deploying modern Windows LAPS with encrypted Active Directory password attributes.</p><h3>Key Features & Implementation</h3><ul><li><strong>Encrypted AD Password Attributes:</strong> Configured LAPS v2 to encrypt local administrator passwords in AD using Kerberos domain keys.</li><li><strong>Automated Reset On Read:</strong> Enforced immediate automatic local administrator password rotation upon helpdesk checkout.</li><li><strong>Custom Local Admin Account Names:</strong> Standardized custom local administrator account naming while disabling default built-in SID 500 accounts.</li></ul>
