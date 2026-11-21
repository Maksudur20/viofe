// VIOFE Common UI Components & Interactive Behaviors
import { categories, getCategory, getProduct } from "./catalog.js";
import {
  getCart,
  resolveLines,
  updateQty,
  removeLine,
  addToCart,
  computeTotals,
  formatPrice,
  FREE_SHIPPING_THRESHOLD,
  getWishlist,
  isInWishlist,
  toggleWishlist,
  subscribe,
  showToast,
} from "./store.js";

// ANNOUNCEMENT TICKER
export function initAnnouncements() {
  const items = document.querySelectorAll(".announcement-item");
  if (!items.length) return;
  let idx = 0;
  setInterval(() => {
    items[idx].classList.remove("active");
    idx = (idx + 1) % items.length;
    items[idx].classList.add("active");
  }, 4500);
}

// STICKY HEADER
export function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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

  openBtn?.addEventListener("click", openMobile);
  mobileBackdrop?.addEventListener("click", closeMobile);
  closeBtns.forEach((btn) => btn.addEventListener("click", closeMobile));

  // Sync Cart Badge and Wishlist Dot
  updateHeaderBadges();
  subscribe("cart", updateHeaderBadges);
  subscribe("wishlist", updateHeaderBadges);
}

export function updateHeaderBadges() {
  const cartLines = getCart();
  const count = cartLines.reduce((s, l) => s + (l.qty || 1), 0);
  const cartBadges = document.querySelectorAll(".cart-count-badge");
  cartBadges.forEach((badge) => {
    badge.textContent = count;
    badge.style.transform = count > 0 ? "scale(1)" : "scale(0)";
  });

  const wishlist = getWishlist();
  const wishlistDots = document.querySelectorAll(".wishlist-dot");
  wishlistDots.forEach((dot) => {
    dot.style.display = wishlist.length > 0 ? "block" : "none";
  });
}

// CART DRAWER
export function initCartDrawer() {
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

  openButtons.forEach((btn) => btn.addEventListener("click", openDrawer));
  closeButtons.forEach((btn) => btn.addEventListener("click", closeDrawer));
  backdrop?.addEventListener("click", closeDrawer);

  window.openCartDrawer = openDrawer;
  window.closeCartDrawer = closeDrawer;

  subscribe("cart", () => {
    if (drawer?.classList.contains("open")) {
      renderCartDrawerContent();
    }
  });
}

export function renderCartDrawerContent() {
  const container = document.getElementById("cart-drawer-content");
  if (!container) return;

  const rawLines = getCart();
  const lines = resolveLines(rawLines);
  const totals = computeTotals(lines);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - totals.subtotal);
  const progress = Math.min(100, (totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  if (lines.length === 0) {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; gap: 1.5rem; padding: 3rem 1rem;">
        <p style="font-family: var(--font-display); font-size: 1.75rem; font-style: italic; color: var(--muted-foreground);">
          An empty bag is a beginning.
        </p>
        <a href="shop.html" class="btn btn-outline-luxe btn-lg" onclick="window.closeCartDrawer()">
          Discover the collection
        </a>
      </div>
    `;
    const footer = document.getElementById("cart-drawer-footer");
    if (footer) footer.style.display = "none";

    const desc = document.getElementById("cart-shipping-desc");
    if (desc) desc.textContent = "Nothing here yet.";
    const pbar = document.getElementById("cart-shipping-bar");
    if (pbar) pbar.style.width = "0%";
    return;
  }

  const desc = document.getElementById("cart-shipping-desc");
  if (desc) {
    desc.textContent =
      remaining > 0
        ? `${formatPrice(remaining)} away from complimentary shipping`
        : "You've unlocked complimentary shipping";
  }
  const pbar = document.getElementById("cart-shipping-bar");
  if (pbar) pbar.style.width = `${progress}%`;

  let html = `<ul style="list-style: none; display: flex; flex-direction: column; gap: 1.5rem;">`;
  lines.forEach((l) => {
    html += `
      <li style="display: flex; gap: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 1.25rem;">
        <img src="${l.product.images[0]}" alt="${l.product.name}" style="width: 5.5rem; height: 7rem; object-fit: cover; flex-shrink: 0;" />
        <div style="flex: 1; min-width: 0; display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; gap: 0.5rem;">
            <a href="product.html?slug=${l.slug}" style="font-family: var(--font-display); font-size: 1.15rem; line-height: 1.2;" onclick="window.closeCartDrawer()">
              ${l.product.name}
            </a>
            <button class="cart-remove-btn" data-slug="${l.slug}" data-option="${l.option}" style="background: none; border: none; cursor: pointer; color: var(--muted-foreground);">
              ✕
            </button>
          </div>
          <p style="font-size: 0.75rem; color: var(--muted-foreground); margin-top: 0.25rem;">
            ${l.product.option.label}: ${l.option}
          </p>
          <div style="margin-top: auto; display: flex; align-items: flex-end; justify-content: space-between; padding-top: 0.75rem;">
            <div class="qty-stepper">
              <button class="qty-btn" data-action="dec" data-slug="${l.slug}" data-option="${l.option}">−</button>
              <span>${l.qty}</span>
              <button class="qty-btn" data-action="inc" data-slug="${l.slug}" data-option="${l.option}">+</button>
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

  // Setup Stepper & Remove Handlers
  container.querySelectorAll(".cart-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.getAttribute("data-slug");
      const option = btn.getAttribute("data-option");
      removeLine(slug, option);
    });
  });

  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.getAttribute("data-slug");
      const option = btn.getAttribute("data-option");
      const action = btn.getAttribute("data-action");
      const current = lines.find((x) => x.slug === slug && x.option === option);
      if (!current) return;
      const nextQty = action === "inc" ? current.qty + 1 : current.qty - 1;
      updateQty(slug, option, nextQty);
    });
  });

  const footer = document.getElementById("cart-drawer-footer");
  if (footer) {
    footer.style.display = "block";
    const subtotalEl = document.getElementById("cart-drawer-subtotal");
    if (subtotalEl) subtotalEl.textContent = formatPrice(totals.subtotal);
  }
}

// PRODUCT CARD RENDERER
export function renderProductCard(p, priority = false) {
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

// BIND GLOBAL CARD EVENTS
export function bindCardEvents(container = document) {
  container.querySelectorAll(".product-wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const slug = btn.getAttribute("data-slug");
      const active = toggleWishlist(slug);
      btn.classList.toggle("active", active);
      const svg = btn.querySelector("svg");
      if (svg) svg.setAttribute("fill", active ? "var(--primary)" : "none");
    });
  });

  container.querySelectorAll(".quick-add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const slug = btn.getAttribute("data-slug");
      const option = btn.getAttribute("data-option");
      addToCart(slug, option, 1);
      if (window.openCartDrawer) window.openCartDrawer();
    });
  });
}

// SCROLL REVEAL OBSERVER
export function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

// FOOTER NEWSLETTER
export function initFooter() {
  const form = document.getElementById("footer-newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const val = input?.value.trim() || "";
    if (!val.includes("@")) {
      showToast("Invalid email", "Please enter a valid email address");
      return;
    }
    showToast("Welcome to the Maison", "Your first letter is on its way.");
    if (input) input.value = "";
  });
}

// SHARED INITIALIZER
export function initApp() {
  initAnnouncements();
  initHeader();
  initCartDrawer();
  initFooter();
  initReveal();
  bindCardEvents();
}
