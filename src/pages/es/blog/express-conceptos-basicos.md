---
layout: ../../../layouts/MarkdownBlogLayout.astro
title: 'Express: conceptos básicos y cómo iniciar tu primer proyecto con Node.js'
description: 'Aprende qué es Express y cómo crear tu primer servidor con Node.js. Conceptos básicos, rutas, middlewares y buenas prácticas para iniciar en el backend paso a paso.'
imageCover: 'Blog/Node-Express'
author: 'Jenner Acosta'
date: '2025-09-15'
category: 'express'
---

Cuando empiezas en el mundo del backend con Node.js, uno de los primeros nombres que escucharás es **Express**.  
Es un framework minimalista que nos permite crear servidores de forma sencilla, aprender los fundamentos de HTTP y sentar bases sólidas para proyectos futuros.

## 🧩 Conceptos básicos de Express

Antes de programar, veamos las piezas clave que forman una app en Express.

### 🔌 Servidor HTTP

Un servidor HTTP es un programa que escucha peticiones en un puerto y devuelve respuestas.  
Con Node puedes hacerlo con el módulo `http`, pero Express lo simplifica al máximo.

### 📩 Request (solicitud) y Response (respuesta)

- **Request (`req`)**: lo que el cliente envía → URL, método (GET, POST...), headers, body.
- **Response (`res`)**: lo que el servidor devuelve → texto, JSON, archivos, códigos de estado.

Ejemplo:

```js
app.get('/saludo', (req, res) => {
    res.json({ message: 'Hola, este es un response en JSON' });
});
```

### 🔀 Rutas (routes)

Las rutas definen qué acción realiza el servidor cuando recibe una petición.
Combinan método HTTP + endpoint.

```js
app.get('/users', (req, res) => {
    res.json({ users: [] });
});

app.post('/users', (req, res) => {
    res.status(201).json({ message: 'Usuario creado' });
});
```

### ⚙️ Middlewares

Funciones que se ejecutan entre la petición y la respuesta.
Sirven para parsear datos, validar, autenticar o manejar errores.

```js
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);
```

### 🌐 Métodos HTTP

- GET → obtener datos
- POST → crear
- PUT/PATCH → actualizar
- DELETE → eliminar

```js
app.delete('/posts/:id', (req, res) => {
    res.json({ message: `Post con id ${req.params.id} eliminado` });
});
```

### 📝 JSON

Formato estándar para enviar/recibir datos en apps modernas.

```js
app.get('/post', (req, res) => {
    res.json({ id: 1, title: 'Hola Mundo' });
});
```

### 🔒 Variables de entorno

Usadas para configurar el proyecto sin exponer datos sensibles.

Archivo .env:

```text
PORT = 4000;
DB_PASSWORD = supersecreto;
```

Código:

```js
require('dotenv').config();
const port = process.env.PORT || 3000;
```

### 🚨 Manejo de errores

Un buen backend siempre responde ante fallos.

```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal' });
});
```

## 🛠️ Crear tu primer proyecto con Express

1. Instalar Node.js y verificar con `node -v` y `npm -v`.

2. Inicializar proyecto:

```bash
mkdir mi-primer-express
cd mi-primer-express
npm init -y
```

3. Instalar Express:

```bash
npm install express
```

4. Crear archivo principal index.js:

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hola desde Express!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
```

5. Ejecutar servidor:

```bash
node index.js
```

Visita http://localhost:3000 y deberías ver Hola desde Express!

## 📚 Buenas prácticas iniciales

- Organizar carpetas (routes/, controllers/, services/).
- Usar middlewares para validaciones y autenticación.
- Manejar errores con try/catch y middleware de error.
- Empezar con pruebas unitarias (jest, mocha).
- Adoptar TypeScript cuando tengas lo básico dominado.

## ✅ Conclusión

Express es la forma ideal de iniciarte en el backend con Node.js:
es ligero, sencillo y te enseña los fundamentos de cómo funciona un servidor web.

Una vez domines Express, tendrás el camino abierto para frameworks más estructurados como NestJS o AdonisJS.
