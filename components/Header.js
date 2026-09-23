"use client";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-5 sm:py-6 flex items-center justify-between text-xs sm:text-sm font-sans tracking-tight blend-exclusion text-white pointer-events-none select-none">
      {/* Left: Julien Pianetti */}
      <div className="pointer-events-auto">
        <a
          href="#"
          className="font-medium hover:opacity-60 transition-opacity"
          data-pointer-text="Top"
        >
          Julien Pianetti
        </a>
      </div>

      {/* Center: Work, About, Playground (Exact Julien Pianetti format) */}
      <div className="pointer-events-auto flex items-center gap-1 font-normal text-xs sm:text-sm">
        <a
          href="#works"
          className="hover:opacity-60 transition-opacity"
          data-pointer-text="Works"
        >
          Work,
        </a>
        <a
          href="#about"
          className="hover:opacity-60 transition-opacity"
          data-pointer-text="About"
        >
          About,
        </a>
        <a
          href="#heritage"
          className="hover:opacity-60 transition-opacity"
          data-pointer-text="Playground"
        >
          Playground
        </a>
      </div>

      {/* Right: Direct Email */}
      <div className="pointer-events-auto">
        <a
          href="mailto:jupian@gmail.com"
          className="hover:opacity-60 transition-opacity"
          data-pointer-text="Mail"
        >
          jupian@gmail.com
        </a>
      </div>
    </nav>
  );
}
