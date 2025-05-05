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

 // 前提：bgImagesは全18枚くらいの画像配列
const columnCount = 7;
const columnHeights = [3, 2, 2, 1, 2, 2, 3]; // V字型に見せるための割り当て数

// 空の配列（各カラムに画像を入れる箱）を作成
const columns = Array.from({ length: columnCount }, () => []);

// 順番に割り振る処理
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
      <div className={styles.backgroundContainer}>
  {columns.map((columnImages, colIndex) => (
    <div key={colIndex} className={styles.column}>
            {/* ここ ↓ に delay クラス付きで入れる！ */}
            <div className={`${styles.cardList} ${styles[`delay-${colIndex}`]}`}>
            {columnImages.map((bg, index) => (
    <img
      key={index}
      src={bg}
      className={styles.bgImage}
    />
  ))}
</div>
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
