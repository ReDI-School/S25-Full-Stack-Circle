import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const FeaturedBoardCard = ({ board }) => {
  return (
    <div className="board-card">
      <div className="board-images">
        <div className="left-img">
          <img src={board.images[0]} alt={`${board.title} 0`} />
        </div>
        <div className="right-imgs">
          <img src={board.images[1]} alt={`${board.title} 1`} />
          <img src={board.images[2]} alt={`${board.title} 2`} />
        </div>
      </div>
      <div className="board-info">
        <h3>{board.title}</h3>

        <div className="board-meta">
          <span className="verified">
            Pinterest Deutschland
            <CheckCircleIcon style={{ color: "red", fontSize: 16 }} />
          </span>
        </div>

        <p>
          {board.pins} Pins • {board.daysAgo}d
        </p>
      </div>
    </div>
  );
};

export default FeaturedBoardCard;
