import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Portfolio from "./Portfolio";
import Home from "./Home";
import logo_flat_transp from "../Img/LOGO_FLAT_TRANSP";
import chatbot from "../Components/Chatbot/Chatbot";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Modal from "react-modal";
import { BsList } from "react-icons/bs";

function Contact() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          <a href="/contact">Tire suas dúvidas</a>
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

      <div className="contact-body">
        <section>
          <div className="bot-div">{chatbot()}</div>
        </section>

        <section className="contact-section2">
          <div>
            <h1 id="contact-section2-title">Não conseguiu tirar sua dúvida?</h1>
            <p id="contact-section2-text"> fale diretamente comigo!</p>
          </div>

          <ul className="contacts-ul">
            <li>
              <HiOutlineMail id="contacts-ul-icons" />
              <a href="mailto:gustavoriosdm@gmail.com?subject=Ol%C3%A1%20Gustavo,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA!">
                gustavoriosdm@gmail.com
              </a>
            </li>

            <li>
              <BsInstagram id="contacts-ul-icons" />
              <a href="https://www.instagram.com/riversing.design/">
                @riversing.design
              </a>
            </li>

            <li>
              <BsWhatsapp id="contacts-ul-icons" />
              <a href="https://api.whatsapp.com/send?phone=5511988239076&text=Ol%C3%A1%20Gustavo!%20Vim%20pelo%20seu%20site%2C%20poderia%20me%20ajudar%3F%20 ">
                Gustavo Rios
              </a>
            </li>

            <li>
              <BsFacebook id="contacts-ul-icons" />
              <a href="https://www.facebook.com/riversing.design">
                riversing.design
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}

export default Contact;
