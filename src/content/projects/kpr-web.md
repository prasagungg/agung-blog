---
title: "KPR Web - Mortgage Management Platform"
description: "A centralized financial platform designed to streamline mortgage (KPR) applications, payment tracking, and bank reconciliation."
heroImage: "/images/projects/coming-soon.png"
stacks:
  - "Laravel"
  - "MySQL / PostgreSQL"
  - "REST API Integration"
  - "Database Optimization"
year: "2022"
---

## Overview

KPR Web is a specialized financial application developed to manage the end-to-end lifecycle of Mortgage (Kredit Pemilikan Rumah) payments. The platform serves as the bridge between property developers/management and the banking system, ensuring that thousands of transaction records are tracked, verified, and reconciled accurately.

## Key Challenges

### 1. Enterprise Banking Integration (Bank BTN)

The most critical aspect of this project was the seamless integration with **Bank BTN's** ecosystem.

- **The Complexity:** Connecting to a major bank's API requires strict adherence to security protocols and data standards. I had to build a robust **API Gateway** to handle payment inquiries, status callbacks, and transaction verification in real-time.
- **Reliability:** Ensuring that no payment data was lost during the synchronization process between the app and the bank, even during network fluctuations.

### 2. Optimizing for High-Volume Data

As the number of customers and transaction history grew, the database size became massive, posing a risk of slow response times ("latency").

- **Query Performance:** The initial challenge was system sluggishness due to heavy data loads. To solve this, I performed extensive **Database Indexing** and refactored complex Eloquent ORM queries into optimized Raw SQL where necessary.
- **Response Time:** I implemented efficient data pagination and caching strategies to ensure that admins could load reports and dashboard summaries instantly, reducing load times from seconds to milliseconds.

## Tech Stack

- **Laravel:** Chosen for its robust security features and eloquent syntax, which simplified the complex business logic of mortgage calculations.
- **Bank API:** Custom integration modules to communicate securely with Bank BTN.

## Conclusion

This project highlights my ability to build **Mission-Critical Financial Systems**. It demonstrates that I can handle the pressure of third-party banking integrations and possess the engineering skills to optimize heavy databases for speed and reliability.
