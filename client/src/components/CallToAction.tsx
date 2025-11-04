import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-card" data-testid="section-cta">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-white mb-6">
              Join the Hunt
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
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
                >
                  Subscribe
                </Button>
              </div>
            </form>

            <div className="flex gap-6 items-center">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Follow:
              </p>
              <div className="flex gap-4">
                <button
                  className="text-foreground/70 hover:text-primary transition-colors hover-elevate p-2 rounded-md"
                  data-testid="button-youtube"
                  onClick={() => console.log("YouTube clicked")}
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </button>
                <button
                  className="text-foreground/70 hover:text-primary transition-colors hover-elevate p-2 rounded-md"
                  data-testid="button-instagram"
                  onClick={() => console.log("Instagram clicked")}
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </button>
                <button
                  className="text-foreground/70 hover:text-primary transition-colors hover-elevate p-2 rounded-md"
                  data-testid="button-twitter"
                  onClick={() => console.log("Twitter clicked")}
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </button>
              </div>
            </div>
          </div>

          <Card className="bg-background/50 backdrop-blur-sm p-8 border-accent/30">
            <div className="aspect-video bg-muted/20 rounded-md flex items-center justify-center mb-4">
              <div className="text-center">
                <Youtube size={64} className="mx-auto mb-4 text-primary" />
                <p className="font-display text-xl uppercase tracking-wide text-foreground/70">
                  Channel Preview
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Coming Soon
                </p>
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Subscribe to witness the craft before it's plated for the world
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
