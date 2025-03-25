
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';

const Collections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-mercana-charcoal mb-6">Our Collections</h1>
            <p className="text-mercana-charcoal/60 max-w-2xl mx-auto">
              Discover curated collections that embody the pinnacle of furniture design and craftsmanship, each telling a unique story of heritage and innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            {collections.map((collection, index) => (
              <CollectionCard 
                key={collection.title} 
                collection={collection} 
                index={index}
              />
            ))}
          </div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
};

type Collection = {
  title: string;
  description: string;
  imageUrl: string;
  pieces: number;
};

const collections: Collection[] = [
  {
    title: "Artisan Collection",
    description: "Hand-crafted pieces that showcase the finest traditional techniques passed down through generations of master artisans.",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    pieces: 42
  },
  {
    title: "Heritage Collection",
    description: "A timeless collection inspired by classical European design, reimagined with contemporary materials and techniques.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80",
    pieces: 38
  },
  {
    title: "Metropolitan Collection",
    description: "Bold, architectural forms designed for sophisticated urban environments, where luxury meets functionality.",
    imageUrl: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    pieces: 29
  },
  {
    title: "Coastal Collection",
    description: "Serene and refined pieces inspired by the world's most exclusive coastal retreats, crafted for tranquil living.",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    pieces: 34
  },
  {
    title: "Minimalist Collection",
    description: "Pure, essential forms that celebrate premium materials and architectural precision for the discerning minimalist.",
    imageUrl: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    pieces: 26
  }
];

const CollectionCard = ({ collection, index }: { collection: Collection, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: 0.2 + (index * 0.1)
      }}
      className="group"
    >
      <div className="overflow-hidden h-[400px] mb-6 image-shine">
        <img 
          src={collection.imageUrl} 
          alt={collection.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-serif text-mercana-charcoal mb-3">{collection.title}</h3>
      <p className="text-mercana-charcoal/60 mb-4">{collection.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-mercana-gold text-sm">{collection.pieces} Exclusive Pieces</span>
        <a href="#" className="text-mercana-charcoal mercana-underline text-sm cursor-pointer">
          View Collection
        </a>
      </div>
    </motion.div>
  );
};

export default Collections;
