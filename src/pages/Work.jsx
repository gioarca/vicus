import React from "react";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

function Work() {
  const [isLoading, setIsLoading] = useState(true); // nuovo stato per il caricamento

  useEffect(() => {
    setTimeout(async () => {
      // inserito il timeout di 1.5 secondi
      setIsLoading(false);
    });
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
      <p
        className="mt-20
      "
      >
        Questa pagina non è ancora disponibile, ma
      </p>
      <button
        disabled
        type="text"
        className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:opacity-75 hover:outline-none md:my-16"
      >
        Arriverà presto!
      </button>
      <div className="m-3 md:my-26">
        <p className="m-5 font-bold md:m-10">
          "Pe' fa' 'e cose bone ce vo' tiemp'"
        </p>

        <p>Tradotto: per fare le cose buone ci vuole tempo</p>
        <p className="m-5 md:my-5">Cit. Nonna</p>
        <img
          src="https://assets.incisoriasacchetti.it/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/n/o/nonna-903.jpg"
          className="flex items-center justify-center text-center h-30 w-auto m-auto  md:h-3/5"
        />
      </div>
    </div>
  );
}

export default Work;
