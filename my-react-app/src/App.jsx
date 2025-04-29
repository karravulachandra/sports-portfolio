import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import BroadcastSection from './components/BroadcastSection'
import PhotographySection from './components/PhotographySection'
import VideographySection from './components/VideographySection'
import GraphicDesignSection from './components/GraphicDesignSection'
import EventsSection from './components/EventsSection'
import ContactSection from './components/ContactSection'
import SectionDivider from './components/SectionDivider'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('broadcast')

  // Implement smooth scrolling
  useEffect(() => {
    // Smooth scroll to section when activeSection changes
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Add smooth scrolling to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });

          // Update active section if it's one of our main sections
          if (['broadcast', 'photography', 'videography', 'graphics', 'events'].includes(targetId)) {
            setActiveSection(targetId);
          }
        }
      }
    };

    internalLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      internalLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, [activeSection]);

  return (
    <div className="app">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <BroadcastSection />
        <SectionDivider type="wave" />
        <PhotographySection />
        <SectionDivider type="angle" />
        <VideographySection />
        <SectionDivider type="wave" />
        <GraphicDesignSection />
        <SectionDivider type="angle" />
        <EventsSection />
        <SectionDivider type="wave" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
