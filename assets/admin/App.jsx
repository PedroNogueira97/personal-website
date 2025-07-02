import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
//import Dashboard from './components/Dashboard/Dashboard';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
}

export default App;


