import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import PinDetailComponent from "../../components/PinDetailComponent";
import CommentSection from "../../components/ExplorePageSection1/CommentSection";
import styles from "./ShopItem.module.css";

const suggestions = [
  "Art journal",
  "Collage art",
  "Art inspo",
  "Creative",
  "Create board"
];

const ShopItem = ({ imageSrc }) => {
  // let imgId = 0;
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const popupRef = useRef(null);
  const [pins, setPins] = useState([]);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:4000/api/pins");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const pins = data.pins;

        // Try to find the pin by exact match first
        let foundPin = pins.find(pin => pin.imageUrl === imageSrc);

        // If not found, try a more flexible match (e.g., the image path might be partial)
        if (!foundPin && imageSrc) {
          // Try to find by filename or partial path match
          const imgName = imageSrc.split("/").pop(); // Get the filename from the path
          foundPin = pins.find(pin => {
            if (!pin.imageUrl) return false;
            return (
              pin.imageUrl.includes(imgName) || imageSrc.includes(pin.imageUrl)
            );
          });
        }

        // If still not found, just use the first pin for demo purposes
        if (!foundPin && pins.length > 0) {
          foundPin = pins[0];
          console.log("Using first available pin as fallback");
        }

        if (foundPin) {
          const imgId = foundPin.id;
          setId(imgId);
          setPins(foundPin);
        } else {
          console.error("No pin found with that link.");
          // Set a default ID to avoid breaking the comment section
          setId(1); // Use a default ID or handle the absence differently
        }
      } catch (e) {
        console.error("Failed to fetch pins:", e);
        setError("Failed to load pins. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPins();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // Tags for the Pinterest-style tag list
  const hashtags = [
    "#inktober",
    "#inktober24",
    "#inktober2024",
    "#day16",
    "#inktoberday16",
    "#grungy"
  ];

  return (
    <div className={styles["shop-item"]}>
      {/* Left side - Image */}
      <div className={styles["shop-item-image"]}>
        <img src={imageSrc || "https://picsum.photos/300/300"} alt="Product" />
      </div>

      {/* Right side - Content details */}
      <div className={styles["shop-item-details"]}>
        {/* Profile and Save buttons - updated to match design */}
        <div className={styles["profile-wrapper"]} ref={popupRef}>
          <button
            className={styles["profile-button"]}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Profile <IoMdArrowDropdown />
          </button>
          {menuOpen && (
            <div className={styles["profile-popup"]}>
              <input
                type="text"
                className={styles["search-input"]}
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <ul className={styles.suggestions}>
                {filteredSuggestions.map((item, index) => (
                  <li key={index} className={styles["suggestion-item"]}>
                    <button>+ {item}</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className={styles["Save-button"]}>Save</button>
        </div>
        {/* Product info */}
        <p className={styles.brand}>{pins.title}</p>
        <p className={styles.title}>{pins.description}</p>
        <div className={styles["shop-item-description"]}>
          {/* Pin details */}
          <PinDetailComponent />

          {/* Tags */}
          <div className={styles["tag-list"]}>
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className={styles.tag}
                onClick={() => console.info(`Clicked ${tag}`)}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* This flexible spacer pushes the comment section to bottom */}
          <div className={styles["content-spacer"]}></div>

          {/* Comment section at the very bottom where the photo ends */}
          <CommentSection imgId={id} />
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
