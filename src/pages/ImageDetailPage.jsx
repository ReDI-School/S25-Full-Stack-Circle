import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCardComponent/ImageCard";
import ShopItem from "./ImageDetailPage/ShopItem";
import Breadcrumb from "./ImageDetailPage/Breadcrumb"; //

function ImageDetailPage() {
  return (
    <div className="p-4">
      {/* Breadcrumb Component*/}
      <Breadcrumb />

      <h1 className="text-xl font-bold mb-4">Image Detail Page</h1>
      <ImageCard />

      <Link to="/explore" className="bg-gray-200 px-4 py-2 rounded">
        Back to Explore
      </Link>

      {/* ShopItem component*/}
      <div className="mt-6">
        <ShopItem />
      </div>
    </div>
  );
}

export default ImageDetailPage;
