import React from "react";
import styles from "./Pin.module.css";
import { Link } from "react-router-dom";

function Pin({ pin }) {
  return (
    <div className={styles.pin}>
      <Link to={`/detail?img=${encodeURIComponent(pin.imageUrl)}`}>
        <img className={styles.pinImage} src={pin.imageUrl} alt={pin.title} />
        <div className={styles.pinOverlay}>
          <p className={styles.pinTitle}>{pin.title}</p>
          {/* You could add more buttons or info here later */}
        </div>
      </Link>
    </div>
  );
}

export default Pin;