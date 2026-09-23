"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ArtworkModal({ artwork, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (artwork) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#f5f5f5] text-black border border-black grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-lg font-mono p-2 hover:opacity-50 transition-opacity bg-[#f5f5f5]/80 cursor-pointer"
          aria-label="Close artwork details"
        >
          [ ✕ ]
        </button>

        {/* Artwork Image Side */}
        <div className="md:col-span-7 relative bg-neutral-900 aspect-square flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-black/20">
          <Image
            src={artwork.src}
            alt={artwork.title}
            width={700}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Details Side */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between font-mono">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-neutral-500">
              [ ART FOR SALE • UNIQUE PIECE ]
            </span>
            <h3 className="text-2xl font-bold uppercase tracking-tight mt-1 text-black">
              {artwork.title}
            </h3>
            <div className="text-lg font-bold text-neutral-900 mt-2">
              {artwork.price}
            </div>

            <div className="mt-6 space-y-3 text-xs border-t border-black/15 pt-6 text-neutral-700">
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                  Medium
                </span>
                <span>{artwork.medium || "Mixed media on archival photograph, acrylic & oil pastel"}</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                  Dimensions
                </span>
                <span>{artwork.dimensions || "60 × 60 cm (Framed)"}</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                  Year & Location
                </span>
                <span>2024 • Belgrade, Serbia</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                  Authenticity
                </span>
                <span>Signed & numbered by DITO with Certificate of Authenticity</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black/15">
            <a
              href={`mailto:andyjaviito@gmail.com?subject=Inquiry%20for%20Artwork:%20${encodeURIComponent(
                artwork.title
              )}&body=Hello%20Dito,%0A%0AI%20am%20interested%20in%20acquiring%20'${encodeURIComponent(
                artwork.title
              )}'%20(${artwork.price}).%20Please%20let%20me%20know%20availability%20and%20shipping%20options.`}
              className="w-full inline-block text-center py-3.5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Inquire to Purchase ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
