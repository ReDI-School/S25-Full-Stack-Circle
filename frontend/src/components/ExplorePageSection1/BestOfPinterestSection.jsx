import React from "react";
import { Link } from "react-router-dom";
import styles from "./BestOfPinterestSection.module.css";
import { cards } from "./cardDetails";
import SeeMoreButton from "../SeeMoreButton";

const BestOfPinterestSection = () => {
  const handleSeeMoreClick = () => {
    // Add implementation for when the button is clicked
    console.warn("See more categories clicked");
  };

  return (
    <div>
      <h1 className={styles.exploreSection}>Explore the Best of Pinterest</h1>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
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
      <div className={styles.seeMoreButtonContainer}>
        <SeeMoreButton onClick={handleSeeMoreClick} className={styles.seeMoreButton} />
      </div>
    </div>
  );
};

export default BestOfPinterestSection;
