import React from "react";
import { IoMdClose } from "react-icons/io";
import classes from "./Modal.module.css";
import pinterestLogo from "/images/pinterest-3.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={classes.overlay} onClick={onClose}>
      <div
        className={classes["modal-container"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes["modal-header"]}>
          <div className={classes.logo}>
            <img src={pinterestLogo} alt="Pinterest Logo" />
          </div>

          <button className={classes["close-button"]} onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
