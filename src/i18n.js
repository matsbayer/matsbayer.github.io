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
                home: "Home",
                skills: "Skills",
                projects: "Projects",
                greeting: "Hello, I´m",
                name: "Mats Bayer",
                shortIntro: "Currently studying computer science and media (B. Sc.) at Hochschule der Medien in Stuttgart and enthusiastic about technology and software, both conceptually and its concrete implementation.",
            },
        },
        de: {
            translation: {
                home: "Home",
                skills: "Skills",
                projects: "Projekte",
                greeting: "Hallo, ich bin",
                name: "Mats Bayer",
                shortIntro: "Studiere derzeit Medieninformatik (B. Sc.) an der Hochschule der Medien in Stuttgart und begeistere mich für Technik und Software, sowohl konzeptionell als auch in dessen konkreter Implementation",
            },
        },
    },
});

export default i18n;