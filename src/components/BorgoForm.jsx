import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function BorgoForm() {
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
  // const [formData, setFormData] = useState({
  //   name: "",
  //   place: "",
  //   description: "",
  //   imgURL: "",
  //   internetSpeed: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(`http://localhost:3000/api/v1/borgo`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await response.json();
  //     onAddBorgo(data); // Aggiungi il nuovo borgo alla lista visualizzata
  //     setFormData({
  //       name: "",
  //       place: "",
  //       description: "",
  //       imgURL: "",
  //       internetSpeed: "",
  //     });
  //   } catch (error) {
  //     console.error("Error adding borgo:", error);
  //   }
  // };
  {
    /* Gestione degli input */
  }
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col justify-center items-center text-center gap-3 mb-10 bg-grey-200 p-5 rounded-lg m-auto"
    >
      <div className="flex flex-col m-1 w-72">
        <input
          type="text"
          name="name"
          placeholder="Nome del Borgo"
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 w-72">
        <input
          type="text"
          name="place"
          placeholder="Luogo"
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>

      <div className="flex flex-col m-1 w-72">
        {/* Link immagine */}
        <input
          type="text"
          name="imgURL"
          placeholder="Link dell'immagine"
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 w-72">
        {/* Velocità internet */}
        <input
          type="text"
          name="internetSpeed"
          placeholder="Link della velocità di internet"
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      {/* Descrizione */}
      <div className="flex flex-col m-1 w-72">
        <textarea
          name="description"
          placeholder="Motivazione"
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></textarea>
      </div>
      <input
        className="disabled:opacity-75 m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
        type="submit"
        value="Invia richiesta"
      ></input>
    </form>
  );
}

export default BorgoForm;
