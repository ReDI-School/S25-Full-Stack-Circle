import React from "react";
import { useParams } from "react-router-dom";
import "./CardDetailPage.css"; 
import { cards } from "./cardDetails"; 
import Breadcrumb from "./Breadcrumb";

const CardDetailPage = () => {
  const { id } = useParams();

  const card = cards[parseInt(id)];

  const categories = [
    { name: "Explore", link: "/explore" },
    { name: "Electronics", link: "/electronics" },
    { name: "Cell Phones And Accessories", link: "/phones-accessories" },
    { name: "Phone Accessories", link: "/phone-accessories" },
    ];

  if (!card) {
    return <div className="card-detail-page">Card not found!</div>;
  }

return (
  <div className="card-detail-page">
    <Breadcrumb categories={categories} />
    <div className="card-image-container">
      <img src={card.image} alt={card.title} />
      <div className="card-overlay">
        <h1>{card.title}</h1>
        <p>{card.description}</p>
      </div>
    </div>
    <h3>{card.subtitle}</h3>
  </div>
);

};

export default CardDetailPage;
