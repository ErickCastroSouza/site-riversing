import React from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Init from "./Pages/Init";
import Home from "./Pages/Home";
import Tour from "./Pages/Tour";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Ilustrations from "./Pages/Ilustrations";
import Id_visual from "./Pages/Id-visual";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Init />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/portfolio/ilustracoes" exact>
          <Ilustrations />
        </Route>
        <Route path="/portfolio/Id-visual" exact>
          <Id_visual />
        </Route>
        <Route path="/portfolio/Home" exact>
          <Home />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/Tour" exact>
          <Tour />
        </Route>
        <Route path="/Home" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
