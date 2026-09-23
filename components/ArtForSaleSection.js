"use client";

import Image from "next/image";
import { useState } from "react";
import ArtworkModal from "./ArtworkModal";

export default function ArtForSaleSection({ onOpenContact }) {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // 8 Artworks composed of artistic crops from dummy1, dummy2, art1, and art2
  const artworks = [
    {
      id: 1,
      src: "/img/art_sale/art_1.webp",
      title: "CHROMATIC REFLECTION I",
      displayTitle: "CHROMATIC I",
      price: "€ 1,200",
      medium: "Overpainted photographic portrait, acrylic & oil pastel",
      dimensions: "60 × 60 cm",
      source: "lates_dummy1.png",
    },
    {
      id: 2,
      src: "/img/art_sale/art_2.webp",
      title: "BELGRADE SUBSTRATE 04",
      displayTitle: "SUBSTRATE 04",
      price: "€ 950",
      medium: "Mixed media on silver gelatin print",
      dimensions: "50 × 50 cm",
      source: "art1.png",
    },
    {
      id: 3,
      src: "/img/art_sale/art_3.webp",
      title: "PERCEPTION OF VISION",
      displayTitle: "PERCEPTION",
      price: "€ 1,450",
      medium: "Archival pigment print with ink intervention",
      dimensions: "70 × 70 cm",
      source: "lates_dummy1.png",
    },
    {
      id: 4,
      src: "/img/art_sale/art_4.webp",
      title: "CYAN NOCTURNE MASK",
      displayTitle: "CYAN NOCTURNE",
      price: "€ 1,600",
      medium: "Color documentary photography & oil wash",
      dimensions: "65 × 65 cm",
      source: "lates_dummy2.png",
    },
    {
      id: 5,
      src: "/img/art_sale/art_5.webp",
      title: "ALTERED SHADOW BELGRADE",
      displayTitle: "ALTERED SHADOW",
      price: "€ 2,200",
      medium: "Large format overpainted street documentary",
      dimensions: "80 × 80 cm",
      source: "art2.png",
    },
    {
      id: 6,
      src: "/img/art_sale/art_6.webp",
      title: "PIGMENT WOUND NO. 07",
      displayTitle: "PIGMENT WOUND",
      price: "€ 850",
      medium: "Raw pigment, acrylic lacquer on photo paper",
      dimensions: "50 × 50 cm",
      source: "art1.png",
    },
    {
      id: 7,
      src: "/img/art_sale/art_7.webp",
      title: "EUPHORIC INTERVENTION",
      displayTitle: "EUPHORIC",
      price: "€ 1,750",
      medium: "Silver halide print with hand-applied dyes",
      dimensions: "75 × 75 cm",
      source: "lates_dummy2.png",
    },
    {
      id: 8,
      src: "/img/art_sale/art_8.webp",
      title: "TRANSFORMED MEMORY 09",
      displayTitle: "TRANSFORMED",
      price: "€ 2,400",
      medium: "Dual exposure & tactile paint intervention",
      dimensions: "85 × 85 cm",
      source: "art2.png",
    },
  ];

  return (
    <section
      id="art-for-sale"
      className="relative min-h-screen lg:h-screen w-full bg-[#f5f5f5] text-black border-b border-[var(--border-color)] flex flex-col justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 pt-6 sm:pt-8 md:pt-9 lg:pt-9 xl:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-12 xl:pb-14 overflow-hidden"
    >
      {/* 1. Header: 'ART FOR SALE' — Enlarged to match LATEST WORKS */}
      <div className="w-full">
        <h2 className="font-moderniz-head text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] xl:text-[5.4rem] 2xl:text-[6rem] leading-[0.88] text-right select-none whitespace-nowrap tracking-[-0.24em] [word-spacing:0.45em]">
          ART FOR SALE
        </h2>
      </div>

      {/* 2. 8-Piece Grid: 4 Columns x 2 Rows — Instagram Portrait 4:5 ratio */}
      <div className="w-full my-auto py-2 sm:py-3 flex justify-center">
        <div className="w-full max-w-[860px] xl:max-w-[920px] 2xl:max-w-[980px] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="art-card group flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedArtwork(art)}
            >
              {/* Artwork Instagram Portrait Box (4:5 Aspect Ratio) */}
              <div className="relative w-full aspect-[4/5] bg-neutral-200 overflow-hidden shadow-sm">
                <Image
                  src={art.src}
                  alt={art.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="art-card-img object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>

              {/* Centered TITLE & PRICE */}
              <div className="mt-2 sm:mt-2.5 text-center font-mono">
                <div className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-black leading-tight group-hover:opacity-75 transition-opacity">
                  {art.displayTitle}
                </div>
                <div className="text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-widest text-neutral-800 mt-0.5">
                  {art.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bottom Row: CONTACT ↗ at bottom right — Symmetrical with other sections */}
      <div className="w-full flex justify-end pt-1 sm:pt-2 mt-auto">
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

      {/* Artwork Lightbox / Inquire Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}
