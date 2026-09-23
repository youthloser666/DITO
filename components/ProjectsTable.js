"use client";

import { useState, useEffect } from "react";

export default function ProjectsTable({ onOpenShowreel }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Julien Pianetti's primary visual showcase cards (Screenshot 2)
  const visualCards = [
    {
      title: "Pullin",
      tagline: "E-Commerce & 3D Webflow",
      year: "2026",
      image: "https://cdn.prod.website-files.com/69e777e46f9af1f23fceb31b/6a4526ef66a699ad83e098f9_preload03.avif",
      videoUrl: "https://11jupian.b-cdn.net/runwise.mp4",
      link: "https://www.pull-in.com/",
    },
    {
      title: "Vision(s)",
      tagline: "Editorial & Typography CMS",
      year: "2026",
      image: "https://cdn.prod.website-files.com/69e777e46f9af1f23fceb31b/6a4526eecf9f8f18b977bd11_preload07.avif",
      videoUrl: "https://11jupian.b-cdn.net/volte_light-2.mp4",
      link: "#",
      badge: "View",
    },
    {
      title: "Parlez-moi de Paris",
      tagline: "Lifestyle & Travel Platform",
      year: "2026",
      image: "https://cdn.prod.website-files.com/69e777e46f9af1f23fceb31b/6a4526efcd6eb15ed40c1554_preload04.avif",
      videoUrl: "https://11jupian.b-cdn.net/editorial%2003.mp4",
      link: "https://www.parlezmoideparis.com/",
      flightBadge: "Paris (PAR) ⇄ Sydney (SYD)",
    },
  ];

  // Julien Pianetti's full selected works table (Blaed Agency list format)
  const selectedWorks = [
    {
      client: "PULLIN",
      event: "2026",
      city: "BIARRITZ",
      role: "UX/UI DESIGN / WEBFLOW DEVELOPMENT",
      videoUrl: "https://11jupian.b-cdn.net/runwise.mp4",
    },
    {
      client: "VISION(S)",
      event: "2026",
      city: "PARIS",
      role: "ART DIRECTION / WEBFLOW CMS",
      videoUrl: "https://11jupian.b-cdn.net/volte_light-2.mp4",
    },
    {
      client: "PARLEZ-MOI DE PARIS",
      event: "2026",
      city: "PARIS",
      role: "WEBFLOW PLATFORM / MOTION DESIGN",
      videoUrl: "https://11jupian.b-cdn.net/editorial%2003.mp4",
    },
    {
      client: "BAMO EXPERIENCE",
      event: "2025",
      city: "DIJON",
      role: "UI/UX DESIGN / 3D INTERACTIVE",
      videoUrl: "https://11jupian.b-cdn.net/poster%20animation.mp4",
    },
    {
      client: "VOYAGES E.LECLERC",
      event: "2025",
      city: "FRANCE",
      role: "DESIGN SYSTEM / ART DIRECTION",
      videoUrl: "https://11jupian.b-cdn.net/aliochaboi.mp4",
    },
    {
      client: "PICTURE ORGANIC CLOTHING",
      event: "2025",
      city: "ANNECY",
      role: "E-COMMERCE INTERFACE / WEBFLOW",
      videoUrl: "https://11jupian.b-cdn.net/runwise.mp4",
    },
    {
      client: "ULTRŌ AGENCY",
      event: "2025",
      city: "PARIS",
      role: "WEBFLOW DEVELOPMENT / INTERACTIONS",
      videoUrl: "https://11jupian.b-cdn.net/volte_light-2.mp4",
    },
    {
      client: "BELLE ALLURE",
      event: "2024",
      city: "DIJON",
      role: "UX/UI DESIGN / WEBFLOW CMS",
      videoUrl: "https://11jupian.b-cdn.net/poster%20animation.mp4",
    },
    {
      client: "KRAAFT",
      event: "2024",
      city: "PARIS",
      role: "WEBFLOW PLATFORM / MICRO-INTERACTIONS",
      videoUrl: "https://11jupian.b-cdn.net/editorial%2003.mp4",
    },
    {
      client: "HERVÉ",
      event: "2024",
      city: "PARIS",
      role: "DIGITAL INTERFACE / MOTION",
      videoUrl: "https://11jupian.b-cdn.net/aliochaboi.mp4",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="works" className="s-shows py-20 sm:py-28 border-b border-[var(--border-color)] relative">
      {/* Julien Pianetti Floating Awwwards Honors Badge (Screenshot 2 right edge) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center bg-black text-white px-2 py-4 text-[10px] font-mono tracking-widest uppercase pointer-events-none select-none">
        <span className="font-bold text-sm mb-1">W.</span>
        <span className="[writing-mode:vertical-lr] rotate-180 opacity-80">Honors</span>
      </div>

      <div className="w-full px-6 md:px-12">
        {/* Julien Pianetti Huge Graphic Title (Screenshot 2 exact style) */}
        <div className="mb-14 sm:mb-16">
          <h2
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.88] text-[var(--text-primary)] select-none"
            data-pointer-text="Discover"
          >
            Selected <br />
            works*
          </h2>
        </div>

        {/* Julien Pianetti 3-Column Visual Project Grid (Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {/* Card 1: Pullin */}
          <div
            onClick={onOpenShowreel}
            className="group relative aspect-[4/5] w-full overflow-hidden bg-stone-900 cursor-pointer border border-[var(--border-color)]"
            data-pointer-text="View"
          >
            <img
              src={visualCards[0].image}
              alt="Pullin Honolulu"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white font-mono text-xs">
              <span className="font-bold text-sm uppercase tracking-tight">{visualCards[0].title}</span>
              <span className="opacity-75">{visualCards[0].year}</span>
            </div>
          </div>

          {/* Card 2: Vision(s) with Central 'View' Badge */}
          <div
            onClick={onOpenShowreel}
            className="group relative aspect-[4/5] w-full overflow-hidden bg-yellow-400 cursor-pointer flex flex-col justify-between p-6 border border-[var(--border-color)]"
            data-pointer-text="View"
          >
            <div className="w-full flex justify-end">
              <span className="font-mono text-xs text-black font-semibold uppercase">{visualCards[1].year}</span>
            </div>

            {/* Center: Letter V & Floating View badge */}
            <div className="relative flex items-center justify-center my-auto">
              <span className="text-8xl sm:text-9xl font-black text-black select-none tracking-tighter">
                V
              </span>
              <div className="absolute w-16 h-16 rounded-full bg-white text-black font-mono text-xs font-bold uppercase flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                View
              </div>
            </div>

            <div className="text-black font-mono text-xs font-bold uppercase">
              {visualCards[1].title} — {visualCards[1].tagline}
            </div>
          </div>

          {/* Card 3: Parlez-moi de Paris with Flight Badge */}
          <div
            onClick={onOpenShowreel}
            className="group relative aspect-[4/5] w-full overflow-hidden bg-sky-900 cursor-pointer border border-[var(--border-color)]"
            data-pointer-text="View"
          >
            <img
              src={visualCards[2].image}
              alt="Travel & Airplane"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

            {/* Flight Pill Badge (Screenshot 2) */}
            <div className="absolute bottom-6 left-4 right-4 flex justify-center">
              <div className="px-4 py-2 rounded-full bg-blue-600/90 text-white font-mono text-xs flex items-center gap-3 backdrop-blur-sm shadow-lg group-hover:bg-blue-600 transition-colors">
                <span>Paris (PAR)</span>
                <span>⇄</span>
                <span>Sydney (SYD)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blaed Agency Table Layout for Remaining Selected Works */}
        <div className="border-t border-[var(--border-color)] divide-y divide-[var(--border-color)] pt-2">
          {selectedWorks.map((work, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredProject(work)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={onOpenShowreel}
              className="sb-show py-5 sm:py-6 grid grid-cols-12 gap-4 items-baseline cursor-pointer group hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] px-2 sm:px-4 transition-colors duration-150"
              data-pointer-text="Discover"
            >
              {/* Client Name */}
              <div className="col-span-6 sm:col-span-4 font-bold text-base sm:text-xl uppercase tracking-tight">
                {work.client}
              </div>

              {/* Event / Year */}
              <div className="col-span-6 sm:col-span-2 font-mono text-xs uppercase opacity-75 sm:opacity-100 text-right sm:text-left">
                {work.event}
              </div>

              {/* City */}
              <div className="hidden sm:block sm:col-span-2 font-mono text-xs uppercase opacity-60">
                {work.city}
              </div>

              {/* Role / Disciplines */}
              <div className="hidden sm:block sm:col-span-4 font-mono text-[11px] uppercase opacity-75 text-right">
                {work.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Video Preview Following Cursor (Julien Pianetti Signature) */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 hidden md:block"
          style={{
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y - 90}px`,
          }}
        >
          <div className="w-72 aspect-[4/3] overflow-hidden bg-black border border-white/20">
            <video
              src={hoveredProject.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
