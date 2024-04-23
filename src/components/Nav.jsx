import React, { useState, createRef } from "react";
import { Transition } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const divRef = createRef();

  const handleSignOut = () => {
    setTimeout(
      auth.signOut().then(() => {
        navigate("/signout"); // Reindirizza dopo il logout
      }),
      1000
    );
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white m-2">
      <div className="flex items-center text-black">
        <a href={"/"}>
          <span className="font-semibold text-xl tracking-tight flex m-10 w-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:duration-300 hover:opacity-50">
            BORGHI
          </span>
        </a>
      </div>

      {/* Navbar senza utente */}
      {!user && (
        <>
          <div className="inline m-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-2 py-2 rounded hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <Transition
            show={isOpen}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(divRef) => (
              <div
                ref={(ref) => {
                  divRef.current = ref;
                }}
                className="relative bg-transparent w-screen justify-center items-center text-center z-10 lg:flex lg:items-center lg:w-auto"
              >
                <div className="text-m lg:flex-grow lg:visible lg">
                  <a
                    href={"/about"}
                    className="block m-3 lg:inline-block lg:mt-0 hover:text-red-500"
                  >
                    Di cosa si tratta?
                  </a>
                  <a
                    href={"/obiettivi"}
                    className="block m-3 lg:inline-block lg:mt-0 hover:text-red-600"
                  >
                    Obiettivi
                  </a>
                  {/* <a
                    href={"/news"}
                    className="block m-3 lg:inline-block lg:mt-0 hover:text-red-600"
                  >
                    Notizie
                  </a> */}
                  <a
                    href={"/contatti"}
                    className="block m-3 lg:inline-block lg:mt-0 hover:text-red-600"
                  >
                    Contatti
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </>
      )}

      {/* Navbar con autenticazione utente */}
      {user && (
        <>
          <div className="flex px-2 m-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-2 py-2 border-none rounded hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <Link to={"/dashboard"}>
              <button className="flex items-center px-2 py-2 rounded hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out">
                <img
                  src={user.photoURL}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  className="h-6 w-6 rounded-full items-center justify-center"
                  aria-hidden="true"
                />
              </button>
            </Link>
          </div>

          <Transition
            show={isOpen}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div
                ref={(ref) => {
                  divRef.current = ref;
                }}
                className="relative bg-transparent w-screen justify-center items-center text-center z-10 lg:flex lg:items-center lg:w-auto"
              >
                <div className="text-m lg:flex-grow">
                  <a
                    href={"/about"}
                    className="block m-3 text-center lg:inline-block lg:mt-0 hover:text-red-500"
                  >
                    Di cosa si tratta?
                  </a>
                  <a
                    href={"/loginSuccess"}
                    className="block m-3 text-center lg:inline-block lg:mt-0 hover:text-red-600"
                  >
                    Borghi
                  </a>
                  <a
                    href={"/contatti"}
                    className="block m-3 text-center lg:inline-block lg:mt-0 hover:text-red-600"
                  >
                    Contatti
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="block m-auto w-auto font-bold shadow-sm py-1 text-center items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline lg:inline-block p-4 lg:w-20"
                  >
                    Esci
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </>
      )}
    </nav>
  );
}

export default NavBar;
