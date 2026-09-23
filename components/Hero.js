"use client";

import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

export default function Hero({ onOpenShowreel }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-[var(--border-color)]">
      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (Exact Reference: Screenshot 2)                            */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full h-[100vh] min-h-[700px] max-h-[960px] bg-white">
        {/* 1. The Enlarged Video Canvas: Stretches across the right 66% width, from top (y=0) to bottom (100vh) */}
        <div className="absolute top-0 right-0 w-[66%] h-full overflow-hidden bg-black z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[65%_center] cursor-pointer"
            onClick={onOpenShowreel}
            data-pointer-text="Play"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source
              src="https://blaedagency.com/wp-content/uploads/2025/09/blaed-agency-hero-hd.mp4"
              type="video/mp4"
            />
          </video>

          {/* Top Right Black Square Menu Toggle (Exact Screenshot 2) */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute top-0 right-0 w-14 h-14 bg-black flex flex-col items-center justify-center gap-1.5 cursor-pointer z-30 transition-opacity hover:opacity-80"
            data-pointer-text="Menu"
            role="button"
            aria-label="Toggle Navigation Menu"
          >
            <span className="w-6 h-[2px] bg-white block" />
            <span className="w-6 h-[2px] bg-white block" />
          </div>
        </div>

        {/* 2. Top-Left BLÆD Logo Box: Overlays from 0% to 68% width, pure white background, bleeding into the video! */}
        <div className="absolute top-0 left-0 w-[68%] z-20 bg-white pt-5 pb-3 pl-8 xl:pl-10 pr-6">
          {/* Exact BLÆD Vector Logo */}
          <div className="w-full max-w-[840px] text-black">
            <svg
              viewBox="0 0 1241 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M0.130859 0.455796L198.945 0.415039C218.394 2.17779 240.233 5.48931 255.634 18.2769C279.63 38.197 280.805 78.0983 254.53 96.6733C249.748 100.056 243.779 101.829 239.272 105.395C267.877 111.978 284.372 136.646 278.853 165.757C272.895 197.119 241.807 208.684 213.253 211.415L0.130859 211.374L0.130859 0.455796ZM94.1523 84.008H162.113C162.706 84.008 169.369 81.6645 170.473 81.1347C181.367 75.826 182.655 59.7371 172.527 53.2466C168.439 50.6279 158.639 48.3455 153.938 48.3455H95.6853L94.1523 49.8739V84.008ZM94.1523 163.485H164.157C165.251 163.485 171.904 161.997 173.417 161.508C188.215 156.831 189.615 136.157 175.593 129.666C174.459 129.136 167.826 126.803 167.223 126.803H94.1523V163.485Z"
                fill="#100F0E"
              />
              <path
                d="M395.635 0.45575V144.125H522.359V211.374H301.613V0.45575H395.635Z"
                fill="#100F0E"
              />
              <path
                d="M928.081 0.45575V56.4969H827.928V79.9323H916.84V125.275L915.307 126.803H827.928V154.824L829.461 156.352H931.147V211.374H735.951V182.844H652.66L633.242 211.374H528.49L669.011 0.45575H928.081ZM736.973 44.2697L677.698 134.954H736.973V44.2697Z"
                fill="#100F0E"
              />
              <path
                d="M951.588 211.374V0.455796L1123.83 0.415039C1183.94 3.49221 1235.76 31.4007 1239.84 96.6937C1244.29 167.988 1198.7 205.994 1130.98 211.415L951.588 211.374ZM1042.54 150.238H1103.35C1137.61 150.238 1159.06 115.921 1143.91 85.3428C1138.02 73.4315 1120.79 62.6105 1107.44 62.6105H1042.54V150.238Z"
                fill="#100F0E"
              />
            </svg>
          </div>

          {/* Ticker Line Directly Underneath BLÆD Logo (Exact Screenshot 2) */}
          <div className="mt-3 pt-2.5 border-t border-black/15 overflow-hidden w-full">
            <div className="flex items-center gap-4 font-mono text-[11px] xl:text-[12px] uppercase tracking-widest text-black/90 whitespace-nowrap">
              <span>COLLECTION COORDINATION</span>
              <span>•</span>
              <span>SHOOTING MANAGEMENT</span>
              <span>•</span>
              <span>STAFFING</span>
              <span>•</span>
              <span>PRODUCTION</span>
              <span>•</span>
              <span>COLLECTION COORDINATION</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom-Left Caption: Sits beside the enlarged video (Exact Screenshot 2) */}
        <div className="absolute bottom-0 left-0 w-[34%] z-10 bg-white pl-8 xl:pl-10 pr-4 pb-8 xl:pb-12 flex flex-col justify-end">
          <h1 className="text-5xl xl:text-6xl 2xl:text-[5rem] font-bold uppercase tracking-tighter leading-[0.86] text-black select-none">
            BEHIND <br />
            EVERY <br />
            FASHION <br />
            MOMENT
          </h1>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE LAYOUT (Exact Reference: Screenshot 1)                             */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full min-h-[100dvh] h-[100dvh] bg-white flex flex-col justify-between px-4 pt-3 pb-4">
        {/* Top Header Bar: BLÆD Logo + Black Square Menu Toggle + Ticker */}
        <div className="w-full shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 max-w-[270px] sm:max-w-[320px] text-black">
              <svg
                viewBox="0 0 1241 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <path
                  d="M0.130859 0.455796L198.945 0.415039C218.394 2.17779 240.233 5.48931 255.634 18.2769C279.63 38.197 280.805 78.0983 254.53 96.6733C249.748 100.056 243.779 101.829 239.272 105.395C267.877 111.978 284.372 136.646 278.853 165.757C272.895 197.119 241.807 208.684 213.253 211.415L0.130859 211.374L0.130859 0.455796ZM94.1523 84.008H162.113C162.706 84.008 169.369 81.6645 170.473 81.1347C181.367 75.826 182.655 59.7371 172.527 53.2466C168.439 50.6279 158.639 48.3455 153.938 48.3455H95.6853L94.1523 49.8739V84.008ZM94.1523 163.485H164.157C165.251 163.485 171.904 161.997 173.417 161.508C188.215 156.831 189.615 136.157 175.593 129.666C174.459 129.136 167.826 126.803 167.223 126.803H94.1523V163.485Z"
                  fill="#100F0E"
                />
                <path
                  d="M395.635 0.45575V144.125H522.359V211.374H301.613V0.45575H395.635Z"
                  fill="#100F0E"
                />
                <path
                  d="M928.081 0.45575V56.4969H827.928V79.9323H916.84V125.275L915.307 126.803H827.928V154.824L829.461 156.352H931.147V211.374H735.951V182.844H652.66L633.242 211.374H528.49L669.011 0.45575H928.081ZM736.973 44.2697L677.698 134.954H736.973V44.2697Z"
                  fill="#100F0E"
                />
                <path
                  d="M951.588 211.374V0.455796L1123.83 0.415039C1183.94 3.49221 1235.76 31.4007 1239.84 96.6937C1244.29 167.988 1198.7 205.994 1130.98 211.415L951.588 211.374ZM1042.54 150.238H1103.35C1137.61 150.238 1159.06 115.921 1143.91 85.3428C1138.02 73.4315 1120.79 62.6105 1107.44 62.6105H1042.54V150.238Z"
                  fill="#100F0E"
                />
              </svg>
            </div>

            {/* Mobile Top Right Black Square Menu Toggle (Exact Screenshot 1) */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 bg-black flex flex-col items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-opacity hover:opacity-80"
              data-pointer-text="Menu"
              role="button"
              aria-label="Toggle Navigation Menu"
            >
              <span className="w-5 h-[1.5px] bg-white block" />
              <span className="w-5 h-[1.5px] bg-white block" />
            </div>
          </div>

          {/* Subtitle / Ticker Line Directly Underneath BLÆD Logo (Screenshot 1) */}
          <div className="mt-2 pt-2 border-t border-black/15 overflow-hidden w-full">
            <div className="font-mono text-[10px] tracking-wider uppercase text-black truncate opacity-90">
              SHOOTING MANAGEMENT • STAFFING • PRODUCTION
            </div>
          </div>
        </div>

        {/* Center: Framed Portrait Video Canvas (Exact Screenshot 1 with white side margins) */}
        <div className="w-full flex-1 my-2 min-h-0 overflow-hidden bg-black relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[center_top]"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source
              src="https://blaedagency.com/wp-content/uploads/2025/09/blaed-agency-hero-hd.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Bottom: Caption Directly Below Video (Exact Screenshot 1) */}
        <div className="w-full shrink-0 pt-1 pb-1">
          <h1 className="text-3xl xs:text-4xl font-bold uppercase tracking-tighter leading-[0.92] text-black select-none">
            BEHIND EVERY <br />
            FASHION MOMENT
          </h1>
        </div>
      </div>

      {/* Slide-out / Dropdown Menu Overlay (Julien Pianetti Navigation Links) */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col justify-between p-8 sm:p-14 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/20 pb-5">
            <span className="font-mono text-xs uppercase tracking-widest text-white/60">
              Navigation
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white hover:opacity-70 transition-opacity"
              data-pointer-text="Close"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-6 sm:gap-10 font-sans text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            <a
              href="#works"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-50 transition-opacity flex items-center justify-between group"
            >
              <span>Selected Works</span>
              <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-50 transition-opacity flex items-center justify-between group"
            >
              <span>About Julien</span>
              <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#savoir-faire"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-50 transition-opacity flex items-center justify-between group"
            >
              <span>Savoir-Faire</span>
              <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#heritage"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-50 transition-opacity flex items-center justify-between group"
            >
              <span>Playground</span>
              <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-50 transition-opacity flex items-center justify-between group"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-white/70">
            <a
              href="mailto:jupian@gmail.com"
              className="hover:text-white transition-colors"
            >
              jupian@gmail.com
            </a>
            <span>Dijon, France • Available for select projects worldwide</span>
          </div>
        </div>
      )}
    </section>
  );
}
