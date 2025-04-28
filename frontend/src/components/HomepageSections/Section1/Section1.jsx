import React from "react";
import section1Image1 from "../../../assets/preview-section/koreanFriedChicken.jpeg";
import section1Image2 from "../../../assets/preview-section/chicken rice.jpg";
import section1Image4 from "../../../assets/preview-section/fried shrimp with salad.jpg";
import section1Image3 from "../../../assets/preview-section/korean food.jpg";
import { FiSearch } from "react-icons/fi";
import styles from "./Section1.module.css";

const Section1 = () => {
  return(
    <div className={styles["preview-section1-wrapper"]}>
      <h4>Here's how it works</h4>
      {/******************************Section1***********************************************/} 
      <div className={styles["preview-section-1"]}>
        <div className={styles["section1-images"]}>
          <div className={styles["image-layers-container"]}>
            <img className={styles["preview-section1-layer1-img"]} src={section1Image1} alt="Image 1" />
            <img className={styles["preview-section1-layer2-img"]}src={section1Image2}alt="Image 2"/>
            <img className={styles["preview-section1-layer3-img"]} src={section1Image3} alt="Image 3"/>
            <img className={styles["preview-section1-layer4-img"]} src={section1Image4} alt="Image 4"/>
            <div>
              <button className={styles['quickSearch-button']}><FiSearch/>easy chicken dinner</button>
            </div>
          </div>
        </div>
        <div className={styles["section1-text"]}>
        <h1 className={styles["section-text-heading"]}>Search for an idea</h1>
        <div className={styles["section-text-p"]}><p>What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find. </p></div>
          <button className={styles["explore-button"]}>Explore</button>
        </div>
      </div>
    </div>     
  );
};

export default Section1;
