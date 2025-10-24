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

      {/* Featured Drinks Section */}
      <section className="featured-section">
        <div className="floating-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>
        <div className="container">
          <h2 className="section-title">Featured Drinks</h2>
          <p className="section-subtitle">
            Handcrafted with authentic matcha and premium ingredients
          </p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🍵</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Dokuji Matcha Latte Ice</h3>
                <p className="product-description">
                  Rich, ceremonial-grade matcha with creamy oat milk and a hint of vanilla
                </p>
                <div className="product-price">PHP 210</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🍓</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Strawberry Matcha Latte Ice</h3>
                <p className="product-description">
                  Sweet strawberry puree meets earthy matcha for the perfect balance
                </p>
                <div className="product-price">PHP 230</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">☕</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Matcha Espresso Fusion</h3>
                <p className="product-description">
                  Bold espresso shot with smooth matcha for the ultimate energy boost
                </p>
                <div className="product-price">PHP 250</div>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/products" className="secondary-button">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Matcha Powders Section */}
      <section className="powders-section">
        <div className="floating-circles">
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
        <div className="container">
          <h2 className="section-title">Premium Matcha Powders</h2>
          <p className="section-subtitle">
            Take the Zencha experience home with our carefully selected matcha tins
          </p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🫖</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Ceremonial Grade Matcha</h3>
                <p className="product-description">
                  Premium Japanese-sourced ceremonial grade matcha for the ultimate tea ceremony experience
                </p>
                <div className="product-price">PHP 450</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🍃</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Culinary Grade Matcha</h3>
                <p className="product-description">
                  Perfect for lattes, smoothies, and baking. Rich flavor at an accessible price
                </p>
                <div className="product-price">PHP 280</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🌿</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Matcha Starter Kit</h3>
                <p className="product-description">
                  Everything you need: matcha powder, bamboo whisk, and instructions
                </p>
                <div className="product-price">PHP 650</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zencha Section */}
      <section className="why-choose">
        <div className="floating-circles">
          <div className="circle circle-5"></div>
          <div className="circle circle-6"></div>
        </div>
        <div className="container">
          <h2 className="section-title">Why Choose Zencha?</h2>
          <p className="section-subtitle">
            Our promise to bring you the finest matcha experience
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">Quality</div>
              <h3>Authentic Japanese-sourced Matcha</h3>
              <p>Directly sourced from trusted farms in Japan, ensuring the highest quality and authentic taste in every cup.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">Value</div>
              <h3>Affordable & Sustainable</h3>
              <p>Premium matcha at accessible prices with eco-friendly packaging and sustainable sourcing practices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">Craft</div>
              <h3>Locally Handcrafted Drinks</h3>
              <p>Every drink is carefully prepared by our skilled baristas using traditional whisking techniques.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">Zen</div>
              <h3>Calm, Aesthetic Café Vibes</h3>
              <p>Experience the zen of matcha in our thoughtfully designed space that promotes mindfulness and relaxation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Love Section */}
      <section className="testimonials-section">
        <div className="floating-circles">
          <div className="circle circle-7"></div>
          <div className="circle circle-8"></div>
        </div>
        <div className="container">
          <h2 className="section-title">Customer Love</h2>
          <p className="section-subtitle">
            What our matcha lovers are saying
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've never had matcha this smooth before — the slow bar experience makes it feel special! Every visit is like a mini meditation."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Sarah M.</h4>
                  <span>Regular Customer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Zencha's matcha tin is my go-to for my morning lattes. So rich and earthy. It's become an essential part of my daily routine!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>Michael R.</h4>
                  <span>Matcha Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The atmosphere here is incredible. Perfect place to work or just unwind. Plus, their strawberry matcha is absolutely divine!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Lisa K.</h4>
                  <span>Remote Worker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="visit-section">
        <div className="container">
          <div className="visit-content">
            <div className="visit-text">
              <h2 className="section-title">Visit Us</h2>
              <p className="visit-subtitle">
                Catch us this weekend at <strong>BGC Central Market</strong> — scan our QR code to get 10% off your first drink!
              </p>
              <div className="visit-details">
                <div className="visit-item">
                  <span className="visit-icon">Location</span>
                  <span>BGC Central Market, Manila, PH</span>
                </div>
                <div className="visit-item">
                  <span className="visit-icon">Hours</span>
                  <span>Weekends: 8AM - 6PM</span>
                </div>
                <div className="visit-item">
                  <span className="visit-icon">Social</span>
                  <span>Follow @zencha.ph for updates</span>
                </div>
              </div>
              <Link to="/contact" className="cta-button">
                Find a Stall
              </Link>
            </div>
            <div className="qr-code">
              <div className="qr-placeholder">
                <div className="qr-icon">QR</div>
                <p>Scan for 10% off</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
