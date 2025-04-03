
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/seeklogo.svg" alt="Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <Link to="/explore" className="nav-link">Explore</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/business" className="nav-link">Business</Link>
        <Link to="/press" className="nav-link">Press</Link>
      </div>

      <div className="auth-buttons">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
}
