import React from 'react';
import { FaHome, FaBuilding, FaCoffee, FaHammer, FaDraftingCompass } from 'react-icons/fa';
import './Clients.css';

const Clients = () => {
  const clientTypes = [
    {
      icon: <FaHome />,
      title: "Homes",
      description: "Personal spaces that reflect your unique style"
    },
    {
      icon: <FaBuilding />,
      title: "Offices",
      description: "Professional environments that inspire productivity"
    },
    {
      icon: <FaCoffee />,
      title: "Cafés & Retail",
      description: "Commercial spaces that attract and engage customers"
    },
    {
      icon: <FaHammer />,
      title: "Developers & Builders",
      description: "Large-scale projects with attention to detail"
    },
    {
      icon: <FaDraftingCompass />,
      title: "Architect Partners",
      description: "Collaborative design solutions for complex projects"
    }
  ];

  return (
    <section className="clients section" id="clients">
      <div className="container">
        <h2 className="section-title">Who We Work For</h2>
        <p className="section-subtitle">
          From intimate homes to large commercial spaces, we create designs that work for everyone
        </p>
        
        <div className="clients-grid">
          {clientTypes.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-icon">
                {client.icon}
              </div>
              <h3 className="client-title">{client.title}</h3>
              <p className="client-description">{client.description}</p>
            </div>
          ))}
        </div>
        
        <div className="clients-footer">
          <p className="clients-tagline">Your dreams, our blueprint.</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;









