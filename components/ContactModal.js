"use client";

import { useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#f5f5f5] text-black border border-black p-8 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-xl font-mono p-2 hover:opacity-50 transition-opacity cursor-pointer"
          aria-label="Close modal"
        >
          [ ✕ ]
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            [ DIRECT CONTACT ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tighter mt-1">
            Andy Javier Bravo (DITO)
          </h2>
          <p className="text-xs font-mono text-neutral-600 mt-2">
            Visual Artist & Photographer • Havana / Belgrade
          </p>
        </div>

        {/* Contact links */}
        <div className="space-y-6 font-mono text-sm border-t border-black/15 pt-6">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1">
              Email (Inquiries & Acquisitions)
            </div>
            <a
              href="mailto:andyjaviito@gmail.com"
              className="text-base sm:text-lg font-bold text-black hover:underline underline-offset-4 flex items-center gap-2"
            >
              <span>andyjaviito@gmail.com</span>
              <span>↗</span>
            </a>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1">
              Instagram
            </div>
            <a
              href="https://www.instagram.com/andyjaviito/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-black hover:underline underline-offset-4 flex items-center gap-2"
            >
              <span>@andyjaviito</span>
              <span>↗</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/10 text-xs">
            <div>
              <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                Studio I
              </div>
              <div className="font-bold text-black mt-0.5">Belgrade, Serbia</div>
              <div className="text-neutral-600 text-[11px]">Primary Workspace</div>
            </div>
            <div>
              <div className="text-neutral-500 uppercase tracking-wider text-[10px]">
                Studio II
              </div>
              <div className="font-bold text-black mt-0.5">Havana, Cuba</div>
              <div className="text-neutral-600 text-[11px]">Archive & Origins</div>
            </div>
          </div>
        </div>

        {/* Direct mail button */}
        <div className="mt-8 pt-4">
          <a
            href="mailto:andyjaviito@gmail.com?subject=Art%20Acquisition%20Inquiry%20-%20DTO"
            className="w-full inline-block text-center py-3.5 bg-black text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Compose Email Inquiry ↗
          </a>
        </div>
      </div>
    </div>
  );
}
