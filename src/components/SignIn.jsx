import React from "react";

function SignIn() {
  return (
    <div className="flex text-center justify-center">
      <a href={"/registration"}>
        <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
          Iscriviti
        </button>
      </a>
    </div>
  );
}

export default SignIn;
