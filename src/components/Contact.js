import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Create Something Beautiful Together</h2>
        <p className="section-subtitle">
          Ready to transform your space? Get in touch and let's start your design journey.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 999 910 9397</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@hidzign.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Noida , Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaInstagram />
                </div>
                <div className="contact-text">
                  <h4>Instagram</h4>
                  <p>@hidzign</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <div className="action-cards">
              <div className="action-card whatsapp-card">
                <div className="action-icon">
                  <FaWhatsapp />
                </div>
                <h3>WhatsApp Us</h3>
                <p>Quick questions and instant responses</p>
                <a href="https://wa.me/919999109397" className="btn btn-whatsapp">
                  Start Chat
                </a>
              </div>

              <div className="action-card schedule-card">
                <div className="action-icon">
                  <FaCalendarAlt />
                </div>
                <h3>Schedule a Call</h3>
                <p>Book a free consultation to discuss your project</p>
                <a href="#contact" className="btn btn-secondary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p className="contact-tagline">
            Every great design starts with a conversation. Let's talk about your vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;









