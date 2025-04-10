import React from "react";
import Header from "../Header/Header";
import "./navbar.css";
import ReusableModal from "../Modal/ReusableModal";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Header />
      <ReusableModal />
    </div>
  );
}
