"use client";

import { useEffect, useState, useRef } from "react";
import { X, Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function ShowreelModal({ isOpen, onClose }) {
  const [activeReelTab, setActiveReelTab] = useState("fashion");
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const reels = {
    fashion: {
      title: "Haute Couture & Runway Production Reel",
      client: "Paris Runway Session",
      src: "https://blaedagency.com/wp-content/uploads/2025/07/blaed-agency.mp4",
    },
    motion: {
      title: "Digital Interfaces & 3D Motion Reel",
      client: "Swiss Motion Archive",
      src: "https://11jupian.b-cdn.net/SHOWREEL-jupian.mp4",
    },
  };

  const activeReel = reels[activeReelTab];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    if (window.lenis && window.lenis.stop) {
      window.lenis.stop();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (window.lenis && window.lenis.start) {
        window.lenis.start();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/95 flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between text-white font-mono text-xs pb-4 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-bold uppercase tracking-wider">{activeReel.title}</span>
          <span className="hidden sm:inline text-white/50">• {activeReel.client}</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Reel Switcher */}
          <div className="flex items-center border border-white/20">
            <button
              onClick={() => setActiveReelTab("fashion")}
              className={`px-3 py-1 text-[11px] font-mono uppercase transition-colors ${
                activeReelTab === "fashion"
                  ? "bg-white text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Fashion Runway
            </button>
            <button
              onClick={() => setActiveReelTab("motion")}
              className={`px-3 py-1 text-[11px] font-mono uppercase transition-colors ${
                activeReelTab === "motion"
                  ? "bg-white text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Digital Motion
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white transition-colors"
            data-cursor-text="Close"
          >
            [Close ✕]
          </button>
        </div>
      </div>

      {/* Video Screen */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video bg-black">
          <video
            ref={videoRef}
            key={activeReel.src}
            src={activeReel.src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-contain"
          />

          <div
            onClick={togglePlay}
            className="absolute inset-0 cursor-pointer flex items-center justify-center"
          >
            {!isPlaying && (
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div
        className="flex items-center justify-between text-white font-mono text-xs pt-4 border-t border-white/10 max-w-6xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-6">
          <button onClick={togglePlay} className="hover:text-white/70">
            {isPlaying ? "[Pause]" : "[Play]"}
          </button>
          <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white/70">
            {isMuted ? "[Audio Off]" : "[Audio On]"}
          </button>
        </div>

        <div className="text-[11px] text-white/40">
          Press ESC to exit
        </div>
      </div>
    </div>
  );
}
