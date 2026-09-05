# Zulfa Boutiq - Luxury Contemporary Boutique Website

A static website for **Zulfa Boutiq**, designed according to modern trends for high-end boutique fashion, bridal couture, festive pret, and bespoke tailoring.

---

## 🌟 Key Highlights & Modern Features

1. **Editorial Luxury Aesthetic**:
   - Palette: Warm Ivory (`#FAF7F2`), Obsidian Charcoal (`#171412`), Champagne Gold (`#C5A059`), and Dusty Rose.
   - High-fashion typography pairing: **Playfair Display** (haute couture serif) and **Plus Jakarta Sans** (crisp UI).
   - Glassmorphic navigation header, floating review metrics, and subtle micro-animations.

2. **Direct WhatsApp Checkout & Inquiries**:
   - Pre-formats an itemized order message including item name, size, color variant, quantity, subtotal, discount, and total.
   - Direct 1-click WhatsApp inquiry button on every individual product card.

3. **Interactive Slide-Out Shopping Bag Drawer**:
   - Dynamic real-time subtotal and total calculations.
   - **Complimentary Express Delivery Progress Bar** (unlocks at $200).
   - Promo code system (built-in codes: `ZULFA10` for 10% off, `ELEGANCE15` for 15% off, `VIP20` for 20% off).
   - Quantity controls and item removal with undo feedback.

4. **Product Quick-View Modal**:
   - Multi-angle image preview with thumbnail switching.
   - Interactive color swatches and size chip selector.
   - Fabric, embroidery, and care specifications.

5. **VIP Bespoke Appointment & Styling Booking**:
   - Appointment scheduler for royal bridal fittings, in-store bespoke trials, and virtual 1-on-1 styling calls.

6. **Interactive Search Overlay**:
   - Instant search across product names, categories, and fabric types with live result preview.

7. **Client Wishlist System**:
   - Persistent wishlist backed by browser `localStorage` with counter badge on the navbar.

8. **Zero Dependencies & Blazing Fast Performance**:
   - Built with pure Semantic HTML5, CSS3 Custom Properties, and vanilla ES6 JavaScript.
   - No build step or node package installations required.

---

## 📂 Project Structure

```text
zulfabotq/
├── index.html        # Main boutique landing page & structure
├── css/
│   └── style.css     # Luxury design tokens, animations, responsive layout
├── js/
│   ├── data.js       # Product catalog, categories, boutique configurations
│   └── app.js        # Cart drawer, WhatsApp order link generator, quick-view, search
└── README.md         # Documentation & guide
```

---

## 🚀 How to Run & Preview

You can open the website in multiple easy ways:

### Option 1: Direct Double-Click
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Python)
If you have Python installed, open terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## ⚙️ How to Customize for Your Business

### 1. Update WhatsApp Number & Boutique Settings
Open `js/data.js` and edit `BOUTIQUE_CONFIG`:
```javascript
const BOUTIQUE_CONFIG = {
  name: "Zulfa Boutiq",
  whatsappNumber: "+919876543210", // Put your real WhatsApp phone number here
  whatsappDefaultMsg: "Hello Zulfa Boutiq! I'm interested in ordering:",
  freeShippingThreshold: 200,
  promoCodes: {
    "ZULFA10": 0.10,
    "ELEGANCE15": 0.15,
    "VIP20": 0.20
  }
};
```

### 2. Add or Edit Products
In `js/data.js`, you can modify or add new items to the `PRODUCTS` array:
```javascript
{
  id: "zb-109",
  name: "Your Product Name",
  category: "bridal", // 'bridal', 'festive', 'pret', or 'fusion'
  subcategory: "Bridal Couture",
  price: 499,
  originalPrice: 599,
  badge: "Bestseller",
  rating: 5.0,
  reviewCount: 12,
  fabric: "Pure Tissue Silk",
  description: "Detailed description of the garment...",
  sizes: ["XS", "S", "M", "L", "Custom Made"],
  colors: [
    { name: "Emerald", hex: "#1C4336" }
  ],
  images: [
    "https://images.unsplash.com/your-image.jpg"
  ],
  inStock: true,
  featured: true,
  isNew: true
}
```

---

## 🌐 Easy Deployment Options

- **GitHub Pages**: Push this directory to a GitHub repository and turn on GitHub Pages under repository Settings -> Pages.
- **Netlify**: Drag and drop this folder onto [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Run `vercel` in this directory or connect your GitHub repo.
