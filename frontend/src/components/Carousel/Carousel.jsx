import React from "react";
import Slider from "react-slick";

import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
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
    </div>
  );
}
