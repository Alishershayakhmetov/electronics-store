import React, { useState, useEffect } from "react";
import style from "./carousel.module.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div className={style.carouselContainer}>
        <ul className={style.carousel}>
          {images.map((image, index) => (
            <li
              key={index}
              className={
                index === currentIndex
                  ? style.slide + " " + style.active
                  : style.slide
              }
            >
              <img
                src={image}
                alt={image}
                style={{ width: "400px", height: "400px" }}
              />
            </li>
          ))}
        </ul>
        <ul className={style.carousel}>
          {images.map((image, index) => {
            return (
              <li
                key={index}
                className={
                  style.slide + " " + style.active + " " + style.smallBlock
                }
              >
                <img
                  src={image}
                  alt={image}
                  className={style.smallBlock + " " + style.smallImg}
                />
              </li>
            );
          })}
        </ul>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
