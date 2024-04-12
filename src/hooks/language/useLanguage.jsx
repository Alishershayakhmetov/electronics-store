import React, { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

export default function useLanguage(options = {}) {
  const { setLanguage = false } = options;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("preferredLanguage", lng);
  };
  return setLanguage ? { t, changeLanguage } : { t };
}
