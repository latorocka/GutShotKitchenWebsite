import backgroundImage from "@assets/generated_images/Dark_smoke_texture_background_e34b6058.png";

export default function RevolutionStatement() {
  return (
    <section
      className="relative py-32 md:py-40 px-6 overflow-hidden"
      data-testid="section-revolution"
    >
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 neon-signs-bg"></div>
      <div className="absolute inset-0 wet-pavement opacity-50"></div>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 50%, hsl(15 85% 55% / 0.08) 0%, transparent 70%)'
      }}></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 60px, hsl(0 0% 100% / 0.005) 60px, hsl(0 0% 100% / 0.005) 61px)'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wider text-white neon-text-strong mb-12 leading-tight">
          GutShot isn't a restaurant.
          <br />
          <span className="glow-ember">It's a movement.</span>
        </h2>

        <p className="font-sans text-xl md:text-2xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed">
          Flavor immortalized through film, smoke, and time. Where the primal art
          of preservation meets the electric energy of Southeast Asian street food
          culture.
        </p>

        <div className="flex flex-wrap gap-8 justify-center items-center">
          <div className="text-center">
            <p className="font-display glow-yellow text-4xl md:text-5xl uppercase tracking-wide">
              Bold Flavors
            </p>
          </div>
          <span className="text-white/40 text-4xl">•</span>
          <div className="text-center">
            <p className="font-display glow-teal text-4xl md:text-5xl uppercase tracking-wide">
              Wild Instincts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
