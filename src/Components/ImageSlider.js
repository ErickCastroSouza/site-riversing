import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="homeSlider">
      <FaArrowAltCircleLeft className="home-left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="home-right-arrow" onClick={nextSlide} />
      <a className="mobile-home-left-arrow" onClick={prevSlide}>
        &#8249;
      </a>
      <a className="mobile-home-right-arrow" onClick={nextSlide}>
        &#8250;
      </a>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                className="homeSliderImages"
                src={slide.image}
                height={500}
                width={270}
                alt="imagem de apresentação"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
