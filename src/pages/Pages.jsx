import React, { useEffect, useState } from "react";
import AuthProvider from "../context/AuthContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import Home from "./Home";
import About from "./About";
import Borgo from "./Borgo";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";
import Registration from "./Registration";
import Contacts from "./Contacts";
import Work from "./Work";
import Thanks from "./Thanks";
import News from "./News";
import Nav from "../components/Nav";
import Dashboard from "./Dashboard";
import SignOut from "./SignOut";
import Goals from "./Goals";
import Support from "./Support";
import AddBorgo from "./AddBorgo";
import Favourites from "./Favourites";
import AdminBorghi from "./AdminBorghi";
import Loader from "../components/Loader";
import RegistrationAdmin from "../pages/RegistrationAdmin";

function Pages() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <AuthProvider>
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/borgo/:_id" element={<Borgo />} />
          <Route path="/login" element={<Login user={user} />} />
          <Route path="/loginSuccess" element={<LoginSuccess />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/thankyouforyoursupport" element={<Support />} />
          <Route path="/workinprogress" element={<Work />} />
          <Route path="/news" element={<News />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/addBorgo" element={<AddBorgo />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/adminborghi" element={<AdminBorghi />} />
          <Route path="/registrationadmin" element={<RegistrationAdmin />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default Pages;
