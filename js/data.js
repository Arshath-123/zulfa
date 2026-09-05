// Zulfa Boutiq - Luxury Boutique Catalog Data
const BOUTIQUE_CONFIG = {
  name: "Zulfa Boutiq",
  tagline: "Timeless Elegance, Modern Craftsmanship",
  currency: "$",
  whatsappNumber: "+919876543210", // Customize with boutique WhatsApp number
  whatsappDefaultMsg: "Hello Zulfa Boutiq! I'm interested in ordering:",
  freeShippingThreshold: 200,
  promoCodes: {
    "ZULFA10": 0.10, // 10% off
    "ELEGANCE15": 0.15, // 15% off
    "VIP20": 0.20 // 20% off
  }
};

const CATEGORIES = [
  { id: "all", label: "All Creations" },
  { id: "new-in", label: "New In" },
  { id: "bridal", label: "Bridal Couture" },
  { id: "festive", label: "Festive Luxe" },
  { id: "pret", label: "Prêt-à-Porter" },
  { id: "fusion", label: "Modern Fusion" }
];

const PRODUCTS = [
  {
    id: "zb-101",
    name: "Nur-e-Jahan Crimson Bridal Lehenga",
    category: "bridal",
    subcategory: "Bridal Couture",
    price: 890,
    originalPrice: 1100,
    badge: "Bespoke Couture",
    rating: 4.9,
    reviewCount: 38,
    fabric: "Pure Raw Silk & Organza with Zardozi Work",
    description: "An opulent crimson bridal masterpiece handcrafted with antique tilla, French bullion knot embroidery, hand-cut sequins, and zardozi embellishments. Paired with a double dupatta in scalloped silk organza.",
    sizes: ["XS", "S", "M", "L", "Custom Made"],
    colors: [
      { name: "Royal Crimson", hex: "#7A1C28" },
      { name: "Vintage Rose", hex: "#C48288" },
      { name: "Regal Emerald", hex: "#1C4336" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-102",
    name: "Zoya Emerald Velvet Anarkali Set",
    category: "festive",
    subcategory: "Festive Luxe",
    price: 460,
    originalPrice: 550,
    badge: "Bestseller",
    rating: 5.0,
    reviewCount: 47,
    fabric: "Micro-Velvet & Tissue Organza",
    description: "Deep forest emerald floor-length velvet gown accented with delicate gota patti borders, dabka neckwork, and a sheer tissue organza stole adorned with hand-knotted pearls.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Emerald Glaze", hex: "#183B2E" },
      { name: "Midnight Sapphire", hex: "#152438" },
      { name: "Wine Mulberry", hex: "#471725" }
    ],
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: false
  },
  {
    id: "zb-103",
    name: "Aira Champagne Gold Silk Kaftan",
    category: "pret",
    subcategory: "Prêt-à-Porter",
    price: 240,
    originalPrice: 295,
    badge: "Trending",
    rating: 4.8,
    reviewCount: 29,
    fabric: "Hammered Crepe Silk & Crystal Tassels",
    description: "Effortlessly glamorous draped silhouette in soft champagne metallic silk. Features hand-embroidered neckline crystals, batwing sleeves, and an adjustable internal cinch tie.",
    sizes: ["Free Size (Fits XS - XL)"],
    colors: [
      { name: "Champagne Shimmer", hex: "#DEC8A4" },
      { name: "Rose Quartz", hex: "#DEB8B8" },
      { name: "Ivory Pearl", hex: "#F3EDE2" }
    ],
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-104",
    name: "Mehtab Ivory Pearl Sharara Suit",
    category: "festive",
    subcategory: "Festive Luxe",
    price: 520,
    originalPrice: 620,
    badge: "Limited Edition",
    rating: 4.9,
    reviewCount: 34,
    fabric: "Chanderi Silk & Handloom Tissue",
    description: "Pure ivory tiered sharara paired with a short kurti laden with Swarovski crystal dusting, resham floral jaal, and a contrast blush pink gossamer dupatta.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom Made"],
    colors: [
      { name: "Ivory Pearl", hex: "#F5F2EB" },
      { name: "Mint Pistachio", hex: "#D6E5D8" }
    ],
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-105",
    name: "Sultana Rose Dust Cape & Bustier Set",
    category: "fusion",
    subcategory: "Modern Fusion",
    price: 380,
    originalPrice: 450,
    badge: "Runway Pick",
    rating: 4.9,
    reviewCount: 22,
    fabric: "Georgette with Mirror & Cutdana Details",
    description: "A contemporary three-piece ensemble: structured embroidered bustier, high-waisted flared palazzos, and a cascading sheer floor-length embroidered cape jacket.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Dusty Rose", hex: "#B98585" },
      { name: "Lavender Fog", hex: "#C3BACB" },
      { name: "Onyx Black", hex: "#1A1A1A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: false
  },
  {
    id: "zb-106",
    name: "Shahana Marigold Haldi Co-ord Set",
    category: "pret",
    subcategory: "Prêt-à-Porter",
    price: 210,
    originalPrice: 260,
    badge: "Festive Must-Have",
    rating: 4.7,
    reviewCount: 19,
    fabric: "Mulberry Silk Twill",
    description: "Vibrant marigold yellow asymmetric overlap tunic with delicate French knot lapel detailing, complemented by tapered cigarette pants.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Marigold Sun", hex: "#E9A825" },
      { name: "Tangerine Silk", hex: "#E26D38" }
    ],
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    isNew: true
  },
  {
    id: "zb-107",
    name: "Firdaus Pastel Lilac Walima Gown",
    category: "bridal",
    subcategory: "Bridal Couture",
    price: 780,
    originalPrice: 940,
    badge: "Bridal Luxe",
    rating: 5.0,
    reviewCount: 31,
    fabric: "French Tulle, Silk Net & Seed Pearls",
    description: "Ethereal pastel lilac trailing gown encrusted with thousands of micro-pearls, silver nakshi threadwork, and iridescent glass beads. Includes a cathedral-length veil.",
    sizes: ["XS", "S", "M", "L", "Custom Made"],
    colors: [
      { name: "Lilac Frost", hex: "#CBC0D3" },
      { name: "Powder Blue", hex: "#B8CBE0" },
      { name: "Blush Champagne", hex: "#EAD7CE" }
    ],
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: false
  },
  {
    id: "zb-108",
    name: "Noor Midnight Black Draped Saree",
    category: "fusion",
    subcategory: "Modern Fusion",
    price: 340,
    originalPrice: 410,
    badge: "Cocktail Edit",
    rating: 4.8,
    reviewCount: 26,
    fabric: "Pre-stitched Satin Georgette with Sequin Embellishments",
    description: "Modern pre-draped luxury saree for hassle-free evening glam. Features a structured sweetheart-neck sculpted blouse and featherlight pleated fall.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Midnight Black", hex: "#111111" },
      { name: "Deep Ruby", hex: "#56121D" },
      { name: "Metallic Pewter", hex: "#63686D" }
    ],
    images: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    isNew: true
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Fatima Al-Mansoor",
    role: "Bride - Dubai, UAE",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    quote: "Zulfa Boutiq crafted my dream bridal lehenga for my destination wedding. The custom fitting was flawless, and the zardozi detail left every guest breathless!",
    rating: 5,
    outfit: "Nur-e-Jahan Bridal Lehenga"
  },
  {
    id: 2,
    name: "Ayesha Siddiqui",
    role: "Fashion Stylist - London, UK",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format&fit=crop",
    quote: "The fabric quality and modern silhouettes rival top international fashion weeks. The WhatsApp ordering process was smooth, professional, and delivered right on time.",
    rating: 5,
    outfit: "Aira Silk Kaftan & Zoya Velvet"
  },
  {
    id: 3,
    name: "Dr. Samira Khan",
    role: "Verified Client - New York, USA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    quote: "Finding authentic bespoke modest luxury online can be challenging, but Zulfa Boutiq sets the golden benchmark. Beautiful packaging, exquisite handwork!",
    rating: 5,
    outfit: "Mehtab Ivory Sharara Suit"
  }
];

const INSTAGRAM_GALLERY = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
    tag: "@zulfaboutiq #ZulfaBride",
    caption: "Royal heritage in crimson threads"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop",
    tag: "@zulfaboutiq #FestiveGlow",
    caption: "Velvet midnight dreams"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&auto=format&fit=crop",
    tag: "@zulfaboutiq #EverydayLuxe",
    caption: "Golden hour in pure hammered silk"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop",
    tag: "@zulfaboutiq #HauteCouture",
    caption: "Hand-embellished pearl perfection"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=600&auto=format&fit=crop",
    tag: "@zulfaboutiq #FusionVibes",
    caption: "Modern cutdana runway cape"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
    tag: "@zulfaboutiq #WalimaGlam",
    caption: "Ethereal pastel tulle symphony"
  }
];
