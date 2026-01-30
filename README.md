# Feedback Wall (Flowly)

A high-performance Full-stack Feedback Ecosystem. Built with Next.js 16, MongoDB, and Docker.
This project demonstrates a modern approach to server-side feedback management, featuring anonymous interactions, real-time-like UI updates, and a robust containerized infrastructure.

---

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies & Stack Explanation](#technologies--stack-explanation)
- [Architecture & Flow](#architecture--flow)
- [Installation & Run](#installation--run)
- [Project Structure](#project-structure)
- [Author](#author)

---

## Description

Feedback Wall allows users to:

- Leave feedback with type: `Idea`, `Bug`, or `Praise`
- View community feedback in real-time
- Experience a fully responsive and modern UI
- Handle feedback storage and retrieval via Next.js API routes

Frontend is built with **Next.js (React + App Router)** and styled with **Tailwind CSS**.
Backend is built into **Next.js API** routes with **MongoDB** via **Mongoose**.

---

## Live Demo

Try it online via our [Live Demo](https://feedback-wall-next.onrender.com)!

---

## Features

- Add and manage feedback
- Feedback type selection (Idea / Bug / Praise)
- Dynamic feedback list with responsive cards
- Loading, error, and empty states
- Skeleton loaders for better UX
- Client-side state management with custom hooks (useFeedback)
- Fully responsive UI
- REST API integrated via **Next.js API routes**

---

## Technologies & Stack Explanation

- **Next.js (App Router)** — frontend framework & backend API
- **React** — UI library
- **Tailwind CSS** — utility-first styling
- **MongoDB** — database for storing feedback
- **Mongoose** — ODM for MongoDB
- **REST API** — implemented with Next.js API routes
- **Docker & Docker Compose** — for containerization and environment orchestration

---

## Architecture & Flow

1. Frontend sends **POST** requests to /api/feedback to create feedback
2. Frontend sends **GET** requests to /api/feedback to fetch all feedbacks
3. API routes handle database connection and CRUD via **Mongoose**
4. Feedback list updates dynamically in the frontend
5. UI components (cards, forms, loaders) ensure consistent experience
6. In development, Docker Volumes ensure instant Hot Reload for the entire app

---

## Installation & Run

### 1. The Quickest Way (Docker Compose)

_Requires [Docker](https://www.docker.com/get-started/)_

1. Create a `.env` file in the root directory:
   ```bash
   MONGO_URI=your_mongo_connection_string
   ```
2. Run the container:
   ```bash
   docker-compose up --build
   ```
3. Open http://localhost:3000 in your browser

### 2. Manual Setup

```bash
npm install
```

Create a .env file in the root directory:
```bash
MONGO_URI=your_mongo_connection_string
```
```bash
npm run dev
```

Frontend + API will be available at: http://localhost:3000

---

## Project Structure

```
feedback-wall/
├─ docker-compose.yml
├─ Dockerfile
├─ app/
│  ├─ feedback/
│  │  ├─ page.js          # Feedback list page
│  │  ├─ new/page.js      # Feedback form page
│  │  └─ api/
│  │     └─ route.js      # REST API endpoints
│  ├─ layout.js
│  └─ page.js             # Home page
├─ components/
│  ├─ FeedbackCard.js
│  ├─ FeedbackForm.js
│  ├─ FeedbackHeader.js
│  ├─ FeedbackTypeDropdown.js
│  ├─ FeedbacksList.js
│  ├─ HomeButtons.js
│  ├─ Navbar.js
│  ├─ Footer.js
│  ├─ LoadingOverlay.js
│  ├─ ErrorOverlay.js
│  └─ EmptyState.js
├─ lib/
│  ├─ db.js
│  └─ hooks/
│     └─ useFeedback.js
├─ models/
│  └─ Feedback.js
├─ public/
├─ styles/
├─ package.json
└─ next.config.js
```

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)
