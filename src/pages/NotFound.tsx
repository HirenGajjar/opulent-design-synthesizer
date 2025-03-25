
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CustomCursor } from '@/components/ui/custom-cursor';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/FooterSection';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Disable default cursor
    document.body.classList.add('cursor-none');
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-6">
          <h1 className="text-8xl md:text-9xl font-serif text-mercana-gold mb-6">404</h1>
          <p className="text-xl md:text-2xl text-mercana-charcoal mb-8 max-w-xl mx-auto">
            The page you're looking for has been moved, redesigned, or perhaps never existed.
          </p>
          <div className="h-px w-24 bg-mercana-gold mx-auto my-8"></div>
          <Link to="/" className="inline-block bg-mercana-gold text-mercana-charcoal px-8 py-3 uppercase tracking-wider text-sm hover:bg-mercana-gold/90 transition-all duration-300 cursor-pointer">
            Return to Home
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default NotFound;
