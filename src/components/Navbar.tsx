
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-2 bg-mercana-charcoal/80 backdrop-blur-md' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button className="cursor-pointer text-mercana-gold" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} className="cursor-pointer" />
          </button>
          
          <Link to="/" className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-serif tracking-widest text-mercana-gold transition-all duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-100'
            }`}>
              MERCANA
            </h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <button className="cursor-pointer text-mercana-gold">
              <Search size={20} className="cursor-pointer" />
            </button>
            <button className="cursor-pointer text-mercana-gold">
              <User size={20} className="cursor-pointer" />
            </button>
            <button className="cursor-pointer text-mercana-gold">
              <ShoppingCart size={20} className="cursor-pointer" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Full screen menu */}
      <div className={`fixed inset-0 z-50 bg-mercana-charcoal transition-transform duration-700 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="container mx-auto px-6 h-full flex flex-col">
          <div className="py-6 flex items-center justify-between">
            <div className="invisible">
              <Menu size={24} />
            </div>
            
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-serif tracking-widest text-mercana-gold">
                MERCANA
              </h1>
            </Link>
            
            <button className="cursor-pointer text-mercana-gold" onClick={() => setIsMenuOpen(false)}>
              <X size={24} className="cursor-pointer" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <nav className="text-center">
              <ul className="space-y-8">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Collections', path: '/collections' },
                  { name: 'Furniture', path: '/furniture' },
                  { name: 'Decor', path: '/decor' },
                  { name: 'Lighting', path: '/lighting' },
                  { name: 'Bespoke', path: '/bespoke' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name} className="overflow-hidden py-2">
                    <Link 
                      to={item.path}
                      className={`text-4xl md:text-5xl lg:text-6xl font-serif hover:text-mercana-gold transition-colors duration-300 cursor-pointer ${
                        location.pathname === item.path ? 'text-mercana-gold' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="py-8">
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-mercana-gold hover:text-white transition-colors duration-300 cursor-pointer">Instagram</a>
              <a href="#" className="text-mercana-gold hover:text-white transition-colors duration-300 cursor-pointer">Pinterest</a>
              <a href="#" className="text-mercana-gold hover:text-white transition-colors duration-300 cursor-pointer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
