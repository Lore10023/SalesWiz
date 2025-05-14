import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div id="Contact" className="contact-wrapper">
      <div className="contact-info-grid">
        <div className="info-card">
          <div className="info-icon-circle">
            <FaEnvelope className="info-icon" />
          </div>
          <p className="info-title">Email Address</p>
          <p className="info-text">contact@yourdomain.com</p>
        </div>
        <div className="info-card">
          <div className="info-icon-circle">
            <FaPhone className="info-icon" />
          </div>
          <p className="info-title">Phone Number</p>
          <p className="info-text">+1 234 567 890</p>
        </div>
        <div className="info-card">
          <div className="info-icon-circle">
            <FaMapMarkerAlt className="info-icon" />
          </div>
          <p className="info-title">Our Address</p>
          <p className="info-text">1234 AI Street, Innovation City</p>
        </div>
      </div>

      <div className="contact-form-section">
        <h2 className="form-title">How can we help you?</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name<span>*</span></label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email<span>*</span></label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Message<span>*</span></label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" id="consent" required />
            <label className="label" htmlFor="consent">I agree that my submitted data is being collected and stored</label>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
