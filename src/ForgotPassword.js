// src/ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate an email reset process
    if (email) {
      setMessage('A password reset link has been sent to your email.');
      setTimeout(() => navigate('/'), 3000);
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
