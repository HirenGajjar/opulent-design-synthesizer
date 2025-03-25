
import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`mercana-loader ${isLoaded ? 'loaded' : ''}`}>
      <div className="mercana-loader-content">
        <div className="mercana-loader-logo">
          <h1 className="text-4xl font-serif tracking-widest text-mercana-gold">MERCANA</h1>
        </div>
        <div className="mercana-loader-bar-container">
          <div className="mercana-loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
