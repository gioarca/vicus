import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { loginWithRedirect, isAutenticated } = useAuth0();
  return (
    !isAutenticated && (
      <div className="flex flex-row m-2 text-center justify-center items--center">
        <a href={"/registrazione"}>
          <button
            className="transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
            onClick={() => loginWithRedirect()}
          >
            Log Out
          </button>
        </a>
      </div>
    )
  );
}

export default LogoutButton;
