import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import neonMarketImage from "@assets/generated_images/Neon_signs_night_market_6f25274b.png";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the hunt! 🔥",
      description: `We'll send trophy dishes and preservation guides to ${email}`,
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

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

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  data-testid="input-email"
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  className="font-display uppercase tracking-wide"
                  data-testid="button-subscribe"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Subscribe"}
                </Button>
              </div>
            </form>

            <div className="flex gap-6 items-center">
              <p className="text-sm text-white/60 uppercase tracking-wide font-display">
                Follow:
              </p>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@gutshot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:glow-ember transition-all duration-300 p-2 rounded-md"
                  data-testid="button-youtube"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
                <a
                  href="https://instagram.com/gutshot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:glow-yellow transition-all duration-300 p-2 rounded-md"
                  data-testid="button-instagram"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://twitter.com/gutshot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:glow-teal transition-all duration-300 p-2 rounded-md"
                  data-testid="button-twitter"
                  aria-label="Twitter"
                >
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>

          <Card className="bg-black/50 backdrop-blur-sm p-8 border-2 border-white/10" style={{
            boxShadow: '0 8px 32px hsl(0 0% 0% / 0.5)'
          }}>
            <div className="aspect-video bg-black/40 rounded-md flex items-center justify-center mb-4 border border-white/5">
              <div className="text-center">
                <Youtube size={64} className="mx-auto mb-4 text-primary opacity-80" />
                <p className="font-display text-xl uppercase tracking-wide text-white/70">
                  Channel Preview
                </p>
                <p className="text-sm text-white/50 mt-2">
                  Coming Soon
                </p>
              </div>
            </div>
            <p className="text-sm text-center text-white/60">
              Subscribe to witness the craft before it's plated for the world
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
