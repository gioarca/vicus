import React from "react";
import viteLogo from "/vite.svg";

function Logo() {
  return (
    <div className="flex justify-center items-center m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href={"/"}>
        <img src={viteLogo} className="w-auto h-24 m-8" alt="Vite logo" />
      </a>
    </div>
  );
}

// will-change-auto transition transition-duration:300ms hover:drop-shadow-lg

export default Logo;
