
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-mercana-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-mercana-gold mb-6">MERCANA</h3>
            <p className="text-white/60 mb-6">
              Crafting exceptional furniture and décor for the world's most distinguished residences since 1974.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mercana-gold hover:text-white transition-colors duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-mercana-gold hover:text-white transition-colors duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-mercana-gold hover:text-white transition-colors duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-mercana-gold hover:text-white transition-colors duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                  <path d="M19.5 13.5 12 21l-7.5-7.5"></path>
                  <path d="m12 21 7.5-7.5M6.75 16.5l-.75-.75"></path>
                  <path d="M22.5 6c-2 2-4.5 3.5-7.5 4.5v-3A18.97 18.97 0 0 1 9 6l-3 3c1-3 3-5.25 6-6.75"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif mb-6">Collections</h4>
            <ul className="space-y-4">
              {['Artisan', 'Heritage', 'Metropolitan', 'Coastal', 'Minimalist'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
                    {item} Collection
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Craft', 'Bespoke Service', 'Sustainability', 'Private Clients', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-mercana-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/60">
                  25 Royal Boulevard, New York, NY 10001, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-mercana-gold mr-3 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-white/60 hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
                  +1 212 555 1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-mercana-gold mr-3 flex-shrink-0" />
                <a href="mailto:inquiries@mercana.com" className="text-white/60 hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
                  inquiries@mercana.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mercana Furniture & Décor. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 text-sm hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 text-sm hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 text-sm hover:text-mercana-gold transition-colors duration-300 cursor-pointer">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
