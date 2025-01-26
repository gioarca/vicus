// import React, { useState } from "react";
// // import { FcGoogle } from "react-icons/fc";
// // import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// // import { auth } from "../utils/firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function Login() {
//   const { t } = useTranslation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const emailError = document.querySelector(".email.error");
//   const passwordError = document.querySelector(".password.error");

//   // const googleProvider = new GoogleAuthProvider();
//   // const googleLogin = async () => {
//   //   try {
//   //     const result = await signInWithPopup(auth, googleProvider);
//   //     console.log(result.user);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       setError(null);
//       const res = await fetch("http://localhost:3000/user/sign-in", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       // console.log("Login successful:", data);
//       // navigate("/dashboard");

//       // // if (data.errors) {
//       // //   emailError.textContent = data.errors.email;
//       // //   passwordError.textContent = data.errors.password;
//       // // }
//       // if (data.errors) {
//       //   emailError.current.textContent = data.errors.email || "";
//       //   passwordError.current.textContent = data.errors.password || "";
//       // }

//       if (data.errors) {
//         emailError.current.textContent = data.errors.email || "";
//         passwordError.current.textContent = data.errors.password || "";
//       } else {
//         // setEmailError("");
//         // setPasswordError("");
//         console.log("Login successful:", data);
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error("Error during login:", error.message);
//     }
//   };

//   // if (user) {
//   //   return <Navigate to="/dashboard" />;
//   // }

//   return (
//     <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
//       <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//         <div className="lg:w-1/2 sm:p-12">
//           <div className="mt-12 flex flex-col items-center">
//             <h1 className="text-2xl xl:text-3xl font-extrabold">
//               {t("welcome_back")}{" "}
//               <span role="img" aria-label="hi" className="h-5">
//                 👋
//               </span>
//             </h1>
//             <div className="w-full flex-1 mt-8">
//               <div className="flex flex-col items-center">
//                 {/* <button
//                   onClick={googleLogin}
//                   className="w-full max-w-xs font-bold shadow-sm rounded-full py-3 bg-transparent border-2 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
//                 >
//                   <FcGoogle className="bg-white h-10 w-10 rounded-full inline-block" />
//                   <span className="ml-4">{t("continue_with_google")}</span>
//                 </button>

//                 <p className="m-5 text-xs text-gray-600 text-center">
//                   {t("accept_terms")} &nbsp;
//                   <a href="" className="border-b border-gray-500 border-dotted">
//                     {t("terms_of_service")}
//                   </a>
//                   &nbsp; {t("and")} &nbsp;
//                   <a href="" className="border-b border-gray-500 border-dotted">
//                     {t("privacy_policy")}
//                   </a>
//                 </p> */}

//                 <div className="lg:max-w-xl flex flex-col items-center">
//                   <div className="leading px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
//                     <p>{t("or_sign_in_with_email")}</p>
//                   </div>
//                 </div>

//                 <form
//                   className="sm:w-96 flex flex-col items-center"
//                   onSubmit={handleLogin}
//                 >
//                   <input
//                     className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="email"
//                     placeholder={t("email")}
//                     value={email}
//                     onChange={handleEmailChange}
//                   />
//                   <input
//                     className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                     type="password"
//                     placeholder={t("password")}
//                     value={password}
//                     onChange={handlePasswordChange}
//                   />
//                   <button
//                     className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
//                     type="submit"
//                   >
//                     <span>{t("sign_in")}</span>
//                   </button>
//                 </form>

//                 {error && (
//                   <p className="text-red-600 mt-2">
//                     {t("error_occurred")}: {error}
//                   </p>
//                 )}

//                 <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                   <Link to="/registration">
//                     <span>
//                       {t("no_account")}{" "}
//                       <span className="text-red-600">{t("click_here")}</span>
//                     </span>
//                   </Link>
//                 </button>
//                 <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                   <Link to="/user/password-reset">
//                     <span>
//                       {t("forgot_password")}{" "}
//                       <span className="text-red-600">{t("click_here")}</span>
//                     </span>
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { animateScroll as scroll } from "react-scroll";
import { useManageAuth } from "../hooks/auth/useManageAuth";
import { useTranslation } from "react-i18next";

const Login = ({ model }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const { login, isLoading } = useManageAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // twoFactorCode: "",
  });
  // const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ formData, model });
      // if (userData.requiresTwoFactor) {
      //   setIsTwoFactorEnabled(true);
      // }
      console.log("User data:", userData);
    } catch (error) {
      console.log("Error during login", error);
      alert("Invalid email or password");
      setFormData({
        email: "",
        password: "",
      });
    }
  };

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
              {t("welcome_back")}
            </h1>

            {isLoading && (
              <div className="flex items-center justify-center mx-auto py-10">
                <Loader />
              </div>
            )}
            {!isLoading && (
              <div className="w-full flex-1 mt-8">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center"
                >
                  <>
                    <div className="mb-5">
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        // className="w-full py-3 pl-2 border-b border-solid border-gray-300 focus:outline-none focus:border-gray-800 text-xl leading-7 text-gray-500 cursor-pointer"
                        className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        // className="w-full py-3 pl-2 border-b border-solid border-gray-300 focus:outline-none focus:border-gray-800 text-xl leading-7 text-gray-500 cursor-pointer"
                        className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        required
                      />
                    </div>
                  </>
                  <div className="mt-7">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                    >
                      <span>{t("sign_in")}</span>
                    </button>
                  </div>

                  <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
                    <Link to="/registration">
                      <span>
                        {t("no_account")}{" "}
                        <span className="text-red-600">{t("click_here")}</span>
                      </span>
                    </Link>
                  </button>

                  <button className="w-full mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
                    <Link to="/user/password-reset">
                      <span>
                        {t("forgot_password")} &nbsp;
                        <span className="text-red-600">{t("click_here")}</span>
                      </span>
                    </Link>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
