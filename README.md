# Feedback Wall (Flowly)

A full-stack feedback application built with Next.js (App Router) and MongoDB.
The app allows users to leave anonymous feedback, view community feedback, and explore interactive UI components with a modern design.
The main focus of the project is server-side feedback storage and retrieval using Next.js API routes, and dynamic, responsive frontend with Tailwind CSS.

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

- Leave feedback with type: Idea, Bug, or Praise
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

---

## Architecture & Flow

1. Frontend sends **POST** requests to /api/feedback to create feedback
2. Frontend sends **GET** requests to /api/feedback to fetch all feedbacks
3. API routes handle database connection and CRUD via **Mongoose**
4. Feedback list updates dynamically in the frontend
5. UI components (cards, forms, loaders) ensure consistent experience

---

## Installation & Run

### Setup

```bash
npm install
npm i mongoose
```

Create a `.env` file inside `backend/` with the following:

```env
PORT=1333
MONGO_URI=your_mongo_connection_string
```

```bash
npm run dev
```

Frontend + API will be available at:
http://localhost:3000

---

## Project Structure

```
feedback-wall/
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
