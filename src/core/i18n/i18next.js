import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { pt, en, es } from './locales';

const options = {
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
  },
  fallbackLng: 'en',
  react: {
    wait: true,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
