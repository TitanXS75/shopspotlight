import React, { useState } from 'react';
import './CustomerLogin.css'; // Reusing styles

const ShopOwnerLogin = ({ onBack, onSignup }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logging in owner: ${emailOrPhone}`);
  };

  return (
    <div className="login-container">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="login-card">
        <h2 className="login-title">Sign In as Shop Owner</h2>
        <p className="login-subtitle">Access your shop dashboard</p>

        <div className="form-group">
          <label>Email or Phone</label>
          <input
            type="text"
            placeholder="Enter email or phone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>Log In</button>

        <p className="signup-link">
          Don’t have an account?{' '}
          <span
            style={{ color: '#8a4dff', cursor: 'pointer' }}
            onClick={onSignup}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default ShopOwnerLogin;
