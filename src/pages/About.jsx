import React from "react";
import Iscriviti from "../components/Iscriviti";

function About() {
  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-xl m-14">Benvenut*!</h1>
      <div className="mt-20 mb-10">
        <img src="https://images.unsplash.com/photo-1528214096798-37891d32174c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
      <div className="m-5">
        <p className="">
          <code>Borghi:</code> un'iniziativa nata dalla volontà popolare per la
          rinascita dei nostri borghi.
        </p>
        <p>Nasce per promuovere la rivitalizzazione delle piccole realtà.</p>
        <p className="">Rivolto a tutti coloro che credono nel cambiamento:</p>
        <p className="text-2xl font-bold m-3">
          imprenditori, creators, professionisti del marketing, sviluppatori e
          lavoratori da remoto.
        </p>
        <p>
          Per chi desidera abbracciare lo stile di vita autentico dei borghi e
          sfuggire al caos delle metropoli.
        </p>
        <p>Dedicato a coloro che non vogliono dimenticare le proprie radici.</p>

        <p className="text-l font-bold m-3">
          Per chi cerca una vita più slow e autentica.
        </p>

        <p>
          All'interno della nostra piattaforma troverai i borghi più
          affascinanti dove poter lavorare da remoto
        </p>
        <p>
          e, soprattutto, troverai persone che condividono la tua stessa
          visione.
        </p>
        <br />
        <p>Se il nostro progetto ti incuriosisce, </p>
        <p>clicca qui sotto per saperne di più e unisciti a noi.</p>

        <Iscriviti />
      </div>
    </div>
  );
}

export default About;
