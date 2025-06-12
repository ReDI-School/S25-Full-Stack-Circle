import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import Breadcrumb from "./ImageDetailPage/Breadcrumb";
import ShopItem from "./ImageDetailPage/ShopItem";

function ImageDetailPage() {
  const location = useLocation();
  const params = useParams();
  const searchParams = new URLSearchParams(location.search);
  const imgSrc = searchParams.get("img");
  const urlPinId = searchParams.get("id");
  const [pinData, setPinData] = useState(null);

  // Use parameter from URL or params object
  const pinId = urlPinId || params.id;

  // Debugging
  useEffect(() => {
    console.log("ImageDetailPage - URL pinId:", urlPinId);
    console.log("ImageDetailPage - params.id:", params.id);
    console.log("ImageDetailPage - final pinId:", pinId);
    console.log("ImageDetailPage - full URL:", window.location.href);

    // If we have a pinId, attempt to fetch the pin data for verification
    if (pinId) {
      fetch(`/api/pins/${pinId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Pin fetch failed: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log("Pin data retrieved:", data);
          setPinData(data);
        })
        .catch(error => {
          console.error("Error fetching pin data:", error);
        });
    }
  }, [pinId, urlPinId, params.id]);

  return (
    <div className={styles.pageWrapper}>
      <Breadcrumb />

      <Link to="/explore" className={styles.backLink}>
        ← Back to Explore
      </Link>

      <div className={styles.centered}>
        <div className={styles.pinContainer}>
          <ShopItem imageSrc={imgSrc} pinId={pinId} pinData={pinData} />
        </div>
      </div>
    </div>
  );
}

export default ImageDetailPage;
