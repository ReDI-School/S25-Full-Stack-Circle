import React from "react";
import { BsThreeDots } from "react-icons/bs";

import OptionsList from "../OptionsList/OptionsList";

import styles from "./DetailButtons.module.css";

/*
  <button
    className={`${styles.buttonstyle} ${styles.menuButton} ${open ? styles.activeMenu : ""}`}
    onClick={() => setOpen(!open)}
  >
    <BsThreeDots className={styles.iconthreedots} />
  </button>
*/

export default function MoreButton() {
  return (
    <OptionsList
      icon={<BsThreeDots className={styles.iconthreedots} />}
      buttonLabel=""
      menuButtonClassName={styles.menuButton}
      items={[
        { label: "Download image", action: () => alert("Downloaded image") },
        { label: "Hide Pin", action: () => alert("Hided Pin") },
        { label: "Report Pin", action: () => alert("Reported Pin") },
        {
          label: "Get Pin embed code",
          action: () => alert("Got Pin embed code")
        }
      ]}
    />
  );
}
