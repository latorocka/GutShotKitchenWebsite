import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ContentStrategy() {
  const weeks = [
    { week: 1, title: "Fried Garlic", type: "Tutorial", duration: "3-6 min" },
    {
      week: 2,
      title: "Fermented Chili Sauce",
      type: "Tutorial",
      duration: "3-6 min",
    },
    { week: 3, title: "Pickled Papaya", type: "Tutorial", duration: "3-6 min" },
    {
      week: 4,
      title: "Fire & Ferment — Street Noodles",
      type: "Trophy Dish",
      duration: "Showcase",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-background" data-testid="section-content-strategy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-white mb-4">
            From Craft to Creation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each content arc begins with instructional micro-videos, then
            culminates in a cinematic Trophy Dish showcase film. Show the journey
            from patience to payoff.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {weeks.map((item, index) => (
            <div key={item.week} className="flex flex-col items-center">
              <Card
                className={`w-full p-6 ${
                  item.type === "Trophy Dish"
                    ? "bg-gradient-to-br from-primary/20 to-accent/20 border-primary"
                    : "bg-card"
                }`}
                data-testid={`card-week-${item.week}`}
              >
                <Badge
                  variant={item.type === "Trophy Dish" ? "default" : "secondary"}
                  className="mb-4"
                  data-testid={`badge-week-${item.week}`}
                >
                  Week {item.week}
                </Badge>
                <h3 className="font-display text-xl uppercase tracking-wide text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{item.type}</p>
                <p className="text-xs text-muted-foreground">{item.duration}</p>
              </Card>
              {index < weeks.length - 1 && (
                <ArrowRight
                  className="hidden md:block text-primary mt-4 rotate-0 md:rotate-0"
                  size={32}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-2xl md:text-3xl text-neon-teal uppercase tracking-wide">
            Educate, then elevate.
          </p>
        </div>
      </div>
    </section>
  );
}
