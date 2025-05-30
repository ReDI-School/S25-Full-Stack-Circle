import React, { useState, useRef, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";

import optionsStyles from "../OptionsList/OptionsList.module.css";
import itemStyles from "../OptionsList/OptionsListItem.module.css";

import styles from "./DetailButtons.module.css";

// Option list items
const options = [
  {
    label: "Download image",
    action: () => console.info({ msg: "Download image" })
  },
  {
    label: "Hide Pin",
    action: () => console.log("Hide Pin")
  },
  {
    label: "Report Pin",
    action: () => console.log("Report Pin")
  },
  {
    label: "Get Pin embed code",
    action: () => console.log("Get Pin embed code")
  }
];

export default function MoreButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={optionsStyles.optionsList} ref={ref}>
      <button
        className={`${styles.buttonstyle} ${styles.menuButton} ${open ? styles.activeMenu : ""}`}
        onClick={() => setOpen(!open)}
      >
        <BsThreeDots className={styles.iconthreedots} />
      </button>

      {open && (
        <div className={optionsStyles.menu}>
          {options.map((option, index) => (
            <button
              key={index}
              className={itemStyles.optionItem}
              onClick={() => {
                option.action();
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
