import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/portfolio" className="footer-link">Portfolio</Link>
        <span> | </span>
        <Link to="/tees" className="footer-link">Funny Tees</Link>
        <span> | </span>
        <Link to="/contact-us" className="footer-link">Contact Us</Link>
        <span> | </span>
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <span> | </span>
        <Link to="/invertedcontrolfreak" className="footer-link">YouTube Channel</Link>
      </div>
    </footer>
  );
};

export default Footer;
