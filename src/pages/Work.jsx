import React from "react";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

function Work() {
  const [isLoading, setIsLoading] = useState(true); // nuovo stato per il caricamento

  useEffect(() => {
    setTimeout(async () => {
      // inserito il timeout di 1.5 secondi
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <button
        disabled
        type="text"
        className="bg-grey-600 disabled:opacity-75 hover:outline-none m-64"
      >
        Arriverà presto! Stay tuned
      </button>
    </div>
  );
}

export default Work;
