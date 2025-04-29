import React from "react";
import styles from "./CardLarge.module.css";
import image1 from "../../../../assets/preview-section/section2-fern-bed.jpg";

const CardLarge = () => (
  <div className={styles["section2-card-large-wrapper"]}>
    <p className={styles["card-text"]}>Fern future home vibes</p>
    <div className={styles["inner-card-wrapper"]}>
      <img 
        className={styles["inner-card-wrapper-image"]}
        src={image1}
        alt="section 2 fern bed image"
      />
      <img
        className={styles["inner-card-wrapper-image"]}
        src={image1}
        alt="section 2 fern living room image"
      />
      <img
        className={styles["inner-card-wrapper-image"]}
        src={image1}
        alt="section 2 fern  image"
      />
    </div>
  </div>
);

export default CardLarge;
