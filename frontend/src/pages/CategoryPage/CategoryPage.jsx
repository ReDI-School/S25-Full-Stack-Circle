import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fetchCategoryById,
  fetchCategoryPins
} from "../../services/categoryService";
import styles from "./CategoryPage.module.css";

const CategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [relatedPins, setRelatedPins] = useState([]);

  useEffect(() => {
    const loadCategoryAndPins = async () => {
      try {
        setLoading(true);
        const [categoryData, pinsData] = await Promise.all([
          fetchCategoryById(id),
          fetchCategoryPins(id)
        ]);

        setCategory(categoryData);
        setPins(pinsData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch category data:", err);
        setError(
          "Failed to load category information. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadCategoryAndPins();
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Loading category information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>{error}</p>
        <Link to="/explore" className={styles.backLink}>
          Back to Explore
        </Link>
      </div>
    );
  }

  if (!category) {
    return (
      <div className={styles.notFoundContainer}>
        <p>Category not found</p>
        <Link to="/explore" className={styles.backLink}>
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.categoryPage}>
      <div className={styles.categoryHeader}>
        <Link to="/explore" className={styles.backLink}>
          ← Back to Explore
        </Link>
        <h1 className={styles.categoryTitle}>{category.title}</h1>
        {category.description && (
          <p className={styles.categoryDescription}>{category.description}</p>
        )}
      </div>

      {pins.length === 0 ? (
        <div className={styles.emptyPinsContainer}>
          <p>No pins found in this category.</p>
        </div>
      ) : (
        <div className={styles.pinsGrid}>
          {pins.map(pin => (
            <Link
              to={`/detail/${pin.id}`}
              key={pin.id}
              className={styles.pinCard}
            >
              <div className={styles.imageContainer}>
                <img
                  src={pin.imageUrl}
                  alt={pin.title}
                  className={styles.pinImage}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Image+Not+Available";
                  }}
                />
              </div>
              <div className={styles.pinInfo}>
                <h3 className={styles.pinTitle}>{pin.title}</h3>
                {pin.author && (
                  <p className={styles.pinAuthor}>
                    by {pin.author.name || pin.author.email}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
