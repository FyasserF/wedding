import { useEffect, useRef } from "react";
import './App.css'
import { Countdown } from './components/Countdown'
import Welcome from './components/Welcome'
import Location from "./components/Location";

function App() {
  const audioRef = useRef(null);

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   audio.muted = true;

  //   audio.play().then(() => {
  //     // try to unmute after a delay
  //     setTimeout(() => {
  //       audio.muted = false;
  //     }, 1000);
  //   }).catch(() => { });
  // }, []);

  return (
    <>
      {/* <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio> */}

      {/* Hero */}
      <div>
        <div className='hero'>
        </div>

        <Welcome />

        <Countdown />

        <Location />
      </div>
    </>
  )
}

export default App
