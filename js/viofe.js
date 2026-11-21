/* ==========================================================================
   VIOFE All-in-One Engine (Zero-CORS, Works with file:// & http://)
   ========================================================================== */

(function (root) {
  "use strict";

  // 1. DATA LAYER
  const categories = [
    {
      slug: "sarees",
      name: "Sarees",
      index: "01",
      blurb: "Handwoven silks with zari that catches candlelight.",
      image: "assets/saree-maroon.jpg",
    },
    {
      slug: "bangles",
      name: "Bangles",
      index: "02",
      blurb: "Stacked heirlooms in antique gold and enamel.",
      image: "assets/bangles-gold.jpg",
    },
    {
      slug: "earrings",
      name: "Earrings",
      index: "03",
      blurb: "Jhumkas and chandeliers that move as you do.",
      image: "assets/earrings-jhumka.jpg",
    },
    {
      slug: "necklaces",
      name: "Necklaces",
      index: "04",
      blurb: "Kundan, pearl and temple gold for the grand moment.",
      image: "assets/necklace-kundan.jpg",
    },
    {
      slug: "accessories",
      name: "Accessories",
      index: "05",
      blurb: "Potlis, hair jewels and finishing touches.",
      image: "assets/accessories-potli.jpg",
    },
  ];

  const products = [
    {
      slug: "rani-banarasi-silk-saree",
      sku: "VF-SR-001",
      name: "Rani Banarasi Silk Saree",
      category: "sarees",
      price: 28500,
      tagline: "Deep maroon katan silk, real zari border",
      description:
        "Woven over eleven days on a traditional pit loom, the Rani carries paisley buttis across a deep maroon katan silk ground, finished with a broad antique-gold zari border and a richly worked pallu.",
      details: ["Pure katan silk", "Antique gold zari", "5.5 m saree + 0.8 m blouse piece", "Handwoven in Varanasi"],
      care: "Dry clean only. Store folded in muslin, refold every few months.",
      images: ["assets/saree-maroon.jpg", "assets/hero.jpg"],
      badge: "Bestseller",
      option: { label: "Blouse", values: ["Unstitched", "Stitched to measure"] },
      rating: 4.9,
      reviews: 128,
      stock: 14,
    },
    {
      slug: "noor-organza-saree",
      sku: "VF-SR-002",
      name: "Noor Organza Saree",
      category: "sarees",
      price: 22900,
      tagline: "Ivory silk organza, scalloped gold embroidery",
      description:
        "Weightless ivory organza hand-embroidered with gold florets and finished with a scalloped edge — made for day weddings and soft evening light.",
      details: ["Silk organza", "Hand-embroidered zari florets", "Scalloped border", "Includes embroidered blouse piece"],
      care: "Dry clean only. Steam lightly on low heat.",
      images: ["assets/saree-ivory.jpg", "assets/editorial.jpg"],
      badge: "New",
      option: { label: "Blouse", values: ["Unstitched", "Stitched to measure"] },
      rating: 4.8,
      reviews: 64,
      stock: 9,
    },
    {
      slug: "gulab-kanjeevaram-saree",
      sku: "VF-SR-003",
      name: "Gulab Kanjeevaram Saree",
      category: "sarees",
      price: 31200,
      compareAt: 34800,
      tagline: "Dusty rose mulberry silk, temple border",
      description:
        "A heavy Kanjeevaram in dusty rose with a temple-gopuram border and a contrast gold pallu. Interlocked by hand so the border will never part from the body.",
      details: ["Mulberry silk", "Korvai interlocked border", "Tested pure zari", "Silk mark certified"],
      care: "Dry clean only. Wrap in cotton cloth, avoid plastic.",
      images: ["assets/saree-rose.jpg", "assets/saree-maroon.jpg"],
      badge: "Limited",
      option: { label: "Blouse", values: ["Unstitched", "Stitched to measure"] },
      rating: 5,
      reviews: 41,
      stock: 4,
    },
    {
      slug: "mahal-antique-kada-set",
      sku: "VF-BG-001",
      name: "Mahal Antique Kada Set",
      category: "bangles",
      price: 12800,
      tagline: "Set of six with a filigree openable kada",
      description:
        "Six engraved bangles in antique gold finish paired with a filigree kada set with ruby-red stones. The kada opens on a hidden hinge for easy wear.",
      details: ["22k gold-plated brass", "Ruby-toned stones", "Set of 6 + 1 kada", "Nickel free"],
      care: "Keep away from perfume and water. Wipe with a soft dry cloth.",
      images: ["assets/bangles-gold.jpg", "assets/bangles-enamel.jpg"],
      badge: "Bestseller",
      option: { label: "Size", values: ["2.4", "2.6", "2.8"] },
      rating: 4.8,
      reviews: 212,
      stock: 22,
    },
    {
      slug: "shehzadi-enamel-bangle-stack",
      sku: "VF-BG-002",
      name: "Shehzadi Enamel Bangle Stack",
      category: "bangles",
      price: 8400,
      tagline: "Maroon meenakari with slim gold bangles",
      description:
        "A hand-painted maroon meenakari bangle with gold lattice, stacked with four slim polished bangles. Quiet enough for daily wear, rich enough for celebration.",
      details: ["Hand-painted meenakari", "Gold-plated brass", "Set of 5", "Nickel free"],
      care: "Store in the VIOFE pouch. Avoid contact with water.",
      images: ["assets/bangles-enamel.jpg", "assets/bangles-gold.jpg"],
      option: { label: "Size", values: ["2.4", "2.6", "2.8"] },
      rating: 4.7,
      reviews: 96,
      stock: 31,
    },
    {
      slug: "meher-temple-jhumkas",
      sku: "VF-ER-001",
      name: "Meher Temple Jhumkas",
      category: "earrings",
      price: 6900,
      tagline: "Antique gold domes, seed pearl fringe",
      description:
        "Floral studs give way to engraved temple domes, each fringed with a ring of seed pearls that sway softly with every turn.",
      details: ["Antique gold plating", "Shell pearls", "Push-back closure", "6.2 cm drop"],
      care: "Store separately to protect pearls. Wipe after wear.",
      images: ["assets/earrings-jhumka.jpg", "assets/hero.jpg"],
      badge: "Bestseller",
      option: { label: "Finish", values: ["Antique gold", "Bright gold"] },
      rating: 4.9,
      reviews: 305,
      stock: 40,
    },
    {
      slug: "zumurrud-chandelier-drops",
      sku: "VF-ER-002",
      name: "Zumurrud Chandelier Drops",
      category: "earrings",
      price: 9600,
      tagline: "Emerald-toned stones and baroque pearls",
      description:
        "A filigree chandelier set with emerald-toned stones and finished in tiers of pearls and teardrop baroques — evening jewellery with a sense of ceremony.",
      details: ["Gold-plated silver", "Emerald-toned glass", "Freshwater pearls", "9 cm drop"],
      care: "Store flat in the VIOFE box. Avoid perfume.",
      images: ["assets/earrings-pearl.jpg", "assets/editorial.jpg"],
      badge: "New",
      option: { label: "Finish", values: ["Yellow gold"] },
      rating: 4.8,
      reviews: 52,
      stock: 7,
    },
    {
      slug: "begum-kundan-choker",
      sku: "VF-NK-001",
      name: "Begum Kundan Choker",
      category: "necklaces",
      price: 24500,
      compareAt: 27500,
      tagline: "Uncut polki, pearls and ruby drops",
      description:
        "Our signature bridal choker. Hand-set kundan polki framed in gold, fringed with pearls and finished with ruby-red tumbled drops. Adjustable silk dori.",
      details: ["Kundan polki setting", "Ruby-toned drops", "Adjustable dori", "Comes in a velvet keepsake box"],
      care: "Store flat in its box. Have the dori replaced by VIOFE if it frays.",
      images: ["assets/necklace-kundan.jpg", "assets/editorial.jpg"],
      badge: "Limited",
      option: { label: "Set", values: ["Choker only", "Choker + earrings"] },
      rating: 5,
      reviews: 77,
      stock: 3,
    },
    {
      slug: "moti-rani-haar",
      sku: "VF-NK-002",
      name: "Moti Rani Haar",
      category: "necklaces",
      price: 14200,
      tagline: "Long pearl haar with a ruby filigree pendant",
      description:
        "A long strand of hand-knotted pearls with a gold filigree pendant set with a single ruby-toned stone, layered with two fine chains.",
      details: ["Freshwater pearls", "Gold-plated silver", "Layered 3-strand", "Lobster clasp"],
      care: "Keep pearls away from perfume and lotions. Restring every few years.",
      images: ["assets/necklace-layered.jpg", "assets/saree-ivory.jpg"],
      option: { label: "Length", values: ["Classic 28 in", "Long 32 in"] },
      rating: 4.7,
      reviews: 58,
      stock: 18,
    },
    {
      slug: "gulbahar-velvet-potli",
      sku: "VF-AC-001",
      name: "Gulbahar Velvet Potli",
      category: "accessories",
      price: 5800,
      tagline: "Maroon velvet, zardozi vines, pearl tassels",
      description:
        "A drawstring potli in deep maroon velvet, hand-embroidered with gold zardozi vines and pearl florets, finished with twisted gold cords and pearl tassels.",
      details: ["Silk velvet", "Hand zardozi embroidery", "Satin-lined interior", "22 × 20 cm"],
      care: "Spot clean only. Store stuffed with tissue in its dust bag.",
      images: ["assets/accessories-potli.jpg", "assets/editorial.jpg"],
      badge: "New",
      option: { label: "Colour", values: ["Maroon", "Ivory"] },
      rating: 4.8,
      reviews: 39,
      stock: 16,
    },
    {
      slug: "moti-jooda-hair-pin",
      sku: "VF-AC-002",
      name: "Moti Jooda Hair Pin",
      category: "accessories",
      price: 3200,
      tagline: "Gold filigree blossom with pearl drops",
      description:
        "A long gold hair pin crowned with a filigree blossom and trembling pearl drops — made to sit in a low bun with a bridal or festive saree.",
      details: ["Gold-plated brass", "Shell pearls", "14 cm pin", "Nickel free"],
      care: "Store in its pouch. Wipe after wear.",
      images: ["assets/accessories-potli.jpg", "assets/hero.jpg"],
      option: { label: "Finish", values: ["Yellow gold", "Rose gold"] },
      rating: 4.6,
      reviews: 27,
      stock: 25,
    },
  ];

  function getCategory(slug) {
    return categories.find((c) => c.slug === slug);
  }

  function getProduct(slug) {
    return products.find((p) => p.slug === slug);
  }

  function productsIn(category) {
    return category ? products.filter((p) => p.category === category) : products;
  }

  function relatedTo(product, count = 4) {
    const others = products.filter((p) => p.slug !== product.slug);
    const sameCat = others.filter((p) => p.category === product.category);
    const rest = others.filter((p) => p.category !== product.category);
    return [...sameCat, ...rest].slice(0, count);
  }

  const ORDER_STEPS = [
    "Placed",
    "Confirmed",
    "Crafted & packed",
    "Shipped",
    "Out for delivery",
    "Delivered",
  ];

  const initialAdminOrders = [
    { id: "VF-482190", customer: "Nusrat Jahan", city: "Dhaka", date: "12 Nov 2026", items: 2, total: 35400, status: "Placed" },
    { id: "VF-481774", customer: "Ayesha Rahman", city: "Chattogram", date: "11 Nov 2026", items: 1, total: 28500, status: "Confirmed" },
    { id: "VF-481530", customer: "Farzana Akter", city: "Sylhet", date: "11 Nov 2026", items: 3, total: 21300, status: "Crafted & packed" },
    { id: "VF-480912", customer: "Tahmina Chowdhury", city: "Dhaka", date: "10 Nov 2026", items: 1, total: 24500, status: "Shipped" },
    { id: "VF-480455", customer: "Sadia Islam", city: "Khulna", date: "09 Nov 2026", items: 2, total: 16500, status: "Out for delivery" },
    { id: "VF-479801", customer: "Mehjabin Karim", city: "Rajshahi", date: "08 Nov 2026", items: 4, total: 41200, status: "Delivered" },
  ];

  const monthlyRevenue = [
    { month: "Jun", revenue: 412000 },
    { month: "Jul", revenue: 468000 },
    { month: "Aug", revenue: 455000 },
    { month: "Sep", revenue: 590000 },
    { month: "Oct", revenue: 742000 },
    { month: "Nov", revenue: 815000 },
  ];

  function demoStatusFor(id) {
    const digits = id ? id.replace(/\D/g, "") : "";
    const n = digits ? Number(digits.slice(-2)) : 0;
    return n % ORDER_STEPS.length;
  }

  // 2. PRICING & STATE STORAGE
  const FREE_SHIPPING_THRESHOLD = 15000;
  const STANDARD_SHIPPING = 250;
  const EXPRESS_SHIPPING = 600;
  const GIFT_WRAP = 350;

  function formatPrice(amount) {
    return `৳ ${Math.round(amount || 0).toLocaleString("en-IN")}`;
  }

  function computeTotals(lines, opts = {}) {
    const subtotal = lines.reduce((sum, l) => sum + (l.price || 0) * (l.qty || 1), 0);
    let shipping = 0;
    if (subtotal > 0) {
      if (opts.express) shipping = EXPRESS_SHIPPING;
      else shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
    }
    const giftWrap = opts.giftWrap && subtotal > 0 ? GIFT_WRAP : 0;
    return { subtotal, shipping, giftWrap, total: subtotal + shipping + giftWrap };
  }

  function readStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (err) {
      console.error(err);
    }
  }

  const listeners = { cart: new Set(), wishlist: new Set(), user: new Set(), orders: new Set() };
  function notify(type) {
    if (listeners[type]) listeners[type].forEach((fn) => fn());
  }
  function subscribe(type, fn) {
    if (listeners[type]) {
      listeners[type].add(fn);
      return () => listeners[type].delete(fn);
    }
    return () => {};
  }

  // Cart
  function getCart() {
    return readStorage("viofe-cart", []);
  }
  function resolveLines(cartLines) {
    return (cartLines || []).flatMap((l) => {
      const product = getProduct(l.slug);
      return product ? [{ ...l, product, price: product.price }] : [];
    });
  }
  function addToCart(slug, option, qty = 1) {
    const lines = getCart();
    const idx = lines.findIndex((l) => l.slug === slug && l.option === option);
    if (idx > -1) {
      lines[idx].qty += qty;
    } else {
      lines.push({ slug, option, qty });
    }
    writeStorage("viofe-cart", lines);
    notify("cart");
    const p = getProduct(slug);
    showToast("Added to bag", p ? p.name : "");
  }
  function updateQty(slug, option, qty) {
    let lines = getCart();
    if (qty <= 0) {
      lines = lines.filter((l) => !(l.slug === slug && l.option === option));
    } else {
      const idx = lines.findIndex((l) => l.slug === slug && l.option === option);
      if (idx > -1) lines[idx].qty = qty;
    }
    writeStorage("viofe-cart", lines);
    notify("cart");
  }
  function removeLine(slug, option) {
    updateQty(slug, option, 0);
    showToast("Removed from bag");
  }
  function clearCart() {
    writeStorage("viofe-cart", []);
    notify("cart");
  }

  // Wishlist
  function getWishlist() {
    return readStorage("viofe-wishlist", []);
  }
  function isInWishlist(slug) {
    return getWishlist().includes(slug);
  }
  function toggleWishlist(slug) {
    const list = getWishlist();
    const exists = list.includes(slug);
    const next = exists ? list.filter((s) => s !== slug) : [...list, slug];
    writeStorage("viofe-wishlist", next);
    notify("wishlist");
    const p = getProduct(slug);
    showToast(exists ? "Removed from wishlist" : "Saved to wishlist", p ? p.name : "");
    return !exists;
  }

  // User
  function getUser() {
    return readStorage("viofe-user", null);
  }
  function setUser(userData) {
    writeStorage("viofe-user", userData);
    notify("user");
  }
  function logout() {
    localStorage.removeItem("viofe-user");
    notify("user");
    showToast("Signed out", "Come back soon");
  }

  // Orders
  function getOrders() {
    return readStorage("viofe-orders", []);
  }
  function addOrder(order) {
    const orders = getOrders();
    writeStorage("viofe-orders", [order, ...orders]);
    notify("orders");
  }
  function newOrderId() {
    return `VF-${Math.floor(100000 + Math.random() * 900000)}`;
  }

  // Gift wrap
  function getGiftWrap() {
    return readStorage("viofe-giftwrap", false);
  }
  function setGiftWrap(val) {
    writeStorage("viofe-giftwrap", Boolean(val));
    notify("cart");
  }

  // Admin orders
  function getAdminOrders() {
    return readStorage("viofe-admin-orders", initialAdminOrders);
  }
  function setAdminOrders(orders) {
    writeStorage("viofe-admin-orders", orders);
  }
  function updateOrderStatus(orderId, newStatus) {
    const orders = getAdminOrders();
    const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
    setAdminOrders(updated);
    showToast(`Order ${orderId}`, `Status: ${newStatus}`);
  }

  // Toast
  function showToast(title, description = "") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast-item";
    toast.innerHTML = `
      <div class="toast-title">${title}</div>
      ${description ? `<div class="toast-desc">${description}</div>` : ""}
    `;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("visible"));
    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // 3. UI RENDERING & COMPONENT HELPERS
  function renderProductCard(p, priority = false) {
    const saved = isInWishlist(p.slug);
    const main = p.images[0];
    const alt = p.images[1] || "";
    const cat = getCategory(p.category);

    return `
      <article class="product-card">
        <div class="product-card-img-wrap">
          <a href="product.html?slug=${p.slug}" aria-label="${p.name}">
            <img src="${main}" alt="${p.name}" class="product-card-img" loading="${priority ? "eager" : "lazy"}" />
            ${alt ? `<img src="${alt}" alt="" aria-hidden="true" class="product-card-img-alt" loading="lazy" />` : ""}
          </a>
          ${p.badge ? `<span class="eyebrow product-badge">${p.badge}</span>` : ""}
          <button type="button" class="product-wishlist-btn ${saved ? "active" : ""}" data-slug="${p.slug}" aria-label="${saved ? "Remove from wishlist" : "Save to wishlist"}">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.6" fill="${saved ? "var(--primary)" : "none"}">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
          <button type="button" class="eyebrow product-add-btn quick-add-btn" data-slug="${p.slug}" data-option="${p.option.values[0] || ""}">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 5v14M5 12h14"/></svg>
            Add to bag
          </button>
        </div>
        <div class="product-info">
          <div style="min-width: 0; flex: 1;">
            <p class="eyebrow" style="font-size: 0.58rem; color: var(--muted-foreground);">${cat ? cat.name : ""}</p>
            <h3 class="product-title">
              <a href="product.html?slug=${p.slug}" class="link-underline">${p.name}</a>
            </h3>
          </div>
          <div style="flex-shrink: 0; text-align: right;">
            <p class="product-price">${formatPrice(p.price)}</p>
            ${p.compareAt ? `<p class="product-compare-at">${formatPrice(p.compareAt)}</p>` : ""}
          </div>
        </div>
      </article>
    `;
  }

  function bindCardEvents(container = document) {
    container.querySelectorAll(".product-wishlist-btn").forEach((btn) => {
      btn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        const slug = btn.getAttribute("data-slug");
        const active = toggleWishlist(slug);
        btn.classList.toggle("active", active);
        const svg = btn.querySelector("svg");
        if (svg) svg.setAttribute("fill", active ? "var(--primary)" : "none");
      };
    });

    container.querySelectorAll(".quick-add-btn").forEach((btn) => {
      btn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        const slug = btn.getAttribute("data-slug");
        const option = btn.getAttribute("data-option");
        addToCart(slug, option, 1);
        if (window.VIOFE && window.VIOFE.openCartDrawer) {
          window.VIOFE.openCartDrawer();
        }
      };
    });
  }

  function updateHeaderBadges() {
    const cartLines = getCart();
    const count = cartLines.reduce((s, l) => s + (l.qty || 1), 0);
    document.querySelectorAll(".cart-count-badge").forEach((badge) => {
      badge.textContent = count;
      badge.style.transform = count > 0 ? "scale(1)" : "scale(0)";
    });

    const wishlist = getWishlist();
    document.querySelectorAll(".wishlist-dot").forEach((dot) => {
      dot.style.display = wishlist.length > 0 ? "block" : "none";
    });
  }

  function initHeader() {
    const header = document.querySelector(".site-header");
    if (header) {
      const onScroll = () => {
        if (window.scrollY > 24) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // Mobile Menu
    const openBtn = document.querySelector(".btn-mobile-menu");
    const mobileDrawer = document.getElementById("mobile-menu-drawer");
    const mobileBackdrop = document.getElementById("mobile-menu-backdrop");
    const closeBtns = document.querySelectorAll(".mobile-menu-close");

    const openMobile = () => {
      mobileDrawer?.classList.add("open");
      mobileBackdrop?.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const closeMobile = () => {
      mobileDrawer?.classList.remove("open");
      mobileBackdrop?.classList.remove("open");
      document.body.style.overflow = "";
    };

    if (openBtn) openBtn.onclick = openMobile;
    if (mobileBackdrop) mobileBackdrop.onclick = closeMobile;
    closeBtns.forEach((b) => (b.onclick = closeMobile));

    updateHeaderBadges();
    subscribe("cart", updateHeaderBadges);
    subscribe("wishlist", updateHeaderBadges);
  }

  function initAnnouncements() {
    const items = document.querySelectorAll(".announcement-item");
    if (!items.length) return;
    let idx = 0;
    setInterval(() => {
      items[idx].classList.remove("active");
      idx = (idx + 1) % items.length;
      items[idx].classList.add("active");
    }, 4500);
  }

  function renderCartDrawerContent() {
    const container = document.getElementById("cart-drawer-content");
    if (!container) return;

    const rawLines = getCart();
    const lines = resolveLines(rawLines);
    const totals = computeTotals(lines);
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - totals.subtotal);
    const progress = Math.min(100, (totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100);

    const desc = document.getElementById("cart-shipping-desc");
    const pbar = document.getElementById("cart-shipping-bar");
    const footer = document.getElementById("cart-drawer-footer");

    if (lines.length === 0) {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; gap: 1.5rem; padding: 3rem 1rem;">
          <p style="font-family: var(--font-display); font-size: 1.75rem; font-style: italic; color: var(--muted-foreground);">
            An empty bag is a beginning.
          </p>
          <a href="shop.html" class="btn btn-outline-luxe btn-lg" onclick="window.VIOFE.closeCartDrawer()">
            Discover the collection
          </a>
        </div>
      `;
      if (footer) footer.style.display = "none";
      if (desc) desc.textContent = "Nothing here yet.";
      if (pbar) pbar.style.width = "0%";
      return;
    }

    if (desc) {
      desc.textContent =
        remaining > 0
          ? `${formatPrice(remaining)} away from complimentary shipping`
          : "You've unlocked complimentary shipping";
    }
    if (pbar) pbar.style.width = `${progress}%`;

    let html = `<ul style="list-style: none; display: flex; flex-direction: column; gap: 1.5rem;">`;
    lines.forEach((l) => {
      html += `
        <li style="display: flex; gap: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 1.25rem;">
          <img src="${l.product.images[0]}" alt="${l.product.name}" style="width: 5.5rem; height: 7rem; object-fit: cover; flex-shrink: 0;" />
          <div style="flex: 1; min-width: 0; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; gap: 0.5rem;">
              <a href="product.html?slug=${l.slug}" style="font-family: var(--font-display); font-size: 1.15rem; line-height: 1.2;" onclick="window.VIOFE.closeCartDrawer()">
                ${l.product.name}
              </a>
              <button class="cart-remove-btn" data-slug="${l.slug}" data-option="${l.option}" style="background: none; border: none; cursor: pointer; color: var(--muted-foreground); font-size: 1rem;">
                ✕
              </button>
            </div>
            <p style="font-size: 0.75rem; color: var(--muted-foreground); margin-top: 0.25rem;">
              ${l.product.option.label}: ${l.option}
            </p>
            <div style="margin-top: auto; display: flex; align-items: flex-end; justify-content: space-between; padding-top: 0.75rem;">
              <div class="qty-stepper">
                <button class="drawer-qty-btn" data-action="dec" data-slug="${l.slug}" data-option="${l.option}">−</button>
                <span>${l.qty}</span>
                <button class="drawer-qty-btn" data-action="inc" data-slug="${l.slug}" data-option="${l.option}">+</button>
              </div>
              <span style="font-size: 0.95rem; color: var(--primary); font-weight: 500;">
                ${formatPrice(l.price * l.qty)}
              </span>
            </div>
          </div>
        </li>
      `;
    });
    html += `</ul>`;
    container.innerHTML = html;

    container.querySelectorAll(".cart-remove-btn").forEach((b) => {
      b.onclick = function () {
        removeLine(b.getAttribute("data-slug"), b.getAttribute("data-option"));
      };
    });

    container.querySelectorAll(".drawer-qty-btn").forEach((b) => {
      b.onclick = function () {
        const slug = b.getAttribute("data-slug");
        const option = b.getAttribute("data-option");
        const action = b.getAttribute("data-action");
        const current = lines.find((x) => x.slug === slug && x.option === option);
        if (!current) return;
        const next = action === "inc" ? current.qty + 1 : current.qty - 1;
        updateQty(slug, option, next);
      };
    });

    if (footer) {
      footer.style.display = "block";
      const subtotalEl = document.getElementById("cart-drawer-subtotal");
      if (subtotalEl) subtotalEl.textContent = formatPrice(totals.subtotal);
    }
  }

  function initCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-drawer-backdrop");
    const openButtons = document.querySelectorAll(".open-cart-btn");
    const closeButtons = document.querySelectorAll(".close-cart-btn");

    const openDrawer = () => {
      renderCartDrawerContent();
      drawer?.classList.add("open");
      backdrop?.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    const closeDrawer = () => {
      drawer?.classList.remove("open");
      backdrop?.classList.remove("open");
      document.body.style.overflow = "";
    };

    openButtons.forEach((b) => (b.onclick = openDrawer));
    closeButtons.forEach((b) => (b.onclick = closeDrawer));
    if (backdrop) backdrop.onclick = closeDrawer;

    root.VIOFE.openCartDrawer = openDrawer;
    root.VIOFE.closeCartDrawer = closeDrawer;
    root.openCartDrawer = openDrawer;
    root.closeCartDrawer = closeDrawer;

    subscribe("cart", () => {
      if (drawer?.classList.contains("open")) renderCartDrawerContent();
    });
  }

  function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-visible", "true");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
      );
      elements.forEach((el) => observer.observe(el));
    } else {
      elements.forEach((el) => el.setAttribute("data-visible", "true"));
    }
  }

  function initFooter() {
    const form = document.getElementById("footer-newsletter-form");
    if (form) {
      form.onsubmit = function (e) {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const val = input ? input.value.trim() : "";
        if (!val.includes("@")) {
          showToast("Invalid email", "Please enter a valid email address");
          return;
        }
        showToast("Welcome to the Maison", "Your first letter is on its way.");
        if (input) input.value = "";
      };
    }
  }

  function initApp() {
    initAnnouncements();
    initHeader();
    initCartDrawer();
    initFooter();
    initReveal();
    bindCardEvents();
  }

  // EXPORT TO GLOBAL
  const VIOFE = {
    categories,
    products,
    getCategory,
    getProduct,
    productsIn,
    relatedTo,
    ORDER_STEPS,
    initialAdminOrders,
    monthlyRevenue,
    demoStatusFor,
    FREE_SHIPPING_THRESHOLD,
    STANDARD_SHIPPING,
    EXPRESS_SHIPPING,
    GIFT_WRAP,
    formatPrice,
    computeTotals,
    getCart,
    resolveLines,
    addToCart,
    updateQty,
    removeLine,
    clearCart,
    getWishlist,
    isInWishlist,
    toggleWishlist,
    getUser,
    setUser,
    logout,
    getOrders,
    addOrder,
    newOrderId,
    getGiftWrap,
    setGiftWrap,
    getAdminOrders,
    setAdminOrders,
    updateOrderStatus,
    showToast,
    renderProductCard,
    bindCardEvents,
    initApp,
    initHeader,
    initAnnouncements,
    initCartDrawer,
    renderCartDrawerContent,
    initReveal,
    initFooter,
    subscribe,
  };

  root.VIOFE = VIOFE;

  // Auto initialize on DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})(typeof window !== "undefined" ? window : this);
