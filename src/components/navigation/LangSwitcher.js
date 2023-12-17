import "./LangSwitcher.css"
import i18n from "i18next";
import {useCycle} from "framer-motion";

function LangSwitcher() {

    const [lang, toggleLang] = useCycle("en", "de");

    const changeLang = () => {
        if (lang === "en") {
            i18n.changeLanguage("de").then(r => toggleLang("de"))
        } else {
            i18n.changeLanguage("en").then(r => toggleLang("en"))
        }
    }

    return (
        <div className="langswitcher">
            <button onClick={changeLang}>
                <img src={lang === "en" ?
                            require("../../resources/england.png") :
                            require("../../resources/germany.png")}
                     alt="flag"
                />
            </button>
        </div>

    );
}

export default LangSwitcher;