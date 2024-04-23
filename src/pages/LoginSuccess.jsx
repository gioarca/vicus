import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { v4 as uuidv4 } from "uuid";
// import Search from "../components/Search";

function LoginSuccess() {
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allBorghi, setAllBorghi] = useState([]); // Nuova variabile di stato

  useEffect(() => {
    setIsLoading(true);

    const fetchDetails = async () => {
      try {
        setTimeout(async () => {
          // inserito il timeout di 1.5 secondi
          setIsLoading(true);
          const data = await fetch(
            `http://localhost:3000/api/v1/borghi/?limit=15&page=${currentPage}`
          );
          const { borghi: initialBorghi, totalPages } = await data.json();
          setBorghi(initialBorghi.sort((a, b) => a.name.localeCompare(b.name))); // Imposta solo i borghi iniziali
          setTotalPages(totalPages);
          setIsLoading(false);
          setAllBorghi(initialBorghi); // Imposta tutti i borghi finora
        });
      } catch (error) {
        console.error("Errore durante il fetching dei borghi:", error);
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [currentPage]);

  const handleLoadMore = async () => {
    try {
      setIsLoading(true); // Imposta isLoading a true prima di iniziare il caricamento

      const nextPage = currentPage + 1;
      const limit = 5;
      const data = await fetch(
        `http://localhost:3000/api/v1/borghi/?page=${nextPage}&limit=${limit}`
      );
      if (!data.ok) {
        // Gestisci l'errore
        throw new Error(`Errore durante la richiesta API: ${data.statusText}`);
      }
      const { borghi: fetchedBorghi, totalPages } = await data.json();
      setAllBorghi((prevBorghi) => [...prevBorghi, ...fetchedBorghi]); // Aggiunge i nuovi borghi alla lista completa
      setBorghi((prevBorghi) => [...prevBorghi, ...fetchedBorghi]); // Aggiunge i nuovi borghi alla lista visualizzata
      setTotalPages(totalPages);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Errore durante il fetching dei borghi:", error);
      // Gestisci l'errore qui, ad esempio mostrando un messaggio all'utente
    } finally {
      setIsLoading(false); // Imposta isLoading a false dopo il caricamento
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex-wrap m-4 text-center justify-center">
        <p>
          Seleziona uno dei seguenti borghi per esplorarne le caratteristiche
        </p>
        {/* <p>oppure usa la barra di ricerca per cercare un borgo</p> */}
        {/* <Search /> verrà implementata in un secondo momento*/}
      </div>
      <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
        {borghi.map((borgo) => {
          const uniqueKey = uuidv4(); // Genera un ID univoco per ogni elemento
          return (
            <div
              className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              key={uniqueKey}
            >
              <Link to={"/borgo/" + (borgo._id ? borgo._id : "")}>
                <img
                  className="w-auto overflow-hidden m-auto"
                  src={borgo.imgURL}
                  alt={borgo.name}
                />
                <h1 className="flex flex-col text-center justify-center font-semibold m-5">
                  {borgo.name}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
      {currentPage < totalPages && ( // Verifica se ci sono più pagine disponibili
        <div className="flex items-center text-center justify-center">
          <button
            onClick={handleLoadMore}
            className="w-80 font-bold shadow-sm py-3 bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline"
          >
            Carica più borghi
          </button>
        </div>
      )}
    </div>
  );
}
export default LoginSuccess;
