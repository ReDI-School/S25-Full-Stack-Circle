import React from "react";

const recommendations = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    text: "Item 1",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523475496153-55998bcd498f",
    text: "Item 2",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
    text: "Item 3",
    link: "#",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    text: "Item 4",
    link: "#",
  },
];

const RecommendationList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {recommendations.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="flex flex-col items-center bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.text}
            className="w-24 h-24 object-cover rounded-md"
          />
          <span className="mt-2 text-center text-sm font-semibold text-gray-700">
            {item.text}
          </span>
        </a>
      ))}
    </div>
  );
};

export default RecommendationList;
