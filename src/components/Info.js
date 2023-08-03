import "../style/Info.css"
import FlipCard from "./FlipCard";
import {motion} from "framer-motion";

function Info() {

    return (
        <div className="info-container">
            <div className="info-me">
                <motion.h2
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
                >
                    Hey,
                </motion.h2>
                <motion.p
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

                >
                    Ich bin
                    <span whileHover={{scale: 1.2,}} className="author-name"> Mats Bayer </span>
                    und das bin ich
                </motion.p>
            </div>
            <div className="info-img">
               <FlipCard
                   src="me.png"
                   text="That's me :)"
               />
            </div>
        </div>
    )
}

export default Info