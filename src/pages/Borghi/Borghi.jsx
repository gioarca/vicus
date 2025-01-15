// import React, { useEffect, useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Loader from "../components/Loader";
// import { HeartIcon } from "@heroicons/react/outline";
// import { useTranslation } from "react-i18next"; // Importa useTranslation
// import { motion } from "framer-motion";
// import { useAuthContext } from "../hooks/auth/useAuthContext";

// function Borghi() {
//   const { t } = useTranslation(); // Inizializza useTranslation
//   const { user } = useAuthContext(); // Uso il contesto di autenticazione
//   const navigate = useNavigate();
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       const baseURL =
//         process.env.NODE_ENV === "development"
//           ? "http://localhost:3000"
//           : "https://borghi-backend.onrender.com";

//       try {
//         const response = await fetch(`${baseURL}/borghi/`);
//         const { borghi: initialBorghi, totalPages } = await response.json();

//         // Unire i dati esistenti con i nuovi dati senza duplicati
//         const allBorghi = [...borghi, ...initialBorghi];

//         // Creare un set per evitare duplicati
//         const uniqueBorghi = Array.from(
//           new Set(allBorghi.map((borgo) => borgo._id))
//         ).map((id) => {
//           return allBorghi.find((borgo) => borgo._id === id);
//         });

//         setBorghi(uniqueBorghi.sort((a, b) => a.name.localeCompare(b.name)));
//         setTotalPages(totalPages);
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [currentPage]);

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(savedFavorites);
//   }, []);

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

//   const handleCardClick = () => {
//     if (!user) {
//       navigate("/login");
//     } else {
//       navigate(`/borghi/${borgo._id}`);
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
//         <p>{t("select_borghi")}</p> {/* Traduci il testo */}
//       </div>
//       <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
//         {borghi.map((borgo) => {
//           if (user.token) {
//             const isFavorite = favorites.includes(borgo._id);

//             return (
//               <div
//                 className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//                 key={borgo._id ? borgo._id : ""}
//               >
//                 <Link to={"/borghi/" + (borgo._id ? borgo._id : "")}>
//                   <img
//                     className="w-auto overflow-hidden m-auto"
//                     src={borgo.imgURL}
//                     alt={borgo.name}
//                   />
//                   <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                     {borgo.name}
//                   </h1>
//                 </Link>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Impedisce al click del bottone di attivare il click della card
//                     handleFavoriteToggle(borgo._id);
//                   }}
//                 >
//                   <HeartIcon
//                     className={`float-right my-3 mx-5 h-6 ${
//                       isFavorite ? "text-red-500" : "text-gray-500"
//                     }`}
//                   />
//                 </button>
//               </div>
//             );
//           }
//           if (!user.token) {
//             return (
//               <div
//                 className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//                 key={borgo._id ? borgo._id : ""}
//                 onClick={handleCardClick}
//               >
//                 <Link to={"/borghi/" + (borgo._id ? borgo._id : "")}>
//                   <img
//                     className="w-auto overflow-hidden m-auto"
//                     src={borgo.imgURL}
//                     alt={borgo.name}
//                   />
//                   <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                     {borgo.name}
//                   </h1>
//                 </Link>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </motion.div>
//   );
// }

// export default Borghi;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { HeartIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useAuthContext } from "../../hooks/auth/useAuthContext";

function Borghi() {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const baseURL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://borghi-backend.onrender.com";

      try {
        const response = await fetch(`${baseURL}/borghi/?page=${currentPage}`);
        // const response = await fetch(
        //   `https://borghi-backend.onrender.com/borghi/?page=${currentPage}`
        // );
        // const { borghi: fetchedBorghi, totalPages } = await response.json();
        const { borghi: initialBorghi, totalPages } = await response.json();

        // setBorghi((prevBorghi) => [
        //   ...prevBorghi,
        //   ...fetchedBorghi.filter(
        //     (borgo) => !prevBorghi.some((b) => b._id === borgo._id)
        //   ),
        // ]);
        const allBorghi = [...borghi, ...initialBorghi];
        const uniqueBorghi = Array.from(
          new Set(allBorghi.map((borgo) => borgo._id))
        ).map((id) => {
          return allBorghi.find((borgo) => borgo._id === id);
        });
        setBorghi(uniqueBorghi.sort((a, b) => a.name.localeCompare(b.name)));
        setTotalPages(totalPages);
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
    const updatedFavorites = favorites.includes(borgoId)
      ? favorites.filter((favId) => favId !== borgoId)
      : [...favorites, borgoId];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleCardClick = (borgoId) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/borghi/${borgoId}`);
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
              key={borgo._id}
              onClick={() => handleCardClick(borgo._id)}
            >
              <Link to={`/borghi/${borgo._id}`}>
                <img
                  className="w-auto m-auto"
                  src={borgo.imgURL}
                  alt={borgo.name}
                />
                <h1 className="text-center font-semibold mt-5">{borgo.name}</h1>
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
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
      {currentPage < totalPages && (
        <button
          className="m-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          {t("load_more")}
        </button>
      )}
    </motion.div>
  );
}

export default Borghi;
