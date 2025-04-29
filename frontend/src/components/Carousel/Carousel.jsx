import React from "react";
import Slider from "react-slick";

import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgImages = Array.from({ length: 18 }, (_, i) => `/images/Homepage-topimages/${i + 1}.jpg`);

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <div>
      <section className={styles.topSection}>
        {/* Backbround Area*/}
        <div className={styles.backgroundContainer}>
        {/* Put 18 images */}
        {bgImages.map((bg, index) => (
            <img key={index} src={bg} className={styles.bgImage} />
          ))}
    </div>

      {/*  Text Slider */}
      <p className={styles.label}>Get your next</p>
      <Slider {...settings}>
        <div>
          <p className={`${styles.slideText} ${styles.Text1}`}>weeknight dinner idea</p>
        </div>
        <div>
          <p className={`${styles.slideText} ${styles.Text2}`}>home décor idea</p>
        </div>
        <div>
          <p className={`${styles.slideText} ${styles.Text3}`}>new outfit</p>
        </div>
        <div>
          <p className={`${styles.slideText} ${styles.Text4}`}>green thumb idea</p>
        </div>
      </Slider>
      </section>
    </div>
  );
}
