import React from 'react';
import { GrSearchAdvanced } from 'react-icons/gr';
import { ImEnlarge2 } from 'react-icons/im';

import styles from './ImageCard.module.css';

function ImageCard() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles['image-card']}>
          <img
            className={styles.image}
            src="https://i.pinimg.com/736x/21/fd/0f/21fd0f5ef475dcdd2764425327c0ee68.jpg"
            alt=""
          />
          <div className={styles['buttons-div']}>
            <div className={styles.button}>
              <ImEnlarge2 />
            </div>
            <div className={styles.button}>
              <GrSearchAdvanced />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
