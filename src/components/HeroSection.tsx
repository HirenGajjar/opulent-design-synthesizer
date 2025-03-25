
import React, { useEffect, useRef } from 'react';

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url("https://images.unsplash.com/photo-1618220179428-22790b485390?q=80&w=2940&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateY(0)'
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="text-mercana-gold font-sans uppercase tracking-[0.3em] text-sm mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Handcrafted Luxury
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight max-w-5xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Exquisite Furniture For The Most Discerning Clientele
        </h1>
        <div className="h-px w-24 bg-mercana-gold my-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}></div>
        <p className="text-white/80 font-sans max-w-xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
          Mercana furniture embodies uncompromising quality, exceptional craftsmanship, and timeless design for those who accept nothing less than perfection.
        </p>
        <a href="#discover" className="border border-mercana-gold text-mercana-gold hover:bg-mercana-gold hover:text-mercana-charcoal px-8 py-3 uppercase tracking-wider text-sm transition-all duration-300 opacity-0 animate-fade-in cursor-pointer" style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
          Explore Collection
        </a>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce slow z-10">
        <a href="#discover" className="text-mercana-gold cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
