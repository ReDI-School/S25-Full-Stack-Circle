import React, { useState } from "react";
import SeeMoreButton from "../SeeMoreButton";
import styles from "./BrowseByCategory.module.css";

const categories = [
  {
    id: 1,
    title: "Animals",
    image: "https://picsum.photos/300/150?random=1"
  },
  {
    id: 2,
    title: "Art",
    image: "https://picsum.photos/300/150?random=2"
  },
  {
    id: 3,
    title: "Beauty",
    image: "https://picsum.photos/300/150?random=3"
  },
  {
    id: 4,
    title: "Design",
    image: "https://picsum.photos/300/150?random=4"
  },
  {
    id: 5,
    title: "DIY and Crafts",
    image: "https://picsum.photos/300/150?random=5"
  },
  {
    id: 6,
    title: "Food and Drink",
    image: "https://picsum.photos/300/150?random=6"
  },
  {
    id: 7,
    title: "Home Decor",
    image: "https://picsum.photos/300/150?random=7"
  },
  {
    id: 8,
    title: "Men's Fashion",
    image: "https://picsum.photos/300/150?random=8"
  },
  {
    id: 9,
    title: "Quotes",
    image: "https://picsum.photos/300/150?random=9"
  },
  {
    id: 10,
    title: "Tattoos",
    image: "https://picsum.photos/300/150?random=10"
  },
  {
    id: 11,
    title: "Travel",
    image: "https://picsum.photos/300/150?random=11"
  },
  {
    id: 12,
    title: "Weddings",
    image: "https://picsum.photos/300/150?random=12"
  },
  {
    id: 13,
    title: "Women's Fashion",
    image: "https://picsum.photos/300/150?random=13"
  }
];

const BrowseByCategory = () => {
  const INITIAL_VISIBLE = 10;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleSeeMoreClick = () => {
    setVisibleCount(categories.length);
  };

  const isSeeMoreVisible = visibleCount < categories.length;

  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Browse by category</h2>
      </div>
      <div className={styles.categoryGridContainer}>
        {categories.slice(0, visibleCount).map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <div className={styles.categoryImage}>
              <img src={category.image} alt={category.title} />
            </div>
            <div className={styles.categoryTitle}>
              <h3>{category.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {isSeeMoreVisible && (
        <div className={styles.seeMoreButtonContainer}>
          <SeeMoreButton onClick={handleSeeMoreClick} className={styles.seeMoreButton} />
        </div>
      )}
    </>
  );
};

export default BrowseByCategory;
