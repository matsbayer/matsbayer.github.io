import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                title: "Portfolio of me",
                home: "Home",
                about: "About",
                work: "Experience",
                contact: "Contact",
            },
        },
        de: {
            translation: {
                title: "Mein Portfolio",
                home: "Home",
                about: "Über mich",
                work: "Erfahrung",
                contact: "Kontakt",
            },
        },
    },
});

export default i18n;