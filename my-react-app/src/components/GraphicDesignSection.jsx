import React, { useState } from 'react';
import './Sections.css';

const GraphicDesignSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sports graphic design projects
  const graphicProjects = [
    {
      id: 1,
      title: 'Player Highlight - Aziyah',
      category: 'Player Graphics',
      description: 'Custom player highlight graphic showcasing Aziyah with dynamic visual elements and professional sports branding.',
      imageUrl: '/images/graphics/graphic1.png',
      details: {
        client: 'College Athletics Department',
        year: '2024',
        services: ['Player Graphics', 'Sports Branding', 'Digital Design', 'Social Media Assets'],
        challenge: 'Create an eye-catching player highlight graphic that showcases the athlete\'s personality while maintaining team branding guidelines.',
        solution: 'Developed a bold, dynamic design with custom typography and visual effects that highlights the player while reinforcing team identity.'
      }
    },
    {
      id: 2,
      title: 'Basketball Court Design',
      category: 'Environmental Design',
      description: 'Complete court design concept featuring team colors, logo placement, and distinctive visual elements.',
      imageUrl: '/images/graphics/graphic2.png',
      details: {
        client: 'University Athletics Program',
        year: '2024',
        services: ['Environmental Design', 'Brand Application', 'Visual Identity', 'Concept Development'],
        challenge: 'Design a distinctive basketball court that represents the team\'s identity while meeting regulation requirements.',
        solution: 'Created a bold court design with strategic logo placement and custom sideline graphics that enhances brand visibility during broadcasts.'
      }
    },
    {
      id: 3,
      title: 'Indianapolis Schedule Design',
      category: 'Print & Digital',
      description: 'Comprehensive game schedule design for Indianapolis team showing home and away games with clear visual hierarchy.',
      imageUrl: '/images/graphics/graphic3.png',
      details: {
        client: 'Indianapolis Sports Team',
        year: '2024',
        services: ['Schedule Design', 'Information Design', 'Print Materials', 'Digital Assets'],
        challenge: 'Present a complex season schedule in a visually appealing format that fans can easily understand and reference.',
        solution: 'Designed a clean, organized schedule with color-coding for home/away games and visual elements that reinforce team branding.'
      }
    },
    {
      id: 4,
      title: 'Indianapolis Team Branding',
      category: 'Branding',
      description: 'Team branding concept for Indianapolis featuring logo design, typography, and color palette applications.',
      imageUrl: '/images/graphics/graphic4.png',
      details: {
        client: 'Indianapolis Sports Organization',
        year: '2024',
        services: ['Logo Design', 'Brand Identity', 'Typography', 'Color Theory'],
        challenge: 'Create a distinctive visual identity that represents Indianapolis sports culture while standing out in a competitive market.',
        solution: 'Developed a modern, versatile brand system with a bold color palette and custom typography that works across all platforms.'
      }
    },
    {
      id: 5,
      title: 'Liberty Championship Graphics',
      category: 'Event Graphics',
      description: 'Championship celebration graphics for Liberty team featuring dynamic visual elements and trophy imagery.',
      imageUrl: '/images/graphics/graphic5.png',
      details: {
        client: 'Liberty Sports Team',
        year: '2024',
        services: ['Event Graphics', 'Social Media Design', 'Championship Branding', 'Digital Assets'],
        challenge: 'Create celebratory graphics that capture the excitement of a championship win for immediate social media deployment.',
        solution: 'Designed a vibrant, energetic championship graphic with trophy imagery and team branding that generated significant social media engagement.'
      }
    },
    {
      id: 6,
      title: 'On-Air Broadcast Graphics',
      category: 'Broadcast Design',
      description: 'Professional broadcast graphics package for sports coverage including lower thirds, transitions, and information displays.',
      imageUrl: '/images/graphics/graphic6.png',
      details: {
        client: 'Sports Broadcasting Network',
        year: '2024',
        services: ['Broadcast Design', 'Motion Graphics', 'Information Design', 'Brand Integration'],
        challenge: 'Develop a cohesive broadcast graphics package that presents information clearly while maintaining visual appeal during live sports coverage.',
        solution: 'Created a comprehensive graphics system with animated elements, clear typography, and flexible templates for various broadcast scenarios.'
      }
    },
    {
      id: 7,
      title: 'PS5 Game Cover Design',
      category: 'Product Design',
      description: 'Custom sports game cover design for PlayStation 5 featuring dynamic action photography and bold typography.',
      imageUrl: '/images/graphics/graphic7.png',
      details: {
        client: 'Video Game Publisher',
        year: '2024',
        services: ['Product Design', 'Packaging', 'Typography', 'Photo Editing'],
        challenge: 'Design a compelling game cover that stands out on retail shelves while accurately representing the sports gaming experience.',
        solution: 'Created an eye-catching cover design with dynamic athlete imagery, bold typography, and strategic use of color to attract the target audience.'
      }
    },
    {
      id: 8,
      title: 'Sherman Shadowcats Team Graphics',
      category: 'Team Branding',
      description: 'Mascot-focused team graphics for Sherman Shadowcats featuring custom illustration and typography.',
      imageUrl: '/images/graphics/graphic8.png',
      details: {
        client: 'Sherman High School Athletics',
        year: '2023',
        services: ['Mascot Design', 'Team Graphics', 'Illustration', 'Brand Application'],
        challenge: 'Revitalize the Shadowcats brand with contemporary graphics while respecting the team\'s heritage and traditions.',
        solution: 'Developed a modern interpretation of the Shadowcats mascot with dynamic poses and versatile applications for various team materials.'
      }
    },
    {
      id: 9,
      title: 'Snider Player Feature - Landyn',
      category: 'Player Graphics',
      description: 'Featured player graphic for Snider team athlete Landyn with custom typography and visual effects.',
      imageUrl: '/images/graphics/graphic9.png',
      details: {
        client: 'Snider Athletics Program',
        year: '2024',
        services: ['Player Features', 'Portrait Design', 'Digital Graphics', 'Social Media Content'],
        challenge: 'Create a standout player feature graphic that highlights the athlete\'s personality while maintaining team visual identity.',
        solution: 'Designed a bold player feature with custom lighting effects, dynamic typography, and strategic use of team colors and branding elements.'
      }
    },
    {
      id: 10,
      title: 'Trent Perry Player Highlight',
      category: 'Player Graphics',
      description: 'Dynamic player highlight design for Trent Perry featuring action photography and custom graphic elements.',
      imageUrl: '/images/graphics/graphic10.png',
      details: {
        client: 'College Basketball Program',
        year: '2024',
        services: ['Player Highlights', 'Action Photography', 'Digital Design', 'Brand Integration'],
        challenge: 'Showcase a star player with a graphic that captures both athletic ability and personal brand within team guidelines.',
        solution: 'Created a distinctive player highlight with custom typography, dynamic visual effects, and strategic composition that emphasizes the athlete\'s presence.'
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
