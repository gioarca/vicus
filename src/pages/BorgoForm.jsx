// import React, { useState, useEffect } from "react";

// function BorgoForm({ borgo, onSave, onCancel }) {
//   const [formState, setFormState] = useState({
//     name: borgo?.name || "",
//     place: borgo?.place || "",
//     description: borgo?.description || "",
//     imgURL: borgo?.imgURL || "",
//     // Aggiungi altri campi necessari
//   });

//   const handleChange = (e) => {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formState);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nome:
//         <input
//           type="text"
//           name="name"
//           value={formState.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Luogo:
//         <input
//           type="text"
//           name="place"
//           value={formState.place}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Descrizione:
//         <textarea
//           name="description"
//           value={formState.description}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         URL Immagine:
//         <input
//           type="text"
//           name="imgURL"
//           value={formState.imgURL}
//           onChange={handleChange}
//         />
//       </label>
//       {/* Aggiungi altri campi necessari */}
//       <button type="submit">Salva</button>
//       <button type="button" onClick={onCancel}>
//         Annulla
//       </button>
//     </form>
//   );
// }

// export default BorgoForm;

import React, { useState } from "react";

function BorgoForm() {
  const [borgoData, setBorgoData] = useState({
    name: "",
    description: "",
    location: "",
    internetSpeed: "",
    coworkingSpace: false,
    // altri campi...
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
      const response = await fetch("http://localhost:3000/api/v1/borghi/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(borgoData),
      });
      if (response.ok) {
        alert("Borgo aggiunto con successo!");
        setBorgoData({
          name: "",
          description: "",
          location: "",
          internetSpeed: "",
          coworkingSpace: false,
          // reset campi...
        });
      } else {
        alert("Errore nell'aggiungere il borgo.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Errore di connessione al server.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={borgoData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Foto:
        <textarea
          name="photo"
          value={borgoData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Posizione:
        <input
          type="text"
          name="location"
          value={borgoData.location}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Aggiungi Borgo</button>
    </form>
  );
}

export default BorgoForm;
