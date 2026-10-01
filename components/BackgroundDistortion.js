"use client";

import Image from "next/image";

const HIEROGLYPHS = [
  { char: "𓂀", top: "8%", left: "5%", size: "text-6xl", rotate: "-12deg" },
  { char: "𓃭", top: "22%", right: "8%", size: "text-5xl", rotate: "18deg" },
  { char: "𓅓", top: "55%", left: "12%", size: "text-7xl", rotate: "-5deg" },
  { char: "𓆣", top: "70%", right: "15%", size: "text-4xl", rotate: "25deg" },
  { char: "𓈖", top: "35%", left: "75%", size: "text-5xl", rotate: "-20deg" },
  { char: "𓊝", top: "85%", left: "40%", size: "text-6xl", rotate: "8deg" },
  { char: "𓋴", top: "15%", left: "55%", size: "text-4xl", rotate: "-30deg" },
  { char: "𓌙", top: "45%", right: "3%", size: "text-8xl", rotate: "15deg" },
  { char: "𓂀", top: "92%", left: "80%", size: "text-5xl", rotate: "-8deg" },
  { char: "𓃭", top: "60%", left: "30%", size: "text-3xl", rotate: "35deg" },
];

const DISTORTED_IMAGES = [
  { src: "/img/lates_dummy1.png", top: "5%", left: "-5%", width: 600, height: 800 },
  { src: "/img/lates_dummy2.png", top: "40%", right: "-8%", width: 500, height: 700 },
  { src: "/img/art1.png", top: "65%", left: "20%", width: 550, height: 750 },
];

export default function BackgroundDistortion() {
  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Distorted Exhibition Image Textures */}
      {DISTORTED_IMAGES.map((img, idx) => (
        <div
          key={`distort-${idx}`}
          className="absolute opacity-[0.03] mix-blend-screen grayscale blur-sm"
          style={{
            top: img.top,
            left: img.left,
            right: img.right,
            width: img.width,
            height: img.height,
          }}
        >
          <Image
            src={img.src}
            alt=""
            fill
            sizes="600px"
            className="object-cover"
          />
        </div>
      ))}

      {/* Scattered Hieroglyphic Decorative Elements */}
      {HIEROGLYPHS.map((glyph, idx) => (
        <span
          key={`glyph-${idx}`}
          className={`absolute ${glyph.size} opacity-[0.04] text-[var(--accent-silver)] font-moderniz select-none`}
          style={{
            top: glyph.top,
            left: glyph.left,
            right: glyph.right,
            transform: `rotate(${glyph.rotate})`,
          }}
        >
          {glyph.char}
        </span>
      ))}
    </div>
  );
}
