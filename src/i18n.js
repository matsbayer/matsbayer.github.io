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
                headline1: "I'm ",
                name: "Mats Bayer",
                headline2: "and what's poppin?",

            },
        },
        de: {
            translation: {
                title: "Mein Portfolio",
                home: "Home",
                about: "Über mich",
                work: "Erfahrung",
                contact: "Kontakt",
                headline1: "Ich bin",
                name: "Mats Bayer",
                headline2: "und was geht?",

            },
        },
    },
});

export default i18n;