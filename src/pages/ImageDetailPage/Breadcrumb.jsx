import React from "react";
import './Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <a href="#">Home</a>
      <span>/</span>
      <a href="#">Explore</a>
      <span>/</span>
      <a href="#">Jeans</a>
    </nav>
  );
};

export default Breadcrumb;