import React from "react";
import { useParams } from "react-router-dom";

const CardDetailPage = () => {
  const { id } = useParams();

  const cards = [
    {
      image: "https://i.pinimg.com/736x/a4/04/29/a404295ee9ceb7366b0068144abaf3f9.jpg",
      title: "Freshly picked for spring",
      subtitle: "New season, new nails",
      description: "Discover fresh nail styles perfect for the spring season.",
    },
    {
      image: "https://i.pinimg.com/736x/bf/40/3b/bf403bc1720060dbe87ff30e7c11c489.jpg",
      title: "Spice up your outfits",
      subtitle: "Cool style classics",
      description: "Upgrade your wardrobe with these stylish outfit ideas.",
    },
    {
      image: "https://i.pinimg.com/736x/42/f6/4c/42f64c71899831d570f997a422ea8ddc.jpg",
      title: "Sunbathing is the order of the day",
      subtitle: "Restart: Spring",
      description: "Relax and enjoy the lightness of spring with outdoor fun.",
    },
  ];

  const card = cards[parseInt(id)];

  if (!card) {
    return <div>Card not found!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{card.title}</h1>
      <img src={card.image} alt={card.title} style={{ width: "500px", height: "400px", borderRadius: "10px" }} />
      <h3 className="text-lg mt-4">{card.subtitle}</h3>
      <p className="mt-4">{card.description}</p>
    </div>
  );
};

export default CardDetailPage;
