import { motion } from "framer-motion"
import {useState} from "react";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
            <button onClick={() => setIsOpen(isOpen => !isOpen)} >Öffnen</button>
            <p>Hallo</p>
        </motion.nav>
    )
}