import React from "react";

function Iscriviti() {
  return (
    <div className="flex text-center justify-right">
      <a href={"/registrazione"}>
        <button className="transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
          Iscriviti
        </button>
      </a>
    </div>
  );
}

export default Iscriviti;
