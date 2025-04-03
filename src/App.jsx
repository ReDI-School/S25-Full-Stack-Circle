import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

function ExplorePage() {
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

function ImageDetailPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Image Detail Page</h1>
      <Link to="/explore" className="bg-gray-200 px-4 py-2 rounded">
        Back to Explore
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/detail" element={<ImageDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
//to check
