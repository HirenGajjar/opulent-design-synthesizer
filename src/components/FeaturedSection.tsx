
import React, { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={ref} className="mercana-reveal">
      <div className="mercana-reveal-inner" style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  );
}

export function FeaturedSection() {
  return (
    <section id="discover" className="py-24 md:py-32 bg-mercana-cream">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="text-mercana-gold font-sans uppercase tracking-[0.3em] text-sm mb-4">
              Mercana Collections
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-mercana-charcoal mb-6">
              Exquisite Craftsmanship
            </h2>
            <div className="h-px w-24 bg-mercana-gold mx-auto"></div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <Reveal delay={200}>
            <div>
              <div className="overflow-hidden mb-8">
                <div className="image-shine relative aspect-[4/5] bg-mercana-beige">
                  <img 
                    src="https://images.unsplash.com/photo-1599327286062-40b0a7f2b305?q=80&w=1972&auto=format&fit=crop" 
                    alt="Luxury living room furniture" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-serif text-mercana-charcoal mb-2">
                The Artisan Collection
              </h3>
              <p className="text-mercana-charcoal/80 mb-4">
                Handcrafted pieces showcasing exceptional woodworking and traditional joinery techniques.
              </p>
              <a href="#" className="mercana-underline text-mercana-charcoal cursor-pointer">
                Discover Collection
              </a>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div>
              <div className="overflow-hidden mb-8">
                <div className="image-shine relative aspect-[4/5] bg-mercana-beige">
                  <img 
                    src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop" 
                    alt="Modern bedroom design" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-serif text-mercana-charcoal mb-2">
                The Heritage Collection
              </h3>
              <p className="text-mercana-charcoal/80 mb-4">
                Classic designs reimagined with contemporary finishes and proportions.
              </p>
              <a href="#" className="mercana-underline text-mercana-charcoal cursor-pointer">
                Discover Collection
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
