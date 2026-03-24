import React from 'react';
import CardNav from './components/CardNav';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground'; /* <-- IMPORT IT HERE */
import './index.css';

const App = () => {
  const navItems = [
    {
      label: "About",
      bgColor: "#1a2a6c",
      textColor: "#fff",
      links: [
        { label: "Conference Details", href: "#hero" },
        { label: "Author Guidelines", href: "#about" }
      ]
    },
    {
      label: "Information", 
      bgColor: "#1e3a8a",
      textColor: "#fff",
      links: [
        { label: "Key Dates", href: "#about" },
        { label: "Gallery & Past Events", href: "#about" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#b21f1f",
      textColor: "#fff",
      links: [
        { label: "Submit Paper", href: "#hero" },
        { label: "Organizing Secretary", href: "#contact" },
        { label: "Email Us", href: "mailto:ie.tima2027@gmail.com" }
      ]
    }
  ];

  return (
    <div className="app-container">
      {/* PLACE IT RIGHT HERE AT THE TOP */}
      <FloatingBackground /> 
      
      <CardNav
        items={navItems}
        baseColor="#ffffff"
        menuColor="#1a2a6c"
        buttonBgColor="#b21f1f"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
