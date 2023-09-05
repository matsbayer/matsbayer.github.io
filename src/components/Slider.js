import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "../style/Slider.css"
import "../style/Card.css"
import FlipCard from "./FlipCard";
import Card from "./Card";
import {useTranslation} from "react-i18next";

const images = [
    {
        heading: "AI",
        src: "https://img.icons8.com/?size=512&id=61864&format=png",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    {
        heading: "Development",
        src: "https://img.icons8.com/?size=512&id=2778&format=png",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    {
        heading: "Creativity",
        src: "https://img.icons8.com/?size=512&id=21908&format=png",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
];

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export const Slider = () => {

    const {i18n, t} = useTranslation()

    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const setIndex = (index1, index2) => {
        setPage([index1, index2])
    }

    return (
        <>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                transition={{
                    duration: 0.1
                }}
                className="next" onClick={() => paginate(-1)}>
                {"<"}
            </motion.button>
            <AnimatePresence initial={false} custom={direction} >
                <motion.div
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "linear", stiffness: 300, damping: 100 },
                        opacity: { duration: 0.5 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="image-slider"
                >
                    <Card
                        heading={images[imageIndex].heading}
                        image={images[imageIndex].src}
                        text={t("headline" + imageIndex)}
                    />

                </motion.div>
            </AnimatePresence>

            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                transition={{
                   duration: 0.1
                }}
                className="prev" onClick={() => paginate(1)}>
                {">"}
            </motion.button>
            <div className="listdots">
                <div className={imageIndex === 0 ? "active" : ""}
                     onClick={() => setIndex(0, 0)}>
                </div>
                <div className={imageIndex === 1 ? "active" : ""}
                     onClick={() => setIndex(1, 1)}>
                </div>
                <div className={imageIndex === 2 ? "active" : ""}
                     onClick={() => setIndex(2, 2)}>
                </div>
            </div>
        </>
    );
};
