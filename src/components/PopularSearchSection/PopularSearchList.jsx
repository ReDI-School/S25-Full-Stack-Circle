import React from "react";
import PopularSearchBtn from "./PopularSearchBtn";

function PopularSearchList({ title, popularSearch }) {
  console.log("list=== ", popularSearch);
  return (
    <div>
      <h2 style={titleStyle}>{title}</h2>
      <ul style={listStyle}>
        {popularSearch?.map((idea, idx) => {
          return <PopularSearchBtn key={idea + idx} idea={idea} />;
        })}
      </ul>
    </div>
  );
}

const titleStyle = {
  margin: "64px 0 16px 0",
  color: "#111111",
  fontSize: "28px",
  fontWeight: "semibold",
};

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
};
export default PopularSearchList;
