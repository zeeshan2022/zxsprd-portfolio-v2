---
title: Network Address Translation (NAT) & Port Forwarding Architecture
client: Business Systems House
year: "2026"
image: /images/uploads/Network-Address-Translation-(NAT)-Port-Forwarding-Architecture.png
excerpt: Configured Static SNAT/DNAT, VIP port forwarding, and Central NAT rules on FortiGate firewalls to publish internal web and SFTP services securely.
tech:
  - FortiGate Central NAT
  - VIPs
  - Destination NAT (DNAT)
  - Source NAT (SNAT)
  - IP Pools
---
<h2>Network Address Translation (NAT) & Port Forwarding Architecture</h2><p>Architected clean perimeter NAT policies mapping public IP addresses to isolated internal DMZ server endpoints with explicit port restriction.</p><h3>Key Features & Implementation</h3><ul><li><strong>Virtual IP (VIP) Mapping:</strong> Mapped static external public IP addresses to internal DMZ server IPs restricted strictly to required listening ports (e.g., 443, 22).</li><li><strong>Source NAT (SNAT) IP Pools:</strong> Configured outbound overload NAT IP pools to prevent perimeter gateway IP port exhaustion during peak user hours.</li><li><strong>Hairpin NAT Routing:</strong> Configured loopback NAT rules allowing internal office users to resolve public FQDNs to local servers seamlessly.</li></ul>
