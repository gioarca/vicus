import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login({ user, data }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setError(null);
      const res = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login successful:", data);
      if (data.token) {
        <Navigate to="/dashboard" />;
      }

      if (data.errors) {
        emailError.textContent = data.errors.email;
        passwordError.textContent = data.errors.password;
      }
    } catch (error) {
      setError(error.message);
      console.error("Error during login:", error.message);
    }
  };

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              {t("welcome_back")}{" "}
              <span role="img" aria-label="hi" className="h-5">
                👋
              </span>
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
                    <p>{t("or_sign_in_with_email")}</p>
                  </div>
                </div>

                <form
                  className="sm:w-96 flex flex-col items-center"
                  onSubmit={handleLogin}
                >
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
                    type="submit"
                  >
                    <span>{t("sign_in")}</span>
                  </button>
                </form>

                {error && (
                  <p className="text-red-600 mt-2">
                    {t("error_occurred")}: {error}
                  </p>
                )}

                <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
                  <Link to="/registration">
                    <span>
                      {t("no_account")}{" "}
                      <span className="text-red-600">{t("click_here")}</span>
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
