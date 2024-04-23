import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contatti() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4zk556a", "template_0t8cg1n", form.current, {
        publicKey: "nBwk1Dh-6_dCdi75H",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.href = "/grazie";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col text-center justify-center items-center">
      <div>
        <div className="m-3">
          <p>Compila i campi del form:</p>
          <p>
            mandaci un feedback, una richiesta o semplicemente un
            ringraziamento.
            <br />
            Ti rispondiamo, sempre.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Nome"
            className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            name="user_surname"
            placeholder="Cognome"
            className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            name="user_email"
            placeholder="E-mail"
            className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Inserisci qui il tuo messaggio"
            className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="submit"
            value="Invia"
            className="m-2 w-2/3 px-8 py-4 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:cursor-pointer hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
          ></input>
        </form>
      </div>

      <div className="m-5 text-center py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm md:w-2/3 justify-center items-center">
        <p className="font-bold m-2">Contattaci</p>
        <div className="flex flex-col justify-center items-center m-5">
          <a
            target="_blank"
            href={"mailto: borghisud@gmail.com"}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              width="50"
              height="50"
            />
          </a>
          &emsp;
          <a
            href={"mailto: borghisud@gmail.com"}
            className="hover:text-red-500 hover:transition-all"
          >
            borghisud@gmail.com
          </a>
          <p>via Boccaccio, Ischia, Italia</p>
        </div>
      </div>
    </div>
  );
}

export default Contatti;
