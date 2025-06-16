import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SeeMoreButton from "../SeeMoreButton";
import styles from "./BrowseByCategory.module.css";
import { fetchAllCategories } from "../../services/categoryService";

// Fallback image in case category has no image
const DEFAULT_CATEGORY_IMAGE = "https://picsum.photos/300/150?random=1";

const BrowseByCategory = () => {
  const INITIAL_VISIBLE = 10;
  const [categories, setCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCategories();
        setCategories(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  const handleSeeMoreClick = () => {
    setVisibleCount(categories.length);
  };

  const isSeeMoreVisible = visibleCount < categories.length;

  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Browse by category</h2>
      </div>

      {loading ? (
        <div className={styles.loadingContainer}>
          <p>Loading categories...</p>
        </div>
      ) : error ? (
        <div className={styles.errorContainer}>
          <p>{error}</p>
        </div>
      ) : categories.length === 0 ? (
        <div className={styles.emptyContainer}>
          <p>No categories found.</p>
        </div>
      ) : (
        <div className={styles.categoryGridContainer}>
          {categories.slice(0, visibleCount).map(category => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className={styles.categoryCard}
            >
              <div className={styles.categoryImage}>
                <img
                  src={category.imageUrl || DEFAULT_CATEGORY_IMAGE}
                  alt={category.title}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = DEFAULT_CATEGORY_IMAGE;
                  }}
                />
              </div>
              <div className={styles.categoryTitle}>
                <h3>{category.title}</h3>
                {category.description && (
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {!loading && !error && isSeeMoreVisible && (
        <div className={styles.seeMoreButtonContainer}>
          <SeeMoreButton
            onClick={handleSeeMoreClick}
            className={styles.seeMoreButton}
          />
        </div>
      )}
    </>
  );
};

export default BrowseByCategory;
