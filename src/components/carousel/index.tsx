import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./style.scss";

export const Carousel = ({ images }: { images: Array<string> }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            className="carousel-image"
            width={500}
            height={500}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  );
};
