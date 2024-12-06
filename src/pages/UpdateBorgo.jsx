import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { PencilIcon } from "@heroicons/react/outline";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Update() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://borghi-backend.onrender.com/api/v1/borghi?page=${currentPage}`
        );
        const { borghi: newBorghi, totalPages } = await response.json();

        setBorghi((prevBorghi) =>
          [...prevBorghi, ...newBorghi].filter(
            (borgo, index, self) =>
              index === self.findIndex((b) => b._id === borgo._id)
          )
        );
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Errore durante il fetching dei borghi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [currentPage]);

  const handleUpdateBorgo = async (borgoId) => {
    if (window.confirm("Sei sicuro di voler eliminare questo borgo?"))
      try {
        const response = await fetch(
          `https://borghi-backend.onrender.com/api/v1/borghi/${borgoId}`,
          // `http://localhost:3000/api/v1/borghi/${borgoId}`,
          {
            method: "UPDATE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          alert("Borgo modificato con successo!");
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
                handleUpdateBorgo(borgo._id);
              }}
            >
              <PencilIcon className="float-right my-3 mx-5 h-6 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Update;
