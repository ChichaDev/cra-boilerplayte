import i18next from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import uaWords from '../config/lang/ua.json';
import enWords from '../config/lang/en.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: enWords,
      },
      uk: {
        translation: uaWords,
      },
    },
  });
