import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
// import { data } from "../pages/Registration";

function Dashboard() {
  const [user, isLoading] = useAuthState(auth);
  const [data] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  const handleSignOut = () => {
    setTimeout(async () => {
      auth.signOut().then(() => {
        navigate("/signout"); // Reindirizza dopo il logout
      });
    });
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!user) return <Link to={"/registration"}></Link>;

  // if (data)
  if (user || data)
    return (
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="min-h-screen z-0 flex justify-center bg-gradient-to-t"
      >
        <div className="flex justify-center flex-1 max-w-screen-xl m-0 z-10 bg-white shadow sm:rounded-lg sm:my-20 sm:mx-96">
          <div className="lg:w-1/2 sm:mx-10">
            <div className="mt-40 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                {t("hello")}{" "}
                <span role="img" aria-label="hi" className="h-5">
                  👋
                </span>
              </h1>
              {/* <p className="text-xl">
                Welcome, {user?.name || user.displayName || "User"}!
              </p> */}
            </div>
            <div className="text-center m-5">
              <p>{t("what_you_can_do")}</p>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/borghi"}>
                <button className="m-5 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
                  {t("access_borghi")}
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/addborgo"}>
                <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
                  Aggiungere un borgo
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/favourites"}>
                <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
                  {t("your_favourites")}
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/news"}>
                <button className="m-5 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
                  {t("read_news")}
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <button
                onClick={handleSignOut}
                className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
              >
                {t("logout")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;
