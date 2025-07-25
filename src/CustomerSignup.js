import React, { useState } from 'react';
import './CustomerLogin.css'; // Reuse login styles

const CustomerSignup = ({ onBack, onSignupSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    alert(`Signing up: ${fullName}`);
    onSignupSuccess(); // ✅ Redirect to dashboard after signup
  };

  return (
    <div className="login-container">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="login-card">
        <h2 className="login-title">Sign Up as Customer</h2>
        <p className="login-subtitle">Create your customer account</p>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleSignup}>
          Create Account
        </button>

        <p className="signup-link">
          Already have an account?{' '}
          <span
            style={{ color: '#8a4dff', cursor: 'pointer' }}
            onClick={onBack}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default CustomerSignup;
