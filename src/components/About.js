import React from 'react';
import { FaHeart, FaLightbulb, FaHandsHelping, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const designPrinciples = [
    {
      icon: <FaHeart />,
      title: "We listen first",
      description: "Understanding your needs and vision is our foundation",
      image: "/asset/interior-4226020_1280.jpg"
    },
    {
      icon: <FaLightbulb />,
      title: "We innovate boldly",
      description: "Pushing creative boundaries while maintaining functionality",
      image: "/asset/brick-wall-1850095_1280.jpg"
    },
    {
      icon: <FaHandsHelping />,
      title: "We craft with care",
      description: "Every detail matters in creating spaces that inspire",
      image: "/asset/interior-4226020_1281.jpg"
    },
    {
      icon: <FaRocket />,
      title: "We deliver with precision",
      description: "Timely execution with uncompromising quality standards",
      image: "/asset/office-4292265_1280.jpg"
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="about-background" style={{ backgroundImage: "url(/asset/ba.jpg)" }} />
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Spaces that welcome every story</h2>
            <p className="section-subtitle">
              Hi Dezign is a studio built on a simple belief: Great design is meant for everyone.
              We blend diversity, inclusion, and innovation to create spaces that reflect identity,
              enhance well-being, and inspire everyday life.
            </p>

            <div className="design-principles">
              <h3 className="principles-title">How We Design</h3>
              <div className="principles-grid">
                {designPrinciples.map((principle, index) => (
                  <div key={index} className="principle-card">
                    <div className="principle-media" style={{ backgroundImage: `url(${principle.image})` }} />
                    <div className="principle-body">
                      <div className="principle-icon">
                        {principle.icon}
                      </div>
                      <h4 className="principle-title">{principle.title}</h4>
                      <p className="principle-description">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="placeholder-image founder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon"><img src="/asset/ab/ab.jpg" alt="Abhay Pratap Singh - Founder and Principal Designer at Hi Dezign" /></div>
                <p>Abhay Pratap Singh</p>
                <small>Principal Designer</small>
              </div>
            </div>
            <div className="founder-bio">
              <h4 className="founder-name">Abhay Pratap Singh</h4>
              <p className="founder-text">Founder and Principal Designer at Hi Dezign. Abhay blends modern functionality with warm, human-centered design to craft inclusive spaces that feel effortless and inspiring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;








