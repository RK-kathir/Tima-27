import React, { useState, useLayoutEffect } from 'react';
import FloatingLines from './FloatingLines'; 

const FloatingBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      zIndex: 0, /* FIX: Changed from -1 to 0 so it isn't hidden by the browser background */
      overflow: 'hidden',
      pointerEvents: 'none', 
      backgroundColor: '#f8fafc' 
    }}>
      <FloatingLines
        linesGradient={["#1a2a6c", "#b21f1f", "#fdbb2d"]} 
        lineCount={isMobile ? 3 : 6}
        lineDistance={isMobile ? 8 : 5}
        animationSpeed={isMobile ? 0.6 : 1} 
        interactive={!isMobile} 
        parallax={!isMobile}
        bendRadius={5}
        bendStrength={-0.5}
        mouseDamping={0.05}
        parallaxStrength={1}
      />
    </div>
  );
};

export default FloatingBackground;
