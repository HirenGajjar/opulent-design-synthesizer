
import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Disable default cursor on initial render
    document.body.classList.add('cursor-none');
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, []);
  
  return (
    <div className="relative">
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
