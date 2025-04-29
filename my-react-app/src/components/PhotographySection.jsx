import React, { useState } from 'react';
import './Sections.css';

const PhotographySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sports images with categories and descriptions
  const sportsImages = [
    {
      id: 1,
      title: 'Action Shot - Basketball',
      category: 'Action Shots',
      description: 'Dynamic moment captured during a high-stakes basketball game',
      imageUrl: '/images/sports/sport1.jpg'
    },
    {
      id: 2,
      title: 'Football Intensity',
      category: 'Action Shots',
      description: 'The intensity and focus of athletes during a crucial football match',
      imageUrl: '/images/sports/sport2.jpg'
    },
    {
      id: 3,
      title: 'Game Day Atmosphere',
      category: 'Game Day',
      description: 'The electric atmosphere of a packed stadium on game day',
      imageUrl: '/images/sports/sport3.jpg'
    },
    {
      id: 4,
      title: 'Decisive Moment',
      category: 'Action Shots',
      description: 'Capturing the decisive moment that changed the course of the game',
      imageUrl: '/images/sports/sport4.jpg'
    },
    {
      id: 5,
      title: 'Athlete in Motion',
      category: 'Action Shots',
      description: 'The grace and power of an athlete in full motion',
      imageUrl: '/images/sports/sport5.jpg'
    },
    {
      id: 6,
      title: 'Team Celebration',
      category: 'Championship Moments',
      description: 'The joy of victory as the team celebrates their achievement',
      imageUrl: '/images/sports/sport6.jpg'
    },
    {
      id: 7,
      title: 'Sideline Intensity',
      category: 'Behind the Scenes',
      description: 'The intensity on the sidelines as coaches and players strategize',
      imageUrl: '/images/sports/sport7.jpg'
    },
    {
      id: 8,
      title: 'Fan Excitement',
      category: 'Game Day',
      description: 'The passion and excitement of fans supporting their team',
      imageUrl: '/images/sports/sport8.jpg'
    },
    {
      id: 9,
      title: 'Athletic Determination',
      category: 'Action Shots',
      description: 'The determination and focus required to excel in sports',
      imageUrl: '/images/sports/sport9.jpg'
    },
    {
      id: 10,
      title: 'Championship Moment',
      category: 'Championship Moments',
      description: 'The culmination of hard work and dedication in a championship victory',
      imageUrl: '/images/sports/sport10.jpg'
    },
    {
      id: 11,
      title: 'Team Spirit',
      category: 'Behind the Scenes',
      description: 'The camaraderie and team spirit that drives success in sports',
      imageUrl: '/images/sports/sport11.jpg'
    },
    {
      id: 12,
      title: 'Crowd Energy',
      category: 'Game Day',
      description: 'The energy of the crowd creating an unforgettable atmosphere',
      imageUrl: '/images/sports/sport12.jpg'
    }
  ];

  // Get unique categories
  const categories = [...new Set(sportsImages.map(img => img.category))];

  // Open image in lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section photography-section" id="photography">
      <h2 className="section-title">Photography</h2>
      <div className="section-content">
        <p className="section-description">
          View my sports photography portfolio capturing the most exciting and dynamic moments in sports.
          From action shots to behind-the-scenes glimpses, these images tell the story of athletic excellence and competitive spirit.
        </p>

        {/* Category Navigation */}
        <div className="photo-categories">
          {categories.map(category => (
            <button
              key={category}
              className="category-button"
              onClick={() => {
                document.getElementById(category.replace(/\s+/g, '-')).scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Gallery by Category */}
        {categories.map(category => (
          <div key={category} className="photo-category-section" id={category.replace(/\s+/g, '-')}>
            <h3 className="section-subtitle">{category}</h3>
            <div className="photo-grid">
              {sportsImages
                .filter(img => img.category === category)
                .map(image => (
                  <div
                    key={image.id}
                    className="photo-item"
                    onClick={() => openLightbox(image)}
                  >
                    <div
                      className="photo-thumbnail"
                      style={{
                        backgroundImage: `url(${image.imageUrl})`,
                      }}
                    >
                      <div className="photo-overlay">
                        <h4 className="photo-title">{image.title}</h4>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.imageUrl} alt={selectedImage.title} className="lightbox-image" />
            <div className="lightbox-details">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-description">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotographySection;
