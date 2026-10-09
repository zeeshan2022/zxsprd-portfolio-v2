---
title: OCI Multi-Region Disaster Recovery & Cloud Infrastructure Migration
client: Business Systems House (BSH) / Confidential Enterprise Client
year: "2026"
image: /images/uploads/multi-region-vpn-tunneling-data-transfer-optimization.png
excerpt: Architected and executed an end-to-end cloud disaster recovery
  migration, migrating on-premises virtual machine workloads and custom firewall
  appliances to Oracle Cloud Infrastructure (OCI) across Dubai and Frankfurt
  regions.
tech:
  - Oracle Cloud Infrastructure (OCI)
  - FortiGate VM
  - IPsec VPN
  - VCN/Subnet CIDR Architecture
  - Dynamic Routing Gateway (DRG)
  - Custom Linux Images
  - Serial Console Debugging
---
<article class="portfolio-project">

  <header class="project-header">

\    <h3>OCI Multi-Region Disaster Recovery & Cloud Infrastructure Migration</h3>

  </header>



  <section class="project-section problem-context">

\    <h4>Problem & Context</h4>

\    <p>

\    The client required a resilient, geo-redundant disaster recovery posture to transition critical enterprise workloads from on-premises infrastructure to cloud-native environments. The primary technical requirement was deploying and interconnecting multi-region landing zones (OCI Dubai and Frankfurt) while maintaining continuous security policy enforcement and strict network segmentation.

\    </p>

  </section>



  <section class="project-section technical-solution">

\    <h4>Technical Solution & Architecture</h4>

\    <p>

\    Designed a hub-and-spoke Virtual Cloud Network (VCN) topology across Dubai and Frankfurt OCI regions. Exported custom on-premises virtual disk images, imported them to OCI Object Storage, and provisioned tailored compute shapes. Configured Dynamic Routing Gateways (DRGs), Remote Peering Connections (RPCs), and custom OCI Route Tables to establish seamless inter-region communication and traffic redirection through centralized FortiGate Next-Generation Firewalls.

\    </p>

  </section>



  <section class="project-section key-contributions">

\    <h4>Key Contributions & Engineering Decisions</h4>

\    <ul>

\    <li><strong>Custom Disk Image Conversion:</strong> Exported and converted VM boot volumes, resolving boot loader and block storage driver incompatibilities using OCI Cloud Shell and serial console diagnostics.</li>

\    <li><strong>Network CIDR Design:</strong> Planned non-overlapping IPv4 CIDR blocks across Hub, Production, Non-Production, and Management subnets across both regions.</li>

\    <li><strong>Site-to-Site IPsec VPN Tunnels:</strong> Provisioned redundant IPsec VPN tunnels with automated failover between OCI DRGs and FortiGate appliances.</li>

\    </ul>

  </section>



  <section class="project-section outcome-impact">

\    <h4>Outcome & Impact</h4>

\    <p>

\    Successfully achieved sub-hour Recovery Time Objective (RTO) for mission-critical services during failover testing, ensuring high availability, zero data loss, and complete compliance with enterprise regulatory standards.

\    </p>

  </section>

</article>
