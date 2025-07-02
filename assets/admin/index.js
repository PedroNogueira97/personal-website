import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../styles/app.css';

if (window.location.pathname.startsWith("/admin")) {
const root = ReactDOM.createRoot(document.getElementById('admin-root'));
root.render(
    <BrowserRouter basename="/admin">
        <App />
    </BrowserRouter>
);
}