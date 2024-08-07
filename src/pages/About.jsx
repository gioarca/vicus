import React from "react";
import SignIn from "../components/SignIn";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-xl m-14">{t("welcome")}</h1>
      <div className="mt-20 mb-10 flex flex-col text-center items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1541855127-2e944b899d9a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="sm:h-auto"
          alt="Borghi"
        />
      </div>
      <div className="m-5">
        <p>
          <code>{t("borghi_initiative")}</code>
        </p>
        <p>{t("promote_revitalization")}</p>
        <p>{t("dedicated_to_change")}</p>
        <p className="text-2xl font-bold m-3">{t("entrepreneurs_creators")}</p>
        <p>{t("authentic_lifestyle")}</p>
        <p>{t("remember_roots")}</p>
        <p className="text-l font-bold m-3">{t("slow_and_authentic")}</p>
        <p>{t("find_villages")}</p>
        <p>{t("shared_vision")}</p>
        <br />
        <p>{t("curious_about_project")}</p>
        <p>{t("click_to_learn_more")}</p>
        <SignIn />
      </div>
    </div>
  );
}

export default About;
