// src/components/HeroSection.jsx
import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroImage}>
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
          alt="Inspiration"
        />
        <div className={styles.heroText}>
          <h1>Sign up to get your ideas</h1>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          © 2025 Circle Project | <a href="#">Privacy</a> | <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};

export default HeroSection;
