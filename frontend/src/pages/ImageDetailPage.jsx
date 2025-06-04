import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Detail.module.css";
import Breadcrumb from "./ImageDetailPage/Breadcrumb";
import ShopItem from "./ImageDetailPage/ShopItem";

function ImageDetailPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imgSrc = searchParams.get("img");

  return (
    <div className={styles.pageWrapper}>
      <Breadcrumb />

      <Link to="/explore" className={styles.backLink}>
        ← Back to Explore
      </Link>

      <div className={styles.centered}>
        <ShopItem imageSrc={imgSrc} />
      </div>
    </div>
  );
}

export default ImageDetailPage;
