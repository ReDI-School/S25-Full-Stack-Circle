import React, { useState, useEffect } from "react";
import Login from "../components/HomePageLogin/Login";
import PreviewSections from "../components/HomepageSections/PreviewSections";

import { Link } from "react-router-dom";
import SimpleSlider from "../components/Carousel/Carousel";
import styles from "./Home.module.css";

function HomePage() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScrollStart = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        window.scrollBy({
          top: window.scrollY + 700,
          left: 0,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("scroll", handleScrollStart);

    return () => {
      window.removeEventListener("scroll", handleScrollStart);
    };
  }, [isScrolling]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <SimpleSlider />
      <nav className={styles.nav}>
        <Link to="/explore" className={styles.link}>
          Go to Explore
        </Link>
      </nav>
      <PreviewSections />
      <Login />
    </div>
  );
}

export default HomePage;
