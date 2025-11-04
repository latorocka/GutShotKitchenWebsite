import logoImage from "@assets/Brian_GutShot_Logo_v2_1762283425979.png";

export default function Footer() {
  return (
    <footer className="bg-background py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={logoImage}
              alt="GutShot"
              className="w-32 mb-4 opacity-80"
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A chef's rebellion against repetition. Where preservation meets
              street chaos, and artistry replaces burnout.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#mission"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-mission"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#content"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-content"
                >
                  Content Strategy
                </a>
              </li>
              <li>
                <a
                  href="#merch"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-merch"
                >
                  Merch (Coming Soon)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-foreground mb-4">
              Contact
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              For collaborations and inquiries
            </p>
            <a
              href="mailto:hello@gutshot.com"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
              data-testid="link-email"
            >
              hello@gutshot.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 GutShot — The Digital Kitchen. All rights reserved.
          </p>
          <p className="font-display text-sm text-primary uppercase tracking-wider">
            Bold Flavors. Wild Instincts.
          </p>
        </div>
      </div>
    </footer>
  );
}
