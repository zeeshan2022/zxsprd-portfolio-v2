---
title: Enterprise Active Directory Kerberos Hardening & AES Enrolment
client: Business Systems House
year: "2025"
image: /images/uploads/Enterprise-Active-Directory-Kerberos-Hardening-AES-Enrolment.png
excerpt: Hardened Active Directory Kerberos authentication, enforcing AES-128/256 encryption types and disabling legacy RC4 cipher suites.
tech:
  - Active Directory
  - Kerberos
  - AES-256
  - GPO
  - Security Hardening
  - Service Principal Names (SPN)
---
<h2>Enterprise Active Directory Kerberos Hardening & AES Enrolment</h2><p>Eliminated kerberoasting attack vectors across domain accounts by enforcing high-strength AES encryption for Kerberos service tickets.</p><h3>Key Features & Implementation</h3><ul><li><strong>RC4 Cipher Deprecation:</strong> Disabled weak Kerberos RC4-HMAC cipher suites across domain controllers and member servers via GPO.</li><li><strong>Service Account AES Binding:</strong> Configured explicit AES-128 and AES-256 ticket encryption settings on all Kerberos SPN service accounts.</li><li><strong>TGT Lifetime Optimization:</strong> Reduced Kerberos Ticket Granting Ticket (TGT) maximum lifetime to 8 hours to minimize ticket theft exposure.</li></ul>
