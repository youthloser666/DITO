"use client";

export default function PlaygroundMarquee({ onOpenShowreel }) {
  // Julien Pianetti's actual playground items
  const items = [
    {
      title: "Poster animation",
      src: "https://11jupian.b-cdn.net/poster%20animation.mp4",
    },
    {
      title: "Aliocha Boi",
      src: "https://11jupian.b-cdn.net/aliochaboi.mp4",
    },
    {
      title: "Editorial 03",
      src: "https://11jupian.b-cdn.net/editorial%2003.mp4",
    },
    {
      title: "Volte",
      src: "https://11jupian.b-cdn.net/volte_light-2.mp4",
    },
    {
      title: "RunWise motion",
      src: "https://11jupian.b-cdn.net/runwise.mp4",
    },
    {
      title: "Oblique typography",
      src: "https://11jupian.b-cdn.net/poster%20animation.mp4",
    },
  ];

  const marqueeItems = [...items, ...items];

  return (
    <section id="playground" className="py-20 sm:py-28 border-b border-[var(--border-color)] overflow-hidden">
      <div className="w-full px-6 md:px-12 mb-10 flex items-baseline justify-between">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]"
          data-pointer-text="Playground"
        >
          Playground
        </h2>
        <span className="font-mono text-xs text-[var(--text-muted)] uppercase">
          [Experiments & Motion]
        </span>
      </div>

      {/* Infinite Horizontal Running Marquee */}
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex items-start gap-8">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              onClick={onOpenShowreel}
              className="flex-shrink-0 w-64 sm:w-80 cursor-pointer group"
              data-pointer-text="Playground"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black border border-[var(--border-color)]">
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="mt-3 font-mono text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
