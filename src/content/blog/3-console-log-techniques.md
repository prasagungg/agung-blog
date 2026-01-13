---
title: "3 Console log techniques every JavaScript developer should know"
pubDate: "2025-11-25"
description: "In the browser console, this appears as a generic string of numbers and text. If you have multiple logs, you are left guessing: “Is 100 the width or the height?”"
tags:
  - JavaScript
  - Programming
  - JavaScript Tips
  - Console
  - Debugging
  - Logging
heroImage: "/images/blog/3-console.log.webp"
---

## 1. Logging variables

First, it’s very common that you need to check the value of a variable.

```javascript
const width = 100;
const height = 50;
const color = "blue";

console.log(width, height, color);

// Output:
// 100 50 blue
```

In the browser console, this appears as a generic string of numbers and text. If you have multiple logs, you are left guessing: “Is 100 the width or the height?”.

So you can add an identifier like this:

```javascript
console.log("Width:", width, "Height:", height, "Color:", color);

// Output:
// Width: 100 Height: 50 Color: blue
```

But it’s pretty annoying that you need to write an extra string everytime. Instead, wrap it with curly braces, and you can achieve the same thing with less typing using Object Shorthand property.

```javascript
console.log({ width, height, color });

//Output
// {
//   "width": 100,
//   "height": 50,
//   "color": "blue"
// }
```

## 2. Printing Objects

When working with arrays of objects (like API responses), standard logging results in a messy, nested tree that requires constant clicking to expand.

Developers often use **JSON.stringify()** to pretty print objects:

```javascript
console.log(JSON.stringify(users, null, 2));

//Output
// [
//   {
//     "name": "agung",
//     "age": 23
//   }
// ]
```

But you can take this one step further by using **console.table()** to render the data as a clean, readable spreadsheet layout directly in your console.

```javascript
const users = [
  { id: 1, name: "Alice", role: "Admin", status: "Active" },
  { id: 2, name: "Bob", role: "User", status: "Inactive" },
  { id: 3, name: "Charlie", role: "User", status: "Active" },
];

console.table(users);
```

Why it’s superior?

- In DevTools, you can click the column headers to sort the table instantly.
- You can pass a second argument to show only specific columns, keeping the view focused.

```javascript
// Show only names and roles
console.table(users, ["name", "role"]);
```

## 3. Grouping Logs

In this program there are multiple **console.log()** statements:

```javascript
const userName = "agung bedegung";

console.log(userName);

const userEmail = "agungbedegung@mail.com";

console.log(userEmail);
```

Instead of doing **console.log()** here and there, it’s much more organized if you put them all in one place. You can use **console.group()** to group them together.

```javascript
const userName = "agung bedegung";
const userEmail = "agungbedegung@mail.com";

console.group("User Data");

console.log(userName);
console.log(userEmail);

console.groupEnd();
```
