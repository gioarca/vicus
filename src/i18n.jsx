import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";

// Fallback language
const defaultLanguage = "en";

// Get the stored language or default to 'en'
const storedLanguage = localStorage.getItem("language") || defaultLanguage;

const resources = {
  en: { translation: translationEN },
  it: { translation: translationIT },
};

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage, // Set the initial language from localStorage
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
