---
title: Domain Name System (DNS) Security Hardening & Split-Brain DNS
client: Business Systems House
year: "2026"
image: /images/uploads/Domain-Name-System-(DNS)-Security-Hardening-Split-Brain-DNS.png
excerpt: Implemented Split-Brain DNS, DNSSEC, and response rate limiting to protect enterprise DNS infrastructure against cache poisoning and spoofing.
tech:
  - Windows Server DNS
  - BIND
  - Split-Brain DNS
  - DNSSEC
  - DNS Sinkholing
  - Umbrella
---
<h2>Domain Name System (DNS) Security Hardening & Split-Brain DNS</h2><p>Hardened internal and external DNS infrastructure to eliminate internal IP disclosure while enforcing secure domain resolution.</p><h3>Key Features & Implementation</h3><ul><li><strong>Split-Horizon / Split-Brain DNS:</strong> Configured separate internal and external DNS zones so corporate FQDNs resolve to private IPs internally and public IPs externally.</li><li><strong>DNS Threat Sinkholing:</strong> Configured DNS recursion rules to sinkhole known malicious malware and command-and-control (C2) domains.</li><li><strong>Cache Poisoning Mitigation:</strong> Enabled DNS socket pooling, response rate limiting (RRL), and restricted zone transfers to authorized secondary servers.</li></ul>
