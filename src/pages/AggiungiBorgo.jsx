import React from "react";
import BorgoForm from "../components/BorgoForm";

function AggiungiBorgo() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-center font-bold text-xl m-14">
        Intanto vogliamo ringraziarti per il supporto
      </h1>
      <div className="mt-5 mb-5 sm:mt-20">
        <img src="https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
      <div className="m-5">
        <p className="font-bold">
          Perché se sei arrivato qui significa che vuoi davvero migliorare il
          sud Italia.
        </p>
        <p className="text-l text-center m-10">
          Ricordati che tutti i borghi elencati sono stati scelti in base a
          questi criteri oggettivi:
          <ul className="flex flex-col text-left justify-center list-disc sm:my-16 sm:mx-48">
            <li>qualità della vita;</li>
            <li>la presenza dei servizi pubblici (ospedali, scuole, );</li>
            <li>la bellezza del borgo;</li>
            <li>
              la facilità di raggiungimento del borgo tramite mezzi pubblici;
            </li>
            <li>la velocità di internet;</li>
            <li>la vicinanza al mare;</li>
            {/* <li>le esperienze che si possono fare nelle vicinanze;</li> */}
            <li>la presenza di uno spazio di coworking nelle vicinanze;</li>
          </ul>
        </p>
        <div className="flex flex-col m-5 text-center font-light">
          <p>
            Quindi se ritieni che manca un borgo, aggiungine uno tramite il form
            qui sotto
          </p>
          <div>
            <BorgoForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AggiungiBorgo;
