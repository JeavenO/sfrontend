SmartAgro Frontend

Modern React app for managing SmartAgro Categories, Products, and Orders.

# Features

Professional navigation bar

Pages for:

Dashboard

Categories (Add, View, Update, Delete)

Products (Add, View, Update, Delete)

Orders (Add, View, Update, Delete)

Reusable forms

CSS separated per page

Fully connected to backend via Axios

## Installation
1️⃣ Install dependencies
npm install

2️⃣ Run the frontend
npm run dev

3️⃣ Frontend will run at:

 http://localhost:5173

 ## Project Structure
frontend/
│── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── CategoriesPage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── OrdersPage.jsx
│   ├── styles/
│   │   ├── Categories.css
│   │   ├── Products.css
│   │   ├── Orders.css
│   │   └── Form.css
│   └── App.jsx
│── package.json

 API Base URL

Configured inside Axios calls:

http://localhost:5000

 Backend Connection

Each page uses Axios like:

axios.get("http://localhost:5000/categories");
axios.post("http://localhost:5000/products");
axios.delete("http://localhost:5000/orders/123");

## UI Overview

Navigation bar at top

CRUD tables for Categories, Products, Orders

Forms for adding new items

Edit/Delete buttons included inside tables

 Technologies Used

React + Vite

Axios

React Router

CSS

## Start the whole system
Start backend:
cd backend
npm run dev

Start frontend:
cd frontend
npm run dev