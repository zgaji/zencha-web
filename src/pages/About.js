import React from 'react';
import './About.css';

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
                Zencha was born from a simple belief: matcha is always a good drink. 
                What started as a passion for the earthy, complex flavors of authentic 
                matcha has grown into a mission to share this incredible experience 
                with everyone.
              </p>
              <p>
                We believe that quality matcha shouldn't be a luxury reserved for 
                special occasions. Our journey began when we discovered the profound 
                difference between authentic ceremonial grade matcha and the powdered 
                green tea often passed off as matcha in many places.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🌿</span>
                <p>Our Matcha Journey</p>
              </div>
            </div>
          </div>
        </section>

        {/* Matcha Benefits Section */}
        <section className="benefits-section">
          <h2>Why We Love Matcha</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🍃</div>
              <h3>Earthy Taste</h3>
              <p>
                The deep, umami-rich flavor of authentic matcha is unlike anything else. 
                Each sip reveals layers of complexity that only nature can provide.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>Health Benefits</h3>
              <p>
                Packed with antioxidants, L-theanine for calm focus, and natural caffeine 
                for sustained energy without jitters or crashes.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏛️</div>
              <h3>Cultural Heritage</h3>
              <p>
                Rooted in Japanese tea ceremony traditions, matcha represents mindfulness, 
                respect, and the art of being present in the moment.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
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
              <div className="image-placeholder">
                <span className="placeholder-icon">🎯</span>
                <p>Our Mission</p>
              </div>
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
