---
title: "Axme IO - WhatsApp Automation Platform"
description: "A comprehensive SaaS platform enabling businesses to deploy intelligent chatbots and manage customer interactions on WhatsApp."
heroImage: "/images/projects/axme.png"
stacks:
  - "Next.js"
  - "NestJS"
  - "Material UI"
  - "PostgreSQL"
  - "WebSockets"
year: "2023"
---

## Overview

Axme IO is a powerful web application designed to help businesses automate their customer service and marketing on WhatsApp. It serves as a central dashboard where users can connect their WhatsApp numbers, configure automated reply flows (chatbots), and broadcast messages to their customer base.

## Key Focus: Real-Time Communication

Building a chat platform requires a different architectural approach than standard web apps; it must be **Event-Driven**.

### 1. Handling High-Concurrency Messaging

The core challenge was managing the sheer volume of incoming webhook events from WhatsApp.

- **Event-Driven Architecture:** I utilized **NestJS** to build a robust backend capable of processing thousands of incoming messages per minute without blocking the main thread.
- **Queue Management:** Implemented a queuing system to ensure that even during high-traffic broadcasts, every message is processed and delivered reliably, preventing server overloads.

### 2. Session Management & Connectivity

Unlike a static API, WhatsApp connections require persistent session management.

- **Stateful Connections:** I developed the logic to manage authentication states (QR Code scanning/Token validation) to keep the bot "online" 24/7.
- **Real-Time UI Updates:** Using **Next.js** and WebSockets, the dashboard updates instantly when a new message arrives, allowing human agents to take over the conversation from the bot seamlessley if needed.

## Tech Stack

- **NestJS:** Chosen for its scalability and modular architecture, perfect for handling complex logic like message routing and bot commands.
- **PostgreSQL:** Used to store massive amounts of chat history and contact data with relational integrity.
- **Next.js & Material UI:** Delivered a fast, responsive, and professional dashboard for users to configure their bots.

## Conclusion

This project demonstrates my Fullstack capabilities in building **Real-Time Applications**. It shows I can handle the complexities of messaging protocols and build scalable systems that bridge the gap between businesses and their customers on the world's most popular chat app.
