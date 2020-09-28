import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        header: {
          title: 'Simple',
        },
        login: {
          signin: 'Sign In',
        },
        terms: {
          email: 'E-mail',
          password: 'Password',
          forgot: 'Forgot password',
        },
      },
    },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
