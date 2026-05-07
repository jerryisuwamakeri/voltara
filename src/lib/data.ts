export const STATS = [
  { value: "2,500+", label: "Happy Customers", icon: "users" },
  { value: "50MW+", label: "Solar Installed", icon: "zap" },
  { value: "99.9%", label: "System Uptime", icon: "activity" },
  { value: "75,000", label: "Tons CO₂ Saved", icon: "leaf" },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Packages", path: "/packages" },
  { label: "Finance", path: "/finance" },
  { label: "Voltara AI", path: "/voltara-ai" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    icon: "sun",
    title: "Solar Panel Installation",
    desc: "Premium solar panels for maximum efficiency and long-term reliability.",
    color: "solar",
  },
  {
    icon: "zap",
    title: "Electrical Services",
    desc: "Complete electrical solutions and ongoing maintenance support.",
    color: "sky",
  },
  {
    icon: "home",
    title: "Residential Solutions",
    desc: "Custom solar systems designed for your home and family needs.",
    color: "solar",
  },
  {
    icon: "building2",
    title: "Commercial Systems",
    desc: "Scalable solar solutions for offices, shops, and businesses.",
    color: "sky",
  },
  {
    icon: "factory",
    title: "Industrial Power",
    desc: "High-capacity systems for factories, farms, and large facilities.",
    color: "solar",
  },
  {
    icon: "shield",
    title: "Maintenance & Support",
    desc: "Expert installation by certified technicians with quality guarantee.",
    color: "sky",
  },
];

export const PACKAGES = [
  {
    id: "starter",
    title: "Starter Home",
    subtitle: "Small",
    capacity: "3.5kVA System",
    price: "1,600,000",
    popular: false,
    bestFor: "Small families & apartments",
    powers: "Lights, fans, TV, fridge",
    features: [
      "3.5kVA Pure Sine Inverter",
      "2× 200Ah Lithium Batteries",
      "4× 400W Solar Panels",
      "Full wiring & installation",
      "5-year warranty",
      "Remote monitoring app",
    ],
    category: "residential",
  },
  {
    id: "family",
    title: "Family Power",
    subtitle: "Medium",
    capacity: "5kVA System",
    price: "2,700,000",
    popular: true,
    bestFor: "Growing families",
    powers: "AC, freezer, and more",
    features: [
      "5kVA Hybrid Inverter",
      "3× 200Ah Lithium Batteries",
      "6× 400W Solar Panels",
      "Full wiring & installation",
      "10-year warranty",
      "Smart monitoring system",
      "Priority support",
    ],
    category: "residential",
  },
  {
    id: "total",
    title: "Total Independence",
    subtitle: "Large",
    capacity: "10kVA System",
    price: "4,500,000",
    popular: false,
    bestFor: "Large households",
    powers: "Full home power",
    features: [
      "10kVA Commercial Inverter",
      "5× 200Ah Lithium Batteries",
      "12× 400W Solar Panels",
      "Custom design & energy audit",
      "25-year panel warranty",
      "Priority 24/7 support",
      "Smart monitoring system",
      "Complete installation",
    ],
    category: "residential",
  },
  {
    id: "business",
    title: "Business Essential",
    subtitle: "Office/SME",
    capacity: "15kVA – 50kVA",
    price: "Custom",
    popular: false,
    bestFor: "Offices, shops, restaurants",
    powers: "Full commercial power",
    features: [
      "Power for offices, shops, restaurants",
      "Significant cost reduction",
      "Scalable as business grows",
      "Professional installation & support",
      "Grid-tied and off-grid options",
      "Custom design with energy audit",
    ],
    category: "commercial",
  },
  {
    id: "industrial",
    title: "Industrial Powerhouse",
    subtitle: "Factory/Plant",
    capacity: "100kVA+",
    price: "Custom",
    popular: false,
    bestFor: "Manufacturing plants, farms",
    powers: "Heavy machinery & operations",
    features: [
      "Solutions for manufacturing plants, farms",
      "Power heavy machinery",
      "Backup for critical equipment",
      "High-capacity systems",
      "Three-phase output available",
      "Remote monitoring & grid support",
    ],
    category: "commercial",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    category: "panels",
    name: "VOLTARA Premium 400W",
    type: "Monocrystalline Solar Panel",
    price: "450,000",
    efficiency: "22.1%",
    warranty: "25-year",
    features: ["High Efficiency", "Weather Resistant", "Easy Installation"],
    badge: "Best Seller",
  },
  {
    id: 2,
    category: "panels",
    name: "VOLTARA Efficiency 350W",
    type: "Polycrystalline Solar Panel",
    price: "375,000",
    efficiency: "19.8%",
    warranty: "25-year",
    features: ["Cost Effective", "Reliable Performance", "Durable Frame"],
    badge: null,
  },
  {
    id: 3,
    category: "batteries",
    name: "VOLTARA PowerBank 13.5kWh",
    type: "Lithium-Ion Battery",
    price: "13,500,000",
    power: "5kW continuous",
    warranty: "10-year",
    features: ["Smart Monitoring", "Seamless Integration", "Modular Design"],
    badge: "Premium",
  },
  {
    id: 4,
    category: "batteries",
    name: "VOLTARA HomeGrid 10kWh",
    type: "Modular Battery System",
    price: "9,750,000",
    power: "3.3kW continuous",
    warranty: "10-year",
    features: ["Modular Expansion", "Indoor/Outdoor", "Quiet Operation"],
    badge: null,
  },
  {
    id: 5,
    category: "inverters",
    name: "VOLTARA Smart Inverter 10kW",
    type: "String Inverter System",
    price: "3,300,000",
    efficiency: "97.5%",
    warranty: "12-year",
    features: ["WiFi Monitoring", "Rapid Shutdown", "Grid Support"],
    badge: "Most Popular",
  },
  {
    id: 6,
    category: "inverters",
    name: "VOLTARA Commercial 50kW",
    type: "Three-Phase Inverter",
    price: "13,500,000",
    efficiency: "98.2%",
    warranty: "10-year",
    features: ["Three-Phase Output", "Grid Support", "Remote Monitoring"],
    badge: null,
  },
  {
    id: 7,
    category: "accessories",
    name: "VOLTARA Monitoring System",
    type: "Smart Energy Monitor",
    price: "600,000",
    warranty: "5-year",
    features: ["Real-time Data", "Mobile App", "Energy Analytics"],
    badge: null,
  },
  {
    id: 8,
    category: "accessories",
    name: "VOLTARA Mounting Rails",
    type: "Aluminum Mounting System",
    price: "7,500/ft",
    warranty: "25-year",
    features: ["Corrosion Resistant", "Easy Installation", "Universal Fit"],
    badge: null,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "VOLTARA transformed our energy costs! We're now saving over ₦300k monthly and our business runs uninterrupted.",
    name: "Chidi Okafor",
    title: "CEO, Lagos Tech Hub",
    savings: "₦3.6M/year",
    rating: 5,
  },
  {
    quote:
      "Professional installation, excellent support. Our home has been powered by clean energy for 2 years with zero issues.",
    name: "Aisha Mohammed",
    title: "Homeowner, Abuja",
    savings: "₦180k/year",
    rating: 5,
  },
  {
    quote:
      "The financing option made solar accessible. Best investment we've made for our manufacturing plant!",
    name: "Tunde Adeleke",
    title: "Operations Manager",
    savings: "₦12M/year",
    rating: 5,
  },
];

export const TIMELINE = [
  { year: "2018", event: "VOLTARA founded" },
  { year: "2019", event: "First 100 residential installations" },
  { year: "2020", event: "Expanded to commercial solutions" },
  { year: "2021", event: "Reached 1,000 customers" },
  { year: "2022", event: "Launched 24/7 monitoring" },
  { year: "2023", event: "Installed 50MW+ capacity" },
  { year: "2024", event: "2,500+ customers and growing" },
];

export const VALUES = [
  {
    icon: "zap",
    title: "Energy Independence",
    desc: "Empowering homes and businesses to take control of their energy future with reliable solar solutions.",
    color: "solar",
  },
  {
    icon: "cpu",
    title: "Innovation & Technology",
    desc: "Leveraging cutting-edge solar technology and smart monitoring systems for maximum efficiency.",
    color: "sky",
  },
  {
    icon: "leaf",
    title: "Environmental Sustainability",
    desc: "Committed to reducing carbon footprint and promoting clean energy for a healthier planet.",
    color: "solar",
  },
  {
    icon: "award",
    title: "Expert Craftsmanship",
    desc: "Certified technicians delivering professional installations with attention to every detail.",
    color: "sky",
  },
  {
    icon: "shield",
    title: "Trust & Reliability",
    desc: "Building lasting relationships through transparent communication and dependable service.",
    color: "solar",
  },
];

export const WHY_VOLTARA = [
  {
    icon: "star",
    title: "Premium Quality",
    desc: "Only the best components from trusted manufacturers.",
  },
  {
    icon: "wrench",
    title: "Expert Installation",
    desc: "Certified technicians with years of proven experience.",
  },
  {
    icon: "badge-check",
    title: "Certified Products",
    desc: "All products meet international quality standards.",
  },
  {
    icon: "banknote",
    title: "Flexible Financing",
    desc: "30% upfront, balance spread over flexible terms.",
  },
  {
    icon: "clock",
    title: "Fast Approval",
    desc: "Get approved within 24-48 hours of submission.",
  },
  {
    icon: "headphones",
    title: "24/7 Support",
    desc: "Our team is always here when you need us.",
  },
];

export const OFFICES = [
  {
    city: "Lagos (HQ)",
    address: "123 Solar Street, Lekki",
    label: "Head Office",
  },
  {
    city: "Abuja",
    address: "456 Energy Avenue, Wuse II",
    label: "Branch Office",
  },
  {
    city: "Ibadan",
    address: "789 Power Close, Bodija",
    label: "Branch Office",
  },
];

export const COMMON_APPLIANCES = [
  { name: "LED Bulb", watts: 10 },
  { name: "Ceiling Fan", watts: 75 },
  { name: "Television (32\")", watts: 100 },
  { name: "Refrigerator", watts: 150 },
  { name: "Air Conditioner (1.5HP)", watts: 1200 },
  { name: "Washing Machine", watts: 500 },
  { name: "Desktop Computer", watts: 250 },
  { name: "Microwave", watts: 1000 },
  { name: "Water Pump", watts: 750 },
  { name: "Deep Freezer", watts: 200 },
];
