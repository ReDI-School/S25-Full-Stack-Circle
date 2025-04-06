import React from 'react';
import FeaturedBoardCard from './FeaturedBoardCard';
import './FeaturedBoards.css';

const FeaturedBoards = () => {
  const boardsData = [
    {
      title: "Ballerina-Schuhe Outfits",
      pins: 53,
      daysAgo: 1,
      images: [
        "/public/images/BallerinaImg3.jpg",
        "/public/images/BallerinaImg2.jpg",
        "/public/images/BallerinaImg1.jpg"
      ]
    },
    {
      title: "Leckere Tofu-Rezepte",
      pins: 60,
      daysAgo: 2,
      images: [
        "/public/images/TofuImg1.jpg",
        "/public/images/TofuImg2.jpg",
        "/public/images/TofuImg3.jpg"
      ]
    },
    {
      title: "Mocktails & Drinks",
      pins: 44,
      daysAgo: 3,
      images: [
        "",
        "",
        ""
      ]
    }
  ];

  return (
    <div className="boards-container">
      <h2 className="section-title">Explore featured boards</h2>
      <div className="boards-grid">
        {boardsData.map((board, index) => (
          <FeaturedBoardCard key={index} board={board} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBoards;