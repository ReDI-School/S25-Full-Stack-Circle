import React from "react";
import styles from "./DetailButtons.module.css";
import LoveButton from "./LoveButton";
import ShareButton from "./ShareButton";
import MoreButton from "./MoreButton";
import LikeButton from "./LikeButton";

export default function DetailButtons() {
  return (
    <div className={styles.containerstyle}>
      <div className={styles.subcontainner}>
        <LoveButton />
        <ShareButton />
        <MoreButton />
      </div>

      <div className={styles.subcontainner}>
        <LikeButton />
      </div>
    </div>
  );
}