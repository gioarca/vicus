import React from "react";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";

function Home() {
  return (
    <motion.div>
      <div className="m-7 text-center">
        <h1 className="font-bold text-xl m-5">Benvenuto</h1>
        <p>Qui potrai partecipare al rinascimento dei borghi d'Italia. </p>
        <p>
          Per cominciare registrati oppure se sei già registrato entra nella
          piattaforma
        </p>
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1676655014315-63ba125eed52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-screen h-auto mt-5 bg-cover justify-center items-center text-center relative md:h-5/6 md:w-auto"
        />
      </div>
      <Buttons />
    </motion.div>
  );
}

export default Home;
