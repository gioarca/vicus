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
          src="https://plus.unsplash.com/premium_photo-1676655014315-63ba125eed52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-screen h-auto mt-5 bg-cover justify-center items-center text-center relative md:bg-cover md:justify-center md:items-center md:relative md:w-full md:h-[500px]"
        />
      </div>
      {/* <Borghi /> */}
    </motion.div>
  );
}

export default Home;

// Una Startup nata per riportare vita nei borghi del Sud Italia. Vogliamo creare valore nei comuni italiani dimenticati, grazie alla passione della community. Vuoi farne parte? Per saperne di più registrati oppure esegui il login ed entra nella piattaforma
