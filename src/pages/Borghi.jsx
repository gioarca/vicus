import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { HeartIcon } from "@heroicons/react/outline";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next"; // Importa useTranslation
import { motion } from "framer-motion";

function LoginSuccess() {
  const { t } = useTranslation(); // Inizializza useTranslation
  const { user } = useAuth(); // Uso il contesto di autenticazione
  const navigate = useNavigate();
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          // `https://borghi-backend.onrender.com/api/v1/borghi/?limit=15&page=${currentPage}`
          `http://localhost:3000/api/v1/borghi` // porta default per il backend
        );
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

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteToggle = (borgoId) => {
    let updatedFavorites;
    if (favorites.includes(borgoId)) {
      updatedFavorites = favorites.filter((favId) => favId !== borgoId);
    } else {
      updatedFavorites = [...favorites, borgoId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // const handleLoadMore = async () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

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
          const isFavorite = favorites.includes(borgo._id);
          return (
            <div
              className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              key={borgo._id ? borgo._id : ""}
            >
              <Link to={"/borgo/" + (borgo._id ? borgo._id : "")}>
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
                  e.stopPropagation(); // Impedisce al click del bottone di attivare il click della card
                  handleFavoriteToggle(borgo._id);
                }}
              >
                <HeartIcon
                  className={`float-right my-3 mx-5 h-6 ${
                    isFavorite ? "text-red-500" : "text-gray-500"
                  }`}
                />
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

export default LoginSuccess;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Loader from "../components/Loader";
// import { HeartIcon } from "@heroicons/react/outline";
// import { useAuth } from "../context/AuthContext";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";

// function LoginSuccess() {
//   const { t } = useTranslation();
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [favorites, setFavorites] = useState([]);

//   // Effettua il fetch dei borghi una sola volta al caricamento del componente
//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(`http://localhost:3000/api/v1/borghi`);
//         const { borghi: initialBorghi } = await response.json();
//         // Ordina i borghi per nome
//         setBorghi(initialBorghi.sort((a, b) => a.name.localeCompare(b.name)));
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, []);

//   // Carica i preferiti salvati da localStorage
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   // Funzione per gestire l'aggiunta/rimozione dei preferiti
//   const handleFavoriteToggle = (borgoId) => {
//     let updatedFavorites;
//     if (favorites.includes(borgoId)) {
//       updatedFavorites = favorites.filter((favId) => favId !== borgoId);
//     } else {
//       updatedFavorites = [...favorites, borgoId];
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   // Funzione per gestire il click sulla card e navigare alla pagina del borgo
//   const handleCardClick = (borgoId) => {
//     if (!user) {
//       navigate("/login");
//     } else {
//       navigate(`/borgo/${borgoId}`);
//     }
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}
//     >
//       <div className="flex-wrap m-4 text-center justify-center">
//         <p>{t("select_borghi")}</p>
//       </div>
//       <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
//         {borghi.map((borgo) => {
//           const isFavorite = favorites.includes(borgo._id);
//           return (
//             <div
//               className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//               key={borgo._id}
//               onClick={() => handleCardClick(borgo._id)} // Usa handleCardClick qui
//             >
//               <img
//                 className="w-auto overflow-hidden m-auto"
//                 src={borgo.imgURL}
//                 alt={borgo.name}
//               />
//               <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                 {borgo.name}
//               </h1>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation(); // Impedisce al click del bottone di attivare il click della card
//                   handleFavoriteToggle(borgo._id);
//                 }}
//               >
//                 <HeartIcon
//                   className={`float-right my-3 mx-5 h-6 ${
//                     isFavorite ? "text-red-500" : "text-gray-500"
//                   }`}
//                 />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// export default LoginSuccess;
