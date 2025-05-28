import { SlArrowUp } from "react-icons/sl";
import styles from "./ScrollToTop.module.css";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.top}>
      <div className={styles.position}>
        {isVisible && (
          <SlArrowUp onClick={scrollToTop} className={styles.style} />
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
