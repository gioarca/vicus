import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import { useManageUsers } from "../hooks/users/useManageUsers";
import { IoIosCheckmarkCircle } from "react-icons/io";

const RegistrationAdmin = () => {
  const { t } = useTranslation();
  const { signUp, isLoading } = useManageUsers();
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    taxId: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registrationSuccessful = await signUp({ formData });
      if (registrationSuccessful) {
        setIsRegistrationComplete(true);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
  }, []);

  return (
    <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
      {!isRegistrationComplete ? (
        <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                {t("signUp")}
              </h1>

              {isLoading ? (
                <div className="flex items-center justify-center mx-auto py-10">
                  <Loader />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col items-center"
                >
                  <div className="mb-12 lg:m-12 flex flex-col items-center text-center justify-center text-gray-600 transform translate-y-1/2 lg:max-w-xl">
                    <p>{t("SignUpWithEmail")}</p>
                    <p className="font-bold">
                      La password dev'essere composta da almeno 6 caratteri,
                      deve contenere inoltre almeno una lettera maiuscola, un
                      numero e un carattere speciale (esempio: Ciao123!)
                    </p>
                  </div>
                  {[
                    { name: "firstName", type: "text", placeholder: t("name") },
                    {
                      name: "lastName",
                      type: "text",
                      placeholder: t("surname"),
                    },
                    { name: "email", type: "email", placeholder: t("email") },
                    { name: "Tax ID", type: "number", placeholder: t("taxId") },
                    {
                      name: "password",
                      type: "password",
                      placeholder: t("password"),
                    },
                    {
                      name: "confirmPassword",
                      type: "password",
                      placeholder: t("confirm_password"),
                    },
                  ].map((input) => (
                    <input
                      key={input.name}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={formData[input.name]}
                      onChange={handleInputChange}
                      className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      required
                    />
                  ))}

                  <button
                    type="submit"
                    className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 mt-5"
                    disabled={isLoading}
                  >
                    {t("signUp")}
                  </button>
                  <p className="m-5 text-xs text-gray-600 text-center">
                    {t("accept_terms")} &nbsp;
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      {t("terms_of_service")}
                    </a>
                    &nbsp; {t("and")} &nbsp;
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      {t("privacy_policy")}
                    </a>
                  </p>
                </form>
              )}

              <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
                <Link to="/login">
                  <span>
                    {t("alreadyHaveAccount")}{" "}
                    <span className="text-red-600">{t("click_here")}</span>
                  </span>
                </Link>
              </button>

              <button className="w-full mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
                <Link to="registrationadmin">
                  <span>
                    {t("admin_or_structure")} &nbsp;
                    <span className="text-red-600">{t("click_here")}</span>
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center md:h-screen">
          <p className="text-[#168aad] text-3xl leading-9 font-semibold mb-5">
            Registrazione avvenuta con successo!
          </p>
          <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-3">
            <IoIosCheckmarkCircle className="w-[100px] h-[100px] text-green-400" />
            <p className="text-gray-500 text-xl font-semibold">
              Verifica la tua email per completare la registrazione.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationAdmin;
