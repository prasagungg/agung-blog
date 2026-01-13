---
title: "EV Lifestyle Survey WebView"
description: "A mobile-optimized web view for collecting detailed user data regarding electric vehicle usage habits."
heroImage: "/images/projects/survey.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
year: "2023"
---

## Overview

This project is a specialized **WebView** component designed to be embedded within a mobile application. Its purpose is to capture comprehensive data regarding users' lifestyles and their readiness for Electric Vehicles (EV).

## Key Challenge: Complex State Management

The main complexity of this project wasn't the UI layout, but the **sheer volume of data** that needed to be handled. The survey contained a vast number of questions, ranging from simple text inputs to complex multiple-choice selections.

### Managing the "Mega-Form"

Handling state for a form of this magnitude presented significant challenges:

1.  **State Complexity:** With dozens of input fields, managing the reactive state without creating "spaghetti code" was difficult. I had to structure the data model carefully to ensure that the user's answers were tracked accurately across different sections.
2.  **Reactivity & Performance:** Updating a single field in a massive form can sometimes cause unnecessary re-renders in Vue if not handled correctly. I optimized the state structure to ensure the inputs remained snappy and responsive on mobile devices.
3.  **Data Integrity:** Ensuring that all required fields were validated correctly before the final submission payload was sent to the server.

## Tech Stack

- **Vue.js:** The two-way data binding capabilities of Vue were essential for managing the complex form inputs effortlessly.
- **Tailwind CSS:** Used to style the form elements quickly and ensure the design remained responsive and touch-friendly for mobile screens.

## Conclusion

This project taught me the importance of planning data structures _before_ writing the code. By organizing the state logic effectively, I was able to turn a potentially overwhelming list of questions into a smooth user experience.
