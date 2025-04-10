import React from "react";
import { Link } from "react-router-dom";
import ExplorePage_Best_Of_Pinterest_Section from "../components/ExplorePage_Section1/ExplorePage_Best_Of_Pinterest_Section"
import ExplorePage_Best_Of_Pinterest_Section from "../components/ExplorePage_Best_Of_Pinterest_Section";
import { BrowseByCategory } from "../components/ExplorePage/BrowseByCategory";


function Explorepage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Explore Page</h1>
      <ExplorePage_Best_Of_Pinterest_Section />
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
        <BrowseByCategory />
      </nav>
      <ExplorePage_Best_Of_Pinterest_Section />
    </div>
  );
}

export default Explorepage;
