// /frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root with React 18 API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pass the reportWebVitals function to capture performance metrics
reportWebVitals();
