import { useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";

export default function MusicButton() {

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {

    if(playing){
      audioRef.current.pause();
    }else{
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/src/assets/music.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 glass p-5 rounded-full shadow-xl"
      >
        <FaMusic className="text-gold text-xl" />
      </button>
    </>
  );
}