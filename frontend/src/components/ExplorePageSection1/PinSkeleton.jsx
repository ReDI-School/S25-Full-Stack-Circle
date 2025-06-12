import styles from "./BestOfPinterestSection.module.css";

const PinSkeleton = () => (
  <div className={styles.skeletonWrapper}>
    <div className={styles.skeletonImage}></div>
    <div className={styles.cardOverlay}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonSubtitle}></div>
    </div>
  </div>
);

export default PinSkeleton;
