import logoImage from "@assets/Brian_GutShot_Logo_v2_1762283425979.png";
import backgroundImage from "@assets/generated_images/Hero_smoke_fire_background_8c0ab637.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <img
          src={logoImage}
          alt="GutShot Logo"
          className="w-64 md:w-80 mx-auto mb-12 logo-neon-blue-pulse"
          data-testid="img-logo"
        />

        <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wider text-white neon-text mb-8">
          The Digital Kitchen
        </h1>

        <p className="font-display text-3xl md:text-5xl glow-ember mb-6 tracking-wide">
          Trophies aren't on walls — they're on plates.
        </p>

        <p className="font-display text-2xl md:text-3xl glow-yellow mb-12 max-w-2xl mx-auto">
          Where preservation meets street chaos
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button
            className="neon-sign-button text-ember px-8 py-3 rounded-md font-display text-xl uppercase tracking-wide"
            style={{
              boxShadow: '0 0 3px hsl(15 85% 55%), 0 0 6px hsl(15 85% 55%), inset 0 0 3px hsl(15 85% 55% / 0.3)'
            }}
            data-testid="button-watch"
            onClick={() => {
              const ctaSection = document.querySelector('[data-testid="section-cta"]');
              ctaSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Watch the Fire
          </button>
          <button
            className="neon-sign-button text-neon-teal px-8 py-3 rounded-md font-display text-xl uppercase tracking-wide"
            style={{
              boxShadow: '0 0 3px hsl(180 85% 50%), 0 0 6px hsl(180 85% 50%), inset 0 0 3px hsl(180 85% 50% / 0.3)'
            }}
            data-testid="button-join"
            onClick={() => {
              const emailInput = document.querySelector('[data-testid="input-email"]') as HTMLInputElement;
              emailInput?.focus();
              emailInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            Join the Hunt
          </button>
        </div>
      </div>
    </section>
  );
}
