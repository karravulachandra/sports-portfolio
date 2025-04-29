import React, { useState } from 'react';
import './Sections.css';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Event data with images
  const eventItems = [
    {
      id: 1,
      title: 'Sports Championship Coverage',
      date: 'June 15, 2024',
      location: 'National Stadium, Delhi',
      description: 'Comprehensive coverage of the national sports championship, including interviews with athletes, game highlights, and behind-the-scenes footage.',
      imageUrl: '/images/events/event1.jpg',
      category: 'Championship'
    },
    {
      id: 2,
      title: 'Cricket Tournament Media Day',
      date: 'May 22, 2024',
      location: 'Cricket Stadium, Mumbai',
      description: 'Media day coverage for the international cricket tournament, featuring team introductions, press conferences, and pre-tournament analysis.',
      imageUrl: '/images/events/event2.jpg',
      category: 'Cricket'
    },
    {
      id: 3,
      title: 'Football League Opening Ceremony',
      date: 'April 10, 2024',
      location: 'City Football Ground, Bangalore',
      description: 'Coverage of the opening ceremony for the national football league, including team presentations, entertainment performances, and inaugural match.',
      imageUrl: '/images/events/event3.jpg',
      category: 'Football'
    },
    {
      id: 4,
      title: 'Basketball Tournament Finals',
      date: 'March 28, 2024',
      location: 'Indoor Stadium, Chennai',
      description: 'Live coverage of the basketball tournament finals, with play-by-play commentary, post-game interviews, and trophy ceremony.',
      imageUrl: '/images/events/event4.jpg',
      category: 'Basketball'
    },
    {
      id: 5,
      title: 'Tennis Open Press Conference',
      date: 'February 14, 2024',
      location: 'Tennis Complex, Hyderabad',
      description: 'Coverage of the pre-tournament press conference for the Tennis Open, featuring player interviews and tournament preview.',
      imageUrl: '/images/events/event5.jpg',
      category: 'Tennis'
    },
    {
      id: 6,
      title: 'Olympic Qualifier Event',
      date: 'January 30, 2024',
      location: 'Sports Authority Complex, Pune',
      description: 'Coverage of the Olympic qualifier events, including athlete performances, qualification announcements, and interviews with coaches.',
      imageUrl: '/images/events/event6.jpg',
      category: 'Olympics'
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(eventItems.map(event => event.category))];

  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter events based on active category
  const filteredEvents = activeCategory === 'All'
    ? eventItems
    : eventItems.filter(event => event.category === activeCategory);

  // Open event details
  const openEventDetails = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  // Close event details
  const closeEventDetails = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section events-section" id="events">
      <h2 className="section-title">Event Coverage</h2>
      <div className="section-content">
        <p className="section-description">
          Explore my work covering major sporting events across the country. From championship games to press conferences,
          I bring the excitement and stories of sports events to audiences through professional broadcasting and multimedia coverage.
        </p>

        {/* Event Category Filter */}
        <div className="event-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => openEventDetails(event)}
            >
              <div
                className="event-image"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              >
                <div className="event-overlay">
                  <span className="event-category">{event.category}</span>
                  <span className="event-date">{event.date}</span>
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </p>
                <p className="event-excerpt">{event.description.substring(0, 100)}...</p>
                <button className="event-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Coverage Services */}
        <div className="event-services">
          <h3 className="section-subtitle">Event Coverage Services</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <h4 className="service-title">Live Broadcasting</h4>
              <p className="service-description">
                Professional live broadcasting services for sporting events with real-time commentary and analysis.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h4 className="service-title">Event Photography</h4>
              <p className="service-description">
                High-quality photography services capturing the key moments and atmosphere of sporting events.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-video"></i>
              </div>
              <h4 className="service-title">Video Production</h4>
              <p className="service-description">
                Complete video production services for event highlights, interviews, and promotional content.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <h4 className="service-title">Media Coverage</h4>
              <p className="service-description">
                Comprehensive media coverage including press conferences, interviews, and written content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="event-modal" onClick={closeEventDetails}>
          <div className="event-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeEventDetails}>×</button>

            <div className="event-modal-image">
              <img src={selectedEvent.imageUrl} alt={selectedEvent.title} />
              <div className="event-modal-details-overlay">
                <span className="event-modal-category">{selectedEvent.category}</span>
                <span className="event-modal-date">{selectedEvent.date}</span>
              </div>
            </div>

            <div className="event-modal-details">
              <h2 className="event-modal-title">{selectedEvent.title}</h2>
              <p className="event-modal-location">
                <i className="fas fa-map-marker-alt"></i> {selectedEvent.location}
              </p>
              <div className="event-modal-description">
                <p>{selectedEvent.description}</p>
              </div>

              <div className="event-modal-gallery">
                <h3>Event Gallery</h3>
                <div className="event-gallery-grid">
                  {/* Placeholder for event gallery images */}
                  <div className="gallery-placeholder">
                    <span>Event photos will be displayed here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
