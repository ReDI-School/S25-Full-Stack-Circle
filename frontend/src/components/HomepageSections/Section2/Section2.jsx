import React from 'react';
import styles from './Section2.module.css';
import CardLarge from './PreviewSection2Cards/CardLarge';

const Section2 = () => (
  <div className={styles['preview-section-2']}>
    <div className={styles['section2-text']}>
      <h1 className={styles['section-text-heading']}>Save ideas you like</h1>
      <div className={styles['section-text-p']}>
        <p>Collect your favorites so you can get back to them later.</p>
      </div>
    </div>
    <div className={styles['section2-images']}>
      <div className={styles['section2-grid-wrapper']}>
        <CardLarge />
        <div
          className={`${styles['small-card']} ${styles['medium']} ${styles['image1']}`}
        >
          <p>My Scandinavian Bedroom</p>
        </div>
        <div
          className={`${styles['small-card']} ${styles['small']} ${styles['image2']}`}
        >
          <p>The deck of my dreams</p>
        </div>
        <div
          className={`${styles['small-card']} ${styles['medium']} ${styles['image3']}`}
        >
          <p>Our bathroom Upgrade</p>
        </div>
        <div
          className={`${styles['small-card']} ${styles['medium']} ${styles['image4']}`}
        >
          <p>Serve my drinks in style</p>
        </div>
      </div>
    </div>
  </div>
);

export default Section2;
