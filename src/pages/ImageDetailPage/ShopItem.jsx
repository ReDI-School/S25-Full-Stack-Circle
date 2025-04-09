import React from "react";
import './ShopItem.css';

const ShopItem = () => {
  return (
    <div className="shop-item">
      <div className="shop-item-image">
        <img
          src="https://picsum.photos/300/300"
          alt="Product"
        />
      </div>
      <div className="shop-item-details">
        <p className="brand">Order Of Style</p>
        <p className="title">Le High Skinny Jean...</p>
        <p className="price">€ 1,95</p>
      </div>
    </div>
  );
};

export default ShopItem;
