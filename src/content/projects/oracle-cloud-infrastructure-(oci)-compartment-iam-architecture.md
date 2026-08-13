---
title: Oracle Cloud Infrastructure (OCI) Compartment & IAM Architecture
client: Business Systems House
year: "2026"
image: /images/uploads/Oracle-Cloud-Infrastructure-(OCI)-Compartment-IAM-Architecture.png
excerpt: Architected multi-tenant compartment structures and fine-grained Identity and Access Management (IAM) policies in OCI for workload isolation.
tech:
  - Oracle Cloud Infrastructure (OCI IAM)
  - Compartments
  - RBAC
  - Dynamic Groups
  - OCI Audit
---
<h2>Oracle Cloud Infrastructure (OCI) Compartment & IAM Architecture</h2><p>Designed a zero-trust cloud resource hierarchy using OCI Compartments and least-privilege IAM policy statements.</p><h3>Key Features & Implementation</h3><ul><li><strong>Compartment Segmentation:</strong> Structured production, staging, and shared service compartments to enforce logical resource boundaries.</li><li><strong>Least-Privilege IAM Policies:</strong> Authored granular IAM statements restricting compute, database, and networking modification rights to specific user groups.</li><li><strong>Dynamic Groups & Instance Principals:</strong> Configured Dynamic Groups allowing OCI compute instances to securely call OCI APIs without hardcoded credentials.</li></ul>
