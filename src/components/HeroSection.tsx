
import React, { useEffect, useRef, useState } from 'react';

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && sectionRef.current) {
        const offset = window.scrollY;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        
        if (offset >= sectionTop && offset <= sectionTop + sectionHeight) {
          const relativeScroll = offset - sectionTop;
          parallaxRef.current.style.transform = `translateY(${relativeScroll * 0.25}px)`;
          setScrollPosition(relativeScroll / sectionHeight);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url("https://images.unsplash.com/photo-1618220179428-22790b485390?q=80&w=2940&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateY(0)',
          transition: 'transform 0.05s linear'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-mercana-black/10 via-transparent to-mercana-black/70 z-[1]"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="text-mercana-gold font-sans uppercase tracking-[0.3em] text-sm mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Handcrafted Luxury
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-cormorant text-white leading-tight max-w-5xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards', letterSpacing: '0.05em' }}>
          Exquisite Furniture For The Most Discerning Clientele
        </h1>
        <div className="h-px w-24 bg-mercana-gold my-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}></div>
        <p className="text-white/80 font-sans max-w-xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
          Mercana furniture embodies uncompromising quality, exceptional craftsmanship, and timeless design for those who accept nothing less than perfection.
        </p>
        <a href="#discover" className="btn-luxury opacity-0 animate-fade-in cursor-pointer" style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}>
          Explore Collection
        </a>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce slow z-10" style={{ animationDuration: '3s' }}>
        <a href="#discover" className="text-mercana-gold cursor-pointer" data-cursor="expand">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
      
      {/* Elegant side elements */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-mercana-gold/0 via-mercana-gold/20 to-mercana-gold/0 z-10"></div>
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-mercana-gold/0 via-mercana-gold/20 to-mercana-gold/0 z-10"></div>
    </section>
  );
}
