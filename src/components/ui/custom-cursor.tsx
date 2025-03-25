
import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHover = (e: Event) => {
      setLinkHovered(true);
      
      // Extract data attributes to determine cursor behavior
      const target = e.currentTarget as HTMLElement;
      if (target.dataset.cursor) {
        setCursorType(target.dataset.cursor);
      }
    };
    
    const handleLinkLeave = () => {
      setLinkHovered(false);
      setCursorType('default');
    };

    const addLinkEvents = () => {
      const links = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      links.forEach((link) => {
        link.addEventListener('mouseenter', handleLinkHover);
        link.addEventListener('mouseleave', handleLinkLeave);
      });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Initial link event attachment
    addLinkEvents();

    // Setup mutation observer to attach events to newly added links
    const observer = new MutationObserver((mutations) => {
      addLinkEvents();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      
      const links = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
      
      observer.disconnect();
    };
  }, []);
  
  const getCursorClasses = () => {
    let classes = 'mercana-cursor';
    
    if (clicked) classes += ' scale-75';
    if (linkHovered) classes += ' scale-150';
    if (hidden) classes += ' opacity-0';
    else classes += ' opacity-100';
    
    // Add specific cursor types
    if (cursorType === 'expand') classes += ' scale-[2]';
    if (cursorType === 'video') classes += ' scale-[1.8] border-white';
    
    return classes;
  };

  return (
    <>
      <div
        className={getCursorClasses()}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: linkHovered ? 'transform 0.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s ease, border 0.3s ease' : 'transform 0.15s ease, opacity 0.3s ease'
        }}
      />
      <div
        className={`mercana-cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${linkHovered ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      />
    </>
  );
}
