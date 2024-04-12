import React from "react";

function News() {
  return (
    <div>
      <div className="text-center text-2xl font-bold">
        <h1>Ultime notizie</h1>
      </div>
      <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
        {/* ABCD */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.ilsole24ore.com/art/bari-e-all-abcd-l-evento-chi-sogna-vivere-e-lavorare-dal-sud-AF9dcDSD?refresh_ce=1"
            target="_blank"
          >
            <img
              src="https://i2.res.24o.it/images2010/S24/Documenti/2024/04/11/Immagini/Ritagli/abcd_2-k4NI-U63875736883lDl-1440x624@IlSole24Ore-Web.jpg?r=1300x564"
              alt=""
              className="h-15"
            />
            <h3 className="flex flex-col text-center m-2">
              Bari è all’ABCD, l’evento per chi sogna di vivere e lavorare (d)al
              Sud
            </h3>
            <p className="flex flex-col text-center m-3 text-red-500 underline">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* IlSole24Ore */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.ilsole24ore.com/art/nomadi-digitali-ecco-regole-ottenere-visto-e-fare-smart-working-italia-AFjVHYuC"
            target="_blank"
          >
            <img
              src="https://www.merope-am.com/wp-content/uploads/2017/01/Logo_Il_Sole_24_Ore-1200x480.jpg"
              alt=""
              className="h-15"
            />
            <h3 className="flex flex-col text-center m-2">
              Nomadi digitali, ecco le regole per ottenere il visto e fare smart
              working in Italia.
            </h3>
            <p className="flex flex-col text-center m-3 text-red-500 underline">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* EuroNews */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.euronews.com/travel/2024/04/08/italys-digital-nomad-visa-when-it-will-be-available-and-who-can-get-it-according-to-an-exp"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://www.driver-project.eu/wp-content/uploads/2018/06/euronews-logo.jpg"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-2 justify-center items-center">
              Italy has launched its digital nomad visa: Here’s who is eligible
              and how to apply
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* Italia.it */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.italia.it/it/italia/cosa-fare/agevolazioni-fiscali-per-trasferirsi-nei-borghi-del-sud-italia"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://tourismmedia.italia.it/is/image/mitur/logoitalia-1"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-2 justify-center items-center">
              Agevolazioni fiscali per trasferirsi negli incantevoli borghi del
              Centro e Sud Italia
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* Lentepubblica.it */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.lentepubblica.it/cittadini-e-imprese/spopolamento-piccoli-comuni-antonio-decaro/"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://www.lentepubblica.it/wp-content/themes/lentepubblica/immagini/lentepubblica.svg"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-2 justify-center items-center">
              Galoppa lo spopolamento dei piccoli comuni: l’allarme di Antonio
              Decaro
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
          <div className="text-center text-2xl font-bold">
            <h1>Notizie su eventi a tema digitale</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
