// import React, { useState } from "react";
// // import { checkVAT } from "viesapi-client";
// import { useTranslation } from "react-i18next";
// import { Link, useNavigate, Navigate } from "react-router-dom";
// import { auth } from "../utils/firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// // import { FcGoogle } from "react-icons/fc";

// function VatVerification({ user }) {
//   const [vatNumber, setVatNumber] = useState("");
//   const [countryCode, setCountryCode] = useState("IT"); // Imposta il codice del paese, ad esempio 'IT' per Italia
//   const [isValid, setIsValid] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { t } = useTranslation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const emailError = document.querySelector(".email.error");
//   const passwordError = document.querySelector(".password.error");
//   const navigate = useNavigate();
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     emailError.textContent = "";
//     passwordError.textContent = "";

//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       setError(null);
//       const res = await fetch(
//         "http://localhost:3000/api/v1/auth/adminregistration",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await res.json();
//       console.log("Registrazione avvenuta con successo:", data);

//       if (data.errors) {
//         emailError.textContent = data.errors.email;
//         passwordError.textContent = data.errors.password;
//         vatError.textContent = data.errors.vat;
//       }

//       if (data.user) {
//         location.assign("/dashboardadmin");
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error("Errore durante la registrazione:", error.message);
//     }
//   };

//   // const googleProvider = new GoogleAuthProvider();

//   // const googleLogin = async () => {
//   //   try {
//   //     const result = await signInWithPopup(auth, googleProvider);
//   //     const user = result.user;
//   //     console.log("Google Login Success:", user);

//   //     const response = await fetch("http://localhost:3000/google-login", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ email: user.email, uid: user.uid }),
//   //     });

//   //     const data = await response.json();
//   //     if (!response.ok) {
//   //       throw new Error(data.message || "Google Login failed");
//   //     }
//   //     navigate("/dashboard");
//   //   } catch (error) {
//   //     setError(error.message);
//   //     console.error("Errore durante il login con Google:", error.message);
//   //   }
//   // };

//   // if (user) {
//   //   navigate("/dashboard");
//   // }

//   // const verifyVat = async () => {
//   //   setLoading(true);
//   //   setError(null);

//   //   try {
//   //     const response = await checkVAT(countryCode, vatNumber);
//   //     setIsValid(response.valid); // La libreria VIES ritorna un campo 'valid'
//   //   } catch (err) {
//   //     setError("Errore durante la verifica della partita IVA");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   if (user) {
//     return <Navigate to="/dashboardadmin" />;
//   }

//   return (
//     <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
//       <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//         <div className="lg:w-1/2 sm:p-12">
//           <div className="mt-12 flex flex-col items-center">
//             <h1 className="text-2xl xl:text-3xl font-extrabold">
//               {t("signUp")}
//             </h1>
//             <div className="w-full flex-1 mt-8">
//               <div className="flex flex-col items-center">
//                 <div className="lg:max-w-xl flex flex-col items-center">
//                   <div className="leading px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
//                     {/* <p>{t("orSignUpWithEmail")}</p> */}
//                     <p>Inserisci i dati nei campi qui sotto</p>
//                   </div>
//                 </div>

//                 {/* <button
//                   onClick={googleLogin}
//                   className="w-full max-w-xs font-bold shadow-sm rounded-full py-3 bg-transparent border-2 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
//                 >
//                   <FcGoogle className="bg-white h-10 w-10 rounded-full inline-block" />
//                   <span className="ml-4">{t("continue_with_google")}</span>
//                 </button> */}

//                 <form
//                   className="sm:w-96 flex flex-col items-center"
//                   onSubmit={handleSignUp}
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
//                   <div>
//                     {/* <div>
//                       <input
//                         type="text"
//                         value={countryCode}
//                         onChange={(e) =>
//                           setCountryCode(e.target.value.toUpperCase())
//                         }
//                         maxLength={2}
//                         placeholder="IT"
//                         className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                       />
//                     </div> */}
//                     <div>
//                       <input
//                         type="text"
//                         value={vatNumber}
//                         onChange={(e) => setVatNumber(e.target.value)}
//                         placeholder="Inserisci il numero della partita IVA preceduto dal nome della regione (IT)"
//                         className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                       />
//                     </div>
//                     {/* <button onClick={verifyVat} disabled={loading}>
//                       {loading ? "Verificando..." : "Verifica"}
//                     </button> */}

//                     {isValid !== null && (
//                       <div>
//                         {isValid ? (
//                           <p>La partita IVA è valida!</p>
//                         ) : (
//                           <p>La partita IVA non è valida.</p>
//                         )}
//                       </div>
//                     )}

//                     {error && <p>{error}</p>}
//                   </div>
//                   <button
//                     className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
//                     type="submit"
//                     onClick={verifyVat}
//                     disabled={loading}
//                   >
//                     {loading ? "Verificando..." : "Verifica"}
//                     {/* <span>{t("signUp")}</span> */}
//                   </button>
//                 </form>

//                 <p className="m-5 text-xs text-gray-600 text-center">
//                   {t("accept_terms")} &nbsp;
//                   <a href="" className="border-b border-gray-500 border-dotted">
//                     {t("terms_of_service")}
//                   </a>
//                   &nbsp; {t("and")} &nbsp;
//                   <a href="" className="border-b border-gray-500 border-dotted">
//                     {t("privacy_policy")}
//                   </a>
//                 </p>

//                 {error && (
//                   <p className="text-red-600 mt-2">
//                     {t("error_occurred")}: {error}
//                   </p>
//                 )}

//                 <div className="sm:w-96 flex flex-col items-center">
//                   <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                     <Link to={"/login"}>
//                       <span>
//                         {t("alreadyHaveAccount")}{" "}
//                         <p className="text-red-600">{t("click_here")}</p>
//                       </span>
//                     </Link>
//                   </button>

//                   <button className="m-5 w-full max-w-xs font-bold shadow-xl rounded-lg py-3 bg-transparent border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-xl focus:shadow-outline">
//                     <Link to={"/registration"}>
//                       <span>
//                         {t("admin_or_structure")}{" "}
//                         <p className="text-red-600">{t("collaborate")}</p>
//                       </span>
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VatVerification;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, Navigate } from "react-router-dom";

function RegistrationAdmin({ user }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
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

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSignUp = async () => {
    // event.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/v1/auth/adminsignup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      const data = await res.json();
      console.log("Registrazione avvenuta con successo:", data);

      if (data.errors) {
        emailError.textContent = data.errors.email;
        passwordError.textContent = data.errors.password;
      } else if (data.user) {
        navigate("/dashboardadmin");
      }
    } catch (error) {
      setError(error.message);
      console.error("Errore durante la registrazione:", error.message);
    }
  };

  if (user) {
    return <Navigate to="/dashboardadmin" />;
  }

  return (
    <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-5 bg-white shadow rounded-lg flex flex-1 justify-center">
        <div className="lg:w-1/2 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold">{t("signUp")}</h1>
            <div className="sm:w-96 mt-8 flex flex-col">
              <input
                name="email"
                type="email"
                placeholder={t("email")}
                value={email}
                onChange={handleEmailChange}
                className="input-field"
              />
              <input
                name="password"
                type="password"
                placeholder={t("password")}
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
              />
              <input
                name="role"
                type="text"
                placeholder={t("ruolo")}
                value={role}
                onChange={handleRoleChange}
                className="input-field"
              />
              {status.error && (
                <p className="text-red-600 mt-2">{status.error}</p>
              )}
              <button
                disabled={status.loading}
                onClick={handleSignUp}
                className={`submit-button ${
                  status.loading ? "opacity-50" : ""
                }`}
              >
                {status.loading ? t("loading") : t("signUp")}
              </button>
            </div>
            <p className="text-xs text-gray-600 text-center mt-5">
              {t("accept_terms")} &nbsp;
              <a href="#" className="text-blue-500">
                {t("terms_of_service")}
              </a>
              &nbsp; {t("and")} &nbsp;
              <a href="#" className="text-blue-500">
                {t("privacy_policy")}
              </a>
            </p>
            <div className="mt-5">
              <Link to="/login" className="link-button">
                {t("alreadyHaveAccount")}
              </Link>
              <Link to="/registration" className="link-button">
                {t("admin_or_structure")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationAdmin;
