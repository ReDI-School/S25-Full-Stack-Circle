import React, { useState } from "react";
import styles from "./UserPins.module.css";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const UserPins = () => {
  //{ user, createdPins, savedPins }
  const [activeTab, setActiveTab] = useState("MyPins");

  const createdPins = [
    {
      id: 1,
      title: "Beautiful Beach",
      imageUrl:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHwxfDB8fHwy"
    },
    {
      id: 2,
      title: "Mountain View",
      imageUrl:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHwxfDB8fHwy"
    },
    {
      id: 3,
      title: "Beautiful Beach",
      imageUrl:
        "https://images.unsplash.com/photo-1503756234508-e32369269deb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHwxfDB8fHwy"
    },
    {
      id: 4,
      title: "Mountain View",
      imageUrl:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHwxfDB8fHwy"
    }
  ];

  const savedPins = [
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
  ];
  const getDisplayPins = () => {
    if (activeTab === "Created") return createdPins;
    if (activeTab === "Saved") return savedPins;
    return [...createdPins, ...savedPins];
  };
  const displayPins = getDisplayPins();
  return (
    <div className={styles.user_pins_wrapper}>
      <div className={styles.user_profileInfo_wrapper}>
        <ProfileInfo />
      </div>
      <div className={styles.tab_button_wrapper}>
        <button
          className={`${styles.tab_button} ${activeTab === "MyPins" ? styles.active : ""}`}
          onClick={() => setActiveTab("MyPins")}
        >
          My pins
        </button>
        <button
          className={`${styles.tab_button} ${activeTab === "Created" ? styles.active : ""}`}
          onClick={() => setActiveTab("Created")}
        >
          Created
        </button>
        <button
          className={`${styles.tab_button} ${activeTab === "Saved" ? styles.active : ""}`}
          onClick={() => setActiveTab("Saved")}
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
