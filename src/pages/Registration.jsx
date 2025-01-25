// import React, { useState, useEffect } from "react";
// import Loader from "../components/Loader";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { animateScroll as scroll } from "react-scroll";
// import { useManageUsers } from "../hooks/users/useManageUsers";
// import { IoIosCheckmarkCircle } from "react-icons/io";

// const Registration = () => {
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   // const [error, setError] = useState(null);

//   // const navigate = useNavigate();
//   // const emailError = document.querySelector(".email.error");
//   // const passwordError = document.querySelector(".password.error");

//   // const baseURL =
//   //   process.env.NODE_ENV === "development"
//   //     ? "http://localhost:3000"
//   //     : "https://borghi-backend.onrender.com";

//   // // const { signUp } = useManageUsers();

//   // const [formData, setFormData] = useState({
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   //   password: "",
//   //   confirmPassword: "",
//   // });

//   // // const handleTaxIdChange = (event) => {
//   // //   setTaxId(event.target.value);
//   // // };

//   // const handleNameChange = (event) => {
//   //   setFirstName(event.target.value);
//   // };

//   // const handleLastNameChange = (event) => {
//   //   setLastName(event.target.value);
//   // };

//   // const handleEmailChange = (event) => {
//   //   setEmail(event.target.value);
//   // };

//   // const handlePasswordChange = (event) => {
//   //   setPassword(event.target.value);
//   // };

//   // const handleConfirmPasswordChange = (event) => {
//   //   setConfirmPassword(event.target.value);
//   // };

//   // const emailErrorRef = useRef(null);
//   // const passwordErrorRef = useRef(null);

//   // const handleSignUp = async (e) => {
//   //   e.preventDefault(); // aggiungi event o e all'interno delle parentesi se scegli questa strada

//   //   // emailError.textContent = "";
//   //   // passwordError.textContent = "";

//   //   // const email = form.email.value;
//   //   // const password = form.password.value;

//   //   if (emailErrorRef.current) emailErrorRef.current.textContent = "";
//   //   if (passwordErrorRef.current) passwordErrorRef.current.textContent = "";

//   //   try {
//   //     setError(null);
//   //     const res = await fetch(`${baseURL}/sign-up`, {
//   //       // const res = await fetch("http://localhost:3000/sign-up", {
//   //       // const res = await signUp({ formData });
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         firstName,
//   //         lastName,
//   //         email,
//   //         password,
//   //         confirmPassword,
//   //       }),
//   //     });

//   //     const data = await res.json();
//   //     console.log("Registrazione avvenuta con successo:", data);
//   //     alert("Registrazione avvenuta con successo, controlla la tua email.");

//   //     //     if (data.errors) {
//   //     //       emailError.textContent = data.errors.email;
//   //     //       passwordError.textContent = data.errors.password;
//   //     //     }
//   //     //     navigate("/dashboard");
//   //     //   } catch (error) {
//   //     //     setError(error.message);
//   //     //     console.error("Errore durante la registrazione:", error.message);
//   //     //   }
//   //     // };

//   //     if (data.errors) {
//   //       if (emailErrorRef.current)
//   //         emailErrorRef.current.textContent = data.errors.email || "";
//   //       if (passwordErrorRef.current)
//   //         passwordErrorRef.current.textContent = data.errors.password || "";
//   //     } else {
//   //       navigate("/dashboard");
//   //     }
//   //   } catch (error) {
//   //     // setError(error.message);
//   //     console.log("Errore durante la registrazione:", error);
//   //     setFormData({
//   //       firstName: "",
//   //       lastName: "",
//   //       email: "",
//   //       password: "",
//   //       confirmPassword: "",
//   //     });
//   //   }
//   // };

//   // if (user) {
//   //   return <Navigate to="/dashboard" />;
//   // }

//   const { t } = useTranslation();
//   const { signUp, isLoading } = useManageUsers();
//   const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
//   console.log(isRegistrationComplete);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const registrationSuccessful = await signUp({ formData });
//       console.log(registrationSuccessful);
//       if (registrationSuccessful) {
//         setIsRegistrationComplete(true);
//       }
//     } catch (error) {
//       console.error("Error during sign-up:", error);
//     }
//   };

//   useEffect(() => {
//     setIsRegistrationComplete(null);
//     scroll.scrollToTop({
//       duration: 1000,
//       smooth: "easeInOutQuad",
//     });
//   }, []);

//   return (
//     <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
//       {!isRegistrationComplete ? (
//         <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//           <div className="lg:w-1/2 sm:p-12">
//             <div className="mt-12 flex flex-col items-center">
//               <h1 className="text-2xl xl:text-3xl font-extrabold">
//                 {t("signUp")}
//               </h1>

//               {isLoading && (
//                 <div className="flex items-center justify-center mx-auto py-10">
//                   <Loader />
//                 </div>
//               )}

//               {!isLoading && (
//                 <div className="w-full flex-1 mt-8">
//                   <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-col items-center"
//                   >
{
  /* <div className="m-5 flex flex-col items-center text-center justify-center text-gray-600 transform translate-y-1/2 lg:max-w-xl">
                      <p>{t("SignUpWithEmail")}</p>
                    </div> */
}
//                     <>
//                       <div>
//                         <input
//                           className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                           type="text"
//                           placeholder={t("name")}
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           required
//                         />
//                       </div>
//                       <div className="mb-5">
//                         <input
//                           className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                           type="text"
//                           placeholder={t("surname")}
//                           value={formData.lastName}
//                           // onChange={handleLastNameChange}
//                           onChange={handleInputChange}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <input
//                           className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                           type="email"
//                           placeholder={t("email")}
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <input
//                           className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                           type="password"
//                           placeholder={t("password")}
//                           value={formData.password}
//                           // onChange={handlePasswordChange}
//                           onChange={handleInputChange}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <input
//                           className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                           type="password"
//                           placeholder={t("confirm_password")}
//                           value={formData.confirmPassword}
//                           // onChange={handleConfirmPasswordChange}
//                           onChange={handleInputChange}
//                           required
//                         />
//                       </div>
//                     </>
//                     <button
//                       className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
//                       // onClick={handleSignUp}
//                       // onClick={handleSubmit}
//                       disabled={isLoading}
//                       type="submit"
//                     >
//                       <span>{t("signUp")}</span>
//                     </button>
//                     <p className="m-5 text-xs text-gray-600 text-center">
//                       {t("accept_terms")} &nbsp;
//                       <a
//                         href=""
//                         className="border-b border-gray-500 border-dotted"
//                       >
//                         {t("terms_of_service")}
//                       </a>
//                       &nbsp; {t("and")} &nbsp;
//                       <a
//                         href=""
//                         className="border-b border-gray-500 border-dotted"
//                       >
//                         {t("privacy_policy")}
//                       </a>
//                     </p>
//                   </form>
//                 </div>
//               )}

//               <div className="sm:w-96 flex flex-col items-center">
//                 <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                   <Link to={"/login"}>
//                     <span>
//                       {t("alreadyHaveAccount")}{" "}
//                       <p className="text-red-600">{t("click_here")}</p>
//                     </span>
//                   </Link>
//                 </button>

//                 <button className="m-5 w-full max-w-xs font-bold shadow-xl rounded-lg py-3 bg-transparent border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-xl focus:shadow-outline">
//                   <Link to={"/registrationadmin"}>
//                     <span>
//                       {t("admin_or_structure")}{" "}
//                       <p className="text-red-600">{t("collaborate")}</p>
//                     </span>
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center md:h-screen">
//           <p className="text-[#168aad] text-3xl leading-9 font-semibold mb-2 md:mb-5">
//             Registration completed successfully!
//           </p>
//           <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-3">
//             <IoIosCheckmarkCircle className="w-[100px] h-[100px] text-green-400" />
//             <p className="text-gray-500 text-xl font-semibold">
//               Please check your email for verification.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Registration;
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import { useManageUsers } from "../hooks/users/useManageUsers";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Registration = () => {
  const { t } = useTranslation();
  const { signUp, isLoading } = useManageUsers();
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
                  className="w-full flex flex-col items-center mt-8"
                >
                  <div className="m-5 flex flex-col items-center text-center justify-center text-gray-600 transform translate-y-1/2 lg:max-w-xl">
                    <p>{t("SignUpWithEmail")}</p>
                  </div>
                  {[
                    { name: "firstName", type: "text", placeholder: t("name") },
                    {
                      name: "lastName",
                      type: "text",
                      placeholder: t("surname"),
                    },
                    { name: "email", type: "email", placeholder: t("email") },
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

              <div className="sm:w-96 flex flex-col items-center mt-10">
                <Link
                  to="/login"
                  className="w-full max-w-xs font-bold shadow-xl rounded-lg py-3 text-black border border-gray-300 hover:border-red-800 hover:shadow-md hover:text-red-800 transition-all duration-300"
                >
                  {t("alreadyHaveAccount")}{" "}
                  <span className="text-red-600">{t("click_here")}</span>
                </Link>

                <Link
                  to="/registrationadmin"
                  className="w-full max-w-xs font-bold shadow-xl rounded-lg py-3 mt-5 text-black border border-gray-300 hover:border-red-800 hover:shadow-md hover:text-red-800 transition-all duration-300"
                >
                  {t("admin_or_structure")}{" "}
                  <span className="text-red-600">{t("collaborate")}</span>
                </Link>
              </div>
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

export default Registration;
