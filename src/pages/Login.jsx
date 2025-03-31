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

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Loader from "../components/Loader";
// import { animateScroll as scroll } from "react-scroll";
// import { useManageAuth } from "../hooks/auth/useManageAuth";
// import { useTranslation } from "react-i18next";

// const Login = ({ model }) => {
//   const location = useLocation();
//   const { t } = useTranslation();

//   const { login, isLoading } = useManageAuth();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const userData = await login({ formData, model });
//       console.log("User data:", userData);
//     } catch (error) {
//       console.log("Error during login", error);
//       alert("Invalid email or password");
//       setFormData({
//         email: "",
//         password: "",
//       });
//     }
//   };

//   useEffect(() => {
//     scroll.scrollToTop({
//       duration: 1000,
//       smooth: "easeInOutQuad",
//     });
//   }, []);

//   return (
//     <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
//       <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//         <div className="lg:w-1/2 sm:p-12">
//           <div className="mt-12 flex flex-col items-center">
//             <h1 className="text-2xl xl:text-3xl font-extrabold">
//               {t("welcome_back")}
//             </h1>

//             {isLoading && (
//               <div className="flex items-center justify-center mx-auto py-10">
//                 <Loader />
//               </div>
//             )}
//             {!isLoading && (
//               <div className="w-full flex-1 mt-8">
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex flex-col items-center"
//                 >
//                   <>
//                     <div className="mb-5">
//                       <input
//                         type="email"
//                         placeholder="Enter your Email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         // className="w-full py-3 pl-2 border-b border-solid border-gray-300 focus:outline-none focus:border-gray-800 text-xl leading-7 text-gray-500 cursor-pointer"
//                         className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                         required
//                       />
//                     </div>
//                     <div className="mb-5">
//                       <input
//                         type="password"
//                         placeholder="Password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         // className="w-full py-3 pl-2 border-b border-solid border-gray-300 focus:outline-none focus:border-gray-800 text-xl leading-7 text-gray-500 cursor-pointer"
//                         className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                         required
//                       />
//                     </div>
//                   </>
//                   <div className="mt-7">
//                     <button
//                       disabled={isLoading}
//                       type="submit"
//                       className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
//                     >
//                       <span>{t("sign_in")}</span>
//                     </button>
//                   </div>

//                   <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                     <Link to="/login">
//                       <span>
//                         Sei un amministratore?{" "}
//                         <span className="text-red-600">{t("click_here")}</span>
//                       </span>
//                     </Link>
//                   </button>

//                   <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                     <Link to="/registration">
//                       <span>
//                         {t("no_account")}{" "}
//                         <span className="text-red-600">{t("click_here")}</span>
//                       </span>
//                     </Link>
//                   </button>

//                   <button className="w-full mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                     <Link to="/user/password-reset">
//                       <span>
//                         {t("forgot_password")} &nbsp;
//                         <span className="text-red-600">{t("click_here")}</span>
//                       </span>
//                     </Link>
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// ---> Secondo tentativo
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Loader from "../components/Loader";
// import { animateScroll as scroll } from "react-scroll";
// import { useManageAuth } from "../hooks/auth/useManageAuth";
// import { useTranslation } from "react-i18next";

// const Login = ({ model }) => {
//   const location = useLocation();
//   const { t } = useTranslation();
//   const { login, isLoading } = useManageAuth();

//   // Gestione dello stato del form
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState(null);

//   // Gestione dell'input del form
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     // Reset dell'errore quando l'utente inizia a digitare
//     if (error) setError(null);
//   };

//   // Gestione dell'invio del form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const userData = await login({ formData, model });
//       console.log("User data:", userData);
//     } catch (error) {
//       console.log("Error during login", error);
//       setError(t("invalid_credentials"));
//       // Manteniamo l'email ma resettiamo la password per facilitare un nuovo tentativo
//       setFormData((prev) => ({
//         ...prev,
//         password: "",
//       }));
//     }
//   };

//   // Scroll to top quando il componente viene montato
//   useEffect(() => {
//     scroll.scrollToTop({
//       duration: 1000,
//       smooth: "easeInOutQuad",
//     });
//   }, []);

//   // Componente per i pulsanti di navigazione
//   const NavigationButton = ({ to, mainText, highlightedText }) => (
//     <Link to={to} className="w-full">
//       <button className="w-full max-w-xs mt-5 font-medium text-sm rounded-lg py-3 bg-transparent text-gray-700 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:text-red-800">
//         <span>
//           {mainText}{" "}
//           <span className="text-red-600 font-bold">{highlightedText}</span>
//         </span>
//       </button>
//     </Link>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center items-center">
//       <div className="max-w-md w-full mx-4 sm:mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
//         <div className="px-6 py-8">
//           <div className="flex flex-col items-center">
//             <h1 className="text-2xl font-bold text-gray-800 mb-6">
//               {t("welcome_back")}
//             </h1>

//             {isLoading ? (
//               <div className="flex items-center justify-center py-6">
//                 <Loader />
//               </div>
//             ) : (
//               <div className="w-full">
//                 {error && (
//                   <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
//                     {error}
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       {t("email")}
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder={t("enter_email")}
//                       className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       {t("password")}
//                     </label>
//                     <input
//                       id="password"
//                       type="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       placeholder={t("enter_password")}
//                       className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <button
//                     disabled={isLoading}
//                     type="submit"
//                     className="w-full py-3 mt-6 bg-red-800 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white rounded-lg transition-colors font-medium"
//                   >
//                     {t("sign_in")}
//                   </button>
//                 </form>

//                 <div className="mt-8 space-y-2 border-t pt-6">
//                   <NavigationButton
//                     to="/login"
//                     mainText={t("admin_account")}
//                     highlightedText={t("click_here")}
//                   />

//                   <NavigationButton
//                     to="/registration"
//                     mainText={t("no_account")}
//                     highlightedText={t("click_here")}
//                   />

//                   <NavigationButton
//                     to="/user/password-reset"
//                     mainText={t("forgot_password")}
//                     highlightedText={t("click_here")}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import { useManageAuth } from "../hooks/auth/useManageAuth";
import { motion } from "framer-motion";

const Login = ({ model }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userLogin, isLoading, user } = useManageAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await userLogin({ formData, model });
      if (userData) {
        // Redirect immediato alla dashboard personale
        navigate("/dashboard");
      }
      console.log("User data:", userData);
    } catch (error) {
      console.log("Error during login", error);
      alert("Email o password non corretti");
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        <div className="p-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-light text-gray-800 mb-1">
              <span className="text-red-800 font-medium">
                {t("welcome_back")}
              </span>
            </h1>
            {/* <p className="text-gray-500 text-sm mb-8">{t("loginWithEmail")}</p> */}

            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Loader />
              </div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="w-full space-y-6"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <InputField
                    name="email"
                    type="email"
                    placeholder={t("email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    icon="✉️"
                  />
                  <InputField
                    name="password"
                    type="password"
                    placeholder={t("password")}
                    value={formData.password}
                    onChange={handleInputChange}
                    icon="🔒"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="Ricordati di me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 text-red-800 focus:ring-red-700 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="Ricordati di me"
                      className="ml-2 block text-sm text-gray-600"
                    >
                      Ricordati di me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      to="/forgotpassword"
                      className="font-medium text-red-800 hover:text-red-700"
                    >
                      {t("forgot_password")}
                    </Link>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
                  >
                    {t("sign_in")}
                  </button>
                </div>
              </motion.form>
            )}

            <div className="mt-10 text-center space-y-4 w-full">
              {/* <div className="relative flex items-center"></div> */}

              <div className="border-t border-gray-100 pt-6 flex flex-col space-y-4">
                <Link
                  to="/registration"
                  className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                >
                  {t("no_account")}{" "}
                  <span className="font-medium text-red-800">
                    {t("click_here")}
                  </span>
                </Link>

                <Link
                  to="/registrationadmin"
                  className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                >
                  {t("admin_or_structure")}{" "}
                  <span className="font-medium text-red-800">
                    {t("click_here")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Input field component with animation
const InputField = ({ name, type, placeholder, value, onChange, icon }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative rounded-full border ${
        isFocused ? "border-red-500 shadow-sm" : "border-gray-300"
      } transition-all duration-300 overflow-hidden`}
    >
      <div className="flex items-center px-6">
        <span className="text-gray-400 mr-3">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-4 bg-transparent placeholder-gray-400 text-gray-800 focus:outline-none"
          required
        />
      </div>
    </div>
  );
};

export default Login;
