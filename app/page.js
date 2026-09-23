'use client';
import { useState, useEffect } from 'react';
import Cover from '../components/Cover';
import Hero from '../components/Hero';
import MeetCouple from '../components/MeetCouple';
import Story from '../components/Story';
import Events from '../components/Events';
import Countdown from '../components/Countdown';
import Gallery from '../components/Gallery';
import Wishes from '../components/Wishes';
import Venue from '../components/Venue';
import MusicToggle from '../components/MusicToggle';
import Footer from '../components/Footer';
import { OrnamentalDivider } from '../components/Decorations';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCover, setShowCover] = useState(true);

  // Scroll-triggered reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll('.reveal').forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    // Remove cover overlay from DOM after 1.2s door sliding transition
    setTimeout(() => {
      setShowCover(false);
    }, 1250);
  };

  return (
    <main style={{ position: 'relative' }}>
      {showCover && <Cover onOpen={handleOpen} />}

      <MusicToggle autoStart={isOpen} />
      <Hero />
      <OrnamentalDivider />
      <Countdown />
      <OrnamentalDivider />
      <MeetCouple />
      <OrnamentalDivider />
      <Story />
      <OrnamentalDivider />
      <Gallery />
      <OrnamentalDivider />
      <Events />
      <OrnamentalDivider />
      <Wishes />
      <Venue />
      <Footer />
    </main>
  );
}
