import React from "react";
import Buttons from "../components/Buttons";

function About() {
  return (
    <div>
      <h1 className="font-bold text-xl m-5">Benvenuto!</h1>
      <div className="mt-5 mb-10">
        <img src="https://images.unsplash.com/photo-1528214096798-37891d32174c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
      <div className="m-5">
        {/* <p>
          Questa qui sopra è <strong>Matera</strong>, capuologo del Molise e
          capitale della cultura nel 2019.
        </p> */}
        <p className="">
          Questo è <code>Borghi</code>: un progetto nato dal popolo per la
          rinascita dei borghi.
        </p>
        <p>Nasce per la rinascita delle piccole cose.</p>
        <p className="">
          Rivolto a tutti gli italiani che non smettono di crederci:
        </p>
        <p className="text-xl font-bold m-3">
          imprenditori, creativi, digital marketer, developer e nomadi digitali.
        </p>
        <p>A tutti quelli che hanno perso la fiducia in questo paese.</p>
        <p>
          A tutti quelli che vogliono vivere nei borghi e che sono stanchi dei
          ritmi delle metropoli.
        </p>
        <p>Dedicato a quelli che non vogliono abbandonare la propria terra.</p>

        <p className="text-l font-bold m-3">A chi vuole una vita slow.</p>

        <p>
          All'interno della piattaforma troverai i borghi più attrattivi per
          lavorare da remoto e soprattutto la gente che la pensa come te.
        </p>
        <br />
        <p>Sei curioso del progetto? </p>
        <p>Clicca qui sotto ed entra.</p>

        <Buttons />
      </div>
    </div>
  );
}

export default About;
