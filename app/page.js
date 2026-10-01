"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import LatestWorkSection from "@/components/LatestWorkSection";
import ArtForSaleSection from "@/components/ArtForSaleSection";
import ArtistSection from "@/components/ArtistSection";
import ContactModal from "@/components/ContactModal";
import BackgroundDistortion from "@/components/BackgroundDistortion";

const PAGES = [
  { id: "latest-work", label: "EXHIBITIONS", number: "01" },
  { id: "art-for-sale", label: "THE ARTWORK", number: "02" },
  { id: "artist", label: "THE ARTIST", number: "03" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverview, setIsOverview] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Transition handler: mimics Android Recent Apps / Brandon Yasin zoom-out page switcher
  const goToSection = useCallback((targetIndex) => {
    if (isTransitioning) return;

    // If clicking the current section, toggle the Recent Apps Overview deck
    if (targetIndex === activeIndex) {
      setIsOverview((prev) => !prev);
      return;
    }

    // If already in overview mode, slide to target and zoom in
    if (isOverview) {
      setActiveIndex(targetIndex);
      setTimeout(() => {
        setIsOverview(false);
      }, 260);
      return;
    }

    // Sequence: Full-screen -> Zoom Out -> Slide to target card -> Zoom In
    setIsTransitioning(true);
    setIsOverview(true); // 1. Zoom out

    setTimeout(() => {
      setActiveIndex(targetIndex); // 2. Slide carousel track
    }, 260);

    setTimeout(() => {
      setIsOverview(false); // 3. Zoom back in
    }, 680);

    setTimeout(() => {
      setIsTransitioning(false); // 4. Complete transition
    }, 1080);
  }, [activeIndex, isOverview, isTransitioning]);

  // Keyboard navigation for power users & overview interaction
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (contactOpen) return;
      if (e.key === "Escape") {
        setIsOverview(false);
      } else if (e.key === "ArrowRight") {
        goToSection(Math.min(PAGES.length - 1, activeIndex + 1));
      } else if (e.key === "ArrowLeft") {
        goToSection(Math.max(0, activeIndex - 1));
      } else if (e.key === "1") {
        goToSection(0);
      } else if (e.key === "2") {
        goToSection(1);
      } else if (e.key === "3") {
        goToSection(2);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, isOverview, contactOpen, goToSection]);

  return (
    <div
      className="fixed inset-0 w-screen h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] select-none"
    >
      {/* 1. Fixed Background Distortion Layer */}
      <BackgroundDistortion />

      {/* 1b. Background Texture Layer (Global Canvas on Desktop & Mobile) */}
      <div className="fixed inset-0 texture-bg-layer z-0" aria-hidden="true" />

      {/* 2. Top Navigation Bar (EXHIBITIONS, THE ARTWORK, THE ARTIST + LOCAL TIME) */}
      <Navbar
        activeIndex={activeIndex}
        onSelectSection={goToSection}
        isOverview={isOverview}
      />

      {/* 3. 3D Perspective Stage: Single Non-scrollable Page with Recent Apps Deck */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          perspective: "1600px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Zoom Container: Scales down around center during overview & section transitions */}
        <div
          className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transformOrigin: "center center",
            transform: isOverview
              ? "scale(0.62) translateY(24px)"
              : "scale(1) translateY(0px)",
            willChange: "transform",
          }}
        >
          {/* Slide Track: Translates horizontally between pages with 4vw gap */}
          <div
            className="h-full flex transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(calc(-1 * ${activeIndex} * (100vw + 4vw)))`,
              willChange: "transform",
            }}
          >
            {PAGES.map((page, idx) => {
              const isCurrent = idx === activeIndex;

              return (
                <div
                  key={page.id}
                  className={`relative h-full flex-shrink-0 ${
                    isOverview
                      ? "flex flex-col justify-center"
                      : "w-full"
                  }`}
                  style={{
                    width: "100vw",
                    marginRight: "4vw",
                  }}
                >
                  {/* Android-style App Header Bar (Visible ONLY in Overview mode) */}
                  {isOverview && (
                    <div
                      className="flex items-center justify-between w-full px-4 mb-2.5 text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-300"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-silver)] shadow-[0_0_8px_rgba(192,192,192,0.8)]" />
                        <span className="font-bold text-[var(--accent-silver)]">
                          {page.number}
                        </span>
                        <span className="text-[var(--text-primary)] font-semibold tracking-widest">
                          {page.label}
                        </span>
                      </div>
                      <span className="text-[var(--text-muted)] text-[9px] tracking-widest hidden sm:inline">
                        {isCurrent ? "[ ACTIVE • TAP TO ENTER ]" : "[ TAP TO SWITCH ]"}
                      </span>
                    </div>
                  )}

                  {/* Card Viewport Frame: Switches from Full Screen to Rounded Card */}
                  <div
                    onClick={() => {
                      if (isOverview) {
                        if (isCurrent) {
                          setIsOverview(false);
                        } else {
                          goToSection(idx);
                        }
                      }
                    }}
                    className={`relative w-full h-full overflow-hidden transition-all duration-500 bg-[var(--bg-primary)] ${
                      isOverview
                        ? `rounded-2xl lg:rounded-3xl border border-white/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] ${
                            isCurrent
                              ? "ring-1 ring-white/30"
                              : "opacity-45 hover:opacity-85 cursor-pointer filter brightness-75 hover:brightness-100"
                          }`
                        : "rounded-none border-none shadow-none opacity-100"
                    }`}
                  >
                    {/* Page 0: [ EXHIBITIONS ] */}
                    {idx === 0 && (
                      <LatestWorkSection onOpenContact={() => setContactOpen(true)} />
                    )}

                    {/* Page 1: [ THE ARTWORK ] */}
                    {idx === 1 && (
                      <ArtForSaleSection onOpenContact={() => setContactOpen(true)} />
                    )}

                    {/* Page 2: [ THE ARTIST ] */}
                    {idx === 2 && (
                      <ArtistSection onOpenContact={() => setContactOpen(true)} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* 5. Global Interactive Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
