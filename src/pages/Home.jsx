import React from "react";
import Presentazione from "../components/Presentazione";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
import Profile from "../components/Profile";
// import { useAuth0 } from "@auth0/auth0-react/src/";
// import Loader from "../components/Loader";

function Home() {
  return (
    <motion.div>
      <Presentazione />
      <Buttons />
    </motion.div>
  );
}

export default Home;
