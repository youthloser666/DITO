"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function ArtworkModal({ artwork, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (artwork) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Trigger enter animation
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
          containerRef.current.style.transform = "translateY(0)";
        }
      });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-y-auto hide-scrollbar"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Top Bar: Back Button + Title */}
      <div className="relative z-[61] w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-5 pb-4">
        <button
          onClick={onClose}
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
          [ ART FOR SALE • UNIQUE PIECE ]
        </span>
      </div>

      {/* Hero Image — Full Width Cinematic */}
      <div className="relative z-[55] w-full px-6 sm:px-10 lg:px-14">
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.4/1] bg-black overflow-hidden rounded-sm border border-white/[0.08]">
          <Image
            src={artwork.src}
            alt={artwork.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/20 via-transparent to-[var(--bg-primary)]/20 pointer-events-none" />
        </div>
      </div>

      {/* Details Section */}
      <div className="relative z-[55] w-full px-6 sm:px-10 lg:px-14 pt-8 pb-16 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 lg:gap-24">
        {/* Left: Title + Price */}
        <div className="flex-1 min-w-0">
          <h2 className="font-moderniz text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem] leading-[0.9] text-[var(--text-primary)] uppercase">
            {artwork.title}
          </h2>
          <div className="mt-4 text-xl sm:text-2xl font-bold font-mono text-[var(--accent-silver)]">
            {artwork.price}
          </div>
        </div>

        {/* Right: Metadata Grid + CTA */}
        <div className="w-full md:w-[360px] lg:w-[420px] flex-shrink-0 font-mono">
          <div className="space-y-4 border-t border-[var(--border-color)] pt-6 text-xs text-[var(--text-secondary)]">
            <div>
              <span className="text-[var(--text-muted)] uppercase tracking-wider block text-[10px] mb-0.5">
                Medium
              </span>
              <span>{artwork.medium || "Mixed media on archival photograph, acrylic & oil pastel"}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] uppercase tracking-wider block text-[10px] mb-0.5">
                Dimensions
              </span>
              <span>{artwork.dimensions || "60 × 60 cm (Framed)"}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] uppercase tracking-wider block text-[10px] mb-0.5">
                Year & Location
              </span>
              <span>2024 • Belgrade, Serbia</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] uppercase tracking-wider block text-[10px] mb-0.5">
                Authenticity
              </span>
              <span>Signed & numbered by DITO with Certificate of Authenticity</span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={`mailto:andyjaviito@gmail.com?subject=Inquiry%20for%20Artwork:%20${encodeURIComponent(
                artwork.title
              )}&body=Hello%20Dito,%0A%0AI%20am%20interested%20in%20acquiring%20'${encodeURIComponent(
                artwork.title
              )}'%20(${artwork.price}).%20Please%20let%20me%20know%20availability%20and%20shipping%20options.`}
              className="w-full inline-block text-center py-4 bg-[var(--accent-silver)] text-[var(--bg-primary)] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Inquire to Purchase ↗
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
