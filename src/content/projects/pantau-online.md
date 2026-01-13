---
title: "Pantau Online - Remote Learning Platform"
description: "A centralized platform for monitoring student attendance and daily learning journals during remote schooling."
heroImage: "/images/projects/coming-soon.png"
stacks:
  - "Laravel"
  - "MySQL"
  - "Image Optimization"
year: "2022"
---

## Overview

"Pantau Online" was developed to bridge the gap between teachers and students during the remote learning period. The application allows students to log their daily attendance and submit "Learning Journals" accompanied by photo evidence, giving teachers a real-time view of student engagement from home.

## Key Challenge: Media Management vs. Limited Infrastructure

The biggest hurdle in this project was **scalability on a budget**.
The client (school) had **limited server infrastructure (storage and bandwidth)**, yet the requirements demanded that hundreds of students upload high-resolution photos _every single day_ as proof of study.

### Optimizing for Storage Constraints

Without intervention, the server storage would have filled up in a matter of weeks. I had to implement strict media handling strategies:

- **Server-Side Compression:** I utilized Laravel's image processing libraries to automatically resize and compress uploaded photos on the fly.
- **Quality vs. Size:** I calibrated the compression algorithms to reduce file sizes by up to 80% while maintaining enough visual clarity for teachers to read the text in the photos.
- **Storage cleanup:** Implemented logic to archive or manage old data to keep the active storage lightweight.

## Tech Stack

- **Laravel:** Served as the robust monolithic backend to handle authentication, file uploads, and CRUD operations.
- **Intervention Image:** Used for the backend image processing and optimization pipeline.

## Conclusion

This project taught me the importance of **Efficiency**. It demonstrated that software engineering isn't just about writing code that works; it's about writing code that respects the hardware limitations and ensures sustainability over the long term.
