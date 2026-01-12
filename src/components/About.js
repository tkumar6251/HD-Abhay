import React from 'react';
import { FaHeart, FaLightbulb, FaHandsHelping, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const designPrinciples = [
    {
      icon: <FaHeart />,
      title: "We listen first",
      description: "Understanding your needs and vision is our foundation",
    },
    {
      icon: <FaLightbulb />,
      title: "We innovate boldly",
      description: "Pushing creative boundaries while maintaining functionality",
    },
    {
      icon: <FaHandsHelping />,
      title: "We craft with care",
      description: "Every detail matters in creating spaces that inspire",
    },
    {
      icon: <FaRocket />,
      title: "We deliver with precision",
      description: "Timely execution with uncompromising quality standards",
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="about-background" style={{ backgroundImage: "url(/asset/ba.jpg)" }} />
      <div className="container">

        {/* BOTTOM SECTION: Cards */}
        <div className="about-bottom-section">
          <h3 className="section-main-title">How We Design</h3>

          <div className="principles-grid">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="principle-card">
                {/* Big Number Background */}
                <span className="card-number">{index + 1}</span>

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

        {/* TOP SECTION: Story (Left) & Founder (Right) */}
        <div className="about-top-section">
          {/* LEFT: Spaces Story */}
          <div className="about-story-left">
            <h2 className="story-title">Spaces that welcome every story</h2>
            <p className="story-description">
              Hi Dezign is a studio built on a simple belief: Great design is meant for everyone.
              We blend diversity, inclusion, and innovation to create spaces that reflect identity,
              enhance well-being, and inspire everyday life.
              <br /><br />
              Navigating the complexities of interior design in India—from optimizing compact urban spaces to managing unorganized execution—can be overwhelming. We turn these challenges into opportunities. By combining smart spatial planning with transparent, hassle-free project management, we deliver premium, personalized interiors that are not just beautiful, but practical and accessible for every Indian home.
            </p>

            <div className="story-quote-container">
              <span className="big-quote">“</span>
              <p className="story-quote-text">
                Your home should tell the story of who you are, and be a collection of what you love.
              </p>
              <p className="quote-author">- Abhay Pratap Singh</p>
            </div>
          </div>

          {/* RIGHT: Founder */}
          <div className="about-founder-right">
            <div className="founder-image-wrapper">
              <img src="/asset/ab/ab.jpg" alt="Abhay Pratap Singh" className="founder-img" />
            </div>
            <div className="founder-info">
              <h4 className="founder-name">Abhay Pratap Singh</h4>
              <p className="founder-role">Principal Designer</p>
              <p className="founder-text">
                Founder and Principal Designer at Hi Dezign. Abhay blends modern functionality with warm, human-centered design to craft inclusive spaces that feel effortless and inspiring.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
