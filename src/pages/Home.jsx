import React from "react";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
// import Borghi from "../components/Borghi";

function Home() {
  return (
    <motion.div>
      <div className="m-7 text-center">
        <h1 className="font-bold text-2xl m-5">
          Benvenuta/o nel progetto Borghi
        </h1>
        <p>Il nostro obiettivo è rivitalizzare i borghi del Sud Italia.</p>
        <p className="m-2">
          Vogliamo valorizzare i comuni italiani dimenticati, grazie alla
          partecipazione appassionata della nostra community.
        </p>
        <p className="font-bold text-xl m-5">Desideri unirti a noi?</p>
        <p>
          Per saperne di più, registrati o accedi e scopri la nostra
          piattaforma.
        </p>
        <Buttons />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1696341299290-ce6648b9b97d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          // className="w-auto h-auto mt-5 bg-cover justify-center items-center text-center relative sm:bg-cover
          //  md:justify-center md:items-center md:relative md:w-auto md:h-[500px]"
        />
      </div>
      {/* <Borghi /> */}
    </motion.div>
  );
}

export default Home;
