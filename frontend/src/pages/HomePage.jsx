import React, { useState, useEffect, useRef, useContext } from "react";
import Login from "../components/HomePageLogin/Login";
import PreviewSections from "../components/HomepageSections/PreviewSections";
import SimpleSlider from "../components/Carousel/Carousel";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

function HomePage() {
  /* section based scroll:
  -track the section we are on
  -store references to all sections
  -prevent multiple scrolls at once
  */
  // eslint-disable-next-line no-unused-vars
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const isScrolling = useRef(false);

  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = e => {
      e.preventDefault();
      if (isScrolling.current) return;

      isScrolling.current = true;
      const timer = 1000;
      setTimeout(() => {
        isScrolling.current = false;
      }, timer); // Debounce scroll events

      // determine direction of scroll
      const direction = e.deltaY > 0 ? 1 : -1;

      // update the current section based on the direction of the scroll
      setCurrentSection(prev => {
        const next = prev + direction;
        // scroll if the next section exists
        if (next >= 0 && next < sectionsRef.current.length) {
          sectionsRef.current[next].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          return next;
        }
        return prev;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Login check + redirect
  useEffect(() => {
    if (!loading && user) {
      navigate("/userpins");
    }
  }, [user, loading, navigate]);

  return (
    <div className={styles.container}>
      <div ref={el => (sectionsRef.current[0] = el)} className={styles.section}>
        {/* <h1 className={styles.title}>Homepage</h1> */}
        <SimpleSlider />
        {/* <nav className={styles.nav}>
          <Link to="/explore" className={styles.link}>
            Go to Explore
          </Link>
        </nav> */}
      </div>

      <div ref={el => (sectionsRef.current[1] = el)} className={styles.section}>
        <PreviewSections />
      </div>

      <div ref={el => (sectionsRef.current[2] = el)} className={styles.section}>
        <Login />
      </div>
    </div>
  );
}

export default HomePage;
