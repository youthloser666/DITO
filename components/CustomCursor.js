"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHoveringTrigger, setIsHoveringTrigger] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);

  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only run on devices with a mouse
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const onMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check for data-pointer-text attribute (Julien Pianetti's exact selector)
      const trigger = e.target.closest("[data-pointer-text]");
      if (trigger) {
        const text = trigger.getAttribute("data-pointer-text");
        setCursorText(text || "Play");
        setIsHoveringTrigger(true);
      } else if (e.target.closest("a, button, [role='button']")) {
        setCursorText("");
        setIsHoveringTrigger(true);
      } else {
        setCursorText("");
        setIsHoveringTrigger(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let rafId;
    const update = () => {
      // Smooth lerp physics
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.22;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-wrap mbm-ex fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <div
        className={`pointer_button flex items-center justify-center rounded-full bg-white text-black transition-all duration-200 ease-out select-none ${
          cursorText
            ? "px-4 py-2 min-w-[70px] min-h-[32px] scale-100"
            : isHoveringTrigger
            ? "w-8 h-8 scale-110"
            : "w-3 h-3 scale-100"
        }`}
      >
        {cursorText ? (
          <span className="pointer_text font-mono text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap">
            {cursorText}
          </span>
        ) : null}
      </div>
    </div>
  );
}
