import React from "react";
import styles from "./ExploreNew.module.css";  


const images = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5",
  "https://picsum.photos/600/400?random=6",
  "https://picsum.photos/600/400?random=7",
  "https://picsum.photos/600/400?random=8",
  "https://picsum.photos/600/400?random=9",
  "https://picsum.photos/600/400?random=10",
];

export const ExploreNew = () => {
  return (
    <React.Fragment>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Explore New</h2>
      </div>
      <div className={styles.categoryGridContainer}>
        {images.map((src, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.categoryImage}>
              <img src={src} alt={`Thumbnail ${index + 1}`} />
            </div>
            <div className={styles.categoryTitle}>
              <h3>Photo {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className={styles.seeMoreButton}>See More</button>
      </div>
    </React.Fragment>
  );
};

export default ExploreNew;
