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
      className="relative w-full h-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background & Hero Text Texture Overlay — Enabled on Desktop & Mobile, sits behind artwork images */}
      <div className="texture-bg-layer z-10" aria-hidden="true" />

      {/* 1. Header: 'THE ARTWORK' */}
      <div className="relative z-0 w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 pt-20 sm:pt-24 md:pt-26 lg:pt-28 pb-1 sm:pb-2">
        <h2 className="font-moderniz-head text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.4rem] xl:text-[5rem] leading-[0.88] text-right select-none whitespace-nowrap tracking-[-0.24em] [word-spacing:0.45em] text-[var(--text-primary)]">
          THE ARTWORK
        </h2>
      </div>

      {/* 2. 8-Piece Grid: 4 Columns x 2 Rows — Placed at z-20 so artwork images are clean & not covered by texture */}
      <div className="relative z-20 w-full flex-1 min-h-0 px-6 sm:px-10 lg:px-14 xl:px-20 flex justify-center overflow-y-auto hide-scrollbar pb-24 sm:pb-28">
        <div className="w-full max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1760px] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 my-auto pt-2 pb-6">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="art-card group relative flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedArtwork(art)}
            >
              {/* Artwork Instagram Portrait Box (4:5 Aspect Ratio) */}
              <div className="relative w-full aspect-[4/5] bg-[var(--bg-surface)] overflow-hidden art-glow rounded-sm border border-white/[0.06] group-hover:border-white/20 transition-all duration-500">
                <Image
                  src={art.src}
                  alt={art.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="art-card-img object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.05] transition-colors duration-500" />
              </div>

              {/* Centered TITLE & PRICE */}
              <div className="mt-2 sm:mt-2.5 text-center font-mono select-none">
                <div className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-[var(--text-primary)] leading-tight group-hover:opacity-75 transition-opacity">
                  {art.displayTitle}
                </div>
                <div className="text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mt-0.5">
                  {art.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bottom Row: DTO Logo (Left) + CONTACT ↗ (Right) with Negative Inverted Blend Effect floating over bleeding artworks */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 pb-5 sm:pb-6 md:pb-8 flex items-end justify-between pointer-events-none mix-blend-difference text-white">
        <div className="w-10 sm:w-12 lg:w-14 pointer-events-auto mix-blend-difference">
          <Image
            src="/img/dto_symbol.png"
            alt="DTO Symbol"
            width={166}
            height={270}
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 select-none filter brightness-0 invert"
          />
        </div>

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

      {/* Artwork Lightbox / Inquire Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}
