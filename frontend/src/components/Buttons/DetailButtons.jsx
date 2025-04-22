import React, { useState } from "react";
import styles from "./DetailButtons.module.css";
import { BiFontSize } from "react-icons/bi";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";

export default function DetailPage_buttons() {
  
  // State hooks for the saved and liked states.
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Toggle function for the save state.
  const handleClickSaved = () => {
    setIsSaved((prevState) => !prevState);
  };

  // Toggle function for the like state.
  const handleClickLiked = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className={styles.containerstyle}>
      <div className={styles.subcontainner}>
        <button className={`${styles.buttonstyle} ${styles.heartButton}`}  onClick={handleClickLiked}>
          {isLiked ? (
              <BsHeartFill
                className={styles.iconheartfilled}
              />
          ) : (
            <BsHeart
            className={styles.iconheartstroke}
            />
          )}
        </button>

        {isLiked && (
          <p className={styles.numbercomment}>
            123
          </p>
        )}
        <button className={`${styles.buttonstyle} ${styles.shareButton}`}>
          <FiShare className={styles.iconshare}/>
        </button>
        <button className={`${styles.buttonstyle} ${styles.menuButton}`}>
          <BsThreeDots className={styles.iconthreedots}/>
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