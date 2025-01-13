import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { PencilIcon } from "@heroicons/react/20/solid";
// import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next"; // Importa useTranslation
import { motion } from "framer-motion";

function BorghiToUpdate() {
  const { t } = useTranslation(); // Inizializza useTranslation
  // const { user } = useAuth(); // Uso il contesto di autenticazione
  // const { user } = useContext(AuthContext); // Uso il contesto di autenticazione
  const navigate = useNavigate();
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const baseURL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://borghi-backend.onrender.com";

      setIsLoading(true);

      try {
        const response = await fetch(`${baseURL}/borghi/`);
        const { borghi: initialBorghi, totalPages } = await response.json();

        // Unire i dati esistenti con i nuovi dati senza duplicati
        const allBorghi = [...borghi, ...initialBorghi];

        // Creare un set per evitare duplicati
        const uniqueBorghi = Array.from(
          new Set(allBorghi.map((borgo) => borgo._id))
        ).map((id) => {
          return allBorghi.find((borgo) => borgo._id === id);
        });

        setBorghi(uniqueBorghi.sort((a, b) => a.name.localeCompare(b.name)));
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Errore durante il fetching dei borghi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [currentPage]);

  // useEffect(() => {
  //   const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   setFavorites(savedFavorites);
  // }, []);

  const handleCardClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/borgo/${borgo.id}");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex-wrap m-4 text-center justify-center">
        <p>{t("select_borghi")}</p> {/* Traduci il testo */}
      </div>
      <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
        {borghi.map((borgo) => {
          // const isFavorite = favorites.includes(borgo._id);
          return (
            <div
              className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              key={borgo._id ? borgo._id : ""}
            >
              <Link to={"/updateborgo/" + (borgo._id ? borgo._id : "")}>
                <img
                  className="w-auto overflow-hidden m-auto"
                  src={borgo.imgURL}
                  alt={borgo.name}
                />
                <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
                  {borgo.name}
                </h1>
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(borgo._id);
                }}
              >
                <PencilIcon className="float-right my-3 mx-5 h-6 text-red-500" />
              </button>
            </div>
          );
        })}
      </div>
      {/* {currentPage < totalPages && (
        <div className="flex items-center text-center justify-center">
          <button
            onClick={handleLoadMore}
            className="w-80 font-bold shadow-sm py-3 bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline"
          >
            {t("load_more_borghi")}
          </button>
        </div>
      )} */}
    </motion.div>
  );
}

export default BorghiToUpdate;
