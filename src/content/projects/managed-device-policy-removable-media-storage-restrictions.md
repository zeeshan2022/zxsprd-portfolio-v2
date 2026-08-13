---
title: Managed Device Policy & Removable Media Storage Restrictions
client: Business Systems House
year: "2025"
image: /images/uploads/Managed-Device-Policy-Removable-Media-Storage-Restrictions.png
excerpt: Designed and enforced Microsoft Active Directory Group Policy Objects (GPOs) to block unauthorized removable storage devices and prevent endpoint data exfiltration.
tech:
  - Active Directory Group Policy (GPO)
  - Endpoint Security
  - BitLocker
  - Windows Server AD
---
<h2>Managed Device Policy & Removable Media Storage Restrictions</h2><p>Architected and deployed centralized USB and removable storage blocking policies across corporate domain-joined workstations to prevent data leakage and malware ingestion.</p><h3>Key Features & Implementation</h3><ul><li><strong>Granular GPO Whitelisting:</strong> Restricted mass storage access while allowing authorized, IT-approved encrypted storage drives via hardware GUID matching.</li><li><strong>BitLocker To Go Integration:</strong> Mandated automatic AES-256 encryption on all approved portable drives.</li><li><strong>Centralized Policy Auditing:</strong> Configured real-time Event Log alerts for unauthorized device insertion attempts.</li></ul>
