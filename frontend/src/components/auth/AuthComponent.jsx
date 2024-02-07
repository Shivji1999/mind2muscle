import React, { useState } from 'react';
import './AuthComponent.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthComponent = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleToggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };


    return (
        <div className="auth-container">
            <div className="left-part">

                <div className="overlay"></div>
                <h2 className="left-text">Kick In !</h2>
                <span className="top-left-text">Mind2Muscle</span>
                <img src="/assets/gym.jpg" alt="Left Part" />
            </div>
            <div className="right-part"></div>
            <div className="center-container">
                {showLoginForm ? (
                    <LoginForm onToggleForm={handleToggleForm} />
                ) : (
                    <RegisterForm onToggleForm={handleToggleForm} />
                )}
            </div>
        </div>
    );
};

export default AuthComponent;
