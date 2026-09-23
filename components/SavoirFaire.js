"use client";

export default function SavoirFaire() {
  const services = [
    {
      index: "01.",
      title: "UX/UI Design",
      deliverables: [
        "User Experience & Journey Architecture",
        "Wireframing & Interactive Prototyping",
        "Design Systems & Token Libraries",
        "High-Fidelity Interface Design",
      ],
    },
    {
      index: "02.",
      title: "Webflow Development",
      deliverables: [
        "Production-Grade Responsive Builds",
        "Advanced Webflow CMS Architecture",
        "Custom JavaScript & Third-Party APIs",
        "Speed Optimization & Clean Code",
      ],
    },
    {
      index: "03.",
      title: "Motion Design",
      deliverables: [
        "Interactive Animations & Micro-interactions",
        "3D Renderings & Key Visual Studies",
        "GSAP Timeline Choreography",
        "Video Showreel Directing & Editing",
      ],
    },
    {
      index: "04.",
      title: "Art Direction",
      deliverables: [
        "Visual Brand Systems & Guidelines",
        "Typography Pairing & Editorial Art",
        "Digital Campaign Creative Direction",
        "Post-Production & Content Retouching",
      ],
    },
  ];

  return (
    <section id="savoir-faire" className="s-savoir-faire py-20 sm:py-28 border-b border-[var(--border-color)]">
      <div className="w-full px-6 md:px-12">
        {/* Blaed Section Title */}
        <div className="mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]"
            data-pointer-text="Services"
          >
            Savoir<span className="opacity-40">-</span>Faire
          </h2>
        </div>

        {/* 4 Columns Grid (Blaed exact structure with Julien's services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[var(--border-color)] pt-10">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[var(--text-muted)] block mb-4">
                  {service.index}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--text-primary)] mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] font-mono leading-relaxed">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="opacity-80 hover:opacity-100 transition-opacity">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
