import React from "react";
import Slider from "react-slick";
import "./Slider.scss";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
  };
  return (
    <Slider {...settings} className="slider">
      <div className="slide-1 slide"></div>
      <div className="slide-2 slide"></div>
      <div className="slide-3 slide"></div>
      <div className="slide-4 slide"></div>
      <div className="slide-5 slide"></div>
      <div className="slide-6 slide"></div>
    </Slider>
  );
}
