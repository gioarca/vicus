import React from "react";

function Footer() {
  return (
    <div className="text-center m-4">
      <footer>
        <div className="flex flex-row justify-between m-5">
          <a
            href={"/contatti"}
            className="hover:text-red-500 hover:transition-all"
          >
            Hai bisogno di aiuto?
          </a>

          <a
            href={"/workinprogress"}
            className="hover:text-red-500 hover:transition-all"
          >
            Blog
          </a>
          <a href={"/news"} className="hover:text-red-500 hover:transition-all">
            News
          </a>
        </div>
        <p>
          Copyright © 2024{" "}
          <a
            href={"https://gioarca.netlify.app/"}
            target="_blank"
            className="text-red-500"
          >
            The Last Dance
          </a>{" "}
          All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
