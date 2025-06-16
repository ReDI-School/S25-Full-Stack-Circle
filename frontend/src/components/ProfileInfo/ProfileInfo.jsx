import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./ProfileInfo.module.css";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div
      className={styles["ProfileInfo-wrapper"]}
      onClick={navigate("/userpins")}
    >
      <div className={styles["ProfileInfo-image"]}></div>
      <div className={styles["ProfileInfo-text"]}>
        <div className={styles["ProfileInfo-username"]}>
          {user?.name || "Guest"}
        </div>
        <div className={styles["ProfileInfo-email"]}>
          {user?.email || "No email"}
        </div>
        <div className={styles["ProfileInfo-followers"]}>10 Followers</div>
      </div>
      <div>
        <FiCheck />
      </div>
    </div>
  );
};

export default ProfileInfo;
