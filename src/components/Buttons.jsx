import React from "react";

function Buttons() {
  return (
    <div className="flex flex-row m-2 text-center justify-center items--center">
      <a href={"/registrazione"}>
        <button className="transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
          Registrati
        </button>
      </a>
      <p className="py-7">oppure</p>
      <a href={"/loginSuccess"}>
        <button>Login</button>
      </a>
    </div>
  );
}

export default Buttons;
