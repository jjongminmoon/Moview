"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true
  };

  return (
    <div className="mt-5" id="slick-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
