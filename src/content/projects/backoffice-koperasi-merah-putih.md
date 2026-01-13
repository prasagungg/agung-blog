---
title: "Koperasi Merah Putih - Agency Backoffice"
description: "A centralized dashboard designed to empower cooperative members to operate as independent digital payment agents (PPOB)."
heroImage: "/images/projects/kdmp.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
  - "Agency Model"
year: "2025"
---

## Overview

This Backoffice application transforms the traditional cooperative model into a modern digital ecosystem. Instead of just savings and loans, this platform manages a **PPOB (Payment Point Online Bank)** network, enabling registered cooperative members to become active agents. It allows them to resell digital products (Electricity Tokens, Airtime, Bill Payments) to their local community.

## Key Focus: Managing a Distributed Agent Network

The primary challenge was to build a system that manages thousands of members not just as "users," but as "business partners" (Agents) with their own balances and transaction capabilities.

### 1. Agent & Balance Management

The system acts as the control tower for the agent network.

- **Top-Up & Mutation Monitoring:** Admins can oversee the deposit flows (Top-up Saldo) from members/agents. The UI provides a clear audit trail of every balance movement to prevent fraud or discrepancies.
- **Agent Activation:** Streamlined workflows to verify member data and activate their privileges to transact as agents, ensuring only authorized members can access the reseller features.

### 2. Transaction & Commission Oversight

Unlike a standard shop, an agency model involves profit sharing.

- **Real-Time Transaction Logs:** I designed data grids to monitor high volumes of PPOB transactions occurring across different villages. Admins can quickly troubleshoot failed transactions (e.g., if a token code isn't generated).
- **Profit Analysis:** The dashboard visualizes the transaction volume per agent, helping the cooperative identify top-performing agents and calculate the collective margin generated for the cooperative organization.

## Tech Stack

- **Vue.js:** Crucial for handling the real-time status updates of transactions (Pending -> Success/Failed) without requiring full page refreshes.
- **Tailwind CSS:** Used to build a clean, high-density interface that allows admins to view complex transaction details and agent profiles efficiently.

## Conclusion

This project highlights my ability to build **Economic Empowerment Platforms**. It demonstrates that I can design systems that support B2B2C business models, where the software serves as a tool for users to generate income.
