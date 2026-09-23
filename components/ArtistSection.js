"use client";

import Image from "next/image";

export default function ArtistSection({ onOpenContact }) {
  return (
    <section
      id="artist"
      className="relative w-full bg-[#f5f5f5] text-black border-b border-[var(--border-color)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left Side: Gritty Black & White Artist Portrait — FULL HEIGHT */}
        <div className="lg:col-span-4 xl:col-span-4 relative min-h-[550px] lg:min-h-0 lg:h-auto bg-neutral-950 overflow-hidden">
          <Image
            src="/img/artist_photo.png"
            alt="Andy Javier Bravo Castaño (DITO)"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover object-center grayscale contrast-125 brightness-95 filter select-none"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Editorial Grid */}
        <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 pt-6 sm:pt-8 md:pt-9 lg:pt-9 xl:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-12 xl:pb-14 min-h-screen overflow-hidden">
          
          {/* Top Editorial Area: Left (DTO) | Right (Text 1 + Text 3 & Text 2) */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 xl:gap-10">
            
            {/* Column A (Left): DTO Logo */}
            <div className="w-full lg:w-[200px] xl:w-[240px] 2xl:w-[260px] shrink-0 pt-0.5">
              <h1 className="font-moderniz-dto text-[2.8rem] sm:text-[3.4rem] md:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.8rem] 2xl:text-[5.2rem] leading-[0.82] tracking-[-0.24em] select-none text-black">
                DTO
              </h1>
            </div>

            {/* Column B (Right): Text 1 (top) + [Text 3 (Andy) & Text 2 (Vision)] (below) */}
            <div className="flex-1 min-w-0 flex flex-col justify-start">
              
              {/* TEXT 1 — Header uppercase block (Ultra-tight leading for solid unified effect) */}
              <div className="w-full">
                <p className="font-acumin font-bold text-black uppercase text-justify leading-[0.88] sm:leading-[0.88] xl:leading-[0.89] tracking-[-0.012em] text-[0.80rem] sm:text-[0.92rem] md:text-[1.02rem] lg:text-[1.12rem] xl:text-[1.20rem] 2xl:text-[1.26rem]">
                  IS THE ARTISTIC IDENTITY OF CUBAN PHOTOGRAPHER AND VISUAL ARTIST ANDY JAVIER BRAVO CASTAÑO (DITO).WORKING BETWEEN DOCUMENTARY PHOTOGRAPHY AND PAINTERLY INTERVENTION, HE TRANSFORMS FRAGMENTS OF BELGRADE INTO REFLECTIONS ON MEMORY, PERCEPTION, AND HUMAN EXPERIENCE.BORN FROM A JOURNEY BETWEEN CUBA AND SERBIA, HIS WORK EXPLORES HOW REALITY CAN BE REIMAGINED — TURNING WOUNDS INTO COLOR, EXPERIENCE INTO AWARENESS, AND OBSERVATION INTO TRANSFORMATION.A DOCUMENTED REALITY. A TRANSFORMED MEMORY. AN ALTERED PERCEPTION.
                </p>
              </div>

              {/* Lower Section: TEXT 3 / Andy Bio (left) + TEXT 2 / Vision (right) — Flush Right with Text 1 */}
              <div className="w-full flex flex-col sm:flex-row items-start justify-end mt-4 sm:mt-5 lg:mt-6 xl:mt-7">
                
                {/* TEXT 3: Andy Bio — Slender column, long downwards, tight with Text 2 */}
                <div className="w-full sm:w-[230px] md:w-[245px] lg:w-[260px] xl:w-[280px] 2xl:w-[295px] shrink-0 pt-3 sm:pt-6 lg:pt-8 xl:pt-12 2xl:pt-14">
                  <p className="font-acumin font-bold text-black text-justify text-[0.62rem] sm:text-[0.68rem] md:text-[0.72rem] lg:text-[0.76rem] xl:text-[0.80rem] 2xl:text-[0.84rem] leading-[1.15] tracking-normal">
                    Andy Javier Bravo Castaño — DitoAndy Javier Bravo Castaño, known artistically as Dito, is a Cuban photographer and visual artist born in Havana in 1995. With more than a decade of experience in photography, his practice explores the relationship between reality, memory, perception, and personal transformation.His artistic journey began in Cuba, where photography became a way of observing and processing a complex reality. After arriving in Belgrade, Serbia, in 2022, his perspective shifted. The city, its people, history, contrasts, and energy opened a new chapter in his creative language.Dito works primarily with documentary and street photography, using predominantly black-and-white images of Belgrade as the foundation of his work. He then intervenes directly onto the photographic surface with paint and color, creating a dialogue between what was captured and what can still be transformed.His practice, closely related to overpainting photography, is not about altering reality for decoration.
                  </p>
                </div>

                {/* TEXT 2: Vision — Slender column, long downwards, tight spacing with Text 3, flush right with Text 1 */}
                <div className="w-full sm:w-[235px] md:w-[250px] lg:w-[265px] xl:w-[285px] 2xl:w-[300px] shrink-0 ml-0 sm:ml-3 md:ml-4 lg:ml-5 xl:ml-6 2xl:ml-7">
                  <p className="font-acumin font-bold text-black text-justify text-[0.62rem] sm:text-[0.68rem] md:text-[0.72rem] lg:text-[0.76rem] xl:text-[0.80rem] 2xl:text-[0.84rem] leading-[1.15] tracking-normal">
                    It is about questioning how reality is perceived.For Dito, every difficult experience contains the possibility of becoming something else: a new perspective, a moment of calm, an idea, or a form of growth. His work emerges from this constant process of observation and transformation.Belgrade — the White City — becomes both subject and canvas. A city carrying its own history and wounds, yet constantly changing. Through his interventions, Dito imagines new possibilities for the places and people he encounters, leaving his own visual trace upon the city.At the center of DTO&apos;s work is the human being: the possibility of seeing oneself differently. His art seeks to awaken self-awareness, personal power, and the courage to transform one&apos;s own perception.His expression is not born from an academic institution, but from experience, intuition, and a deeply human search for inner peace.A documented reality. A transformed memory. AN altered perception.DTO is an invitation to look again.Because sometimes, changing the way we see the world is the first step toward changing the world within us.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Row: 3D Metallic Symbol Charm (Left) + CONTACT ↗ (Right) — Symmetrical at bottom, raised with breathing room */}
          <div className="w-full flex items-end justify-between pt-4 mt-auto">
            {/* 3D Metallic Symbol Charm — at bottom left, under DTO */}
            <div className="w-14 sm:w-16 lg:w-20 xl:w-24">
              <Image
                src="/img/dto_symbol.png"
                alt="DTO Metallic Glyph Symbol"
                width={166}
                height={270}
                className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 select-none"
              />
            </div>

            {/* CONTACT ↗ — at bottom right, flush with right margin, symmetrical with other pages */}
            <button
              onClick={onOpenContact}
              className="group cursor-pointer hover:opacity-60 transition-opacity inline-flex items-center gap-1.5"
              title="Open Contact Inquiries"
              aria-label="Contact DTO"
            >
              <span className="font-moderniz text-base sm:text-lg xl:text-xl tracking-[-0.02em] select-none text-black">
                CONTACT
              </span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="8 6 18 6 18 16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
