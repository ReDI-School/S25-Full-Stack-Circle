import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ categoryName }) => (
  <nav className="breadcrumb">
    <Link to="/explore" className="breadcrumb-link">
      Explore
    </Link>
    <span className="breadcrumb-separator">›</span>
    <span className="breadcrumb-current">{categoryName || "Category"}</span>
  </nav>
);

export default Breadcrumb;
