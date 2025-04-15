import React from "react";
import { Link } from "react-router-dom";
import styles from "./explore.module.css";
import ExplorePage_Best_Of_Pinterest_Section from "../components/ExplorePage_Best_Of_Pinterest_Section";
import { BrowseByCategory } from "../components/ExplorePage/BrowseByCategory";
import PopularSearch from "../components/PopularSearchSection/PopularSearchList";

function Explorepage() {
  return (
    <div className={styles.container}>
      <ExplorePage_Best_Of_Pinterest_Section />
      <BrowseByCategory />
      <PopularSearch />
    </div>
  );
}

export default Explorepage;
