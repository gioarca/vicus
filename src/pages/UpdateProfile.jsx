// import React, { useState } from "react";
// import { useAuthContext } from "../hooks/auth/useAuthContext";
// import Loader from "../components/Loader";
// import { useManageUsers } from "../hooks/users/useManageUsers";
// import { useTranslation } from "react-i18next";

// const UpdateProfile = ({ model }) => {
//   const { updateUser, isLoading } = useManageUsers();
//   const { user } = useAuthContext();
//   const { t } = useTranslation();
//   console.log("user:", user);

//   const [imageError, setImageError] = useState("");
//   const [isFormModified, setIsFormModified] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: user.firstName,
//     lastName: user.lastName,
//     email: user.email,
//     password: "",
//     confirmPassword: "",
//     profilePicture: user.profilePicture,
//     phoneNumber: user.phoneNumber,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setIsFormModified(true);
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       if (file.size > 10 * 1024 * 1024) {
//         setImageError("File size must be less than 10MB.");
//         return;
//       }

//       setIsFormModified(true);
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFormData({
//           ...formData,
//           profilePicture: reader.result,
//         });
//         setImageError("");
//       };
//       reader.onerror = (err) => {
//         console.log("Error: ", err);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password === "") {
//       delete formData.password;
//       delete formData.confirmPassword;
//     }

//     try {
//       await updateUser({ formData, model });
//       setFormData({
//         ...formData,
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.error("Update User Error:", error);
//     }
//   };

//   return (
//     <div className="px-2 md:px-10 2xl:px-20">
//       {isLoading && (
//         <div className="flex items-center justify-center mx-auto py-10">
//           <Loader />
//         </div>
//       )}
//       {!isLoading && (
//         <>
//           <div className="font-semibold flex items-center mx-auto justify-center mt-3">
//             <h3 className="text-4xl leading-[30px] text-black text-center px-3 mb-3">
//               {t("update_profile")}
//             </h3>
//           </div>
//           <form onSubmit={handleSubmit} className="">
//             <div className="flex justify-center items-center gap-4 mx-auto pt-4">
//               <div className="flex items-center justify-center">
//                 <figure className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-2 border-solid border-secondary flex items-center justify-center">
//                   <img
//                     src={formData.profilePicture}
//                     alt=""
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </figure>
//               </div>
//               <div className="flex items-center justify-center">
//                 <label
//                   htmlFor="dropzone-file"
//                   className="flex flex-col items-center justify-center border-2 border-secondary border-dashed rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100"
//                 >
//                   <div className="flex flex-col items-center justify-center py-5 px-2">
//                     <p className="mb-2 text-sm text-gray-600 text-center">
//                       <span className="font-semibold">Click to upload</span> or
//                       drag and drop
//                     </p>
//                     <p className="text-xs text-gray-600">
//                       PNG, JPEG or JPG (max. 10MB)
//                     </p>
//                   </div>
//                   <input
//                     id="dropzone-file"
//                     type="file"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     accept=".jpeg, .png, .jpg"
//                   />
//                 </label>
//                 {imageError && (
//                   <p className="text-red-500 text-sm ml-2">{imageError}</p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 my-8 gap-8 items-center justify-center mx-auto px-10">
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("name")}
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("surname")}
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   Email
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("phone")}
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>

//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("password")}
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("confirm_password")}
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//             </div>

//             <div className="flex justify-center py-5">
//               <button
//                 type="submit"
//                 disabled={isLoading || !isFormModified}
//                 className={`px-8 py-4 leading-5 transition-colors duration-200 transform rounded-full text-xl font-semibold ${
//                   !isFormModified
//                     ? "bg-[#b6a7a7] cursor-not-allowed"
//                     : "bg-red-800 hover:bg-[#12657f] text-white"
//                 }`}
//               >
//                 UPDATE
//               </button>
//             </div>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default UpdateProfile;

import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/auth/useAuthContext";
import Loader from "../components/Loader";
import { useManageUsers } from "../hooks/users/useManageUsers";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const UpdateProfile = ({ model }) => {
  const { updateUser, getUserProfile, isLoading } = useManageUsers();
  const { user } = useAuthContext();
  const { t } = useTranslation();

  const [imageError, setImageError] = useState("");
  const [isFormModified, setIsFormModified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
    phoneNumber: "",
  });

  // Carica i dati dell'utente quando il componente viene montato
  useEffect(() => {
    const loadUserData = async () => {
      if (user) {
        // Se abbiamo già dati utente, li usiamo per inizializzare il form
        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          password: "",
          confirmPassword: "",
          profilePicture: user.profilePicture || "",
          phoneNumber: user.phoneNumber || "",
        });

        // Opzionale: Recupera dati freschi dal database
        try {
          const freshUserData = await getUserProfile();
          if (freshUserData) {
            setFormData((prev) => ({
              ...prev,
              firstName: freshUserData.firstName || "",
              lastName: freshUserData.lastName || "",
              email: freshUserData.email || "",
              profilePicture: freshUserData.profilePicture || "",
              phoneNumber: freshUserData.phoneNumber || "",
              password: "",
              confirmPassword: "",
            }));
          }
        } catch (error) {
          console.error("Errore nel caricamento dei dati utente:", error);
        }
      }
    };

    loadUserData();
  }, [user, getUserProfile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsFormModified(true);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setImageError("La dimensione del file deve essere inferiore a 10MB.");
        return;
      }

      setIsFormModified(true);
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          profilePicture: reader.result,
        });
        setImageError("");
      };
      reader.onerror = (err) => {
        console.log("Errore: ", err);
        setImageError("Errore nella lettura del file.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione
    if (formData.password && formData.password !== formData.confirmPassword) {
      toast.error("Le password non corrispondono.");
      return;
    }

    // Crea una copia dei dati da inviare
    const dataToSubmit = { ...formData };

    try {
      // Invia la richiesta di aggiornamento
      const result = await updateUser({ formData: dataToSubmit });

      if (result) {
        // Reset solo i campi password dopo un aggiornamento riuscito
        setFormData((prev) => ({
          ...prev,
          password: "",
          confirmPassword: "",
        }));
        setIsFormModified(false);
      }
    } catch (error) {
      console.error("Errore nell'aggiornamento del profilo:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h3 className="text-2xl mb-4">Sessione non valida</h3>
          <p>Effettua il login per accedere a questa pagina.</p>
          {/* Pulsante per tornare al login */}
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 md:px-10 2xl:px-20">
      {isLoading && (
        <div className="flex items-center justify-center mx-auto py-10">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="font-semibold flex items-center mx-auto justify-center mt-3">
            <h3 className="text-4xl leading-[30px] text-black text-center px-3 mb-3">
              {t("update_profile")}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex justify-center items-center gap-4 mx-auto pt-4">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-2 border-solid border-secondary flex items-center justify-center">
                  <img
                    src={formData.profilePicture || "/default-avatar.png"}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                </figure>
              </div>
              <div className="flex items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center border-2 border-secondary border-dashed rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center py-5 px-2">
                    <p className="mb-2 text-sm text-gray-600 text-center">
                      <span className="font-semibold">Clicca per caricare</span>{" "}
                      o trascina e rilascia
                    </p>
                    <p className="text-xs text-gray-600">
                      PNG, JPEG o JPG (max. 10MB)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".jpeg, .png, .jpg"
                  />
                </label>
                {imageError && (
                  <p className="text-red-500 text-sm ml-2">{imageError}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 my-8 gap-8 items-center justify-center mx-auto px-10">
              <div>
                <label className="text-xl leading-[20px] font-bold">
                  {t("name")}
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                  />
                </label>
              </div>
              <div>
                <label className="text-xl leading-[20px] font-bold">
                  {t("surname")}
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                  />
                </label>
              </div>
              <div>
                <label className="text-xl leading-[20px] font-bold">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                  />
                </label>
              </div>
              <div>
                <label className="text-xl leading-[20px] font-bold">
                  {t("phone")}
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                  />
                </label>
              </div>

              <div>
                <label className="text-xl leading-[20px] font-bold">
                  {t("password")}
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                  />
                </label>
              </div>
              <div>
                <label className="text-xl leading-[20px] font-bold">
                  {t("confirm_password")}
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-center py-5">
              <button
                type="submit"
                disabled={isLoading || !isFormModified}
                className={`px-8 py-4 leading-5 transition-colors duration-200 transform rounded-full text-xl font-semibold ${
                  !isFormModified
                    ? "bg-[#b6a7a7] cursor-not-allowed"
                    : "bg-red-800 hover:bg-[#12657f] text-white"
                }`}
              >
                {isLoading ? "AGGIORNAMENTO..." : "AGGIORNA"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateProfile;
