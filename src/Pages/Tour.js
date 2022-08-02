import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Tour() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,600;0,900;1,300&display=swap');
      </style>

      <Swiper
        className="tour-body"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="tour1">
            <h1 id="tour-welcome1">Bem vindo</h1>
            <h1 id="tour-welcome2">à Riversing Design!</h1>
            <p id="tour-text1">Nesta fábrica de idéias</p>
            <p id="tour-text2">fazemos os mais diversos projetos</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tour2-text-div">
            <div className="tour2-text1">
              <h1>O que fazemos?</h1>
              <p>Somos uma equipe de Designers Gráficos</p>
              <p>focada em marcas e identidades visuais.</p>
            </div>

            <div className="tour2-text2">
              <h1>A Identidade Visual</h1>
              <p>é uma das partes mais importantes de qualquer empresa,</p>
              <p>negócio, ou até mesmo uma pessoa.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tour3-text-div">
            <div className="tour3-text1">
              <h1>Quando conhecemos bem</h1>
              <p>uma pessoa, tendemos a confiar mais nela,</p>
              <p>por saber como ela é.</p>
            </div>

            <div className="tour3-text2">
              <h1>Assim funciona a identidade de uma empresa.</h1>
              <p>Quando bem trabalhada, o cliente</p>
              <p>pode vê-la em qualquer lugar e reconhecê-la!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tour3-text-div">
            <div className="tour4-text">
              <h1>É isso que fazemos!</h1>
              <p>Criamos e organizamos marcas,</p>
              <p>para que possam alcançar o melhor de si!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tour3-text-div">
            <div className="tour4-text">
              <h1>Vamos começar?</h1>
              <p>Continue para o nosso site</p>
              <p>e siga a onda!</p>
            </div>
          </div>

          <a className="tour-home-button" href="/Home">
            <span>Vamos!</span>
          </a>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}

export default Tour;

<div className="tour1">
  <h1 id="tour-welcome1">Bem vindo</h1>
  <h1 id="tour-welcome2">à Riversing Design!</h1>
  <p id="tour-text1">Nesta fábrica de idéias</p>
  <p id="tour-text2">fazemos os mais diversos projetos</p>
</div>;
