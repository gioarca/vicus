import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
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

function BorgoNew() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let params = useParams();
  const [borghi, setBorghi] = useState(
    JSON.parse(localStorage.getItem(`borghi_${params._id}`)) || []
  );
  const [isLoading, setIsLoading] = useState(!borghi.length);
  const { t } = useTranslation();

  // Redirect if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/registration");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!borghi.length) {
        setIsLoading(true);
        try {
          const response = await fetch(
            // `https://borghi-backend.onrender.com/api/v1/borghi/${params._id}`
            `http://localhost:3000/api/v1/borghi/${params._id}`
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

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!user) {
    return null; // Nel caso il redirect non abbia effetto immediato
  }

  if (user) {
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
              <div>
                <div className="p-5 font-bold text-xl">
                  <p>{borghi.name}</p>{" "}
                </div>
                <div className="p-5">
                  <a
                    href={borghi.place ? borghi.place : "/workinprogress"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                      <h3>{t("place")}</h3>
                    </button>
                  </a>
                  <p>{borghi.place_description}</p>
                </div>
                <div className="p-5">
                  <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                    <h3>{t("description")}</h3>
                  </button>
                  <p>{borghi.description}</p>
                </div>
                <div className="p-5">
                  <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                    <h3>{t("slowness")}</h3>{" "}
                  </button>
                </div>
                <div className="p-5">
                  <a
                    href={borghi.internet}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                      <h3>
                        <WifiIcon className="h-5 inline-block mx-1" />
                        {t("internet_speed_2")}
                      </h3>
                    </button>
                  </a>
                  <p>{t("internet_speed_info")}</p>
                </div>
                <div className="p-5">
                  <a
                    href={borghi.priceHouses}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-500 hover:transition-all"
                  >
                    <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                      <h3>
                        <CurrencyDollarIcon className="h-5 inline-block mx-1" />
                        {t("house_price")}
                      </h3>
                    </button>
                  </a>
                  <p>{t("house_price_info")}</p>
                </div>
                <div className="p-5">
                  <a
                    href={borghi.airbnbFilter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-500 hover:transition-all"
                  >
                    <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                      <h3>
                        <HomeIcon className="h-5 inline-block mx-1" />
                        {t("airbnb_price")}
                      </h3>
                    </button>
                  </a>
                  <p>{t("airbnb_price_info")}</p>
                </div>
                <div className="p-5">
                  <a
                    href={
                      borghi.experience ? borghi.experience : "/workinprogress"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-500 hover:transition-all"
                  >
                    <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                      <h3>
                        <GlobeIcon className="h-5 inline-block mx-1" />
                        {t("experience")}
                      </h3>
                    </button>
                  </a>
                  <p>{t("experience_info")}</p>
                </div>
                <div className="px-5 py-10">
                  <p className="mb-2">{t("need_more")}</p>
                  <ul>
                    <a
                      href={borghi.airport}
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="py-2 font-semibold bg-red-800 text-yellow-700 rounded-sm hover:transition-all hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-non"
                      // m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full
                    >
                      <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                        <li>
                          <PaperAirplaneIcon className="h-5 inline-block m-2" />
                          {t("nearest_airport")}
                        </li>
                      </button>
                    </a>
                    <a
                      href={borghi.hospital}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 hover:transition-all"
                    >
                      <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                        <li>
                          <HeartIcon className="h-5 inline-block m-2" />
                          {t("nearest_hospital")}
                        </li>
                      </button>
                    </a>
                    <a
                      href={borghi.app}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 hover:transition-all"
                    >
                      <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                        <li>
                          <DeviceMobileIcon className="h-5 inline-block m-2" />
                          {t("app_services")}
                        </li>
                      </button>
                    </a>
                    <a
                      href={borghi.school}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 hover:transition-all"
                    >
                      <button className="m-5 px-5 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                        <li>
                          <AcademicCapIcon className="h-5 inline-block m-2" />
                          {t("schools")}
                        </li>
                      </button>
                    </a>
                    <a
                      href={borghi.district}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 hover:transition-all"
                    >
                      <button className="m-5 px-5 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                        <li>
                          <OfficeBuildingIcon className="h-5 inline-block m-2" />
                          {t("municipality_site")}
                        </li>
                      </button>
                    </a>
                    <a
                      href={
                        borghi.coworking ? borghi.coworking : "/workinprogress"
                      }
                      rel="noopener noreferrer"
                      className="hover:text-red-500 hover:transition-all"
                    >
                      <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                        <li>
                          <DesktopComputerIcon className="h-5 inline-block m-2" />
                          {t("coworking")}
                        </li>
                      </button>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="p-2">
          <Prenota />
          <Arrow />
        </div> */}
          </div>
        </div>
      </motion.div>
    );
  }
}

export default BorgoNew;
