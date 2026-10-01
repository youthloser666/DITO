"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "latest-work", label: "[ EXHIBITIONS ]" },
  { id: "artist", label: "[ THE ARTIST ]" },
  { id: "art-for-sale", label: "[ THE ARTWORK ]" },
];

export default function SidebarNav({ activeSection = "latest-work" }) {
  const [current, setCurrent] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setCurrent(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (window.lenis) {
      window.lenis.scrollTo(target, { offset: 0, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Fixed Vertical Sidebar (Left) */}
      <aside
        aria-label="Sidebar Navigation"
        className="hidden md:flex fixed top-0 left-0 bottom-0 w-16 lg:w-20 flex-col justify-between items-center py-10 z-40 bg-[var(--bg-primary)] border-r border-[var(--border-color)] select-none"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group flex items-center justify-center h-44 w-full cursor-pointer transition-all duration-300 ${
                isActive ? "opacity-100 font-bold" : "opacity-45 hover:opacity-90"
              }`}
              title={item.label}
            >
              <span
                className={`vertical-nav-label tracking-[0.2em] transition-transform duration-300 ${
                  isActive ? "text-[var(--text-primary)] scale-105" : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </aside>

      {/* Mobile Top Navigation Bar */}
      <header
        aria-label="Mobile Navigation"
        className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] flex items-center justify-around px-4 z-40 select-none text-[11px] font-mono tracking-wider font-semibold"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`py-1 transition-opacity ${
                isActive ? "text-[var(--text-primary)] font-bold border-b border-[var(--accent-silver)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </header>
    </>
  );
}
