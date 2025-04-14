import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p>
        平日晩ご飯のアイデア
        </p>
      </div>
      <div>
        <p>インテリアのアイデア
        </p>
      </div>
      <div>
        <p>最新ファッション</p>
      </div>
      <div>
        <p>ガーデニングのアイデア</p>
      </div>
    </Slider>
  );
}