---
title: "Datagateway Backoffice - Payment Switching"
description: "The central administration console for a unified switching middleware connecting banks and partners for electricity payments."
heroImage: "/images/projects/dg-bot.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
  - "Switching Logic"
year: "2024"
---

## Overview

Datagateway serves as a mission-critical **"Single Switching Hub"** (Middleware) that acts as the bridge between Financial Institutions (Banks) and Payment Partners (Mitra/Aggregators). Its primary function is to route and process high-volume Electricity Utility payments (PLN). This Backoffice application is the command center used to configure these connections and monitor the health of the switching traffic.

## Key Focus: Middleware Orchestration

Unlike a standard user app, this system manages B2B (Business-to-Business) connectivity. The challenge lies in ensuring interoperability between different banking systems and payment partners.

### 1. Unified Connection Management

Banks and Partners often use different data standards (ISO 8583, REST, XML).

- **The Hub Concept:** The backoffice manages the configuration that "translates" and routes these requests. I built interfaces that allow admins to onboard new Banks or Partners and configure their API credentials and endpoints without needing to restart the core server.
- **Route Mapping:** Managing the logic of which Partner handles which specific bill type, ensuring the "Single Switch" promise works seamlessly.

### 2. Transaction Traffic Monitoring

When dealing with electricity bills, downtime is not an option.

- **Live Traffic Visualizer:** I designed a dashboard to monitor the "heartbeat" of the switch. If a specific Bank connection starts timing out or returning errors, the system highlights it immediately.
- **Reconciliation Tools:** Features to trace a transaction ID across the entire chain (from Bank -> Datagateway -> Mitra -> Utility Provider) to pinpoint exactly where a failure occurred during a dispute.

## Tech Stack

- **Vue.js:** Capable of handling real-time data streams to visualize transaction traffic without lag.
- **Tailwind CSS:** Used to create a clean, high-contrast interface that helps engineers and support staff read complex technical logs and configurations easily.

## Conclusion

This project demonstrates my understanding of **Financial Infrastructure**. It shows I can build tools that manage the invisible but vital "pipes" that connect the banking world with utility providers, ensuring payments happen reliably every second.
