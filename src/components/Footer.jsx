import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="text-center m-8">
      <footer>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">{t("followUs")}</p>
          <div className="flex justify-center items-center m-10 space-x-10 sm:space-x-26">
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
                alt="Instagram"
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
                alt="Telegram"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between m-5 sm:flex-row sm:mx-[100px] lg:mx-[500px]">
          <a
            href={"/goals"}
            className="block m-1 sm:inline-block sm:mt-0 hover:text-red-600"
          >
            {t("goals")}
          </a>

          <a
            href={"/workinprogress"}
            className="block m-1 sm:inline-block sm:mt-0 hover:text-red-600"
          >
            {t("blog")}
          </a>
          <a
            href={"/contacts"}
            className="block m-1 sm:inline-block sm:mt-0 hover:text-red-600"
          >
            {t("needHelp")}
          </a>
        </div>
        <div className="mx-12">
          <p>
            Copyright © 2024{" "}
            <a
              href={"https://gioarca.netlify.app/"}
              target="_blank"
              className="text-red-500"
            >
              Borghi.
            </a>{" "}
            {t("allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
