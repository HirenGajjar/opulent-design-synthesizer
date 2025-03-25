
import React, { useEffect, useRef } from 'react';

export function CraftSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-24 md:py-32 bg-mercana-beige">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-mercana-gold font-sans uppercase tracking-[0.3em] text-sm mb-4">
              The Mercana Process
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-mercana-charcoal mb-8 leading-tight">
              Masterful Craftsmanship in Every Detail
            </h2>
            <p className="text-mercana-charcoal/80 mb-8">
              Each Mercana piece is meticulously crafted by our master artisans, whose expertise has been refined over generations. We uphold time-honored techniques while embracing innovative approaches to create furniture that is both a functional masterpiece and a legacy investment.
            </p>
            <p className="text-mercana-charcoal/80 mb-8">
              Our commitment to excellence is evident in every joint, finish, and detail. We source only the most exquisite materials from around the world - rare woods, heirloom-quality metals, and custom-developed textiles that meet our uncompromising standards.
            </p>
            <a href="#" className="mercana-underline text-mercana-charcoal text-lg cursor-pointer">
              Discover Our Craft
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden bg-mercana-charcoal">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                src="https://mazwai.com/videvo_files/video/free/2015-09/small_watermarked/simon_ritzmann_venice_gondola_clip_preview.mp4"
                poster="https://images.unsplash.com/photo-1517705169489-dd8b77a4f459?q=80&w=2940&auto=format&fit=crop"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-mercana-gold text-mercana-charcoal p-6 max-w-[200px]">
              <p className="font-serif text-lg">Over 50 years of exceptional craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
