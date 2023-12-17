import "./Home.css"
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Home() {
    const {i18n, t} = useTranslation()

    return (
        <div className="intro-container">

            <div className="intro-img">
                <img src={require("../../resources/pic.png")}  alt="It´s me"/>
            </div>

            <div className="intro-first">
                <div className="first-container">
                    <p className="">
                        {t("greeting")}
                    </p>
                    <h2>
                        {t("name")}
                    </h2>
                    <p>
                        {t("shortIntro")}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home

/*
initial={{
                        opacity: 0,
                        x: -75,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        ease: "backOut",
                        duration: 1
                    }}
                    //viewport={{ once: true }}


initial={{
                        opacity: 0,
                        x: -75,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        ease: "backOut",
                        duration: 1.2,
                        delay: 0.3,
                    }}
*
*/
