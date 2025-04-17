import React from 'react';
import FeaturedBoardCard from './FeaturedBoardCard';
import styles from './FeaturedBoards.module.css';


const generateRandomImages = (id) => [
  `https://picsum.photos/seed/${id}-1/300/300`,
  `https://picsum.photos/seed/${id}-2/150/145`,
  `https://picsum.photos/seed/${id}-3/150/145`,
];

const baseBoards = [
  { title: "Ballerina-Schuhe Outfits", pins: 53, daysAgo: 1 },
  { title: "Leckere Tofu-Rezepte", pins: 60, daysAgo: 2 },
  { title: "Mocktails & Drinks", pins: 44, daysAgo: 3 },
  { title: "Osterbrunch-Ideen", pins: 47, daysAgo: 5 },
  { title: "Inspirierende Sprüche", pins: 60, daysAgo: 5 },
  { title: "Playlist-Cover-Ideen", pins: 84, daysAgo: 1 },
  { title: "Hautpflege für Männer", pins: 75, daysAgo: 1 },
  { title: "Alles voller Sticker", pins: 50, daysAgo: 5 },
  { title: "Split-Screen-Fotoideen", pins: 61, daysAgo: 1 },
  { title: "Abiball-Frisuren", pins: 61, daysAgo: 1 },
];


const boardsData = baseBoards.map((board, index) => ({
  ...board,
  images: generateRandomImages(index)
}));

const FeaturedBoards = () => {
  return (
    <div className={styles.boardsContainer}>
      <h2 className={styles.sectionTitle}>Explore featured boards</h2>
      <div className={styles.boardsGrid}>
        {boardsData.map((board, index) => (
          <FeaturedBoardCard key={index} board={board} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBoards;

