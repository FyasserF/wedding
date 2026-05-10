import React from "react";
import { motion } from "framer-motion";

const fade = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: {
            delay: i * 0.08,   // faster stagger
            duration: 0.25,    // faster fade
            ease: "easeOut",
        },
    }),
};

export default function Welcome() {
    return (
        <div className="welcome">

            <motion.div
                className="top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fade}
            >
                <div className="cadre">
                    <img src="/cadre.png" alt="" />
                </div>

                <div className="separater">
                    <hr />
                    <div className="heart">❤</div>
                    <hr />
                </div>

                <div className="img">
                    <img src="/bismillah-png-5.png" alt="" />
                </div>

                <h3>شكراً لحضوركم ومشاركتكم فرحتنا، دعواتكم لنا بالتوفيق</h3>
            </motion.div>

            <motion.div
                className="separater-bridge"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={fade}
            >
                <img src="/separate.png" alt="" />
            </motion.div>

            <motion.div
                className="body"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={fade}
            >
                <h2>Majda & Moncef</h2>
                <h3>Samedi</h3>
                <h3>20/06/2026 17h00</h3>
            </motion.div>

            <motion.div
                className="separater-bridge"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={fade}
            >
                <img src="/separate.png" alt="" />
            </motion.div>

            <motion.div
                className="buttom"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={fade}
            >
                <h3>Votre présence rendra ce jour encore plus spécial</h3>
            </motion.div>

            <motion.div
                className="separater"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                variants={fade}
            >
                <hr />
                <div className="heart">❤</div>
                <hr />
            </motion.div>

        </div>
    );
}