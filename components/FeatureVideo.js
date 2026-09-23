"use client";

export default function FeatureVideo({ onOpenShowreel }) {
  return (
    <section className="s-blaed py-20 sm:py-28 border-b border-[var(--border-color)]">
      <div className="w-full px-6 md:px-12">
        {/* Full-width video container */}
        <div
          onClick={onOpenShowreel}
          className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-black cursor-pointer group border border-[var(--border-color)] mb-8"
          data-pointer-text="Play"
        >
          <video
            src="https://11jupian.b-cdn.net/SHOWREEL-jupian.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
            <div className="px-5 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-widest group-hover:scale-105 transition-transform">
              Watch Showreel
            </div>
          </div>
        </div>

        {/* Blaed Philosophy statement beneath video */}
        <p className="max-w-3xl text-lg sm:text-2xl text-[var(--text-secondary)] font-normal leading-relaxed">
          Crafting bespoke digital interfaces where motion design elevates functional layouts into memorable visual artifacts. 15 years of technical rigor and creative devotion.
        </p>
      </div>
    </section>
  );
}
