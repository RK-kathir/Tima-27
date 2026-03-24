import React, { useState, useLayoutEffect } from 'react';
import FloatingLines from './FloatingLines'; 

const FloatingBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile to prevent lagging
  useLayoutEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1, // Pushes it behind your content
      overflow: 'hidden',
      pointerEvents: 'none', // Prevents the animation from blocking button clicks
      backgroundColor: '#f8fafc' // Matches your Light Theme background
    }}>
      <FloatingLines
        // Matches the TIMA 2027 Colors perfectly
        linesGradient={["#1a2a6c", "#b21f1f", "#fdbb2d"]} 
        
        // Reactive rules: Fewer lines and disabled physics on phones
        lineCount={isMobile ? 3 : 6}
        lineDistance={isMobile ? 8 : 5}
        animationSpeed={isMobile ? 0.6 : 1} 
        interactive={!isMobile} 
        parallax={!isMobile}
        
        // Desktop wave settings
        bendRadius={5}
        bendStrength={-0.5}
        mouseDamping={0.05}
        parallaxStrength={1}
      />
    </div>
  );
};

export default FloatingBackground;
