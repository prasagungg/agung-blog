---
title: "Protoslabs - Risk Management Platform"
description: "An enterprise-grade Risk Management platform designed to analyze threats, vulnerabilities, and financial impact."
heroImage: "/images/projects/protos-labs.png"
stacks:
  - "React.js"
  - "Material UI"
  - "React Query"
  - "RBAC Strategy"
year: "2023"
---

## Overview

Protoslabs is a comprehensive Risk Management System designed to help organizations quantify cybersecurity risks. The platform correlates assets, threats, and vulnerabilities to calculate potential financial loss, enabling stakeholders to make data-driven decisions on security controls.

## Key Challenge: Complex Workflow Orchestration

Unlike standard CRUD applications, the core complexity of Protoslabs lay in its massive **Multi-Tiered Workflow Engine**.

### 1. The 15-Stage Approval Pipeline

The application requires a highly sequential workflow involving up to **15 different user roles**.

- **The Problem:** A task (risk assessment) works like a relay race. It starts with Role A, passes to Role B, then C, and so on. The task is not considered "Complete" until it has successfully passed through all 15 checkpoints.
- **The Logic:** This required implementing strict **state machine logic** on the frontend. I had to ensure that Role C could not interact with the data until Role B had officially signed off, while keeping the UI intuitive for every user in the chain.

### 2. Granular Role-Based Access Control (RBAC)

With so many stakeholders involved, managing permissions was critical.

- I implemented a dynamic permission system where the UI adapts based on the logged-in user's role.
- This involved complex conditional rendering: hiding specific buttons, disabling inputs, or revealing sensitive financial data only to authorized roles within the specific stage of the workflow.

## Tech Stack Strategy

- **React Query:** Crucial for managing the server state. Since the status of tasks changed frequently between roles, React Query ensured that users always saw the most up-to-date status without stale data.
- **Material UI:** Used to build a clean, professional dashboard that handles complex forms and data tables without clutter.

## Conclusion

Building Protoslabs challenged my ability to handle **Business Logic Complexity**. It wasn't just about making things look good; it was about enforcing strict business rules and ensuring that a complex, 15-step process flowed smoothly without user error.
