import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import neonMarketImage from "@assets/generated_images/Neon_signs_night_market_6f25274b.png";

const BEEHIIV_URL = "https://gutshot-kitchen-newsletter.beehiiv.com/";

export default function CallToAction() {
  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0 bg-gradient-ember"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: `url(${neonMarketImage})`, filter: 'blur(10px)' }}
      ></div>
      <div className="absolute inset-0 lantern-glow opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-wider text-white neon-text mb-8">
              Join the Hunt
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Be the first to taste new Trophy Dishes, get exclusive preservation
              guides, and witness the craft before it goes live. If you feel it
              too — trophies belong on plates, not walls.
            </p>

            <div className="mb-8">
              <a
                href={BEEHIIV_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-subscribe"
              >
                <Button
                  variant="default"
                  className="font-display uppercase tracking-wide text-base px-8"
                >
                  Subscribe to the Newsletter
                </Button>
              </a>
            </div>

            <div className="flex gap-6 items-center">
              <p className="text-sm text-white/60 uppercase tracking-wide font-display">
                Follow:
              </p>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@gutshot_kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:glow-ember transition-all duration-300 p-2 rounded-md"
                  data-testid="button-youtube"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
                <a
                  href="https://instagram.com/gutshot_kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:glow-yellow transition-all duration-300 p-2 rounded-md"
                  data-testid="button-instagram"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://x.com/GutShot_Kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:glow-teal transition-all duration-300 p-2 rounded-md"
                  data-testid="button-twitter"
                  aria-label="X"
                >
                  <FaXTwitter size={28} />
                </a>
              </div>
            </div>
          </div>

          <Card className="bg-black/50 backdrop-blur-sm p-8 border-2 border-white/10" style={{
            boxShadow: '0 8px 32px hsl(0 0% 0% / 0.5)'
          }}>
            <div className="aspect-video rounded-md overflow-hidden mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3A-lMHNSFeI"
                title="GutShot Channel Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
