// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Change from 'react-dom' to 'react-dom/client'
import App from './App'; // Your main App component

// If you're using React 18:
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(<App />); // Render your App component
