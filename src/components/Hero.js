import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <img
          src="/asset/aa.jpg"
          alt="Hero Background"
          className="hero-static-bg"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">Hi Dzign</h1>
            <p className="hero-subtitle">Designing Spaces Where Everyone Belongs</p>
            <p className="hero-description">
              Creating beautiful, inclusive interiors that celebrate diversity and enhance everyday living.
            </p>

            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">
                Explore Our Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT VERTICAL TEXT WITH LINES */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '40px',
        transform: 'translateY(-50%)',
        zIndex: 20,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        {/* Upper Line */}
        <div style={{ width: '1px', height: '100px', background: '#000000', opacity: 0.6 }}></div>

        <p style={{
          color: '#000000',
          fontSize: '0.9rem',
          letterSpacing: '0.5em',
          fontWeight: 'bold',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          margin: 0,
          textShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          INTERIOR DESIGN
        </p>

        {/* Lower Line */}
        <div style={{ width: '1px', height: '100px', background: '#000000', opacity: 0.6 }}></div>
      </div>

      <div className="scroll-indicator">
        <FaArrowDown className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
