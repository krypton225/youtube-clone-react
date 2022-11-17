import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import "./sass/_index.scss";

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);