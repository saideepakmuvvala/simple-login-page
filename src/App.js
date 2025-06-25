// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import Main from './Main';
import Chess from "./Chess";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate authentication
    if (username === 'dev' && password === 'dev') {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route
          exact
          path="/"
          element={<Login onLogin={handleLogin} />}
        />

        {/* Protected Dashboard route */}
        <Route
          exact
          path="/dashboard"
          element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route path="/main" element={isAuthenticated ? (<Main />) : (<Navigate to="/" />)}/>
        <Route path="/chess" element={<Chess />} />
        {/* Forgot Password route */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />} // Route to ForgotPassword page
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
