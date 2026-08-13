---
title: Enterprise Endpoint Software Firewalls & Connection Rule Baselines
client: Business Systems House
year: "2025"
image: /images/uploads/Enterprise-Endpoint-Software-Firewalls-Connection-Rule-Baselines.png
excerpt: Deployed standardized Windows Defender Firewall connection rules via GPO, blocking inbound unrequested connections and restricting management ports.
tech:
  - Windows Defender Firewall
  - Group Policy (GPO)
  - Connection Rules
  - Network Isolation
  - Endpoint Security
---
<h2>Enterprise Endpoint Software Firewalls & Connection Rule Baselines</h2><p>Standardized host-based software firewall rules across all domain workstations to prevent lateral network movement during malware incidents.</p><h3>Key Features & Implementation</h3><ul><li><strong>Inbound Default-Deny Baselines:</strong> Enforced default-deny inbound rules on all domain and private network firewall profiles.</li><li><strong>Management Port Restrictions:</strong> Restricted inbound WinRM, RDP, and SMB management ports exclusively to authorized Jump Host IP subnets.</li><li><strong>Outbound Application Whitelisting:</strong> Blocked unauthorized outbound connections from non-standard system directories to prevent reverse shell callbacks.</li></ul>
