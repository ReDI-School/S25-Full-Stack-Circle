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
      "...more",
    ],
    username: "inscapia",
    userProfile: "https://placehold.co/50x50",
  };

  return (
    <div>
      <a
        href={pin.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Instagram
      </a>

      <h2 className={styles.title}>{pin.postName}</h2>
      <p className={styles.description}>{pin.description}</p>
      <p className={styles.hashtags}>{pin.hashtags.join(" ")}</p>

      <div className={styles.userInfo}>
        <img src={pin.userProfile} alt="User" className={styles.userImage} />
        <span>{pin.username}</span>
      </div>
    </div>
  );
}

export default PinDetailComponent;
