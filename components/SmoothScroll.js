"use client";

export default function SmoothScroll({ children }) {
  // In single-page (1page) mode with recent-apps zoom transitions,
  // native body scrolling is disabled and handled via viewport transitions.
  return <>{children}</>;
}
