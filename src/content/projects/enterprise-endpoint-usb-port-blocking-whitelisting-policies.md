---
title: Enterprise Endpoint USB Port Blocking & Whitelisting Policies
client: Business Systems House
year: "2025"
image: /images/uploads/Enterprise-Endpoint-USB-Port-Blocking-Whitelisting-Policies.png
excerpt: Designed Group Policy objects restricting USB mass storage access while whitelisting approved encrypted hardware drives via device GUID.
tech:
  - Group Policy (GPO)
  - USB Port Blocking
  - Endpoint Security
  - BitLocker To Go
  - Active Directory
---
<h2>Enterprise Endpoint USB Port Blocking & Whitelisting Policies</h2><p>Prevented physical USB data exfiltration and malware ingestion by enforcing strict removable media access restrictions across workstations.</p><h3>Key Features & Implementation</h3><ul><li><strong>Mass Storage Deny Policy:</strong> Applied domain GPOs denying read/write access to unauthorized USB mass storage device classes.</li><li><strong>Hardware GUID Whitelisting:</strong> Configured hardware device ID exceptions allowing IT-approved encrypted flash drives for specific user roles.</li><li><strong>Audit Incident Logging:</strong> Configured Windows Event Log forwarding to track and report unauthorized USB connection attempts.</li></ul>
