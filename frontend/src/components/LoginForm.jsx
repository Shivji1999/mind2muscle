// LoginForm.js
import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './LoginForm.css';

const LoginForm = ({ onToggleForm }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleLogin = () => {
    // Full validation
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform login logic here
      console.log('Logging in:', formData);
    }
  };

  return (
    <div className="card login-card">
      <h2>Login</h2>
      <div className="input-container">
        <input
          type="text"
          name="email"
          placeholder="Email/Number"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FaEnvelope className="input-icon" />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="input-container">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <FaLock className="input-icon" />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="login-options">
        <p className="signup-text">
          Not a member?{' '}
          <span className="signup-link" onClick={onToggleForm}>
            Sign up
          </span>
        </p>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
