import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ImageDetailPage from "./pages/ImageDetailPage";
import CardDetailPage from "./components/ExplorePage/BestOfPinterest/CardDetailPage";
import HomePage from "./pages/y";
import ExplorePage from "./pages/ExplorePage";
import Navbar from "./components/Navbar/X";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/card/:id" element={<CardDetailPage />} />
        <Route path="/detail" element={<ImageDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
// to check
