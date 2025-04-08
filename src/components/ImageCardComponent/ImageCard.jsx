import React, { useEffect, useState } from "react";
import "./ImageCard.css";
import ExpandIcon from "@mui/icons-material/Expand";

function ImageCard() {
  return (
    <>
      <div className="wrapper">
        <div className="image-card">
          <img
            className="image"
            src="https://i.pinimg.com/736x/21/fd/0f/21fd0f5ef475dcdd2764425327c0ee68.jpg"
            alt=""
          />
          <div className="button">
            <button>
              View larger
              {/* <ExpandIcon /> */}
            </button>

            <button>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
