import React from 'react';
import { 
  FaHome, 
  FaBuilding, 
  FaTools, 
  FaCube, 
  FaChair, 
  FaPalette, 
  FaCheckCircle, 
  FaHammer, 
  FaMagic, 
  FaYinYang 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: "Residential Design",
      description: "Beautiful homes tailored to your lifestyle",
      image: "/asset/interior-4226020_1280.jpg"
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Design",
      description: "Professional spaces that inspire productivity",
      image: "/asset/office-4292265_1280.jpg"
    },
    {
      icon: <FaTools />,
      title: "Renovation & Space Planning",
      description: "Transform existing spaces with smart design",
      image: "/asset/brick-wall-1850095_1280.jpg"
    },
    {
      icon: <FaCube />,
      title: "3D Visualisations",
      description: "See your vision before it becomes reality",
      image: "/asset/hbg.png"
    },
    {
      icon: <FaChair />,
      title: "Furniture & Decor Selection",
      description: "Curated pieces that complete your space",
      image: "/asset/interior-4226020_1281.jpg"
    },
    {
      icon: <FaPalette />,
      title: "Color & Material Consulting",
      description: "Expert guidance on colors and textures",
      image: "/asset/brick-wall-1850095_1280.jpg"
    },
    {
      icon: <FaCheckCircle />,
      title: "Turnkey Execution",
      description: "Complete project management from start to finish",
      image: "/asset/interior-4226020_1280.jpg"
    },
    {
      icon: <FaHammer />,
      title: "Custom Furniture",
      description: "Bespoke pieces designed just for you",
      image: "/asset/office-4292265_1280.jpg"
    },
    {
      icon: <FaMagic />,
      title: "Styling & Staging",
      description: "Perfect presentation for any occasion",
      image: "/asset/hbg.png"
    },
    {
      icon: <FaYinYang />,
      title: "Vastu-aligned Design",
      description: "Harmonious spaces following ancient principles",
      image: "/asset/interior-4226020_1281.jpg"
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          Comprehensive interior design services tailored to bring your vision to life
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-media" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="service-body">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <a href="#contact" className="btn btn-primary btn-large">
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;








