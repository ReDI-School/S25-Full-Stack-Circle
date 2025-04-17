import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css"; 

const Breadcrumb = ({ categories }) => {
  return (
    <nav className={styles.breadcrumbNav}>
      {categories.map((category, index) => (
        <span key={index}>
          <Link to={category.link} className={styles.breadcrumbLink}>
            {category.name}
          </Link>
          {index < categories.length - 1 && (
            <span className={styles.breadcrumbSeparator}>&gt;</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
