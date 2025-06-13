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
import CreatepinPage from "./pages/CreatepinPage/CreatePinPage";
import Dashboard from "./pages/DashboardPage/Dashboard";
import { UserProvider } from "./contexts/UserProvider";
import UploadFromUrl from "./pages/ImageUploadURLPage/UploadFromUrl";
import UserPins from "./pages/UserPins/UserPins";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function AppContent() {
  const location = useLocation();

  // Determine whether to display the Navbar based on current path
  const path = location.pathname;

  const showNothing = path === "/blog";

  const showRegularNavbar = !showNothing;

  return (
    <>
      {showRegularNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/pin/:id" element={<CardDetailPage />} />
        <Route path="/detail" element={<ImageDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/createPin" element={<CreatepinPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/image_upload_from_url" element={<UploadFromUrl />} />
        <Route path="/userpins" element={<UserPins />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
      {<Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </Router>
  );
}

export default App;
