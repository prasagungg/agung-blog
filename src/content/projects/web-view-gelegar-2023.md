---
title: "Gelegar 2023 Livestream WebView"
description: "A specialized livestreaming and event module integrated into the PLN Mobile Super App."
heroImage: "/images/projects/gelegar.png"
stacks:
  - "Vue.js"
  - "Tailwind CSS"
  - "Video.js / HLS"
year: "2023"
---

## Overview

This project serves as a dedicated event module embedded within **PLN Mobile**, the official application for Indonesia's state electricity company. The primary goal was to facilitate the "Gelegar 2023" event, allowing millions of users to watch live broadcasts and interact with the event directly through the app without needing to open an external browser.

## Key Challenge: Media Streaming in WebView

The most significant technical hurdle was integrating a stable and high-quality **Live Streaming** experience within a WebView environment.

### 1. The WebView Constraint

Unlike standard mobile browsers (Chrome/Safari), WebViews embedded inside native apps often have restricted resources and stricter security policies regarding media playback.

- **The Problem:** Initial tests showed issues with video autoplay, fullscreen handling, and varying behaviors between Android and iOS WebViews.
- **The Solution:** I had to optimize the video player implementation to ensure cross-platform compatibility. This involved fine-tuning the media player events to handle buffering gracefully and ensuring the video controls remained responsive on touch screens.

### 2. Handling High Concurrency

Since this was a major national event, the page had to load the video stream instantly for a massive number of concurrent users. I focused on optimizing the frontend assets to ensure the "Shell" of the application loaded immediately, preventing a blank screen while the heavy video data was buffering.

## Tech Stack

- **Vue.js:** Used to create a reactive interface that could handle user interactions during the stream.
- **Tailwind CSS:** Essential for ensuring the design adhered to PLN Mobile's strict design system and branding guidelines.

## Conclusion

This project highlighted the nuances of **Hybrid App Development**. It required not just frontend coding skills, but an understanding of how web code behaves when wrapped inside a native mobile container, specifically regarding heavy media consumption.
