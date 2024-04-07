import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    description: "",
    imgURL: "",
    internetSpeed: "",
    priceHouses: "",
    airbnbFilter: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.floor(Math.random()),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      internetSpeed: formData.speed,
      priceHouses: formData.price,
      airbnbFilter: formData.airbnb,
    };
    addCity(city);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-3 mb-10 bg-grey-200 p-5 rounded-lg m-auto"
    >
      <div className="flex flex-col m-1 w-72">
        <input
          type="text"
          name="name"
          placeholder="Nome del Borgo"
          value={formData.name}
          onChange={handleInputChange}
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 w-72">
        <input
          type="text"
          name="place"
          placeholder="Inserisci il luogo"
          value={formData.place}
          onChange={handleInputChange}
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 w-72">
        <textarea
          name="description"
          value={formData.description}
          placeholder="Descrizione"
          onChange={handleInputChange}
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></textarea>
      </div>
      <div className="flex flex-col m-1 w-72">
        <label></label>
        <input
          type="link"
          name="imgURL"
          placeholder="Inserisci un link di un'immagine"
          value={formData.imgURL}
          onChange={handleInputChange}
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 w-72">
        <input
          type="link"
          name="linkHouses"
          placeholder="Prezzo medio case in vendita"
          value={formData.price}
          onChange={handleInputChange}
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 w-72">
        <input
          type="link"
          name="linkInternet"
          placeholder="Velocità internet"
          value={formData.speed}
          onChange={handleInputChange}
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 w-72">
        <input
          type="link"
          name="linkAirbnb"
          placeholder="Link Airbnb"
          value={formData.airbnb}
          onChange={handleInputChange}
          className="px-4 shadow-sm rounded-lg py-3 bg-gray-100 border border-gray-200 placeholder-gray-500 text-black"
        ></input>
      </div>
      <button className="bg-zinc-700" type="submit">
        Aggiungi Borgo
      </button>
    </form>
  );
}

export default CardForm;
