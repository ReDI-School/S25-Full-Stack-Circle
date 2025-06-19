import React from "react";
import styles from "./Explore.module.css";
import { useNavigate } from "react-router-dom";

const ExploreButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={styles.explore_button}
        onClick={() => navigate("/explore")}
      >
        Explore
      </button>
    </div>
  );
};

export default ExploreButton;
