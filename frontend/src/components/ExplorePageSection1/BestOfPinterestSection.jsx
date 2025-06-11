import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BestOfPinterestSection.module.css";
import SeeMoreButton from "../SeeMoreButton";
// import { cards } from "./cardDetails";
import { fetchPins } from "../../services/pinService";
import PinSkeleton from "./PinSkeleton";

const BestOfPinterestSection = () => {
  const INITIAL_VISIBLE = 3;
  const ITEM_INCREMENT = 3;

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  useEffect(() => {
    const loadPins = async () => {
      try {
        setLoading(true);
        const fetchedPins = await fetchPins(1, INITIAL_VISIBLE + 3);

        // Initialize load status for each pin
        const initialStatus = {};
        fetchedPins.forEach(pin => {
          initialStatus[pin.id] = false;
        });
        setImageLoadStatus(initialStatus);

        setPins(fetchedPins);
        setHasMore(fetchedPins.length > INITIAL_VISIBLE);
      } catch (error) {
        console.error("Error loading pins:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPins();
  }, []);

  const handleSeeMoreClick = async () => {
    const nextCount = visibleCount + ITEM_INCREMENT;

    if (nextCount > pins.length) {
      try {
        setLoading(true);
        const newPins = await fetchPins(2, ITEM_INCREMENT);

        if (newPins.length === 0) {
          setHasMore(false);
        } else {
          // Initialize load status for new pins
          const newStatus = {};
          newPins.forEach(pin => {
            newStatus[pin.id] = false;
          });
          setImageLoadStatus(prev => {
            return { ...prev, ...newStatus };
          });

          setPins(prev => [...prev, ...newPins]);
        }
      } catch (error) {
        console.error("Error loading more pins:", error);
      } finally {
        setLoading(false);
      }
    }
    setVisibleCount(nextCount);
  };

  const handleImageLoad = pinId => {
    setImageLoadStatus(prev => {
      return { ...prev, [pinId]: true };
    });
  };

  const isSeeMoreVisible = hasMore && pins.length > 0;

  return (
    <div>
      <h1 className={styles.exploreSection}>Explore the Best of Pinterest</h1>

      <div className={styles.cardContainer}>
        {loading && pins.length === 0
          ? Array(INITIAL_VISIBLE)
              .fill()
              .map((_, index) => <PinSkeleton key={`skeleton-${index}`} />)
          : pins.slice(0, visibleCount).map(pin => (
              <Link to={`/pin/${pin.id}`} key={pin.id}>
                <div className={styles.card}>
                  {!imageLoadStatus[pin.id] && <PinSkeleton />}
                  <img
                    src={pin.imageUrl}
                    alt={pin.altText || pin.title}
                    onLoad={() => handleImageLoad(pin.id)}
                    onError={() => handleImageLoad(pin.id)} // Fallback to skeleton if error
                    style={{
                      display: imageLoadStatus[pin.id] ? "block" : "none",
                      opacity: imageLoadStatus[pin.id] ? 1 : 0,
                      transition: "opacity 0.3s ease"
                    }}
                  />
                  <div
                    className={styles.cardOverlay}
                    style={{
                      opacity: imageLoadStatus[pin.id] ? 1 : 0,
                      transition: "opacity 0.3s ease"
                    }}
                  >
                    {pin.title && <p>{pin.title}</p>}
                    {pin.description && <h2>{pin.description}</h2>}
                  </div>
                </div>
              </Link>
            ))}
      </div>

      {isSeeMoreVisible && (
        <div className={styles.seeMoreButtonContainer}>
          <SeeMoreButton
            onClick={handleSeeMoreClick}
            text={loading ? "Loading..." : "See more"}
            className={styles.seeMoreButton}
          />
        </div>
      )}
    </div>
  );
};

export default BestOfPinterestSection;
