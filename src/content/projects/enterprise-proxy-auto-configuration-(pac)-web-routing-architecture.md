---
title: Enterprise Proxy Auto-Configuration (PAC) & Web Routing Architecture
client: Business Systems House
year: "2025"
image: /images/uploads/Enterprise-Proxy-Auto-Configuration-(PAC)-Web-Routing-Architecture.png
excerpt: Authored and deployed Proxy Auto-Configuration (wpad.dat / PAC) scripts to dynamically route client browser web traffic through perimeter proxies.
tech:
  - PAC Files
  - WPAD
  - JavaScript
  - Explicit Proxy
  - FortiGate
  - Group Policy (GPO)
---
<h2>Enterprise Proxy Auto-Configuration (PAC) & Web Routing Architecture</h2><p>Designed intelligent browser traffic redirection by deploying centralized PAC files to manage explicit proxy routing for corporate endpoints.</p><h3>Key Features & Implementation</h3><ul><li><strong>Dynamic Traffic Routing Logic:</strong> Authored custom JavaScript PAC functions bypassing proxies for internal RFC1918 subnets while enforcing proxying for internet targets.</li><li><strong>Failover Proxy Redundancy:</strong> Configured primary and secondary proxy fallback declarations to guarantee uninterrupted web browsing during proxy maintenance.</li><li><strong>GPO WPAD Deployment:</strong> Published PAC file locations dynamically via DHCP Option 252 and Group Policy Internet Settings.</li></ul>
