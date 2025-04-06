// src/components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
      //i will pu the backround picture URL of footer here
        <img src="" alt="Inspiration"/>
          
        <div className="hero-text">
          <h1>Sign up to get your ideas</h1>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Circle Project | <a href="#">Privacy</a> | <a href="#">Terms</a></p>
      </footer>
    </div>
  );
};

export default HeroSection;
