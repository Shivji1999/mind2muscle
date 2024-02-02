// RegisterForm.js
import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';
import './RegisterForm.css';

const RegisterForm = ({ onToggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleRegister = () => {
    // Full validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform registration logic here
      console.log('Registering:', formData);
    }
  };

  return (
    <div className="card register-card">
      <h2>Register</h2>
      <div className="input-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FaUser className="input-icon" />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="input-container">
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <FaPhone className="input-icon" />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
      <div className="input-container">
        <input
          type="email"
          name="email"
          placeholder="Email"
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
      <div className="input-container">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <FaLock className="input-icon" />
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
      </div>
      <div className="register-options">
        <p className="login-text">
          Already a member?{' '}
          <span className="login-link" onClick={onToggleForm}>
            Login
          </span>
        </p>
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
