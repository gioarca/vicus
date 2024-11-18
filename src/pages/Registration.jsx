import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTranslation } from "react-i18next";

function Registration({ user, data }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async () => {
    // event.preventDefault(); // aggiungi event all'interno delle parentesi se scegli questa strada

    // emailError.textContent = "";
    // passwordError.textContent = "";

    // const email = form.email.value;
    // const password = form.password.value;

    try {
      setError(null);
      const res = await fetch("http://localhost:3000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Registrazione avvenuta con successo:", data);

      if (data.errors) {
        emailError.textContent = data.errors.email;
        passwordError.textContent = data.errors.password;
      }

      if (data.user) {
        location.assign("/dashboard");
      }
    } catch (error) {
      setError(error.message);
      console.error("Errore durante la registrazione:", error.message);
    }
    // };

    //   try {
    //     setError(null);
    //     const res = await fetch(
    //       "http://localhost:3000/api/v1/authRoutes/signup",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ email, password }), // Usa direttamente email e password dallo stato
    //       }
    //     );

    //     const data = await res.json();
    //     console.log("Registrazione avvenuta con successo:", data);

    //     if (data.errors) {
    //       // Gestione degli errori
    //       document.querySelector(".email.error").textContent = data.errors.email;
    //       document.querySelector(".password.error").textContent =
    //         data.errors.password;
    //     }

    //     if (data.user) {
    //       navigate("/dashboard"); // Usa navigate invece di location.assign
    //     }
    //   } catch (error) {
    //     setError(error.message);
    //     console.error("Errore durante la registrazione:", error.message);
    //   }
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Login Success:", user);

      const response = await fetch("http://localhost:3000/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, uid: user.uid }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Google Login failed");
      }
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error("Errore durante il login con Google:", error.message);
    }
  };

  if (user || data) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              {t("signUp")}
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  onClick={googleLogin}
                  className="w-full max-w-xs font-bold shadow-sm rounded-full py-3 bg-transparent border-2 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <FcGoogle className="bg-white h-10 w-10 rounded-full inline-block" />
                  <span className="ml-4">{t("continue_with_google")}</span>
                </button>

                <p className="m-5 text-xs text-gray-600 text-center">
                  {t("accept_terms")} &nbsp;
                  <a href="" className="border-b border-gray-500 border-dotted">
                    {t("terms_of_service")}
                  </a>
                  &nbsp; {t("and")} &nbsp;
                  <a href="" className="border-b border-gray-500 border-dotted">
                    {t("privacy_policy")}
                  </a>
                </p>

                <div className="lg:max-w-xl flex flex-col items-center">
                  <div className="leading px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    <p>{t("orSignUpWithEmail")}</p>
                  </div>
                </div>

                <div className="sm:w-96 flex flex-col items-center">
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
                  <button
                    className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                    onClick={handleSignUp}
                  >
                    <span>{t("signUp")}</span>
                  </button>
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
