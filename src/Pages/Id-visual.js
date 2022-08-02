import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo_flat_transp from "../Img/LOGO_FLAT_TRANSP";
import { BsInstagram } from "react-icons/bs";
import CleanImageSlider from "../Components/CleanImageSlider";
import { CleanSlideData } from "../Components/CleanSlideData";
import { RenoveSlideData } from "../Components/RenoveSliderData";
import IdRenoveImageSlider from "../Components/RenoveImageSlider";
import IdCBImageSlider from "../Components/CBImageSlider";
import { CBSlideData } from "../Components/CBSliderData";
import IdCBMerchImageSlider from "../Components/CBMerchImageSlider";
import { CBMerchSlideData } from "../Components/CBMerchSliderData";
import IdCBLogoImageSlider from "../Components/CBLogoImageSlider";
import { CBLogoSlideData } from "../Components/CBLogoSliderData";
import { APSlideData } from "../Components/APSliderData";
import IdAPImageSlider from "../Components/APImageSlider";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import Modal from "react-modal";
import { BsList } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Chatbot from "react-chatbot-kit";
import config from "../Components/Chatbot/config";
import ActionProvider from "../Components/Chatbot/ActionProvider";
import MessageParser from "../Components/Chatbot/MessageParser";
import "react-chatbot-kit/build/main.css";

function Id_visual() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [chatIsOpen, setChatIsOpen] = useState(false);
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

      <header className="home-header">
        <div>
          <a href="Home" className="logo">
            {logo_flat_transp()}
          </a>
        </div>
        <div className="header-right">
          <a href="/Tour">Fazer tour</a>
          <a href="/portfolio/Ilustracoes">Portfólio</a>
        </div>
      </header>

      <header className="mobile-header1">
        <div>
          <a href="Home" className="mobile-header-logo">
            {logo_flat_transp()}
          </a>
        </div>
      </header>

      <header className="mobile-header2">
        <div>
          <button
            onClick={() => setModalIsOpen(true)}
            className="mobile-header-button"
          >
            <BsList />
          </button>
        </div>
      </header>

      <Modal
        className="mobile-header-modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ul>
          <li>
            <a className="mobile-header-modal-a" href="/Tour">
              Fazer tour
            </a>
          </li>
          <li>
            <a className="mobile-header-modal-a" href="/portfolio/Ilustracoes">
              Portfólio
            </a>
          </li>
        </ul>
      </Modal>

      <div className="chatbot-button-div">
        <button onClick={() => setChatIsOpen(true)} className="chatbot-button">
          <span id="chatbot-button-icon">
            <BsFillChatSquareTextFill />
          </span>
        </button>
      </div>

      <Modal
        className="chatbot-modal"
        isOpen={chatIsOpen}
        onRequestClose={() => setChatIsOpen(false)}
      >
        <div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            className="chatbotModal"
          />
        </div>
      </Modal>

      <body className="portfolio-body">
        <section>
          <div id="portfolio-title">
            <h1>Portfólio</h1>
            <a href="/portfolio/Ilustracoes">Ilustrações</a>
            <a href="/portfolio/Id-visual">Identidade Visual</a>
          </div>
        </section>

        <section>
          <div className="idSlidesDiv">
            <CleanImageSlider slides={CleanSlideData} />
            <IdRenoveImageSlider slides={RenoveSlideData} />
            <IdCBImageSlider slides={CBSlideData} />
            <IdCBMerchImageSlider slides={CBMerchSlideData} />
            <IdCBLogoImageSlider slides={CBLogoSlideData} />
            <IdAPImageSlider slides={APSlideData} />
          </div>
        </section>
      </body>

      <footer className="footer">
        <section>
          <div className="footer-logo-full">
            <div className="footer-logo">{logo_flat_transp()}</div>
            <div id="footer-text1">
              <span>Riversing</span>
            </div>
            <div id="footer-text2">
              <span>Design</span>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="contacts-title">
              <h3>Contatos:</h3>
            </div>

            <div className="contacts-container">
              <div>
                <div className="contacts-instaLogo">
                  <BsInstagram />
                </div>
                <div>
                  <a
                    className="contacts-instaText"
                    target="_blank"
                    href="https://www.instagram.com/riversing.design/"
                  >
                    @riversing.design
                  </a>
                </div>
              </div>

              <div>
                <div className="contacts-zapLogo">
                  <BsWhatsapp />
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511988239076&text=Ol%C3%A1%20Gustavo!%20Vim%20pelo%20seu%20site%2C%20poderia%20me%20ajudar%3F%20"
                    target="_blank"
                    className="contacts-zapText"
                  >
                    Gustavo Rios
                  </a>
                </div>
              </div>

              <div>
                <div className="contacts-faceLogo">
                  <BsFacebook />
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/riversing.design"
                    target="_blank"
                    className="contacts-faceText"
                  >
                    @riversing.design
                  </a>
                </div>
              </div>

              <div>
                <div className="contacts-mailLogo">
                  <SiGmail />
                </div>
                <div>
                  <a
                    href="mailto:gustavoriosdm@gmail.com?subject=Ol%C3%A1%20Gustavo,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA!"
                    target="_blank"
                    className="contacts-mailText"
                  >
                    gustavoriosdm@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </motion.div>
  );
}

export default Id_visual;
