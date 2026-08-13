---
title: Enterprise Password Policy & Fine-Grained Password Settings (FGPP)
client: Business Systems House
year: "2025"
image: /images/uploads/Enterprise-Password-Policy-Fine-Grained-Password-Settings-(FGPP).png
excerpt: Configured Active Directory Fine-Grained Password Policies (FGPP) to enforce 16+ character passphrases and lockout rules for privileged accounts.
tech:
  - Active Directory FGPP
  - Password Policy
  - Account Lockout Thresholds
  - PowerShell
  - AD Administrative Center
---
<h2>Enterprise Password Policy & Fine-Grained Password Settings (FGPP)</h2><p>Architected differential password complexity baselines by deploying Active Directory Fine-Grained Password Policies to high-privilege account groups.</p><h3>Key Features & Implementation</h3><ul><li><strong>Privileged Account Passphrase Baselines:</strong> Enforced mandatory 16-character minimum passphrases and 90-day rotation for Domain Admin accounts.</li><li><strong>Account Lockout Hardening:</strong> Configured aggressive account lockout thresholds (5 invalid attempts) to mitigate brute-force password guessing attacks.</li><li><strong>Breached Password Dictionary Checks:</strong> Integrated password filter DLLs checking new password attempts against known breached password lists.</li></ul>
