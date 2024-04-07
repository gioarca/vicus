import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useRef } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-transparent m-2">
      <div className="flex items-center  text-black">
        <a href={"/"}>
          <span className="font-semibold text-xl tracking-tight text-5xl m-10">
            {/* <Logo /> */}
            BORGHI
          </span>
        </a>
      </div>

      <div className="block m-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-2 py-2 border border-2 rounded"
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
        {(ref) => (
          <div
            ref={ref}
            className="w-screen justify-center items-center text-center block flex-grow lg:flex lg:items-center lg:w-auto"
          >
            <div className="text-sm lg:flex-grow">
              <a
                href={"/about"}
                className="block m-3 lg:inline-block lg:mt-0 hover:text-red-500"
              >
                Di cosa si tratta?
              </a>
              <a
                href={"/loginSuccess"}
                className="block m-3 lg:inline-block lg:mt-0 hover:text-red-600"
              >
                Borghi
              </a>
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
    </nav>
  );
};

export default Nav;
