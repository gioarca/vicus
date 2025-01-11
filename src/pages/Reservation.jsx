import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { v4 as uuidv4 } from "uuid";
import { HeartIcon } from "@heroicons/react/outline";

function Favourites() {
  const [favoriteBorghi, setFavoriteBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Carica gli ID dei preferiti dal localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);

    // Fetch dei borghi preferiti
    const fetchFavorites = async () => {
      try {
        const response = await fetch(
          "https://borghi-backend.onrender.com/api/v1/borghi/"
        );
        const { borghi } = await response.json();
        const filteredFavorites = borghi.filter((borgo) =>
          savedFavorites.includes(borgo._id)
        );
        setFavoriteBorghi(filteredFavorites);
      } catch (error) {
        console.error("Errore durante il fetching dei borghi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleFavoriteToggle = (borgo) => {
    const isFavorite = favorites.includes(borgo._id);
    const updatedFavorites = isFavorite
      ? favorites.filter((favId) => favId !== borgo._id)
      : [...favorites, borgo._id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Aggiorna la lista dei borghi preferiti
    setFavoriteBorghi(
      favoriteBorghi.filter((b) => updatedFavorites.includes(b._id))
    );
  };

  if (isLoading) return <Loader />;

  return (
    <div className="m-4 text-center">
      <h1 className="text-lg font-bold mb-4">Le tue prenotazioni</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {favoriteBorghi.map((borgo) => (
          <div
            className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            key={uuidv4()}
          >
            <Link to={`/borgo/${borgo._id}`}>
              <img
                className="w-auto m-auto"
                src={borgo.imgURL}
                alt={borgo.name}
              />
              <h1 className="text-center font-semibold mt-5">{borgo.name}</h1>
            </Link>
            <button onClick={() => handleFavoriteToggle(borgo)}>
              <HeartIcon
                className={`float-right my-3 mx-5 h-6 ${
                  favorites.includes(borgo._id)
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites;
