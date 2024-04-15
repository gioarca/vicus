import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "it",
    returnObjects: true,
    resources: {
      it: {
        translation: {
          greeting:
            "Tutto ciò di cui avevi bisogno per lavorare e restare al Sud Italia",
        },
      },
      en: {
        translation: {
          greeting: "Everything you needed to work and stay in Southern Italy",
        },
      },
    },
  });
