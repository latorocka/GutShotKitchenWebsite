import { Card } from "@/components/ui/card";
import fermentImage from "@assets/generated_images/Fermentation_jars_neon_glow_5a0d60b1.png";
import smokeImage from "@assets/generated_images/Smoking_meat_fire_embers_824861d1.png";
import infuseImage from "@assets/generated_images/Infused_oils_neon_reflections_0f49d67f.png";
import neonMarketImage from "@assets/generated_images/Neon_signs_night_market_6f25274b.png";

export default function ThreePillars() {
  const pillars = [
    {
      title: "FERMENT",
      image: fermentImage,
      description:
        "The patience of preservation. Pickled papaya, fermented chili, and the ancient art of controlled chaos.",
      color: "neon-teal",
    },
    {
      title: "INFUSE",
      image: infuseImage,
      description:
        "Where flavor gets elevated. Fried garlic, infused oils, and the building blocks of street food alchemy.",
      color: "neon-yellow",
    },
    {
      title: "FEAST",
      image: smokeImage,
      description:
        "The payoff. Smoking, curing, and the primal heat that turns craft into cinematic trophy dishes.",
      color: "ember",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden" data-testid="section-pillars">
      <div className="absolute inset-0 bg-gradient-teal"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-6"
        style={{ backgroundImage: `url(${neonMarketImage})`, filter: 'blur(8px)' }}
      ></div>
      <div className="absolute inset-0 lantern-glow opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wider text-white neon-text mb-6">
            Ferment. Infuse. Feast.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Three pillars of the GutShot method — where preservation becomes art
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="group relative overflow-hidden border-2 border-white/10 hover:border-accent transition-all duration-500 bg-black/40 backdrop-blur-sm"
              data-testid={`card-pillar-${index}`}
              style={{
                boxShadow: '0 4px 24px hsl(0 0% 0% / 0.4)'
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-pillar-${index}`}
                />
              </div>
              <div className="p-6">
                <h3
                  className={`font-display text-3xl uppercase tracking-wider mb-3 glow-${pillar.color}`}
                >
                  {pillar.title}
                </h3>
                <p className="text-base text-white/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
