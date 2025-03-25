
import React, { useState, useEffect } from 'react';

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "Mercana's attention to detail surpasses any luxury furniture maker I've encountered. Their bespoke console for our Monaco residence has become the centerpiece of conversations.",
      author: "Elisabeth Rothschild",
      title: "Art Collector",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
    },
    {
      quote: "After furnishing properties worldwide, I can definitively say that Mercana stands alone in their commitment to perfection. Their craftsmen are true artists.",
      author: "Jonathan Harrington",
      title: "Property Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop"
    },
    {
      quote: "The exquisite dining table Mercana created for our Manhattan penthouse exemplifies what true luxury should be—understated excellence with remarkable presence.",
      author: "Victoria Chen",
      title: "Interior Designer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop"
    }
  ];
  
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section className="py-24 md:py-32 bg-mercana-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-mercana-gold font-sans uppercase tracking-[0.3em] text-sm mb-4">
            Client Experiences
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-mercana-charcoal mb-6">
            Testimonials
          </h2>
          <div className="h-px w-24 bg-mercana-gold mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden py-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-1000 absolute w-full ${
                  current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{ 
                  position: current === index ? 'relative' : 'absolute',
                  top: current === index ? '0' : '20px'
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-8">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-2xl font-serif text-mercana-charcoal italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-lg font-serif text-mercana-charcoal font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-mercana-charcoal/70">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-2 cursor-pointer ${
                  current === index ? 'bg-mercana-gold' : 'bg-mercana-charcoal/20'
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
