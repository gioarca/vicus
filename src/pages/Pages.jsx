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
import AggiungiBorgo from "./AggiungiBorgo";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Pages() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/borgo/:_id" element={<Borgo />} />
        <Route path="/login" element={<Login user={user} />} />
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
        <Route path="/aggiungiunborgo" element={<AggiungiBorgo />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
