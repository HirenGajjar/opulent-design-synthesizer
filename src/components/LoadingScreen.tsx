
import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading with a more refined, deliberate pace
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 - prev) / 15;
        return Math.min(newProgress, 99);
      });
    }, 100);
    
    // Elegant delay before completing the loading
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoaded(true), 500);
    }, 2800);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className={`mercana-loader ${isLoaded ? 'loaded' : ''}`}>
      <div className="mercana-loader-content">
        <div className="mercana-loader-logo">
          <h1 className="text-4xl font-serif tracking-widest text-mercana-gold opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>MERCANA</h1>
        </div>
        <div className="mercana-loader-progress">
          <span className="text-xs text-mercana-gold/60 tracking-widest uppercase opacity-0 animate-fade-in mb-3" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Crafting excellence
          </span>
          <div className="mercana-loader-bar-container">
            <div 
              className="mercana-loader-bar" 
              style={{ width: `${progress}%`, transition: 'width 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
            ></div>
          </div>
          <span className="text-xs text-mercana-gold/80 mt-3 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
