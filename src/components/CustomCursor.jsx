import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../index.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on mobile to save battery and prevent bugs
    if (window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    
    // GSAP quickTo is optimized for mouse tracking at 60fps
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, { scale: 3, backgroundColor: 'rgba(178, 31, 31, 0.2)', border: '1px solid #b21f1f', duration: 0.3 });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: '#1a2a6c', border: 'none', duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add magnetic hover effect to all buttons and links
    const interactiveElements = document.querySelectorAll('a, button, .nav-card-link');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  // Hide on mobile via CSS class
  return <div ref={cursorRef} className="custom-cursor hide-on-mobile"></div>;
};

export default CustomCursor;
