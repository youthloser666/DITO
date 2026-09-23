"use client";

export default function AboutStatement() {
  return (
    <section id="about" className="s-about py-20 sm:py-28 border-b border-[var(--border-color)]">
      <div className="w-full px-6 md:px-12 max-w-5xl">
        <div className="space-y-6 text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-[var(--text-secondary)]">
          <p className="text-[var(--text-primary)]">
            Independent designer in Dijon creating custom digital interfaces. Developing on Webflow and passionate about motion design with 15 years of industry experience.
          </p>
          <p>
            Offering a full-service digital approach, guiding clients from strategic UX architecture to meticulous visual execution, interactive prototypes, and production-ready Webflow platforms.
          </p>
          <p>
            Dedicated to creating unique content and motion choreography that embodies and elevates each brand’s identity, with attention to typography, micro-interactions, and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
