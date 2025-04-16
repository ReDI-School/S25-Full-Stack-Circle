import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/ExplorePage";
import ImageDetailPage from "./pages/ImageDetailPage";
import Header from "./components/Header/Header";
import CardDetailPage from "./components/ExplorePageSection1/CardDetailPage";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/card/:id" element={<CardDetailPage />} />
        <Route path="/detail" element={<ImageDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
//to check
