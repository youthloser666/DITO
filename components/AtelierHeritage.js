"use client";

export default function AtelierHeritage() {
  const pillars = [
    {
      title: "15 Years Experience",
      text: "Crafting digital interfaces, art direction, and interaction systems since 2011. Bridging technical web development with refined aesthetic sensibility.",
    },
    {
      title: "Webflow Development",
      text: "Developing clean, semantic, production-ready Webflow platforms with advanced CMS architecture, client autonomy, and stellar speed scores.",
    },
    {
      title: "Motion & Animation",
      text: "Passionate about motion design, GSAP timeline choreography, 3D key visual rendering, and interactive micro-interactions that bring screens to life.",
    },
    {
      title: "Accolades & Recognition",
      text: "Awwwards Site of the Day Winner, CSS Design Awards Special Kudos, and international design nominations across European digital culture.",
    },
  ];

  return (
    <section id="heritage" className="s-heritage py-20 sm:py-28 border-b border-[var(--border-color)]">
      <div className="w-full px-6 md:px-12">
        {/* Top Content: Title + Philosophy Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]"
              data-pointer-text="Heritage"
            >
              Our Heritage
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
            <p>
              Julien Pianetti operates as an independent design and motion atelier from Dijon, France. Collaborating directly with founders, creative agencies, and luxury brands worldwide.
            </p>
            <p>
              Our ethos unites high-fashion editorial rigor with Swiss digital precision, ensuring every bespoke interface runs with fluidity, typographic distinction, and technical endurance.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid: Blaed exact layout without cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[var(--border-color)] pt-10">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-primary)] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
