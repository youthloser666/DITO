"use client";

import { useSyncExternalStore } from "react";

function subscribeClock(callback) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getClockSnapshot() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}  ${minutes}`;
}

function getServerClockSnapshot() {
  return "01  37";
}

export default function Navbar({ activeIndex = 0, onSelectSection }) {
  const timeStr = useSyncExternalStore(subscribeClock, getClockSnapshot, getServerClockSnapshot);

  const navItems = [
    { id: "latest-work", label: "EXHIBITIONS", index: 0 },
    { id: "art-for-sale", label: "THE ARTWORK", index: 1 },
    { id: "artist", label: "THE ARTIST", index: 2 },
  ];

  return (
    <header
      aria-label="Main Navigation"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent border-none select-none pointer-events-none"
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-5 lg:py-6 pointer-events-auto">
        <div className="navbar-grid">
          {/* Columns 1-8: Left & Center area (Brandon Yasin and Signature removed) */}
          <div className="hidden md:block col-span-7 lg:col-span-8" aria-hidden="true" />

          {/* Column 9-11 (approx 65%-75% across screen):
              EXHIBITIONS, THE ARTWORK, THE ARTIST in Acumin font with NO dot */}
          <nav
            aria-label="Site Sections"
            className="navbar-links flex flex-col items-start gap-1 font-acumin uppercase tracking-[0.14em] text-[11px] sm:text-[12px]"
          >
            {navItems.map((item) => {
              const isActive = activeIndex === item.index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectSection && onSelectSection(item.index)}
                  className={`transition-all duration-200 cursor-pointer text-left leading-[1.2] ${
                    isActive
                      ? "text-[var(--text-primary)] font-bold opacity-100"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] opacity-50 hover:opacity-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Column 13-14 (Far right):
              LOCAL TIME in Acumin font */}
          <div
            className="navbar-time flex flex-col items-end md:items-start gap-1 font-acumin uppercase tracking-[0.14em] text-[11px] sm:text-[12px] select-none"
            aria-label="Local Time Clock"
          >
            <span className="text-[var(--text-muted)] text-[10px] sm:text-[11px] tracking-[0.14em] leading-[1.2]">
              LOCAL TIME
            </span>
            <span
              suppressHydrationWarning
              className="font-acumin text-[11px] sm:text-[12px] tracking-[0.25em] text-[var(--text-primary)] leading-[1.2]"
            >
              {timeStr}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
