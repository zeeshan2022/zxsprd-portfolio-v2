---
title: Enterprise Email Security & Smart Alerts Outlook Add-in
client: Confidential Enterprise Client
year: "2026"
image: /images/uploads/outlook-add-in-external-reci.png
excerpt: Developed a robust, background-running Outlook Add-in utilizing
  Microsoft Smart Alerts to intercept outgoing emails, prevent data leakage to
  external domains, and streamline internal phishing incident reporting.
tech:
  - Microsoft Office.js API
  - Outlook Web Add-ins (XML Manifest V1.1)
  - Smart Alerts (OnMessageSend Event)
  - Microsoft Graph API & MSAL.js
  - Azure App Service (Hosting)
  - JavaScript (ES6+)
  - HTML5
  - CSS3
---
<h3>Overview</h3>

<p>To enhance enterprise email security and prevent accidental data leakage, I developed a comprehensive Outlook Web Add-in. The solution operates on two fronts: a headless background service that intercepts outgoing emails using Microsoft’s Smart Alerts, and an interactive taskpane that empowers users to report security incidents and access IT utilities seamlessly.</p>



<h3>The Challenge</h3>

<p>Enterprise organizations frequently face risks from accidental external email disclosures and delayed phishing reporting. Standard server-side Data Loss Prevention (DLP) can be slow to react, and manual phishing reporting processes are often too cumbersome for end-users, leading to underreporting.</p>



<h3>The Solution</h3>

<p>I engineered a client-side Outlook Add-in that integrates directly into the user's native workflow without requiring them to leave their inbox.</p>



<h3>Key Features & Implementation</h3>

<ul>

\    <li><strong>Smart Alerts (Data Loss Prevention):</strong> Implemented a background runtime that listens to the <code>OnMessageSend</code> event. Before an email leaves the outbox, the script asynchronously fetches and evaluates the To, CC, and BCC fields against the organization's internal domains. If an external recipient is detected, it triggers a native Outlook Smart Alert popup, warning the user and allowing them to review or cancel the send.</li>

\    <li><strong>One-Click Phishing Reporting:</strong> Built a secure, one-click reporting mechanism using MSAL.js and the Microsoft Graph API. When a user flags a phishing email, the add-in automatically extracts the raw internet headers, attachments, and email body. It then packages this data into a High-Importance email and dispatches it directly to the Security Operations Center (SOC). It also includes a dynamic severity toggle (e.g., "User Clicked Link") to adjust the alert priority automatically.</li>

\    <li><strong>Modular Advanced UI:</strong> Designed a clean, lightweight taskpane with an "Advanced Options" toggle. To maintain performance and prevent UI bloat, secondary IT tools and manual reporting forms are loaded dynamically as isolated HTML fragments only when requested by the user.</li>

\    <li><strong>Utility Tools:</strong> Included everyday productivity features for IT staff, such as a standardized email timestamp formatter/copier and quick-access links to internal portals.</li>

</ul>



<h3>Technical Highlights</h3>

<ul>

\    <li><strong>Headless Background Execution:</strong> Configured the XML manifest to utilize a lightweight JavaScript-only runtime for the <code>OnMessageSend</code> event, ensuring zero UI lag during the send process.</li>

\    <li><strong>Asynchronous Promise Handling:</strong> Wrote robust JavaScript to handle concurrent asynchronous calls to the Office.js API (fetching To, CC, and BCC simultaneously) with built-in safety timeouts to prevent the Outlook client from freezing.</li>

\    <li><strong>Secure Authentication:</strong> Integrated Microsoft Authentication Library (MSAL) to silently acquire Graph API tokens, ensuring secure, seamless communication with Exchange without disrupting the user experience.</li>

</ul>



<h3>Impact</h3>

<p>This add-in significantly reduced the risk of accidental external data exposure and streamlined the phishing reporting workflow, resulting in faster incident response times for the IT security team.</p>
