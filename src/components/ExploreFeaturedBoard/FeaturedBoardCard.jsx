import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./FeaturedBoards.module.css"; 

const FeaturedBoardCard = ({ board }) => {
  return (
    <div className={styles.boardCard}>
      <div className={styles.boardImages}>
        <div className={styles.leftImg}>
          <img src={board.images[0]} alt={`${board.title} 0`} />
        </div>
        <div className={styles.rightImgs}>
          <img src={board.images[1]} alt={`${board.title} 1`} />
          <img src={board.images[2]} alt={`${board.title} 2`} />
        </div>
      </div>
      <div className={styles.boardInfo}>
        <h3>{board.title}</h3>
        <div className={styles.boardMeta}>
          <span className={styles.verified}>
            Pinterest Deutschland
            <CheckCircleIcon />
          </span>
        </div>
        <p>
          {board.pins} Pins • {board.daysAgo}d
        </p>
      </div>
    </div>
  );
};

export default FeaturedBoardCard;
