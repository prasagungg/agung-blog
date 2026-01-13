---
title: "Damang AI - Virtual Health Assistant"
description: "An AI-powered chatbot designed to provide preliminary health consultations and medical information."
heroImage: "/images/projects/damang.png"
stacks:
  - "Laravel"
  - "Tailwind CSS"
  - "OpenAI API"
link: "https://github.com/prasagungg/damang.ai"
year: "2024"
---

## Overview

Damang AI is a web-based conversational agent designed to assist users with health-related inquiries. By leveraging the power of Large Language Models (LLMs), the application acts as a virtual consultant, providing instant answers to medical questions, symptom checking, and general health advice in a user-friendly chat interface.

## Key Focus: AI Integration & Context Management

The core challenge of this project was not just connecting to an API, but **making the AI behave like a health professional.**

### 1. OpenAI API Integration

I integrated the application with the OpenAI ecosystem to power the intelligence behind the chat.

- **Backend Architecture:** Utilizing Laravel to securely handle API requests server-side. This ensures that sensitive API keys are never exposed to the client browser.
- **Streamlined Communication:** Managed the request/response lifecycle to ensure the chat felt responsive, handling latency gracefully while the AI generated answers.

### 2. Prompt Engineering (The "Health" Context)

A generic AI talks about everything. Damang AI had to focus strictly on health.

- **System Instructions:** I designed specific "System Prompts" to define the AI's persona. I instructed the model to act as a medical consultant, ensuring the tone was empathetic, professional, and strictly limited to health topics.
- **Safety Guardrails:** Implemented logic to ensure the AI provides necessary disclaimers (e.g., advising users to visit a real doctor for serious conditions), which is crucial for HealthTech applications.

## Tech Stack

- **Laravel:** Acts as the secure bridge between the user interface and the AI provider.
- **Tailwind CSS:** Used to craft a clean, approachable chat interface similar to modern messaging apps (like WhatsApp or Telegram) to make users feel comfortable.

## Conclusion

This project demonstrates my readiness for the **AI Era**. It proves that I can look beyond traditional CRUD applications and integrate cutting-edge AI solutions to solve real-world problems, specifically in the sensitive domain of healthcare.
