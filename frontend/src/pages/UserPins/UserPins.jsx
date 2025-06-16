import React, { useState, useEffect } from "react";
import styles from "./UserPins.module.css";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const UserPins = () => {
  //{ user, createdPins, savedPins }
  const [activeTab, setActiveTab] = useState("created");
  const [createdPins, setCreatedPins] = useState([]);
  const [savedPins, setSavedPins] = useState([]);
  const token = localStorage.getItem("authToken");

  /*const savedPins = [
    {
      id: 5,
      title: "Sunset City",
      imageUrl:
        "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Forest Trail",
      imageUrl:
        "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmVzdHxlbnwwfDF8MHx8fDI%3D"
    },
    {
      id: 7,
      title: "Sunset City",
      imageUrl:
        "https://images.unsplash.com/photo-1517685633466-403d6955aeab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8MXwwfHx8Mg%3D%3D"
    },
    {
      id: 8,
      title: "Forest Trail",
      imageUrl:
        "https://images.unsplash.com/photo-1444724334165-e7050f2229a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvcmVzdHxlbnwwfDF8MHx8fDI%3D"
    }
  ];*/
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
      console.error("Error in fetching the Created Pins");
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
      console.error("Error in fetching the Saved Pins");
    }
  };
  const getMyPins = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/pins/saved", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Saved pins response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const pins = await response.json();
      setCreatedPins(pins);
      return;
    } catch (error) {
      console.error("Error in fetching the My Pins");
    }
  };

  useEffect(() => {
    if (activeTab === "created") {
      getCreatedPins();
    } else if (activeTab === "saved") {
      getSavedPins();
    } else {
      getMyPins();
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
