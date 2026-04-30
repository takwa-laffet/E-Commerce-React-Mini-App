# E-Commerce React Mini App

A simple e-commerce application built with React, TypeScript, and Bootstrap. This project demonstrates core e-commerce functionality including product browsing, product details, shopping cart, and theme switching.

## Features

- Browse products on the home page
- View detailed product information
- Add/remove products from shopping cart
- Persistent cart state using React Context
- Light/Dark theme toggle
- Responsive design using Bootstrap
- Product data loaded from local JSON file

## Technologies Used

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Bootstrap 5.3
- **State Management**: React Context API (Cart and Theme)
- **Routing**: React Router DOM v7
- **Build Tool**: Create React App (react-scripts)
- **Type Checking**: TypeScript 4.9

## Project Structure

```
src/
├── components/       # Reusable components (Navbar, ProductCard, etc.)
├── pages/            # Page components (Home, ProductDetails, Cart)
├── context/          # React Context providers (Cart, Theme)
├── data/             # Static data (products.json)
├── App.tsx           # Main application component with routing
├── index.tsx         # Entry point
└── styles/           # CSS files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload when you make changes.\
You may also see lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for best performance.\
The build is minified and filenames include hashes.\
Your app is ready to be deployed!

#### `npm run eject`

**Note: This is a one-way operation. Once you eject, you can't go back!**\
If you aren't satisfied with the build tool and configuration choices, you can eject at any time.\
This command removes the single build dependency from your project.\
Instead, it copies all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project so you have full control over them.\
All commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.\
At this point you're on your own.\
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Acknowledgements

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Product data is mock data for demonstration purposes