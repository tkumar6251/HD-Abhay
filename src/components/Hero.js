import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="image-collage" style={{ transform: `translateX(${scrollY * 0.1}px)` }}>
          <div className="collage-image image-1">
            <img src="/asset/brick-wall-1850095_1280.jpg" alt="Brick Wall Interior" />
          </div>
          <div className="collage-image image-2">
            <img src="/asset/interior-4226020_1280.jpg" alt="Modern Interior Design" />
          </div>
          <div className="collage-image image-3">
            <img src="/asset/interior-4226020_1281.jpg" alt="Contemporary Interior" />
          </div>
          <div className="collage-image image-4">
            <img src="/asset/office-4292265_1280.jpg" alt="Modern Office Space" />
          </div>
        </div>
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

      <div className="scroll-indicator">
        <FaArrowDown className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
