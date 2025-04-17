import React from "react";
import Login from "../components/HomePageLogin/login";
import PreviewSections from "../components/HomepageSections/PreviewSections";

import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <nav className={styles.nav}>
        <Link to="/explore" className={styles.link}>
          Go to Explore
        </Link>
      </nav>
      <PreviewSections/>
      <Login></Login>
     
    </div>
  );
}

export default Homepage;
