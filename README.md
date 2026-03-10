🍴 Food Palace - React Restaurant App
Table of Contents

Project Overview

Features

APIs Used

Folder Structure

Installation & Setup

Usage

Screenshots

Future Enhancements

License

Project Overview

Food Palace is a modern, interactive restaurant web application built using React.
It fetches real-world food data from APIs and allows users to browse, filter, search, and add items to a shopping cart.
Users can also view the restaurant location using Google Maps and simulate order placement via a POST API.

This app is designed for learning React, API integration, state management, and responsive UI design.

Features
1. Navigation & Layout

Sticky top navbar with restaurant logo and cart icon.

Category buttons: All, Veg, Non-Veg, Starters, Desserts, Mocktails.

Search bar to filter food items by name.

2. Food Menu

Grid-based layout for all food items.

Each card shows:

Food image

Name

Price

Add to Cart button

Real-time filtering by category and search term.

3. Cart System

Add items to cart using Add to Cart button.

Delete items from cart individually.

Displays total price.

Place Order button sends a POST request to simulate order placement.

Shows confirmation message after order submission.

4. API Integrations

GET API: Spoonacular - fetch Indian recipes.

GET API: TheMealDB - fetch additional meals.

GET API: Google Maps - display restaurant location.

POST API: JSONPlaceholder - simulate order placement.

5. Responsive & Colorful UI

Elegant and colorful gradient backgrounds.

Hover effects on buttons and food cards.

Mobile-friendly grid layout.

APIs Used
API	Type	Purpose
Spoonacular	GET	Fetch Indian recipes
TheMealDB	GET	Fetch additional meals
Google Maps Platform	GET	Show restaurant location
JSONPlaceholder	POST	Place order

⚠️ You must replace YOUR_SPOONACULAR_KEY and YOUR_GOOGLE_MAP_KEY in FoodList.jsx and Map.jsx with your own API keys.

Folder Structure
react-restaurant-app/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Categories.jsx
│   │   ├── FoodList.jsx
│   │   ├── Cart.jsx
│   │   └── Map.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md
Installation & Setup

Clone or download the repository:

git clone https://github.com/your-username/react-restaurant-app.git
cd react-restaurant-app

Install dependencies:

npm install

Add your API keys:

Replace YOUR_SPOONACULAR_KEY in FoodList.jsx

Replace YOUR_GOOGLE_MAP_KEY in Map.jsx

Run the app:

npm run dev

Open the app in browser:

http://localhost:5173
Usage

Browse all foods or filter by category (Veg, Non-Veg, Starters, Desserts, Mocktails).

Use the search bar to find specific dishes.

Click Add to Cart to add an item.

Open cart by scrolling to cart section; delete items if needed.

Click Place Order to submit a simulated order (POST request).

Scroll down to view the restaurant location on Google Maps.

Screenshots

Navbar & Categories

Food Grid

Cart & Total Price

Google Maps Location

(You can add screenshots after running the app for demo purposes)

Future Enhancements

Add Recommended for You section

Highlight Today's Specials

Implement Price filter & sorting

Add Veg/Non-Veg icons

Implement Checkout Page with payment gateway

Make fully mobile responsive

License

This project is free to use for learning and development purposes.

This README clearly documents all features, API usage, installation steps, and project structure.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
