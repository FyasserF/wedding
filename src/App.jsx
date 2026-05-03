import { useRef } from "react";
import './App.css'
import { Countdown } from './components/Countdown'
import Welcome from './components/Welcome'

function App() {
  const audioRef = useRef(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Hero */}
      <div onClick={startMusic}>
        <div className='hero'>
          {/* Couple video on the background */}
          {/* Text on the center */}
        </div>
        {/* Welcome */}
        <Welcome />

        {/* contdown */}
        <Countdown />


        {/* location */}
      </div>
    </>
  )
}

export default App
