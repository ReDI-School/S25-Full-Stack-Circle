import React, { useEffect, useState } from "react";
import "./ImageCard.css";
import ExpandIcon from "@mui/icons-material/Expand";
import { ImEnlarge2 } from "react-icons/im";
import { GrSearchAdvanced } from "react-icons/gr";

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
          <div className="buttons-div">
            <div className="button">
              <ImEnlarge2 />
            </div>
            <div className="button">
              <GrSearchAdvanced />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
