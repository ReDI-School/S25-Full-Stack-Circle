import { useEffect } from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrowseByCategory from "../components/ExplorePage/BrowseByCategory";
import BestOfPinterestSection from "../components/ExplorePageSection1/BestOfPinterestSection";
import PopularSearchList from "../components/PopularSearchSection/PopularSearchList";
import { fetchPins, fetchPinById } from "../services/pinService";

import styles from "./Explore.module.css";

function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch pins whenever the selected category changes
  useEffect(() => {
    const loadPins = async () => {
      try {
        setLoading(true);
        let pinsData;

        if (selectedCategory === "all") {
          // Fetch all pins
          pinsData = await fetchPins();
        } else {
          // For now, we'll fetch all pins and filter by category on the client side
          // TODO: Implement server-side category filtering
          pinsData = await fetchPins();
          pinsData = pinsData.filter(pin => pin.category === selectedCategory);
        }

        setPins(pinsData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch pins:", err);
        setError("Failed to load pins. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPins();
  }, [selectedCategory]);

  const handleCategorySelect = categoryId => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className={styles.explorePage}>
      <h1 className={styles.pageTitle}>Explore Page</h1>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLink} aria-label="Back to Homepage">
          Back to Homepage
        </Link>
        <Link
          to="/detail"
          className={styles.navLink}
          aria-label="Go to Image Detail"
        >
          Go to Image Detail
        </Link>
      </nav>

      <BestOfPinterestSection />
      <BrowseByCategory />
      <PopularSearchList />
    </div>
  );
}

export default ExplorePage;
