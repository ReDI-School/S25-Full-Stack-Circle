import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Detail.module.css";
import Breadcrumb from "./ImageDetailPage/Breadcrumb";
import ShopItem from "./ImageDetailPage/ShopItem";

function ImageDetailPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imgSrc = searchParams.get("img");
  const pinId = searchParams.get("id"); // Pass pin ID to ShopItem

  return (
    <div className={styles.pageWrapper}>
      <Breadcrumb />

      <Link to="/explore" className={styles.backLink}>
        ← Back to Explore
      </Link>

      <div className={styles.centered}>
        <div className={styles.pinContainer}>
          <ShopItem imageSrc={imgSrc} pinId={pinId} />
        </div>
      </div>
    </div>
  );
}

export default ImageDetailPage;
