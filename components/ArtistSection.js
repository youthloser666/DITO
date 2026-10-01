"use client";

import Image from "next/image";

export default function ArtistSection({ onOpenContact }) {
  return (
    <section
      id="artist"
      className="relative w-full h-full bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden"
    >
      {/* Background & Hero Text Texture Overlay — Enabled on Desktop & Mobile, sits behind the artist portrait photo */}
      <div className="texture-bg-layer z-10" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-12 h-full overflow-hidden">
        {/* Left Side: Gritty Black & White Artist Portrait — Placed at z-20 so image is NOT covered by texture */}
        <div className="hidden lg:block lg:col-span-4 xl:col-span-4 relative z-20 h-full bg-neutral-950 overflow-hidden">
          <Image
            src="/img/artist_photo.png"
            alt="Andy Javier Bravo Castaño (DITO)"
            fill
            sizes="35vw"
            className="object-cover object-top grayscale contrast-125 brightness-95 filter select-none"
            priority
          />
          {/* Silver accent line at edge */}
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-px bg-[var(--accent-silver)] opacity-20" />
        </div>

        {/* Right Side: Editorial Grid — Placed at z-0 so DTO and text are inside texture layer */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-8 relative z-0 h-full overflow-hidden">
          
          {/* Scrollable Editorial Content — Bleeds behind pinned bottom bar */}
          <div className="w-full h-full overflow-y-auto hide-scrollbar px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 pt-20 sm:pt-24 md:pt-26 lg:pt-28 pb-20 sm:pb-24 lg:pb-16">
            
            {/* Top Editorial Area: Left (DTO) | Right (Text 1 + Text 3 & Text 2) */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-5 lg:gap-7 xl:gap-9">
              
              {/* Column A (Left): DTO Logo */}
              <div className="w-full lg:w-[190px] xl:w-[220px] 2xl:w-[250px] shrink-0 pt-0.5">
                <h1 className="font-moderniz-dto text-[2.6rem] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[4.0rem] xl:text-[4.6rem] 2xl:text-[5.0rem] leading-[0.82] tracking-[-0.24em] select-none text-[var(--text-primary)]">
                  DTO
                </h1>
              </div>

              {/* Column B (Right): Text 1 (top) + [Text 3 (Andy) & Text 2 (Vision)] (below) */}
              <div className="flex-1 min-w-0 flex flex-col justify-start">
                
                {/* TEXT 1 — Header uppercase block (Ultra-tight leading for solid unified effect) */}
                <div className="w-full">
                  <p className="font-acumin font-bold text-[var(--text-primary)] uppercase text-justify leading-[0.88] sm:leading-[0.88] xl:leading-[0.89] tracking-[-0.012em] text-[0.74rem] sm:text-[0.84rem] md:text-[0.92rem] lg:text-[0.98rem] xl:text-[1.06rem] 2xl:text-[1.14rem]">
                    IS THE ARTISTIC IDENTITY OF CUBAN PHOTOGRAPHER AND VISUAL ARTIST ANDY JAVIER BRAVO CASTAÑO (DITO).WORKING BETWEEN DOCUMENTARY PHOTOGRAPHY AND PAINTERLY INTERVENTION, HE TRANSFORMS FRAGMENTS OF BELGRADE INTO REFLECTIONS ON MEMORY, PERCEPTION, AND HUMAN EXPERIENCE.BORN FROM A JOURNEY BETWEEN CUBA AND SERBIA, HIS WORK EXPLORES HOW REALITY CAN BE REIMAGINED — TURNING WOUNDS INTO COLOR, EXPERIENCE INTO AWARENESS, AND OBSERVATION INTO TRANSFORMATION.A DOCUMENTED REALITY. A TRANSFORMED MEMORY. AN ALTERED PERCEPTION.
                  </p>
                </div>

                {/* Responsive In-Person Photo (Mobile / Tablet only) — Flush with Text width and margins */}
                <div className="block lg:hidden w-full my-3.5 sm:my-4 relative z-20 overflow-hidden rounded-sm border border-white/[0.08] shadow-2xl aspect-square bg-neutral-900">
                  <Image
                    src="/img/in_person.webp"
                    alt="Andy Javier Bravo Castaño (DITO) in person"
                    fill
                    sizes="(max-width: 1024px) 100vw, 0vw"
                    className="object-cover object-center grayscale contrast-110 brightness-95 select-none pointer-events-none"
                    priority
                  />
                </div>

                {/* Lower Section: TEXT 3 / Andy Bio (left) + TEXT 2 / Vision (right) — Flush Right with Text 1 */}
                <div className="w-full flex flex-col sm:flex-row items-start justify-end mt-3 sm:mt-4 lg:mt-4 xl:mt-5">
                  
                  {/* TEXT 3: Andy Bio — Slender column, long downwards, tight with Text 2 */}
                  <div className="w-full sm:w-[210px] md:w-[225px] lg:w-[245px] xl:w-[265px] 2xl:w-[280px] shrink-0 pt-2 sm:pt-3 lg:pt-4 xl:pt-6">
                    <p className="font-acumin font-bold text-[var(--text-secondary)] text-justify text-[0.58rem] sm:text-[0.62rem] md:text-[0.66rem] lg:text-[0.70rem] xl:text-[0.74rem] 2xl:text-[0.78rem] leading-[1.14] tracking-normal">
                      Andy Javier Bravo Castaño — DitoAndy Javier Bravo Castaño, known artistically as Dito, is a Cuban photographer and visual artist born in Havana in 1995. With more than a decade of experience in photography, his practice explores the relationship between reality, memory, perception, and personal transformation.His artistic journey began in Cuba, where photography became a way of observing and processing a complex reality. After arriving in Belgrade, Serbia, in 2022, his perspective shifted. The city, its people, history, contrasts, and energy opened a new chapter in his creative language.Dito works primarily with documentary and street photography, using predominantly black-and-white images of Belgrade as the foundation of his work. He then intervenes directly onto the photographic surface with paint and color, creating a dialogue between what was captured and what can still be transformed.His practice, closely related to overpainting photography, is not about altering reality for decoration.
                    </p>
                  </div>

                  {/* TEXT 2: Vision — Slender column, long downwards, tight spacing with Text 3, flush right with Text 1 */}
                  <div className="w-full sm:w-[215px] md:w-[230px] lg:w-[250px] xl:w-[270px] 2xl:w-[285px] shrink-0 ml-0 sm:ml-3 md:ml-4 lg:ml-4 xl:ml-5">
                    <p className="font-acumin font-bold text-[var(--text-secondary)] text-justify text-[0.58rem] sm:text-[0.62rem] md:text-[0.66rem] lg:text-[0.70rem] xl:text-[0.74rem] 2xl:text-[0.78rem] leading-[1.14] tracking-normal">
                      It is about questioning how reality is perceived.For Dito, every difficult experience contains the possibility of becoming something else: a new perspective, a moment of calm, an idea, or a form of growth. His work emerges from this constant process of observation and transformation.Belgrade — the White City — becomes both subject and canvas. A city carrying its own history and wounds, yet constantly changing. Through his interventions, Dito imagines new possibilities for the places and people he encounters, leaving his own visual trace upon the city.At the center of DTO&apos;s work is the human being: the possibility of seeing oneself differently. His art seeks to awaken self-awareness, personal power, and the courage to transform one&apos;s own perception.His expression is not born from an academic institution, but from experience, intuition, and a deeply human search for inner peace.A documented reality. A transformed memory. AN altered perception.DTO is an invitation to look again.Because sometimes, changing the way we see the world is the first step toward changing the world within us.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Pinned Bottom Row: DTO Logo Symbol (Left) + CONTACT ↗ (Right) with Negative Inverted Blend Effect floating over bleeding text */}
          <div className="absolute bottom-0 left-0 right-0 z-30 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 pb-5 sm:pb-6 md:pb-8 flex items-end justify-between pointer-events-none mix-blend-difference text-white">
            {/* DTO Logo Symbol with Negative Effect */}
            <div className="w-10 sm:w-12 lg:w-14 pointer-events-auto mix-blend-difference">
              <Image
                src="/img/dto_symbol.png"
                alt="DTO Metallic Glyph Symbol"
                width={166}
                height={270}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 select-none filter brightness-0 invert"
              />
            </div>

            {/* CONTACT ↗ Button with Negative Effect */}
            <button
              onClick={onOpenContact}
              className="group cursor-pointer pointer-events-auto inline-flex items-center gap-1.5 text-white hover:opacity-75 transition-opacity mix-blend-difference"
              title="Open Contact Inquiries"
              aria-label="Contact DTO"
            >
              <span className="font-moderniz text-base sm:text-lg xl:text-xl tracking-[-0.02em] select-none text-white">
                CONTACT
              </span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
