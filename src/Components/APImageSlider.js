import React, { useState } from "react";
import { APSlideData } from "./APSliderData";

const IdAPImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="IdAPSlider">
      <a className="id-AP-left-arrow" onClick={prevSlide}>
        &#8249;
      </a>
      <a className="id-AP-right-arrow" onClick={nextSlide}>
        &#8250;
      </a>
      {APSlideData.map((slide, index) => {
        return (
          <div
            className={index === current ? "idslide active" : "idsslide"}
            key={index}
          >
            {index === current && (
              <img
                className="IdSliderImages"
                src={slide.image}
                height={300}
                width={230}
                alt="logos Ana Paula"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default IdAPImageSlider;
