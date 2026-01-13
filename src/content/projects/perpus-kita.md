---
title: "Perpus Kita - Library Management System"
description: "A comprehensive digital solution for managing library inventory, member records, and loan cycles."
heroImage: "/images/projects/coming-soon.png"
stacks:
  - "Laravel"
  - "MySQL"
  - "Bootstrap"
year: "2022"
---

## Overview

"Perpus Kita" is a Library Information System designed to digitize and automate the traditional manual processes of a library. The application serves as a central database for librarians to manage book collections, track member activities, and handle the circulation of assets (borrowing and returning) efficiently.

## Core Features & Logic

Although this project predates my shift to modern frontend frameworks, it was pivotal in building my foundation in **Software Architecture** and **Database Design**.

### 1. Database Normalization & Relationships

The core strength of this system lies in its relational database structure.

- **Data Integrity:** I designed a normalized database schema to handle relationships between Books, Authors, Categories, Members, and Loans.
- **The Challenge:** Ensuring that deleting a book category didn't break historical loan records (Foreign Key Constraints) and maintaining accurate stock counts in real-time.

### 2. Circulation Logic (The Business Rules)

The system isn't just a database; it handles specific business rules for the library:

- **Stock Management:** Automatically decreasing book availability when a loan is active and restoring it upon return.
- **Penalty Calculation:** Logic to calculate fines automatically if a book is returned past its due date.

## Tech Stack

- **Laravel (PHP):** Utilized the MVC (Model-View-Controller) architecture to keep the code organized and secure.
- **MySQL:** Used for complex queries and relational data storage.

## Conclusion

This project represents my strong roots in **Backend Development**. Understanding how data is structured and processed on the server side (Laravel) has made me a better Frontend Developer today, as I truly understand what happens behind the API.
