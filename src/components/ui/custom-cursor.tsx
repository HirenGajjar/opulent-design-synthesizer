
import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHover = () => setLinkHovered(true);
    const handleLinkLeave = () => setLinkHovered(false);

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

  return (
    <>
      <div
        className={`mercana-cursor ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`mercana-cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${linkHovered ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
