import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: '/assets/images/hero/slide-1.jpg', alt: 'Matcha Drink 1' },
    { id: 2, image: '/assets/images/hero/slide-2.jpg', alt: 'Matcha Drink 2' },
    { id: 3, image: '/assets/images/hero/slide-3.jpg', alt: 'Matcha Drink 3' },
    { id: 4, image: '/assets/images/hero/slide-4.jpg', alt: 'Matcha Drink 4' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="container">
          <p className="promo-text">
            Enjoy 10% off your first drink, & earn a free drink on your 10th order - all for a limited time only!
          </p>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="slideshow-section">
        <div className="slideshow-container">
          <div className="slideshow-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={slide.image} alt={slide.alt} className="slide-image" />
                <div className="slide-overlay">
                  <div className="slide-content">
                    <h2 className="slide-title">MATCHA? YES PLEASE!</h2>
                    <p className="slide-description">
                      Whisk it slow, sip it fresh
                    </p>
                    <Link to="/products" className="slide-button">
                      get zencha
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button className="slide-nav prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button className="slide-nav next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
          
          {/* Slide Indicators */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
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
                <img src="/assets/images/products/matcha-latter.jpg" alt="Signature Iced Matcha Latte" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Signature Iced Matcha Latte</h3>
                <p className="product-description">
                  Rich, ceremonial-grade matcha with creamy oat milk and a hint of vanilla
                </p>
                <div className="product-price">PHP 210</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="/assets/images/products/stawberry-matcha.jpg" alt="Ichigo Matcha Latte" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Ichigo Matcha Latte</h3>
                <p className="product-description">
                  Sweet strawberry puree meets earthy matcha for the perfect balance
                </p>
                <div className="product-price">PHP 230</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="/assets/images/products/cc-matcha.jpg" alt="Coconut Cloud Matcha" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Coconut Cloud Matcha</h3>
                <p className="product-description">
                  Matcha cream top with refreshing coconut water
                </p>
                <div className="product-price">PHP 230</div>
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
                <img src="/assets/images/products/matcha-1.jpg" alt="Ceremonial Grade Matcha" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Yame First Harvest Matcha</h3>
                <p className="product-description">
                  Grown in the Yame region of Fukuoka, this matcha's deep green color is as rich as its taste - nutty, earthy, and subtly sweet. 
                </p>
                <div className="product-price">PHP 450</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="/assets/images/products/matcha-2.jpg" alt="Yame First Harvest Matcha" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Culinary Grade Matcha</h3>
                <p className="product-description">
                  Delicious flavor of real strawberries paired with first harvest, organic matcha
                </p>
                <div className="product-price">PHP 520</div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="/assets/images/products/matcha-starter-kit.jpg" alt="Matcha Starter Kit" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Matcha Starter Kit</h3>
                <p className="product-description">
                  Everything you need: matcha powder, bamboo whisk, chasen, and instructions
                </p>
                <div className="product-price">PHP 1650</div>
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
            What our matcha folks are saying
          </p>
          <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"I’ve never had matcha this smooth before. The slow bar experience feels so calming — every visit honestly feels like a mini break from the chaos."</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="/assets/images/hero/person-1.jpg" alt="Vera B." />
                    </div>
                    <div className="author-info">
                      <h4>Vera B.</h4>
                      <span>Hobbyist</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"Zencha’s matcha tin is my go-to for my morning lattes. It’s rich, earthy, and perfectly balanced. I can’t start my day without it anymore"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="/assets/images/hero/person-2.jpg" alt="Zari C." />
                    </div>
                    <div className="author-info">
                      <h4>Zari C.</h4>
                      <span>Matcha Addict</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"The atmosphere here is unmatched — it’s cozy, peaceful, and the drinks are top-tier. Their strawberry matcha is easily my favorite comfort drink"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src="/assets/images/hero/person-3.jpg" alt="Matt K." />
                    </div>
                    <div className="author-info">
                      <h4>Matt K.</h4>
                      <span>Performative Male</span>
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
                Experience our <strong>slow bar</strong> at <strong>BGC Central Market</strong>
              </p>
              <div className="visit-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <img src="/assets/images/icons/location-icon.svg" alt="Location" />
                  </div>
                  <div className="highlight-content">
                    <h4>Location</h4>
                    <p>BGC Central Market, Taguig</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <img src="/assets/images/icons/clock-icon.svg" alt="Hours" />
                  </div>
                  <div className="highlight-content">
                    <h4>Hours</h4>
                    <p>Weekends: 8AM - 6PM</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg className="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="highlight-content">
                    <h4>Follow Us</h4>
                    <p>@zencha.ph</p>
                    <span>Daily updates, Pop ups, & behind-the-scenes</span>
                  </div>
                </div>
              </div>
              <div className="visit-actions">
                <Link to="/contact" className="cta-button primary">
                  Find Our Stall
                </Link>
                <a href="https://instagram.com/zencha.ph" className="cta-button secondary" target="_blank" rel="noopener noreferrer">
                  Follow Updates
                </a>
              </div>
            </div>
            <div className="visit-visual">
              <div className="qr-offer">
                <div className="qr-container">
                  <div className="qr-code">
                    <div className="qr-pattern">
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                      <div className="qr-square"></div>
                    </div>
                  </div>
                  <div className="qr-text">
                    <h3>First Visit Special</h3>
                    <p className="discount">10% OFF</p>
                    <span>Scan to claim your discount</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
