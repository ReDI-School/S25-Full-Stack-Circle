import React from "react";
import Header from "../Header/Header";
import style from "./navbar.module.css";
import Modal from "../Modal/Modal";

export default function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <Header />
      <Modal />
    </div>
  );
}
