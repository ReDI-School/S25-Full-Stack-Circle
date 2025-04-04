import React from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default Explorepage;
