import React from "react";
import Login from "../components/HomePageLogin/login";

import { Link } from "react-router-dom";
import styles from "./home.module.css";
import SimpleSlider from "../components/Carousel/Carousel";

function Homepage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <SimpleSlider />
      <nav className={styles.nav}>
        <Link to="/explore" className={styles.link}>
          Go to Explore
        </Link>
      </nav>
      <Login></Login>
    </div>
  );
}

export default Homepage;