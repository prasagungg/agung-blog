---
title: "PLN For Business - Corporate Payment Portal"
description: "A dedicated B2B platform streamlining electricity billing and payments for corporate clients."
heroImage: "/images/projects/pln-for.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
  - "Pinia (State Management)"
  - "Payment Gateway Integration"
year: "2024"
---

## Overview

PLN For Business is a specialized web application designed to serve corporate customers. Unlike standard residential portals, this platform is engineered to handle the complex needs of business entities, allowing them to manage and pay for high-volume electricity usage efficiently.

## Key Challenges

### 1. Architecting a Multi-Step Wizard (The "Multi-Form")

Business transactions require significantly more data collection than personal ones (Tax IDs, Company Registration, etc.). Presenting this in a long, single page would overwhelm the user.

- **The Solution:** I designed a robust **Multi-Step Wizard** architecture.
- **Technical Implementation:** Using Vue's state management, I broke the process into logical chunks. The challenge was ensuring data persistence—if a user goes back to "Step 2" from "Step 4," their data must remain intact. I implemented strict validation per step to prevent users from moving forward with incomplete data.

### 2. Integrated Payment Gateway Ecosystem

The platform needed to support a wide variety of payment methods (Virtual Accounts, Credit Cards, E-Wallets) to accommodate different business financial workflows.

- **The Complexity:** Integrating "Multi-Payment" means handling various API responses and transaction states (Pending, Success, Failed, Expired).
- **The Result:** I built a unified payment interface that abstracts the complexity of different providers, giving the user a consistent checkout experience regardless of the method they choose.

## Tech Stack

- **Vue.js:** The component-based structure was perfect for building reusable form steps and payment cards.
- **Tailwind CSS:** Used to create a clean, trustworthy, and corporate-grade user interface.

## Conclusion

This project sharpened my skills in **Fintech Development**. It taught me how to handle sensitive transaction flows and how to design complex forms that feel simple and intuitive to the user.
