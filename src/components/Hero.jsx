import React from "react";
// import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            {/* Background Video */}
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/hero_video.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="hero-overlay" />

            {/* Center Content */}
            <div className="hero-content">
                <p className="hero-story">
                    “Chaque histoire d’amour est belle,
                    <br />
                    mais la nôtre est notre préférée.”
                </p>

                <div className="hero-divider" />

                <p className="hero-invite">
                    Faites défiler pour découvrir notre journée
                </p>
            </div>
        </section>
    );
}