import React from "react";
import { useTranslation } from "react-i18next";

function SignIn() {
  const { t } = useTranslation();
  return (
    <div className="flex text-center justify-center">
      <a href={"/registration"}>
        <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
          {t("signUp")}
        </button>
      </a>
    </div>
  );
}

export default SignIn;
