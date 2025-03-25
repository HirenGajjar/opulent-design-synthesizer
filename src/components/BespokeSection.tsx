
import React from 'react';

export function BespokeSection() {
  return (
    <section className="relative">
      <div className="h-screen bg-mercana-charcoal relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 0.6)), url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <p className="text-mercana-gold font-sans uppercase tracking-[0.3em] text-sm mb-4">
            Bespoke Design Service
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight max-w-5xl">
            Meticulously Crafted <br/>For Your Spaces
          </h2>
          <div className="h-px w-24 bg-mercana-gold my-6"></div>
          <p className="text-white/80 max-w-2xl mb-8">
            For those who desire truly unique pieces, our bespoke design service offers the opportunity to collaborate with our master craftsmen and designers to create furniture that is exclusively yours. From initial concept to final creation, we guide you through the journey of bringing your vision to life.
          </p>
          <a href="#" className="bg-mercana-gold text-mercana-charcoal px-8 py-3 uppercase tracking-wider text-sm hover:bg-mercana-gold/90 transition-all duration-300 cursor-pointer">
            Inquire About Bespoke Services
          </a>
        </div>
      </div>
    </section>
  );
}
