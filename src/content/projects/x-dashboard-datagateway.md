---
title: "X Dashboard Datagateway"
description: "High-performance real-time monitoring dashboard designed for large-scale displays."
heroImage: "/images/projects/x-dashboard.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
  - "WebSocket"
year: "2024"
---

## Overview

X Dashboard Datagateway is a specialized web application developed to monitor transaction flows within the Datagateway ecosystem. Unlike standard desktop applications, this system was specifically engineered to run continuously on **large display monitors (TVs)** in the operations center, providing the team with real-time visibility into transaction health and status.

## Role & Responsibilities

I served as the **Frontend Developer** and **UI/UX Designer** for this project. Since the backend data structure was already established, my focus was entirely on how to present this massive amount of data effectively and efficiently.

## Key Challenges

### 1. Designing for "At-a-Glance" Visibility (TV Interface)

The primary design constraint was the display medium: a large TV screen mounted on a wall. This required a shift from traditional web design to **Dashboard/Wallboard design principles**:

- **Legibility:** I had to design a UI with high contrast and scaled typography so stakeholders could understand the status from a distance without needing to interact with the screen.
- **Information Hierarchy:** The challenge was decluttering complex transaction data to show only critical metrics. I prioritized visual indicators (colors, icons) over dense text to ensure the system status could be assessed in seconds.

### 2. High-Performance Rendering for Massive Datasets

The backend piped in a massive volume of transaction logs, which initially caused significant rendering lag and browser freezing ("jank").

- To solve this, I implemented **DOM virtualization** (Virtual Scrolling). Instead of rendering thousands of rows at once, the application only renders the items currently visible in the viewport.
- I optimized the **Vue.js reactivity system** to ensure that frequent data updates did not trigger unnecessary re-renders of the entire page, keeping the animation and scrolling buttery smooth despite the heavy data load.

## Tech Stack

- **Vue.js:** Chosen for its lightweight nature and efficient reactivity system.
- **Tailwind CSS:** Used for rapid UI development and ensuring consistent spacing and typography for the large-screen layout.

## Conclusion

This project sharpened my skills in performance profiling and context-aware design. It taught me that a "working" application isn't enough; it must be optimized for the specific hardware (TV) and data volume (Big Data) it serves.
