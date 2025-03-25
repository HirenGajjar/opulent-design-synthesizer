
import React, { useEffect, useState } from 'react';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedSection } from '@/components/FeaturedSection';
import { ProductSpotlight } from '@/components/ProductSpotlight';
import { CraftSection } from '@/components/CraftSection';
import { BespokeSection } from '@/components/BespokeSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  
  useEffect(() => {
    // Disable default cursor on initial render
    document.body.classList.add('cursor-none');
    
    // Add scroll reveal for luxury elements
    const scrollReveal = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Initial check
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('cursor-none');
      window.removeEventListener('scroll', scrollReveal);
    };
  }, []);
  
  const toggleAudio = () => {
    setAudioEnabled(prev => !prev);
  };
  
  return (
    <div className="relative">
      {/* Background ambient music (optional, starts muted) */}
      {audioEnabled && (
        <audio 
          src="https://assets.mixkit.co/music/preview/mixkit-relaxed-at-home-background-music-527.mp3" 
          autoPlay 
          loop 
          className="hidden"
        />
      )}
      
      {/* Audio control button */}
      <button 
        onClick={toggleAudio}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-mercana-black/30 backdrop-blur-md flex items-center justify-center border border-mercana-gold/30 text-mercana-gold hover:bg-mercana-gold/10 transition-all duration-500 cursor-pointer"
      >
        {audioEnabled ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        )}
      </button>
      
      {/* Custom cursor for desktop */}
      <CustomCursor />
      
      {/* Loading screen */}
      <LoadingScreen />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <FeaturedSection />
        <ProductSpotlight />
        <CraftSection />
        <BespokeSection />
        <TestimonialSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
