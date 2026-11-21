// VIOFE State & Storage Management (Pure JS + LocalStorage)
import { getProduct, initialAdminOrders } from "./catalog.js";

export const FREE_SHIPPING_THRESHOLD = 15000;
export const STANDARD_SHIPPING = 250;
export const EXPRESS_SHIPPING = 600;
export const GIFT_WRAP = 350;

export function formatPrice(amount) {
  return `৳ ${Math.round(amount).toLocaleString("en-IN")}`;
}

export function computeTotals(lines, opts = {}) {
  const subtotal = lines.reduce((sum, l) => sum + (l.price || 0) * (l.qty || 1), 0);
  let shipping = 0;
  if (subtotal > 0) {
    if (opts.express) shipping = EXPRESS_SHIPPING;
    else shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  }
  const giftWrap = opts.giftWrap && subtotal > 0 ? GIFT_WRAP : 0;
  return { subtotal, shipping, giftWrap, total: subtotal + shipping + giftWrap };
}

// LocalStorage helpers
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
    console.error("Storage error:", err);
  }
}

// State Listeners
const listeners = {
  cart: new Set(),
  wishlist: new Set(),
  user: new Set(),
  orders: new Set(),
};

function notify(type) {
  if (listeners[type]) {
    listeners[type].forEach((fn) => fn());
  }
}

export function subscribe(type, fn) {
  if (listeners[type]) {
    listeners[type].add(fn);
    return () => listeners[type].delete(fn);
  }
  return () => {};
}

// CART
export function getCart() {
  return readStorage("viofe-cart", []);
}

export function resolveLines(cartLines) {
  return (cartLines || []).flatMap((l) => {
    const product = getProduct(l.slug);
    return product ? [{ ...l, product, price: product.price }] : [];
  });
}

export function addToCart(slug, option, qty = 1) {
  const lines = getCart();
  const existingIndex = lines.findIndex((l) => l.slug === slug && l.option === option);
  if (existingIndex > -1) {
    lines[existingIndex].qty += qty;
  } else {
    lines.push({ slug, option, qty });
  }
  writeStorage("viofe-cart", lines);
  notify("cart");
  showToast("Added to bag", getProduct(slug)?.name || "Item added");
}

export function updateQty(slug, option, qty) {
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

export function removeLine(slug, option) {
  updateQty(slug, option, 0);
  showToast("Removed from bag");
}

export function clearCart() {
  writeStorage("viofe-cart", []);
  notify("cart");
}

// WISHLIST
export function getWishlist() {
  return readStorage("viofe-wishlist", []);
}

export function isInWishlist(slug) {
  return getWishlist().includes(slug);
}

export function toggleWishlist(slug) {
  const list = getWishlist();
  const exists = list.includes(slug);
  const next = exists ? list.filter((s) => s !== slug) : [...list, slug];
  writeStorage("viofe-wishlist", next);
  notify("wishlist");
  const p = getProduct(slug);
  showToast(exists ? "Removed from wishlist" : "Saved to wishlist", p ? p.name : "");
  return !exists;
}

// USER AUTH
export function getUser() {
  return readStorage("viofe-user", null);
}

export function setUser(userData) {
  writeStorage("viofe-user", userData);
  notify("user");
}

export function logout() {
  localStorage.removeItem("viofe-user");
  notify("user");
  showToast("Signed out", "Come back soon");
}

// ORDERS
export function getOrders() {
  return readStorage("viofe-orders", []);
}

export function addOrder(order) {
  const orders = getOrders();
  const next = [order, ...orders];
  writeStorage("viofe-orders", next);
  notify("orders");
}

export function newOrderId() {
  return `VF-${Math.floor(100000 + Math.random() * 900000)}`;
}

// GIFT WRAP
export function getGiftWrap() {
  return readStorage("viofe-giftwrap", false);
}

export function setGiftWrap(val) {
  writeStorage("viofe-giftwrap", Boolean(val));
  notify("cart");
}

// ADMIN ORDERS
export function getAdminOrders() {
  return readStorage("viofe-admin-orders", initialAdminOrders);
}

export function setAdminOrders(orders) {
  writeStorage("viofe-admin-orders", orders);
}

export function updateOrderStatus(orderId, newStatus) {
  const orders = getAdminOrders();
  const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
  setAdminOrders(updated);
  showToast(`Order ${orderId}`, `Status updated to ${newStatus}`);
}

// TOAST SYSTEM
export function showToast(title, description = "") {
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
