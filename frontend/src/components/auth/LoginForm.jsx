
import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './LoginForm.css';
import api from '../../config/api-service';

const LoginForm = ({ onToggleForm }) => {
  const [formData, setFormData] = useState({ phoneNumber: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleLoginUser = async () => {
    try {
      const createdUser = await api.loginUser(formData);
      console.log('User created successfully:', createdUser);
      
    } catch (error) {
      console.log(error);
    }
  };


  const handleLogin = () => {
  
    const newErrors = {};
    if (!formData.phoneNumber.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

   
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      console.log('Logging in:', formData);
      handleLoginUser();
    }
  };

  return (
    <div className="card login-card">
      <h2>Login</h2>
      <div className="input-container">
        <input
          type="text"
          name="phoneNumber"
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
