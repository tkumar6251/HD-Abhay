import React from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Living Space",
      description: "Modern, inviting, and made to celebrate diversity",
      category: "Residential"
    },
    {
      id: 2,
      title: "Innovative Office Design",
      description: "Innovative design meeting real-world function",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Cozy Family Home",
      description: "A blend of textures, comfort, and accessibility",
      category: "Residential"
    },
    {
      id: 4,
      title: "Transformative Renovation",
      description: "Design that transforms the way you feel",
      category: "Renovation"
    },
    {
      id: 5,
      title: "Luxury Apartment",
      description: "Elegant spaces that inspire daily living",
      category: "Residential"
    },
    {
      id: 6,
      title: "Creative Studio Space",
      description: "Where creativity meets functionality",
      category: "Commercial"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <h2 className="section-title">Our Design Stories</h2>
        <p className="section-subtitle">
          Each project tells a unique story of transformation and inspiration
        </p>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image project-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">🏡</div>
                    <p>Project Image</p>
                    <small>{project.title}</small>
                  </div>
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <button className="action-btn">
                      <FaEye />
                    </button>
                    <button className="action-btn">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-category">{project.category}</div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-footer">
          <p className="coming-soon">More Projects Coming Soon</p>
          <a href="#contact" className="btn btn-secondary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;









