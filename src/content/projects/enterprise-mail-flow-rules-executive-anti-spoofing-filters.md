---
title: Enterprise Mail Flow Rules & Executive Anti-Spoofing Filters
client: Business Systems House
year: "2026"
image: /images/uploads/Enterprise-Mail-Flow-Rules-Executive-Anti-Spoofing-Filters.png
excerpt: Created custom Exchange transport rules to stop executive impersonation, external domain spoofing, and unauthorized automatic forwarding.
tech:
  - Exchange Online
  - Transport Rules
  - Anti-Spoofing
  - Defender for Office 365
  - PowerShell
---
<h2>Enterprise Mail Flow Rules & Executive Anti-Spoofing Filters</h2><p>Architected custom email transport rules in M365 to neutralize Business Email Compromise (BEC) and executive impersonation attacks.</p><h3>Key Features & Implementation</h3><ul><li><strong>Executive Name Impersonation Rules:</strong> Created transport rules rejecting external emails containing C-suite executive display names in sender headers.</li><li><strong>External Email Caution Banners:</strong> Prepended dynamic HTML caution banners to all external incoming emails warning users of external origin.</li><li><strong>Auto-Forwarding Block Policies:</strong> Blocked user-created SMTP auto-forwarding rules to prevent covert email data exfiltration.</li></ul>
