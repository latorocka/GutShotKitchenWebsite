import logoImage from "@assets/Brian_GutShot_Logo_v2_1762283425979.png";
import neonPatternImage from "@assets/generated_images/Neon_signs_abstract_pattern_fe87a1ac.png";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 lantern-glow opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={logoImage}
              alt="GutShot"
              className="w-32 opacity-70 hover:opacity-100 transition-opacity"
              data-testid="img-footer-logo"
            />
          </div>

          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-white/90 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const section = document.querySelector('[data-testid="section-brand-story"]');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-white/60 hover:glow-ember transition-all text-left"
                  data-testid="link-mission"
                >
                  Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.querySelector('[data-testid="section-content-strategy"]');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-white/60 hover:glow-ember transition-all text-left"
                  data-testid="link-content"
                >
                  Pop-Up Events
                </button>
              </li>
              <li>
                <span className="text-sm text-white/40 cursor-not-allowed">
                  Merch (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-white/90 mb-4">
              Contact
            </h3>
            <p className="text-sm text-white/60 mb-2">
              For collaborations and inquiries
            </p>
            <a
              href="mailto:hello@gutshot.com"
              className="text-sm text-primary hover:glow-ember transition-all"
              data-testid="link-email"
            >
              hello@gutshot.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50 mb-2">
            © 2024 GutShot — The Digital Kitchen. All rights reserved.
          </p>
          <p className="font-display text-sm glow-ember uppercase tracking-wider">
            Bold Flavors. Wild Instincts.
          </p>
        </div>
      </div>
    </footer>
  );
}
