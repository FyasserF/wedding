import { useEffect, useRef, useState } from "react";
import './App.css'
import { Countdown } from './components/Countdown'
import Welcome from './components/Welcome'
import Location from "./components/Location";
import { IoMdMusicalNote } from "react-icons/io";

function App() {
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/music.mp4" type="audio/mpeg" />
      </audio>

      {/* Hero */}
      <div>
        <div className='hero'></div>

        <Welcome />
        <Countdown />
        <Location />
      </div>

      {/* Floating Music Button */}
      <button ref={buttonRef} className="music-btn" onClick={toggleMusic}>
        <IoMdMusicalNote />
      </button>
    </>
  )
}

export default App;