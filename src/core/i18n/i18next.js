import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          header: {
            title: 'Simple',
          },
          login: {
            signin: 'Entrar',
          },
          terms: {
            email: 'E-mail',
            password: 'Senha',
            forgot: 'Esqueci a senha',
          },
        },
      },
      en: {
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
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
