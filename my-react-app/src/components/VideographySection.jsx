import React, { useState } from 'react';
import './Sections.css';

const VideographySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Featured videos with sports content
  const featuredVideos = [
    {
      id: 1,
      title: 'Championship Game Highlights',
      category: 'highlights',
      description: 'Highlights from the championship game showcasing the most exciting moments and plays.',
      thumbnailUrl: '/images/sports/sport1.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'June 15, 2024'
    },
    {
      id: 2,
      title: 'Behind the Scenes: Training Day',
      category: 'documentary',
      description: 'An exclusive look at how athletes prepare for major competitions with intense training sessions.',
      thumbnailUrl: '/images/sports/sport7.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'May 22, 2024'
    },
    {
      id: 3,
      title: 'Player Profile: Rising Stars',
      category: 'documentary',
      description: 'In-depth profiles of emerging talents in the sports world and their journey to success.',
      thumbnailUrl: '/images/sports/sport11.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'April 10, 2024'
    },
    {
      id: 4,
      title: 'Tournament Recap',
      category: 'highlights',
      description: 'A comprehensive recap of the entire tournament with key moments and analysis.',
      thumbnailUrl: '/images/sports/sport12.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'March 28, 2024'
    },
    {
      id: 5,
      title: 'Game Day Experience',
      category: 'event',
      description: 'Experience the excitement and atmosphere of game day from arrival to final whistle.',
      thumbnailUrl: '/images/sports/sport3.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'February 14, 2024'
    },
    {
      id: 6,
      title: 'Cinematic Sports Montage',
      category: 'creative',
      description: 'A cinematic compilation of sports moments captured with artistic cinematography.',
      thumbnailUrl: '/images/sports/sport6.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'January 30, 2024'
    }
  ];

  // Video categories
  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'documentary', label: 'Documentaries' },
    { id: 'event', label: 'Event Coverage' },
    { id: 'creative', label: 'Creative Work' }
  ];

  // Filter videos based on active category
  const filteredVideos = activeCategory === 'all'
    ? featuredVideos
    : featuredVideos.filter(video => video.category === activeCategory);

  return (
    <section className="section videography-section" id="videography">
      <h2 className="section-title">Videography</h2>
      <div className="section-content">
        <p className="section-description">
          My sports videography captures the energy, emotion, and excitement of athletic competition.
          From dynamic highlights to in-depth documentaries, each video tells a compelling story about the world of sports.
        </p>

        {/* Video Category Filter */}
        <div className="video-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Video Grid */}
        <div className="video-featured-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail" style={{ backgroundImage: `url(${video.thumbnailUrl})` }}>
                <div className="video-play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="video-content">
                <span className="video-date">{video.date}</span>
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="video-link">
                  Watch Video <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Production Services */}
        <div className="video-services">
          <h3 className="section-subtitle">Video Production Services</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-video"></i>
              </div>
              <h4 className="service-title">Game Coverage</h4>
              <p className="service-description">
                Professional coverage of sporting events with multiple camera angles and dynamic editing.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-film"></i>
              </div>
              <h4 className="service-title">Highlight Reels</h4>
              <p className="service-description">
                Compelling highlight packages that showcase the best moments and plays.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-user"></i>
              </div>
              <h4 className="service-title">Athlete Profiles</h4>
              <p className="service-description">
                In-depth video profiles that tell the stories of athletes and their journeys.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h4 className="service-title">Cinematic Sports Films</h4>
              <p className="service-description">
                Artistic sports films with cinematic quality and storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideographySection;
