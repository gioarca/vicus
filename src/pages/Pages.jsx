import Home from "./Home";
import About from "./About";
import Borgo from "./Borgo";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";
import Registrazione from "./Registrazione";
import Contatti from "./Contatti";
import Work from "./Work";
import Grazie from "./Grazie";
import News from "./News";
import Nav from "../components/Nav";
import Dashboard from "./Dashboard";
import SignOut from "./SignOut";
import Obiettivi from "./Obiettivi";
import GrazieBorgo from "./GrazieBorgo";

import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/borgo/:_id" element={<Borgo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/registrazione" element={<Registrazione />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/grazie" element={<Grazie />} />
        <Route path="/grazieperilsupporto" element={<GrazieBorgo />} />
        <Route path="/workinprogress" element={<Work />} />
        <Route path="/news" element={<News />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/obiettivi" element={<Obiettivi />} />
      </Routes>
    </AnimatePresence>

    // per il locale
    // <AnimatePresence mode="wait">
    //   <Routes location={location} key={location.pathname}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="https://borghisud.netlify.app/about" element={<About />} />
    //     <Route
    //       path="https://borghisud.netlify.app/borgo/:_id"
    //       element={<Borgo />}
    //     />
    //     <Route path="https://borghisud.netlify.app/login" element={<Login />} />
    //     <Route
    //       path="https://borghisud.netlify.app/loginSuccess"
    //       element={<LoginSuccess />}
    //     />
    //     <Route
    //       path="https://borghisud.netlify.app/registrazione"
    //       element={<Registrazione />}
    //     />
    //     <Route
    //       path="https://borghisud.netlify.app/contatti"
    //       element={<Contatti />}
    //     />
    //     <Route
    //       path="https://borghisud.netlify.app/grazie"
    //       element={<Grazie />}
    //     />
    //     <Route
    //       path="https://borghisud.netlify.app/workinprogress"
    //       element={<Work />}
    //     />
    //   </Routes>
    // </AnimatePresence>
  );
}

export default Pages;
