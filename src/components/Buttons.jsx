import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

function Buttons() {
  // const { loginWithRedirect, isAutenticated } = useAuth0();
  return (
    // !isAutenticated && (

    <div className="flex flex-row m-2 text-center justify-center items--center">
      <a href={"/registrazione"}>
        <button
          className="transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
          // onClick={() => loginWithRedirect()}
        >
          Registrati
        </button>
      </a>

      {/* isAutenticated && (<div className="flex flex-row m-2 text-center justify-center items--center"> */}
      <p className="py-7">oppure</p>
      <a href={"/loginSuccess"}>
        <button>Login</button>
      </a>
    </div>
  );
}

export default Buttons;
