import React from 'react';
import { FiShare } from 'react-icons/fi';

import styles from './DetailButtons.module.css';

export default function ShareButton() {
  return (
    <button className={`${styles.buttonstyle} ${styles.shareButton}`}>
      <FiShare className={styles.iconshare} />
    </button>
  );
}
