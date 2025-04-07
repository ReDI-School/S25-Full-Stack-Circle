import React from "react";

import "./ImageCard.css";

function ImageCard() {
  return (
    <>
      <div className="image-card">
        {/*
  <p>Image Card on the left</p>
  */}
        <img className="image" src="" height={500} width={600} alt="" />
        <div className="buttons">
          <button>
            enlarge button
            <span>enlarge</span>
          </button>
          <button>
            <span>explore</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
