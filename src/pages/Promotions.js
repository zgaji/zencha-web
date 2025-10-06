import React from 'react';
import './Promotions.css';

const Promotions = () => {
  const promotions = [
    {
      title: "First Drink Special",
      discount: "10% OFF",
      description: "Enjoy 10% off your first drink at Zencha",
      code: "WELCOME10",
      validUntil: "Valid until December 31, 2024",
      icon: "🎉"
    },
    {
      title: "Loyalty Rewards",
      discount: "FREE DRINK",
      description: "Get a free drink on your 5th visit",
      code: "LOYALTY5",
      validUntil: "Ongoing program",
      icon: "⭐"
    },
    {
      title: "Matcha Monday",
      discount: "15% OFF",
      description: "Every Monday, enjoy 15% off all matcha drinks",
      code: "MONDAY15",
      validUntil: "Every Monday",
      icon: "📅"
    },
    {
      title: "Bulk Order Discount",
      discount: "20% OFF",
      description: "Order 5 or more drinks and save 20%",
      code: "BULK20",
      validUntil: "Always available",
      icon: "📦"
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
              <div className="event-icon">🎊</div>
              <h3>Matcha Tasting Sessions</h3>
              <p>
                Join us every Saturday for guided matcha tasting sessions 
                where you can learn about different grades and preparation methods.
              </p>
              <span className="event-time">Every Saturday, 2:00 PM</span>
            </div>
            <div className="event-card">
              <div className="event-icon">🎓</div>
              <h3>Tea Ceremony Workshops</h3>
              <p>
                Learn the traditional Japanese tea ceremony with our expert instructors. 
                Perfect for beginners and enthusiasts alike.
              </p>
              <span className="event-time">First Sunday of each month</span>
            </div>
            <div className="event-card">
              <div className="event-icon">🎂</div>
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
