import { CreditCardIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

function Prenota() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col my-16 justify-center items-center text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href={"/workinprogress"}>
        <CreditCardIcon className="justify-center items-center text-center h-16 m-auto" />
        <p className="flex flex-col justify-center items-center text-center">
          {t("booking")}
        </p>
      </a>
    </div>
  );
}

export default Prenota;
