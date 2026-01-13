---
title: "What do you need to know about Synchronous & Asynchronous in JavaScript"
pubDate: "2024-02-26"
description: "Synchronous and Asynchronous are natural properties of JavaScript that you must understand if you want to focus on the JavaScript programming language"
tags:
  - JavaScript
  - Programming
  - Asynchronous
  - Sync
  - Synchronous
heroImage: "/images/blog/about-synchronous.webp"
---

Synchronous and Asynchronous are natural properties of JavaScript that you must understand if you want to focus on the JavaScript programming language.

This is one of JavaScript's advantages compared to other languages such as PHP, which naturally tend to be Synchronous.

## Synchronous

In a synchronous execution, the code will be executed **line by line**.
For example, if the code has 2 lines, line 2 will not be executed until line 1 is finished.

### Code Example

```javascript
console.log("1");
console.log("2");
console.log("3");

// Output:
// 1
// 2
// 3
```

## Asynchronous

The code will still be executed line by line, but it doesn’t have to wait for the previous line to finish.
For example, if the code has 2 lines, line 2 may be executed before line 1 finishes execution.

### Code Example

```javascript
console.log("Line 1");

setTimeout(function () {
  console.log("Line 2");
}, 2000);

console.log("Line 3");

// Output:
// Line 1
// Line 3
// Line 2 (appears after 2 seconds)
```

## Conclusion

In programming, there are two important concepts: **Synchronous** and **Asynchronous**.

- **Synchronous** means sequential execution, where each action waits for the previous one to finish before proceeding to the next.
- **Asynchronous** allows for non-sequential execution, where actions can be performed simultaneously or without waiting for the previous one to finish.

Understanding both of these concepts is crucial to mastering programming languages like JavaScript. Additionally, it’s important to grasp related concepts such as **Callbacks**, **Promises**, and **Async/Await**, which are essential tools for managing asynchronicity in code.
