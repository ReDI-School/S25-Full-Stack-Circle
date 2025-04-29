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
        <img src="/images/bg1.jpg" className={styles.bgImage} />
        <img src="/images/bg2.jpg" className={styles.bgImage} />
        <img src="/images/bg3.jpg" className={styles.bgImage} />
        <img src="/images/bg4.jpg" className={styles.bgImage} />
        <img src="/images/bg5.jpg" className={styles.bgImage} />
        <img src="/images/bg6.jpg" className={styles.bgImage} />
        <img src="/images/bg7.jpg" className={styles.bgImage} />
        <img src="/images/bg8.jpg" className={styles.bgImage} />
        <img src="/images/bg9.jpg" className={styles.bgImage} />
        <img src="/images/bg10.jpg" className={styles.bgImage} />
        <img src="/images/bg11.jpg" className={styles.bgImage} />
        <img src="/images/bg12.jpg" className={styles.bgImage} />
        <img src="/images/bg13.jpg" className={styles.bgImage} />
        <img src="/images/bg14.jpg" className={styles.bgImage} />
        <img src="/images/bg15.jpg" className={styles.bgImage} />
        <img src="/images/bg16.jpg" className={styles.bgImage} />
        <img src="/images/bg17.jpg" className={styles.bgImage} />
        <img src="/images/bg18.jpg" className={styles.bgImage} />
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
