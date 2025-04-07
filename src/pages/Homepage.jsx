import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Homepage</h1>
      <nav className="space-x-2">
        <Link to="/explore" className="bg-gray-200 px-4 py-2 rounded">
          Go to Explore
        </Link>
      </nav>
    </div>
  );
}

export default Homepage;
