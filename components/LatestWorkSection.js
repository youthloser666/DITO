"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const BASE_WORKS = [
  {
    id: 1,
    src: "/img/img/img01.webp",
    title: "Belgrade Fragmented Memory",
    type: "[ ARTWORK ]",
    category: "Mixed Media Intervention on Photographic Print",
    year: "2024",
  },
  {
    id: 2,
    src: "/img/img/img02.webp",
    title: "Nocturne Euphoria",
    type: "[ PHOTOGRAPHY ]",
    category: "Documentary Color Photography",
    year: "2024",
  },
  {
    id: 3,
    src: "/img/img/img03.webp",
    title: "Substrate 04",
    type: "[ MIXED MEDIA ]",
    category: "Mixed Media on Silver Gelatin Print",
    year: "2024",
  },
  {
    id: 4,
    src: "/img/img/img04.webp",
    title: "Altered Shadow Belgrade",
    type: "[ INTERVENTION ]",
    category: "Large Format Overpainted Street Documentary",
    year: "2024",
  },
  {
    id: 5,
    src: "/img/img/img05.webp",
    title: "Tactile Dialogues Havana-Belgrade",
    type: "[ EXHIBITION ]",
    category: "Spatial Exhibition & Spatial Print",
    year: "2024",
  },
  {
    id: 6,
    src: "/img/img/img06.webp",
    title: "The Observer Document",
    type: "[ ARCHIVE ]",
    category: "Street Portraiture Archive",
    year: "2024",
  },
];

// Duplicate items 6 times to ensure a massive buffer and 100% imperceptible seamless wrap
const SETS_COUNT = 6;
const INFINITE_WORKS = Array.from({ length: SETS_COUNT }).flatMap((_, setIdx) =>
  BASE_WORKS.map((w) => ({ ...w, uid: `set${setIdx}-${w.id}` }))
);

export default function LatestWorkSection({ onOpenContact }) {
  const [selectedPreview, setSelectedPreview] = useState(null);

  const containerRef = useRef(null);
  const jellyRef = useRef(null);
  const trackRef = useRef(null);

  // Physics & loop state stored in ref for 60/120fps hardware-accelerated animation without React lag
  const physics = useRef({
    currentPos: 0,
    targetPos: 0,
    velocity: 0,
    isDragging: false,
    startX: 0,
    lastPointerX: 0,
    lastPointerTime: 0,
    pointerVelocity: 0,
    dragDistance: 0,
    singleSetWidth: 0,
  });

  // Calculate exact single set cycle width from actual DOM element offsets (subpixel precision)
  const measureSetWidth = useCallback(() => {
    if (!trackRef.current || trackRef.current.children.length <= BASE_WORKS.length) return;
    const el0 = trackRef.current.children[0];
    const elNext = trackRef.current.children[BASE_WORKS.length];
    if (el0 && elNext) {
      const exactSetWidth = elNext.offsetLeft - el0.offsetLeft;
      if (exactSetWidth > 0) {
        physics.current.singleSetWidth = exactSetWidth;
      }
    }
  }, []);

  useEffect(() => {
    measureSetWidth();
    const frameId = requestAnimationFrame(measureSetWidth);

    const resizeObserver = new ResizeObserver(() => {
      measureSetWidth();
    });
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }
    window.addEventListener("resize", measureSetWidth);

    let rafId;
    const update = () => {
      const p = physics.current;

      // Initialize to Set 2 (center range) as soon as singleSetWidth is measured
      if (p.singleSetWidth > 0 && p.currentPos === 0) {
        p.currentPos = p.singleSetWidth * 2;
        p.targetPos = p.singleSetWidth * 2;
      }

      // Smooth inertia damping with silkier decay
      const lerpFactor = p.isDragging ? 0.24 : 0.072;
      const diff = p.targetPos - p.currentPos;
      p.currentPos += diff * lerpFactor;
      p.velocity = diff * lerpFactor;

      // Handle Seamless Wrap: 100% mathematically exact subpixel wrap with zero visual jump
      if (p.singleSetWidth > 0) {
        const W = p.singleSetWidth;
        while (p.currentPos >= 3 * W) {
          p.currentPos -= W;
          p.targetPos -= W;
        }
        while (p.currentPos < 2 * W) {
          p.currentPos += W;
          p.targetPos += W;
        }
      }

      // Organic Jelly Effect: subtle skew and dynamic stretch based on velocity
      const vClamped = Math.max(-50, Math.min(50, p.velocity));
      const skewAngle = Math.max(-9, Math.min(9, -vClamped * 0.18));
      const scaleX = Math.min(1.05, 1 + Math.abs(vClamped) * 0.001);
      const scaleY = Math.max(0.95, 1 - Math.abs(vClamped) * 0.001);

      // GPU-accelerated direct DOM transform update (no re-renders)
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-p.currentPos}px, 0, 0)`;
      }
      if (jellyRef.current) {
        jellyRef.current.style.transform = `skewX(${skewAngle}deg) scaleX(${scaleX}) scaleY(${scaleY})`;
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureSetWidth);
    };
  }, [measureSetWidth]);

  // Pointer Drag Handlers (Mouse & Touch)
  const handlePointerDown = (e) => {
    // Only primary button
    if (e.button && e.button !== 0) return;
    const p = physics.current;
    p.isDragging = true;
    p.dragDistance = 0;
    p.startX = e.clientX;
    p.lastPointerX = e.clientX;
    p.lastPointerTime = performance.now();
    p.pointerVelocity = 0;
  };

  const handlePointerMove = (e) => {
    const p = physics.current;
    if (!p.isDragging) return;

    const deltaX = e.clientX - p.lastPointerX;
    p.dragDistance += Math.abs(deltaX);

    const now = performance.now();
    const dt = Math.max(1, now - p.lastPointerTime);
    p.pointerVelocity = deltaX / dt;
    p.lastPointerX = e.clientX;
    p.lastPointerTime = now;

    // Incremental position update: avoids any coordinate collision during infinite wrapping
    p.targetPos -= deltaX;
  };

  const handlePointerUp = () => {
    const p = physics.current;
    if (!p.isDragging) return;
    p.isDragging = false;

    // Smooth momentum flick
    p.targetPos -= Math.max(-650, Math.min(650, p.pointerVelocity * 190));
  };

  // Trackpad / Mouse Wheel Horizontal Scroll
  const handleWheel = (e) => {
    const p = physics.current;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    p.targetPos += Math.max(-100, Math.min(100, delta)) * 1.1;
  };

  return (
    <section
      id="latest-work"
      className="relative w-full h-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 1. Section Header — Centered EXHIBITIONS (Original Moderniz) */}
      <div className="relative z-10 w-full flex justify-center items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-2 text-center select-none overflow-visible">
        <h2 className="font-moderniz-head text-[3.2rem] sm:text-[4.6rem] md:text-[5.8rem] lg:text-[7rem] xl:text-[8.2rem] 2xl:text-[9.2rem] leading-[0.85] select-none text-[var(--text-primary)]">
          EXHIBITIONS
        </h2>
      </div>

      {/* 2. Photo Carousel Container with Infinite Seamless Loop & Jelly Distortion — Lowered to bleed behind logo and contact */}
      <div
        ref={containerRef}
        className="relative z-10 flex-1 min-h-0 w-full flex items-end pb-2 sm:pb-3 md:pb-4 lg:pb-5 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        {/* Jelly Transform Wrapper: dynamically skews & stretches on scroll speed */}
        <div
          ref={jellyRef}
          className="w-full h-full flex items-end pb-1 sm:pb-2 will-change-transform"
          style={{
            transformOrigin: "50% 50%",
            transition: physics.current.isDragging ? "none" : "transform 0.15s ease-out",
          }}
        >
          {/* Continuous Infinite Slide Track */}
          <div
            ref={trackRef}
            className="flex items-end gap-5 sm:gap-7 lg:gap-9 px-6 sm:px-12 will-change-transform"
            style={{ width: "max-content" }}
          >
            {INFINITE_WORKS.map((work) => (
              <div
                key={work.uid}
                className="flex flex-col flex-shrink-0 group cursor-pointer select-none"
                onClick={() => {
                  if (physics.current.dragDistance < 8) {
                    setSelectedPreview(work);
                  }
                }}
              >
                {/* Image Header: Type & Year & Title */}
                <div className="flex items-center justify-between mb-1.5 px-0.5 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase select-none">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--text-primary)] font-bold tracking-widest">{work.type}</span>
                    <span className="text-[var(--text-muted)] tracking-widest">{work.year}</span>
                  </div>
                  <span className="text-[var(--text-muted)] text-[9px] tracking-wider truncate max-w-[130px] hidden sm:inline">
                    {work.title}
                  </span>
                </div>

                {/* Instagram 4:5 Portrait Card Frame — Lowered & bleeding behind bottom row */}
                <div className="relative h-[53vh] sm:h-[55vh] lg:h-[57vh] aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900 border border-white/[0.08] shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out select-none pointer-events-none"
                    loading="eager"
                    draggable={false}
                  />
                  {/* Subtle hover sheen */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: DTO Logo (Left) + CONTACT ↗ (Right) with Negative Inverted Blend Effect */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 pb-5 sm:pb-6 md:pb-8 flex items-end justify-between pointer-events-none mix-blend-difference text-white">
        {/* DTO Logo Symbol with Negative Effect */}
        <div className="w-10 sm:w-12 lg:w-14 pointer-events-auto mix-blend-difference">
          <Image
            src="/img/dto_symbol.png"
            alt="DTO Symbol"
            width={166}
            height={270}
            className="w-full h-auto object-contain select-none hover:scale-105 transition-transform duration-300 filter brightness-0 invert"
          />
        </div>

        {/* CONTACT ↗ Button with Negative Effect */}
        <button
          onClick={onOpenContact}
          className="group cursor-pointer pointer-events-auto inline-flex items-center gap-1.5 text-white hover:opacity-75 transition-opacity mix-blend-difference"
          title="Open Contact Inquiries"
          aria-label="Contact DTO"
        >
          <span className="font-moderniz text-base sm:text-lg xl:text-xl tracking-[-0.02em] select-none text-white">
            CONTACT
          </span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="18" x2="18" y2="6" />
            <polyline points="8 6 18 6 18 16" />
          </svg>
        </button>
      </div>

      {/* 4. Full-Page Exhibition Detail View (Portal to body) */}
      {selectedPreview && createPortal(
        <div
          className="fixed inset-0 z-50 bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-y-auto hide-scrollbar"
          style={{
            animation: "fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          {/* Top Bar */}
          <div className="relative z-[61] w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-5 pb-4">
            <button
              onClick={() => setSelectedPreview(null)}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer group"
              aria-label="Go back"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back</span>
            </button>

            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
              {selectedPreview.type} • {selectedPreview.year}
            </span>
          </div>

          {/* Hero Image — Full Width Cinematic */}
          <div className="relative z-[55] w-full px-6 sm:px-10 lg:px-14">
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.4/1] bg-black overflow-hidden rounded-sm border border-white/[0.08]">
              <img
                src={selectedPreview.src}
                alt={selectedPreview.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </div>

          {/* Details Section */}
          <div className="relative z-[55] w-full px-6 sm:px-10 lg:px-14 pt-8 pb-16 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 lg:gap-24">
            {/* Left: Title */}
            <div className="flex-1 min-w-0">
              <h2 className="font-moderniz text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem] leading-[0.9] text-[var(--text-primary)] uppercase">
                {selectedPreview.title}
              </h2>
              <p className="mt-3 font-mono text-sm text-[var(--text-secondary)]">
                {selectedPreview.category}
              </p>
            </div>

            {/* Right: Inquire CTA */}
            <div className="w-full md:w-[360px] lg:w-[420px] flex-shrink-0 font-mono">
              <div className="border-t border-[var(--border-color)] pt-6 space-y-3 text-xs text-[var(--text-secondary)]">
                <div>
                  <span className="text-[var(--text-muted)] uppercase tracking-wider block text-[10px] mb-0.5">
                    Category
                  </span>
                  <span>{selectedPreview.category}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] uppercase tracking-wider block text-[10px] mb-0.5">
                    Year
                  </span>
                  <span>{selectedPreview.year}</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setSelectedPreview(null);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="w-full text-center py-4 bg-[var(--accent-silver)] text-[var(--bg-primary)] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
                >
                  Inquire About This Work ↗
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
