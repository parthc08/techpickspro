export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  description: string;
  rating: number;
  price: string;
  amazonUrl: string;
  isBestChoice: boolean;
  pros: string[];
  cons: string[];
  features: string[];
  emoji: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  publishDate: string;
  readTime: number;
}

export const products: Product[] = [
  {
    id: "sony-wf1000xm5",
    name: "Sony WF-1000XM5",
    category: "earpieces",
    slug: "sony-wf1000xm5",
    description:
      "Industry-leading noise cancellation with crystal-clear call quality. Perfect for professionals in busy offices or open workspaces.",
    rating: 5,
    price: "$279.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: true,
    pros: [
      "Best-in-class ANC",
      "Exceptional call quality",
      "Comfortable all-day fit",
      "8hr battery + case",
    ],
    cons: ["Premium price", "Case is bulky"],
    features: [
      "30dB noise reduction",
      "IPX4 water resistance",
      "Multipoint connection",
      "LDAC audio codec",
      "Quick Attention mode",
    ],
    emoji: "🎧",
  },
  {
    id: "jabra-evolve2-55",
    name: "Jabra Evolve2 55",
    category: "earpieces",
    slug: "jabra-evolve2-55",
    description:
      "Built for professional communication. Certified for Teams and Zoom with superior mic performance.",
    rating: 4,
    price: "$249.00",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: [
      "Microsoft Teams certified",
      "Excellent mic quality",
      "ANC included",
      "Comfortable fit",
    ],
    cons: ["Steep price", "Limited color options"],
    features: [
      "6-mic call technology",
      "ANC + HearThrough",
      "Up to 7hr battery",
      "USB-C & BT5.2",
    ],
    emoji: "🎧",
  },
  {
    id: "apple-airpods-pro2",
    name: "Apple AirPods Pro 2nd Gen",
    category: "earpieces",
    slug: "apple-airpods-pro-2",
    description:
      "Premium Apple earbuds with H2 chip, adaptive transparency, and seamless iPhone/Mac integration.",
    rating: 5,
    price: "$249.00",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: [
      "Seamless Apple ecosystem",
      "Great ANC",
      "Adaptive audio",
      "MagSafe charging",
    ],
    cons: ["Apple-only optimized", "Small ear tips"],
    features: [
      "H2 chip",
      "Adaptive Transparency",
      "Personalized Spatial Audio",
      "IPX4 rating",
      "6hr battery",
    ],
    emoji: "🎧",
  },
  {
    id: "anker-prime-powerbank",
    name: "Anker Prime 27,650mAh",
    category: "powerbanks",
    slug: "anker-prime-powerbank",
    description:
      "The most powerful portable charger for professionals. 250W output charges a laptop in 45 minutes.",
    rating: 5,
    price: "$159.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: true,
    pros: [
      "250W output",
      "Charges laptops",
      "Smart display",
      "3 devices at once",
    ],
    cons: ["Heavy at 1.6 lbs", "Expensive"],
    features: [
      "27,650mAh capacity",
      "250W max output",
      "USB-C x2 + USB-A",
      "Smart display",
      "GaN technology",
    ],
    emoji: "🔋",
  },
  {
    id: "mophie-powerstation-pro",
    name: "Mophie Powerstation Pro XL",
    category: "powerbanks",
    slug: "mophie-powerstation-pro-xl",
    description:
      "Premium portable battery with fast charging for all your devices. Sleek design that fits in a briefcase.",
    rating: 4,
    price: "$99.95",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: ["Slim profile", "Fast charging", "Premium build", "Reliable brand"],
    cons: ["No laptop charging", "Average capacity"],
    features: [
      "20,000mAh",
      "60W USB-C output",
      "USB-A Quick Charge",
      "LED indicator",
      "Pass-through charging",
    ],
    emoji: "🔋",
  },
  {
    id: "baseus-100w-powerbank",
    name: "Baseus 100W Power Bank 20000mAh",
    category: "powerbanks",
    slug: "baseus-100w-powerbank",
    description:
      "Affordable 100W powerbank that charges laptops, tablets, and phones simultaneously.",
    rating: 4,
    price: "$59.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: [
      "100W output",
      "Budget friendly",
      "Laptop compatible",
      "Lightweight",
    ],
    cons: ["Plastic build", "No display"],
    features: [
      "20,000mAh",
      "100W PD output",
      "USB-C x2 + USB-A x2",
      "Quick Charge 4.0",
    ],
    emoji: "🔋",
  },
  {
    id: "logitech-mx-keys-pro",
    name: "Logitech MX Keys for Mac",
    category: "keyboards",
    slug: "logitech-mx-keys-pro",
    description:
      "The professional wireless keyboard with backlit keys, multi-device pairing, and ergonomic design for all-day typing.",
    rating: 5,
    price: "$119.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: true,
    pros: [
      "Excellent key feel",
      "Multi-device support",
      "Smart backlighting",
      "Long battery",
    ],
    cons: ["No number pad version available for Mac", "Pricey"],
    features: [
      "Spherically dished keys",
      "Backlit keys",
      "3-device Bluetooth",
      "USB-C charging",
      "10-day battery",
    ],
    emoji: "⌨️",
  },
  {
    id: "keychron-q3-pro",
    name: "Keychron Q3 Pro Mechanical",
    category: "keyboards",
    slug: "keychron-q3-pro",
    description:
      "Premium tenkeyless mechanical keyboard with fully customizable RGB, hot-swappable switches, and wireless connectivity.",
    rating: 5,
    price: "$179.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: [
      "Premium build quality",
      "Wireless & wired",
      "Hot-swap switches",
      "QMK compatible",
    ],
    cons: ["Heavy", "Learning curve for customization"],
    features: [
      "Aluminum body",
      "Hot-swap PCB",
      "RGB backlight",
      "Bluetooth 5.1 + USB-C",
      "South-facing RGB",
    ],
    emoji: "⌨️",
  },
  {
    id: "microsoft-sculpt-ergo",
    name: "Microsoft Sculpt Ergonomic Keyboard",
    category: "keyboards",
    slug: "microsoft-sculpt-ergonomic",
    description:
      "Designed to reduce wrist strain. Curved key layout and cushioned palm rest for professionals who type all day.",
    rating: 4,
    price: "$89.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: [
      "Ergonomic design",
      "Reduced wrist strain",
      "Comfortable",
      "Reliable wireless",
    ],
    cons: ["No backlight", "Old USB dongle"],
    features: [
      "Split key layout",
      "Domed keyboard shape",
      "Cushioned palm rest",
      "2.4GHz wireless",
      "Separate numpad",
    ],
    emoji: "⌨️",
  },
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    category: "mice",
    slug: "logitech-mx-master-3s",
    description:
      "The ultimate productivity mouse with MagSpeed scroll wheel, near-silent clicks, and advanced customization.",
    rating: 5,
    price: "$99.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: true,
    pros: [
      "MagSpeed scroll wheel",
      "Silent clicks",
      "Ergonomic shape",
      "3-device Bluetooth",
    ],
    cons: ["Right-hand only", "Heavy for gaming"],
    features: [
      "8000 DPI sensor",
      "MagSpeed wheel",
      "USB-C charging",
      "Bluetooth + 2.4GHz",
      "70-day battery",
    ],
    emoji: "🖱️",
  },
  {
    id: "mx-anywhere-3s",
    name: "Logitech MX Anywhere 3S",
    category: "mice",
    slug: "logitech-mx-anywhere-3s",
    description:
      "Compact, travel-friendly mouse with MagSpeed scroll and works on any surface including glass.",
    rating: 4,
    price: "$79.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: [
      "Works on glass",
      "Compact design",
      "MagSpeed scroll",
      "Silent clicks",
    ],
    cons: ["Smaller for large hands", "No side scroll"],
    features: [
      "8000 DPI",
      "MagSpeed scroll",
      "Works on any surface",
      "USB-C",
      "70-day battery",
    ],
    emoji: "🖱️",
  },
  {
    id: "razer-pro-click-mini",
    name: "Razer Pro Click Mini",
    category: "mice",
    slug: "razer-pro-click-mini",
    description:
      "Compact wireless productivity mouse with Razer HyperSpeed technology and 7 programmable buttons.",
    rating: 4,
    price: "$69.99",
    amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER?tag=techpickspro-20",
    isBestChoice: false,
    pros: [
      "HyperSpeed wireless",
      "Compact & portable",
      "7 programmable buttons",
      "Ergonomic",
    ],
    cons: ["Smaller form factor", "No MagSpeed"],
    features: [
      "12000 DPI",
      "HyperSpeed wireless",
      "7 programmable buttons",
      "USB-C charging",
      "40-day battery",
    ],
    emoji: "🖱️",
  },
];

const earpieces2026 =
  "## The Best Wireless Earpieces for Professionals\n\nAs remote and hybrid work becomes the norm, a high-quality pair of wireless earpieces is no longer a luxury—it is a necessity. We tested 20+ models to bring you the definitive list.\n\n### What We Look For\n\n- Call quality: Multi-mic systems that eliminate background noise\n- ANC (Active Noise Cancellation): Crucial for open offices\n- Battery life: Minimum 6 hours continuous use\n- Comfort: Lightweight and stable for all-day wear\n- Connectivity: Reliable Bluetooth 5.x with multipoint pairing\n\n### Top Picks\n\nSony WF-1000XM5 - Best Overall: The XM5 delivers the best ANC on the market alongside exceptional call clarity.\n\nJabra Evolve2 55 - Best for Business: Certified for Microsoft Teams and Zoom, with a 6-mic array that isolates your voice.\n\nApple AirPods Pro 2nd Gen - Best for Apple Users: Seamless integration with Mac, iPhone, and iPad with Adaptive Transparency.\n\n### Final Verdict\n\nFor most professionals, the Sony WF-1000XM5 offers the best all-around performance. If you are in a Microsoft-centric workplace, consider the Jabra Evolve2 55 for guaranteed platform integration.";

const keyboardsGuide =
  "## Mechanical vs Membrane Keyboards\n\nChoosing a keyboard is surprisingly personal. After years of testing both types, here is what professionals need to know.\n\n### Mechanical Keyboards\n\nMechanical keyboards use individual switches beneath each key. Popular switch types include Linear (Red): Smooth keystroke, no tactile bump. Tactile (Brown): Noticeable bump at actuation point. Clicky (Blue): Audible click + tactile bump.\n\nBest for developers, writers, and anyone who types for 6+ hours daily.\n\n### Membrane Keyboards\n\nMembrane keyboards use a pressure pad system under the keys, creating a mushy feel that is quieter but less responsive.\n\nBest for shared offices where noise is a concern, budget-conscious buyers.\n\n### Our Recommendation\n\nFor professionals, we recommend the Keychron Q3 Pro for its premium build, hot-swap switches, and wireless flexibility. If you prefer a quieter option, the Logitech MX Keys uses scissor switches that bridge the gap.";

const powerBanksGuide =
  "## Best Power Banks for Laptop Charging\n\nMost power banks max out at 18W which is useless for modern laptops. Here is what you actually need.\n\n### Minimum Requirements for Laptop Charging\n\n- 60W USB-C Power Delivery (minimum for most ultrabooks)\n- 100W PD for gaming laptops and MacBook Pro 16-inch\n- Capacity: 20,000mAh+ for a full laptop charge\n\n### Top Picks\n\nAnker Prime 27,650mAh - Best Overall: At 250W output, the Anker Prime is in a class of its own. It charges a MacBook Pro from 0-100% in under an hour.\n\nMophie Powerstation Pro XL - Best Premium Option: Premium build quality and reliable performance. While limited to 60W, it handles most ultrabooks with ease.\n\nBaseus 100W Power Bank - Best Value: Excellent performance at half the price of competitors.\n\n### What to Avoid\n\nBeware of no-name brands claiming high wattage. Always verify the USB-C PD output rating before purchasing.";

const homeOfficeGuide =
  "## The Professional Home Office Tech Stack\n\nAfter consulting with hundreds of remote professionals, we have identified the core peripherals that make the biggest productivity difference.\n\n### The Essential Stack\n\nKeyboard: Your primary input device. Invest here first. Daily typists should consider the Keychron Q3 Pro or Logitech MX Keys. For ergonomic needs, the Microsoft Sculpt Ergonomic is excellent.\n\nMouse: Second most-used device. Power users should look at the Logitech MX Master 3S with the best scroll wheel ever made. For travel, the MX Anywhere 3S is compact and reliable.\n\nEarpieces and Headset: Essential for calls. For open offices, the Sony WF-1000XM5 offers the best ANC. For business-certified options, choose the Jabra Evolve2 55.\n\nPower Bank: For hybrid workers. Heavy users should get the Anker Prime 27,650mAh. Travelers will appreciate the Baseus 100W for great value.\n\n### ROI of Good Peripherals\n\nProfessionals who switch from stock peripherals to quality ones report 20-30 minutes of recovered productivity per day. At $50/hour, that is $200/month meaning your entire setup pays for itself in the first month.";

export const blogPosts: BlogPost[] = [
  {
    title: "10 Best Wireless Earpieces for Remote Professionals in 2026",
    slug: "best-wireless-earpieces-2026",
    excerpt:
      "Whether you are on back-to-back Zoom calls or commuting to the office, these earpieces will keep you connected and productive.",
    content: earpieces2026,
    category: "earpieces",
    publishDate: "March 15, 2026",
    readTime: 8,
  },
  {
    title: "Mechanical vs Membrane Keyboards: Which Is Right for You?",
    slug: "mechanical-vs-membrane-keyboards",
    excerpt:
      "We break down the key differences between mechanical and membrane keyboards so you can make the right choice for your workflow.",
    content: keyboardsGuide,
    category: "keyboards",
    publishDate: "March 10, 2026",
    readTime: 6,
  },
  {
    title: "Best Power Banks for Laptop Charging in 2026",
    slug: "best-power-banks-laptop-charging-2026",
    excerpt:
      "Not all power banks can charge laptops. We tested the top models with 60W+ output so you never run out of power on the go.",
    content: powerBanksGuide,
    category: "powerbanks",
    publishDate: "March 5, 2026",
    readTime: 7,
  },
  {
    title: "How to Set Up a Productive Home Office Tech Stack",
    slug: "home-office-tech-stack-guide",
    excerpt:
      "The right peripherals can double your productivity. Here is the complete guide to building a professional-grade home office setup.",
    content: homeOfficeGuide,
    category: "guides",
    publishDate: "February 28, 2026",
    readTime: 10,
  },
];

export const categories = [
  {
    id: "earpieces",
    label: "Earpieces",
    emoji: "🎧",
    desc: "Pro-grade audio for calls & focus",
  },
  {
    id: "powerbanks",
    label: "Power Banks",
    emoji: "🔋",
    desc: "Stay charged anywhere, anytime",
  },
  {
    id: "keyboards",
    label: "Keyboards",
    emoji: "⌨️",
    desc: "Mechanical & wireless keyboards",
  },
  {
    id: "mice",
    label: "Mice",
    emoji: "🖱️",
    desc: "Precision mice for power users",
  },
];
