
import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter, FaRegCopyright } from 'react-icons/fa';
import './FooterComponent.css';

const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="footer-column">
          <div className="logo">
            <img src="path_to_your_logo_image" alt="Mind2Muscle" />
            <div>ABC Pvt. Ltd.</div>
            <div><FaRegCopyright /> All rights reserved.</div>
          </div>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <p>Email: shivji1999@gmail.com</p>
          <p>Phone: +91-8700368222</p>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul>
          <li><a href="https://facebook.com"><FaFacebookF  /> Facebook</a></li>
          <li><a href="https://facebook.com"><FaInstagram /> Instagram</a></li>
          <li><a href="https://twitter.com"><FaTwitter /> Twitter</a></li>
          <li><a href="https://linkedin.com"><FaLinkedinIn /> Linkedin</a></li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
