import "./CV.css"
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import CVItem from "./CVItem";

function CV() {

    const { t } = useTranslation()

    return (
        <div className="cv-container" >

            <div className="cv-left">

                <CVItem>
                    <h3>Hochschule der Medien</h3>
                    <p>Medieninformatik</p>
                    <p>Bachelor of Science</p>
                    <p>Dauer: Okt 202 - heute</p>
                </CVItem>

            </div>
            <div className="seperationline" >
            </div>
            <div className="cv-right">

                <CVItem>
                    <h3>redhotmagma GmbH</h3>
                    <p>Anstellung: Praxissemester</p>
                    <p>Tätigkeit: Web Development</p>
                    <p>Dauer: Sep 2022 - März 2023</p>
                </CVItem>

                <CVItem>
                    <h3>Fraunhofer Institut</h3>
                    <p>Anstellung: Werkstudent</p>
                    <p>Tätigkeit: Web Development</p>
                    <p>Dauer: Okt 2023 - heute</p>
                </CVItem>

            </div>
        </div>
    )
}

export default CV