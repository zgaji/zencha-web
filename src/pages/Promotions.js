import React from 'react';
import '../styles/Promotions.css';

const Promotions = () => {
  const promotions = [
    {
      title: "First Drink Special",
      discount: "10% OFF",
      description: "Enjoy 10% off your first drink at Zencha",
      code: "WELCOME10",
      validUntil: "Valid until December 31, 2024",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Loyalty Rewards",
      discount: "FREE DRINK",
      description: "Get a free drink on your 5th visit",
      code: "LOYALTY5",
      validUntil: "Ongoing program",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      title: "Matcha Monday",
      discount: "15% OFF",
      description: "Every Monday, enjoy 15% off all matcha drinks",
      code: "MONDAY15",
      validUntil: "Every Monday",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      )
    },
    {
      title: "Bulk Order Discount",
      discount: "20% OFF",
      description: "Order 5 or more drinks and save 20%",
      code: "BULK20",
      validUntil: "Always available",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    }
  ];

  const loyaltyProgram = [
    {
      visit: "1st Visit",
      reward: "Welcome drink on us",
      description: "Get your first drink free when you sign up"
    },
    {
      visit: "3rd Visit",
      reward: "10% off your order",
      description: "Enjoy a discount on your third visit"
    },
    {
      visit: "5th Visit",
      reward: "Free premium drink",
      description: "Choose any drink from our premium menu"
    },
    {
      visit: "10th Visit",
      reward: "Free matcha powder tin",
      description: "Take home a 30g ceremonial grade matcha tin"
    }
  ];

  return (
    <div className="promotions">
      <div className="container">
        {/* Header */}
        <section className="promotions-header">
          <h1 className="page-title">Promotions & Rewards</h1>
          <p className="page-subtitle">
            Save more and earn rewards with our special offers and loyalty program
          </p>
        </section>

        {/* Current Promotions */}
        <section className="current-promotions">
          <h2 className="section-title">Current Promotions</h2>
          <div className="promotions-grid">
            {promotions.map((promo, index) => (
              <div key={index} className="promotion-card">
                <div className="promo-header">
                  <div className="promo-icon">{promo.icon}</div>
                  <div className="promo-discount">{promo.discount}</div>
                </div>
                <div className="promo-content">
                  <h3 className="promo-title">{promo.title}</h3>
                  <p className="promo-description">{promo.description}</p>
                  <div className="promo-code">
                    <span className="code-label">Code:</span>
                    <span className="code-value">{promo.code}</span>
                  </div>
                  <p className="promo-valid">{promo.validUntil}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="loyalty-program">
          <h2 className="section-title">Loyalty Rewards Program</h2>
          <p className="section-subtitle">
            Join our loyalty program and earn rewards with every visit
          </p>
          
          <div className="loyalty-timeline">
            {loyaltyProgram.map((reward, index) => (
              <div key={index} className="loyalty-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3 className="step-visit">{reward.visit}</h3>
                  <h4 className="step-reward">{reward.reward}</h4>
                  <p className="step-description">{reward.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="loyalty-signup">
            <h3>Ready to Start Earning Rewards?</h3>
            <p>Sign up for our loyalty program and start earning rewards today!</p>
            <button className="signup-button">Join Now</button>
          </div>
        </section>

        {/* Special Events */}
        <section className="special-events">
          <h2 className="section-title">Special Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Matcha Tasting Sessions</h3>
              <p>
                Join us every Saturday for guided matcha tasting sessions 
                where you can learn about different grades and preparation methods.
              </p>
              <span className="event-time">Every Saturday, 2:00 PM</span>
            </div>
            <div className="event-card">
              <div className="event-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Tea Ceremony Workshops</h3>
              <p>
                Learn the traditional Japanese tea ceremony with our expert instructors. 
                Perfect for beginners and enthusiasts alike.
              </p>
              <span className="event-time">First Sunday of each month</span>
            </div>
            <div className="event-card">
              <div className="event-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3>Birthday Special</h3>
              <p>
                Celebrate your birthday with us! Show your ID and get 25% off 
                your entire order on your special day.
              </p>
              <span className="event-time">Valid on your birthday</span>
            </div>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="terms-section">
          <h3>Terms and Conditions</h3>
          <ul className="terms-list">
            <li>Promotions cannot be combined unless otherwise specified</li>
            <li>Valid only at Zencha Manila location</li>
            <li>Loyalty rewards expire 6 months after earning</li>
            <li>Management reserves the right to modify or cancel promotions</li>
            <li>Valid ID required for birthday special</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Promotions;
