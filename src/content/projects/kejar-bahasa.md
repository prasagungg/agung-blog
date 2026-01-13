---
title: "Kejar Bahasa - EdTech Platform"
description: "A comprehensive Learning Management System (LMS) featuring course marketplaces, progress tracking, and secure payment integration."
heroImage: "/images/projects/coming-soon.png"
stacks:
  - "Laravel"
  - "MySQL"
  - "Payment Gateway"
  - "Bootstrap"
year: "2022"
---

## Overview

Kejar Bahasa is a robust Learning Management System (LMS) designed to facilitate online education. Unlike simple portals, this platform functions as a full **Course Marketplace**, allowing instructors to publish content and students to purchase and access courses digitally. It bridges the gap between educational content delivery and digital commerce.

## Key Challenges

### 1. Integrating E-Commerce Logic

The main complexity lay in merging a learning platform with a shopping system.

- **Transactional Integrity:** I had to design a secure checkout flow. This involved integrating with a **Payment Gateway** (e.g., Midtrans/Xendit) and handling **Webhooks** to ensure that course access is granted automatically _only_ after the payment status is confirmed as "Success" by the bank.
- **Order Management:** Handling various transaction states (Pending, Paid, Expired, Failed) to prevent revenue loss or user frustration.

### 2. Access Control & Content Security

Since the content is paid, security was paramount.

- **Middleware Protection:** I implemented strict authorization logic (Policies/Gates in Laravel). Even if a user has the direct URL to a video, the system checks if they have a valid "Purchased" record in the database before serving the content.
- **Progress Tracking:** Developing the logic to track which lessons a student has completed and calculating their overall percentage progress in real-time.

## Tech Stack

- **Laravel:** The backbone of the application, handling complex relationships between Users, Courses, Orders, and Payments.
- **Relational Database:** Designed to handle complex queries, such as "Show all courses purchased by User X that are 50% complete."

## Conclusion

This project demonstrates my ability to build **Revenue-Generating Platforms**. It showcases my understanding of how to protect digital assets and manage the financial flow within a web application.
