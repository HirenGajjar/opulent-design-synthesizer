
import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for contacting Mercana. A representative will be in touch shortly.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-mercana-charcoal mb-6">Contact Us</h1>
            <p className="text-mercana-charcoal/60 max-w-2xl mx-auto">
              Our team of dedicated consultants is available to assist with inquiries about our collections, services, and private appointments.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif text-mercana-gold mb-8">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-mercana-charcoal/80">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-mercana-charcoal/80">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-mercana-charcoal/80">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                      placeholder="Your Phone (Optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-mercana-charcoal/80">Subject</label>
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-mercana-cream">Select Subject</option>
                      <option value="general" className="bg-mercana-cream">General Inquiry</option>
                      <option value="collection" className="bg-mercana-cream">Collection Information</option>
                      <option value="appointment" className="bg-mercana-cream">Showroom Appointment</option>
                      <option value="bespoke" className="bg-mercana-cream">Bespoke Commission</option>
                      <option value="career" className="bg-mercana-cream">Career Opportunities</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-mercana-charcoal/80">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5} 
                    className="w-full border-b border-mercana-charcoal/30 bg-transparent px-0 py-2 focus:outline-none focus:border-mercana-gold transition-colors" 
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    required
                    className="border-mercana-charcoal/50 rounded text-mercana-gold focus:ring-mercana-gold"
                  />
                  <label htmlFor="privacy" className="text-sm text-mercana-charcoal/70">
                    I acknowledge Mercana's privacy policy and consent to the processing of my data.
                  </label>
                </div>
                
                <button type="submit" className="btn-luxury">
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
            >
              <div className="h-[300px] mb-10 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80" 
                  alt="Mercana showroom" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-serif text-mercana-charcoal mb-6">Global Headquarters</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin size={20} className="text-mercana-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-mercana-charcoal">25 Royal Boulevard</p>
                    <p className="text-mercana-charcoal">New York, NY 10001</p>
                    <p className="text-mercana-charcoal">United States</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone size={20} className="text-mercana-gold mr-4 flex-shrink-0" />
                  <a href="tel:+12125551234" className="text-mercana-charcoal hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
                    +1 212 555 1234
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail size={20} className="text-mercana-gold mr-4 flex-shrink-0" />
                  <a href="mailto:inquiries@mercana.com" className="text-mercana-charcoal hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
                    inquiries@mercana.com
                  </a>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="text-mercana-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-mercana-charcoal">Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p className="text-mercana-charcoal">Saturday: 11:00 AM - 5:00 PM</p>
                    <p className="text-mercana-charcoal">Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-mercana-charcoal mb-6">International Showrooms</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-mercana-charcoal mb-2">Milan</h4>
                  <p className="text-mercana-charcoal/70 mb-1">Via Montenapoleone, 8</p>
                  <p className="text-mercana-charcoal/70">+39 02 1234 5678</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-mercana-charcoal mb-2">Paris</h4>
                  <p className="text-mercana-charcoal/70 mb-1">12 Avenue Montaigne</p>
                  <p className="text-mercana-charcoal/70">+33 1 23 45 67 89</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-mercana-charcoal mb-2">London</h4>
                  <p className="text-mercana-charcoal/70 mb-1">18 Mount Street, Mayfair</p>
                  <p className="text-mercana-charcoal/70">+44 20 1234 5678</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-mercana-charcoal mb-2">Dubai</h4>
                  <p className="text-mercana-charcoal/70 mb-1">Dubai Design District, Building 7</p>
                  <p className="text-mercana-charcoal/70">+971 4 123 4567</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif text-mercana-charcoal text-center mb-12">Private Client Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ServiceCard 
                title="Exclusive Showroom Access"
                description="Schedule a private viewing of our collections with a dedicated consultant outside regular hours."
                link="#"
                linkText="Request Access"
                delay={0.7}
              />
              <ServiceCard 
                title="Design Consultation"
                description="Benefit from our design team's expertise for your residence or project with tailored recommendations."
                link="#"
                linkText="Book Consultation"
                delay={0.8}
              />
              <ServiceCard 
                title="White Glove Delivery"
                description="Our premium installation service ensures perfect placement and setup of your Mercana pieces."
                link="#"
                linkText="Learn More"
                delay={0.9}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1.0 }}
            className="bg-mercana-cream/30 p-10 md:p-14"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif text-mercana-charcoal mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-mercana-charcoal/70 mb-8">
                Be the first to receive updates on new collections, invitations to exclusive events, and insights from the world of luxury design.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-grow border-b border-mercana-charcoal/30 bg-transparent px-4 py-2 focus:outline-none focus:border-mercana-gold transition-colors"
                  required
                />
                <button type="submit" className="btn-luxury whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
};

const ServiceCard = ({ title, description, link, linkText, delay }: { 
  title: string, 
  description: string,
  link: string,
  linkText: string,
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
      className="text-center p-6 border border-mercana-gold/30 hover:border-mercana-gold transition-colors duration-500 flex flex-col h-full"
    >
      <h3 className="text-xl font-serif text-mercana-charcoal mb-4">{title}</h3>
      <p className="text-mercana-charcoal/70 mb-6 flex-grow">{description}</p>
      <a href={link} className="text-mercana-gold mercana-underline text-sm cursor-pointer self-center">
        {linkText}
      </a>
    </motion.div>
  );
};

export default Contact;
