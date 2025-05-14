---
layout: ../../layouts/MarkdownBlogLayout.astro
title: 'What is frontend vs backend?'
description: 'We explain the difference between frontend and backend development using real code examples and clear terms'
imageCover: 'Blog/meto2mzawcekar8pow6h'
author: 'Jenner Acosta'
date: '2025-05-13'
category: 'web-develop'
---

¡Hey! What’s up, my dev friends! 👋

I’m Jenner Acosta Diaz, and today we’re diving into one of the most basic but powerful concepts in web development —
Frontend vs Backend.

Whether you’re just starting or recién comienzas in this world of coding, this video is for YOU.
And yes, we’ll keep it bilingual, clear, and most importantly — fun.

## 🧠 What is the Frontend?

Alright, imagine you're visiting your favorite website—maybe it’s YouTube, maybe it’s your favorite online store.

Everything you SEE and interact with—the buttons, the text, the colors, the layout—that's the **frontend**.

👉 The **frontend** is all about what users experience.
It’s built using three main languages:

* HTML – the structure (like the bones of a skeleton)
* CSS – the style (like the clothes and accessories)
* JavaScript – the behavior (like when you click a button and something happens)

📱 So whether you're on your phone, tablet, or laptop—the frontend is what you see on screen!

Simple example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
    <style>
        h1 {
            color: purple;
        }
    </style>
</head>
<body>
<h1>Hello, world!</h1>
<button onclick="alert('You clicked me!')">Click Me</button>
</body>
</html>
```

Boom 💥 That’s a frontend example in action. All on the browser, no server involved!

## 🧩 What is the Backend?

Now… behind every awesome frontend, there’s a powerful brain working behind the scenes.

That’s the **backend**.

* The backend is what you don’t see—it’s responsible for things like:
* Storing and managing data (like your login info or saved playlists)
* Handling requests from the frontend
* Making sure everything is secure and working smoothly

It usually runs on a **server** and talks to a **database**.

Popular backend languages include:

* Node.js (JavaScript on the server!)
* Python
* PHP
* Java

Simple example (Node.js + Express):

```javascript
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```

You wouldn’t see that directly in the browser, but if the frontend calls `/hello`, this backend sends a message back.
They’re a TEAM. 🤝

## 🔄 How Frontend & Backend Work Together

Let’s connect the dots!

Say you're logging into a website:

1. The frontend shows you the login form.
2. You type in your username and password and hit “Login”.
3. The backend receives that info, checks if it’s correct in the database.
4. Then it sends a response back—“Login successful!” or “Oops, wrong password!”

📡 The frontend and backend are **constantly talking** to each other using something called APIs (Application Programming
Interfaces).

Together, they create the **full experience** of a website or web app.

Frontend = Client

Backend = Server

And YOU = Future Developer building the magic ✨

## 💪 Mini-Challenge

Alright, now it’s your turn!

🧠 Mini-Challenge:
Create a simple HTML page with:

* A title
* A welcome message
* A button that says “Get Data”
* (Optional: Just pretend it's getting data from the backend!)

This is your first step into the frontend world! 💻🔥
And if you want to go even further, try linking a fake API using https://jsonplaceholder.typicode.com!

## 🔁 Recap

Let’s recap!

* Frontend = What users see and interact with
* Backend = The logic, database, and server behind the scenes
* Together? They make the web WORK!

And guess what? You’re already on your way to becoming a full-blown frontend developer. Just keep going, one step at a
time.

---
Keep learning, keep building, and remember:

You’ve got this.

Catch you in the next one. Peace! ✌️