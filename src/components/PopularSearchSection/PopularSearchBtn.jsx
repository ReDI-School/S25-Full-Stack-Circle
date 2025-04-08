import React from "react";

function PopularSearchBtn({ idea }) {
  return (
    <div style={container}>
      <button style={btnStyle}>
        <span style={iconStyle}>{searchIcon}</span>
        {idea}
      </button>
    </div>
  );
}
const container = {
  margin: "0px 16px 16px 0",
};
const btnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContents: "space-between",
  border: "none",
  backgroundColor: "E9E9E9",
  borderRadius: "999px",
  padding: ".8rem 1.1rem",
};
const iconStyle = {
  margin: "0 8px 0 0 ",
  width: "16px",
  height: "16px",
};
// svg for the icon
const searchIcon = (
  <svg
    aria-label="Trending search link"
    class="BNH gUZ U9O kVc"
    height="16"
    role="img"
    viewBox="0 0 24 24"
    width="16"
    fill="#767676"
  >
    <path d="M10 16a6 6 0 1 1 .02-12.01A6 6 0 0 1 10 16m13.13 2.88L21 16.75l-2.13-2.13a10 10 0 1 0-4.24 4.24L16.75 21l2.13 2.13a3 3 0 0 0 4.25 0 3 3 0 0 0 0-4.24"></path>
  </svg>
);
export default PopularSearchBtn;
