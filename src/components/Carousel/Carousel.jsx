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
        weeknight dinner idea
        </p>
      </div>
      <div>
        <p>home décor idea
        </p>
      </div>
      <div>
        <p>new outfit</p>
      </div>
      <div>
        <p>green thumb idea
        </p>
      </div>
    </Slider>
  );
}