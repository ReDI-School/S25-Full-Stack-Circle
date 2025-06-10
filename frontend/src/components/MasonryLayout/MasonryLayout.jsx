import React from "react";
import styles from "./MasonryLayout.module.css";

function MasonryLayout({ children }) {
  return <div className={styles.masonryLayout}>{children}</div>;
}

export default MasonryLayout;