import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Flame } from "lucide-react";

export default function ContentStrategy() {
  const menuItems = [
    {
      name: "Fire & Ferment Street Noodles",
      description: "Hand-pulled noodles, smoked pork belly, fermented chili oil, pickled vegetables",
      price: "$18",
      tag: "Signature",
    },
    {
      name: "Cured Duck Rice Bowl",
      description: "Tea-smoked duck, fried garlic, preserved lemon, crispy shallots",
      price: "$16",
      tag: "Popular",
    },
    {
      name: "Fermented Bean Curd Greens",
      description: "Charred bok choy, fermented tofu sauce, sesame, chili crisp",
      price: "$12",
    },
    {
      name: "Smoked Short Rib Skewers",
      description: "72-hour cured beef, chimichurri, fire-roasted peppers",
      price: "$14",
    },
  ];

  const upcomingEvents = [
    {
      date: "Dec 15-17",
      location: "Downtown Night Market",
      city: "Portland, OR",
    },
    {
      date: "Jan 8-9",
      location: "Street Food Festival",
      city: "Seattle, WA",
    },
    {
      date: "Jan 22-23",
      location: "Urban Food Hall",
      city: "San Francisco, CA",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-background" data-testid="section-content-strategy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider text-white mb-4">
            Pop-Up Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience GutShot in the wild. Limited seating, bold flavors, wild instincts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-display text-3xl uppercase tracking-wide text-ember mb-8 flex items-center gap-3">
              <Calendar className="text-neon-teal" size={32} />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate"
                  data-testid={`card-event-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="default" className="mb-2">
                        {event.date}
                      </Badge>
                      <h4 className="font-display text-xl uppercase tracking-wide text-foreground mb-1">
                        {event.location}
                      </h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin size={14} />
                        {event.city}
                      </p>
                    </div>
                    <button
                      className="bg-primary hover-elevate active-elevate-2 text-primary-foreground px-4 py-2 rounded-md font-sans text-sm uppercase tracking-wide border border-primary-border"
                      data-testid={`button-reserve-${index}`}
                      onClick={() => console.log(`Reserve clicked for ${event.location}`)}
                    >
                      Reserve
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl uppercase tracking-wide text-ember mb-8 flex items-center gap-3">
              <Flame className="text-primary" size={32} />
              Featured Menu
            </h3>
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <Card
                  key={index}
                  className="p-6"
                  data-testid={`card-menu-${index}`}
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-lg uppercase tracking-wide text-foreground">
                        {item.name}
                      </h4>
                      {item.tag && (
                        <Badge variant="secondary" className="text-xs">
                          {item.tag}
                        </Badge>
                      )}
                    </div>
                    <span className="font-display text-xl text-primary shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="font-display text-2xl md:text-3xl text-neon-teal uppercase tracking-wide">
            Limited servings. Trophy dishes only.
          </p>
        </div>
      </div>
    </section>
  );
}
