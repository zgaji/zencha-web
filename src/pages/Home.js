import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredDrinks = [
    {
      name: "Dokuji Matcha Latte Ice",
      price: "210",
      description: "Premium ceremonial grade matcha with creamy milk and ice",
      category: "Featured"
    },
    {
      name: "Strawberry Matcha Latte Ice",
      price: "230",
      description: "Sweet strawberry flavor blended with authentic matcha",
      category: "Popular"
    },
    {
      name: "Classic Matcha Tea",
      price: "150",
      description: "Pure matcha tea, traditional preparation",
      category: "Traditional"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Zencha</h1>
          <p className="hero-tagline">Matcha is always a good drink</p>
          <p className="hero-description">
            Experience the authentic taste of premium matcha with our carefully 
            curated selection of drinks and products. From traditional ceremonies 
            to modern lattes, we bring you the finest matcha experience.
          </p>
          <Link to="/products" className="cta-button">
            Get Matcha
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span className="hero-icon">🍵</span>
            <p>Premium Matcha Experience</p>
          </div>
        </div>
      </section>

      {/* Featured Drinks Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Drinks</h2>
          <p className="section-subtitle">
            Discover our most popular matcha creations
          </p>
          <div className="products-grid">
            {featuredDrinks.map((drink, index) => (
              <ProductCard key={index} product={drink} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/products" className="secondary-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Zencha Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Zencha?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Premium Quality</h3>
              <p>Only the finest ceremonial grade matcha from trusted sources</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Health Benefits</h3>
              <p>Rich in antioxidants and natural energy without the crash</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Fair Pricing</h3>
              <p>Quality matcha at accessible prices for everyone</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
