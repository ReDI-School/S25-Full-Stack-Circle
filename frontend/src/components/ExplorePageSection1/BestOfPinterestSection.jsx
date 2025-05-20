import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BestOfPinterestSection.module.css";
import { cards } from "./cardDetails";
import SeeMoreButton from "../SeeMoreButton";

const BestOfPinterestSection = () => {
  const INITIAL_VISIBLE = 3;
  const ITEM_INCREMENT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleSeeMoreClick = () => {
    const nextCount = visibleCount + ITEM_INCREMENT;
    setVisibleCount(nextCount > cards.length ? cards.length : nextCount);
  };

  const isSeeMoreVisible = visibleCount < cards.length;

  return (
    <div>
      <h1 className={styles.exploreSection}>Explore the Best of Pinterest</h1>
      <div className={styles.cardContainer}>
        {cards.slice(0, visibleCount).map((card, index) => (
          <Link to={`/card/${index}`} key={index}>
            <div className={styles.card}>
              <img src={card.image} alt={card.title} />
              <div className={styles.cardOverlay}>
                <p>{card.title}</p>
                <h2>{card.subtitle}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {isSeeMoreVisible && (
        <div className={styles.seeMoreButtonContainer}>
          <SeeMoreButton onClick={handleSeeMoreClick} className={styles.seeMoreButton} />
        </div>
      )}
    </div>  
  );
};

export default BestOfPinterestSection;
