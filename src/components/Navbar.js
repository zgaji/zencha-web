import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavSlideOpen, setIsNavSlideOpen] = useState(false);
  const { items, openCart } = useCart();
  
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNavSlide = () => {
    setIsNavSlideOpen(!isNavSlideOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/assets/images/icons/zencha-logo.png" alt="Zencha" className="logo-image" />
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className={`nav-links-slide ${isNavSlideOpen ? 'slide-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Homepage
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/promotions" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Promotions
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
          <button className="nav-menu-button" onClick={toggleNavSlide}>
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
              <button className="nav-cart-button" onClick={openCart}>
                <svg className="cart-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                {cartItemCount > 0 && (
                  <span className="cart-count">{cartItemCount}</span>
                )}
              </button>
          <Link to="/contact" className="nav-cta-button" onClick={() => setIsMenuOpen(false)}>
            Find Us
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
