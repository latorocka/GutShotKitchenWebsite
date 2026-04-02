import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Flame, CalendarPlus, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import streetFoodImage from "@assets/generated_images/Street_food_cooking_fire_b7e6ecd5.png";

const EVENT_TITLE = "GutShot Pop-Up Event";
const EVENT_DESC  = "GutShot Kitchen pop-up event. Trophy dishes, preservation techniques, Southeast Asian street food culture.";

function parseDateStrings(dateStr: string) {
  const parts = dateStr.split("/");
  if (parts.length === 3) {
    const [month, day, year] = parts;
    const m = month.padStart(2, "0");
    const d = day.padStart(2, "0");
    return {
      icsStart: `${year}${m}${d}T100000Z`,
      icsEnd:   `${year}${m}${d}T220000Z`,
      isoStart: `${year}-${m}-${d}T10:00:00Z`,
      isoEnd:   `${year}-${m}-${d}T22:00:00Z`,
    };
  }
  return {
    icsStart: "20260425T100000Z",
    icsEnd:   "20260425T220000Z",
    isoStart: "2026-04-25T10:00:00Z",
    isoEnd:   "2026-04-25T22:00:00Z",
  };
}

function getGoogleCalendarUrl(dateStr: string, city: string) {
  const { icsStart, icsEnd } = parseDateStrings(dateStr);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${icsStart}/${icsEnd}`,
    details: EVENT_DESC,
    location: city,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function getOutlookUrl(dateStr: string, city: string) {
  const { isoStart, isoEnd } = parseDateStrings(dateStr);
  const params = new URLSearchParams({
    subject: EVENT_TITLE,
    startdt: isoStart,
    enddt: isoEnd,
    body: EVENT_DESC,
    location: city,
  });
  return `https://outlook.live.com/calendar/0/action/compose?${params}`;
}

function downloadIcs(dateStr: string, city: string) {
  const { icsStart, icsEnd } = parseDateStrings(dateStr);
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//GutShot Kitchen//EN",
    "BEGIN:VEVENT",
    `SUMMARY:${EVENT_TITLE}`,
    `DESCRIPTION:${EVENT_DESC}`,
    `LOCATION:${city}`,
    `DTSTART:${icsStart}`,
    `DTEND:${icsEnd}`,
    "STATUS:TENTATIVE",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    "DESCRIPTION:GutShot Pop-Up Event tomorrow!",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "gutshot-popup-event.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function ContentStrategy() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    if (openDropdown === null) return;
    const close = () => setOpenDropdown(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [openDropdown]);

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
      date: "4/25/2026",
      location: "TBA",
      city: "TBA",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden" data-testid="section-content-strategy">
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: `url(${streetFoodImage})`, filter: 'blur(10px)' }}
      ></div>
      <div className="absolute inset-0 neon-signs-bg opacity-50"></div>
      <div className="absolute inset-0 lantern-glow opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wider text-white neon-text mb-6">
            Pop-Up Events
          </h2>
          <p className="font-display text-2xl md:text-3xl glow-yellow max-w-3xl mx-auto">
            Experience GutShot in the wild.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-display text-3xl uppercase tracking-wide glow-ember mb-8 flex items-center gap-3">
              <Calendar className="glow-teal" size={32} />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="p-6 transition-all duration-300 bg-black/40 backdrop-blur-sm border-2 border-white/10 hover:border-accent/50"
                  data-testid={`card-event-${index}`}
                  style={{
                    boxShadow: '0 4px 20px hsl(0 0% 0% / 0.4)'
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="default" className="mb-2">
                        {event.date}
                      </Badge>
                      <h4 className="font-display text-xl uppercase tracking-wide text-white mb-1">
                        {event.location}
                      </h4>
                      <p className="text-sm text-white/60 flex items-center gap-2">
                        <MapPin size={14} />
                        {event.city}
                      </p>
                    </div>
                    <div className="relative">
                      <button
                        className="bg-primary hover-elevate active-elevate-2 text-primary-foreground px-4 py-2 rounded-md font-sans text-sm uppercase tracking-wide border border-primary-border flex items-center gap-2"
                        data-testid={`button-add-to-calendar-${index}`}
                        onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === index ? null : index); }}
                      >
                        <CalendarPlus size={16} />
                        Add to Calendar
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === index ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === index && (
                        <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-white/20 rounded-md shadow-xl z-50 overflow-hidden">
                          <a
                            href={getGoogleCalendarUrl(event.date, event.city)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            Google Calendar
                          </a>
                          <a
                            href={getOutlookUrl(event.date, event.city)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors border-t border-white/10"
                            onClick={() => setOpenDropdown(null)}
                          >
                            Outlook
                          </a>
                          <button
                            className="w-full flex items-center gap-2 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors border-t border-white/10"
                            onClick={() => { downloadIcs(event.date, event.city); setOpenDropdown(null); }}
                          >
                            Apple Calendar
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl uppercase tracking-wide glow-ember mb-8 flex items-center gap-3">
              <Flame className="glow-ember" size={32} />
              Featured Menu
            </h3>
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-black/40 backdrop-blur-sm border-2 border-white/10 hover:border-accent/50"
                  data-testid={`card-menu-${index}`}
                  style={{
                    boxShadow: '0 4px 20px hsl(0 0% 0% / 0.4)'
                  }}
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-display text-lg uppercase tracking-wide text-white">
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
                  <p className="text-sm text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="font-display text-2xl md:text-3xl glow-teal uppercase tracking-wide">
            Limited servings. Trophy dishes only.
          </p>
        </div>
      </div>
    </section>
  );
}
