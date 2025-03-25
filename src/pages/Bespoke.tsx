
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';

const Bespoke = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-mercana-charcoal mb-6">Bespoke Services</h1>
            <p className="text-mercana-charcoal/60 max-w-2xl mx-auto">
              The pinnacle of luxury—one-of-a-kind creations meticulously crafted to your exacting specifications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="relative overflow-hidden h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" 
                alt="Bespoke craftsmanship" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-serif text-mercana-gold mb-6">A Legacy of Craftsmanship</h2>
              <p className="text-mercana-charcoal/70 mb-6">
                Mercana's bespoke service represents the culmination of our design expertise and artisanal mastery. Each commission becomes a collaborative journey, where your vision is realized through the hands of our master craftspeople.
              </p>
              <p className="text-mercana-charcoal/70 mb-6">
                From concept to creation, we guide you through a meticulous process that honors traditional techniques while embracing contemporary innovation, resulting in pieces of extraordinary beauty and exceptional quality.
              </p>
              <p className="text-mercana-charcoal/70 mb-8">
                Every bespoke piece carries with it not only the signature of our artisans but becomes an heirloom that tells your unique story—a legacy to be passed through generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-luxury">Begin Your Commission</a>
                <a href="#" className="btn-luxury">View Portfolio</a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif text-mercana-charcoal text-center mb-12">Our Bespoke Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProcessStep 
                number="01"
                title="Consultation"
                description="A private meeting with our design director to discuss your vision, requirements, and the spaces the pieces will inhabit."
                delay={0.7}
              />
              <ProcessStep 
                number="02"
                title="Concept & Design"
                description="Our artisans develop detailed sketches and material selections, refined through collaborative review until perfect."
                delay={0.8}
              />
              <ProcessStep 
                number="03"
                title="Crafting"
                description="Master craftspeople bring the design to life using time-honored techniques and the finest materials from around the world."
                delay={0.9}
              />
              <ProcessStep 
                number="04"
                title="Finishing"
                description="Meticulous attention to detail in the application of finishes, from hand-rubbed patinas to custom lacquers and gilding."
                delay={1.0}
              />
              <ProcessStep 
                number="05"
                title="Installation"
                description="White-glove delivery and placement service ensures each piece is perfectly positioned in its intended environment."
                delay={1.1}
              />
              <ProcessStep 
                number="06"
                title="Legacy"
                description="Documentation of the piece's creation, materials, and care instructions, preserving its story for generations."
                delay={1.2}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1.3 }}
            className="bg-mercana-cream/30 p-12 md:p-16"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif text-mercana-charcoal mb-6">Request a Private Consultation</h2>
              <p className="text-mercana-charcoal/70 mb-8">
                Begin your journey to owning a truly one-of-a-kind Mercana creation. Our bespoke consultants are available to discuss your vision and guide you through the possibilities.
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-mercana-charcoal/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-mercana-charcoal/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                    placeholder="Your Email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-mercana-charcoal/80">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                    placeholder="Your Phone"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm text-mercana-charcoal/80">Area of Interest</label>
                  <select 
                    id="interest" 
                    className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-mercana-cream">Select Interest</option>
                    <option value="furniture" className="bg-mercana-cream">Bespoke Furniture</option>
                    <option value="lighting" className="bg-mercana-cream">Custom Lighting</option>
                    <option value="textiles" className="bg-mercana-cream">Textile Commissions</option>
                    <option value="complete" className="bg-mercana-cream">Complete Environment</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="message" className="text-sm text-mercana-charcoal/80">Your Vision</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                    placeholder="Share details about your project"
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                  <button type="submit" className="btn-luxury">
                    Request Consultation
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
};

const ProcessStep = ({ number, title, description, delay }: { 
  number: string, 
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
      className="p-6 border border-mercana-gold/30 hover:border-mercana-gold transition-colors duration-500"
    >
      <span className="text-5xl font-serif text-mercana-gold/30">{number}</span>
      <h3 className="text-xl font-serif text-mercana-charcoal mt-3 mb-2">{title}</h3>
      <p className="text-mercana-charcoal/60">{description}</p>
    </motion.div>
  );
};

export default Bespoke;
