import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css"; 

const Breadcrumb = ({ categories }) => {
  return (
    <nav className="breadcrumb-nav">
      {categories.map((category, index) => (
        <span key={index}>
          <Link to={category.link} className="breadcrumb-link">
            {category.name}
          </Link>
          {index < categories.length - 1 && (
            <span className="breadcrumb-separator">&gt;</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
