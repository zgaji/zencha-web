import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="container">
          <p className="promo-text">
            Enjoy 10% off your first drink, & earn a free drink on your 5th visit - all for a limited time only!
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="matcha-text">Matcha</span> is always a good drink
          </h1>
          <p className="hero-subtitle">
            Start & end your day with a matcha-infused smile.
          </p>
          <Link to="/products" className="cta-button">
            Get Matcha
          </Link>
        </div>
        <div className="hero-decoration">
          <div className="green-circle"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
