import React from "react";
import { motion } from "framer-motion";

const fade = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};

export default function Location() {
    return (
        <motion.div
            className="location"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
        >
            <h2>Où célébrons-nous ?</h2>

            <div className="card">
                <h3>Palais KZY</h3>
                <h3>17h00</h3>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.9942030010043!2d-7.745205400000002!3d33.4755017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62bade226ceb3%3A0xb96e59454f6f7c54!2spalais%20kzy!5e0!3m2!1sfr!2sma!4v1778280323076!5m2!1sfr!2sma"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>

            <h4>On compte sur vous !</h4>
        </motion.div>
    );
}