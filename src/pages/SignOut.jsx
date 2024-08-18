import React from "react";
import { useTranslation } from "react-i18next";

function SingOut() {
  const { t } = useTranslation();
  return (
    <div className="my-52 text-center sm:my-64">
      <h1 className="font-bold text-2xl">
        Arrivederci!{" "}
        <span role="img" aria-label="hi" className="h-5">
          👋
        </span>
      </h1>
      <p>{t(comeBack)}</p>
    </div>
  );
}

export default SingOut;
