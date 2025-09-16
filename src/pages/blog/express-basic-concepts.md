---
layout: ../../layouts/MarkdownBlogLayout.astro
title: 'Express: Basics and How to Start Your First Project'
description: 'Learn what Express is and how to build your first server with Node.js. Basic concepts, routes, middlewares, and best practices to start with backend development step by step.'
imageCover: 'Blog/Node-Express'
author: 'Jenner Acosta'
date: '2025-09-15'
category: 'express'
---

# Express: Basics and Getting Started

Express is a minimalist framework for Node.js that makes backend development approachable. It helps you understand HTTP fundamentals and build robust servers quickly.

## Express Fundamentals

### HTTP Server

Express wraps Node’s native `http` module, making it easier to create servers that listen for requests and send responses.

### Request & Response Objects

- **Request (`req`)**: Contains client data (URL, method, headers, body).
- **Response (`res`)**: Used to send data back (text, JSON, files, status codes).

```js
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, this is a JSON response' });
});
```

## Routing

Routes define how your server responds to different endpoints and HTTP methods.

```js
app.get('/users', (req, res) => {
    res.json({ users: [] });
});

app.post('/users', (req, res) => {
    res.status(201).json({ message: 'User created' });
});
```

## Middleware

Middleware functions run between the request and response. Use them for parsing, validation, authentication, and error handling.

```js
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);
```

## HTTP Methods

- **GET**: Retrieve data
- **POST**: Create data
- **PUT/PATCH**: Update data
- **DELETE**: Remove data

```js
app.delete('/posts/:id', (req, res) => {
    res.json({ message: `Post with id ${req.params.id} deleted` });
});
```

## JSON Responses

JSON is the standard format for data exchange.

```js
app.get('/post', (req, res) => {
    res.json({ id: 1, title: 'Hello World' });
});
```

## Environment Variables

Configure your project securely using environment variables.

`.env` file:

```
PORT=4000
DB_PASSWORD=supersecret
```

Usage in code:

```js
require('dotenv').config();
const port = process.env.PORT || 3000;
```

## Error Handling

Handle errors gracefully with middleware.

```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});
```

## Create Your First Express Project

1. **Install Node.js** and verify with `node -v` and `npm -v`.

2. **Initialize your project:**

```bash
mkdir my-first-express
cd my-first-express
npm init -y
```

3. **Install Express:**

```bash
npm install express
```

4. **Create `index.js`:**

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

5. **Run the server:**

```bash
node index.js
```

6. Visit [http://localhost:3000](http://localhost:3000) to see your Express app in action.

## Initial Best Practices

- Organize folders (`routes/`, `controllers/`, `services/`)
- Use middlewares for validation and authentication
- Handle errors with try/catch and error middleware
- Start with unit testing (`jest`, `mocha`)
- Add TypeScript when comfortable

## Conclusion

Express is a great starting point for backend development with Node.js. It’s lightweight, simple, and teaches you the fundamentals of web servers. Once you master Express, you’ll be ready for more advanced frameworks like NestJS or AdonisJS.
