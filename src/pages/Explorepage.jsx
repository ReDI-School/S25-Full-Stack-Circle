import React from "react";
import { Link } from "react-router-dom";
import ExplorePage_Best_Of_Pinterest_Section from "../components/ExplorePage_Best_Of_Pinterest_Section"

function Explorepage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Explore Page</h1>
      <nav className="space-x-2">
        <Link to="/" className="bg-gray-200 px-4 py-2 rounded">
          Back to Homepage
        </Link>
        <Link to="/detail" className="bg-gray-200 px-4 py-2 rounded">
          Go to Image Detail
        </Link>
      </nav>
      <ExplorePage_Best_Of_Pinterest_Section />
    </div>
  );
}

export default Explorepage;
