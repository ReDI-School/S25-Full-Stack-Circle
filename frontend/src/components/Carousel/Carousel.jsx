import React from "react";
import Slider from "react-slick";

import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function SimpleSlider() {
  const imageSets = ['set1', 'set2', 'set3'];
  const allImageSets = imageSets.map(setName =>
    Array.from({ length: 18 }, (_, i) => `/images/Homepage-topimages/${setName}/${i + 1}.jpg`)
  );

  const [currentSetIndex, setCurrentSetIndex] = React.useState(0);
  const bgImages = allImageSets[currentSetIndex];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    beforeChange: (_, next) => {
  setCurrentSetIndex(next % allImageSets.length); // スライド番号に合わせて切り替え
}

  };

  const columnCount = 7;
  const columnHeights = [2, 2, 2, 2, 2, 2, 2];
  const columns = Array.from({ length: columnCount }, () => []);
  let imageIndex = 0;
  for (let col = 0; col < columnCount; col++) {
    for (let i = 0; i < columnHeights[col]; i++) {
      if (imageIndex < bgImages.length) {
        columns[col].push(bgImages[imageIndex]);
        imageIndex++;
      }
    }
  }

  return (
    <div>
<section className={styles.topSection}>
  {/* Text Slider */}
  <div className={styles.textWrapper}>
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



      
        <div className={styles.backgroundContainer}>
  {columns.map((columnImages, colIndex) => (
    <div key={colIndex} className={styles.column}>
      
      <div className={`${styles.offsetWrapper} ${styles[`offset-${colIndex}`]}`}>
      <div className={styles.cardList}>
  {columnImages.map((bg, index) => (
    <img
      key={index}
      src={bg}
      className={`${styles.bgImage} ${styles[`delay-${colIndex}`]}`} // ← delayをimgにかける！
    />
  ))}
</div>
      </div>
    </div>
  ))}
</div>
       </section>
    </div>
  );
}
