import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/Explorepage";
import ImageDetailPage from "./pages/ImageDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
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
