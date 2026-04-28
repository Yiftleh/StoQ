# StoQ - Fullstack Stock Management System

StoQ is a fullstack web application designed to manage products and stock in a simple and efficient way.
It includes a RESTful backend API and a modern frontend interface.

---

## Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* dotenv (environment variables)
* express-rate-limit (basic security)
* Modular architecture (controllers, services, routes, middlewares)

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS

---

## Features

* View product list
* Create new products
* Delete products
* Real-time UI updates (no page reload)
* Backend validation (e.g. numeric price)
* Secure environment configuration using `.env`

---

## How to Run the Project

### 1. Clone the repository

git clone https://github.com/JimeAlanis/StoQ.git
cd StoQ

---

### 2. Backend setup

cd backend
npm install

Create a `.env` file:

DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=your_database
PORT=3000

Run backend:

node src/app.js

---

### 3. Frontend setup

cd frontend
npm install
npm run dev

Open in browser:

http://localhost:3001

---

## Security Improvements

* Database credentials moved to `.env`
* Basic rate limiting implemented
* Input validation on backend

---

## Learning Highlights

During the development of this project, the following concepts were applied and improved:

* Separation of concerns (controllers, services, routes)
* Fullstack communication (frontend ↔ backend)
* REST API design
* State management in React
* Environment variable handling
* Error handling and debugging
* Basic UI/UX improvements using Tailwind CSS

---

## Future Improvements

* Add update/edit functionality
* Implement authentication (login system)
* Dockerize the application
* Deploy to cloud (Vercel + Railway/Supabase)
* Add frontend validations and better UX

---

## Author

Jimena Alanís
Junior Software Developer


