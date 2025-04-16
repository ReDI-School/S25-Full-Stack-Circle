import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Login from "../components/Forms/Login/Login";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <nav className={styles.nav}>
        <Link to="/explore" className={styles.link}>
          Go to Explore
        </Link>
      </nav>
      <Login></Login>
    </div>
  );
}

export default HomePage;
