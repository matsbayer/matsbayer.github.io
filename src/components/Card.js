import "../style/Card.css"
import {motion, useCycle} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUp, faCircleDown} from "@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";
import {useTranslation} from "react-i18next";

function Card(props) {

    const { t } = useTranslation()

    const [isOpen, toggleOpen] = useCycle(false, true);

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 100,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        },
        openTop: {
            y: 0,
        },
        closeTop: {
            y: 80,
        }
    };

    return (
        <motion.div className="card">

            <motion.div className="card-top"
                        variants={variants}
                        initial={false}
                        animate={isOpen ? "openTop" : "closeTop"}
            >
                <FontAwesomeIcon icon={props.image} size="2xl" className="card-icon" />
                <h2>{t(props.heading)}</h2>
            </motion.div>
            <div className="card-content">

                <motion.p
                    variants={variants}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    {props.text}
                </motion.p>

                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    transition={{
                        duration: 0.1
                    }}
                    onClick={toggleOpen}
                    style={{zIndex: 100}}
                >
                    <FontAwesomeIcon icon={isOpen ? faCircleDown : faCircleUp} size="2xl" className="content-icon" />
                </motion.button>

            </div>
        </motion.div>
    )
}

export default Card;