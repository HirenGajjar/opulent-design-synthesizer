
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';

const Lighting = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-mercana-charcoal mb-6">Lighting</h1>
            <p className="text-mercana-charcoal/60 max-w-2xl mx-auto">
              Illumination redefined through exceptional craftsmanship and innovative design, creating atmosphere and presence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-serif text-mercana-gold mb-6">A Study in Light and Form</h2>
              <p className="text-mercana-charcoal/70 mb-6">
                Mercana lighting transcends mere functionality, embodying art pieces that transform spaces through their interaction with light and shadow. Every creation is a statement of design excellence and material innovation.
              </p>
              <p className="text-mercana-charcoal/70 mb-8">
                Our lighting collections span from architectural minimalism to ornate sculptural forms, each piece meticulously crafted to create the perfect luminous atmosphere while serving as a visual centerpiece.
              </p>
              <a href="#" className="btn-luxury self-start">Explore Collections</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
              className="overflow-hidden image-shine"
            >
              <img 
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Luxury lighting" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif text-mercana-charcoal mb-12 text-center">Feature Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {lightingItems.map((item, index) => (
                <LightingCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
            className="bg-mercana-cream/30 p-12 md:p-16"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-serif text-mercana-charcoal mb-6">Custom Lighting Services</h2>
                <p className="text-mercana-charcoal/70 mb-6">
                  Mercana's bespoke lighting service creates unique pieces tailored to your environment and vision. Our artisans collaborate directly with clients and their designers to realize luminous works of art that perfectly complement architectural spaces.
                </p>
                <a href="#" className="btn-luxury">Schedule Consultation</a>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1546877625-cb8c71916608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Custom lighting service" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
};

type LightingItem = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  type: string;
  dimensions: string;
  availability: 'In Stock' | 'Made to Order' | 'Limited Edition';
};

const lightingItems: LightingItem[] = [
  {
    name: "Aurora Pendant",
    description: "Suspended sculptural form in mouth-blown glass with brass accents and dimmable LED.",
    price: "$7,200",
    imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    type: "Pendant",
    dimensions: "D28\" x H42\"",
    availability: "In Stock"
  },
  {
    name: "Helios Floor Lamp",
    description: "Articulating floor lamp in patinated bronze with adjustable alabaster diffuser.",
    price: "$9,450",
    imageUrl: "https://images.unsplash.com/photo-1573005055919-0e736b71fdb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    type: "Floor Lamp",
    dimensions: "W18\" x D22\" x H67\"",
    availability: "Made to Order"
  },
  {
    name: "Lumina Chandelier",
    description: "Geometric crystal and hand-finished brass chandelier with customizable configuration.",
    price: "$16,800",
    imageUrl: "https://images.unsplash.com/photo-1543330266-3e769b45018d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "Chandelier",
    dimensions: "D40\" x H28\"",
    availability: "Limited Edition"
  }
];

const LightingCard = ({ item, index }: { item: LightingItem, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: 0.7 + (index * 0.1)
      }}
      className="group"
    >
      <div className="overflow-hidden h-[350px] mb-6 image-shine">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-serif text-mercana-charcoal">{item.name}</h3>
        <span className="text-mercana-gold font-medium">{item.price}</span>
      </div>
      <p className="text-mercana-charcoal/60 text-sm mb-4">{item.description}</p>
      <div className="flex justify-between items-center text-sm">
        <div className="text-mercana-charcoal/70">
          <p>{item.type} · {item.dimensions}</p>
          <p className={`text-xs mt-1 ${
            item.availability === 'In Stock' ? 'text-green-700' : 
            item.availability === 'Made to Order' ? 'text-blue-700' : 
            'text-amber-700'
          }`}>
            {item.availability}
          </p>
        </div>
        <a href="#" className="text-mercana-charcoal mercana-underline text-sm cursor-pointer">
          View Details
        </a>
      </div>
    </motion.div>
  );
};

export default Lighting;
