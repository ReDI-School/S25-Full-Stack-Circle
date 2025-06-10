import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import CardDetailPage from "./components/ExplorePageSection1/CardDetailPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/BlogPage/Blog";
import ExplorePage from "./pages/ExplorePage";
import HomePage from "./pages/HomePage";
import ImageDetailPage from "./pages/ImageDetailPage";
import Login from "./components/Forms/Login/Login"

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
        <Route path="/login" element={<Login />} />
      </Routes>
      {<Footer />}
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
