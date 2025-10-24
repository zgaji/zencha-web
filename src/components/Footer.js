import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <h3 className="footer-title">ZENCHA</h3>
            <p className="footer-brand-line">Your local matcha slow bar — handcrafted drinks and premium powders.</p>
            <p className="footer-tagline">Matcha is always a good drink.</p>
          </div>
          
          <div className="footer-section contact-section">
            <div className="contact-info">
              <p>📍 BGC Central Market, Manila, PH</p>
              <p>📧 zencha@gmail.com</p>
              <p>📞 +63 912 345 6789</p>
              <p>📱 @zencha.ph</p>
            </div>
          </div>
          
          <div className="footer-section links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="quick-links">
              <Link to="/">Home</Link>
              <span className="separator">|</span>
              <Link to="/about">About Us</Link>
              <span className="separator">|</span>
              <Link to="/products">Menu</Link>
              <span className="separator">|</span>
              <Link to="/promotions">Promotions</Link>
              <span className="separator">|</span>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          
          <div className="footer-section social-section">
            <h4 className="footer-heading">Stay Connected</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
                <span className="social-text">Instagram</span>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
                <span className="social-text">Facebook</span>
              </a>
              <a href="#" className="social-link" aria-label="TikTok">
                <span className="social-icon">🎵</span>
                <span className="social-text">TikTok</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Zencha | Designed with calm and caffeine 🍵</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
