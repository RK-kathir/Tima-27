import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h2>Advancing Industrial Excellence</h2>
        <p>Join global experts at the Department of Instrumentation Engineering, MIT Campus, to discuss the future of measurement science and automation technologies.</p>
        <a href="#about" className="btn">Submit Your Paper</a>
      </div>
      <div className="hero-img">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Industrial Automation" />
      </div>
    </section>
  );
};

// THIS IS THE LINE THAT WAS MISSING!
export default HeroSection;
