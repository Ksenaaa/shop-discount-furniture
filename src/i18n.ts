import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
