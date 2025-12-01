import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/contact-us" className="footer-link">Contact Us</Link>
        <span> | </span> {/* Separator */}
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <span> | </span> {/* Separator */}
        <Link to="/podcast" className="footer-link">Podcast</Link>
      </div>
    </footer>
  );
};

export default Footer;
