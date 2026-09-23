"use client";

export default function Footer({ onOpenShowreel }) {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 bg-[var(--bg-primary)]">
      <div className="w-full px-6 md:px-12">
        {/* Julien Pianetti Signature Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-20 border-b border-[var(--border-color)]">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter text-[var(--text-primary)] leading-[0.92]">
              Got a project in mind? <br />
              Let's discuss.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <a
              href="mailto:jupian@gmail.com"
              className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-60 transition-opacity underline decoration-1 underline-offset-8"
              data-pointer-text="Contact"
            >
              jupian@gmail.com
            </a>
            <span className="font-mono text-xs text-[var(--text-muted)] mt-2">
              Dijon, France • Available Worldwide
            </span>
          </div>
        </div>

        {/* Julien Pianetti Exact 4-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-[var(--border-color)] text-xs font-mono">
          {/* Column 1: Contact */}
          <div>
            <div className="text-[var(--text-muted)] uppercase mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>
                <a
                  href="https://www.instagram.com/julienpian/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                  data-pointer-text="Link"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/julien-pianetti-b4436951/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                  data-pointer-text="Link"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.are.na/julien-pianetti/channels"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                  data-pointer-text="Link"
                >
                  Are.na ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:jupian@gmail.com"
                  className="hover:text-[var(--text-primary)] transition-colors"
                  data-pointer-text="Mail"
                >
                  Email ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Selected Works */}
          <div>
            <div className="text-[var(--text-muted)] uppercase mb-4">
              Selected Works
            </div>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li><a href="#works" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Pullin">Pullin ↗</a></li>
              <li><a href="#works" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Visions">Vision(s) ↗</a></li>
              <li><a href="#works" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Paris">Parlez-moi de Paris ↗</a></li>
              <li><a href="#works" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="BAMO">BAMO Experience ↗</a></li>
              <li><a href="#works" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Leclerc">Voyages E.Leclerc ↗</a></li>
              <li><a href="#works" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Picture">Picture Organic Clothing ↗</a></li>
            </ul>
          </div>

          {/* Column 3: Webflow Sites */}
          <div>
            <div className="text-[var(--text-muted)] uppercase mb-4">
              Webflow Sites
            </div>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li><a href="https://ultro.fr/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Visit">Ultrō agency ↗</a></li>
              <li><a href="https://www.belle-allure.voyage/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Visit">Belle Allure ↗</a></li>
              <li><a href="https://www.kraaft.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Visit">Kraaft ↗</a></li>
              <li><a href="https://herve.paris/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Visit">Hervé ↗</a></li>
              <li><a href="https://www.hvc-premium.fr/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors" data-pointer-text="Visit">HVC Premium ↗</a></li>
            </ul>
          </div>

          {/* Column 4: Infos */}
          <div>
            <div className="text-[var(--text-muted)] uppercase mb-4">
              Infos & Credits
            </div>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li><a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a></li>
              <li><a href="#playground" className="hover:text-[var(--text-primary)] transition-colors">Playground</a></li>
              <li>Font: Suisse Int’l - Swiss Type</li>
              <li>Awwwards Site of the Day</li>
              <li>CSS Design Awards Nominee</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} Julien Pianetti × BLÆD. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenShowreel}
              className="hover:text-[var(--text-primary)] transition-colors uppercase"
              data-pointer-text="Play"
            >
              [Watch Showreel]
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-[var(--text-primary)] transition-colors uppercase"
              data-pointer-text="Top"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
