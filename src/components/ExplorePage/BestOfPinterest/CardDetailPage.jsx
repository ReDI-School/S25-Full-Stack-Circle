import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CardDetailPage.module.css";
import { cards } from "./cardDetails";
import Breadcrumb from "./Breadcrumb";

const CardDetailPage = () => {
  const { id } = useParams();

  const card = cards[parseInt(id)];

  const categories = [
    { name: "Explore", link: "/explore" },
    { name: "Electronics", link: "/electronics" },
    { name: "Cell Phones And Accessories", link: "/phones-accessories" },
    { name: "Phone Accessories", link: "/phone-accessories" }
  ];

  if (!card) {
    return <div className="card-detail-page">Card not found!</div>;
  }

  return (
    <div className={styles.cardDetailPage}>
      <Breadcrumb categories={categories} />
      <div className={styles.cardImageContainer}>
        <img src={card.image} alt={card.title} />
        <div className={styles.cardOverlay}>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
        </div>
      </div>
      <h3>{card.subtitle}</h3>
    </div>
  );
};

export default CardDetailPage;
