---
title: "Lentara Biller - Digital Product Aggregator"
description: "A comprehensive backoffice for managing digital product inventory (PPOB), provider switching, and dynamic pricing strategies."
heroImage: "/images/projects/lentera-biller.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
  - "PPOB Management"
year: "2025"
---

## Overview

While the Payment Gateway handles incoming money, the **Lentara Biller** system handles the delivery of digital products (PPOB). This web application is the control room for managing thousands of Stock Keeping Units (SKUs)—from Mobile Data and Airtime to Utility Tokens and Vouchers—that are distributed to partners.

## Key Focus: Catalog & Pricing Complexity

The main challenge in a Biller system is the sheer volume of products and the volatility of prices from upstream providers.

### 1. Massive Product Catalog Management

A Biller system connects to multiple upstream providers (Telcos, Aggregators).

- **The Challenge:** Managing thousands of product rows where availability changes by the second.
- **The Solution:** I built a high-performance **Product Management Interface**. It allows admins to map products from different providers (e.g., mapping "Telkomsel 10k" from Provider A vs. Provider B) and manage the "Switching Logic" to determine which provider to use if one goes down.

### 2. Dynamic Pricing & Margin Engine

Profit in the Biller business comes from thin margins on high volumes.

- **Pricing Dashboard:** The UI allows finance teams to set granular pricing rules. I implemented features to bulk-update selling prices based on provider costs, ensuring the company maintains a healthy margin even when supplier prices fluctuate.
- **Markup Configuration:** An intuitive interface to set specific admin fees or commission rates for different tiers of partners (Agents vs. Distributors).

## Tech Stack

- **Vue.js:** Essential for handling large data tables (DataGrids) with pagination and filtering without lag.
- **Tailwind CSS:** Used to create complex forms for product mapping that remain clean and organized.

## Conclusion

This project complements my Fintech expertise by adding **Digital Supply Chain** knowledge. It demonstrates my ability to build systems that not only track transactions but also manage the complex inventory and pricing logic required for a digital goods business.
