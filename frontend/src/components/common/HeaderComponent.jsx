
import React, { useState } from 'react';
import { FaUser, FaViruses, FaTv, FaBars, FaUserSecret } from 'react-icons/fa';
import './HeaderComponent.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header-container">
      <div className="logo">Mind2Muscle</div>
      <div className={`menu ${showMenu ? 'show-menu' : ''}`}>
        <a href="#services"><FaViruses /> Services</a>
        <a href="#partners"><FaUserSecret /> For Partners</a>
        <a href="#demo"><FaTv /> Request a Demo</a>
        <a href='#Login/Signup'><FaUser /> SignIn/SignUp</a>
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Header;
