import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import styles from "./CardDetailPage.module.css";
import { cards } from "./cardDetails";
import { fetchPinById } from "../../services/pinService";

const CardDetailPage = () => {
  const { id } = useParams();
  const [pin, setPin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPins, setRelatedPins] = useState([]);

  useEffect(() => {
    const loadPin = async () => {
      try {
        setLoading(true);
        const fetchedPin = await fetchPinById(id);
        setPin(fetchedPin);

        // Load related pins (optional)
      } catch (error) {
        console.error("Error loading pin:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPin();
  }, [id]);

  const categories = [
    { name: "Explore", link: "/explore" },
    { name: "Electronics", link: "/electronics" },
    { name: "Cell Phones And Accessories", link: "/phones-accessories" },
    { name: "Phone Accessories", link: "/phone-accessories" }
  ];

  if (loading) {
    return <div className={styles.cardDetailPage}>Loading...</div>;
  }

  if (!pin) {
    return <div className={styles.cardDetailPage}>Pin not found!</div>;
  }

  return (
    <div className={styles.cardDetailPage}>
      <Breadcrumb categories={categories} />
      <div className={styles.cardImageContainer}>
        <img src={pin.imageUrl} alt={pin.altText || pin.title} />
        <div className={styles.cardOverlay}>
          <h1>{pin.title}</h1>
          <p>{pin.description}</p>
        </div>
      </div>
      <h3>{pin.tags?.map(tag => tag.name).join(", ")}</h3>

      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          {relatedPins.length > 0 ? (
            relatedPins.map(pin => (
              <div key={pin.id} className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <img
                    src={pin.imageUrl}
                    alt={pin.altText || pin.title}
                    className={styles.image}
                  />
                  <Link to={`/pin/${pin.id}`} className={styles.overlay}>
                    <span className={styles.overlayText}>Open</span>
                    <div className={styles.overlayButtons}>
                      <img
                        src="/images/share-icon.svg"
                        alt="Share"
                        className={styles.shareIcon}
                      />
                      <img
                        src="/image/more-icon.svg"
                        alt="More"
                        className={styles.moreIcon}
                      />
                    </div>
                  </Link>
                </div>
                <div className={styles.tags}>
                  {pin.tags?.map((tag, tagIndex) => (
                    <div key={tagIndex} className={styles.tag}>
                      {tag.name}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No related pins found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
