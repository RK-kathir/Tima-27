import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-light">
      <div className="grid">
        <div className="card">
          <h3>Author Guidelines</h3>
          <p>Instructions for paper format (Springer Style) and presentation templates are now available for download.</p>
        </div>
        <div className="card">
          <h3>Key Dates</h3>
          <p>Stay tuned for paper submission deadlines and registration windows for TIMA 2027.</p>
        </div>
        <div className="card">
          <h3>Gallery</h3>
          <p>View highlights and photos from previous years of TIMA conferences held at Anna University.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
