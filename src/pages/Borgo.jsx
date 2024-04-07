import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import Loader from "../components/Loader"; // loader component
import Prenota from "../components/Prenota";

function BorgoNew() {
  let params = useParams();
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // nuovo stato per il caricamento

  useEffect(() => {
    const fetchDetails = async () => {
      setTimeout(async () => {
        // inserito il timeout di 1.5 secondi
        setIsLoading(true);
        const data = await fetch(
          `http://localhost:3000/api/v1/borgo/${params._id}`
        ); // 3000 è la porta per il backend
        const detailBorgo = await data.json();
        setBorghi(detailBorgo);
        console.log(detailBorgo.name);
        setIsLoading(false);
      }, 2000);
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
    <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
      <div className="rounded-lg overflow-hidden shadow-2xl m-3">
        <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
        <div key={borghi._id} className="p-4">
          <div>
            <div className="p-3 font-bold text-xl">
              <p>{borghi.name}</p>
            </div>
            <div className="p-3">
              <h3 className="py-1 underline">Luogo</h3>
              <p>{borghi.place}</p>
            </div>
            <div className="p-3 ">
              <h3 className="py-1 underline">Descrizione</h3>
              <p>{borghi.description}</p>
            </div>
            <div className="m-3 underline hover:text-red-500 hover:transition-all">
              <a href={borghi.internet} target="_blank">
                <h3>Velocità Internet</h3>
              </a>
            </div>
            <div className="m-3 underline hover:text-red-500 hover:transition-all">
              <a href={borghi.priceHouses} target="_blank">
                <h3>Prezzo medio delle case in vendita</h3>
              </a>
            </div>
            <div className="m-3 underline hover:text-red-500 hover:transition-all">
              <a href={borghi.airbnbFilter} target="_blank">
                <h3>Prezzo medio per un Airbnb per 4 persone</h3>
              </a>
            </div>
            <div className="p-3 ">
              <p className="mb-2">
                Se vuoi ottenere informazioni per i servizi eccoli qui:
              </p>
              <a href="" className="hover:text-red-500 hover:transition-all">
                <li>Aeroporto più vicino</li>
              </a>
              <a href="" className="hover:text-red-500 hover:transition-all">
                <li>Ospedale più vicino</li>
              </a>
              <a href="" className="hover:text-red-500 hover:transition-all">
                <li>Sito del comune</li>
              </a>
              <a href="" className="hover:text-red-500 hover:transition-all">
                <li>Scuole</li>
              </a>
            </div>
          </div>
        </div>
        <div className="p-2 ">
          <Prenota />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default BorgoNew;
