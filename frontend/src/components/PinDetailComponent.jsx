import React from "react";

import styles from "./pinDetail.module.css";

function PinDetailComponent() {
  const pin = {
    link: "https://www.instagram.com/",
    postName: "Character Design",
    description: "@inktober day 16: Grungy digital inking using @procreate",
    hashtags: [
      "#inktober",
      "#inktober24",
      "#inktober2024",
      "#day16",
      "#inktoberday16",
      "#inktobergrungy",
      "#grungy",
      "#inking",
      "#inkart",
      "digital",
      "...more"
    ],
    username: "inscapia",
    userProfile: "https://placehold.co/50x50" // Placeholder
  };

  return (
    <div>
      {/* link */}
      <a href={pin.link} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>

      {/* Post Name */}
      <h2>{pin.postName}</h2>

      {/* Description */}
      <p>{pin.description}</p>

      {/* Hashtags */}
      <p>{pin.hashtags.join(" ")}</p>

      {/* User Info (Profile Picture + Username) */}
      <div className={styles.userInfo}>
        <img src={pin.userProfile} alt="User" className={styles.userImage} />
        <span className={styles.userName}>{pin.username}</span>
      </div>
    </div>
  );
}

export default PinDetailComponent;
