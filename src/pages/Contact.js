import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Header */}
        <section className="contact-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Get in touch with us!
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Information */}
          <section className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>zencha@gmail.com</p>
                  <span>We'll respond within 24 hours</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>Manila, Philippines</p>
                  <span>Visit us for the full experience</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h3>Hours</h3>
                  <p>Mon - Sun: 7:00 AM - 9:00 PM</p>
                  <span>Open every day</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-section">
              <h3>Find Us</h3>
              <div className="map-placeholder">
                <span className="map-icon">🗺️</span>
                <p>Interactive map would be here</p>
                <span className="map-address">Manila, Philippines</span>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is matcha?</h3>
              <p>
                Matcha is a finely ground powder of specially grown and processed green tea leaves. 
                It's rich in antioxidants and provides a unique, earthy flavor.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer delivery?</h3>
              <p>
                Yes! We offer delivery within Manila. Contact us for delivery options and pricing.
              </p>
            </div>
            <div className="faq-item">
              <h3>Are your products organic?</h3>
              <p>
                We source our matcha from trusted suppliers who follow sustainable farming practices. 
                Many of our products are organic certified.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I customize my order?</h3>
              <p>
                Absolutely! We offer custom orders and can accommodate special dietary requirements. 
                Just let us know your needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
