import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import ImageDetailPage from "./pages/ImageDetailPage";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./pages/BlogPage/Blog";
import CardDetailPage from "./components/ExplorePage/BestOfPinterest/CardDetailPage";
import HomePage from "./pages/HomePage";

function AppContent() {
  const location = useLocation();

  // Determine whether to display the Navbar based on current path
  const showNavbar = location.pathname !== "/blog";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/card/:id" element={<CardDetailPage />} />
        <Route path="/detail" element={<ImageDetailPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
