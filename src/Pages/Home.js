import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import site_eu from "../Img/home/SITE_EU";
import logo_flat_transp from "../Img/LOGO_FLAT_TRANSP";
import site_faixa from "../Img/home/SITE_FAIXA";
import teamRivers from "../Img/home/team-rivers";
import teamJoao from "../Img/home/team-joao";
import Placeholder from "../Img/home/avatar_placeholder";
import teamNick from "../Img/home/team-nick";
import { BsInstagram } from "react-icons/bs";
import ImageSlider from "../Components/ImageSlider";
import { SliderData } from "../Components/SliderData";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import Modal from "react-modal";
import Chatbot from "react-chatbot-kit";
import config from "../Components/Chatbot/config";
import ActionProvider from "../Components/Chatbot/ActionProvider";
import MessageParser from "../Components/Chatbot/MessageParser";
import "react-chatbot-kit/build/main.css";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [chatIsOpen, setChatIsOpen] = useState(false);
  const [shouldShowButton] = useState(true);
  const headerModalCloseButton = () => {
    if (modalIsOpen === true) {
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="home-page"
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

      <body className="home-body">
        <section className="presentation">
          <div className="rivers-home">{site_eu()}</div>
          <div className="faixa1-home-div">
            <div className="faixa1-home">{site_faixa()}</div>
          </div>
          <div className="home-presentation-text">
            <h1>Olá, muito prazer!</h1>
          </div>
          <div className="home-presentation-text2">
            <p>Meu nome é Gustavo, sou</p>
            <p>Designer Gráfico e estou</p>
            <p>aqui para te ajudar!</p>
          </div>
        </section>

        <section className="home-cards">
          <div className="home-card">
            <a href="/portfolio/Id-visual" className="fill-div">
              <h2 id="home-card-title">Id</h2>
              <h3 id="home-card-minor-title">Identidade Visual</h3>
              <div className="home-card-text">
                <p>Projetos para que sua</p>
                <p>empresa fique com a sua</p>
                <p>cara. Dê uma olhada!</p>
              </div>
            </a>
          </div>

          <div className="home-card">
            <a href="/portfolio/Ilustracoes" className="fill-div">
              <h2 id="home-card-title">il</h2>
              <h3 id="home-card-minor-title">Ilustração</h3>
              <div className="home-card-text">
                <p>Para quadros ou presentes.</p>
                <p>Você ou uma paisagem. O</p>
                <p>limite é a criatividade!</p>
              </div>
            </a>
          </div>

          <div>
            <ImageSlider slides={SliderData} />
          </div>
        </section>

        <section className="home-team">
          <h1 id="team-title">Conheça a nossa equipe!</h1>

          <table className="team-cards">
            <tr>
              <td className="rivers-card">
                <div id="rivers-card-img">{teamRivers()}</div>
                <div id="rivers-card-title">
                  <h3>Gustavo Rios</h3>
                </div>
                <div id="rivers-card-text">
                  <p>Sou designer gráfico e artista! Meu</p>
                  <p>foco é ajudar as identidades visuais,</p>
                  <p>logos e ilustrações digitais.</p>
                </div>
                <div id="rivers-card-insta">
                  <a
                    href="https://www.instagram.com/gusta.rdm/"
                    target="_blank"
                    id="rivers-card-insta-logo"
                  >
                    <BsInstagram />
                  </a>
                </div>
              </td>

              <td className="joao-card">
                <div id="joao-card-img">{teamJoao()}</div>
                <div id="joao-card-title">
                  <h3>João Victor</h3>
                </div>
                <div id="joao-card-text">
                  <p>Sou motion designer e editor de</p>
                  <p>vídeos! Faço peças animadas de</p>
                  <p>design e vídeo de curta e média duração.</p>
                </div>
                <div id="joao-card-insta">
                  <a
                    href="https://www.instagram.com/jovictoorr/"
                    target="_blank"
                    id="joao-card-insta-logo"
                  >
                    <BsInstagram />
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <td className="nick-card">
                <div id="nick-card-img">{teamNick()}</div>
                <div id="nick-card-content">
                  <div id="nick-card-title">
                    <h3>Nickolas Fernandes</h3>
                  </div>
                  <div id="nick-card-text">
                    <p>Cuido da parte administrativa,</p>
                    <p>Financeira e de Vendas da Agência.</p>
                  </div>
                  <div id="nick-card-insta">
                    <a
                      href="https://www.instagram.com/dianhooficial/"
                      target="_blank"
                      id="nick-card-insta-logo"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </td>

              <td className="erick-card">
                <div id="erick-card-img">{Placeholder()}</div>
                <div id="nick-card-content">
                  <div id="erick-card-title">
                    <h3>Erick Castro</h3>
                  </div>
                  <div id="erick-card-text">
                    <p>Lorem ipsum dolor sit amet,</p>
                    <p>consectetur adipiscing elit.</p>
                  </div>
                  <div id="erick-card-insta">
                    <a
                      href="https://www.instagram.com/erick_cs14/"
                      target="_blank"
                      id="erick-card-insta-logo"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </table>
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

export default Home;
