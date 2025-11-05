import { Card } from "@/components/ui/card";
import fermentImage from "@assets/generated_images/Fermentation_jars_neon_glow_5a0d60b1.png";
import smokeImage from "@assets/generated_images/Smoking_meat_fire_embers_824861d1.png";
import infuseImage from "@assets/generated_images/Infused_oils_neon_reflections_0f49d67f.png";

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
    <section className="py-20 md:py-32 px-6 bg-card" data-testid="section-pillars">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-white neon-text-subtle mb-4">
            Ferment. Infuse. Feast.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars of the GutShot method — where preservation becomes art
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="group relative overflow-hidden border-2 border-border hover:border-accent transition-all duration-500 hover-neon-glow"
              data-testid={`card-pillar-${index}`}
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
                  className={`font-display text-3xl uppercase tracking-wider mb-3 text-${pillar.color}`}
                >
                  {pillar.title}
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed">
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
