import React from "react";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
import { useTranslation } from "react-i18next";
// import Borghi from "../components/Borghi";

function Home() {
  const { t } = useTranslation();

  return (
    <motion.div>
      <div className="m-7 text-center">
        <h1 className="font-bold text-2xl m-5">{t("greeting")}</h1>
        {/* <h1 className="font-bold text-2xl m-5">
          Benvenuta/o nel progetto Borghi
        </h1> */}
        <p>Il nostro obiettivo è rivitalizzare i borghi del Sud Italia.</p>
        <p className="m-2">
          Vogliamo valorizzare i comuni italiani dimenticati, grazie alla
          partecipazione appassionata della nostra community.
        </p>

        <a href={"/registrazione"}>
          <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
            Desideri unirti a noi?
          </button>
        </a>
        {/* <p>
          Per saperne di più, registrati o accedi e scopri la nostra
          piattaforma.
        </p>
        <Buttons /> */}
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
