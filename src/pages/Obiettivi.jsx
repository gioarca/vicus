import React from "react";

function Obiettivi() {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <h1 className="text-2xl font-bold m-3">Obiettivi</h1>
      <p>
        Questi sono quelli potenzialmente raggiungibili attraverso la
        realizzazione di questa Startup:
      </p>
      <div className="m-5 py-5">
        <img
          src="https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-08.jpg/jcr:content/renditions/original"
          alt=""
          width="80"
          className="flex flex-col items-center text-center m-auto"
        />
        <p className="m-3">
          Si potrebbero creare più posti di lavoro nel digitale e nel mondo
          offline
        </p>
      </div>
      <div className="m-5 py-5">
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
      <div className="m-5 py-5">
        <img
          src="https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-17.jpg/jcr:content/renditions/original"
          alt=""
          width="80"
          className="flex flex-col items-center text-center m-auto"
        />
        <p className="m-3">
          Reralizzabile attraverso le partnership con aziende locali, servizi
          per le infrastrutture e la pubblica amministrazione
        </p>
      </div>
    </div>
  );
}

export default Obiettivi;
