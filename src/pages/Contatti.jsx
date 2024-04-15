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

  //   return (
  //     <form ref={form} onSubmit={sendEmail}>
  //       <label>Name</label>
  //       <input type="text" name="user_name" />
  //       <label>Email</label>
  //       <input type="email" name="user_email" />
  //       <label>Message</label>
  //       <textarea name="message" />
  //       <input type="submit" value="Send" />
  //     </form>
  //   );
  // }

  // export default Contatti;

  // function Contatti() {
  //   const formRef = useRef();

  //   const inviaEmail = (e) => {
  //     e.preventDefault();

  //     const service_ID = "service_3fbt7pp";
  //     const template_ID = "template_kztn8z3";
  //     const public_key = "pW2nGcPqsdugwCCsG";

  //     emailjs.sendForm(service_ID, template_ID, formRef.current, public_key).then(
  //       (result) => {
  //         console.log(result.text);
  //         // Gestione del reindirizzamento dopo l'invio del modulo
  //         window.location.href = "/grazie";
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //     formRef.current.reset();
  //   };
  //className="flex flex-col justify-center items-center"

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
        {/* <p className="font-bold m-2">Seguici</p>
        <div className="flex justify-center items-center m-10 space-x-10">
          <a
            target="_blank"
            href="https://www.instagram.com/borghi_sud/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0i_5dkZGwkJ1p6Kvsu5cYxZLTVvPDGc3Qn_3y_1Tz7Q&s"
              width="50"
              height="50"
            />
          </a>
          &emsp;
          <a
            target="_blank"
            href="https://t.me/+itBwf1Ed0DNjMjdk"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://static-00.iconduck.com/assets.00/telegram-icon-512x512-1s8w0tx0.png"
              width="50"
              height="50"
            />
          </a>
          &emsp;
          <a
            target="_blank"
            href="https://github.com/gioarca/progettoBorghi"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width="50"
              height="50"
            />
          </a>
        </div> */}
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
          {/* <a
            href={
              "https://www.google.it/maps/place/Via+Boccaccio,+80077+Ischia+NA/@40.731406,13.9572645,17z/data=!3m1!4b1!4m6!3m5!1s0x133b6adf93ae0701:0x59a03cd8406c8628!8m2!3d40.731406!4d13.9598394!16s%2Fg%2F1tgtzlvc?entry=ttu"
            }
            className="hover:text-red-500 hover:transition-all"
            target="_blank"
          > */}
          <p>via Boccaccio, Ischia, Italia</p>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default Contatti;
