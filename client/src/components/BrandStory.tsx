import { Card } from "@/components/ui/card";

export default function BrandStory() {
  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden" data-testid="section-brand-story">
      <div className="absolute inset-0 bg-gradient-ember"></div>
      <div className="absolute inset-0 lantern-glow"></div>
      <div className="absolute inset-0 wet-pavement opacity-40"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0%, transparent 40px, hsl(15 85% 55% / 0.02) 40px, hsl(15 85% 55% / 0.02) 42px, transparent 42px, transparent 80px)',
      }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider glow-ember mb-12">
          A Chef's Rebellion
        </h2>
        <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8">
          GutShot is a chef's rebellion against repetition — a cinematic
          kitchen built on creativity instead of grind. It's where
          preservation meets street chaos, and where artistry replaces the
          burnout of service.
        </p>
        <p className="text-lg md:text-xl text-white/85 leading-relaxed">
          Every video is a dish, plated for the lens and preserved in time.
          No storefront, no endless prep, no service rush. Just craft, film,
          and story.
        </p>
      </div>
    </section>
  );
}
