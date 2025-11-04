import backgroundImage from "@assets/generated_images/Dark_smoke_texture_background_e34b6058.png";

export default function RevolutionStatement() {
  return (
    <section
      className="relative py-32 md:py-40 px-6 overflow-hidden"
      data-testid="section-revolution"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wider text-white mb-8 leading-tight">
          GutShot isn't a restaurant.
          <br />
          <span className="text-ember">It's a movement.</span>
        </h2>

        <p className="font-sans text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Flavor immortalized through film, smoke, and time. Where the primal art
          of preservation meets the electric energy of Southeast Asian street food
          culture.
        </p>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          <div className="text-center">
            <p className="font-display text-neon-yellow text-3xl md:text-4xl uppercase tracking-wide">
              Bold Flavors
            </p>
          </div>
          <span className="text-muted-foreground text-3xl">•</span>
          <div className="text-center">
            <p className="font-display text-neon-teal text-3xl md:text-4xl uppercase tracking-wide">
              Wild Instincts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
