import React, { useState, useEffect } from "react";

function BorgoForm({ borgo, onSave, onCancel }) {
  const [formState, setFormState] = useState({
    name: borgo?.name || "",
    place: borgo?.place || "",
    description: borgo?.description || "",
    imgURL: borgo?.imgURL || "",
    // Aggiungi altri campi necessari
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Luogo:
        <input
          type="text"
          name="place"
          value={formState.place}
          onChange={handleChange}
        />
      </label>
      <label>
        Descrizione:
        <textarea
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
      </label>
      <label>
        URL Immagine:
        <input
          type="text"
          name="imgURL"
          value={formState.imgURL}
          onChange={handleChange}
        />
      </label>
      {/* Aggiungi altri campi necessari */}
      <button type="submit">Salva</button>
      <button type="button" onClick={onCancel}>
        Annulla
      </button>
    </form>
  );
}

export default BorgoForm;
