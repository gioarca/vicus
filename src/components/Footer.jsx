import React from "react";

function Footer() {
  return (
    <div className="text-center m-8">
      <footer>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">Seguici</p>
          <div className="flex justify-center items-center m-10 space-x-10">
            <a
              target="_blank"
              href="https://www.instagram.com/borghi_sud/"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                width="50"
                height="50"
                className="bg-transparent"
              />
            </a>
            &emsp;
            <a
              target="_blank"
              href="https://t.me/+itBwf1Ed0DNjMjdk"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
            >
              <img
                src="https://frankmerenda.com/wp-content/uploads/2019/11/telegram-icon-512.png"
                width="50"
                height="50"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between m-5 sm:mx-[450px] sm:flex-1">
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
