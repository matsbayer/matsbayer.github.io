import "../style/Card.css"
import {motion} from "framer-motion";


function Card(props) {

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -60,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 1,
            }}
            className="card">
            <div className="card-start">
                <img
                    src={props.image}
                />
                <h2>
                    {props.heading}
                </h2>
            </div>
            <div className="card-content">
                <motion.div
                    initial={{
                        y:0,
                    }}
                    whileHover={{
                        y: -180,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.3,
                    }}
                    className="card-content">
                   <img
                    src="https://img.icons8.com/?size=512&id=15825&format=png"
                   />
                    <p>
                        {props.text}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Card;