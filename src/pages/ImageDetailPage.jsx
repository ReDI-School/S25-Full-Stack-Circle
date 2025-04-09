import React from "react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ShopItem from './ImageDetailPage/ShopItem';
import Breadcrumb from './ImageDetailPage/Breadcrumb'; //


function ImageDetailPage() {
  return (
    <div className="p-4">
      {/* Breadcrumb Component*/}
      <Breadcrumb />

      <h1 className="text-xl font-bold mb-4">Image Detail Page</h1>


      <Link to="/explore" className="bg-gray-200 px-4 py-2 rounded">
        Back to Explore
      </Link>

      <CommentSection />
          
      {/* ShopItem component*/}
      <div className="mt-6">
        <ShopItem />
      </div>

    </div>
  );
}

export default ImageDetailPage;