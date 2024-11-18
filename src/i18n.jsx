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

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// // Function to load translations from the backend
// const loadTranslations = async (lang) => {
//   try {
//     const response = await fetch(
//       `http://localhost:3000/api/v1/translations/${lang}`
//     );
//     if (!response.ok) throw new Error("Failed to load translations");
//     const translations = await response.json();
//     return translations;
//   } catch (error) {
//     console.error("Error loading translations:", error);
//     return null;
//   }
// };

// const defaultLanguage = "it";
// const storedLanguage = localStorage.getItem("language") || defaultLanguage;

// // Initialize i18next
// i18n.use(initReactI18next).init({
//   lng: storedLanguage,
//   fallbackLng: defaultLanguage,
//   interpolation: { escapeValue: false },
//   resources: {}, // Start with empty resources
// });

// // Function to dynamically change the language
// export const changeLanguage = async (lang) => {
//   const translations = await loadTranslations(lang);
//   if (translations) {
//     i18n.addResourceBundle(lang, "translation", translations, true, true);
//     i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang);
//   }
// };

// export default i18n;
