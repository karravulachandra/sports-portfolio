import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation effect when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const broadcastSection = document.getElementById('broadcast');
    if (broadcastSection) {
      broadcastSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" id="home">
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className={`header-profile-image ${isVisible ? 'visible' : ''}`}>
          <img src="/images/sports/sport1.jpg" alt="Siddartha Manubothu broadcasting from a sports field" />
        </div>
        <div className={`header-text-container ${isVisible ? 'visible' : ''}`}>
          <h1 className="main-title">
            <span className="title-highlight">Sports</span> Portfolio
          </h1>
          <h2 className="subtitle">Siddartha Manubothu</h2>
          <p className="tagline">Sports Broadcaster & Multimedia Journalist</p>
          <div className="header-badges">
            <span className="header-badge">On-Air Talent</span>
            <span className="header-badge">Event Coverage</span>
            <span className="header-badge">Multimedia</span>
          </div>
          <div className="header-cta">
            <a href="#broadcast" className="cta-button primary">View My Work</a>
            <a href="#contact" className="cta-button secondary">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="scroll-down-container">
        <button className="scroll-down-button" onClick={scrollToNextSection} aria-label="Scroll down">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      <div className="header-accent"></div>
    </header>
  );
};

export default Header;
