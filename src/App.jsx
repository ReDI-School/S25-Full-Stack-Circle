import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/ExplorePage";
import ImageDetailPage from "./pages/ImageDetailPage";

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
//to check