import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

function Work() {
  const [isLoading, setIsLoading] = useState(true); // nuovo stato per il caricamento
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // inserito il timeout di 1.5 secondi
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="m-3 md:my-26">
        <img
          src="https://assets.incisoriasacchetti.it/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/n/o/nonna-903.jpg"
          className="flex items-center justify-center text-center h-30 w-auto m-auto md:h-3/5"
        />
        <p className="m-5 font-bold md:m-10">{t("quote")}</p>
        <p>{t("translated")}</p>
        <p className="md:my-2">{t("cit")}</p>
      </div>
      <p className="mt-5">{t("pageNotAvailable")}</p>
      <p
        // className="m-2 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:opacity-75 hover:outline-none md:my-10"
        className="m-2 px-8 py-2 text-center items-center justify-center font-bold hover:text-red-800 text-black hover:border-2 hover:border-red-800 hover:transition-all hover:duration-300 hover:ease-in-out hover:rounded-full focus:shadow-outline focus:outline-none disabled:opacity-75 hover:outline-none md:my-10"
      >
        {t("comingSoon")}
      </p>
    </div>
  );
}

export default Work;
