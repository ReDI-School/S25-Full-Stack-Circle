import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const HomePage = () => <h1>Home Page</h1>;
const ExplorePage = () => <h1>Explore Page</h1>;
const AboutPage = () => <h1>About Page</h1>;
const BusinessPage = () => <h1>Business Page</h1>;
const PressPage = () => <h1>Press Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <h1>Welcome to Pinterest!</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/press" element={<PressPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
