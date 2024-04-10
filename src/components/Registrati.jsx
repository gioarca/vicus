import React from "react";

function Buttons() {
  return (
    <div className="flex text-center justify-center items-center">
      <a href={"/registrazione"}>
        <button className="m-5 px-8 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-red-800 transition duration-300 ease-in-out">
          Iscriviti
        </button>
      </a>
    </div>
  );
}

export default Buttons;
