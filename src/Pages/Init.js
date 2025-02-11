import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Tour from "./Tour";
import logo_flat_transp from "../Img/LOGO_FLAT_TRANSP";

function Init() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="App"
    >
      <header className="App-header">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,600;0,900;1,300&display=swap');
        </style>

        <div className="text_content">
          <h1 className="welcome">BEM VINDO!</h1>
          <p id="welcome-text">Que tal a gente fazer um tour juntos?</p>
        </div>

        <NavLink to="/Tour" exact className="init_button_tour">
          <span>Vamos lá! </span>
        </NavLink>
        <AnimatePresence>
          <Switch>
            <Route path="/Tour" component={Tour} />
          </Switch>
        </AnimatePresence>
        <NavLink to="/Home" exact className="init_button">
          <span>Acessar o site</span>
          <AnimatePresence>
            <Switch>
              <Route path="/Home" component={Home} />
            </Switch>
          </AnimatePresence>
        </NavLink>
      </header>
      <footer className="init-footer">
        <div className="init-footer-full-logo">
          <div className="init-footer-logo">{logo_flat_transp()}</div>
          <p id="init-footer-text1">Riversing</p>
          <p id="init-footer-text2">Design</p>
        </div>
      </footer>
    </motion.div>
  );
}

export default Init;
