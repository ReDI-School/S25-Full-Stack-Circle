import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import PinDetailComponent from "../../components/PinDetailComponent";
import CommentSection from "./CommentSection";
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
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetch pins");
    const fetchPins = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:4000/api/pins");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.pins);
        const pins = data.pins;
        const foundPin = pins.find(pin => pin.link === imageSrc);

        if (foundPin) {
          const imgId = foundPin.id;
          setId(imgId);
        } else {
          console.log("No pin found with that link.");
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
        <p className={styles.brand}>Order Of Style</p>
        <p className={styles.title}>Le High Skinny Jean...</p>
        <p className={styles.price}>€ 1,95</p>

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
