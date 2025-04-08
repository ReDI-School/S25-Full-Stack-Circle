import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ExplorePage from "./pages/Explorepage";
import ImageDetailPage from "./pages/ImageDetailPage";
import Header from "./components/Header/Header";
import LoginModal from "./components/Modal/LoginModal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Header />
      <LoginModal />
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
