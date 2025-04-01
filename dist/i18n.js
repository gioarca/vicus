"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _reactI18next = require("react-i18next");
var _translation = _interopRequireDefault(require("./locales/en/translation.json"));
var _translationReal = _interopRequireDefault(require("./locales/it/translationReal.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import translationIT from "./locales/it/translation.json";

// Fallback language
var defaultLanguage = "it";

// Get the stored language or default to 'it'
var storedLanguage = localStorage.getItem("language") || defaultLanguage;
var resources = {
  it: {
    translation: _translationReal["default"]
  },
  en: {
    translation: _translation["default"]
  }
};
_i18next["default"].use(_reactI18next.initReactI18next).init({
  resources: resources,
  lng: storedLanguage,
  // Set the initial language from localStorage
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false
  }
});
var _default = exports["default"] = _i18next["default"]; // import i18n from "i18next";
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