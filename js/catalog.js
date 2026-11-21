// VIOFE Product Catalog & Data Layer (Pure JS)

export const categories = [
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

export const products = [
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

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function productsIn(category) {
  return category ? products.filter((p) => p.category === category) : products;
}

export function relatedTo(product, count = 4) {
  const others = products.filter((p) => p.slug !== product.slug);
  const sameCat = others.filter((p) => p.category === product.category);
  const rest = others.filter((p) => p.category !== product.category);
  return [...sameCat, ...rest].slice(0, count);
}

export const ORDER_STEPS = [
  "Placed",
  "Confirmed",
  "Crafted & packed",
  "Shipped",
  "Out for delivery",
  "Delivered",
];

export const initialAdminOrders = [
  { id: "VF-482190", customer: "Nusrat Jahan", city: "Dhaka", date: "12 Nov 2026", items: 2, total: 35400, status: "Placed" },
  { id: "VF-481774", customer: "Ayesha Rahman", city: "Chattogram", date: "11 Nov 2026", items: 1, total: 28500, status: "Confirmed" },
  { id: "VF-481530", customer: "Farzana Akter", city: "Sylhet", date: "11 Nov 2026", items: 3, total: 21300, status: "Crafted & packed" },
  { id: "VF-480912", customer: "Tahmina Chowdhury", city: "Dhaka", date: "10 Nov 2026", items: 1, total: 24500, status: "Shipped" },
  { id: "VF-480455", customer: "Sadia Islam", city: "Khulna", date: "09 Nov 2026", items: 2, total: 16500, status: "Out for delivery" },
  { id: "VF-479801", customer: "Mehjabin Karim", city: "Rajshahi", date: "08 Nov 2026", items: 4, total: 41200, status: "Delivered" },
];

export const monthlyRevenue = [
  { month: "Jun", revenue: 412000 },
  { month: "Jul", revenue: 468000 },
  { month: "Aug", revenue: 455000 },
  { month: "Sep", revenue: 590000 },
  { month: "Oct", revenue: 742000 },
  { month: "Nov", revenue: 815000 },
];

export function demoStatusFor(id) {
  const digits = id ? id.replace(/\D/g, "") : "";
  const n = digits ? Number(digits.slice(-2)) : 0;
  return n % ORDER_STEPS.length;
}
