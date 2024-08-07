import React from "react";

function News() {
  return (
    <div>
      <div className="text-center text-2xl font-bold">
        <h1>Ultime notizie</h1>
      </div>
      <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 m-5">
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
            <h3 className="flex flex-col text-center m-5">
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
            <h3 className="flex flex-col text-center m-5">
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
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              Italy has launched its digital nomad visa: Here’s who is eligible
              and how to apply
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* AGI */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.agi.it/cronaca/news/2024-04-17/borghi-italia-digitalizzazione-smart-working-per-rilancio-26051718/"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://www.agi.it/static4.0/images/logo_seo.png"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              Il riscatto dei piccoli borghi, vita digitale e smart working
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* Shape of EU */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://open.spotify.com/episode/0sIxz8UDPzftTapYDT5Np2?si=5e45d2ae51ad4f64"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://i.scdn.co/image/ab6765630000ba8adb1aa0170d712a338ce6fcd0"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              EXPLAINER | Cosa sono i fondi di coesione e perché ci servono
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per ascoltare il podcast
            </p>
          </a>
        </div>
        {/* The independent */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.independent.co.uk/travel/europe/italy/italy-one-euro-homes-buy-house-b2470838.html"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://www.independentadvertising.com/wp-content/uploads/2023/06/INDY_BRAND-scaled.jpg"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              Italy’s one euro houses: Who can buy one and how does it work?
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* Millionaire */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href=""
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://www.millionaire.it/wp-content/uploads/2023/03/logo_millionaire_2023.jpg"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              L’economia dei borghi italiani: i dati sorprendenti presentati da
              Deloitte
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
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
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
              className="flex h-auto text-center justify-center my-12"
            />
            <h3 className="flex flex-col text-center my-16 justify-center items-center">
              Galoppa lo spopolamento dei piccoli comuni: l’allarme di Antonio
              Decaro
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-5 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* FAI */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://fondoambiente.it/news/primavera-2024-quattro-luoghi-del-cuore-avranno-nuova-vita"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://www.custorino.it/content/files/2022/07/logo_FAI-.png"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              Primavera 2024: quattro Luoghi del Cuore avranno nuova vita
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* Invitalia.it */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://www.invitalia.it/cosa-facciamo/rafforziamo-le-imprese/imprese-borghi"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://www.invitalia.it/-/media/invitalia/images/logo/logo-invitalia.png?h=91&la=it-IT&w=149&hash=887E509922305F763EAC1CD453026F9380500845"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              Supporto delle imprese che operano nei borghi destinatari di
              finanziamenti PNRR
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>
        {/* Unioncamere.it */}
        <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
          <a
            href="https://sni.unioncamere.it/notizie/incentivo-imprese-borghi"
            target="_blank"
            className="flex flex-col text-center justify-center items-center"
          >
            <img
              src="https://sni.unioncamere.it/sites/default/files/immagini/2023-06-06/logo-unioncamere.png"
              alt=""
              className="h-auto"
            />
            <h3 className="flex flex-col text-center m-5 justify-center items-center">
              Incentivo Imprese Borghi
            </h3>
            <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
              Clicca per saperne di più
            </p>
          </a>
        </div>

        {/* Youtube */}
        <div className="flex flex-col text-center justify-center items-center m-5 text-xl font-bold sm:flex-col ">
          <h1 className="sm:flex-col">
            Qui invece trovi alcuni video interessanti
          </h1>
        </div>
        <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 m-5">
          <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
            <a
              href="https://www.youtube.com/watch?v=nSAZz2kHAus"
              target="_blank"
              className="flex flex-col text-center justify-center items-center"
            >
              <img
                src="https://i.ytimg.com/vi/NHfoS8OLCyQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzUlpv0ct3RRCo-Jal4-pRrVFW4Q"
                alt=""
                className="h-auto"
              />
              <h3 className="flex flex-col text-center m-6 justify-center items-center">
                SPOPOLAMENTO al SUD: nel 2080 oltre 8 milioni di residenti in
                meno
              </h3>
              <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
                Clicca per vedere il video
              </p>
            </a>
          </div>
          {/* Yotube casa in sicilia */}
          <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
            <a
              href="https://www.youtube.com/watch?v=oXP5fdFq2Xc"
              target="_blank"
              className="flex flex-col text-center justify-center items-center"
            >
              <img
                src="https://www.newscaststudio.com/wp-content/uploads/2024/03/make-it-logo.png"
                alt=""
                className="h-auto"
              />
              <h3 className="flex flex-col text-center m-5 justify-center items-center">
                I Bought A Home In Sicily For $62,000 - Now I Live In Both
                America & Italy
              </h3>
              <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
                Clicca per vedere il video
              </p>
            </a>
          </div>
          {/* Yotube casa in sicilia */}
          <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
            <a
              href="https://www.youtube.com/watch?v=AC6KRdKOKeI"
              target="_blank"
              className="flex flex-col text-center justify-center items-center"
            >
              <img
                src="https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png"
                alt=""
                className="h-auto"
              />
              <h3 className="flex flex-col text-center m-5 justify-center items-center">
                Cecilia, l'argentina che ha comprato casa a un euro in Sicilia:
                "Voglio vivere qui"
              </h3>
              <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
                Clicca per vedere il video
              </p>
            </a>
          </div>
          {/* Yotube casa in sicilia */}
          <div className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
            <a
              href="https://www.youtube.com/watch?v=814SuM8gQCs"
              target="_blank"
              className="flex flex-col text-center justify-center items-center"
            >
              <img
                src="https://logowik.com/content/uploads/images/cnbc4159.jpg"
                alt=""
                className="h-auto"
              />
              <h3 className="flex flex-col text-center m-5 justify-center items-center">
                Americans Bought Abandoned $1 Homes In Italy — Was It Worth It?
              </h3>
              <p className="flex flex-col text-red-500 underline text-center m-3 justify-center items-center">
                Clicca per vedere il video
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
