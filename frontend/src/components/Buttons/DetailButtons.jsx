import React from "react";
import styles from "./DetailButtons.module.css";
import LikeButton from "./LikeButton";
import LoveButton from "./LoveButton";
import MoreButton from "./MoreButton";
import ShareButton from "./ShareButton";

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
