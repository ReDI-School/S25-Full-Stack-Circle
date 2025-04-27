import React from "react";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <Header />
      <Modal />
    </div>
  );
}
