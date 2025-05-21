import React, { useState } from "react";

import styles from "./DetailButtons.module.css";

export default function LikeButton() {
  const [isSaved, setIsSaved] = useState(false);

  const handleClickSaved = () => {
    setIsSaved(prevState => !prevState);
  };

  return (
     <button
      className={isSaved ? styles.savedbtn : styles.unsavedbtn}
      onClick={handleClickSaved}
    >
    {isSaved ? "Saved" : "Save"}
    </button>
  );
}
