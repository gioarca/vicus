import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BorgoForm from "../components/BorgoForm";
import Loader from "../components/Loader";
// import Search from "../components/Search";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Prenotazione() {
  let params = useParams();
  const [borghi, setBorghi] = useState([]);
  const [value, onChange] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setTimeout(async () => {
        // inserito il timeout di 1.5 secondi
        setIsLoading(true);
        const data = await fetch(
          `https://borghi-backend.onrender.com/api/v1/borgo/${params._id}` // porta per la produzione
          // `http://localhost:3000/api/v1/borgo/${params._id}` // porta default per il backend
        );
        const detailBorgo = await data.json();
        setBorghi(detailBorgo);
        // console.log(detailBorgo.name); // manda a schermo qualche dato
        setIsLoading(false);
      });
    };
    fetchDetails();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex-wrap m-4 text-center justify-center">
        <p>Hai selezionato</p>
      </div>
      <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
      <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"></div>
      <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
        <div className=" overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
          <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
          <div key={borghi._id} className="p-4">
            <div>
              <div className="p-5 font-bold text-xl">
                <p>{borghi.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-center justify-center">
        <Calendar onChange={onChange} value={value} />
      </div>
      <input
        type="submit"
        value="Conferma la visita"
        className="flex px-8 py-2 m-10 w-96 font-semibold cursor-pointer bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
      ></input>
    </div>
  );
}

export default Prenotazione;
