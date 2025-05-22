import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

import styles from './DetailButtons.module.css';

export default function LoveButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClickLiked = () => {
    setIsLiked(prevState => !prevState);
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
