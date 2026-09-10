// ==========================================================================
// ZULFA BOUTIQ - Pakistani Suits & Luxury Hijab Modest Couture Data
// ==========================================================================

const BOUTIQUE_CONFIG = {
  name: "Zulfa Boutiq",
  tagline: "Pakistani Haute Prêt & Luxury Modest Couture",
  currency: "$",
  whatsappNumber: "+919876543210",
  whatsappDefaultMsg: "Salam Zulfa Boutiq! I would like to order this Pakistani suit & modest wear:",
  freeShippingThreshold: 200,
  promoCodes: {
    "MODEST10": 0.10, // 10% off
    "ZULFA15": 0.15,  // 15% off
    "EIDVIP20": 0.20  // 20% off
  }
};

const CATEGORIES = [
  { id: "all", label: "All Collections" },
  { id: "pakistani-suits", label: "Pakistani 3-Piece Suits" },
  { id: "luxury-lawn", label: "Luxury Lawn Edition" },
  { id: "chiffon-formals", label: "Chiffon & Wedding Formals" },
  { id: "hijabs", label: "Premium Hijabs & Stoles" },
  { id: "velvet-winter", label: "Velvet & Karandi Edit" }
];

const PRODUCTS = [
  {
    id: "zb-pk-01",
    name: "Gul-e-Noor 3-Piece Embroidered Chiffon Suit",
    category: "chiffon-formals",
    subcategory: "Wedding & Festive Formal",
    price: 340,
    originalPrice: 420,
    badge: "Pakistani Formal",
    rating: 5.0,
    reviewCount: 42,
    fabric: "Pure Crinkle Chiffon with Organza Jaal & Silk Slip",
    description: "An ethereal 3-piece Pakistani formal ensemble featuring hand-worked dabka, resham floral jaal, and cutwork borders on pure crinkle chiffon. Paired with a heavily embroidered 4-sided scallop organza dupatta and raw silk trousers.",
    suitComponents: {
      shirt: "Pure Crinkle Chiffon with Heavy Resham & Tilla Front (3.25m)",
      dupatta: "Embroidered Organza with Hand-Cut Scallop Borders (2.75m)",
      trouser: "Dyed Raw Silk Cigarette Pants / Shalwar (2.5m)",
      lining: "Dyed Cotton Silk Inner Included"
    },
    stitchingOptions: ["Unstitched (3-Piece)", "Stitched Ready-to-Wear", "Custom Made-to-Measure"],
    sizes: ["Unstitched", "XS", "S", "M", "L", "XL", "Custom Size"],
    colors: [
      { name: "Dusty Mauve", hex: "#8E5B5B" },
      { name: "Sage Pistachio", hex: "#9EAA96" },
      { name: "Antique Ivory", hex: "#F3EDE2" }
    ],
    matchingHijab: {
      id: "hj-match-01",
      name: "Dusty Mauve Georgette Silk Hijab",
      price: 22,
      fabric: "Premium Georgette with Sheen",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-pk-02",
    name: "Meher Emerald 3-Piece Velvet Luxury Suit",
    category: "velvet-winter",
    subcategory: "Royal Velvet Formal",
    price: 480,
    originalPrice: 590,
    badge: "Karachi Runway",
    rating: 4.9,
    reviewCount: 36,
    fabric: "Micro-Velvet 9000 with Tissue Banarasi Dupatta",
    description: "Deep forest emerald royal velvet long kurta embroidered with antique golden zardozi, kora, and French knot accents. Comes with a hand-woven tissue Banarasi zari dupatta and embroidered velvet trousers.",
    suitComponents: {
      shirt: "Pure Micro 9000 Velvet Embroidered Front & Sleeves",
      dupatta: "Handwoven Tissue Banarasi Gold Zari Dupatta (2.6m)",
      trouser: "Dyed Velvet Straight Trouser with Gota Borders",
      lining: "Pure Cotton Silk Lining Included"
    },
    stitchingOptions: ["Unstitched (3-Piece)", "Stitched Ready-to-Wear", "Custom Made-to-Measure"],
    sizes: ["Unstitched", "XS", "S", "M", "L", "XL", "Custom Size"],
    colors: [
      { name: "Emerald Glaze", hex: "#183B2E" },
      { name: "Deep Maroon", hex: "#4A121A" },
      { name: "Midnight Noir", hex: "#141414" }
    ],
    matchingHijab: {
      id: "hj-match-02",
      name: "Emerald Modal Silk Luxury Hijab",
      price: 24,
      fabric: "Pure Turkish Modal Silk",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: false
  },
  {
    id: "zb-pk-03",
    name: "Afreen Pastel Mint 3-Piece Luxury Lawn",
    category: "luxury-lawn",
    subcategory: "Designer Lawn Collection",
    price: 195,
    originalPrice: 240,
    badge: "Summer Bestseller",
    rating: 4.8,
    reviewCount: 54,
    fabric: "Supima Lawn with Schiffli Chikankari & Silk Dupatta",
    description: "Premium Pakistani supima lawn featuring intricate shadow-work Chikankari schiffli embroidery. Accented with laser-cut organza hem borders and paired with an authentic digital printed 100% pure silk dupatta.",
    suitComponents: {
      shirt: "Digital Printed & Embroidered Schiffli Lawn (3m)",
      dupatta: "100% Pure Silk Digital Printed Dupatta (2.5m)",
      trouser: "Cambric Dyed Cotton Trouser with Lace Border (2.5m)",
      patches: "2 Embroidered Organza Borders for Neckline & Daman"
    },
    stitchingOptions: ["Unstitched (3-Piece)", "Stitched Ready-to-Wear"],
    sizes: ["Unstitched", "XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Mint Mist", hex: "#C8DBC8" },
      { name: "Soft Lilac", hex: "#D6CBE3" },
      { name: "Peach Sherbet", hex: "#F2CEBC" }
    ],
    matchingHijab: {
      id: "hj-match-03",
      name: "Pastel Mint Bamboo Jersey Hijab",
      price: 19,
      fabric: "Breathable Organic Bamboo Jersey",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-pk-04",
    name: "Roshni Champagne Raw Silk Angrakha Set",
    category: "pakistani-suits",
    subcategory: "Haute Prêt Pakistani",
    price: 380,
    originalPrice: 460,
    badge: "Heritage Angrakha",
    rating: 5.0,
    reviewCount: 28,
    fabric: "Pure Rawaan Silk with Marori & Tilla Work",
    description: "Classic Mughal angrakha flare silhouette in champagne raw silk with hand-twisted marori threadwork and tassel closures. Comes with crushed shimmer silk sharara pants and an organza dupatta.",
    suitComponents: {
      shirt: "Pure Rawaan Silk Flared Angrakha (Full Embroidered)",
      dupatta: "Scalloped Sheer Organza with Pearl Sprinkles (2.5m)",
      trouser: "Crushed Silk Sharara Flared Trousers"
    },
    stitchingOptions: ["Stitched Ready-to-Wear", "Custom Made-to-Measure"],
    sizes: ["XS", "S", "M", "L", "XL", "Custom Size"],
    colors: [
      { name: "Champagne Gold", hex: "#DEC8A4" },
      { name: "Rose Quartz", hex: "#DEB8B8" }
    ],
    matchingHijab: {
      id: "hj-match-04",
      name: "Champagne Satin Sheen Turkish Hijab",
      price: 25,
      fabric: "Turkish Silk-Satin Blend",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-hj-05",
    name: "Medina Luxe Turkish Satin Silk Hijab",
    category: "hijabs",
    subcategory: "Designer Modest Stole",
    price: 28,
    originalPrice: 38,
    badge: "Must-Have",
    rating: 4.9,
    reviewCount: 89,
    fabric: "100% Turkish Mulberry Silk Satin (190cm x 75cm)",
    description: "Our signature Turkish satin silk hijab offers a non-slip textured back with an exquisite front pearlescent sheen. Drapes effortlessly with royal elegance, perfect for weddings, Eid celebrations, and everyday luxury.",
    suitComponents: null,
    stitchingOptions: ["Standard Hijab (190 x 75 cm)"],
    sizes: ["Standard Hijab (190 x 75 cm)"],
    colors: [
      { name: "Champagne Pearl", hex: "#F2E8DA" },
      { name: "Deep Taupe", hex: "#7E685A" },
      { name: "Emerald Forest", hex: "#1B4332" },
      { name: "Blush Rose", hex: "#CE9B9B" },
      { name: "Midnight Black", hex: "#111111" }
    ],
    matchingHijab: null,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: false
  },
  {
    id: "zb-hj-06",
    name: "Aura Premium Ribbed Modal Cotton Hijab",
    category: "hijabs",
    subcategory: "Breathable Daily Luxury",
    price: 21,
    originalPrice: 28,
    badge: "Comfort Edit",
    rating: 5.0,
    reviewCount: 63,
    fabric: "100% Organic Beechwood Modal (200cm x 80cm)",
    description: "Featherlight, breathable, and completely pin-free friendly. Our ribbed modal hijab stays in place without slipping, offering cloud-like softness and zero snagging on earrings or undercaps.",
    suitComponents: null,
    stitchingOptions: ["Maxi Stole (200 x 80 cm)"],
    sizes: ["Maxi Stole (200 x 80 cm)"],
    colors: [
      { name: "Caramel Latte", hex: "#C69B7B" },
      { name: "Warm Khaki", hex: "#9E9079" },
      { name: "Cloud Ivory", hex: "#FDFBF7" },
      { name: "Charcoal Slate", hex: "#3A3D40" }
    ],
    matchingHijab: null,
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    isNew: true
  },
  {
    id: "zb-pk-07",
    name: "Zarrin Crimson Bridal Pakistani Gharara",
    category: "chiffon-formals",
    subcategory: "Lahori Bridal Couture",
    price: 920,
    originalPrice: 1150,
    badge: "Bespoke Royal",
    rating: 5.0,
    reviewCount: 24,
    fabric: "Pure Tissue Chiffon with Heavy Kora & Dabka Zardozi",
    description: "An authentic Lahore bridal classic: deep carmine red short kurti laden with hand-crafted Mughal kora dabka, accompanied by a voluminous two-tier pleated farshi gharara and scalloped royal veil.",
    suitComponents: {
      shirt: "Pure Chiffon Short Kurti with Zardozi Jaal",
      dupatta: "Heavy 4-Sided Hand-Cut Embroidered Bridal Veil (2.8m)",
      gharara: "Double-Tiered Pleated Farshi Gharara with Gota Borders"
    },
    stitchingOptions: ["Custom Made-to-Measure Bridal Fitting"],
    sizes: ["Custom Made-to-Measure"],
    colors: [
      { name: "Royal Crimson", hex: "#7A1C28" },
      { name: "Rust Terracotta", hex: "#9E3D24" }
    ],
    matchingHijab: {
      id: "hj-match-07",
      name: "Crimson Bridal Satin Stole with Pearl Edge",
      price: 32,
      fabric: "Silk Satin with Micro-Pearls",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: false
  },
  {
    id: "zb-pk-08",
    name: "Sahar Ivory Organza 3-Piece Kalidar",
    category: "pakistani-suits",
    subcategory: "Pakistani Haute Prêt",
    price: 360,
    originalPrice: 440,
    badge: "Eid Signature",
    rating: 4.9,
    reviewCount: 31,
    fabric: "Korean Organza with Silver Tilla & Sheer Jacquard Dupatta",
    description: "Floor-length 14-kali kalidar anarkali in ivory pearl organza with mirror-reflection embroidery and scalloped cuffs. Complemented with a pure woven organza jacquard dupatta and slim trousers.",
    suitComponents: {
      shirt: "14-Kali Organza Kurta with Silver Tilla (Full Lined)",
      dupatta: "Pure Woven Organza Jacquard with Pearl Tassels (2.6m)",
      trouser: "Dyed Raw Silk Tailored Pants"
    },
    stitchingOptions: ["Unstitched (3-Piece)", "Stitched Ready-to-Wear", "Custom Size"],
    sizes: ["Unstitched", "XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Pearl Ivory", hex: "#FAF5ED" },
      { name: "Blush Champagne", hex: "#EAD7CE" }
    ],
    matchingHijab: {
      id: "hj-match-08",
      name: "Pearl Ivory Georgette Chiffon Hijab",
      price: 20,
      fabric: "Crinkle Georgette",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    isNew: true
  }
];

const HIJAB_FABRIC_GUIDE = [
  {
    fabricName: "Turkish Silk Satin",
    tagline: "Royal Lustre for Weddings & Eid",
    opacity: "100% Fully Opaque",
    breathability: "Medium Luxe",
    drape: "Flowing & Fluid Structure",
    bestFor: "Pakistani Chiffon & Velvet Formals, Evening Gatherings",
    pinsNeeded: "Magnets Recommended",
    desc: "Woven in Bursa, Turkey. Features a luminous glossy exterior with a textured cotton-blend reverse side to prevent slipping on hair."
  },
  {
    fabricName: "Premium Georgette Chiffon",
    tagline: "Timeless Occasion Elegance",
    opacity: "85% (Needs Undercap)",
    breathability: "High & Airy",
    drape: "Effortless Cascading Folds",
    bestFor: "Luxury Lawn, Chiffon Suits, Daily Chic",
    pinsNeeded: "Hijab Pins / Magnets",
    desc: "Lightly textured crinkle georgette that stays neat all day without creasing. Provides an airy modest frame around the face."
  },
  {
    fabricName: "Organic Ribbed Modal",
    tagline: "Ultra-Soft Pin-Free Everyday Comfort",
    opacity: "95% Opaque",
    breathability: "Maximum Breathable",
    drape: "Molds Perfectly to Head Shape",
    bestFor: "Summer Lawn Suits, Work, Travel & Long Hours",
    pinsNeeded: "Zero Pins Required",
    desc: "Crafted from natural beechwood fibers. Super stretchable, buttery soft, and non-slip without requiring any pins or magnets."
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Hiba Tariq",
    role: "Modest Fashion Creator - Toronto, Canada",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    quote: "Finding authentic Pakistani 3-piece designer suits with perfectly color-matched hijabs used to take weeks of hunting. Zulfa Boutiq's matching hijab feature is revolutionary! The chiffon embroidery is breathtaking.",
    rating: 5,
    outfit: "Gul-e-Noor Chiffon Suit + Mauve Silk Hijab"
  },
  {
    id: 2,
    name: "Mariam Al-Khatib",
    role: "Bride - Dallas, Texas",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format&fit=crop",
    quote: "Ordered the velvet formal suit for my sister's Walima in Karachi. The custom tailoring was centimeter-perfect and the Turkish satin hijab gave the entire look imperial elegance. Customer service on WhatsApp was 10/10!",
    rating: 5,
    outfit: "Meher Emerald Velvet Suit + Modal Hijab"
  },
  {
    id: 3,
    name: "Zainab Chaudhry",
    role: "Lawyer & Connoisseur - Lahore / London",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    quote: "The pure supima lawn quality with schiffli chikankari and authentic silk dupatta is identical to Pakistan's premier designer runways. Unstitched fabric cuts were generous and immaculate.",
    rating: 5,
    outfit: "Afreen Pastel Mint Luxury Lawn"
  }
];
