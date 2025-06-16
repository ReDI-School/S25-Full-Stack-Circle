import React, { useState, useEffect } from "react";
import styles from "./UserPins.module.css";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const UserPins = () => {
  // { user, createdPins, savedPins }
  const [activeTab, setActiveTab] = useState("mypins");
  //{ user, createdPins, savedPins }
  const [activeTab, setActiveTab] = useState("mypins");
  const [createdPins, setCreatedPins] = useState([]);
  const [savedPins, setSavedPins] = useState([]);
  const token = localStorage.getItem("authToken");

  const getDisplayPins = () => {
    if (activeTab === "created") return createdPins;
    if (activeTab === "saved") return savedPins;
    return [...createdPins, ...savedPins];
  };
  const displayPins = getDisplayPins();

  const getCreatedPins = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/pins/created", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      const pins = await response.json();
      setCreatedPins(pins);
    } catch (error) {
      console.error("Error in fetching the Created Pins"), error;
    }
  };

  const getSavedPins = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/save", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      const pins = await response.json();
      setSavedPins(pins);
    } catch (error) {
      console.error("Error in fetching the Saved Pins", error);
    }
  };
  useEffect(() => {
    if (activeTab === "created" && createdPins.length === 0) {
    if (activeTab === "created" && createdPins.length === 0) {
      getCreatedPins();
    } else if (activeTab === "saved" && savedPins.length === 0) {
    } else if (activeTab === "saved" && savedPins.length === 0) {
      getSavedPins();
    } else if (activeTab === "mypins") {
      if (createdPins.length === 0) getCreatedPins();
      if (savedPins.length === 0) getSavedPins();
    } else if (activeTab === "mypins") {
      if (createdPins.length === 0) getCreatedPins();
      if (savedPins.length === 0) getSavedPins();
    }
  }, [activeTab]);

  return (
    <div className={styles.user_pins_wrapper}>
      <div className={styles.user_profileInfo_wrapper}>
        <ProfileInfo />
      </div>
      <div className={styles.tab_button_wrapper}>
        <button
          className={`${styles.tab_button} ${activeTab === "mypins" ? styles.active : ""}`}
          onClick={() => setActiveTab("mypins")}
        >
          My pins
        </button>
        <button
          className={`${styles.tab_button} ${activeTab === "created" ? styles.active : ""}`}
          onClick={() => setActiveTab("created")}
        >
          Created
        </button>
        <button
          className={`${styles.tab_button} ${activeTab === "saved" ? styles.active : ""}`}
          onClick={() => setActiveTab("saved")}
        >
          Saved
        </button>
      </div>

      <div className={styles.display_pins_wrapper}>
        {displayPins.length > 0 ? (
          displayPins.map(pin => (
            <div key={pin.id} className={styles.pin_image_div}>
              <img
                src={pin.imageUrl}
                alt={pin.title}
                className={styles.pin_image}
              />
            </div>
          ))
        ) : (
          <p>No pin to display</p>
        )}
      </div>
    </div>
  );
};

export default UserPins;
