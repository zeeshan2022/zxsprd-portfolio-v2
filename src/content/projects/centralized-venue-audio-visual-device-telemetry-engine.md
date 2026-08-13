---
title: Centralized Venue Audio-Visual Device Telemetry Engine
client: ABRTECH STUDIO
year: "2024"
image: /images/uploads/Centralized-Venue-Audio-Visual-Device-Telemetry-Engine.png
excerpt: Engineered automated background monitoring services tracking hardware health, lamp hours, and network status for all venue AV equipment.
tech:
  - Python
  - SNMP
  - InfluxDB
  - Grafana
  - Telegram Bot API
  - Linux Service
---
<h2>Centralized Venue Audio-Visual Device Telemetry Engine</h2><p>Engineered automated background monitoring services tracking hardware health, lamp hours, and network status for all venue AV equipment.</p><h3>Key Features & Implementation</h3><ul><li><strong>Continuous Multi-Protocol Polling:</strong> Polled field hardware every 30 seconds via SNMP, PJLink, and ICMP ping probes to record device availability.</li><li><strong>Timeseries Metric Storage:</strong> Stored operational metrics in InfluxDB to analyze temperature trends, lamp hour usage, and network link drops over time.</li><li><strong>Instant Mobile Push Escalations:</strong> Configured automated Telegram and Email alerts notifying technicians immediately if key displays go offline.</li></ul>
