---
title: Remote Application Publishing via Web Application Proxy
client: Business Systems House
year: "2026"
image: /images/uploads/Remote-Application-Publishing-via-Web-Application-Proxy.png
excerpt: Published internal enterprise web applications to remote users using Web Application Proxy (WAP) and pre-authentication MFA controls.
tech:
  - Web Application Proxy (WAP)
  - ADFS
  - Entra ID Application Gateway
  - TLS 1.3
  - Reverse Proxy
---
<h2>Remote Application Publishing via Web Application Proxy</h2><p>Architected secure reverse proxy publishing for internal legacy web applications, allowing safe remote access without full corporate VPN client connection.</p><h3>Key Features & Implementation</h3><ul><li><strong>Pre-Authentication Controls:</strong> Enforced Entra ID pre-authentication and MFA challenges prior to proxying requests to internal application servers.</li><li><strong>URL Translation & SSL Offloading:</strong> Terminated external TLS connections at the proxy edge and mapped external FQDNs to internal IP targets.</li><li><strong>Header Sanitization & Hardening:</strong> Stripped internal server banners and enforced anti-clickjacking HTTP response headers.</li></ul>
