import React from "react";
import { Link } from "react-router-dom";
// import Login from "../components/HomePageLogin/Login";
import SimpleSlider from "../components/Carousel/Carousel";

import styles from "./home.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <SimpleSlider />
      <nav className={styles.nav}>
        <Link to="/explore" className={styles.link}>
          Go to Explore
        </Link>
        {/* <Login></Login> */}
      </nav>
    </div>
  );
}

export default HomePage;
