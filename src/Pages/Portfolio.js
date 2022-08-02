import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo_flat_transp from "../Img/LOGO_FLAT_TRANSP";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Portfolio() {
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

      <header id="home-header">
        <div>
          <a href="/Home" className="logo">
            {logo_flat_transp()}
          </a>
        </div>
        <div className="header-right">
          <a href="/Tour">Fazer tour</a>
          <a href="/portfolio/Ilustracoes">Portfólio</a>
        </div>
      </header>

      <body className="portfolio-body">
        <section>
          <div id="portfolio-title">
            <h1>Portfólio</h1>
            <a href="/portfolio/Ilustracoes">Ilustrações</a>
            <a href="/portfolio/Id-visual">Identidade Visual</a>
          </div>
        </section>
      </body>

      <footer className="footer">
        <section className="footer-full-logo">
          <div className="footer-logo">{logo_flat_transp()}</div>
          <p id="footer-text1">Riversing</p>
          <p id="footer-text2">Design</p>
        </section>

        <section className="home-contact">
          <h3 className="contact-title">Contatos:</h3>
          <div className="contacts">
            <a
              href="https://api.whatsapp.com/send?phone=5511988239076&text=Ol%C3%A1%20Gustavo!%20Vim%20pelo%20seu%20site%2C%20poderia%20me%20ajudar%3F%20"
              target="_blank"
              className="contact-whatsapp"
            >
              <BsWhatsapp />
              <p id="contact-whatsapp-text">Whatsapp</p>
            </a>
            <a
              href="https://www.facebook.com/riversing.design"
              target="_blank"
              className="contact-facebook"
            >
              <BsFacebook />
              <p id="contact-facebook-text">Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/riversing.design/"
              target="_blank"
              className="contact-instagram"
            >
              <BsInstagram />
              <p id="contact-instagram-text">Instagram</p>
            </a>
          </div>
        </section>
      </footer>
    </motion.div>
  );
}

export default Portfolio;
