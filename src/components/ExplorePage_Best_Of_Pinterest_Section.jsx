import React from "react";
import styles from "./bestOfPinterest.module.css";
const ExplorePage_Best_Of_Pinterest_Section = () => {
  const cards = [
    {
      image:
        "https://i.pinimg.com/736x/a4/04/29/a404295ee9ceb7366b0068144abaf3f9.jpg",
      title: "Freshly picked for spring",
      subtitle: "New season, new nails",
    },
    {
      image:
        "https://i.pinimg.com/736x/bf/40/3b/bf403bc1720060dbe87ff30e7c11c489.jpg",
      title: "Spice up your outfits",
      subtitle: "Cool style classics",
    },
    {
      image:
        "https://i.pinimg.com/736x/42/f6/4c/42f64c71899831d570f997a422ea8ddc.jpg",
      title: "Sunbathing is the order of the day",
      subtitle: "Restart: Spring",
    },
  ];

  return (
    <div>
      <h1 className={styles.container}>Explore the Best of Pinterest</h1>

      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={card.image}
              alt={card.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <p>{card.title}</p>
              <h2>{card.subtitle}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.seeMoreWrapper}>
        <button className="see-more-button">See more</button>
      </div>
    </div>
  );
};

export default ExplorePage_Best_Of_Pinterest_Section;
