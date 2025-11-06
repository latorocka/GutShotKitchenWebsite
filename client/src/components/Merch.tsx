import neonMarketImage from "@assets/generated_images/Neon_signs_night_market_6f25274b.png";

export default function Merch() {
  const products = [
    {
      id: 1,
      name: "GutShot Logo Tee",
      price: "$35",
      description: "Premium black tee with neon deer logo",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Fire & Ferment Hoodie",
      price: "$65",
      description: "Heavyweight hoodie with ember glow design",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Trophy Plates Hat",
      price: "$28",
      description: "Embroidered snapback cap",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Neon Night Apron",
      price: "$45",
      description: "Heavy-duty canvas apron with neon print",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Street Chaos Sticker Pack",
      price: "$12",
      description: "Set of 8 vinyl stickers",
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Digital Kitchen Tote",
      price: "$32",
      description: "Heavy canvas tote bag",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden" data-testid="section-merch">
      <div className="absolute inset-0 bg-gradient-teal"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: `url(${neonMarketImage})`, filter: 'blur(10px)' }}
      ></div>
      <div className="absolute inset-0 lantern-glow opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wider text-white neon-text mb-6">
            Merch Drop
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Rep the rebellion. Gear inspired by fire, fermentation, and street culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group overflow-hidden rounded-md bg-black/40 border border-white/10"
              data-testid={`card-product-${product.id}`}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-black/60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  data-testid={`img-product-${product.id}`}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-display text-xl uppercase tracking-wide text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-white/60 mb-3">
                  {product.description}
                </p>
                <p className="font-display text-2xl glow-teal">
                  {product.price}
                </p>
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl uppercase tracking-wider glow-ember mb-2">
                    Coming Soon
                  </div>
                  <p className="text-sm text-white/60 px-4">
                    Launch Date TBA
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA for Merch Launch */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-black/40 border border-white/20 rounded-md p-8">
            <h3 className="font-display text-2xl uppercase tracking-wide glow-yellow mb-4">
              Get Notified
            </h3>
            <p className="text-white/70 mb-6">
              Be the first to know when the merch drop goes live. Join the waitlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-black/60 border border-white/20 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-primary/50 flex-1 max-w-md"
                data-testid="input-merch-email"
              />
              <button
                className="px-8 py-3 bg-primary/20 border border-primary/40 rounded-md font-display uppercase tracking-wide text-primary hover-elevate active-elevate-2 transition-all"
                data-testid="button-notify-me"
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
