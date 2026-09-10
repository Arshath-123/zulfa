// ==========================================================================
// ZULFA BOUTIQ - Pakistani Suits, Abayas, Kurtis, Maxis & Hijabs Catalog
// Pricing in Indian Rupees (₹ INR)
// ==========================================================================

const BOUTIQUE_CONFIG = {
  name: "Zulfa Boutiq",
  tagline: "Pakistani Haute Prêt, Luxury Abayas & Modest Couture",
  currency: "₹",
  whatsappNumber: "+919876543210",
  whatsappDefaultMsg: "Salam Zulfa Boutiq! I would like to order this modest ensemble:",
  freeShippingThreshold: 2999, // ₹2,999 free express shipping threshold
  promoCodes: {
    "MODEST10": 0.10, // 10% off
    "ZULFA15": 0.15,  // 15% off
    "EIDVIP20": 0.20  // 20% off
  }
};

const CATEGORIES = [
  { id: "all", label: "All Collections" },
  { id: "pakistani-suits", label: "Pakistani 3-Piece Suits" },
  { id: "abayas", label: "Premium Abayas" },
  { id: "kurtis", label: "Designer Kurtis" },
  { id: "maxis", label: "Festive Maxis & Sets" },
  { id: "hijabs", label: "Luxury Hijabs & Stoles" }
];

const PRODUCTS = [
  // ==========================================
  // PAKISTANI 3-PIECE SUITS
  // ==========================================
  {
    id: "zb-pk-01",
    name: "Gul-e-Noor 3-Piece Embroidered Chiffon Suit",
    category: "pakistani-suits",
    subcategory: "Pakistani 3-Piece Chiffon Formal",
    price: 8499,
    originalPrice: 10500,
    badge: "Bestseller Formal",
    rating: 5.0,
    reviewCount: 42,
    fabric: "Pure Crinkle Chiffon with Organza Scallop Jaal & Silk Slip",
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
      price: 599,
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
    category: "pakistani-suits",
    subcategory: "Royal Velvet Formal",
    price: 12999,
    originalPrice: 15999,
    badge: "Karachi Runway",
    rating: 4.9,
    reviewCount: 36,
    fabric: "Micro-Velvet 9000 with Tissue Banarasi Zari Dupatta",
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
      price: 699,
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
    category: "pakistani-suits",
    subcategory: "Designer Lawn Collection",
    price: 4999,
    originalPrice: 6200,
    badge: "Summer Lawn",
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
      price: 549,
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

  // ==========================================
  // PREMIUM ABAYAS (DUBAI & TURKISH)
  // ==========================================
  {
    id: "zb-ab-01",
    name: "Rabat Royal Gold Embroidered Open Abaya Set",
    category: "abayas",
    subcategory: "Dubai Luxury Abaya",
    price: 5899,
    originalPrice: 7499,
    badge: "Dubai Haute Couture",
    rating: 5.0,
    reviewCount: 38,
    fabric: "Premium Korean Nida & Gold Zari Threadwork",
    description: "An opulent 3-piece luxury Dubai abaya set featuring a cascading open-front kimono abaya with hand-guided metallic gold filigree embroidery on cuffs and lapel. Includes an opaque sleeveless inner slip dress and a matching chiffon Sheila hijab.",
    suitComponents: {
      abaya: "Floor-Length Open Kimono Abaya with Snap Buttons",
      innerSlip: "Opaque Breathable Sleeveless Inner Dress",
      sheila: "Matching Sheila Hijab with Embroidered Edge (195 x 75cm)"
    },
    stitchingOptions: ["Ready-to-Wear Set with Matching Hijab"],
    sizes: ["52 in (Height 5'0-5'2)", "54 in (Height 5'3-5'4)", "56 in (Height 5'5-5'6)", "58 in (Height 5'7-5'8)", "60 in (Height 5'9+)"],
    colors: [
      { name: "Onyx Black & Gold", hex: "#111111" },
      { name: "Desert Taupe", hex: "#7E685A" },
      { name: "Midnight Navy", hex: "#1A2535" }
    ],
    matchingHijab: {
      id: "hj-match-ab1",
      name: "Coordinated Nida Chiffon Sheila (Included)",
      price: 0,
      fabric: "Chiffon with Gold Border",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-ab-02",
    name: "Zahra Layered Olive Silk Organza Flutter Abaya",
    category: "abayas",
    subcategory: "Designer Modest Abaya",
    price: 4499,
    originalPrice: 5600,
    badge: "Trending Modest",
    rating: 4.9,
    reviewCount: 29,
    fabric: "Shimmer Silk Organza with Crepe Lining",
    description: "Ethereal tiered flutter abaya cut from sheer olive green silk organza over a rich fluid crepe base. Features subtle hand-knotted pearl drops on bell sleeves and a flattering A-line drape.",
    suitComponents: {
      abaya: "Double-Layered Organza Flared Abaya with Tie Belt",
      sleeves: "Pearl-Accented Scalloped Bell Cuffs",
      sheila: "Matching Olive Organza Trim Hijab"
    },
    stitchingOptions: ["Ready-to-Wear (Belt Included)"],
    sizes: ["52 in", "54 in", "56 in", "58 in", "60 in"],
    colors: [
      { name: "Olive Sage", hex: "#556B2F" },
      { name: "Blush Mauve", hex: "#9E6F6F" },
      { name: "Pearl Cream", hex: "#F3EDE2" }
    ],
    matchingHijab: {
      id: "hj-match-ab2",
      name: "Olive Georgette Silk Hijab",
      price: 549,
      fabric: "Crinkle Georgette",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-ab-03",
    name: "Noor Minimalist Everyday Batwing Pocket Abaya",
    category: "abayas",
    subcategory: "Everyday Modest Abaya",
    price: 2799,
    originalPrice: 3499,
    badge: "Daily Essential",
    rating: 4.9,
    reviewCount: 65,
    fabric: "Premium Zoom Crepe (Wrinkle-Resistant & Opaque)",
    description: "The ultimate daily abaya designed for modern active women. Relaxed batwing cut with deep functional side pockets, concealed wudhu-friendly zipper cuffs, and featherlight breathable fabric.",
    suitComponents: {
      abaya: "Closed Batwing Abaya with Hidden Pockets & Wudhu Zips"
    },
    stitchingOptions: ["Ready-to-Wear Closed Abaya"],
    sizes: ["52 in", "54 in", "56 in", "58 in", "60 in"],
    colors: [
      { name: "Espresso Brown", hex: "#3D2B1F" },
      { name: "Jet Black", hex: "#0E0E0E" },
      { name: "Teal Twilight", hex: "#1A3B40" }
    ],
    matchingHijab: {
      id: "hj-match-ab3",
      name: "Ribbed Modal Daily Stole",
      price: 499,
      fabric: "Organic Modal",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    isNew: false
  },

  // ==========================================
  // DESIGNER KURTIS
  // ==========================================
  {
    id: "zb-kt-01",
    name: "Gul-Bahar Hand-Embroidered Chikankari Long Kurti",
    category: "kurtis",
    subcategory: "Pakistani Designer Kurti",
    price: 1899,
    originalPrice: 2499,
    badge: "Chikankari Edit",
    rating: 4.8,
    reviewCount: 47,
    fabric: "Pure Mulmul Cotton with Organza Cutwork Border",
    description: "Classic Lucknowi & Lahori Chikankari shadow-work floral embroidery on ultra-soft pure mulmul cotton. Features scalloped organza inserts on sleeves and hemline, styled for effortless elegance with culottes or palazzos.",
    suitComponents: {
      kurti: "Calf-Length Pure Cotton Kurti (Inner Slip Included)"
    },
    stitchingOptions: ["Ready-to-Wear Kurti (Includes Matching Slip)"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blush Peach", hex: "#F2D2BD" },
      { name: "Powder Blue", hex: "#B0E0E6" },
      { name: "Pristine White", hex: "#FFFFFF" }
    ],
    matchingHijab: {
      id: "hj-match-kt1",
      name: "Mulmul Soft Voile Stole",
      price: 399,
      fabric: "Light Cotton Voile",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-kt-02",
    name: "Rawash Marori Tilla Velvet Short Kurti",
    category: "kurtis",
    subcategory: "Festive Velvet Kurti",
    price: 2999,
    originalPrice: 3800,
    badge: "Winter Luxury",
    rating: 5.0,
    reviewCount: 22,
    fabric: "Micro-Velvet 9000 with Antique Gold Tilla Work",
    description: "A statement winter kurti tailored in deep plum micro-velvet. Features Mughal marori corded embroidery on V-neck lapel and cuff slits. Ideal for pairing with crushed silk shararas or raw silk cigarette pants.",
    suitComponents: {
      kurti: "Straight Short Kurti (36 in Length)"
    },
    stitchingOptions: ["Ready-to-Wear Kurti"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Plum Aubergine", hex: "#47243B" },
      { name: "Regal Emerald", hex: "#1B3B2B" },
      { name: "Midnight Black", hex: "#111111" }
    ],
    matchingHijab: {
      id: "hj-match-kt2",
      name: "Plum Modal Silk Hijab",
      price: 599,
      fabric: "Modal Silk",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    isNew: true
  },

  // ==========================================
  // FESTIVE MAXIS & MAXI SETS
  // ==========================================
  {
    id: "zb-mx-01",
    name: "Mehrunissa Tiered Pleated Chiffon Maxi Gown",
    category: "maxis",
    subcategory: "Modest Festive Maxi",
    price: 4299,
    originalPrice: 5499,
    badge: "Festive Must-Have",
    rating: 4.9,
    reviewCount: 33,
    fabric: "Fine Crinkle Georgette Chiffon with Full Cotton Voile Lining",
    description: "A floor-skimming modest dream featuring three cascading micro-pleated tiers, full-length balloon sleeves with elasticated smocked cuffs, and a flattering waist cinch tie. 100% opaque, modest neckline with pearl button detail.",
    suitComponents: {
      maxi: "Floor-Length Tiered Maxi Dress (56 in Length)",
      belt: "Detachable Coordinated Chiffon Waist Belt"
    },
    stitchingOptions: ["Ready-to-Wear (Full Lined)"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Dusty Rose", hex: "#B98585" },
      { name: "Sage Mist", hex: "#9CAF88" },
      { name: "Midnight Navy", hex: "#1C2D42" }
    ],
    matchingHijab: {
      id: "hj-match-mx1",
      name: "Dusty Rose Georgette Hijab",
      price: 499,
      fabric: "Crinkle Georgette",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "zb-mx-02",
    name: "Afra Emerald Hammered Silk Belted Maxi Dress",
    category: "maxis",
    subcategory: "Occasion Silk Maxi",
    price: 3699,
    originalPrice: 4700,
    badge: "Cocktail Glam",
    rating: 5.0,
    reviewCount: 26,
    fabric: "Hammered Crepe Silk with Metallic Luster",
    description: "Sophisticated modesty tailored in liquid hammered silk that catches the light with subtle metallic sheen. Features an elegant stand collar, hidden button placket, bishop sleeves, and a matching gold-buckle belt.",
    suitComponents: {
      maxi: "A-Line Flared Silk Maxi Gown (Full Sleeves)",
      belt: "Matching Fabric Belt with Metallic Gold Accent"
    },
    stitchingOptions: ["Ready-to-Wear Silk Maxi"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Emerald Glaze", hex: "#183B2E" },
      { name: "Champagne Gold", hex: "#DEC8A4" },
      { name: "Ruby Mulberry", hex: "#5C1D2A" }
    ],
    matchingHijab: {
      id: "hj-match-mx2",
      name: "Emerald Satin Sheen Hijab",
      price: 699,
      fabric: "Turkish Silk Satin",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop"
    },
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    isNew: false
  },

  // ==========================================
  // LUXURY HIJABS & STOLES
  // ==========================================
  {
    id: "zb-hj-01",
    name: "Medina Luxe Turkish Satin Silk Hijab",
    category: "hijabs",
    subcategory: "Designer Modest Stole",
    price: 799,
    originalPrice: 1199,
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
    id: "zb-hj-02",
    name: "Aura Premium Ribbed Modal Cotton Hijab",
    category: "hijabs",
    subcategory: "Breathable Daily Luxury",
    price: 599,
    originalPrice: 899,
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
  }
];

const HIJAB_FABRIC_GUIDE = [
  {
    fabricName: "Turkish Silk Satin",
    tagline: "Royal Lustre for Weddings & Eid",
    opacity: "100% Fully Opaque",
    breathability: "Medium Luxe",
    drape: "Flowing & Fluid Structure",
    bestFor: "Pakistani Chiffon & Velvet Formals, Abayas",
    pinsNeeded: "Magnets Recommended",
    desc: "Woven in Bursa, Turkey. Features a luminous glossy exterior with a textured cotton-blend reverse side to prevent slipping on hair."
  },
  {
    fabricName: "Premium Georgette Chiffon",
    tagline: "Timeless Occasion Elegance",
    opacity: "85% (Needs Undercap)",
    breathability: "High & Airy",
    drape: "Effortless Cascading Folds",
    bestFor: "Luxury Lawn, Chiffon Suits, Tiered Maxis",
    pinsNeeded: "Hijab Pins / Magnets",
    desc: "Lightly textured crinkle georgette that stays neat all day without creasing. Provides an airy modest frame around the face."
  },
  {
    fabricName: "Organic Ribbed Modal",
    tagline: "Ultra-Soft Pin-Free Everyday Comfort",
    opacity: "95% Opaque",
    breathability: "Maximum Breathable",
    drape: "Molds Perfectly to Head Shape",
    bestFor: "Everyday Abayas, Kurtis, Work & Travel",
    pinsNeeded: "Zero Pins Required",
    desc: "Crafted from natural beechwood fibers. Super stretchable, buttery soft, and non-slip without requiring any pins or magnets."
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Hiba Tariq",
    role: "Modest Fashion Creator - Toronto / Mumbai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    quote: "Finding authentic Pakistani 3-piece suits and Dubai open abayas with matching hijabs used to take weeks. Zulfa Boutiq's matching hijab feature is revolutionary! The quality in Indian Rupees with fast shipping is unmatched.",
    rating: 5,
    outfit: "Rabat Dubai Abaya Set + Mauve Silk Hijab"
  },
  {
    id: 2,
    name: "Mariam Al-Khatib",
    role: "Verified Client - Hyderabad, India",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format&fit=crop",
    quote: "Ordered the velvet kurti and Mehrunissa pleated maxi for an intimate wedding soiree. The fabric feel is royal, fully opaque, and the WhatsApp checkout was seamless. 100% recommended!",
    rating: 5,
    outfit: "Mehrunissa Pleated Chiffon Maxi"
  },
  {
    id: 3,
    name: "Zainab Chaudhry",
    role: "Lawyer - Bangalore / London",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    quote: "The pure supima lawn quality with schiffli chikankari and authentic silk dupatta is identical to Pakistan's premier designer runways. Unstitched fabric cuts were generous and immaculate.",
    rating: 5,
    outfit: "Afreen Pastel Mint Luxury Lawn"
  }
];
