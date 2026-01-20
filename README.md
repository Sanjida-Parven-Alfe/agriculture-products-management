# AgriMart - Agriculture Product Management System

AgriMart is a full-stack web application designed for managing agricultural products. It allows users to browse products, view detailed specifications, and enables authenticated administrators to add new items to the inventory.

This project is built using **Next.js 15 (App Router)** for the frontend and **Express.js** with **MongoDB** for the backend.

## 🚀 Live Demo
- **Frontend (Client):** [Add Your Vercel Client Link Here]
- **Backend (Server):** [Add Your Vercel Server Link Here]

---

## ✨ Features

### 1. Landing Page
- A fully responsive landing page with **7 distinct sections**:
  - Hero Slider
  - Features Overview
  - Business Statistics
  - Trending Products
  - Promotional Banner
  - FAQ Section
  - Customer Testimonials
- Includes a responsive Navbar and Footer.

### 2. Authentication System
- **Mock Login System** using **NextAuth.js**.
- Secure session management via cookies.
- **Protected Routes:** The Dashboard and Add Product pages are inaccessible without logging in.
- Conditional Navbar rendering (Login vs. Logout/User Profile).

### 3. Product Management (Public)
- **Items List Page:** Fetches product data dynamically from the Express.js API.
- **Product Details Page:** Uses Dynamic Routing to display detailed information for specific products.
- Responsive card layout with images, prices, and descriptions.

### 4. Admin Dashboard (Protected)
- **Add Item Page:** A secure form for administrators to upload new products.
- **Toast Notifications:** Real-time success/error feedback upon form submission.
- Data is stored persistently in MongoDB.

---

## 🛠️ Technologies Used

### Frontend (Client)
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js
- **Icons:** React Icons
- **Notifications:** React Hot Toast

### Backend (Server)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Native Driver)
- **Tools:** CORS, Dotenv

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally.

### Prerequisites
- Node.js installed on your machine.
- Git installed.

### 1. Clone the Repository
    ```bash
    git clone git@github.com:Sanjida-Parven-Alfe/agriculture-products-management.git
    cd agriculture-products-management


### Login Credentials (Mock)

Use these credentials :

- **Email:** `admin@agrimart.com`
- **Password:** `password123`
