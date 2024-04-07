import React from "react";
import Presentazione from "../components/Presentazione";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";

function Home() {
  return (
    <motion.div>
      <Presentazione />
      <Buttons />
    </motion.div>
  );
}

export default Home;
