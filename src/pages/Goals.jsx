import React from "react";

function Goals() {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <h1 className="text-2xl font-bold m-3">Obiettivi</h1>
      <p>
        Questi sono quelli potenzialmente raggiungibili attraverso la
        realizzazione di questa Startup:
      </p>
      <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 m-5">
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
          <img
            src="https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-08.jpg/jcr:content/renditions/original"
            alt=""
            width="80"
            className="flex flex-col items-center text-center m-auto"
          />
          <p className="m-3">
            Si potrebbero creare più posti di lavoro sia nel digitale che nel
            mondo offline
          </p>
        </div>
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
          <img
            src="https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-09.jpg/jcr:content/renditions/original"
            alt=""
            width="80"
            className="flex flex-col items-center text-center m-auto"
          />
          <p className="m-3">
            Realizzabile con un'adeguata innovazione: promuovendo eventi mirati
            allo sviluppo di competenze digitali e diffondendo le skill in
            imprenditoria
          </p>
        </div>
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
          <img
            src="https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-17.jpg/jcr:content/renditions/original"
            alt=""
            width="80"
            className="flex flex-col items-center text-center m-auto"
          />
          <div className="m-3">
            {" "}
            <p>Realizzabile attraverso le partnership con</p>
            <p className="font-bold text-black">
              aziende locali, servizi per le infrastrutture e la pubblica
              amministrazione
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
