import { useEffect } from "react";
import { Link } from "react-router-dom";
import BrowseByCategory from "../components/ExplorePage/BrowseByCategory";
import BestOfPinterestSection from "../components/ExplorePageSection1/BestOfPinterestSection";
import PopularSearchList from "../components/PopularSearchSection/PopularSearchList";
import { fetchPins } from "../services/pinService";

import styles from "./Explore.module.css";

function ExplorePage() {
  useEffect(() => {
    const loadPins = async () => {
      try {
        await fetchPins();
      } catch (err) {
        console.error("Failed to fetch pins:", err);
      }
    };

    loadPins();
  }, []);

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
