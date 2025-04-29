import React, { useState } from 'react';
import './Sections.css';

const GraphicDesignSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sports graphic design projects
  const graphicProjects = [
    {
      id: 1,
      title: 'Championship Series Branding',
      category: 'Branding',
      description: 'Complete branding package for a national championship series including logo design, color palette, typography, and brand guidelines.',
      imageUrl: '/images/sports/sport2.jpg',
      details: {
        client: 'National Sports League',
        year: '2024',
        services: ['Logo Design', 'Brand Identity', 'Style Guide', 'Marketing Materials'],
        challenge: 'Create a dynamic and memorable brand identity for a major sports championship that captures the energy and prestige of the event.',
        solution: 'Developed a bold, modern visual identity with a distinctive logo that works across all platforms and marketing materials.'
      }
    },
    {
      id: 2,
      title: 'Team Poster Series',
      category: 'Print Design',
      description: 'Series of promotional posters for a college basketball team highlighting key players and game schedules.',
      imageUrl: '/images/sports/sport9.jpg',
      details: {
        client: 'University Athletics Department',
        year: '2023',
        services: ['Poster Design', 'Photography Direction', 'Typography', 'Print Production'],
        challenge: 'Create eye-catching posters that would increase game attendance and build team recognition on campus.',
        solution: 'Designed a cohesive series of posters with dynamic compositions, bold typography, and dramatic lighting to create a sense of excitement and team pride.'
      }
    },
    {
      id: 3,
      title: 'Sports Event Campaign',
      category: 'Marketing',
      description: 'Comprehensive marketing campaign for a major sporting event including digital and print materials.',
      imageUrl: '/images/sports/sport10.jpg',
      details: {
        client: 'Regional Sports Commission',
        year: '2023',
        services: ['Campaign Strategy', 'Visual Identity', 'Advertising Materials', 'Social Media Assets'],
        challenge: 'Develop a cohesive marketing campaign that would increase ticket sales and generate excitement for a regional sporting event.',
        solution: 'Created a vibrant, energetic visual system that was applied across all marketing channels, resulting in a 40% increase in attendance from the previous year.'
      }
    },
    {
      id: 4,
      title: 'Athlete Brand Identity',
      category: 'Branding',
      description: 'Personal brand development for a professional athlete including logo, social media templates, and merchandise design.',
      imageUrl: '/images/sports/sport4.jpg',
      details: {
        client: 'Professional Basketball Player',
        year: '2024',
        services: ['Personal Branding', 'Logo Design', 'Social Media Kit', 'Merchandise Design'],
        challenge: 'Create a distinctive personal brand for an athlete that would help build their off-court presence and business opportunities.',
        solution: 'Developed a sleek, professional brand identity that reflects the athlete\'s playing style and personality, with applications across social media, apparel, and endorsements.'
      }
    },
    {
      id: 5,
      title: 'Sports App UI Design',
      category: 'Digital',
      description: 'User interface design for a sports statistics and news application with a focus on real-time data visualization.',
      imageUrl: '/images/sports/sport5.jpg',
      details: {
        client: 'Sports Tech Startup',
        year: '2023',
        services: ['UI/UX Design', 'Information Architecture', 'Visual Design', 'Prototyping'],
        challenge: 'Design an intuitive, engaging interface for a data-heavy sports application that appeals to both casual and hardcore sports fans.',
        solution: 'Created a clean, modern UI with customizable dashboards, innovative data visualizations, and a seamless user experience across devices.'
      }
    },
    {
      id: 6,
      title: 'Stadium Wayfinding System',
      category: 'Environmental',
      description: 'Comprehensive signage and wayfinding system for a renovated sports stadium to improve visitor experience.',
      imageUrl: '/images/sports/sport8.jpg',
      details: {
        client: 'Metropolitan Stadium Authority',
        year: '2022',
        services: ['Wayfinding Strategy', 'Signage Design', 'Icon System', 'Implementation Guidelines'],
        challenge: 'Develop an intuitive wayfinding system for a complex stadium environment that serves diverse audiences and enhances the fan experience.',
        solution: 'Designed a clear, accessible signage system with a distinctive visual language, color coding, and universal icons that significantly reduced navigation confusion.'
      }
    }
  ];

  // Open project details
  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  // Close project details
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section graphic-design-section" id="graphics">
      <h2 className="section-title">Graphic Design</h2>
      <div className="section-content">
        <p className="section-description">
          My sports graphic design work combines visual impact with strategic thinking to create compelling brand experiences.
          From team identities to marketing campaigns, each project is crafted to engage fans and elevate sports brands.
        </p>

        <div className="graphic-projects-grid">
          {graphicProjects.map(project => (
            <div
              key={project.id}
              className="graphic-project-card"
              onClick={() => openProject(project)}
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="graphic-design-services">
          <h3 className="section-subtitle">Design Services</h3>
          <div className="design-services-list">
            <div className="design-service">
              <h4>Sports Branding</h4>
              <p>Team identities, league branding, and athlete personal brands that make a lasting impression.</p>
            </div>
            <div className="design-service">
              <h4>Marketing Campaigns</h4>
              <p>Cohesive visual campaigns for sporting events, tournaments, and season promotions.</p>
            </div>
            <div className="design-service">
              <h4>Digital Design</h4>
              <p>Website design, app interfaces, and digital assets optimized for sports content.</p>
            </div>
            <div className="design-service">
              <h4>Print Materials</h4>
              <p>Game day programs, posters, tickets, and promotional materials with impact.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeProject}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject}>×</button>

            <div className="project-modal-image">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} />
            </div>

            <div className="project-modal-details">
              <h2 className="project-modal-title">{selectedProject.title}</h2>
              <p className="project-modal-description">{selectedProject.description}</p>

              <div className="project-info-grid">
                <div className="project-info-item">
                  <h4>Client</h4>
                  <p>{selectedProject.details.client}</p>
                </div>
                <div className="project-info-item">
                  <h4>Year</h4>
                  <p>{selectedProject.details.year}</p>
                </div>
                <div className="project-info-item">
                  <h4>Services</h4>
                  <ul>
                    {selectedProject.details.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-challenge-solution">
                <div className="project-section">
                  <h4>Challenge</h4>
                  <p>{selectedProject.details.challenge}</p>
                </div>
                <div className="project-section">
                  <h4>Solution</h4>
                  <p>{selectedProject.details.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicDesignSection;
