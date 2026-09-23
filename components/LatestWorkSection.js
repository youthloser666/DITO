"use client";

import Image from "next/image";
import { useState } from "react";

export default function LatestWorkSection({ onOpenContact }) {
  const [selectedPreview, setSelectedPreview] = useState(null);

  const works = [
    {
      type: "[ ARTWORK ]",
      src: "/img/lates_dummy1.png",
      title: "Belgrade Fragmented Memory",
      category: "Mixed Media Intervention on Photographic Print",
      year: "2024",
    },
    {
      type: "[ PHOTOGRAPHY ]",
      src: "/img/lates_dummy2.png",
      title: "Nocturne Euphoria",
      category: "Documentary Color Photography",
      year: "2024",
    },
  ];

  return (
    <section
      id="latest-work"
      className="relative min-h-screen lg:h-screen w-full bg-[#f5f5f5] text-black border-b border-[var(--border-color)] flex flex-col justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 pt-6 sm:pt-8 md:pt-9 lg:pt-9 xl:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-12 xl:pb-14 overflow-hidden"
    >
      {/* 1. Header Row: 'LATEST WORKS' — Enlarged Moderniz display heading */}
      <div className="w-full">
        <h2 className="font-moderniz-head text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] xl:text-[5.4rem] 2xl:text-[6rem] leading-[0.88] text-right select-none whitespace-nowrap tracking-[-0.24em] [word-spacing:0.45em]">
          LATEST WORKS
        </h2>
      </div>

      {/* 2. Main Content: Dual Artwork Cards — enlarged and pushed down close to CONTACT */}
      <div className="w-full flex justify-end mt-auto pt-6 sm:pt-8 md:pt-10 lg:pt-12 mb-2 sm:mb-2.5">
        <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[58%] xl:w-[54%] 2xl:w-[50%] max-w-[740px] xl:max-w-[800px] 2xl:max-w-[860px] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="art-card group flex flex-col cursor-pointer"
              onClick={() => setSelectedPreview(work)}
            >
              {/* Category Label — above card, right-aligned */}
              <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-black mb-1.5 sm:mb-2 text-right">
                <span>{work.type}</span>
              </div>

              {/* Card Image Container — enlarged 3:4 portrait cards */}
              <div className="relative aspect-[3/4] max-h-[54vh] sm:max-h-[58vh] lg:max-h-[62vh] bg-neutral-200 overflow-hidden shadow-sm">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 35vw"
                  className="art-card-img object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bottom Row: Metallic Glyph Symbol (Left, absolute) + CONTACT ↗ (Right, directly under cards) */}
      {/* Metallic Glyph Symbol at bottom left — perfectly symmetrical with Artist section */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-12 xl:bottom-14 left-6 sm:left-8 md:left-10 lg:left-12 xl:left-14 2xl:left-16 w-14 sm:w-16 lg:w-20 xl:w-24 z-10 pointer-events-auto">
        <Image
          src="/img/dto_symbol.png"
          alt="DTO Metallic Glyph Symbol"
          width={166}
          height={270}
          className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 select-none"
        />
      </div>

      {/* CONTACT ↗ — Symmetrical at bottom right, directly under the artwork cards */}
      <div className="w-full flex justify-end pt-1 sm:pt-2">
        <button
          onClick={onOpenContact}
          className="group cursor-pointer hover:opacity-60 transition-opacity inline-flex items-center gap-1.5"
          title="Open Contact Inquiries"
          aria-label="Contact DTO"
        >
          <span className="font-moderniz text-base sm:text-lg xl:text-xl tracking-[-0.02em] select-none text-black">
            CONTACT
          </span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

      {/* Quick Lightbox for Latest Works */}
      {selectedPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPreview(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#f5f5f5] border border-black p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPreview(null)}
              className="absolute top-4 right-4 text-sm font-mono p-1 hover:opacity-50 cursor-pointer"
            >
              [ ✕ ]
            </button>
            <div className="relative aspect-[3/4] max-h-[75vh] w-full bg-black mx-auto overflow-hidden">
              <Image
                src={selectedPreview.src}
                alt={selectedPreview.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center font-mono text-xs gap-2">
              <div>
                <span className="font-bold text-sm block">{selectedPreview.title}</span>
                <span className="text-neutral-500">{selectedPreview.category}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedPreview(null);
                  onOpenContact();
                }}
                className="px-4 py-2 bg-black text-white uppercase text-[11px] font-bold hover:bg-neutral-800 transition-colors"
              >
                Inquire Artwork ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
