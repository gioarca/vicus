import React from "react";

function Footer() {
  return (
    <div className="text-center m-4">
      <div className="m-1 text-center justify-center item-center">
        <a
          href={"/contatti"}
          className="hover:text-red-500 hover:transition-all"
        >
          Hai bisogno di aiuto?
        </a>
      </div>
      <footer>
        <p>© 2024 The Last Dance All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
