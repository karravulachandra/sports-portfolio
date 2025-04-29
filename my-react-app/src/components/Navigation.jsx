import React from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'broadcast', label: 'On-Air' },
    { id: 'photography', label: 'Photography' },
    { id: 'videography', label: 'Videography' },
    { id: 'graphics', label: 'Graphic Design' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <nav className="navigation" id="main-nav">
      <div className="nav-container">
        <ul className="nav-list">
          {sections.map((section) => (
            <li key={section.id} className="nav-item">
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
                aria-label={`View ${section.label} section`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
