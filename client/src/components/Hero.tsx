import logoImage from "@assets/Brian_GutShot_Logo_v2_1762283425979.png";
import backgroundImage from "@assets/generated_images/Hero_smoke_fire_background_8c0ab637.png";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

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
          className="w-64 md:w-80 mx-auto mb-8 neon-pulse"
          data-testid="img-logo"
        />

        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider text-white mb-6">
          The Digital Kitchen
        </h1>

        <p className="font-display text-2xl md:text-4xl text-ember mb-4 tracking-wide">
          Trophies aren't on walls — they're on plates.
        </p>

        <p className="font-sans text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto">
          Where preservation meets street chaos. Where artistry replaces the
          burnout of service.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button
            className="bg-primary hover-elevate active-elevate-2 text-primary-foreground px-8 py-3 rounded-md font-display text-xl uppercase tracking-wide border border-primary-border transition-transform"
            data-testid="button-watch"
            onClick={() => console.log("Watch the Fire clicked")}
          >
            Watch the Fire
          </button>
          <button
            className="bg-accent hover-elevate active-elevate-2 text-accent-foreground px-8 py-3 rounded-md font-display text-xl uppercase tracking-wide border border-accent backdrop-blur-sm transition-transform"
            data-testid="button-join"
            onClick={() => console.log("Join the Hunt clicked")}
          >
            Join the Hunt
          </button>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/70 hover:text-foreground transition-colors animate-bounce"
        data-testid="button-scroll"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
