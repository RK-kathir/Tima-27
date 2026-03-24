import React from 'react';
import CardNav from './components/CardNav';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import './index.css';

const App = () => {
  const navItems = [
    {
      label: "About",
      bgColor: "#1a2a6c", // TIMA Primary Blue
      textColor: "#fff",
      links: [
        { label: "Conference Details", href: "#hero" },
        { label: "Advisory Committee", href: "#about" } // Changed to scroll to about section
      ]
    },
    {
      label: "Information", 
      bgColor: "#1e3a8a", // Slightly lighter blue for depth
      textColor: "#fff",
      links: [
        { label: "Key Dates", href: "#about" },
        { label: "Gallery & Past Events", href: "#about" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#b21f1f", // TIMA Accent Red
      textColor: "#fff",
      links: [
        { label: "Submit Paper", href: "#hero" },
        { label: "Registration", href: "#about" },
        { label: "Email Us", href: "mailto:ie.tima2027@gmail.com" }
      ]
    }
  ];

  return (
    <div className="app-container">
      {/* 3D Animated Background - Stays behind everything */}
      <FloatingBackground /> 
      
      {/* GSAP Animated Dropdown Navigation */}
      <CardNav
        items={navItems}
        baseColor="#ffffff"
        menuColor="#1a2a6c"
        buttonBgColor="#b21f1f"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      
      {/* Your Separated Layout Sections */}
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
