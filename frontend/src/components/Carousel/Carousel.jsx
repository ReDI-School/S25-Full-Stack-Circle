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

  // カラムごとの配列を作る（5個の空配列を用意）
  const columns = [[], [], [], [], []];
  bgImages.forEach((bg, index) => {
    columns[index % 5].push(bg);
  });

  return (
    <div>
      <section className={styles.topSection}>
        <div className={styles.backgroundContainer}>
          {columns.map((columnImages, colIndex) => (
            <div key={colIndex} className={styles.column}>
              {columnImages.map((bg, index) => {
                const delayClass = `delay-${colIndex}`; // カラムごとにdelayをつける
                return (
                  <img key={index} src={bg} className={`${styles.bgImage} ${styles[delayClass]}`} />
                );
              })}
            </div>
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
