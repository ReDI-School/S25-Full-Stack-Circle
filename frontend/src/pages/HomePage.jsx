import React from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/Carousel/Carousel";
import styles from "./Home.module.css";
import Login from "../components/HomePageLogin/Login";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <SimpleSlider />
      <nav className={styles.nav}>
        <Link to="/explore" className={styles.link}>
          Go to Explore
        </Link>
        <Login></Login>
      </nav>
    </div>
  );
}

export default HomePage;
