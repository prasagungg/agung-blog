---
title: "Koperasi Merah Putih Verification Survey"
description: "A location-based verification tool designed to audit and validate the physical existence of village cooperatives."
heroImage: "/images/projects/survey-kdmp.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
  - "Geolocation API"
year: "2025"
---

## Overview

This project is a specialized WebView application built for field surveyors. Its primary mission is to validate the integrity of the "Koperasi Desa Merah Putih" database. Field officers use this tool to visit registered locations and confirm that the physical cooperative actually exists and matches the pre-recorded data.

## Key Challenge: Precision Geolocation

The core difficulty of this project lay in **Location Accuracy**. Since the application serves as a verification tool, "close enough" was not acceptable.

### 1. Handling Latitude & Longitude Precision

The system required comparing the user's real-time current position with the database's stored coordinates.

- **The Technical Hurdle:** Dealing with floating-point coordinate math and GPS "drift." I had to implement logic to calculate the distance between the user and the target (using the Haversine formula concept) to determine if the surveyor was truly on-site.
- **Accuracy:** Ensuring the captured Latitude and Longitude were precise enough to serve as proof of visit, while handling edge cases where mobile GPS signals might be weak or fluctuating.

### 2. Data Integrity

Visualizing and capturing this data required strict validation. The UI had to give clear feedback to the surveyor if they were too far from the target location, preventing the submission of invalid survey data.

## Tech Stack

- **Vue.js:** Handles the reactive logic for coordinate calculation and real-time validation feedback.
- **Tailwind CSS:** Provides a clean, mobile-first interface for surveyors working in the field.
- **HTML5 Geolocation API:** Utilized to access the device's GPS hardware directly from the web view.

## Conclusion

This project enhanced my understanding of **Geospatial Data**. It demonstrated that working with maps and coordinates goes beyond just displaying a pin; it requires handling strict logic to ensure data reliability and physical world verification.
