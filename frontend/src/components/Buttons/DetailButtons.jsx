import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FiShare2, FiMoreHorizontal } from "react-icons/fi";

import styles from "./DetailButtons.module.css";

export default function DetailPageButtons() {
  // State hooks for the saved and liked states.
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Toggle function for the save state.
  const handleClickSaved = () => {
    setIsSaved(prevState => !prevState);
  };

  // Toggle function for the like state.
  const handleClickLiked = () => {
    setIsLiked(prevState => !prevState);
  };

  return (
    <div className={styles.containerstyle}>
      <div className={styles.subcontainner}>
        <button
          className={`${styles.buttonstyle} ${styles.heartButton}`}
          onClick={handleClickLiked}
        >
          {isLiked ? (
            <BsHeartFill className={styles.iconheartfilled} />
          ) : (
            <BsHeart className={styles.iconheartstroke} />
          )}
        </button>

        {isLiked && <p className={styles.numbercomment}>123</p>}
        <button className={`${styles.buttonstyle} ${styles.shareButton}`}>
          <FiShare2 className={styles.iconshare} />
        </button>
        <button className={`${styles.buttonstyle} ${styles.menuButton}`}>
          <FiMoreHorizontal className={styles.iconthreedots} />
        </button>
      </div>

      <div className={styles.subcontainner}>
        <button
          className={isSaved ? styles.savedbtn : styles.unsavedbtn}
          onClick={handleClickSaved}
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}
