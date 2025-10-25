import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="page-title">About Zencha</h1>
          <p className="page-subtitle">Our love for matcha drives everything we do</p>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                At Zencha, we believe in slowing down. Our journey started with a shared 
                love for the earthy, smooth taste of matcha — a drink that's both 
                energizing and grounding. Founded in Manila, Zencha celebrates the art 
                of whisking as more than just a café ritual; it's a lifestyle.
              </p>
              <p>
                We take pride in using authentic matcha sourced from trusted farms, 
                ensuring every sip is full of flavor and nutrients. Through our slow bar 
                experience and take-home matcha tins, we aim to make matcha accessible, 
                affordable, and mindful for everyone.
              </p>
              <div className="tagline-section">
                <p className="tagline">"From the whisk to your cup — pure matcha moments"</p>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="/assets/images/hero/slide-1.jpg" 
                alt="Our Matcha Journey" 
                className="story-img"
              />
            </div>
          </div>
        </section>

        {/* Matcha Benefits Section */}
        <section className="benefits-section">
          <h2>Why We Love Matcha</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Earthy Taste</h3>
              <p>
                The deep, umami-rich flavor of authentic matcha is unlike anything else. 
                Each sip reveals layers of complexity that only nature can provide.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3>Health Benefits</h3>
              <p>
                Packed with antioxidants, L-theanine for calm focus, and natural caffeine 
                for sustained energy without jitters or crashes.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Cultural Heritage</h3>
              <p>
                Rooted in Japanese tea ceremony traditions, matcha represents mindfulness, 
                respect, and the art of being present in the moment.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3>Fair Pricing</h3>
              <p>
                We work directly with farmers and suppliers to ensure fair compensation 
                while keeping our prices accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-image">
              <img 
                src="/assets/images/hero/slide-2.jpg" 
                alt="Our Mission" 
                className="mission-img"
              />
            </div>
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Zencha, we're committed to bringing you the highest quality matcha 
                products while maintaining fair and transparent pricing. We believe 
                that everyone deserves to experience the authentic taste and benefits 
                of premium matcha.
              </p>
              <p>
                Our goal is to bridge the gap between traditional matcha culture and 
                modern convenience, making this ancient wisdom accessible to today's 
                busy lifestyle without compromising on quality or authenticity.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our matcha, sourcing only the finest ceremonial grade powder.</p>
            </div>
            <div className="value-item">
              <h3>Authenticity</h3>
              <p>We honor the traditional methods and cultural significance of matcha while adapting to modern needs.</p>
            </div>
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>Premium matcha should be accessible to everyone, not just a select few.</p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>We support sustainable farming practices and fair trade principles in our supply chain.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
