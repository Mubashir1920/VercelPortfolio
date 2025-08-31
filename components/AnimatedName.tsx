"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedName = () => {
    const name = "Muhammad Mubashir".split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // controls the delay between letters
            },
        },
    };

    const letter = {
        hidden: { y: 80 },
        visible: { y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <Link href="/" className="primary-heading">
            <div className="overflow-hidden" >
                <motion.span
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                >
                    {name.map((char, index) => (
                        <motion.span key={index} variants={letter} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.span>
            </div>
        </Link>
    );
};

export default AnimatedName;
