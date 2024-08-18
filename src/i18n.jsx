import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";
import translationDE from "./locales/de/translation.json";

// Fallback language
const defaultLanguage = "it";

// Get the stored language or default to 'it'
const storedLanguage = localStorage.getItem("language") || defaultLanguage;

const resources = {
  it: { translation: translationIT },
  en: { translation: translationEN },
  de: { translation: translationDE },
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
