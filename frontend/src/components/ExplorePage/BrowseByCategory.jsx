import React from "react";

import styles from "./BrowseByCategory.module.css";

// random dummy data for the categories

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
    title: "DYI and Crafts",
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
  }
];

export const BrowseByCategory = () => (
  <React.Fragment>
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>Browse by category</h2>
    </div>
    <div className={styles.categoryGridContainer}>
      {categories.map((category) => (
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
    <div>
      <button className={styles.seeMoreButton}>See more</button>
    </div>
  </React.Fragment>
);

export default BrowseByCategory;
