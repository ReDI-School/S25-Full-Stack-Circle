import React, { useState } from "react";
import styles from "./DetailButtons.module.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
/////
export default function LoveButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClickLiked = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <>
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
    </>
  );
}