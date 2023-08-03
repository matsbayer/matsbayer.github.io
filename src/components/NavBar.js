import LangSwitcher from "./LangSwitcher";
import "../style/NavBar.css"
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

function NavBar() {

    const { i18n, t } = useTranslation()

    return (
        <nav className="navbar">
            <div className="link-container">
                <a href="#home" >{t("home")}</a>
                <a href="#about" >{t("about")}</a>
                <a href="#work" >{t("work")}</a>
                <a href="#contact" >{t("contact")}</a>
                <LangSwitcher />
            </div>
        </nav>
    )
};

export default NavBar;