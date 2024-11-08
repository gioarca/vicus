// import React from "react";
// import BorgoForm from "../components/BorgoForm";
// import { useTranslation } from "react-i18next";

// function AddBorgo() {
//   const { t } = useTranslation();

//   return (
//     <div className="flex flex-col text-center">
//       <h1 className="text-center font-bold text-2xl m-14">
//         {t("thank_you_for_support")}
//       </h1>
//       <div className="flex text-center items-center justify-center mt-5 mb-5 sm:mt-20">
//         <img
//           src="https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Borgo"
//         />
//       </div>
//       <div className="m-5">
//         <p className="font-bold">{t("improve_southern_italy")}</p>
//         <p className="text-l text-center m-10">
//           {t("borgo_criteria")}
//           <ul className="flex flex-col text-left justify-center list-disc sm:my-16 sm:mx-48">
//             {/* <li>{t("quality_of_life")}</li> */}
//             <li>{t("public_services")}</li>
//             <li>{t("borgo_beauty")}</li>
//             <li>{t("accessibility")}</li>
//             <li>{t("internet_speed")}</li>
//             {/* <li>{t("proximity_to_sea")}</li> */}
//             {/* <li>le esperienze che si possono fare nelle vicinanze;</li> */}
//             <li>{t("coworking_space")}</li>
//           </ul>
//         </p>
//         <div className="flex flex-col m-5 text-center font-light">
//           <p>{t("add_borgo")}</p>
//           <div>
//             <BorgoForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddBorgo;

import React from "react";
import BorgoForm from "../components/BorgoForm";
import { useTranslation } from "react-i18next";

function AddBorgo() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-center font-bold text-2xl m-14">
        {t("thank_you_for_support")}
      </h1>
      <div className="flex text-center items-center justify-center mt-5 mb-5 sm:mt-20">
        <img
          src="https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Borgo"
        />
      </div>
      <div className="m-5">
        <p className="font-bold">{t("improve_southern_italy")}</p>
        <p className="text-l text-center m-10">
          {t("borgo_criteria")}
          <ul className="flex flex-col text-left justify-center list-disc sm:my-16 sm:mx-48">
            <li>{t("public_services")}</li>
            <li>{t("borgo_beauty")}</li>
            <li>{t("accessibility")}</li>
            <li>{t("internet_speed")}</li>
            <li>{t("coworking_space")}</li>
          </ul>
        </p>
        <div className="flex flex-col m-5 text-center font-light">
          <p>{t("add_borgo")}</p>
          <div>
            <BorgoForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBorgo;
