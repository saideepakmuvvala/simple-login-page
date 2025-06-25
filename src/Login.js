import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'dev' && password === 'dev') {
      onLogin(username, password);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <div className="input-wrapper">
            <FaUserAlt className="input-icon" />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <FaLock className="input-icon" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      <div className="forgot-login">
        <a href="/forgot-password">Forgot login details?</a>
      </div>
    </div>
  );
};

export default Login;
