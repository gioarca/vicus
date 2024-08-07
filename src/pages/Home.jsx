import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <motion.div>
      <div className="m-7 text-center sm:mx-28">
        <h1 className="font-bold text-2xl m-5">{t("title")}</h1>
        <p>{t("goal")}</p>
        <p className="m-2">{t("enhance")}</p>

        <a href={"/registration"}>
          <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
            {t("buttonText")}
          </button>
        </a>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="flex text-center items-center justify-center"
          alt="Village Image"
        />
        <div className="m-5 text-center sm:m-28">
          <p>
            <code>{t("whatIsVicus")}</code>
          </p>
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <p>{t("description3")}</p>
          <p className="text-2xl font-bold m-3">{t("description4")}</p>
          <p>{t("description5")}</p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1676587123352-7ed1da9c27d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Community Images of Villages"
        />
      </div>
    </motion.div>
  );
}

export default Home;
