import React from 'react';
import { Link } from 'react-router-dom';
import { cards } from './cardDetails';
import './ExplorePage_Best_Of_Pinterest_Section.css';

const ExplorePage_Best_Of_Pinterest_Section = () => {
  return (
    <div>
      <h1 className="explore-section">Explore the Best of Pinterest</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Link
            to={`/card/${index}`}
            key={index}
          >
            <div className="card">
              <img src={card.image} alt={card.title} />
              <div className="card-overlay">
                <p>{card.title}</p>
                <h2>{card.subtitle}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage_Best_Of_Pinterest_Section;