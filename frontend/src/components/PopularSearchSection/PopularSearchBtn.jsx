import React from "react";
import styles from "./PopularSearch.module.css";

function PopularSearchBtn({ idea }) {
  return (
    <div className={styles.container}>
      <button className={styles.btnStyle}>
        <span className={styles.iconStyle}>{searchIcon}</span>
        {idea}
      </button>
    </div>
  );
}

// svg for the icon
const searchIcon = (
  <svg
    aria-label="Trending search link"
    className="BNH gUZ U9O kVc"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
    fill="#767676"
  >
    <path d="M10 16a6 6 0 1 1 .02-12.01A6 6 0 0 1 10 16m13.13 2.88L21 16.75l-2.13-2.13a10 10 0 1 0-4.24 4.24L16.75 21l2.13 2.13a3 3 0 0 0 4.25 0 3 3 0 0 0 0-4.24"></path>
  </svg>
);
export default PopularSearchBtn;
