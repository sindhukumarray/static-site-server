# Static Site Server with Node.js

A beginner-friendly static website server built using Node.js core modules without Express.js.

## Features

- Serve HTML Pages
- Serve CSS Files
- Serve JavaScript Files
- Serve Images
- Custom 404 Error Page
- Request Logging
- Content-Type Detection

## Folder Structure

```
static-site-server/
│
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── 404.html
│
├── server.js
├── package.json
└── .gitignore
```

## Technologies

- Node.js
- HTTP Module
- File System (fs)
- Path Module

## Installation

```bash
npm install
```

## Run

```bash
node server.js
```

Visit

```
http://localhost:3000
```

## Learning

This project demonstrates how a web server serves static assets like HTML, CSS, JavaScript, and Images using only Node.js core modules.