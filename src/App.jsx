import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/Explorepage";
import ImageDetailPage from "./pages/ImageDetailPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/navbar";
import ReusableModal from "./components/Modal/ReusableModal";

function App() {
  return (
    <Router>
      <Header />
      <ReusableModal />
    
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
