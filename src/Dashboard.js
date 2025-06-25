// src/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate(); // Hook to navigate

  const handleLogout = () => {
    onLogout(); // Call the onLogout function passed as a prop
    navigate('/'); // Redirect to the Login page
  };

  const handleGoToMain = () => {
    navigate('/main'); // Redirect to /main
  };

  return (
    <div className="dashboard-container">
      {/* Logout button */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      
      {/* Dashboard content */}
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard!</h2>
        <p>You have successfully logged in.</p>
        <button onClick={handleGoToMain}>
          Main
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
