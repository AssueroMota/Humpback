// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar os arquivos de tradução

import translationEN from "../public/locales/English.json";
import translationSpanish from "../public/locales/Spanish.json";
import translationPT from "../public/locales/Portugues.json";
import translationRU from "../public/locales/RUSSIAN.json";
import translationFrench from "../public/locales/French.json";
import translationMandarin from "../public/locales/Mandarin.json";
import translationGermany from "../public/locales/Germany.json";
import translationItalian from "../public/locales/Italian.json";
import translationArabic from "../public/locales/Arabic.json";


const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationSpanish
  },
  pt: {
    translation: translationPT
  },
  ar: {
    translation: translationArabic
  },
  zh: {
    translation: translationMandarin
  },
  de: {
    translation: translationGermany
  },
  it: {
    translation: translationItalian
  },
  ru: {
    translation: translationRU
  },
  fr: {
    translation: translationFrench
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Idioma padrão
    interpolation: {
      escapeValue: false // Evita a necessidade de escapar strings
    }
  });

export default i18n;
