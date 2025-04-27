// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your App component
import './index.css'; // If you have global styles (optional)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
