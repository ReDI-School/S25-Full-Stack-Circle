import React from "react";
import styles from "./ProfileInfo.module.css";
import { FiCheck } from "react-icons/fi";

const ProfileInfo = () => (
  <div className={styles["ProfileInfo-wrapper"]}>
    <div className={styles["ProfileInfo-image"]}></div>
    <div className={styles["ProfileInfo-text"]}>
      <div className={styles["ProfileInfo-username"]}>User's Name</div>
      <div className={styles["ProfileInfo-email"]}>User's Email Id</div>
      <div className={styles["ProfileInfo-followers"]}>10 Followers</div>
    </div>
    <div>
      <FiCheck />
    </div>
  </div>
);

export default ProfileInfo;
