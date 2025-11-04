import { Card } from "@/components/ui/card";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background" data-testid="section-brand-story">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-ember mb-6">
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

          <div className="md:col-span-2">
            <Card className="p-8 bg-card border-l-4 border-l-primary">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl text-muted-foreground">×</span>
                  <p className="text-base text-muted-foreground">
                    100 plates a night
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl text-neon-teal">→</span>
                  <p className="text-base text-foreground font-medium">
                    1 creation that lives forever online
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl text-muted-foreground">×</span>
                  <p className="text-base text-muted-foreground">
                    Financial stress
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl text-neon-teal">→</span>
                  <p className="text-base text-foreground font-medium">
                    Passive, scalable digital income
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl text-muted-foreground">×</span>
                  <p className="text-base text-muted-foreground">
                    Food disappears
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl text-neon-teal">→</span>
                  <p className="text-base text-foreground font-medium">
                    Food becomes cinematic legacy
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
