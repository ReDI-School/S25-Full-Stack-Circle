import React, { useState } from "react";
import { BiFontSize } from "react-icons/bi";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";

export default function DetailPage_buttons() {
  // Container styles for the entire component.
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // or 'flex-start', depending on your layout needs
    width: "492px",                  // adjust to your preferred width
    height: "48px",                  // adjust to your preferred height
    backgroundColor: "#ffffff",      // white background
    // optional, for rounded corners
    //boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // optional, for a slight shadow
  };

  // Button styles for the like/share icons.
  const buttonStyle = {
    height: "48px",
    width: "auto",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    border: "none",
    padding: "8px",
    cursor: "pointer",
  };

  // Styles for grouping elements (left and right)
  const groupLeftAndRightStyle = {
    display: "flex",
    alignItems: "center",
  };

  // Styles for the save button when unsaved.
  const unsavedStyle = {
    backgroundColor: "#e60023", // Red background for unsaved
    color: "#ffffff",           // White text
    border: "none",
    height: "48px",
    padding: "12px 16px",
    borderRadius: "45%",       // Rounded corners (if desired)
    cursor: "pointer",
    fontSize: "12px",
    transition: "all 0.3s ease",
  };

  // Styles for the save button when saved.
  const savedStyle = {
    backgroundColor: "#000000", // Black background for saved
    color: "#ffffff",           // White text
    border: "none",
    height: "48px",
    padding: "12px 16px",
    borderRadius: "45%",
    cursor: "pointer",
    fontSize: "12px",
    transition: "all 0.3s ease",
  };

  // State hooks for the saved and liked states.
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Toggle function for the save state.
  const handleClickSaved = () => {
    setIsSaved((prevState) => !prevState);
  };

  // Toggle function for the like state.
  const handleClickLiked = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div style={containerStyle}>
      <div style={groupLeftAndRightStyle}>
        <button style={buttonStyle} onClick={handleClickLiked}>
          {isLiked ? (
            <>
              <BsHeartFill
                style={{ width: "24px", height: "24px", color: "#e60023" }}
              />
              {/* Added a paragraph element next to the filled heart when liked.
                  The margin and padding adjustments ensure it aligns nicely. */}
              <p style={{ color: "#000000", margin: 0, paddingLeft: "4px" }}>
                123
              </p>
            </>
          ) : (
            <BsHeart
              style={{ width: "24px", height: "24px", color: "#000000" }}
            />
          )}
        </button>
        {/* Share and options icons remain clickable elements.
            Added cursor and margin for a more interactive feel. */}

        <FiShare
          style={{
            width: "24px",
            height: "24px",
            color: "#000000",
            cursor: "pointer",
            marginLeft: "8px",
          }}
        />

        <BsThreeDots
          style={{
            width: "24px",
            height: "24px",
            color: "#000000",
            cursor: "pointer",
            marginLeft: "8px",
          }}
        />
      </div>

      <div style={groupLeftAndRightStyle}>
        <button
          style={isSaved ? savedStyle : unsavedStyle}
          onClick={handleClickSaved}
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}