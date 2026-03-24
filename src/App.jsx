import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CardNav from './components/CardNav';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // Adds fade-in animations as you scroll down the page
  useLayoutEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll');
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Triggers when the top of the section hits 85% down the viewport
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const navItems = [
    { label: "About", bgColor: "#1a2a6c", textColor: "#fff", links: [{ label: "Conference Details", href: "#hero" }, { label: "Advisory Committee", href: "#about" }] },
    { label: "Information", bgColor: "#1e3a8a", textColor: "#fff", links: [{ label: "Key Dates", href: "#about" }, { label: "Gallery & Past Events", href: "#about" }] },
    { label: "Contact", bgColor: "#b21f1f", textColor: "#fff", links: [{ label: "Submit Paper", href: "#hero" }, { label: "Registration", href: "#about" }, { label: "Email Us", href: "mailto:ie.tima2027@gmail.com" }] }
  ];

  return (
    <SmoothScroll>
      <div className="app-container">
        <CustomCursor />
        <FloatingBackground /> 
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <CardNav items={navItems} baseColor="#ffffff" menuColor="#1a2a6c" buttonBgColor="#b21f1f" buttonTextColor="#fff" ease="power3.out" />
          
          <Header />
          
          {/* Added 'animate-on-scroll' class for GSAP triggers */}
          <div className="animate-on-scroll">
            <HeroSection />
          </div>
          <div className="animate-on-scroll">
            <AboutSection />
          </div>
          
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default App;
