import React, { useEffect, useState } from 'react';
// IMPORTANT: Make sure you import the actual FloatingLines component 
// from wherever you downloaded or created it!
import FloatingLines from './FloatingLines'; 

const FloatingBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  // This checks if the user is on a phone to prevent lag
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately on load
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, /* Keeps it permanently behind your website content */
        overflow: 'hidden',
        pointerEvents: 'none' /* Ensures the animation doesn't block you from clicking buttons */
      }}
    >
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative',
          opacity: 0.2 /* Makes the lines subtle so your text stays readable! */
        }}
      >
        <FloatingLines
          /* Changed to match your exact TIMA 2027 Theme Colors */
          linesGradient={["#1a2a6c", "#b21f1f", "#fdbb2d"]} 
          
          /* Reactive Mobile Settings: Slows down and stops heavy math on phones */
          animationSpeed={isMobile ? 0.5 : 1} 
          interactive={!isMobile} 
          bendRadius={isMobile ? 2 : 5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax={!isMobile}
          parallaxStrength={isMobile ? 0 : 1}
        />
      </div>
    </div>
  );
};

export default FloatingBackground;
