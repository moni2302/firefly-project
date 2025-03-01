import React from 'react';
import './index.scss'; // Importing CSS for Footer styles

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <ul className="footer-links">
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/shipping-policy">Shipping Policy</a></li>
          <li><a href="/contact">Contact Information</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <ul className="social-media-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
