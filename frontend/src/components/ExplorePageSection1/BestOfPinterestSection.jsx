import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BestOfPinterestSection.module.css";
import SeeMoreButton from "../SeeMoreButton";
import { fetchPins } from "../../services/pinService";
import PinSkeleton from "./PinSkeleton";

const BestOfPinterestSection = () => {
  const INITIAL_VISIBLE = 3;
  const ITEM_INCREMENT = 3;

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadPins = async () => {
      try {
        setLoading(true);
        const fetchedPins = await fetchPins(1, INITIAL_VISIBLE + 3);
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
        setPins(prev => [...prev, ...newPins]);
        setHasMore(newPins.length > 0);
      } catch (error) {
        console.error("Error loading more pins:", error);
      } finally {
        setLoading(false);
      }
    }
    setVisibleCount(nextCount);
  };

  const isSeeMoreVisible = hasMore && pins.length > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.exploreSection}>Explore the Best of Pinterest</h1>

      <div className={styles.cardContainer}>
        {loading && pins.length === 0
          ? Array(INITIAL_VISIBLE)
              .fill()
              .map((_, index) => <PinSkeleton key={`skeleton-${index}`} />)
          : pins.slice(0, visibleCount).map(pin => (
              <Link to={`/pin/${pin.id}`} key={pin.id}>
                <div className={styles.card}>
                  {loading ? (
                    <PinSkeleton />
                  ) : (
                    <>
                      <img
                        src={pin.imageUrl}
                        alt={pin.altText || pin.title}
                        className={styles.pinImage}
                        onError={e => {
                          e.target.src = "/fallback-image.jpg";
                        }}
                      />
                      <div className={styles.cardOverlay}>
                        {pin.title && <p>{pin.title}</p>}
                        {pin.description && <h2>{pin.description}</h2>}
                      </div>
                    </>
                  )}
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
