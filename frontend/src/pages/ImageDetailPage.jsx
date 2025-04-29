import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Detail.module.css";
import Breadcrumb from "./ImageDetailPage/Breadcrumb";
import ShopItem from "./ImageDetailPage/ShopItem";

function ImageDetailPage() {
  const location = useLocation();
  const { image } = location.state || {};
  return (
    <div className={styles.pageWrapper}>
      <Breadcrumb />

      <h1 className={styles.title}>Image Detail Page</h1>

      <Link to="/explore" className={styles.backLink}>
        ← Back to Explore
      </Link>

      <div className={styles.centered}>
        <ShopItem image={image} />
      </div>
    </div>
  );
}

export default ImageDetailPage;
