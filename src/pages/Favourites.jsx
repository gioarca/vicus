// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Loader from "../components/Loader";
// import { v4 as uuidv4 } from "uuid";
// import { HeartIcon } from "@heroicons/react/outline";

// function Favourites() {
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [allBorghi, setAllBorghi] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [showFavorites, setShowFavorites] = useState(false); // Stato per visualizzare i preferiti

//   useEffect(() => {
//     setIsLoading(true);

//     const fetchDetails = async () => {
//       try {
//         setTimeout(async () => {
//           setIsLoading(true);
//           const data = await fetch(
//             // `https://borghi-backend.onrender.com/api/v1/borghi/?limit=15&page=${currentPage}`
//             `http://localhost:3000/api/v1/borghi/?limit=15&page=${currentPage}`
//           );
//           const { borghi: initialBorghi, totalPages } = await data.json();
//           setBorghi(initialBorghi.sort((a, b) => a.name.localeCompare(b.name)));
//           setTotalPages(totalPages);
//           setIsLoading(false);
//           setAllBorghi(initialBorghi);
//         });
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [currentPage]);

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   const handleFavoriteToggle = (borgo) => {
//     let updatedFavorites;
//     if (favorites.includes(borgo._id)) {
//       updatedFavorites = favorites.filter((favId) => favId !== borgo._id);
//     } else {
//       updatedFavorites = [...favorites, borgo._id];
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   const handleLoadMore = async () => {
//     try {
//       setIsLoading(true);

//       const nextPage = currentPage + 1;
//       const limit = 5;
//       const data = await fetch(
//         `https://borghi-backend.onrender.com/api/v1/borghi/?limit=${limit}&page=${nextPage}`
//       );
//       if (!data.ok) {
//         throw new Error(`Errore durante la richiesta API: ${data.statusText}`);
//       }
//       const { borghi: fetchedBorghi, totalPages } = await data.json();
//       setAllBorghi((prevBorghi) => [...prevBorghi, ...fetchedBorghi]);
//       setBorghi((prevBorghi) => [...prevBorghi, ...fetchedBorghi]);
//       setTotalPages(totalPages);
//       setCurrentPage(nextPage);
//     } catch (error) {
//       console.error("Errore durante il fetching dei borghi:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const favoriteBorghi = allBorghi.filter((borgo) =>
//     favorites.includes(borgo._id)
//   );

//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="flex-wrap m-4 text-center justify-center">
//         <p>Qui trovi i tuoi borghi preferiti</p>
//         <button
//           onClick={() => setShowFavorites(!showFavorites)}
//           className="m-2 w-80 font-bold shadow-sm p-3 bg-blue-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-blue-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline"
//         >
//           {showFavorites ? "Mostra Tutti i Borghi" : "Mostra Preferiti"}
//         </button>
//       </div>
//       <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
//         {(showFavorites ? favoriteBorghi : borghi).map((borgo) => {
//           const uniqueKey = uuidv4();
//           const isFavorite = favorites.includes(borgo._id);
//           return (
//             <div
//               className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//               key={uniqueKey}
//             >
//               <Link to={"/borgo/" + (borgo._id ? borgo._id : "")}>
//                 <img
//                   className="w-auto overflow-hidden m-auto"
//                   src={borgo.imgURL}
//                   alt={borgo.name}
//                 />
//                 <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                   {borgo.name}
//                 </h1>
//               </Link>
//               <button onClick={() => handleFavoriteToggle(borgo)}>
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
//       {!showFavorites && currentPage < totalPages && (
//         <div className="flex items-center text-center justify-center">
//           <button
//             onClick={handleLoadMore}
//             className="w-80 font-bold shadow-sm py-3 bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline"
//           >
//             Carica più borghi
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Favourites;

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
        const response = await fetch("http://localhost:3000/api/v1/borghi/");
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
      <h1 className="text-lg font-bold mb-4">
        Qui trovi i tuoi borghi preferiti
      </h1>
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
