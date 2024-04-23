import React from "react";
import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

function Home() {
  return (
    <motion.div>
      <div className="m-7 text-center">
        <h1 className="font-bold text-2xl m-5">
          Tutto ciò di cui avevi bisogno per lavorare e rimanere al Sud Italia
        </h1>
        <p>Il nostro obiettivo è rivitalizzare i borghi del Sud Italia.</p>
        <p className="m-2">
          Vogliamo valorizzare i comuni italiani dimenticati, grazie alla
          partecipazione appassionata della nostra community.
        </p>

        <a href={"/registrazione"}>
          <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
            Vuoi far parte del cambiamento?
          </button>
        </a>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="flex text-center items-center justify-center"
        />
        <div className="m-5 text-center sm:m-28">
          <p>
            <code>Cos'è Borghi?</code>
          </p>
          <p>
            Borghi è la prima community in Italia nata per affrontare il
            problema dello spopolamento dei borghi,
          </p>
          <p> soprattutto nel Sud Italia.</p>
          <p>Rivolto a tutti coloro che credono in questo cambiamento:</p>
          <p className="text-2xl font-bold m-3">
            imprenditori, creators, marketers, sviluppatori e lavoratori da
            remoto.
          </p>
          <p>
            Che credono che grazie al digitale possano fare qualcosa di grande.
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1676587123352-7ed1da9c27d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Immagini della community di Borghi"
        />
      </div>
    </motion.div>
  );
}

export default Home;
