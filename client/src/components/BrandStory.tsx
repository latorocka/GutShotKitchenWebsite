import { Card } from "@/components/ui/card";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background" data-testid="section-brand-story">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-ember mb-8">
          A Chef's Rebellion
        </h2>
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
          GutShot is a chef's rebellion against repetition — a cinematic
          kitchen built on creativity instead of grind. It's where
          preservation meets street chaos, and where artistry replaces the
          burnout of service.
        </p>
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
          Every video is a dish, plated for the lens and preserved in time.
          No storefront, no endless prep, no service rush. Just craft, film,
          and story.
        </p>
      </div>
    </section>
  );
}
