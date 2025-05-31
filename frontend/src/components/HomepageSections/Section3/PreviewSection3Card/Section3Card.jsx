import React from 'react';
import styles from './Section3Card.module.css';
import cardImage from '../../../../assets/preview-section/section3Card.jpg';
import profilePicture from '../../../../assets/preview-section/section3ProfilePicture.jpg';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsDashLg } from 'react-icons/bs';

const Section3Card = () => (
  <div className={styles['section3-card-wrapper']}>
    <div className={styles['card-caraousel-wrapper']}>
      <img className={styles['card-image']} src={cardImage} />
      <div className={styles['card-caption-wrapper']}>
        <div className={styles['carousel-icons']}>
          <MdKeyboardArrowLeft />
          <BsDashLg />
          <BsDashLg />
          <BsDashLg />
          <BsDashLg />
          <BsDashLg />
          <BiDotsHorizontalRounded />
        </div>
        <div className={styles['card-caption']}>
          <p>How to find the perfect lipshade for any occassion </p>
        </div>
      </div>
      <div className={styles['card-text']}>
        <p className={styles['profile-name']}>Scout the city</p>
        <p className={styles['followers']}>56.7 followers</p>
        <img className={styles['profile-picture']} src={profilePicture} />
      </div>
    </div>
  </div>
);

export default Section3Card;
