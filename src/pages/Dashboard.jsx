import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Login from "./Login";
import Registrazione from "./Registrazione";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, isLoading] = useAuthState(auth);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setTimeout(async () => {
      auth.signOut().then(() => {
        navigate("/signout"); // Reindirizza dopo il logout
      });
      // setIsLoading(false);
    }, 1000);
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!user) return <Link to={"/registrazione"}></Link>;

  if (user)
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                Ciao{" "}
                <span role="img" aria-label="hi" className="h-5">
                  👋
                </span>
              </h1>
              <p className="text-xl">{user.displayName}</p>
            </div>
            <div className="text-center m-5">
              <p className="">Cosa puoi fare qui?</p>
              <p>All'interno della piattaforma puoi:</p>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/loginSuccess"}>
                <button className="m-5 px-8 w-80 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                  Accedere ai borghi
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/aggiungiunborgo"}>
                <button className="m-5 px-8 w-80 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                  Aggiungere un borgo
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/news"}>
                <button className="m-5 px-8 w-80 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                  Leggere le ultime notizie
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <button
                onClick={handleSignOut}
                className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
              >
                Esci
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;
