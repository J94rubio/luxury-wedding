import { useRef, useState, useEffect } from "react";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (!expanded) {
      setExpanded(true);
      audioRef.current.play();
      setPlaying(true);
    } else if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      setExpanded(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
      setExpanded(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/src/assets/music/perfect.mp4" type="audio/mp3" />
      </audio>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Letrero */}
        {!expanded && (
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gold/30 px-3 py-1.5 rounded-full shadow-md">
            <span className="text-[10px] uppercase tracking-[3px] text-dark/60">
              Reproducir música
            </span>
            <FaMusic className="text-gold text-[10px]" />
          </div>
        )}

        {/* Botón / Player */}
        <div
          onClick={handleClick}
          className={`
            glass shadow-xl cursor-pointer border border-gold/30
            transition-all duration-500 ease-in-out
            flex items-center justify-center
            rounded-full
            ${playing
              ? "px-4 py-3 gap-3 w-[160px]"
              : "w-[52px] h-[52px]"
            }
          `}
        >
          {/* Icono play/pause */}
          <div className="flex-shrink-0">
            {playing
              ? <FaPause className="text-gold text-sm" />
              : <FaPlay className="text-gold text-sm" />
            }
          </div>

          {/* Barras + progreso — solo cuando reproduce */}
          {playing && (
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-end gap-[3px] h-4">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[2px] bg-gold rounded-full"
                    style={{
                      height: `${8 + Math.sin(i) * 4}px`,
                      animation: `wave ${0.6 + i * 0.08}s ease-in-out infinite alternate`,
                      animationDelay: `${i * 60}ms`,
                    }}
                  />
                ))}
              </div>
              <div className="w-full h-[2px] bg-gold/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}