import React, { useState, useEffect, useRef } from 'react';
import './Sections.css';

const BroadcastSection = () => {
  // Refs for elements that will be animated
  const sectionTitleRef = useRef(null);
  const sectionDescriptionRef = useRef(null);
  const videoGridRef = useRef(null);
  const videoItemRefs = useRef([]);
  const sectionSubtitleRefs = useRef([]);
  const itemsGridRef = useRef(null);
  const itemCardRefs = useRef([]);
  const ctaRef = useRef(null);

  // Set up intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements that need animations
    if (sectionTitleRef.current) observer.observe(sectionTitleRef.current);
    if (sectionDescriptionRef.current) observer.observe(sectionDescriptionRef.current);
    if (videoGridRef.current) observer.observe(videoGridRef.current);
    if (itemsGridRef.current) observer.observe(itemsGridRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    videoItemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    sectionSubtitleRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    itemCardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Featured YouTube videos with the specific videos provided
  const featuredVideos = [
    {
      id: 1,
      title: 'Siddartha Manubothu - Sports Reporting Demo Reel',
      description: 'A showcase of my sports reporting work covering various sporting events and interviews with athletes.',
      embedId: 'JhRjDT5KNRY',
      thumbnail: '/images/sports/sport1.jpg'
    },
    {
      id: 2,
      title: 'Siddartha Manubothu - On-Air Talent Demo',
      description: 'Highlights of my on-air broadcasting work including live game coverage and studio analysis.',
      embedId: '3T766dyF-Dc',
      thumbnail: '/images/sports/sport2.jpg'
    },
    {
      id: 3,
      title: 'Cricket Match Analysis - IPL Finals',
      description: 'In-depth analysis of the recent cricket match between Mumbai Indians and Chennai Super Kings in the IPL finals.',
      embedId: 'JhRjDT5KNRY',
      thumbnail: '/images/sports/sport3.jpg'
    },
    {
      id: 4,
      title: 'Football Pre-Game Show - National Championship',
      description: 'Hosting the pre-game show for the national football championship with expert insights and predictions.',
      embedId: '3T766dyF-Dc',
      thumbnail: '/images/sports/sport4.jpg'
    }
  ];

  // Other broadcast items using sports images
  const broadcastItems = [
    {
      id: 1,
      title: 'Game Day Coverage',
      description: 'Live reporting from championship games, providing play-by-play commentary and real-time analysis of key moments.',
      imageUrl: '/images/sports/sport1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=JhRjDT5KNRY'
    },
    {
      id: 2,
      title: 'Player Interview Series',
      description: 'In-depth interviews with star athletes, exploring their careers, training regimens, and perspectives on the sport.',
      imageUrl: '/images/sports/sport7.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=3T766dyF-Dc'
    },
    {
      id: 3,
      title: 'Sports Analysis Show',
      description: 'Breaking down game strategies, player performances, and upcoming matchups with expert insights and statistical analysis.',
      imageUrl: '/images/sports/sport10.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=JhRjDT5KNRY'
    },
    {
      id: 4,
      title: 'Cricket Tournament Coverage',
      description: 'Comprehensive coverage of the international cricket tournament, including match highlights and expert commentary.',
      imageUrl: '/images/sports/sport5.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=3T766dyF-Dc'
    },
    {
      id: 5,
      title: 'Sports Documentary Series',
      description: 'Hosting a documentary series exploring the stories behind legendary sports moments and athletes.',
      imageUrl: '/images/sports/sport8.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=JhRjDT5KNRY'
    }
  ];

  // Broadcast experience items
  const experienceItems = [
    {
      id: 1,
      title: 'Lead Sports Anchor',
      organization: 'WKRN Sports Network',
      period: '2022 - Present',
      description: 'Serve as the primary anchor for daily sports broadcasts, covering major sporting events and breaking news.'
    },
    {
      id: 2,
      title: 'Sideline Reporter',
      organization: 'College Sports Network',
      period: '2020 - 2022',
      description: 'Provided live sideline coverage and player interviews for college football and basketball games.'
    },
    {
      id: 3,
      title: 'Sports Analyst',
      organization: 'The Morning Sports Show',
      period: '2019 - 2020',
      description: 'Delivered in-depth analysis and commentary on current sports topics and game predictions.'
    }
  ];

  return (
    <section className="section broadcast-section" id="broadcast">
      <h2 className="section-title" ref={sectionTitleRef} data-text="On-Air">On-Air</h2>
      <div className="section-content">
        <p className="section-description" ref={sectionDescriptionRef}>
          As a sports broadcaster and on-air talent, I bring energy and insight to every segment. My work spans from live game coverage and sideline reporting to in-studio analysis and athlete interviews.
        </p>

        {/* Featured Videos Section */}
        <h3 className="section-subtitle" ref={el => sectionSubtitleRefs.current[0] = el}>Demo Reels</h3>
        <div className="video-grid" ref={videoGridRef}>
          {featuredVideos.map((video, index) => (
            <div
              key={video.id}
              className="video-item card"
              ref={el => videoItemRefs.current[index] = el}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-meta">
                  <span className="video-views"><i className="fas fa-eye"></i> 12.5K views</span>
                  <span className="video-date"><i className="fas fa-calendar-alt"></i> Apr 2024</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Broadcast Experience */}
        <div className="broadcast-experience">
          <h3 className="section-subtitle" ref={el => sectionSubtitleRefs.current[1] = el}>On-Air Experience</h3>
          <div className="experience-timeline">
            {experienceItems.map((item, index) => (
              <div
                key={item.id}
                className="experience-item"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="experience-marker"></div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h4 className="experience-title">{item.title}</h4>
                    <span className="experience-period">{item.period}</span>
                  </div>
                  <h5 className="experience-organization">{item.organization}</h5>
                  <p className="experience-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Broadcast Work */}
        <h3 className="section-subtitle" ref={el => sectionSubtitleRefs.current[2] = el}>Featured Segments</h3>
        <div className="items-grid" ref={itemsGridRef}>
          {broadcastItems.map((item, index) => (
            <div
              key={item.id}
              className="item-card card"
              ref={el => itemCardRefs.current[index] = el}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="item-badge">Featured</div>
              <div
                className="item-placeholder"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '220px'
                }}
              >
                <div className="item-overlay">
                  <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="play-button">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-meta">
                  <span className="item-date"><i className="fas fa-calendar-alt"></i> Apr 2024</span>
                  <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="item-link">
                    Watch Segment <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="broadcast-cta" ref={ctaRef}>
          <div className="cta-content">
            <h3>Looking for a sports broadcaster for your next event?</h3>
            <p>I'm available for game coverage, interviews, and sports commentary. Let's create memorable sports content together!</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn primary">
                Get in Touch <i className="fas fa-envelope"></i>
              </a>
              <a href="#events" className="btn btn-outline">
                View Events <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="cta-image">
            <img src="/images/sports/sport1.jpg" alt="Siddartha Manubothu broadcasting" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadcastSection;
