# Zulfa Boutiq - Pakistani Suits & Luxury Hijab Modest Couture

A luxury static website for **Zulfa Boutiq**, showcasing authentic **Pakistani 3-Piece Designer Suits (Luxury Lawn, Chiffon Formals, Raw Silk & Velvet)** and **Premium Turkish Hijabs & Modest Wear**, with a unique Mughal-arch architectural frontend aesthetic.

---

## 🌟 Unique Frontend Style & Key Highlights

1. **Mughal Architectural Arch Framing**:
   - Signature scalloped arch geometry on hero cards, category showcases, and product media (`border-radius: 130px 130px 12px 12px`).
   - Color palette inspired by Pakistani couture runways: Imperial Emerald (`#183B2E`), Sand Gold (`#C8A261`), Dusty Mauve (`#8E5B5B`), Warm Ivory (`#FAF7F2`), and Deep Obsidian (`#141210`).

2. **"Pair with Matching Hijab" 1-Click Feature**:
   - Each Pakistani suit is paired with an expertly color-matched designer hijab (Turkish Satin Silk, Georgette Chiffon, or Ribbed Modal).
   - Customers can check the **"Pair with Matching Hijab"** toggle on any card or inside the Quick View modal to bundle the suit and hijab together seamlessly into their bag and WhatsApp order.

3. **3-Piece Suit Anatomy & Stitching Selection**:
   - Visual breakdown of the unstitched / ready-to-wear ensemble:
     - **Kameez (Shirt)**: Pure chiffon/lawn with front resham and zardozi jaal.
     - **Dupatta**: Hand-cut scalloped organza, Banarasi zari, or pure silk.
     - **Trouser / Shalwar**: Dyed raw silk or cambric cotton with embroidered patti.
     - **Matching Hijab**: Color-coordinated modest drape.
   - Customers can select between **Unstitched 3-Piece**, **Stitched Ready-to-Wear**, and **Custom Tailored**.

4. **Interactive Hijab Fabric & Drape Guide**:
   - Educational comparison of fabrics: **Turkish Silk Satin** (royal sheen, opaque), **Premium Georgette Chiffon** (airy, textured), and **Organic Ribbed Modal** (buttery soft, pin-free).

5. **Direct WhatsApp Checkout & Concierge**:
   - Itemized WhatsApp message builder that automatically encodes the suit name, stitching option (Unstitched / Stitched), paired matching hijab selection, size, color, subtotal, discount, and total.

6. **Interactive Slide-Out Bag & Modest Wishlist**:
   - Real-time subtotal calculations, promo code discounts (`MODEST10` for 10% off), and a **Free Express Delivery Progress Bar** (unlocks at $200).

---

## 📂 Project Structure

```text
zulfabotq/
├── index.html        # Main Pakistani couture & hijab landing page
├── css/
│   └── style.css     # Mughal arch styling, modest color tokens, responsive grid
├── js/
│   ├── data.js       # Pakistani 3-piece suits, matching hijabs, fabric guides
│   └── app.js        # Cart drawer, pair-with-hijab logic, WhatsApp order builder
├── server.ps1        # Built-in local HTTP server runner
└── README.md         # Documentation & guide
```

---

## 🚀 How to Run & Preview Locally

Run the local server script:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Then visit **[http://localhost:5500/](http://localhost:5500/)** in your browser.
