import LangSwitcher from "./LangSwitcher";
import "./NavBar.css"
import {useTranslation} from "react-i18next";
import {motion, useCycle, useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ProgressBar from "./ProgressBar";

function NavBar() {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleScroll = () => {
        const currentIndex = scrollY.current
        setActiveIndex(10)
        console.log(currentIndex)
        console.log(activeIndex)

        switch (true) {
            case (currentIndex < 600):
                setActiveIndex(0)
                break
            case (currentIndex < 1400):
                setActiveIndex(1)
                break
            case (currentIndex < 2200):
                setActiveIndex(2)
                break
            case (currentIndex < 2400):
                setActiveIndex(3)
                break
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll())
        }
    }, []);


    const { t } = useTranslation()

    const { scrollY } = useScroll()


    //for mobile
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <>
            <ProgressBar />
            <nav className="navbar-container">
                <div className="link-container">
                    <a className={activeIndex === 0 ? "active-link" : ""} href="#home" >{t("home")}</a>
                    <a className={activeIndex === 2 ? "active-link" : ""} href="#skills" >{t("skills")}</a>
                    <a className={activeIndex === 3 ? "active-link" : ""} href="#projects" >{t("projects")}</a>
                </div>
                <div className="external-container">
                    <a href="https://www.linkedin.com/in/mats-bayer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "var(--black)"}} />
                    </a>
                    <a href="https://github.com/matsbayer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "var(--black)"}} />
                    </a>
                    <LangSwitcher />
                </div>
            </nav>

        </>
    )
};

export default NavBar;

/*
<motion.div className="mobile-nav burger-menu"
                        variants={variants}
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
            >
                <a href="#home"       onClick={toggleOpen}>{t("home")}</a>
                <a href="#cv"         onClick={toggleOpen}>{t("cv")}</a>
                <a href="#experience" onClick={toggleOpen}>{t("experience")}</a>
                <a href="#contact"    onClick={toggleOpen}>{t("contact")}</a>
                <LangSwitcher />
            </motion.div>
*/