// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Loader from "../components/Loader";
// // import { HeartIcon } from "@heroicons/react/outline";
// import { XIcon } from "@heroicons/react/outline";
// import { useAuth } from "../context/AuthContext";
// import { useTranslation } from "react-i18next"; // Importa useTranslation
// import { motion } from "framer-motion";

// function Delete() {
//   const { t } = useTranslation(); // Inizializza useTranslation
//   const { user } = useAuth(); // Uso il contesto di autenticazione
//   const navigate = useNavigate();
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   // const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(
//           `https://borghi-backend.onrender.com/api/v1/borghi/` // porta default per la produzione
//           // `http://localhost:3000/api/v1/borghi` // porta default per il backend
//           // { mode: "no-cors" }
//         );
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

//   // useEffect(() => {
//   //   const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//   //   setFavorites(savedFavorites);
//   // }, []);

//   // const handleFavoriteToggle = (borgoId) => {
//   //   let updatedFavorites;
//   //   if (favorites.includes(borgoId)) {
//   //     updatedFavorites = favorites.filter((favId) => favId !== borgoId);
//   //   } else {
//   //     updatedFavorites = [...favorites, borgoId];
//   //   }
//   //   setFavorites(updatedFavorites);
//   //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   // };

//   const handleDeleteBorgo = async () => {
//     // e.preventDefault();
//     // if (window.confirm("Sei sicuro di voler eliminare questo borgo?"))
//     try {
//       const response = await fetch(
//         `https://borghi-backend.onrender.com/api/v1/borghi/${borgo._id}`, // URL del backend
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.ok) {
//         // Aggiorna la lista dei borghi localmente
//         alert("Borgo cancellato con successo!");

//         setBorghi(borghi.filter((borgo) => borgo._id !== borgo._id));
//         navigate("/thanks");
//       }
//       // } else {
//       //   console.error(
//       //     "Errore durante la cancellazione del borgo:",
//       //     await response.text()
//       //   );
//       // }
//     } catch (error) {
//       console.error("Errore durante la richiesta DELETE:", error);
//     }
//   };

//   // const handleLoadMore = async () => {
//   //   setCurrentPage((prevPage) => prevPage + 1);
//   // };

//   // const handleCardClick = () => {
//   //   if (!user) {
//   //     navigate("/login");
//   //   } else {
//   //     navigate("/borgo/${borgo.id}");
//   //   }
//   // };

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
//         <p>{t("deleteBorgo")}</p> {/* Traduci il testo */}
//       </div>
//       <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
//         {borghi.map((borgo) => {
//           // const isFavorite = favorites.includes(borgo._id);
//           return (
//             <div
//               className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//               key={borgo._id ? borgo._id : ""}
//             >
//               {/* <Link to={"/borgo/" + (borgo._id ? borgo._id : "")}> */}
//               <img
//                 className="w-auto overflow-hidden m-auto"
//                 src={borgo.imgURL}
//                 alt={borgo.name}
//               />
//               <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                 {borgo.name}
//               </h1>
//               {/* </Link> */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation(); // Impedisce al click del bottone di attivare il click della card
//                   handleDeleteBorgo(borgo._id);
//                 }}
//               >
//                 <XIcon className="float-right my-3 mx-5 h-6 text-red-500" />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// export default Delete;

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { XMarkIcon } from "@heroicons/react/20/solid";
// import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Delete() {
  const { t } = useTranslation();
  // const { user } = useContext(AuthContext); // Uso il contesto di autenticazione
  const navigate = useNavigate();
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchDetails = async () => {
      const baseURL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://borghi-backend.onrender.com";

      setIsLoading(true);
      try {
        const response = await fetch(`${baseURL}/borghi?page=${currentPage}`);
        // const response = await fetch(`${baseURL}/borghi/`);
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

  const handleDeleteBorgo = async (borgoId) => {
    if (window.confirm("Sei sicuro di voler eliminare questo borgo?"))
      try {
        const response = await fetch(`${baseURL}/borghi/${borgoId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          alert("Borgo cancellato con successo!");
          setBorghi((prevBorghi) =>
            prevBorghi.filter((borgo) => borgo._id !== borgoId)
          );
          navigate("/borghi");
        } else {
          console.error(
            "Errore durante la cancellazione del borgo:",
            await response.text()
          );
        }
      } catch (error) {
        console.error("Errore durante la richiesta DELETE:", error);
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
        <p>{t("deleteBorgo", "Cancella Borgo")}</p>
      </div>
      <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
        {borghi.map((borgo) => (
          <div
            className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
            key={borgo._id}
          >
            <img
              className="w-auto overflow-hidden m-auto"
              src={borgo.imgURL || "default-image-url.jpg"}
              alt={borgo.name || "Borgo"}
            />
            <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
              {borgo.name || "Nome non disponibile"}
            </h1>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteBorgo(borgo._id);
              }}
            >
              <XMarkIcon className="float-right my-3 mx-5 h-6 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Delete;
