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
      top: 0, left: 0, width: '100vw', height: '100vh',
      zIndex: 0, 
      overflow: 'hidden',
      pointerEvents: 'none', 
      backgroundColor: '#f8fafc' 
    }}>
      <FloatingLines
        linesGradient={["#1a2a6c", "#b21f1f", "#fdbb2d"]} 
        // OPTIMIZATION: Drastically reduced line count
        lineCount={isMobile ? 2 : 4} 
        lineDistance={isMobile ? 12 : 8}
        // OPTIMIZATION: Slowed down the math
        animationSpeed={isMobile ? 0.3 : 0.6} 
        interactive={!isMobile} 
        // OPTIMIZATION: Disabled parallax completely to save battery
        parallax={false} 
        bendRadius={5}
        bendStrength={-0.5}
        mouseDamping={0.05}
      />
    </div>
  );
};

export default FloatingBackground;
