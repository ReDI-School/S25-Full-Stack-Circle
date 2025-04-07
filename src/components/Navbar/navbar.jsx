
import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="right">
        <Link to="/About" className="nav-item">Login</Link>
        <Link to="/Business" className="nav-item">Sign Up</Link>
        <Link to="/Press" className="nav-item">Login</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/signup" className="nav-item">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
