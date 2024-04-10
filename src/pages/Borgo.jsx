import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import Loader from "../components/Loader";
import Prenota from "../components/Prenota";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { AcademicCapIcon } from "@heroicons/react/outline";
import { DesktopComputerIcon } from "@heroicons/react/outline/";
import { OfficeBuildingIcon } from "@heroicons/react/outline/";
import { DeviceMobileIcon } from "@heroicons/react/outline/";
import { HeartIcon } from "@heroicons/react/outline/";
import { WifiIcon } from "@heroicons/react/outline/";
import { CurrencyDollarIcon } from "@heroicons/react/outline/";
import { HomeIcon } from "@heroicons/react/outline/";

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
          // `https://borghi-backend.onrender.com/api/v1/borgo/${params._id}` // porta per la produzione
          `http://localhost:3000/api/v1/borgo/${params._id}` // porta default per il backend
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
    <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
      <div className=" overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
        <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
        <div key={borghi._id} className="p-4">
          <div>
            <div className="p-5 font-bold text-xl">
              <p>{borghi.name}</p>
            </div>
            <div className="p-5">
              <h3 className="py-1 underline">Luogo</h3>
              <p>{borghi.place}</p>
            </div>
            <div className="p-5">
              <h3 className="py-1 underline">Descrizione</h3>
              <p>{borghi.description}</p>
            </div>
            <div className="p-5 underline hover:text-red-500 hover:transition-all">
              <a href={borghi.internet} target="_blank">
                <h3>
                  <WifiIcon className="h-5 inline-block m-2" />
                  Velocità Internet
                </h3>
              </a>
            </div>
            <div className="p-5 underline hover:text-red-500 hover:transition-all">
              <a href={borghi.priceHouses} target="_blank">
                <h3>
                  <CurrencyDollarIcon className="h-5 inline-block m-2" />
                  Prezzo medio delle case in vendita
                </h3>
              </a>
            </div>
            <div className="p-5 underline hover:text-red-500 hover:transition-all">
              <a href={borghi.airbnbFilter} target="_blank">
                <h3>
                  <HomeIcon className="h-5 inline-block m-2" />
                  Prezzo medio per un Airbnb per 4 persone
                </h3>
              </a>
            </div>
            <div className="p-5">
              <p className="mb-2">
                Se vuoi ottenere informazioni per i servizi locali eccoli qui:
              </p>
              <ul>
                {" "}
                <a
                  href={borghi.airport}
                  target="_blank"
                  className="hover:text-red-500 hover:transition-all"
                >
                  <li>
                    <PaperAirplaneIcon className="h-5 inline-block m-2" />
                    Aeroporto più vicino
                  </li>
                </a>
                <a
                  href={borghi.hospital}
                  target="_blank"
                  className="hover:text-red-500 hover:transition-all"
                >
                  <li>
                    <HeartIcon className="h-5 inline-block m-2" />
                    Ospedale più vicino
                  </li>
                </a>
                <a
                  href={borghi.app}
                  target="_blank"
                  className="hover:text-red-500 hover:transition-all"
                >
                  <li>
                    <DeviceMobileIcon className="h-5 inline-block m-2" />
                    Servizi APP IO
                  </li>
                </a>
                <a
                  href={borghi.school}
                  target="_blank"
                  className="hover:text-red-500 hover:transition-all"
                >
                  <li>
                    <AcademicCapIcon className="h-5 inline-block m-2" />
                    Scuole
                  </li>
                </a>
                <a
                  href={borghi.district}
                  target="_blank"
                  className="hover:text-red-500 hover:transition-all"
                >
                  <li>
                    <OfficeBuildingIcon className="h-5 inline-block m-2" />
                    Sito del comune
                  </li>
                </a>
                <a
                  href={borghi.coworking}
                  target="_blank"
                  className="hover:text-red-500 hover:transition-all"
                >
                  <li>
                    <DesktopComputerIcon className="h-5 inline-block m-2" />
                    Co-Working
                  </li>
                </a>
              </ul>
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
