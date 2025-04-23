import React from "react";
import styles from "./DetailButtons.module.css";
import { FiShare } from "react-icons/fi";

export default function ShareButton() {
  return (
    <button className={`${styles.buttonstyle} ${styles.shareButton}`}>
      <FiShare className={styles.iconshare} />
    </button>
  );
}