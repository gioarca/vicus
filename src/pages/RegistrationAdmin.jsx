import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
// import { useManageUsers } from "../hooks/users/useManageUsers";
import { useManageAdmin } from "../hooks/admins/useManageAdmins";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";

const RegistrationAdmin = () => {
  const { t } = useTranslation();
  const { createAdmin, isLoading } = useManageAdmin();
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    taxId: "",
    phoneNumber: "",
    specialization: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const registrationSuccessful = await signUp({ formData });
  //       if (registrationSuccessful) {
  //         setIsRegistrationComplete(true);
  //       }
  //     } catch (error) {
  //       console.error("Error during sign-up:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
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

  //               {isLoading ? (
  //                 <div className="flex items-center justify-center mx-auto py-10">
  //                   <Loader />
  //                 </div>
  //               ) : (
  //                 <form
  //                   onSubmit={handleSubmit}
  //                   className="w-full flex flex-col items-center"
  //                 >
  //                   <div className="mb-12 lg:m-12 flex flex-col items-center text-center justify-center text-gray-600 transform translate-y-1/2 lg:max-w-xl">
  //                     <p>{t("SignUpWithEmail")}</p>
  //                     <p className="font-bold">
  //                       La password dev'essere composta da almeno 6 caratteri,
  //                       deve contenere inoltre almeno una lettera maiuscola, un
  //                       numero e un carattere speciale (esempio: Ciao123!)
  //                     </p>
  //                   </div>
  //                   {[
  //                     { name: "firstName", type: "text", placeholder: t("name") },
  //                     {
  //                       name: "lastName",
  //                       type: "text",
  //                       placeholder: t("surname"),
  //                     },
  //                     { name: "email", type: "email", placeholder: t("email") },
  //                     { name: "Tax ID", type: "number", placeholder: t("taxId") },
  //                     {
  //                       name: "password",
  //                       type: "password",
  //                       placeholder: t("password"),
  //                     },
  //                     {
  //                       name: "confirmPassword",
  //                       type: "password",
  //                       placeholder: t("confirm_password"),
  //                     },
  //                   ].map((input) => (
  //                     <input
  //                       key={input.name}
  //                       name={input.name}
  //                       type={input.type}
  //                       placeholder={input.placeholder}
  //                       value={formData[input.name]}
  //                       onChange={handleInputChange}
  //                       className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
  //                       required
  //                     />
  //                   ))}

  //                   <button
  //                     type="submit"
  //                     className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 mt-5"
  //                     disabled={isLoading}
  //                   >
  //                     {t("signUp")}
  //                   </button>
  //                   <p className="m-5 text-xs text-gray-600 text-center">
  //                     {t("accept_terms")} &nbsp;
  //                     <a
  //                       href="#"
  //                       className="border-b border-gray-500 border-dotted"
  //                     >
  //                       {t("terms_of_service")}
  //                     </a>
  //                     &nbsp; {t("and")} &nbsp;
  //                     <a
  //                       href="#"
  //                       className="border-b border-gray-500 border-dotted"
  //                     >
  //                       {t("privacy_policy")}
  //                     </a>
  //                   </p>
  //                 </form>
  //               )}

  //               <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
  //                 <Link to="/login">
  //                   <span>
  //                     {t("alreadyHaveAccount")}{" "}
  //                     <span className="text-red-600">{t("click_here")}</span>
  //                   </span>
  //                 </Link>
  //               </button>

  //               <button className="w-full mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
  //                 <Link to="/registration">
  //                   <span>
  //                     {t("normal_user")}{" "}
  //                     <span className="text-red-600">{t("click_here")}</span>
  //                   </span>
  //                 </Link>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="text-center md:h-screen">
  //           <p className="text-[#168aad] text-3xl leading-9 font-semibold mb-5">
  //             Registrazione avvenuta con successo!
  //           </p>
  //           <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-3">
  //             <IoIosCheckmarkCircle className="w-[100px] h-[100px] text-green-400" />
  //             <p className="text-gray-500 text-xl font-semibold">
  //               Verifica la tua email per completare la registrazione.
  //             </p>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // export default RegistrationAdmin;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registrationSuccessful = await createAdmin({ formData });
      if (registrationSuccessful) {
        setIsRegistrationComplete(true);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Step content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            className="space-y-6 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-medium text-gray-700">
              {t("personal_info")}
            </h2>
            <div className="space-y-4">
              <InputField
                name="firstName"
                type="text"
                placeholder={t("name")}
                value={formData.firstName}
                onChange={handleInputChange}
                icon="👤"
              />
              <InputField
                name="lastName"
                type="text"
                placeholder={t("surname")}
                value={formData.lastName}
                onChange={handleInputChange}
                icon="👤"
              />
              <InputField
                name="taxId"
                type="text"
                placeholder={t("Tax Id")}
                value={formData.taxId}
                onChange={handleInputChange}
                icon="👤"
              />
              <InputField
                name="phoneNumber"
                type="text"
                placeholder={t("Numero di telefono")}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                icon="📞"
              />
              <InputField
                name="specialization"
                type="text"
                placeholder={t("Campo di specializzazione")}
                value={formData.specialization}
                onChange={handleInputChange}
                icon="🏨"
              />
              <InputField
                name="city"
                type="text"
                placeholder={t("Città di appartenenza")}
                value={formData.city}
                onChange={handleInputChange}
                icon="👤"
              />
            </div>
            <div className="pt-4">
              <button
                onClick={nextStep}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
              >
                {t("continue")} →
              </button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            className="space-y-6 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-medium text-gray-700">
              {t("account_details")}
            </h2>
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
              <InputField
                name="confirmPassword"
                type="password"
                placeholder={t("confirm_password")}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                icon="🔒"
              />
              <p className="text-xs text-gray-500 italic">
                La password dev'essere composta da almeno 6 caratteri, almeno
                una lettera maiuscola, un numero e un carattere speciale
                (esempio: Ciao123!)
              </p>
            </div>
            <div className="flex space-x-4 pt-4">
              <button
                onClick={prevStep}
                className="w-1/3 py-3 px-6 rounded-full bg-white border border-gray-300 text-gray-700 font-medium transition-all duration-300 ease-in-out hover:bg-gray-50 focus:outline-none"
              >
                ← {t("back")}
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
                onClick={handleSubmit}
              >
                {t("complete_registration")}
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {!isRegistrationComplete ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden"
        >
          <div className="p-8">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-light text-gray-800 mb-1">
                <span className="text-red-800 font-medium">{t("signUp")}</span>
              </h1>
              <p className="text-gray-500 text-sm mb-8">
                {t("SignUpWithEmail")}
              </p>

              {/* Step indicator */}
              <div className="w-full mb-8">
                <div className="flex justify-between relative">
                  <StepIndicator
                    step={1}
                    currentStep={currentStep}
                    label={t("personal_info")}
                  />
                  <StepIndicator
                    step={2}
                    currentStep={currentStep}
                    label={t("account_details")}
                  />

                  {/* Progress bar */}
                  <div className="absolute top-5 h-1 bg-gray-200 left-0 right-0 z-0">
                    <motion.div
                      className="h-full bg-red-800"
                      initial={{ width: "0%" }}
                      animate={{ width: currentStep === 1 ? "50%" : "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center py-10">
                  <Loader />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  {renderStepContent()}
                </form>
              )}

              <div className="mt-10 text-center space-y-4 w-full">
                <p className="text-xs text-gray-500">
                  {t("accept_terms")}{" "}
                  <a href="#" className="text-red-800 hover:underline">
                    {t("terms_of_service")}
                  </a>{" "}
                  {t("and")}{" "}
                  <a href="#" className="text-red-800 hover:underline">
                    {t("privacy_policy")}
                  </a>
                </p>

                <div className="border-t border-gray-100 pt-6 flex flex-col space-y-4">
                  <Link
                    to="/login"
                    className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                  >
                    {t("alreadyHaveAccount")}{" "}
                    <span className="font-medium text-red-800">
                      {t("click_here")}
                    </span>
                  </Link>

                  <Link
                    to="/registration"
                    className="text-sm text-gray-600 hover:text-red-800 transition-colors"
                  >
                    {t("normal_user")}{" "}
                    <span className="font-medium text-red-800">
                      {t("click_here")}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <IoIosCheckmarkCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>

          <h2 className="text-3xl font-light text-gray-800 mb-6">
            <span className="font-medium">Registrazione completata!</span>
          </h2>

          <p className="text-gray-600 mb-8">
            Verifica la tua email per completare la registrazione.
          </p>

          <Link to="/login">
            <button className="py-3 px-8 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none">
              Vai al login
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

// Step indicator component
const StepIndicator = ({ step, currentStep, label }) => {
  const isActive = step <= currentStep;

  return (
    <div className="flex flex-col items-center relative z-10">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isActive ? "bg-red-800 text-white" : "bg-gray-200 text-gray-500"
        } font-medium transition-all duration-300`}
      >
        {step}
      </div>
      <span
        className={`text-xs mt-2 ${
          isActive ? "text-red-800" : "text-gray-500"
        }`}
      >
        {label}
      </span>
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

export default RegistrationAdmin;
