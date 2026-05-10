import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Welcome from "./components/Welcome";
import { Countdown } from "./components/Countdown";
import Location from "./components/Location";
import { IoMdMusicalNote } from "react-icons/io";
import Hero from "./components/Hero";

export default function App() {

  const [started, setStarted] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = async () => {
    setStarted(true);
    toggleMusic()
    setTimeout(() => {
      setShowLanding(true);
    }, 2000);
  };

  const fadeIn = (audio) => {
    audio.volume = 0;
    audio.play().catch(() => { });

    let vol = 0;
    const interval = setInterval(() => {
      if (vol < 1) {
        vol = Math.min(vol + 0.05, 1);
        audio.volume = vol;
      } else {
        clearInterval(interval);
      }
    }, 10);
  };

  const fadeOut = (audio) => {
    let vol = audio.volume;

    const interval = setInterval(() => {
      if (vol > 0) {
        vol = Math.max(vol - 0.05, 0);
        audio.volume = vol;
      } else {
        clearInterval(interval);
        audio.pause();
      }
    }, 10);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeOut(audio);
    } else {
      fadeIn(audio);
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop playsInline>
        <source src="/music.mp4" type="audio/mp4" />
      </audio>

      <AnimatePresence>
        {!started && (
          <motion.div
            className="intro-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <section className="hero">
              <div className="hero-bg">
                <img src='/hero-couple.jpg' />
              </div>

              <div className="hero-overlay" />
              <div className="hero-blur" />

              <div className="hero-content">
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .1 }}
                >
                  Nous avons la joie de vous convier à notre mariage
                </motion.p>

                <h1 className="hero-title">
                  Majda <span>&</span> Moncef
                </h1>

                <motion.button
                  className="open-btn"
                  onClick={handleOpen}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255,255,255,0.3)"
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  Découvrir l’invitation
                </motion.button>
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="black-screen"
        animate={{
          opacity: started && !showLanding ? 1 : 0
        }}
        transition={{
          duration: 2,
          delay: 0.4
        }}
      />

      <AnimatePresence>
        {showLanding && (
          <motion.div
            // className="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Hero />
            <Welcome />
            <Countdown />
            <Location />
            {/* Floating Music Button */}
            <button ref={buttonRef} className="music-btn" onClick={toggleMusic}>
              <IoMdMusicalNote />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}