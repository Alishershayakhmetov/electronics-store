import React, { useState, useEffect } from "react";

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
    <div className="carousel-container">
      <ul className="carousel">
        {images.map((image, index) => (
          <li
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            <img
              src={"src/assets/notebook/" + image.src}
              alt={image.alt}
              style={{ width: "500px", height: "300px" }}
            />
          </li>
        ))}
      </ul>
      <ul className="carousel">
        {images.map((image, index) => {
          return (
            <li key={index} className="slide active small-block">
              <img
                src={"/src/assets/notebook/" + image.src}
                alt={image.alt}
                className="small-block small-img"
              />
            </li>
          );
        })}
      </ul>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageCarousel;
