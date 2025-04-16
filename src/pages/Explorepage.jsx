import React from "react";
import { Link } from "react-router-dom";
import styles from "./explore.module.css";
import BestOfPinterestSection from "../components/ExplorePageSection1/BestOfPinterestSection"
import { BrowseByCategory } from "../components/ExplorePage/BrowseByCategory";
import PopularSearch from "../components/PopularSearchSection/PopularSearchList";


function ExplorePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Explore Page</h1>
      <nav className="space-x-2 mt-4">
        <Link
          to="/"
          className="bg-gray-200 px-4 py-2 rounded"
          aria-label="Back to Homepage"
        >
          Back to Homepage
        </Link>
        <Link
          to="/detail"
          className="bg-gray-200 px-4 py-2 rounded"
          aria-label="Go to Image Detail"
        >
          Go to Image Detail
        </Link>
        <BestOfPinterestSection />
        <BrowseByCategory />
        <PopularSearch />
      </nav>
    </div>
  );
}

export default ExplorePage;
