import React from "react";

function Buttons() {
  return (
    <div className="flex flex-row m-2 text-center justify-center items--center">
      <a href={"/registrazione"}>
        <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
          Registrati
        </button>
      </a>
      <p className="py-7">oppure</p>
      <a href={"/login"}>
        <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
          Accedi
        </button>
      </a>
    </div>
  );
}

export default Buttons;
