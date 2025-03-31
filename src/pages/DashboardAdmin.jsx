// import React from "react";
// import { auth } from "../utils/firebase";
// // import { useAuthState } from "react-firebase-hooks/auth";
// import Loader from "../components/Loader";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function DashboardAdmin() {
//   // const [user, isLoading] = useAuthState(auth);
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const handleSignOut = () => {
//     setTimeout(async () => {
//       auth.signOut().then(() => {
//         navigate("/signout"); // Reindirizza dopo il logout
//       });
//     }, 2000);
//   };

//   // if (isLoading)
//   //   return (
//   //     <div>
//   //       <Loader />
//   //     </div>
//   //   );

//   // if (!user) return <Link to={"/registration"}></Link>;

//   // if (user)
//   return (
//     <div
//       style={{
//         backgroundImage: `url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//       }}
//       className="min-h-screen z-0 flex justify-center bg-gradient-to-t"
//     >
//       <div className="flex justify-center flex-1 max-w-screen-xl m-0 z-10 bg-white shadow sm:rounded-lg sm:my-20 sm:mx-96">
//         <div className="lg:w-1/2 sm:mx-10">
//           <div className="mt-40 flex flex-col items-center">
//             <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
//               {t("hello")}{" "}
//               <span role="img" aria-label="hi" className="h-5">
//                 👋
//               </span>
//             </h1>
//             {/* <p className="text-xl">{user.displayName}</p> */}
//           </div>
//           <div className="text-center m-5">
//             <p>{t("what_you_can_do")}</p>
//           </div>

//           <div className="text-center items-center justify-center">
//             <a href={"/borghi"}>
//               <button className="m-5 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 {t("access_borghi")}
//               </button>
//             </a>
//           </div>

//           <div className="text-center items-center justify-center">
//             <a href={"/addborgo"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 Aggiungere un borgo
//               </button>
//             </a>
//           </div>

//           <div className="text-center items-center justify-center">
//             <a href={"/borghitoupdate"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 Modifica un borgo
//               </button>
//             </a>
//           </div>

//           <div className="text-center items-center justify-center">
//             <a href={"/deleteborgo"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 Cancellare un borgo dalla lista
//               </button>
//             </a>
//           </div>

//           {/* <div className="text-center items-center justify-center">
//               <a href={"/news"}>
//                 <button className="m-5 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                   {t("read_news")}
//                 </button>
//               </a>
//             </div> */}

//           <div className="text-center items-center justify-center">
//             <button
//               onClick={handleSignOut}
//               className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//             >
//               {t("logout")}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardAdmin;

import React from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";

function DashboardAdmin() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignOut = () => {
    setTimeout(async () => {
      auth.signOut().then(() => {
        navigate("/signout");
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-t relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop)`,
        }}
      ></div>

      <div className="flex flex-1 max-w-4xl mx-auto z-10 bg-white shadow-lg rounded-lg p-10 my-20 text-center">
        <div className="w-full">
          <h1 className="text-3xl font-extrabold mb-5">
            {t("hello")}{" "}
            <span role="img" aria-label="hi">
              👋
            </span>
          </h1>
          <p className="text-lg mb-8">{t("what_you_can_do")}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <Link to="/borghi" className="btn-primary">
              {t("access_borghi")}
            </Link>
            <Link to="/addborgo" className="btn-primary">
              Aggiungere un borgo
            </Link>
            <Link to="/borghitoupdate" className="btn-primary">
              Modifica un borgo
            </Link>
            <Link to="/deleteborgo" className="btn-primary">
              Cancellare un borgo
            </Link>
          </div>

          <button onClick={handleSignOut} className="btn-danger mt-8">
            {t("logout")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
