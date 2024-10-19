// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../components/Loader";
// // import Prenota from "../components/Prenota";
// import { PaperAirplaneIcon } from "@heroicons/react/outline";
// import { AcademicCapIcon } from "@heroicons/react/outline";
// import { DesktopComputerIcon } from "@heroicons/react/outline/";
// import { OfficeBuildingIcon } from "@heroicons/react/outline/";
// import { DeviceMobileIcon } from "@heroicons/react/outline/";
// import { HeartIcon } from "@heroicons/react/outline/";
// import { WifiIcon } from "@heroicons/react/outline/";
// import { CurrencyDollarIcon } from "@heroicons/react/outline/";
// import { HomeIcon } from "@heroicons/react/outline/";

// function BorgoNew() {
//   let params = useParams();
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // nuovo stato per il caricamento

//   // useEffect(() => {
//   //   const fetchDetails = async () => {
//   //     setTimeout(async () => {
//   //       // inserito il timeout di 1.5 secondi
//   //       setIsLoading(true);
//   //       const data = await fetch(
//   //         `https://borghi-backend.onrender.com/api/v1/borghi/${params._id}` // porta per la produzione
//   //         // `http://localhost:3000/api/v1/borgo/${params._id}` // porta default per il backend
//   //       );
//   //       const detailBorgo = await data.json();
//   //       setBorghi(detailBorgo);
//   //       // console.log(detailBorgo.name); // manda a schermo qualche dato
//   //       setIsLoading(false);
//   //     });
//   //   };
//   //   fetchDetails();
//   // }, []);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       try {
//         const data = await fetch(
//           `https://borghi-backend.onrender.com/api/v1/borghi/${params._id}`
//         );
//         const detailBorgo = await data.json();
//         setBorghi(detailBorgo);
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [params._id]);

//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
//       <div className=" overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
//         <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
//         <div key={borghi._id} className="p-4">
//           <div>
//             <div className="p-5 font-bold text-xl">
//               <p>{borghi.name}</p>
//             </div>
//             <div className="p-5">
//               <h3 className="py-1 underline">Luogo</h3>
//               <p>{borghi.place}</p>
//             </div>
//             <div className="p-5">
//               <h3 className="py-1 underline">Descrizione</h3>
//               <p>{borghi.description}</p>
//             </div>
//             <div className="p-5">
//               <a
//                 href={borghi.internet}
//                 target="_blank"
//                 className=" underline hover:text-red-500 hover:transition-all"
//               >
//                 <h3>
//                   <WifiIcon className="h-5 inline-block m-2" />
//                   Velocità Internet
//                 </h3>
//               </a>
//               <p>
//                 Qualità media della connessione locale del wi-fi, dacci uno
//                 sguardo
//               </p>
//             </div>
//             <div className="p-5">
//               <a
//                 href={borghi.priceHouses}
//                 target="_blank"
//                 className="underline hover:text-red-500 hover:transition-all"
//               >
//                 <h3>
//                   <CurrencyDollarIcon className="h-5 inline-block m-2" />
//                   Prezzo medio delle case in vendita
//                 </h3>
//               </a>
//               <p>
//                 Vorresti trasferirti e comprare casa qui? Dai un'occhiata ai
//                 prezzi qui sopra
//               </p>
//             </div>
//             <div className="p-5">
//               <a
//                 href={borghi.priceHouses}
//                 target="_blank"
//                 className="underline hover:text-red-500 hover:transition-all"
//               >
//                 <h3>
//                   <HomeIcon className="h-5 inline-block m-2" />
//                   Prezzo medio per un Airbnb
//                 </h3>
//               </a>
//               <p>
//                 Al momento non abbiamo ancora una struttura dove ospitare tutti
//                 i membri, ma qui sopra c'è un prezzo indicativo per un gruppo di
//                 4 persone (il numero è puramente arbitrario)
//               </p>
//             </div>
//             <div className="px-5 py-10">
//               <p className="mb-2">
//                 Hai bisogno di più? Premi uno dei pulsanti qui sotto per
//                 ottenere più informazioni sui servizi locali
//               </p>
//               <ul>
//                 <a
//                   href={borghi.airport}
//                   target="_blank"
//                   className="hover:text-red-500 hover:transition-all "
//                 >
//                   <li>
//                     <PaperAirplaneIcon className="h-5 inline-block m-2" />
//                     Aeroporto più vicino
//                   </li>
//                 </a>
//                 <a
//                   href={borghi.hospital}
//                   target="_blank"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <li>
//                     <HeartIcon className="h-5 inline-block m-2" />
//                     Ospedale più vicino
//                   </li>
//                 </a>
//                 <a
//                   href={borghi.app}
//                   target="_blank"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <li>
//                     <DeviceMobileIcon className="h-5 inline-block m-2" />
//                     Servizi APP IO
//                   </li>
//                 </a>
//                 <a
//                   href={borghi.school}
//                   target="_blank"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <li>
//                     <AcademicCapIcon className="h-5 inline-block m-2" />
//                     Scuole
//                   </li>
//                 </a>
//                 <a
//                   href={borghi.district}
//                   target="_blank"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <li>
//                     <OfficeBuildingIcon className="h-5 inline-block m-2" />
//                     Sito del comune
//                   </li>
//                 </a>
//                 <a
//                   href={borghi.coworking ? borghi.coworking : "/workinprogress"}
//                   target="_blank"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <li>
//                     <DesktopComputerIcon className="h-5 inline-block m-2" />
//                     Co-Working
//                   </li>
//                 </a>
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* <div className="p-2 ">
//           <Prenota />
//           {/* <Arrow /> */}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

// export default BorgoNew;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../components/Loader";
// import {
//   PaperAirplaneIcon,
//   AcademicCapIcon,
//   DesktopComputerIcon,
//   OfficeBuildingIcon,
//   DeviceMobileIcon,
//   HeartIcon,
//   WifiIcon,
//   CurrencyDollarIcon,
//   HomeIcon,
// } from "@heroicons/react/outline";
// import { useTranslation } from "react-i18next";

// function BorgoNew() {
//   let params = useParams();
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       try {
//         const data = await fetch(
//           `https://borghi-backend.onrender.com/api/v1/borghi/${params._id}`
//         );
//         const detailBorgo = await data.json();
//         setBorghi(detailBorgo);
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [params._id]);

//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
//       <div className="overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
//         <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
//         <div key={borghi._id} className="p-4">
//           <div>
//             <div className="p-5 font-bold text-xl">
//               <p>{borghi.name}</p>
//             </div>
//             <div className="p-5">
//               <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                 <h3>{t("place")}</h3>
//               </button>
//               <p>{borghi.place}</p>
//             </div>
//             <div className="p-5">
//               <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                 <h3>{t("description")}</h3>
//               </button>
//               <p>{borghi.description}</p>
//             </div>
//             <div className="p-5">
//               <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                 <h3>{t("slowness")}</h3>
//               </button>
//             </div>
//             <div className="p-5">
//               <a
//                 href={borghi.internet}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                   <h3>
//                     <WifiIcon className="h-5 inline-block m-2" />
//                     {t("internet_speed_2")}
//                   </h3>
//                 </button>
//               </a>
//               <p>{t("internet_speed_info")}</p>
//             </div>
//             <div className="p-5">
//               <a
//                 href={borghi.priceHouses}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="underline hover:text-red-500 hover:transition-all"
//               >
//                 <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                   <h3>
//                     <CurrencyDollarIcon className="h-5 inline-block m-2" />
//                     {t("house_price")}
//                   </h3>
//                 </button>
//               </a>
//               <p>{t("house_price_info")}</p>
//             </div>
//             <div className="p-5">
//               <a
//                 href={borghi.priceHouses}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="underline hover:text-red-500 hover:transition-all"
//               >
//                 <button className="m-1 px-6 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                   <h3>
//                     <HomeIcon className="h-5 inline-block m-2" />
//                     {t("airbnb_price")}
//                   </h3>
//                 </button>
//               </a>
//               <p>{t("airbnb_price_info")}</p>
//             </div>
//             <div className="px-5 py-10">
//               <p className="mb-2">{t("need_more")}</p>
//               <ul>
//                 <a
//                   href={borghi.airport}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   // className="py-2 font-semibold bg-red-800 text-yellow-700 rounded-sm hover:transition-all hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-non"
//                   // m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full
//                 >
//                   <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                     <li>
//                       <PaperAirplaneIcon className="h-5 inline-block m-2" />
//                       {t("nearest_airport")}
//                     </li>
//                   </button>
//                 </a>
//                 <a
//                   href={borghi.hospital}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                     <li>
//                       <HeartIcon className="h-5 inline-block m-2" />
//                       {t("nearest_hospital")}
//                     </li>
//                   </button>
//                 </a>
//                 <a
//                   href={borghi.app}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                     <li>
//                       <DeviceMobileIcon className="h-5 inline-block m-2" />
//                       {t("app_services")}
//                     </li>
//                   </button>
//                 </a>
//                 <a
//                   href={borghi.school}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <button className="m-5 px-5 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                     <li>
//                       <AcademicCapIcon className="h-5 inline-block m-2" />
//                       {t("schools")}
//                     </li>
//                   </button>
//                 </a>
//                 <a
//                   href={borghi.district}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <button className="m-5 px-5 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                     <li>
//                       <OfficeBuildingIcon className="h-5 inline-block m-2" />
//                       {t("municipality_site")}
//                     </li>
//                   </button>
//                 </a>
//                 <a
//                   href={borghi.coworking ? borghi.coworking : "/workinprogress"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-red-500 hover:transition-all"
//                 >
//                   <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//                     <li>
//                       <DesktopComputerIcon className="h-5 inline-block m-2" />
//                       {t("coworking")}
//                     </li>
//                   </button>
//                 </a>
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* <div className="p-2">
//           <Prenota />
//           {/* <Arrow /> */}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

// export default BorgoNew;
