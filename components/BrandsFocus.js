"use client";

import { useState } from "react";

export default function BrandsFocus() {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  // Julien Pianetti's actual brands & clients
  const brands = [
    "Pullin",
    "Vision(s)",
    "Parlez-moi de Paris",
    "BAMO Experience",
    "Voyages E.Leclerc",
    "Picture Organic Clothing",
    "Ultrō Agency",
    "Belle Allure",
    "Kraaft",
    "Hervé",
    "HVC Premium",
  ];

  return (
    <section id="brands" className="py-20 sm:py-28 border-b border-[var(--border-color)]">
      <div className="w-full px-6 md:px-12">
        <div className="flex items-baseline justify-between mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]"
            data-pointer-text="Clients"
          >
            Brands
          </h2>
          <span className="font-mono text-xs text-[var(--text-muted)] uppercase">
            [Client Roster]
          </span>
        </div>

        {/* Julien Pianetti Signature: Brand Text Cluster with 0.2 Hover Dimming */}
        <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 pt-4">
          {brands.map((brand, idx) => {
            const isHovered = hoveredBrand === brand;
            const hasHover = hoveredBrand !== null;
            const isDimmed = hasHover && !isHovered;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredBrand(brand)}
                onMouseLeave={() => setHoveredBrand(null)}
                className="flex items-center gap-6 sm:gap-10 cursor-pointer"
                data-pointer-text="Client"
              >
                <span
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight transition-opacity duration-200 select-none ${
                    isDimmed
                      ? "opacity-15"
                      : isHovered
                      ? "opacity-100"
                      : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {brand}
                </span>

                {idx < brands.length - 1 && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] transition-opacity duration-200 ${
                      isDimmed ? "opacity-15" : "opacity-40"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
