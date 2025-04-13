import React from "react";
import { Link } from "react-router-dom";
import ShopItem from './ImageDetailPage/ShopItem';
import Breadcrumb from './ImageDetailPage/Breadcrumb';

function ImageDetailPage() {
  return (
    <div className="pt-24"> {/**/}
      <Breadcrumb />

      <h1 className="text-xl font-bold mb-4"style={{marginTop:"50px",}} >Image Detail Page</h1>

      <Link to="/explore" className="text-red-600 underline font-medium mb-4 inline-block">
        ← Back to Explore
      </Link>

      <div className="mt-6 flex justify-center">
        <ShopItem />
      </div>
    </div>
  );
}

export default ImageDetailPage;
