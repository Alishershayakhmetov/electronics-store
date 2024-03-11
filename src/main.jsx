import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationKZ from "./locales/kz/translation.json";

const check = localStorage.getItem("preferredLanguage");

if (check === null) {
  const preferredLanguage = navigator.language;

  if (typeof preferredLanguage === "string") {
    localStorage.setItem("preferredLanguage", preferredLanguage.slice(0, 2));
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
      kz: {
        translation: translationKZ,
      },
    },
    lng: localStorage.getItem("preferredLanguage"), // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
