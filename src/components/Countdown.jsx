import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-06-26T17:00:00").getTime();

const calc = () => {
    const diff = Math.max(0, TARGET - Date.now());
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

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

export const Countdown = () => {
    const [t, setT] = useState(calc());

    useEffect(() => {
        const id = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(id);
    }, []);

    const items = [
        { label: "Jours", value: t.days },
        { label: "Heures", value: t.hours },
        { label: "Minutes", value: t.minutes },
        { label: "Secondes", value: t.seconds },
    ];

    return (
        <motion.section
            id="countdown"
            className="countdown-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
        >
            <img src="/flower.png" className="flower flower-1" />
            <img src="/flower.png" className="flower flower-2" />
            <img src="/flower.png" className="flower flower-3" />
            <img src="/flower.png" className="flower flower-4" />

            <div className="countdown-container">
                <div>
                    <p className="countdown-subtitle">Comptant les instants</p>
                    <h2 className="countdown-title">
                        jusqu’à ce que l’éternité commence
                    </h2>
                </div>

                <div>
                    <div className="countdown-grid">
                        {items.map((i) => (
                            <div key={i.label} className="countdown-card">
                                <div className="countdown-value">
                                    {String(i.value).padStart(2, "0")}
                                </div>
                                <div className="countdown-label">{i.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};