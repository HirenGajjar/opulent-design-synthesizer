
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-mercana-charcoal mb-6">Our Heritage</h1>
            <p className="text-mercana-charcoal/60 max-w-2xl mx-auto">
              Since 1974, Mercana has epitomized the quintessence of luxury furnishings and décor, creating environments of unparalleled elegance and sophistication.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-serif text-mercana-gold mb-6">A Legacy of Excellence</h2>
              <p className="text-mercana-charcoal/70 mb-6">
                Founded by acclaimed designer Alessandro Mercana in Milan, our atelier began as a small workshop dedicated to creating furniture of exceptional quality for Europe's most discerning clientele.
              </p>
              <p className="text-mercana-charcoal/70 mb-6">
                Over five decades, we have expanded our vision while maintaining our commitment to impeccable craftsmanship, becoming the definitive resource for those who demand nothing less than perfection in their living environments.
              </p>
              <p className="text-mercana-charcoal/70">
                Today, Mercana continues to honor its founding principles while embracing innovation, sustainable practices, and global design influences that resonate with modern sensibilities.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
              className="relative overflow-hidden h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1603512700487-ca73a86157bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Mercana heritage" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
            className="bg-mercana-cream/30 p-12 md:p-16 mb-24"
          >
            <h2 className="text-3xl font-serif text-mercana-charcoal text-center mb-12">Our Ethos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <EthosCard 
                title="Timeless Design"
                description="We create pieces that transcend trends, designed to become cherished heirlooms that appreciate in beauty and value with the passage of time."
                delay={0.7}
              />
              <EthosCard 
                title="Artisanal Excellence"
                description="Our master craftspeople employ techniques passed down through generations, combining traditional methods with contemporary precision."
                delay={0.8}
              />
              <EthosCard 
                title="Material Integrity"
                description="We source only the finest materials from around the world, selecting each element for its exceptional quality, provenance, and sustainability."
                delay={0.9}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif text-mercana-charcoal text-center mb-12">Our Ateliers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AtelierCard 
                location="Milan, Italy"
                description="Our founding workshop where traditional Italian craftsmanship meets contemporary design sensibilities. Specializing in fine wood furniture and bespoke case goods."
                imageUrl="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                index={0}
              />
              <AtelierCard 
                location="Paris, France"
                description="Dedicated to the art of upholstery and textile innovation, our Paris atelier blends classic French elegance with avant-garde approaches to comfort and form."
                imageUrl="https://images.unsplash.com/photo-1574159123367-d68bbaec5e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                index={1}
              />
              <AtelierCard 
                location="New York, USA"
                description="Our American flagship combines European craftsmanship with American innovation, housing our design studio and client consultation spaces."
                imageUrl="https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                index={2}
              />
              <AtelierCard 
                location="Kyoto, Japan"
                description="Celebrating the dialogue between Eastern and Western design traditions, our Kyoto workshop specializes in fine woodworking and lacquer techniques."
                imageUrl="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                index={3}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 1.0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-serif text-mercana-charcoal mb-6">Our Leadership</h2>
            <p className="text-mercana-charcoal/70 mb-12">
              Guided by visionaries who honor our heritage while embracing the future of luxury design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <LeaderCard 
                name="Sofia Mercana"
                title="Creative Director"
                imageUrl="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                index={0}
              />
              <LeaderCard 
                name="Marcus Chen"
                title="CEO"
                imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                index={1}
              />
              <LeaderCard 
                name="Isabelle Laurent"
                title="Chief of Design"
                imageUrl="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                index={2}
              />
            </div>
            <a href="#" className="btn-luxury inline-block">Our Full Team</a>
          </motion.div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
};

const EthosCard = ({ title, description, delay }: { 
  title: string, 
  description: string,
  delay: number
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: delay
      }}
      className="text-center"
    >
      <h3 className="text-xl font-serif text-mercana-charcoal mb-4">{title}</h3>
      <p className="text-mercana-charcoal/70">{description}</p>
    </motion.div>
  );
};

const AtelierCard = ({ location, description, imageUrl, index }: { 
  location: string, 
  description: string, 
  imageUrl: string,
  index: number
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: 0.9 + (index * 0.1)
      }}
      className="group"
    >
      <div className="overflow-hidden h-[250px] mb-4 image-shine">
        <img 
          src={imageUrl} 
          alt={location} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-serif text-mercana-charcoal mb-2">{location}</h3>
      <p className="text-mercana-charcoal/60">{description}</p>
    </motion.div>
  );
};

const LeaderCard = ({ name, title, imageUrl, index }: {
  name: string,
  title: string,
  imageUrl: string,
  index: number
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.19, 1, 0.22, 1],
        delay: 1.1 + (index * 0.1)
      }}
      className="text-center"
    >
      <div className="overflow-hidden h-[180px] w-[180px] rounded-full mx-auto mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-serif text-mercana-charcoal mb-1">{name}</h3>
      <p className="text-mercana-gold text-sm">{title}</p>
    </motion.div>
  );
};

export default About;
