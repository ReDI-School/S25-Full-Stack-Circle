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
  const [visibleImages, setVisibleImages] = React.useState(allImageSets[0]);


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
  const nextImages = allImageSets[next % allImageSets.length];

  // 各列ごとに遅れて1枚ずつ更新する
  const newImages = [...visibleImages]; // いったんコピー

  let delay = 0;
  const colCount = 7;
  const imgsPerCol = 2;

  for (let col = 0; col < colCount; col++) {
    setTimeout(() => {
      for (let row = 0; row < imgsPerCol; row++) {
        const i = col * imgsPerCol + row;
        newImages[i] = nextImages[i];
      }
      // 変更された画像を表示する
      setVisibleImages([...newImages]);
    }, delay);

    delay += 300; // 0.3秒ずつ遅らせる
  }

  setCurrentSetIndex(next % allImageSets.length);
},
};

  const columnCount = 7;
  const columnHeights = [2, 2, 2, 2, 2, 2, 2];
 const columns = Array.from({ length: columnCount }, () => []);
let imageIndex = 0;
for (let col = 0; col < columnCount; col++) {
  for (let i = 0; i < columnHeights[col]; i++) {
    if (imageIndex < visibleImages.length) {
      columns[col].push(visibleImages[imageIndex]);
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
          key={`${colIndex}-${index}-${bg}`} // 画像のURLが変われば再レンダリングされる
          src={bg}
          className={`${styles.bgImage} ${styles[`delay-${colIndex}`]}`}
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
