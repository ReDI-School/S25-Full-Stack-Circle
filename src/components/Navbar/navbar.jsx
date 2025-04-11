import React from "react";
import Header from "../Header/Header";
import "./navbar.css";
import Modal from "../Modal/Modal";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Header />
      <Modal />
    </div>
  );
}
