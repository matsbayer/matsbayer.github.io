import {motion, useScroll, useSpring} from "framer-motion";

function ProgressBar() {

    const { scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 300,
        restDelta: 0.0001
    });

    return(
        <motion.div style={{
            scaleX,
            height: "0.3rem",
            backgroundColor: "#ff6262",
            position: "fixed",
            top: 0, left: 0, right: 0,
            transformOrigin: "0%",
            zIndex: 10,
        }} />
    )
}

export default ProgressBar

/*

*/