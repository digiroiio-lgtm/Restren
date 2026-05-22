export const site = {
  name: "Restaurant Refurbishment UK",
  legalName: "Restaurant Refurbishment UK Ltd",
  domain: "https://restaurantrefurbishment.co.uk",
  email: "hello@restaurantrefurbishment.co.uk",
  phone: "+44 20 7946 0852",
  whatsapp: "+447700900123",
  address: {
    street: "120 City Road",
    city: "London",
    postcode: "EC1V 2NX",
    country: "GB",
  },
};

export type MarketingPage = {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  benefits: string[];
  process: string[];
  projects: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export const servicePages: MarketingPage[] = [
  {
    slug: "restaurant-refurbishment",
    title: "Restaurant Refurbishment UK | Premium Hospitality Refits",
    h1: "Restaurant Refurbishment",
    intro:
      "Premium UK restaurant refurbishment contractor for front-of-house upgrades, kitchen renewal, and end-to-end project delivery.",
    benefits: [
      "Increase covers and customer dwell time",
      "Deliver premium brand experience",
      "Reduce downtime with phased programmes",
    ],
    process: ["Survey & concept", "Technical design", "Build & handover"],
    projects: [
      "High-street brasserie relaunch in London",
      "Heritage dining room modernization in Leeds",
    ],
    faqs: [
      {
        question: "How long does restaurant refurbishment take?",
        answer:
          "Most projects complete in 4-14 weeks depending on scope, approvals, and programme phasing.",
      },
      {
        question: "Do you work around trading hours?",
        answer:
          "Yes. We can phase works or run out-of-hours shifts to protect revenue.",
      },
    ],
    cta: "Book Site Visit",
  },
  {
    slug: "restaurant-fit-out",
    title: "Restaurant Fit Out Contractor UK | Turnkey Delivery",
    h1: "Restaurant Fit Out",
    intro:
      "Turnkey restaurant fit out solutions from shell-and-core to operational launch for premium UK hospitality brands.",
    benefits: [
      "Single-point accountability",
      "Faster opening programmes",
      "Design-to-delivery cost control",
    ],
    process: ["Pre-construction", "Build programme", "Commissioning"],
    projects: [
      "Franchise roll-out fit out package",
      "City-centre concept restaurant",
    ],
    faqs: [
      {
        question: "Can you deliver full turnkey packages?",
        answer:
          "Yes, including MEP, joinery, finishes, and kitchen coordination.",
      },
      {
        question: "What budget ranges do you handle?",
        answer: "We deliver projects from £20k to £500k+ across the UK.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "takeaway-fit-out",
    title: "Takeaway Fit Out Specialists UK | Fast Conversion",
    h1: "Takeaway Fit Out",
    intro:
      "Fast-track takeaway fit out contractor for delivery-led operations, efficient kitchens, and high-throughput service counters.",
    benefits: [
      "Optimized production flow",
      "Durable food-safe finishes",
      "Rapid launch schedules",
    ],
    process: ["Concept & compliance", "Strip-out & install", "Final commissioning"],
    projects: [
      "Fast takeaway conversion in Manchester",
      "Multi-unit brand fit out",
    ],
    faqs: [
      {
        question: "Can you refurbish while units stay partially open?",
        answer: "Yes, with phased programmes and strict site segregation.",
      },
      {
        question: "Do you coordinate extraction and ventilation works?",
        answer: "Yes, including specialist subcontractor management.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "commercial-kitchen-fit-out",
    title: "Commercial Kitchen Fit Out UK | Specialist Contractors",
    h1: "Commercial Kitchen Fit Out",
    intro:
      "Commercial kitchen fit out experts delivering compliant, high-performance back-of-house environments for hospitality operators.",
    benefits: [
      "UK-compliant specification",
      "Workflow-led planning",
      "Long-life installations",
    ],
    process: [
      "Kitchen planning",
      "MEP & specialist install",
      "Testing and sign-off",
    ],
    projects: ["Hotel production kitchen refit", "Dark kitchen launch package"],
    faqs: [
      {
        question: "Do you design around equipment schedules?",
        answer:
          "Yes, we coordinate builderswork and services with supplier drawings.",
      },
      {
        question: "Can you support grease management and extraction?",
        answer: "Yes, fully integrated into compliance-focused delivery.",
      },
    ],
    cta: "Book Site Visit",
  },
  {
    slug: "hospitality-refurbishment",
    title: "Hospitality Refurbishment UK | Hotels, Bars & Restaurants",
    h1: "Hospitality Refurbishment",
    intro:
      "Hospitality refurbishment contractor for restaurants, bars, cafés, and guest-facing commercial environments.",
    benefits: [
      "Brand-aligned interiors",
      "Operationally aware delivery",
      "Premium finish quality",
    ],
    process: ["Discovery", "Detailed planning", "Construction delivery"],
    projects: ["Boutique bar refurbishment", "Multi-space hospitality upgrade"],
    faqs: [
      {
        question: "Do you support landlord approvals?",
        answer:
          "Yes, we provide coordinated technical packs for submissions.",
      },
      {
        question: "Can you manage multiple sites?",
        answer: "Yes, our teams support phased multi-site rollouts.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "cafe-fit-out",
    title: "Café Fit Out UK | Coffee Shop Refurbishment Specialists",
    h1: "Café Fit Out",
    intro:
      "Café fit out and refurbishment solutions for independent coffee operators and franchise concepts across the UK.",
    benefits: [
      "Efficient customer circulation",
      "Brand-focused finishes",
      "Durable high-traffic detailing",
    ],
    process: ["Site due diligence", "Fit out build", "Launch readiness"],
    projects: [
      "Neighbourhood specialty café",
      "Franchise coffee kiosk package",
    ],
    faqs: [
      {
        question: "Do you handle mall and kiosk fit outs?",
        answer:
          "Yes, including landlord coordination and programme controls.",
      },
      {
        question: "Can you incorporate specialist coffee equipment?",
        answer: "Yes, we coordinate all required services and counters.",
      },
    ],
    cta: "Book Site Visit",
  },
  {
    slug: "shop-conversion",
    title: "Shop Conversion to Restaurant UK | Retail to Hospitality",
    h1: "Shop Conversion",
    intro:
      "Retail-to-hospitality conversion specialists transforming shops into compliant, high-value food and beverage destinations.",
    benefits: [
      "Planning-aware approach",
      "Maximized lettable value",
      "Future-proofed layouts",
    ],
    process: ["Feasibility", "Permissions & technicals", "Conversion works"],
    projects: ["Retail to takeaway conversion", "Corner unit to dining concept"],
    faqs: [
      {
        question: "Can you support change-of-use projects?",
        answer: "Yes, with consultant and approval coordination.",
      },
      {
        question: "Do you work with landlords and agents?",
        answer: "Yes, regularly across conversion-led projects.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "restaurant-renovation",
    title: "Restaurant Renovation UK | High-End Refurbishment Team",
    h1: "Restaurant Renovation",
    intro:
      "Restaurant renovation services focused on design impact, operational efficiency, and long-term commercial performance.",
    benefits: [
      "Boost venue value",
      "Improve customer perception",
      "Upgrade asset performance",
    ],
    process: ["Condition survey", "Renovation programme", "Handover and aftercare"],
    projects: [
      "Premium renovation for investor sale",
      "Dining venue relaunch",
    ],
    faqs: [
      {
        question: "What does a renovation typically include?",
        answer:
          "Front-of-house updates, BOH improvements, MEP upgrades, and compliance works.",
      },
      {
        question: "Can you phase renovation around bookings?",
        answer: "Yes, we structure programmes to minimize revenue impact.",
      },
    ],
    cta: "Book Site Visit",
  },
  {
    slug: "fast-food-fit-out",
    title: "Fast Food Fit Out UK | Speed-Led Hospitality Build",
    h1: "Fast Food Fit Out",
    intro:
      "Fast food fit out contractor for high-output kitchens, quick service counters, and franchise-ready delivery standards.",
    benefits: [
      "Optimized ticket times",
      "Durable materials",
      "Brand-standard repeatability",
    ],
    process: ["Prototype planning", "Rollout build", "Operational sign-off"],
    projects: ["QSR franchise pilot store", "Delivery-first quick service unit"],
    faqs: [
      {
        question: "Can you deliver repeatable franchise templates?",
        answer:
          "Yes, with documented standards for consistent rollout quality.",
      },
      {
        question: "Do you support accelerated programme timelines?",
        answer:
          "Yes, through parallel planning and disciplined site management.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "shopfitting-services",
    title: "Shopfitting Services UK | Commercial Hospitality Fit Out",
    h1: "Shopfitting Services",
    intro:
      "Commercial shopfitting services for hospitality-led interiors, frontages, counters, and bespoke joinery packages.",
    benefits: [
      "High-quality detailing",
      "Integrated delivery",
      "Reliable project controls",
    ],
    process: ["Design coordination", "Fabrication", "Installation"],
    projects: [
      "Flagship frontage replacement",
      "Complete FOH shopfitting package",
    ],
    faqs: [
      {
        question: "Do you provide bespoke joinery?",
        answer:
          "Yes, including bars, counters, banquette seating, and feature walls.",
      },
      {
        question: "Can shopfitting be combined with full refurbishment?",
        answer: "Yes, we deliver integrated turnkey programmes.",
      },
    ],
    cta: "Book Site Visit",
  },
];

export const locationPages: MarketingPage[] = [
  {
    slug: "london-restaurant-refurbishment",
    title: "London Restaurant Refurbishment | Specialist Fit Out Team",
    h1: "London Restaurant Refurbishment",
    intro:
      "Premium London restaurant refurbishment contractor for central, west, and greater London hospitality sites.",
    benefits: [
      "Fast London logistics planning",
      "Landlord and borough coordination",
      "Premium finish standards",
    ],
    process: ["Site survey", "Pre-construction planning", "Controlled delivery"],
    projects: ["Soho restaurant refresh", "Canary Wharf fit out"],
    faqs: [
      {
        question: "Do you work in occupied city-centre buildings?",
        answer: "Yes, with strict logistics and permit management.",
      },
      {
        question: "Can you support premium landlord specifications?",
        answer: "Yes, including detailed compliance submissions.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "birmingham-restaurant-fit-out",
    title: "Birmingham Restaurant Fit Out | Turnkey Contractor",
    h1: "Birmingham Restaurant Fit Out",
    intro:
      "End-to-end Birmingham restaurant fit out delivery for investors, operators, and franchise groups.",
    benefits: [
      "Single-contractor accountability",
      "Programme certainty",
      "Local supply chain support",
    ],
    process: ["Planning", "Construction", "Commissioning"],
    projects: ["City-centre family restaurant", "Retail park hospitality conversion"],
    faqs: [
      {
        question: "Do you cover greater Birmingham?",
        answer:
          "Yes, across Birmingham and surrounding commercial districts.",
      },
      {
        question: "What project values do you deliver?",
        answer: "From £20k light refits to £500k full fit outs.",
      },
    ],
    cta: "Book Site Visit",
  },
  {
    slug: "manchester-takeaway-fit-out",
    title: "Manchester Takeaway Fit Out | Fast-Track Delivery",
    h1: "Manchester Takeaway Fit Out",
    intro:
      "Manchester takeaway fit out specialists delivering high-speed conversion and launch-ready food operations.",
    benefits: [
      "Rapid programme setup",
      "High-throughput layouts",
      "Durable finishes",
    ],
    process: ["Audit", "Fit out works", "Operational handover"],
    projects: ["Delivery kitchen conversion", "High-street takeaway upgrade"],
    faqs: [
      {
        question: "Can you support evening working?",
        answer: "Yes, we phase site works around operational needs.",
      },
      {
        question: "Do you include extraction integration?",
        answer: "Yes, full specialist coordination is included.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "leeds-hospitality-refurbishment",
    title: "Leeds Hospitality Refurbishment | Restaurant & Bar Contractor",
    h1: "Leeds Hospitality Refurbishment",
    intro:
      "Hospitality refurbishment in Leeds for restaurants, cafés, and bar-led venues requiring premium standards.",
    benefits: [
      "Design-led upgrades",
      "Compliance-focused delivery",
      "Commercially robust outcomes",
    ],
    process: ["Discovery", "Technical coordination", "Delivery"],
    projects: ["Leeds city hospitality refit", "Suburban venue transformation"],
    faqs: [
      {
        question: "Do you work with independent operators?",
        answer: "Yes, from independents to multi-site groups.",
      },
      {
        question: "Can you upgrade front and back of house together?",
        answer: "Yes, as fully integrated programmes.",
      },
    ],
    cta: "Book Site Visit",
  },
  {
    slug: "liverpool-shopfitters",
    title: "Liverpool Shopfitters for Hospitality | Premium Fit Out",
    h1: "Liverpool Shopfitters",
    intro:
      "Liverpool shopfitters focused on hospitality interiors, restaurant counters, and commercial frontage packages.",
    benefits: [
      "Quality joinery standards",
      "Managed installation",
      "Turnkey integration",
    ],
    process: ["Coordination", "Fabrication", "Site install"],
    projects: ["Waterfront restaurant frontage", "Hospitality retail hybrid"],
    faqs: [
      {
        question: "Do you provide complete hospitality shopfitting?",
        answer: "Yes, from drawings through final install.",
      },
      {
        question: "Can this include refurbishment works?",
        answer:
          "Yes, we integrate shopfitting into complete fit-out programmes.",
      },
    ],
    cta: "Request Estimate",
  },
  {
    slug: "glasgow-restaurant-renovation",
    title: "Glasgow Restaurant Renovation | Commercial Refurbishment",
    h1: "Glasgow Restaurant Renovation",
    intro:
      "Glasgow restaurant renovation contractor delivering premium refurbishment and operational upgrades for growth-focused brands.",
    benefits: [
      "Revenue-focused upgrades",
      "Premium finish delivery",
      "Fast-track handover",
    ],
    process: ["Renovation planning", "Construction", "Launch support"],
    projects: ["Glasgow dining relaunch", "Investor-led renovation project"],
    faqs: [
      {
        question: "Can you renovate listed or older units?",
        answer:
          "Yes, with careful technical planning and approvals support.",
      },
      {
        question: "Do you work with hospitality investors?",
        answer:
          "Yes, we regularly deliver value-add renovation programmes.",
      },
    ],
    cta: "Book Site Visit",
  },
];

export const allMarketingPages = [...servicePages, ...locationPages];

export const blogCategories = [
  "Restaurant refurbishment",
  "Takeaway fit out",
  "Commercial kitchens",
  "Hospitality design",
  "Shop conversions",
  "Restaurant business growth",
];

export const blogPosts = [
  {
    slug: "cost-of-restaurant-refurbishment-uk",
    title: "Cost of Restaurant Refurbishment in the UK",
    excerpt:
      "A realistic budget framework for owners planning 2026 refurbishment projects.",
    category: "Restaurant refurbishment",
  },
  {
    slug: "how-long-does-restaurant-fit-out-take",
    title: "How Long Does a Restaurant Fit Out Take?",
    excerpt: "Programme expectations and delivery phases for new openings.",
    category: "Takeaway fit out",
  },
  {
    slug: "restaurant-refurbishment-checklist",
    title: "Restaurant Refurbishment Checklist",
    excerpt:
      "A practical checklist for operators, landlords, and project managers.",
    category: "Restaurant refurbishment",
  },
  {
    slug: "commercial-kitchen-regulations-uk",
    title: "Commercial Kitchen Regulations UK",
    excerpt:
      "Key compliance touchpoints for hospitality kitchen fit-out projects.",
    category: "Commercial kitchens",
  },
  {
    slug: "best-takeaway-interior-ideas",
    title: "Best Takeaway Interior Ideas",
    excerpt:
      "High-impact layout and interior ideas for fast-moving takeaway businesses.",
    category: "Hospitality design",
  },
  {
    slug: "restaurant-conversion-guide-uk",
    title: "Restaurant Conversion Guide UK",
    excerpt:
      "Step-by-step guide to retail-to-hospitality conversion delivery.",
    category: "Shop conversions",
  },
  {
    slug: "increase-restaurant-value-through-refurbishment",
    title: "How to Increase Restaurant Value Through Refurbishment",
    excerpt:
      "Asset-value strategies for hospitality investors and landlords.",
    category: "Restaurant business growth",
  },
] as const;

export const projectHighlights = [
  {
    name: "Before & After: Central London Brasserie",
    summary:
      "£320k full refurbishment and kitchen modernization completed in 11 weeks.",
    image: "/images/project-london.webp",
  },
  {
    name: "Before & After: Manchester Takeaway Conversion",
    summary: "Retail unit converted into a delivery-led takeaway in 6 weeks.",
    image: "/images/project-manchester.webp",
  },
  {
    name: "Before & After: Leeds Hospitality Upgrade",
    summary:
      "Front-of-house transformation with premium joinery and lighting.",
    image: "/images/project-leeds.webp",
  },
];
