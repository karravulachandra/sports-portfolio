import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="back-to-top">
        <button className="back-to-top-button" onClick={scrollToTop} aria-label="Back to top">
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
            <h3>Siddartha Manubothu</h3>
            <p>Professional sports broadcaster and multimedia journalist with a passion for capturing the excitement and drama of sports through various media formats.</p>
          </div>

          <div className="footer-nav">
            <h4>Portfolio</h4>
            <ul>
              <li><a href="#broadcast">On-Air</a></li>
              <li><a href="#photography">Photography</a></li>
              <li><a href="#videography">Videography</a></li>
              <li><a href="#graphics">Graphic Design</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>Email: contact@siddarthamanubothu.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Siddartha Manubothu. All rights reserved.</p>
          <p className="footer-credit">Sports Broadcaster & Multimedia Journalist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
