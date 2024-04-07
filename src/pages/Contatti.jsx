import React, { useRef } from "react";
// import { emailjs } from "emailjs";

function Contatti() {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
  //       publicKey: "YOUR_PUBLIC_KEY",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <div>
      <div>
        <p className="m-3">
          Compila i campi del form:
          <p>
            che sia un feedback, una richiesta o semplicemente un
            ringraziamento.
          </p>
        </p>
        <form
          // ref={form}
          // onSubmit={sendEmail}
          action="submit"
          className="justify-center items-center md:mx-28"
        >
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            name="cognome"
            placeholder="Cognome"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Inserisci qui il tuo messaggio"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
        </form>
        <a href={"/grazie"}>
          <button action="submit">Invia</button>
        </a>
      </div>

      <div className="text-center justify-center  items-center py-4 w-auto m-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm  md:w-2/3 justify-center items-center m-auto">
        {/* <div className="text-center justify-center items-center w-auto m-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm "> */}
        <div className="flex justify-center items-center m-10 space-x-10">
          {/* <a
            target="_blank"
            href="https://www.facebook.com/borghi/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
              width="50"
              height="50"
            />
          </a>
          &emsp; */}
          <a
            target="_blank"
            href="https://www.instagram.com/borghi/"
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
            href="https://www.linkedin.com/in/giorgio-arcamone/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://i.pinimg.com/originals/16/05/cd/1605cd36a25c98249cf421b145690992.png"
              width="50"
              height="50"
            />
          </a>
          &emsp;
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
            target="_blank"
            href="https://github.com/gioarca/vite"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width="50"
              height="50"
            />
          </a>
        </div>
        <p className="font-bold m-2">Contattaci</p>
        <a
          href={"mailto: borghisud@gmail.com"}
          className="hover:text-red-500 hover:transition-all"
        >
          borghisud@gmail.com
        </a>
        {/* <p>+39 333 12345678</p> */}
        <p>via Borgo 1, Ischia, Italia</p>
      </div>
    </div>
  );
}

export default Contatti;
