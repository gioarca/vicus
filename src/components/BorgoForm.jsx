// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { useTranslation } from "react-i18next";

// function BorgoContacts() {
//   const form = useRef();
//   const { t } = useTranslation();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_4zk556a",
//         "template_0t8cg1n",
//         form.current,
//         "nBwk1Dh-6_dCdi75H"
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           window.location.href = "/thanks";
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div className="flex flex-col text-center justify-center items-center">
//       <div>
//         <div className="m-3">
//           <p>{t("fill_form")}</p>
//           <p>
//             {t("feedback_request_thanks")}
//             <br />
//             {t("we_reply")}
//           </p>
//         </div>
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="flex flex-col items-center justify-center"
//         >
//           <input
//             type="text"
//             name="user_name"
//             placeholder={t("name")}
//             className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <input
//             type="text"
//             name="user_surname"
//             placeholder={t("surname")}
//             className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <input
//             type="text"
//             name="user_email"
//             placeholder={t("email")}
//             className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <textarea
//             type="text"
//             name="message"
//             placeholder={t("message_placeholder")}
//             className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <button
//             type="submit"
//             className="m-2 w-36 px-8 py-4 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:cursor-pointer hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//           >
//             {t("send")}
//           </button>
//         </form>
//       </div>

//       <div className="m-5 text-center py-4 rounded-lg font-medium text-sm justify-center items-center md:w-96">
//         <p className="font-bold m-2">{t("contact_us")}</p>
//         <div className="flex flex-col justify-center items-center m-5">
//           <a
//             target="_blank"
//             href={"mailto: borghisud@gmail.com"}
//             className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
//               width="50"
//               height="50"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BorgoContacts;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function BorgoContacts() {
  const form = useRef();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_surname: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4zk556a",
        "template_0t8cg1n",
        form.current,
        "nBwk1Dh-6_dCdi75H"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.href = "/thanks";
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Form Section */}
          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {t("contact_us")}
            </h2>
            <div className="h-1 w-20 bg-red-600 mb-6"></div>

            <p className="text-gray-600 mb-8">
              {t("fill_form")} {t("feedback_request_thanks")}
              <br />
              {t("we_reply")}
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    value={formValues.user_name}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                    placeholder={t("name")}
                    id="user_name"
                  />
                  <label
                    htmlFor="user_name"
                    className={`absolute left-4 -top-2.5 px-1 text-sm transition-all 
                    bg-white text-gray-600 peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600`}
                  >
                    {t("name")}
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="user_surname"
                    value={formValues.user_surname}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                    placeholder={t("surname")}
                    id="user_surname"
                  />
                  <label
                    htmlFor="user_surname"
                    className={`absolute left-4 -top-2.5 px-1 text-sm transition-all 
                    bg-white text-gray-600 peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600`}
                  >
                    {t("surname")}
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  value={formValues.user_email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                  placeholder={t("email")}
                  id="user_email"
                />
                <label
                  htmlFor="user_email"
                  className={`absolute left-4 -top-2.5 px-1 text-sm transition-all 
                  bg-white text-gray-600 peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600`}
                >
                  {t("email")}
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all resize-none"
                  placeholder={t("message_placeholder")}
                  id="message"
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 -top-2.5 px-1 text-sm transition-all 
                  bg-white text-gray-600 peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600`}
                >
                  {t("message_placeholder")}
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg bg-red-600 text-white font-semibold 
                  transition-all transform hover:bg-red-700 hover:scale-105 
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                  disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center
                  w-full md:w-auto`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t("sending")}
                    </>
                  ) : (
                    t("send")
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Puoi trovarci qui</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-5 h-5 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-gray-200 text-sm mb-1">{t("email")}</p>
                    <a
                      href="mailto:borghisud@gmail.com"
                      className="hover:underline"
                    >
                      borghisud@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg
                    className="w-5 h-5 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-gray-200 text-sm mb-1">
                      {t("location")}
                    </p>
                    <p>Italia Meridionale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-12"> */}
            {/* <p className="text-gray-200 text-sm mb-4">
                {t("connect_with_us")}
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:borghisud@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                  </svg>
                </a>
                {/* Add more social icons as needed */}
            {/* </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BorgoContacts;
