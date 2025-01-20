import React, { useState, useRef, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import { useManageUsers } from "../hooks/users/useManageUsers";

function Registration({ user, data }) {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");

  // const baseURL =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : "https://vicus.netlify.app";

  const { signUp } = useManageUsers();

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   taxId: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const handleTaxIdChange = (event) => {
  //   setTaxId(event.target.value);
  // };

  const handleNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const handleSignUp = async () => {
    // event.preventDefault(); // aggiungi event all'interno delle parentesi se scegli questa strada

    // emailError.textContent = "";
    // passwordError.textContent = "";

    // const email = form.email.value;
    // const password = form.password.value;

    if (emailErrorRef.current) emailErrorRef.current.textContent = "";
    if (passwordErrorRef.current) passwordErrorRef.current.textContent = "";

    try {
      setError(null);
      // const res = await fetch(`${baseURL}/sign-up`, {
      // const res = await fetch("http://localhost:3000/sign-up", {
      const res = await signUp({ formData });
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     firstName,
      //     lastName,
      //     email,
      //     password,
      //     confirmPassword,
      //   }),
      // });

      const data = await res.json();
      console.log("Registrazione avvenuta con successo:", data);

      //     if (data.errors) {
      //       emailError.textContent = data.errors.email;
      //       passwordError.textContent = data.errors.password;
      //     }
      //     navigate("/dashboard");
      //   } catch (error) {
      //     setError(error.message);
      //     console.error("Errore durante la registrazione:", error.message);
      //   }
      // };

      if (data.errors) {
        if (emailErrorRef.current)
          emailErrorRef.current.textContent = data.errors.email || "";
        if (passwordErrorRef.current)
          passwordErrorRef.current.textContent = data.errors.password || "";
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
      console.error("Errore durante la registrazione:", error.message);
    }
  };

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuad",
    });
  }, []);

  return (
    <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              {t("signUp")}
            </h1>
            <div className="w-full flex-1 m-3">
              <div className="flex flex-col items-center">
                <div className="m-5 flex flex-col items-center text-center justify-center text-gray-600 transform translate-y-1/2 lg:max-w-xl">
                  <p>{t("SignUpWithEmail")}</p>
                </div>

                <div className="sm:w-96 flex flex-col items-center">
                  <input
                    className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder={t("name")}
                    value={firstName}
                    onChange={handleNameChange}
                  />
                  <input
                    className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder={t("surname")}
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                  <input
                    className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder={t("email")}
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <input
                    className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder={t("password")}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <input
                    className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder={t("confirm_password")}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <button
                    className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                    onClick={handleSignUp}
                  >
                    <span>{t("signUp")}</span>
                  </button>
                  <p className="m-5 text-xs text-gray-600 text-center">
                    {t("accept_terms")} &nbsp;
                    <a
                      href=""
                      className="border-b border-gray-500 border-dotted"
                    >
                      {t("terms_of_service")}
                    </a>
                    &nbsp; {t("and")} &nbsp;
                    <a
                      href=""
                      className="border-b border-gray-500 border-dotted"
                    >
                      {t("privacy_policy")}
                    </a>
                  </p>
                </div>

                {error && (
                  <p className="text-red-600 mt-2">
                    {t("error_occurred")}: {error}
                  </p>
                )}

                <div className="sm:w-96 flex flex-col items-center">
                  <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
                    <Link to={"/login"}>
                      <span>
                        {t("alreadyHaveAccount")}{" "}
                        <p className="text-red-600">{t("click_here")}</p>
                      </span>
                    </Link>
                  </button>

                  <button className="m-5 w-full max-w-xs font-bold shadow-xl rounded-lg py-3 bg-transparent border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-xl focus:shadow-outline">
                    <Link to={"/registrationadmin"}>
                      <span>
                        {t("admin_or_structure")}{" "}
                        <p className="text-red-600">{t("collaborate")}</p>
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
