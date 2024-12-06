// import React from "react";
// import BorgoForm from "../components/BorgoForm";
// import { useTranslation } from "react-i18next";

// function AddBorgo() {
//   const { t } = useTranslation();

//   return (
//     <div className="flex flex-col text-center">
//       <h1 className="text-center font-bold text-2xl m-14">
//         {t("thank_you_for_support")}
//       </h1>
//       <div className="flex text-center items-center justify-center mt-5 mb-5 sm:mt-20">
//         <img
//           src="https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Borgo"
//         />
//       </div>
//       <div className="m-5">
//         <p className="font-bold">{t("improve_southern_italy")}</p>
//         <p className="text-l text-center m-10">
//           {t("borgo_criteria")}
//           <ul className="flex flex-col text-left justify-center list-disc sm:my-16 sm:mx-48">
//             {/* <li>{t("quality_of_life")}</li> */}
//             <li>{t("public_services")}</li>
//             <li>{t("borgo_beauty")}</li>
//             <li>{t("accessibility")}</li>
//             <li>{t("internet_speed")}</li>
//             {/* <li>{t("proximity_to_sea")}</li> */}
//             {/* <li>le esperienze che si possono fare nelle vicinanze;</li> */}
//             <li>{t("coworking_space")}</li>
//           </ul>
//         </p>
//         <div className="flex flex-col m-5 text-center font-light">
//           <p>{t("add_borgo")}</p>
//           <div>
//             <BorgoForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddBorgo;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function AddBorgo() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [borgoData, setBorgoData] = useState({
    name: "",
    place: "",
    imgURL: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBorgoData({
      ...borgoData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://borghi-backend.onrender.com/api/v1/borghi",
        {
          // const response = await fetch("http://localhost:3000/api/v1/borghi/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(borgoData),
        }
      );
      if (response.ok) {
        alert("Borgo aggiunto con successo!");
        setBorgoData({
          name: "",
          place: "",
          imgURL: "",
          // reset campi...
        });
        navigate("/thanks");
        // } else {
        //   alert("Errore nell'aggiungere il borgo.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Errore di connessione al server.");
    }
  };

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-center font-bold text-2xl m-14">
        {t("thank_you_for_support")}
      </h1>
      <div className="flex text-center items-center justify-center mt-5 mb-5 sm:mt-20">
        <img
          src="https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Borgo"
        />
      </div>
      <div className="m-5">
        <p className="font-bold">{t("improve_southern_italy")}</p>
        <p className="text-l text-center m-10">
          {t("borgo_criteria")}
          <ul className="flex flex-col text-left justify-center list-disc sm:my-16 sm:mx-48">
            <li>{t("public_services")}</li>
            <li>{t("borgo_beauty")}</li>
            <li>{t("accessibility")}</li>
            <li>{t("internet_speed")}</li>
            <li>{t("coworking_space")}</li>
          </ul>
        </p>
        <div className="flex flex-col m-5 text-center font-light">
          <p>{t("add_borgo")}</p>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center text-center gap-3 mb-10 bg-grey-200 p-5 rounded-lg m-auto"
            >
              <label className="m-4 px-10 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black">
                Nome del borgo
                <input
                  className="px-12 m-2"
                  type="text"
                  name="name"
                  placeholder="Inserisci il nome intero"
                  value={borgoData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="m-2 px-5 shadow-sm rounded-lg py-5 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black">
                Posizione su Google Maps
                <input
                  className="px-12 m-2"
                  type="text"
                  name="place"
                  placeholder="Link di maps"
                  value={borgoData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black">
                Foto
                <input
                  className="px-12 m-2"
                  type="text"
                  name="imgURL"
                  placeholder="Linka una foto stupenda del borgo"
                  value={borgoData.photo}
                  onChange={handleChange}
                  required
                />
              </label>
              <button
                type="submit"
                className="disabled:opacity-75 m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
              >
                Aggiungi Borgo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBorgo;
