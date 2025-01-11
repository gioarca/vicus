import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { PencilIcon } from "@heroicons/react/outline";
// import { useAuth } from "../context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  PaperAirplaneIcon,
  AcademicCapIcon,
  DesktopComputerIcon,
  OfficeBuildingIcon,
  DeviceMobileIcon,
  HeartIcon,
  WifiIcon,
  CurrencyDollarIcon,
  HomeIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
// import { useAuthContext } from "../hooks/auth/useAuthContext";

function UpdateBorgo() {
  // const [user] = useAuthState(auth);
  // const { user } = useContext(AuthContext); // Uso il contesto di autenticazione
  const navigate = useNavigate();
  let params = useParams();
  const [borghi, setBorghi] = useState(
    JSON.parse(localStorage.getItem(`borghi_${params._id}`)) || []
  );
  const [isLoading, setIsLoading] = useState(!borghi.length);
  const { t } = useTranslation();

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://borghi-backend.onrender.com";

  const borgoFunction = async () => {
    try {
      const response = await fetch(
        `${baseURL}/borghi/${params._id}`
        // `http://localhost:3000/borghi/${params._id}`
      );
      const borgo = await response.json();
      console.log(borgo);
    } catch (error) {
      console.error("Errore durante il fetching del borgo:", error);
    }
  };

  borgoFunction();

  // const { borgo } = useAuthContext();

  // const [isFormModified, setIsFormModified] = useState(false);
  const [borgoData, setBorgoData] = useState({
    name: "",
    place: "",
    place_description: "",
    description: "",
    imgURL: "",
    internet: "",
    priceHouses: "",
    airbnbFilter: "",
    hospital: "",
    app: "",
    school: "",
    district: "",
    airport: "",
    coworking: "",
    // name: borgo.name,
    // place: borgo.place,
    // place_description: borgo.place_description,
    // description: borgo.description,
    // imgURL: borgo.imgURL,
    // internet: borgo.internet,
    // priceHouses: borgo.priceHouses,
    // airbnbFilter: borgo.airbnbFilter,
    // hospital: borgo.hospital,
    // app: borgo.app,
    // school: borgo.school,
    // district: borgo.district,
    // airport: borgo.airport,
    // coworking: borgo.coworking,
  });

  const handleChange = (e) => {
    setBorgoData({
      ...borgoData,
      [e.target.name]: e.target.value,
    });
    setIsFormModified(true);
  };

  // Redirect if user is not logged in
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/registration");
  //   }
  // }, [user, navigate]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!borghi.length) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `${baseURL}/borghi/${params._id}`
            // `http://localhost:3000/api/v1/borghi/${params._id}`
          );
          const detailBorgo = await response.json();
          setBorghi(detailBorgo);
          localStorage.setItem(
            `borghi_${params._id}`,
            JSON.stringify(detailBorgo)
          ); // Caching dei dati
        } catch (error) {
          console.error("Errore durante il fetching dei borghi:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchDetails();
  }, [params._id, borghi.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/borghi/${params._id}`, {
        // const response = await fetch("http://localhost:3000/api/v1/borghi/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(borgoData),
      });
      if (response.ok) {
        alert("Borgo modificato con successo!");
        setBorgoData({
          name: "",
          place: "",
          imgURL: "",
          // reset campi...
        });
        navigate("/thanks");
        // } else {
        //   alert("Errore nell'aggiungere il borgo.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Errore di connessione al server.");
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  // if (!user) {
  //   return null; // Nel caso il redirect non abbia effetto immediato
  // }

  // if (user) {
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
      <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
        <div className="overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
          <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
          <div key={borghi._id} className="p-4">
            <div className="flex flex-col m-5 text-center">
              <p>{t("add_borgo")}</p>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center justify-center"
                >
                  <label className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white">
                    Nome del borgo
                    <input
                      className="px-12 m-2"
                      type="text"
                      name="name"
                      placeholder="Inserisci il nome intero"
                      value={borgoData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                    Posizione su Google Maps
                    <input
                      className="px-12 m-2"
                      type="text"
                      name="place"
                      placeholder="Link di maps"
                      value={borgoData.location}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                    Foto
                    <input
                      className="px-12 m-2"
                      type="text"
                      name="imgURL"
                      placeholder="Linka una foto stupenda del borgo"
                      value={borgoData.photo}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className="disabled:opacity-75 m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                  >
                    Modifica Borgo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
// }

export default UpdateBorgo;
