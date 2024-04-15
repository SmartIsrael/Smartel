import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer>
      <div className="cent-cont">
        <div>
          <h1>Quick Links</h1>
          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">My Services</a></li>
            <li><a href="#">Meet the team</a></li>
            <li><a href="#">Latest Blogs</a></li>
          </ul>
        </div>
        <div className="socials">
          <h1>Social Links</h1>
          <h2>Join us through these links</h2>
          <div className="social-links">
          <a href='#'><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /></a>
          <a href='#'><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
          <a href='#'><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></a>
          <a href='#'><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
          <a href='#'><FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} /></a>
          </div>
        </div>
      </div>
      <div><p>&copy;info@Eden.com</p></div>
      <div><p>&copy; 2023 Eden. All Rights Reserved.</p></div>
    </footer>
  );
};

export default Footer;

