import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const form = useRef();
  // const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4zk556a", "template_0t8cg1n", form.current, {
        publicKey: "nBwk1Dh-6_dCdi75H",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.href = "/grazie";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="m-7 text-center sm:mx-28">
        <h1 className="font-bold text-2xl m-5">{t("title")}</h1>
        <p className="text-lg font-medium text-gray-700">{t("tagline")}</p>
        <p className="mt-3">{t("intro")}</p>

        <a href={"/borghi"}>
          <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
            {t("callToActionButtonText")}
          </button>
        </a>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="flex text-center items-center justify-center"
          alt="Village Image"
        />
        <div className="m-5 text-center sm:m-28">
          <h2 className="text-xl font-semibold mb-3">{t("whatIsVicus")}</h2>
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <p className="mt-2">{t("whyChooseUs")}</p>

          <ul className="text-left mt-5 space-y-3 list-disc list-inside">
            <li>{t("points_1")}</li>
            <li>{t("points_2")}</li>
            <li>{t("points_3")}</li>
          </ul>

          <a href={"/about"}>
            <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
              {t("footerButtonText")}
            </button>
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1593814416331-7c0cde46482d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Community Images of Villages"
        />
        <div className="m-5 sm:m-28">
          <h2 className="text-lg font-bold mb-3">
            {t("uniqueSellingPointsTitle")}
          </h2>
          <p>{t("uniqueSellingPointsDescription")}</p>
          <h2 className="text-lg font-bold mt-5 mb-3">
            {t("uniqueSellingPointsTitle2")}
          </h2>
          <p>{t("uniqueSellingPointsDescription2")}</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Pietrapertosa"
        />
        <div className="m-5 sm:m-28">
          <h2 className="text-lg font-bold mb-3">
            {t("callToActionHeadline")}
          </h2>
          <p>{t("uniqueSellingPointsDescription")}</p>
          <h2 className="text-lg font-bold mt-5 mx-12 mb-3">
            {t("callToActionBody")}
          </h2>
          <a href={"/borghi"}>
            <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
              {t("callToActionButtonText")}
            </button>
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Melfi"
        />
        <div className="flex flex-col text-center justify-center items-center mt-10">
          <div>
            <div className="m-3">
              <p>{t("fill_form")}</p>
              <p>
                {t("feedback_request_thanks")}
                <br />
                {t("we_reply")}
              </p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center justify-center"
            >
              <input
                type="text"
                name="user_name"
                placeholder={t("name")}
                className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                type="text"
                name="user_surname"
                placeholder={t("surname")}
                className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                type="text"
                name="user_email"
                placeholder={t("email")}
                className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <textarea
                type="text"
                name="message"
                placeholder={t("message_placeholder")}
                className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                type="submit"
                value={t("send")}
                className="m-2 w-2/3 px-8 py-4 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:cursor-pointer hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
              />
            </form>
          </div>

          <div className="m-5 text-center py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm justify-center items-center md:w-96">
            <p className="font-bold m-2">{t("contact_us")}</p>
            <div className="flex flex-col justify-center items-center m-5">
              <a
                target="_blank"
                href={"mailto: borghisud@gmail.com"}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                  width="50"
                  height="50"
                />
              </a>
              &emsp;
              <a
                href={"mailto: borghisud@gmail.com"}
                className="hover:text-red-500 hover:transition-all"
              >
                {t("email_us")}
              </a>
              <p>{t("address")}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
