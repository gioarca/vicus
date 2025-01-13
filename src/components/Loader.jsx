import { CogIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useTranslation } from "react-i18next";

function Loader() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center text-2xl my-52 md:m-64">
      <CogIcon className="items-center transition duration-700 animate-spin h-10 w-10" />
      <p className="flex-col justify-center items-center text-center">
        {t("loader")}
      </p>
    </div>
  );
}

export default Loader;
