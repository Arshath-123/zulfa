// ==========================================================================
// ZULFA BOUTIQ - Interactive Logic with Indian Rupee (₹ INR) Formatting
// Handles Pakistani Suits, Premium Abayas, Designer Kurtis, Maxis & Hijabs
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    cart: JSON.parse(localStorage.getItem("zb_cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("zb_wishlist")) || [],
    activeCategory: "all",
    appliedDiscount: 0,
    appliedPromoCode: "",
    activeQuickViewProduct: null,
    selectedSize: null,
    selectedColor: null,
    selectedStitching: "Standard",
    pairedHijabSelected: false
  };

  // Helper: Format price in Indian Rupees (₹) with Indian numbering (e.g. ₹4,999)
  function formatINR(amount) {
    if (isNaN(amount)) return `${BOUTIQUE_CONFIG.currency}0`;
    return `${BOUTIQUE_CONFIG.currency}${Math.round(amount).toLocaleString('en-IN')}`;
  }

  // DOM Elements
  const header = document.querySelector(".site-header");
  const productsGrid = document.getElementById("products-grid");
  const filterTabsContainer = document.getElementById("filter-tabs");
  const hijabGuideGrid = document.getElementById("hijab-guide-grid");
  const cartBadge = document.getElementById("cart-badge");
  const wishlistBadge = document.getElementById("wishlist-badge");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartItemsContainer = document.getElementById("cart-items-container");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartTotalEl = document.getElementById("cart-total");
  const shippingProgressBar = document.getElementById("shipping-progress-bar");
  const shippingText = document.getElementById("shipping-text");
  const promoInput = document.getElementById("promo-input");
  const applyPromoBtn = document.getElementById("apply-promo-btn");
  const discountRow = document.getElementById("discount-row");
  const discountAmountEl = document.getElementById("discount-amount");
  const waCheckoutBtn = document.getElementById("btn-wa-checkout");
  const quickViewModal = document.getElementById("quick-view-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const searchModal = document.getElementById("search-modal");
  const searchCloseBtn = document.getElementById("search-close-btn");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const toastNotification = document.getElementById("toast-notification");
  const toastMessage = document.getElementById("toast-message");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
  const mobileMenuToggle = document.getElementById("menu-toggle-btn");
  const mobileNavClose = document.getElementById("mobile-nav-close");

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ==========================================================================
  // Toast Notification
  // ==========================================================================
  let toastTimeout;
  function showToast(message, icon = "fa-check-circle") {
    if (!toastNotification) return;
    clearTimeout(toastTimeout);
    toastMessage.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
    toastNotification.classList.add("active");
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove("active");
    }, 3500);
  }

  // ==========================================================================
  // Category Filter Tabs
  // ==========================================================================
  function renderFilterTabs() {
    if (!filterTabsContainer) return;
    filterTabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button class="filter-btn ${state.activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join("");

    filterTabsContainer.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterTabsContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeCategory = btn.dataset.category;
        renderProducts();
      });
    });
  }

  // ==========================================================================
  // Render Products
  // ==========================================================================
  function renderProducts() {
    if (!productsGrid) return;
    
    let filtered = PRODUCTS;
    if (state.activeCategory !== "all") {
      filtered = PRODUCTS.filter(p => p.category === state.activeCategory);
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--c-text-muted);">
          <p>No creations currently found in this category.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(product => {
      const isWishlisted = state.wishlist.includes(product.id);
      const hasMatchingHijab = Boolean(product.matchingHijab && product.matchingHijab.price > 0);

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-media">
            <span class="product-badge">${product.badge}</span>
            <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" title="Add to Wishlist">
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
            <button class="quick-view-trigger" data-id="${product.id}">
              <i class="fa-regular fa-eye"></i> Quick View
            </button>
          </div>
          <div class="product-info">
            <span class="product-category-name">${product.subcategory}</span>
            <h3 class="product-name" title="${product.name}">${product.name}</h3>
            <p class="product-fabric"><i class="fa-solid fa-feather"></i> ${product.fabric}</p>
            <div class="product-rating">
              ${renderStars(product.rating)}
              <span>(${product.reviewCount})</span>
            </div>

            ${hasMatchingHijab ? `
              <div class="pair-hijab-box" data-id="${product.id}" title="Include color-matched modest hijab">
                <input type="checkbox" class="pair-hijab-checkbox" id="hijab-chk-${product.id}" data-id="${product.id}" />
                <label for="hijab-chk-${product.id}" class="pair-hijab-text">
                  Pair with Matching Hijab
                </label>
                <span class="pair-hijab-price">+${formatINR(product.matchingHijab.price)}</span>
              </div>
            ` : ''}

            <div class="product-price-row">
              <span class="product-price" id="price-display-${product.id}">
                ${formatINR(product.price)}
              </span>
              ${product.originalPrice ? `<span class="product-original-price">${formatINR(product.originalPrice)}</span>` : ''}
            </div>
            <div class="product-card-actions">
              <button class="btn-add-bag" data-id="${product.id}">
                <i class="fa-solid fa-bag-shopping"></i> Add to Bag
              </button>
              <button class="btn-wa-quick" data-id="${product.id}" title="Order on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    attachProductCardEvents();
  }

  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let html = "";
    for (let i = 0; i < fullStars; i++) {
      html += `<i class="fa-solid fa-star"></i>`;
    }
    if (hasHalf) {
      html += `<i class="fa-solid fa-star-half-stroke"></i>`;
    }
    return html;
  }

  // ==========================================================================
  // Attach Product Card Listeners
  // ==========================================================================
  function attachProductCardEvents() {
    // Quick View buttons
    document.querySelectorAll(".quick-view-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openQuickView(btn.dataset.id);
      });
    });

    // Wishlist buttons
    document.querySelectorAll(".product-wishlist-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWishlist(btn.dataset.id, btn);
      });
    });

    // Pair Hijab Checkbox Toggle on Card
    document.querySelectorAll(".pair-hijab-checkbox").forEach(chk => {
      chk.addEventListener("change", (e) => {
        const prodId = chk.dataset.id;
        const product = PRODUCTS.find(p => p.id === prodId);
        const priceEl = document.getElementById(`price-display-${prodId}`);
        const box = chk.closest(".pair-hijab-box");

        if (box) {
          if (chk.checked) {
            box.classList.add("active");
            if (priceEl && product && product.matchingHijab) {
              const comboPrice = product.price + product.matchingHijab.price;
              priceEl.innerHTML = `${formatINR(comboPrice)} <span style="font-size:0.75rem; color:var(--c-emerald); font-weight:600;">(Suit + Hijab)</span>`;
            }
          } else {
            box.classList.remove("active");
            if (priceEl && product) {
              priceEl.innerHTML = formatINR(product.price);
            }
          }
        }
      });
    });

    // Add to Bag buttons
    document.querySelectorAll(".btn-add-bag").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const prodId = btn.dataset.id;
        const product = PRODUCTS.find(p => p.id === prodId);
        if (!product) return;

        const hijabChk = document.getElementById(`hijab-chk-${prodId}`);
        const includeHijab = hijabChk && hijabChk.checked;

        const defaultStitching = product.stitchingOptions ? product.stitchingOptions[0] : "Standard";
        addToCart(product, product.sizes[0], product.colors[0]?.name || "Default", defaultStitching, 1);

        if (includeHijab && product.matchingHijab && product.matchingHijab.price > 0) {
          addMatchingHijabToCart(product.matchingHijab, product.name);
        }

        showToast(`Added <strong>${product.name}</strong>${includeHijab ? ' + Matching Hijab' : ''} to your bag!`);
      });
    });

    // Quick WhatsApp inquiry buttons
    document.querySelectorAll(".btn-wa-quick").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const prodId = btn.dataset.id;
        const product = PRODUCTS.find(p => p.id === prodId);
        if (product) {
          const hijabChk = document.getElementById(`hijab-chk-${prodId}`);
          const includeHijab = hijabChk && hijabChk.checked;
          sendWhatsAppInquiry(product, product.sizes[0], product.colors[0]?.name, includeHijab);
        }
      });
    });
  }

  // ==========================================================================
  // Render Hijab Fabric Guide
  // ==========================================================================
  function renderHijabGuide() {
    if (!hijabGuideGrid || !HIJAB_FABRIC_GUIDE) return;

    hijabGuideGrid.innerHTML = HIJAB_FABRIC_GUIDE.map(item => `
      <div class="fabric-card">
        <div class="fabric-icon"><i class="fa-solid fa-gem"></i></div>
        <h3>${item.fabricName}</h3>
        <p class="fabric-tagline">${item.tagline}</p>

        <div class="fabric-metrics">
          <div class="metric-row">
            <span>Opacity Level:</span>
            <span>${item.opacity}</span>
          </div>
          <div class="metric-row">
            <span>Breathability:</span>
            <span>${item.breathability}</span>
          </div>
          <div class="metric-row">
            <span>Drape Style:</span>
            <span>${item.drape}</span>
          </div>
          <div class="metric-row">
            <span>Pin Preference:</span>
            <span>${item.pinsNeeded}</span>
          </div>
        </div>

        <p class="fabric-desc">${item.desc}</p>
        <div style="margin-top: 16px; font-size: 0.78rem; color: var(--c-emerald); font-weight: 600;">
          <i class="fa-solid fa-check"></i> Best Paired With: ${item.bestFor}
        </div>
      </div>
    `).join("");
  }

  // ==========================================================================
  // Wishlist Handling
  // ==========================================================================
  function toggleWishlist(productId, btnElement) {
    const idx = state.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    const prodName = product ? product.name : "Item";

    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      btnElement.classList.remove("active");
      btnElement.innerHTML = `<i class="fa-regular fa-heart"></i>`;
      showToast(`Removed from your wishlist.`);
    } else {
      state.wishlist.push(productId);
      btnElement.classList.add("active");
      btnElement.innerHTML = `<i class="fa-solid fa-heart"></i>`;
      showToast(`Added <strong>${prodName}</strong> to your wishlist!`, "fa-heart");
    }
    localStorage.setItem("zb_wishlist", JSON.stringify(state.wishlist));
    updateWishlistBadge();
  }

  function updateWishlistBadge() {
    if (!wishlistBadge) return;
    wishlistBadge.textContent = state.wishlist.length;
    wishlistBadge.style.display = state.wishlist.length > 0 ? "flex" : "none";
  }

  // ==========================================================================
  // Cart Management
  // ==========================================================================
  function addToCart(product, size, color, stitching = "Standard", quantity = 1) {
    const existingIndex = state.cart.findIndex(
      item => item.id === product.id && item.size === size && item.color === color && item.stitching === stitching
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: size,
        color: color,
        stitching: stitching,
        fabric: product.fabric,
        quantity: quantity,
        isHijab: product.category === "hijabs"
      });
    }

    saveCart();
    renderCart();
    openCartDrawer();
  }

  function addMatchingHijabToCart(hijabObj, parentSuitName) {
    const existingIndex = state.cart.findIndex(item => item.id === hijabObj.id);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += 1;
    } else {
      state.cart.push({
        id: hijabObj.id,
        name: hijabObj.name,
        price: hijabObj.price,
        image: hijabObj.image,
        size: "Standard (190 x 75 cm)",
        color: "Matching Palette",
        stitching: "Finished Edges",
        fabric: hijabObj.fabric,
        quantity: 1,
        isHijab: true,
        pairedWith: parentSuitName
      });
    }
    saveCart();
    renderCart();
  }

  function updateCartItemQuantity(index, delta) {
    if (state.cart[index]) {
      state.cart[index].quantity += delta;
      if (state.cart[index].quantity <= 0) {
        state.cart.splice(index, 1);
      }
      saveCart();
      renderCart();
    }
  }

  function removeCartItem(index) {
    if (state.cart[index]) {
      const removed = state.cart.splice(index, 1);
      showToast(`Removed <strong>${removed[0]?.name}</strong> from bag.`);
      saveCart();
      renderCart();
    }
  }

  function saveCart() {
    localStorage.setItem("zb_cart", JSON.stringify(state.cart));
    updateCartBadge();
  }

  function updateCartBadge() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
      cartBadge.textContent = totalCount;
      cartBadge.style.display = totalCount > 0 ? "flex" : "none";
    }
  }

  function renderCart() {
    if (!cartItemsContainer) return;

    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>Your Shopping Bag is Empty</h4>
          <p>Discover our Pakistani suits, luxury Dubai abayas, kurtis, maxis &amp; hijabs.</p>
          <button class="btn btn-primary" id="btn-empty-shop">Explore Collection</button>
        </div>
      `;
      const emptyShopBtn = document.getElementById("btn-empty-shop");
      if (emptyShopBtn) {
        emptyShopBtn.addEventListener("click", () => {
          closeCartDrawer();
          const target = document.getElementById("collection");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        });
      }

      if (cartSubtotalEl) cartSubtotalEl.textContent = formatINR(0);
      if (cartTotalEl) cartTotalEl.textContent = formatINR(0);
      if (discountRow) discountRow.style.display = "none";
      if (shippingProgressBar) shippingProgressBar.style.width = "0%";
      if (shippingText) shippingText.textContent = `Add ${formatINR(BOUTIQUE_CONFIG.freeShippingThreshold)} more for complimentary express delivery across India.`;
      return;
    }

    cartItemsContainer.innerHTML = state.cart.map((item, idx) => `
      <div class="cart-item" data-index="${idx}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-meta">
            ${item.isHijab ? `<span style="color:var(--c-emerald); font-weight:700;">[MODEST HIJAB]</span>` : `<span>Size/Length: <strong>${item.size}</strong></span>`}
            ${item.stitching && item.stitching !== 'Standard' ? `<br><small style="color:var(--c-text-muted);">Cut: ${item.stitching}</small>` : ''}
            ${item.pairedWith ? `<br><small style="color:var(--c-gold);">Matched with ${item.pairedWith}</small>` : ''}
          </div>
          <div class="cart-item-price">${formatINR(item.price * item.quantity)}</div>
          <div class="cart-item-controls">
            <div class="quantity-control">
              <button class="qty-btn qty-minus" data-index="${idx}">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn qty-plus" data-index="${idx}">+</button>
            </div>
            <button class="cart-remove-btn" data-index="${idx}">Remove</button>
          </div>
        </div>
      </div>
    `).join("");

    // Attach cart control listeners
    cartItemsContainer.querySelectorAll(".qty-minus").forEach(b => {
      b.addEventListener("click", () => updateCartItemQuantity(parseInt(b.dataset.index), -1));
    });
    cartItemsContainer.querySelectorAll(".qty-plus").forEach(b => {
      b.addEventListener("click", () => updateCartItemQuantity(parseInt(b.dataset.index), 1));
    });
    cartItemsContainer.querySelectorAll(".cart-remove-btn").forEach(b => {
      b.addEventListener("click", () => removeCartItem(parseInt(b.dataset.index)));
    });

    // Calculate totals
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountVal = subtotal * state.appliedDiscount;
    const finalTotal = Math.max(0, subtotal - discountVal);

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatINR(subtotal);
    if (cartTotalEl) cartTotalEl.textContent = formatINR(finalTotal);

    if (state.appliedDiscount > 0 && discountRow && discountAmountEl) {
      discountRow.style.display = "flex";
      discountAmountEl.textContent = `-${formatINR(discountVal)} (${state.appliedPromoCode})`;
    } else if (discountRow) {
      discountRow.style.display = "none";
    }

    // Free Shipping Progress
    const diff = BOUTIQUE_CONFIG.freeShippingThreshold - subtotal;
    if (diff <= 0) {
      if (shippingProgressBar) shippingProgressBar.style.width = "100%";
      if (shippingText) shippingText.innerHTML = `<span style="color: var(--c-gold); font-weight: 700;">🎉 Congratulations! You have unlocked Complimentary Express Delivery across India!</span>`;
    } else {
      const percentage = Math.min(100, Math.round((subtotal / BOUTIQUE_CONFIG.freeShippingThreshold) * 100));
      if (shippingProgressBar) shippingProgressBar.style.width = `${percentage}%`;
      if (shippingText) shippingText.textContent = `Add ${formatINR(diff)} more for complimentary express delivery.`;
    }
  }

  function openCartDrawer() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.add("active");
      cartBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.remove("active");
      cartBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Promo Code handling
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (BOUTIQUE_CONFIG.promoCodes[code]) {
        state.appliedDiscount = BOUTIQUE_CONFIG.promoCodes[code];
        state.appliedPromoCode = code;
        showToast(`Promo code <strong>${code}</strong> applied! (${state.appliedDiscount * 100}% OFF)`);
        renderCart();
      } else if (code === "") {
        showToast("Please enter a promo code.", "fa-circle-exclamation");
      } else {
        showToast(`Invalid code. Try "MODEST10" for 10% off!`, "fa-circle-exclamation");
      }
    });
  }

  // ==========================================================================
  // WhatsApp Order & Direct Inquiries in INR (₹)
  // ==========================================================================
  function generateWhatsAppOrderUrl() {
    if (state.cart.length === 0) return null;

    let itemsText = state.cart.map((item, idx) => {
      return `${idx + 1}. *${item.name}*\n   • Option/Cut: ${item.stitching || 'Standard'}\n   • Size/Length: ${item.size}\n   • Color: ${item.color}\n   • Qty: ${item.quantity}\n   • Price: ${formatINR(item.price * item.quantity)}`;
    }).join("\n\n");

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountVal = subtotal * state.appliedDiscount;
    const finalTotal = Math.max(0, subtotal - discountVal);

    let summaryText = `\n\n*Order Summary (INR ₹):*` +
      `\n• Subtotal: ${formatINR(subtotal)}`;

    if (state.appliedDiscount > 0) {
      summaryText += `\n• Discount (${state.appliedPromoCode}): -${formatINR(discountVal)}`;
    }

    summaryText += `\n• Total: *${formatINR(finalTotal)}*`;
    summaryText += `\n\nPlease confirm availability for stitching and delivery dispatch. Shukran!`;

    const fullMessage = `${BOUTIQUE_CONFIG.whatsappDefaultMsg}\n\n${itemsText}${summaryText}`;
    const cleanNumber = BOUTIQUE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(fullMessage)}`;
  }

  if (waCheckoutBtn) {
    waCheckoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Your bag is empty! Add an item first.", "fa-circle-exclamation");
        return;
      }
      const url = generateWhatsAppOrderUrl();
      if (url) {
        window.open(url, "_blank");
      }
    });
  }

  function sendWhatsAppInquiry(product, selectedSize = null, selectedColor = null, includeHijab = false) {
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0]?.name || "Default";
    let msg = `Salam Zulfa Boutiq! I am inquiring about:\n\n*${product.name}*\n• SKU: ${product.id}\n• Price: ${formatINR(product.price)}\n• Selected Size/Length: ${size}\n• Color: ${color}\n• Fabric: ${product.fabric}`;

    if (includeHijab && product.matchingHijab && product.matchingHijab.price > 0) {
      msg += `\n• *Including Matched Hijab*: ${product.matchingHijab.name} (+${formatINR(product.matchingHijab.price)})`;
    }

    msg += `\n\nIs this in stock for dispatch?`;
    const cleanNumber = BOUTIQUE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  // ==========================================================================
  // Quick View Modal
  // ==========================================================================
  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !quickViewModal) return;

    state.activeQuickViewProduct = product;
    state.selectedSize = product.sizes[0];
    state.selectedColor = product.colors[0]?.name || "";
    state.selectedStitching = product.stitchingOptions ? product.stitchingOptions[0] : "Standard";
    state.pairedHijabSelected = false;

    const modalContent = document.getElementById("quick-view-content");
    if (!modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-grid">
        <div class="modal-image-col">
          <div class="modal-main-img">
            <img id="modal-active-img" src="${product.images[0]}" alt="${product.name}" />
          </div>
          <div class="modal-thumbs">
            ${product.images.map((img, i) => `
              <div class="modal-thumb ${i === 0 ? 'active' : ''}" data-src="${img}">
                <img src="${img}" alt="thumbnail ${i + 1}" />
              </div>
            `).join("")}
          </div>
        </div>
        <div class="modal-details">
          <span class="product-category-name">${product.subcategory}</span>
          <h3>${product.name}</h3>
          <div class="product-rating" style="margin-bottom: 12px;">
            ${renderStars(product.rating)}
            <span>(${product.reviewCount} verified reviews)</span>
          </div>
          <div class="modal-price-row">
            <span class="modal-price" id="modal-price-val">${formatINR(product.price)}</span>
            ${product.originalPrice ? `<span class="product-original-price">${formatINR(product.originalPrice)}</span>` : ''}
          </div>
          <p class="modal-desc">${product.description}</p>

          ${product.suitComponents ? `
            <div class="modal-suit-specs">
              ${product.suitComponents.shirt ? `<div class="spec-line"><span class="spec-badge">Shirt</span> ${product.suitComponents.shirt}</div>` : ''}
              ${product.suitComponents.dupatta ? `<div class="spec-line"><span class="spec-badge">Dupatta</span> ${product.suitComponents.dupatta}</div>` : ''}
              ${product.suitComponents.trouser ? `<div class="spec-line"><span class="spec-badge">Trouser</span> ${product.suitComponents.trouser}</div>` : ''}
              ${product.suitComponents.abaya ? `<div class="spec-line"><span class="spec-badge">Abaya</span> ${product.suitComponents.abaya}</div>` : ''}
              ${product.suitComponents.innerSlip ? `<div class="spec-line"><span class="spec-badge">Inner Slip</span> ${product.suitComponents.innerSlip}</div>` : ''}
              ${product.suitComponents.kurti ? `<div class="spec-line"><span class="spec-badge">Kurti</span> ${product.suitComponents.kurti}</div>` : ''}
              ${product.suitComponents.maxi ? `<div class="spec-line"><span class="spec-badge">Maxi</span> ${product.suitComponents.maxi}</div>` : ''}
            </div>
          ` : ''}

          <!-- Matching Hijab Pair Box inside Modal -->
          ${product.matchingHijab && product.matchingHijab.price > 0 ? `
            <div class="modal-hijab-box">
              <div class="modal-hijab-thumb">
                <img src="${product.matchingHijab.image}" alt="${product.matchingHijab.name}" />
              </div>
              <div class="modal-hijab-info">
                <div class="modal-hijab-title">Pair with Matching Hijab</div>
                <div class="modal-hijab-sub">${product.matchingHijab.name} (${product.matchingHijab.fabric})</div>
              </div>
              <button class="modal-hijab-btn" id="modal-pair-hijab-btn">
                <i class="fa-solid fa-plus"></i> Add (+${formatINR(product.matchingHijab.price)})
              </button>
            </div>
          ` : ''}

          <!-- Stitching / Cut Option -->
          ${product.stitchingOptions && product.stitchingOptions.length > 1 ? `
            <div class="option-group">
              <div class="option-label">
                <span>Selection: <strong id="selected-stitching-label">${product.stitchingOptions[0]}</strong></span>
              </div>
              <div class="size-chips">
                ${product.stitchingOptions.map((opt, i) => `
                  <button class="size-chip ${i === 0 ? 'active' : ''} modal-stitch-chip" data-stitch="${opt}">${opt}</button>
                `).join("")}
              </div>
            </div>
          ` : ''}

          <!-- Color selection -->
          <div class="option-group">
            <div class="option-label">
              <span>Select Color: <strong id="selected-color-label">${product.colors[0]?.name}</strong></span>
            </div>
            <div class="color-swatches">
              ${product.colors.map((c, i) => `
                <div class="color-swatch ${i === 0 ? 'active' : ''}" 
                     style="background-color: ${c.hex};" 
                     data-name="${c.name}"
                     title="${c.name}">
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Size / Length selection -->
          <div class="option-group">
            <div class="option-label">
              <span>Select Size / Length: <strong id="selected-size-label">${product.sizes[0]}</strong></span>
              <a href="#consultation" id="btn-custom-fit-link" style="font-size: 0.75rem; color: var(--c-gold); text-decoration: underline;">Custom Sizing?</a>
            </div>
            <div class="size-chips">
              ${product.sizes.map((s, i) => `
                <button class="size-chip ${i === 0 ? 'active' : ''} modal-size-chip" data-size="${s}">${s}</button>
              `).join("")}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="modal-actions">
            <button class="btn btn-primary" id="modal-add-bag">
              <i class="fa-solid fa-bag-shopping"></i> Add to Bag
            </button>
            <button class="btn btn-gold" id="modal-wa-order">
              <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;

    // Thumb click events
    modalContent.querySelectorAll(".modal-thumb").forEach(thumb => {
      thumb.addEventListener("click", () => {
        modalContent.querySelectorAll(".modal-thumb").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        const activeImg = document.getElementById("modal-active-img");
        if (activeImg) activeImg.src = thumb.dataset.src;
      });
    });

    // Pair Hijab Button inside Modal
    const modalPairHijabBtn = document.getElementById("modal-pair-hijab-btn");
    const modalPriceVal = document.getElementById("modal-price-val");
    if (modalPairHijabBtn && product.matchingHijab) {
      modalPairHijabBtn.addEventListener("click", () => {
        state.pairedHijabSelected = !state.pairedHijabSelected;
        if (state.pairedHijabSelected) {
          modalPairHijabBtn.classList.add("added");
          modalPairHijabBtn.innerHTML = `<i class="fa-solid fa-check"></i> Hijab Added (+${formatINR(product.matchingHijab.price)})`;
          if (modalPriceVal) {
            modalPriceVal.innerHTML = `${formatINR(product.price + product.matchingHijab.price)} <span style="font-size:0.8rem; color:var(--c-emerald);">(with Hijab)</span>`;
          }
        } else {
          modalPairHijabBtn.classList.remove("added");
          modalPairHijabBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add (+${formatINR(product.matchingHijab.price)})`;
          if (modalPriceVal) {
            modalPriceVal.innerHTML = formatINR(product.price);
          }
        }
      });
    }

    // Stitching click events
    modalContent.querySelectorAll(".modal-stitch-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        modalContent.querySelectorAll(".modal-stitch-chip").forEach(s => s.classList.remove("active"));
        chip.classList.add("active");
        state.selectedStitching = chip.dataset.stitch;
        const label = document.getElementById("selected-stitching-label");
        if (label) label.textContent = state.selectedStitching;
      });
    });

    // Color click events
    modalContent.querySelectorAll(".color-swatch").forEach(swatch => {
      swatch.addEventListener("click", () => {
        modalContent.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
        swatch.classList.add("active");
        state.selectedColor = swatch.dataset.name;
        const label = document.getElementById("selected-color-label");
        if (label) label.textContent = state.selectedColor;
      });
    });

    // Size click events
    modalContent.querySelectorAll(".modal-size-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        modalContent.querySelectorAll(".modal-size-chip").forEach(s => s.classList.remove("active"));
        chip.classList.add("active");
        state.selectedSize = chip.dataset.size;
        const label = document.getElementById("selected-size-label");
        if (label) label.textContent = state.selectedSize;
      });
    });

    // Modal Add Bag
    const modalAddBagBtn = document.getElementById("modal-add-bag");
    if (modalAddBagBtn) {
      modalAddBagBtn.addEventListener("click", () => {
        addToCart(product, state.selectedSize, state.selectedColor, state.selectedStitching);
        if (state.pairedHijabSelected && product.matchingHijab) {
          addMatchingHijabToCart(product.matchingHijab, product.name);
        }
        closeQuickView();
        showToast(`Added <strong>${product.name}</strong>${state.pairedHijabSelected ? ' + Matching Hijab' : ''} to bag!`);
      });
    }

    // Modal WhatsApp Order
    const modalWaOrderBtn = document.getElementById("modal-wa-order");
    if (modalWaOrderBtn) {
      modalWaOrderBtn.addEventListener("click", () => {
        sendWhatsAppInquiry(product, state.selectedSize, state.selectedColor, state.pairedHijabSelected);
      });
    }

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeQuickView() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // ==========================================================================
  // Search Overlay
  // ==========================================================================
  function openSearch() {
    if (searchModal && searchInput) {
      searchModal.classList.add("active");
      searchInput.value = "";
      renderSearchResults("");
      setTimeout(() => searchInput.focus(), 150);
      document.body.style.overflow = "hidden";
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const cleanQuery = query.toLowerCase().trim();

    if (!cleanQuery) {
      searchResults.innerHTML = `
        <div style="color: #ADA59A; text-align: center; padding: 20px;">
          Type outfit, abaya, kurti, maxi, or fabric (e.g., "Abaya", "Chikankari", "Maxi", "Silk")...
        </div>
      `;
      return;
    }

    const matches = PRODUCTS.filter(p => {
      return p.name.toLowerCase().includes(cleanQuery) ||
             p.category.toLowerCase().includes(cleanQuery) ||
             p.subcategory.toLowerCase().includes(cleanQuery) ||
             p.fabric.toLowerCase().includes(cleanQuery);
    });

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="color: #ADA59A; text-align: center; padding: 20px;">
          No creations found matching "${query}".
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(p => `
      <div class="search-result-item" data-id="${p.id}">
        <div class="search-result-img">
          <img src="${p.images[0]}" alt="${p.name}" />
        </div>
        <div>
          <div style="font-size: 0.72rem; color: var(--c-gold); text-transform: uppercase;">${p.subcategory}</div>
          <div style="font-family: var(--font-serif); font-size: 1.05rem;">${p.name}</div>
          <div style="font-size: 0.85rem; color: #EDE7DD;">${formatINR(p.price)}</div>
        </div>
      </div>
    `).join("");

    searchResults.querySelectorAll(".search-result-item").forEach(item => {
      item.addEventListener("click", () => {
        const prodId = item.dataset.id;
        closeSearch();
        openQuickView(prodId);
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // ==========================================================================
  // Consultation Booking Form
  // ==========================================================================
  const consultationForm = document.getElementById("consultation-form");
  if (consultationForm) {
    consultationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("book-name")?.value || "Valued Client";
      const phone = document.getElementById("book-phone")?.value || "";
      const date = document.getElementById("book-date")?.value || "Soon";
      const service = document.getElementById("book-service")?.value || "Bespoke Fitting";

      showToast(`✨ Shukran, ${name}! Your consultation request for ${service} on ${date} is confirmed. Our stylist will contact you on WhatsApp at ${phone}.`, "fa-calendar-check");
      consultationForm.reset();
    });
  }

  // ==========================================================================
  // Newsletter Form
  // ==========================================================================
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletter-email");
      if (emailInput && emailInput.value) {
        showToast(`Welcome to Zulfa VIP! Use code <strong>MODEST10</strong> for 10% off your first order.`, "fa-gift");
        emailInput.value = "";
      }
    });
  }

  // ==========================================================================
  // Mobile Nav Drawer
  // ==========================================================================
  function openMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add("active");
  }

  function closeMobileNav() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove("active");
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", openMobileNav);
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener("click", closeMobileNav);
  }

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMobileNav);
  });

  // Global Triggers
  document.querySelectorAll(".trigger-cart").forEach(btn => {
    btn.addEventListener("click", openCartDrawer);
  });
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);

  document.querySelectorAll(".trigger-search").forEach(btn => {
    btn.addEventListener("click", openSearch);
  });
  if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearch);
  if (searchModal) {
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeQuickView);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeQuickView();
    });
  }

  const standardCheckoutBtn = document.getElementById("btn-standard-checkout");
  if (standardCheckoutBtn) {
    standardCheckoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Your bag is empty! Add an item first.", "fa-circle-exclamation");
        return;
      }
      showToast("Directing to WhatsApp checkout in Indian Rupees (₹)...", "fa-bag-shopping");
      setTimeout(() => {
        const url = generateWhatsAppOrderUrl();
        if (url) window.open(url, "_blank");
      }, 700);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeQuickView();
      closeSearch();
      closeMobileNav();
    }
  });

  // Initialize
  renderFilterTabs();
  renderProducts();
  renderHijabGuide();
  renderCart();
  updateWishlistBadge();
  updateCartBadge();
});
