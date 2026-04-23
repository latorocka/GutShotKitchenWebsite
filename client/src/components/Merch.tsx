import neonMarketImage from "@assets/generated_images/Neon_signs_night_market_6f25274b.png";

const STORE_URL = "https://gutshotkitchen-shop.fourthwall.com";

const products = [
  {
    id: 1,
    name: "Deer Head T-Shirt",
    price: "$22.40",
    description: "Classic tee with GutShot deer logo",
    image: "https://imgproxy.fourthwall.com/jH4-uYKWvLwLKnWTdLWTMdqtKZ3oPCW7tBZbcAW6IN8/w:1920/sm:1/enc/a-CEJgIEJK8-C1vM/ud1Egz-LVWUy9CBi/E9Orf7C3BOkNVt-i/or4CNgUlbkus0Rm8/PILxn7eYEk5_Dwx7/89ugpL0oabPY7P9V/gAYeAFkZqBTaRhYB/l2X-9tyUGCMADlae/D1G-2ouHV8RwVC02/8dotEAb-f2299_3s/X4XCO7uuV-Kp-RcY/3QZmX1v2xqotoGKY/ph8TIzxe_I3w25pV/ADSyBdtEzbMeZY6l/W_S5pOMV-90",
    slug: "deer-head-t-shirt",
  },
  {
    id: 2,
    name: "Deer Head Hoodie",
    price: "$36.95",
    description: "Premium hoodie with GutShot deer design",
    image: "https://imgproxy.fourthwall.com/_2LuL3Po1sjJbvAJAz2yAKhZ4m2MKDJR4Cpi2IgO2Ew/w:1920/sm:1/enc/2h1w6OI6er-HZBLJ/1bHYw15P1vwtMRd4/InhWfKtSCj3oOmIt/Nz4RxlPkoBh6r-qR/GMUNhVozGToBHAaY/-Zl6XY-uhU75FYtY/Zxdn1PruCt_oo2aS/C1kJQ9_7AwVxG_mi/LlIF9JPpJOEY4_gh/8qy84eUgx27eM7vt/fyWtdccPNJoon-rh/53wyYiAKWvf56k4h/zfUoyx4879GpeDIR/90DDWaN-YO5IJPQf/_5TkBI_rroU",
    slug: "deer-head-hoodie",
  },
  {
    id: 3,
    name: "Deer Head Trucker Hat",
    price: "$34.95",
    description: "Embroidered snapback trucker hat",
    image: "https://imgproxy.fourthwall.com/PO_1keD3QELXQa1OTfR-xu6sYwv3ymvKJggxGdQdgaY/w:1920/sm:1/enc/98caQpBgKpdJ4fb-/vxOSVg4Ja5z9UHpS/CI21MhN5101w2LGg/9-QVL00SOqMi5JGo/Qx99Sdlkc2O1NggV/lGvxs8RvVNKd0a_b/iYZVQhZkeeO8tI8Y/uULfEcye6tAJOEo_/eXN2Rt5ThqOvZoz4/FbUAxcU97aMO4D-V/L3zDKH7LuHA7ZgWF/t6xmU3OjXzYfw0RJ/FJjar5PGkTM9Yo-v/B7k2zfoI_moIlz8F/gMw_gj11Sbc",
    slug: "deer-head-trucker-hat",
  },
  {
    id: 4,
    name: "Deer Head Water Bottle w/ Straw",
    price: "$33.95",
    description: "Stainless steel with GutShot deer logo",
    image: "https://imgproxy.fourthwall.com/Jhobpk4JuCQmNCar0ZG-GIHWgrtOlybC9v_FEfMDHMA/w:1920/sm:1/enc/bpzWPRqBwMN8ND7k/7jNWUzO9cIL7HaEy/GEIEKHzEwSfusON1/8CFl_OH1ste32w3E/wkY2Xyt1oaNGgRYY/9wcmgLbO9dISwNA7/7qBJLkvqKn0KKNg3/QnuHWaAYjIhOKBpx/WNq3Jmg2LVi-QO8U/PLipU2cSmZ7NCcvL/_sPNIKzGMwwMlZvx/oU1Tllbhzy_j-x8h/6g8MazabLP1khc0t/PN4hpneF-R7_sUTG/FrFGD7HSSZc",
    slug: "deer-head-stainless-steel-water-bottle-w-straw",
  },
  {
    id: 5,
    name: "Deer Head Water Bottle",
    price: "$28.50",
    description: "Stainless steel insulated bottle",
    image: "https://imgproxy.fourthwall.com/7iFfB_uNZ8OgleCNcBR2Cp6eJ1YoHFqmsD2117SbG8E/w:1920/sm:1/enc/11BsekGXfmW3Kpo_/J2sKo-46TUPfjrNS/Od1iS4IdC73dShtz/x_xXC30mrE1mUldI/iSPWCY18Os92PxBh/2AgvYQGJ-lrcm1f_/3sX1k9XyFekFHhCT/xgosecTEZ1Fndx7Y/A8G45bvEY-YrDUhx/W4u-sD0ep9Dbn0cM/T8rhzYrdV4kISiit/QjT4zydBrl9WMf_S/aLJtBykR1FWkJB4z/cJ_DJa1iXHKqfukp/nBPgQD2rxtQ",
    slug: "deer-head-stainless-steel-water-bottle",
  },
  {
    id: 6,
    name: "Deer Head Ceramic Mug",
    price: "$13.95",
    description: "Classic mug with GutShot deer logo",
    image: "https://imgproxy.fourthwall.com/amU9Cr-DBYzcn9lDtsQjYgsS6mAiCNN9PTxMp07lvjQ/w:1920/sm:1/enc/Trk3s_Qs9MAnBu71/7qqYgFpNWvgbJjYO/slW4TyoqCtme2qGn/Xeh0ScE_GnOq7c2t/1MMa_TdQPnZ43lnl/vh8wQeVCIjz5FfOr/9ZgMEXvhnbtky8cl/aOxpwasx16_3V2Q2/ZTgl1B2-6m05D9cp/OZ1w4YQlCqWJbp9W/ahwq6YSJODyccPtW/jpNaaY8zcosXGnFQ/XsB-k5Ya-bj2IMW4/z7jR4VvPpJjt3wsK/7NClhYK70JY",
    slug: "deer-head-ceramic-mug",
  },
];

export default function Merch() {
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
            <a
              key={product.id}
              href={`${STORE_URL}/products/${product.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-md bg-black/40 border border-white/10 hover:border-accent/50 transition-all duration-300 block"
              data-testid={`card-product-${product.id}`}
            >
              <div className="aspect-square overflow-hidden bg-black/60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  data-testid={`img-product-${product.id}`}
                />
              </div>
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
            </a>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-black/40 border border-white/20 rounded-md p-8">
            <h3 className="font-display text-2xl uppercase tracking-wide glow-yellow mb-4">
              Visit the Store
            </h3>
            <p className="text-white/70 mb-6">
              Wear the hunt. Gear for those who cook with fire.
            </p>
            <div className="flex justify-center">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-notify-me"
                className="px-8 py-3 bg-primary/20 border border-primary/40 rounded-md font-display uppercase tracking-wide text-primary hover-elevate active-elevate-2 transition-all"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
