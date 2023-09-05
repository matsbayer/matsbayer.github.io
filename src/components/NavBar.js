import LangSwitcher from "./LangSwitcher";
import "../style/NavBar.css"
import {useTranslation} from "react-i18next";
import {motion, useScroll, useSpring} from "framer-motion";

function NavBar() {

    const { i18n, t } = useTranslation()

    const container = {
        hidden: { opacity: 0,  y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: 0.5,
                delayChildren: 1,
            }
        }
    }

    const item = {
        hidden: { opacity: 0, x: -25 },
        show: { opacity: 1, x: 0, transition: {duration:1} },
    }

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 300,
        restDelta: 0.0001
    });

    return (
        <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="navbar">
            <div className="link-container">
                <motion.a variants={item} href="#home" >{t("home")}</motion.a>
                <motion.a variants={item} href="#about" >{t("about")}</motion.a>
                <motion.a variants={item} href="#work" >{t("work")}</motion.a>
                <motion.a variants={item} href="#contact" >{t("contact")}</motion.a>
                <LangSwitcher  />
            </div>
            <motion.div className="progress-bar" style={{ scaleX }} />
        </motion.nav>
    )
};

export default NavBar;