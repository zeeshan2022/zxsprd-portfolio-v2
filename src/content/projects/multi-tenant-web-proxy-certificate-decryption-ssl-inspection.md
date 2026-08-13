---
title: Multi-Tenant Web Proxy Certificate Decryption & SSL Inspection
client: Business Systems House
year: "2025"
image: /images/uploads/Multi-Tenant-Web-Proxy-Certificate-Decryption-SSL-Inspection.png
excerpt: Engineered full SSL/TLS deep packet inspection on perimeter web proxies, deploying internal root CA certificates across endpoint trust stores.
tech:
  - FortiGate SSL Inspection
  - ADCS
  - Root CA
  - Group Policy (GPO)
  - Certificate Trust Stores
---
<h2>Multi-Tenant Web Proxy Certificate Decryption & SSL Inspection</h2><p>Implemented full SSL deep packet inspection across perimeter firewalls to uncover encrypted malware payloads and hidden data exfiltration channels.</p><h3>Key Features & Implementation</h3><ul><li><strong>Subordinate CA Deployment:</strong> Generated dedicated firewall intermediate CA certificates for dynamic SSL re-signing.</li><li><strong>GPO Root Certificate Distribution:</strong> Automated pushing internal CA root certificates to client Windows, Mac, and browser trust stores via GPO.</li><li><strong>Bypass Category Exceptions:</strong> Configured explicit SSL inspection bypass rules for sensitive banking and healthcare web domains.</li></ul>
