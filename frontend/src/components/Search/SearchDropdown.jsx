import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import useDebounce from "../../hooks/useDebounce";
import styles from "./SearchDropdown.module.css";

// A mock list of potential search terms
const MOCK_SUGGESTIONS = [
    "rock painting ideas",
    "rockstar aesthetic",
    "rock concert outfit",
    "rock painting",
    "rock lee",
    "rockstar outfit",
    "rockstar girlfriend aesthetic",
    "rock garden",
    "rocking chair",
    "logo design",
    "logo inspiration",
    "architecture drawing", "architecture portfolio"
];

const popularSearches = [
    {
        name: "Organspende tattoo",
        img: "https://i.pinimg.com/736x/a4/04/29/a404295ee9ceb7366b0068144abaf3f9.jpg"
    },
    {
        name: "Pfingst wochenende",
        img: "https://i.pinimg.com/236x/21/fd/0f/21fd0f5ef475dcdd2764425327c0ee68.jpg"
    },
    {
        name: "Geburtstagskarte basteln",
        img: "https://i.pinimg.com/236x/6d/c5/dd/6dc5dd834698dd083ebc1ddb319df53f.jpg"
    },
    {
        name: "Pfingsten lustige bilder gif",
        img: "https://i.pinimg.com/236x/17/74/ef/1774ef031f3c94300f193980216bd0d0.jpg"
    }
];

// --- CHANGE IS HERE ---
// We add a default value to currentInput. If it's not passed, it will be an empty string.
function SearchDropdown({ currentInput = "" }) {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearchTerm = useDebounce(currentInput, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = MOCK_SUGGESTIONS.filter(item =>
        item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  const handleSuggestionClick = suggestion => {
    navigate(`/search?q=${suggestion}`);
  };

  // --- AND ANOTHER CHANGE IS HERE ---
  // We check if currentInput exists before checking its length.
  const showSuggestions = currentInput && currentInput.length > 0;

    return (
        <div className={styles.dropdownContainer}>
            {showSuggestions ? (
                <ul className={styles.suggestionsList}>
                {suggestions.map(item => (
                    <li
                    key={item}
                    className={styles.suggestionItem}
                    onClick={() => handleSuggestionClick(item)}
                    >
                    <FiSearch className={styles.suggestionIcon} />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            ) : (
                <>
                    <h4 className={styles.title}>Popular on Pinterest</h4>
                    <div className={styles.itemContainer}>
                        {popularSearches.map(item => (
                        <div key={item.name}className={styles.gridItem}>
                            <img
                                src={item.img}
                                alt={item.name}
                                className={styles.gridImage}
                            />
                            <span className={styles.gridItemText}>{item.name}</span>
                        </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default SearchDropdown;
