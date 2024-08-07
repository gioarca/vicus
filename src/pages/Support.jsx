import React from "react";
import { useTranslation } from "react-i18next";

function Support() {
  const { t } = useTranslation();

  return (
    <div className="my-56 flex flex-col text-center justify-center">
      <p className="text-2xl font-bold m-4">
        {t("thankYou")}
        <span role="img" aria-label="hi" className="h-5">
          🙏
        </span>
      </p>
      <p>{t("requestReceived")}</p>
      <p>{t("requirementsMet")}</p>
      <p>{t("addedSoon")}</p>
      <p></p>
    </div>
  );
}

export default Support;
