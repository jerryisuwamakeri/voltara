export const WHATSAPP = "2349131797237";
export const PHONE_MAIN = "09131797237";
export const PHONE_SUPPORT = "08108173958";
export const EMAIL = "voltaraenergies@gmail.com";

export const STATS = [
  { value: "50+", label: "Happy Customers", icon: "users" },
  { value: "250kVA", label: "Solar Installed", icon: "zap" },
  { value: "99.9%", label: "System Uptime", icon: "activity" },
  { value: "6", label: "Office Locations", icon: "leaf" },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Packages", path: "/packages" },
  { label: "Voltara Loan", path: "/finance" },
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
    desc: "Expert installation by certified engineers with 5-year warranty.",
    color: "sky",
  },
];

export interface Package {
  id: string;
  badge: string;
  title: string;
  priceNum: number;
  price: string;
  deposit: string;
  monthly: string;
  weekly: string;
  appliances: string[];
  whatsInside: string[];
  warranty: string;
  popular: boolean;
  category: "residential" | "commercial";
}

export const PACKAGES: Package[] = [
  {
    id: "starter-1.5",
    badge: "Starter Pack",
    title: "1.5kVA Simple Package",
    priceNum: 950000,
    price: "950,000",
    deposit: "285,000",
    monthly: "93,000",
    weekly: "23,250",
    appliances: ["LED TV", "Fan", "5 Lights", "Laptop", "Blender"],
    whatsInside: ["260Ah 12V Tubular Battery", "1.5kVA Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "home-2.5",
    badge: "Home Starter",
    title: "2.5kVA Simple Home Package",
    priceNum: 1650000,
    price: "1,650,000",
    deposit: "495,000",
    monthly: "161,700",
    weekly: "40,425",
    appliances: ["LED TV", "2 Fans", "8 Lights", "Laptop", "Mini Freezer", "Blender"],
    whatsInside: ["260Ah 12V Tubular Battery", "2.5kVA Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "family-3.5",
    badge: "Family Pack",
    title: "3.5kVA Home Simple Package",
    priceNum: 2150000,
    price: "2,150,000",
    deposit: "645,000",
    monthly: "210,700",
    weekly: "52,675",
    appliances: ["50\" TV", "2 Fans", "10 Lights", "Laptop", "Washer", "Freezer", "Blender"],
    whatsInside: ["2 × 260Ah Tall Tubular Batteries", "3.5kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: true,
    category: "residential",
  },
  {
    id: "power-4.2",
    badge: "Power Pack",
    title: "4.2kVA Simple Home Package",
    priceNum: 2865000,
    price: "2,865,000",
    deposit: "859,500",
    monthly: "280,770",
    weekly: "70,193",
    appliances: ["65\" TV", "2 Fans", "12 Lights", "Laptop", "Washing Machine", "Freezer", "Blender", "2HP Pump", "1HP AC"],
    whatsInside: ["4 × 260Ah Tall Tubular Batteries", "4.2kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "silver-5",
    badge: "Silver Package",
    title: "5kVA Silver Home Package",
    priceNum: 3450000,
    price: "3,450,000",
    deposit: "1,035,000",
    monthly: "338,100",
    weekly: "84,525",
    appliances: ["65\" TV", "4 Fans", "12 Lights", "Laptop", "Wash Machine", "2 Freezers", "Blender", "2HP Pump", "1HP Inv AC"],
    whatsInside: ["4 × 260Ah Tall Tubular Batteries", "5kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "gold-5",
    badge: "Gold Package",
    title: "5kVA Gold Home Package",
    priceNum: 4390000,
    price: "4,390,000",
    deposit: "1,317,000",
    monthly: "430,220",
    weekly: "107,555",
    appliances: ["65\" TV", "4 Fans", "12 Lights", "Laptop", "Washing Machine", "2 Freezers", "Blender", "Microwave", "Water Dispenser", "2HP Pump", "2 × 1HP Inverter AC"],
    whatsInside: ["1 × 10kWh Lithium Battery", "5kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "silver-6",
    badge: "6kVA Silver",
    title: "6kVA Silver Home Package",
    priceNum: 4800000,
    price: "4,800,000",
    deposit: "1,440,000",
    monthly: "470,400",
    weekly: "117,600",
    appliances: ["65\" TV", "5 Fans", "15 Lights", "Laptop", "Wash Machine", "2 Freezers", "Blender", "Microwave", "Dispenser", "2HP Pump", "2 × 2HP Inv AC"],
    whatsInside: ["1 × 10kWh Lithium Battery", "6kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "gold-6",
    badge: "6kVA Gold",
    title: "6kVA Gold Home Package",
    priceNum: 5900000,
    price: "5,900,000",
    deposit: "1,770,000",
    monthly: "578,200",
    weekly: "144,550",
    appliances: ["65\" TV", "5 Fans", "15 Lights", "Laptop", "Washing Machine", "2 Freezers", "Blender", "Microwave", "Dispenser", "2HP Pump", "2 × 2HP Inverter AC"],
    whatsInside: ["15kWh Lithium Battery", "6kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "silver-8",
    badge: "8kVA Silver",
    title: "8kVA Silver Home Package",
    priceNum: 6550000,
    price: "6,550,000",
    deposit: "1,965,000",
    monthly: "641,900",
    weekly: "160,475",
    appliances: ["65\" TV", "5 Fans", "15 Lights", "Laptop", "Washing Machine", "2 Freezers", "Blender", "Microwave", "Water Dispenser", "3HP Water Pump", "3 × 2HP Inverter AC"],
    whatsInside: ["15kWh Lithium Battery", "8kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "gold-8",
    badge: "8kVA Gold",
    title: "8kVA Gold Home Package",
    priceNum: 7300000,
    price: "7,300,000",
    deposit: "2,190,000",
    monthly: "715,400",
    weekly: "178,850",
    appliances: ["65\" TV", "5 Fans", "15 Lights", "Laptop", "Washing Machine", "2 Freezers", "Blender", "Microwave", "Dispenser", "3HP Pump", "3 × 2HP AC"],
    whatsInside: ["17.5kWh Lithium Battery", "8kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "ultimate-10",
    badge: "Ultimate Gold",
    title: "10kVA Gold Home Package",
    priceNum: 7987000,
    price: "7,987,000",
    deposit: "2,396,100",
    monthly: "782,700",
    weekly: "195,675",
    appliances: ["65\" TV", "5 Fans", "15 Lights", "Laptop", "Washing Machine", "2 Freezers", "Blender", "Microwave", "Water Dispenser", "3HP Water Pump", "3 × 2HP Inverter AC"],
    whatsInside: ["17.5kWh Lithium Battery", "10kVA Hybrid Inverter", "Full Installation Kit"],
    warranty: "5-Year",
    popular: false,
    category: "residential",
  },
  {
    id: "commercial",
    badge: "Commercial",
    title: "Commercial & Industrial",
    priceNum: 0,
    price: "Custom",
    deposit: "Custom",
    monthly: "Custom",
    weekly: "Custom",
    appliances: ["Offices", "Shops", "Factories", "Farms", "Industrial facilities"],
    whatsInside: ["Custom inverter sizing", "Scalable battery bank", "Professional installation", "Grid-tie / off-grid options"],
    warranty: "5-Year",
    popular: false,
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
    name: "260Ah 12V Tubular Battery",
    type: "Tubular Lead-Acid Battery",
    price: "320,000",
    power: "3.12kWh capacity",
    warranty: "5-year",
    features: ["Deep Cycle", "Long Service Life", "Low Maintenance"],
    badge: "Most Used",
  },
  {
    id: 4,
    category: "batteries",
    name: "10kWh Lithium Battery",
    type: "Lithium-Ion Battery Pack",
    price: "2,200,000",
    power: "10kWh capacity",
    warranty: "5-year",
    features: ["Lightweight", "High Efficiency", "Smart BMS"],
    badge: null,
  },
  {
    id: 5,
    category: "batteries",
    name: "17.5kWh Lithium Battery",
    type: "Lithium-Ion Battery Pack",
    price: "3,500,000",
    power: "17.5kWh capacity",
    warranty: "5-year",
    features: ["High Capacity", "Stackable", "Smart BMS"],
    badge: "Premium",
  },
  {
    id: 6,
    category: "inverters",
    name: "3.5kVA Hybrid Inverter",
    type: "Hybrid Solar Inverter",
    price: "580,000",
    efficiency: "97%",
    warranty: "2-year",
    features: ["Grid-Tie Ready", "MPPT Charger", "LCD Display"],
    badge: "Most Popular",
  },
  {
    id: 7,
    category: "inverters",
    name: "5kVA Hybrid Inverter",
    type: "Hybrid Solar Inverter",
    price: "850,000",
    efficiency: "97.5%",
    warranty: "2-year",
    features: ["Grid-Tie Ready", "WiFi Monitoring", "MPPT Charger"],
    badge: null,
  },
  {
    id: 8,
    category: "inverters",
    name: "8kVA Hybrid Inverter",
    type: "Hybrid Solar Inverter",
    price: "1,450,000",
    efficiency: "98%",
    warranty: "2-year",
    features: ["Three-Phase Option", "Remote Monitoring", "Grid Support"],
    badge: null,
  },
  {
    id: 9,
    category: "accessories",
    name: "VOLTARA Monitoring System",
    type: "Smart Energy Monitor",
    price: "85,000",
    warranty: "1-year",
    features: ["Real-time Data", "Mobile App", "Energy Analytics"],
    badge: null,
  },
  {
    id: 10,
    category: "accessories",
    name: "Aluminum Mounting Rails",
    type: "Solar Mounting System",
    price: "7,500/ft",
    warranty: "25-year",
    features: ["Corrosion Resistant", "Easy Installation", "Universal Fit"],
    badge: null,
  },
];

export const TESTIMONIALS = [
  {
    quote: "VOLTARA transformed our energy costs! We're now saving significantly every month and our business runs uninterrupted.",
    name: "Chidi Okafor",
    title: "CEO, Lagos Tech Hub",
    savings: "Big savings/year",
    rating: 5,
  },
  {
    quote: "Professional installation, excellent support. Our home has been powered by clean energy with zero issues.",
    name: "Aisha Mohammed",
    title: "Homeowner, Abuja",
    savings: "Peace of mind",
    rating: 5,
  },
  {
    quote: "The financing option made solar accessible. Best investment we've made for our home!",
    name: "Tunde Adeleke",
    title: "Homeowner, Ibadan",
    savings: "Beats NEPA daily",
    rating: 5,
  },
];

export const TIMELINE = [
  { year: "2018", event: "Voltara Energies founded" },
  { year: "2019", event: "First 100 residential installations" },
  { year: "2020", event: "Expanded to commercial solutions" },
  { year: "2021", event: "Reached 1,000 customers" },
  { year: "2022", event: "Opened Ibadan & Akure branches" },
  { year: "2023", event: "Launched flexible payment plans" },
  { year: "2024", event: "500+ satisfied customers & growing" },
];

export const VALUES = [
  {
    icon: "zap",
    title: "Energy Independence",
    desc: "Empowering homes and businesses to beat NEPA with reliable solar solutions.",
    color: "solar",
  },
  {
    icon: "cpu",
    title: "Innovation & Technology",
    desc: "Leveraging cutting-edge hybrid inverter technology and smart monitoring for maximum efficiency.",
    color: "sky",
  },
  {
    icon: "leaf",
    title: "Environmental Sustainability",
    desc: "Committed to reducing carbon footprint and promoting clean energy for a healthier Nigeria.",
    color: "solar",
  },
  {
    icon: "award",
    title: "Expert Craftsmanship",
    desc: "Certified engineers delivering professional installations with attention to every detail.",
    color: "sky",
  },
  {
    icon: "shield",
    title: "Trust & Reliability",
    desc: "Building lasting relationships through transparent pricing and dependable service.",
    color: "solar",
  },
];

export const WHY_VOLTARA = [
  {
    icon: "shield",
    title: "5-Year Warranty",
    desc: "Every system comes with a comprehensive 5-year warranty on all major components.",
  },
  {
    icon: "wrench",
    title: "Professional Installation",
    desc: "Expert installation included in every package. Our certified engineers ensure safety and optimal performance.",
  },
  {
    icon: "banknote",
    title: "Flexible Payment Plans",
    desc: "Start with just 30% down. Spread the balance over 10 months or 40 weeks with ease.",
  },
  {
    icon: "star",
    title: "Trusted by Hundreds",
    desc: "Join hundreds of satisfied Nigerian homes and businesses already powered by Voltara Energies.",
  },
  {
    icon: "map-pin",
    title: "Local Presence",
    desc: "We are where you are. Offices in Lagos (Ibeju Lekki), Ibadan (Apata), Akure (FUTA) & Abuja.",
  },
  {
    icon: "headphones",
    title: "Dedicated Support",
    desc: "Our team is always available to help — before, during, and after installation.",
  },
];

export const OFFICES = [
  { city: "Lagos",        address: "New road Ibeju Lekki, Lagos",                              label: "Head Office"   },
  { city: "Abuja",        address: "No 11 Prince Ebosele Crescent, Dutse, Abuja",              label: "Branch Office" },
  { city: "Oyo / Ibadan", address: "Suite 11 Nikem plaza opp. NNPC Depot Apata, Ibadan",       label: "Branch Office" },
  { city: "Ondo / Akure", address: "Zion City Estate, Beside FUTA Northgate, Akure",           label: "Branch Office" },
  { city: "Ogun / Abeokuta", address: "Pansheke, Abeokuta, Ogun State",                        label: "Branch Office" },
  { city: "Ekiti",        address: "Isaba, Ikole Ekiti, Ekiti State",                          label: "Branch Office" },
];

export const FAQS = [
  {
    q: "How much does a solar system cost?",
    a: "Our residential packages run from ₦950,000 for a 1.5kVA starter system up to ₦7.9M for a 10kVA whole-home setup. You can start with a 30% deposit and spread the balance over 10 months or 40 weeks.",
  },
  {
    q: "Do you handle installation?",
    a: "Yes. Certified installation by our in-house engineers is included in every package — wiring, mounting, configuration, and testing. We don't hand you a box and leave.",
  },
  {
    q: "What happens when there's no sun?",
    a: "Your battery bank stores energy for evenings and cloudy days, and our hybrid inverters can top up from the grid or a generator when needed. We size each system to your real daily usage.",
  },
  {
    q: "Is there a warranty?",
    a: "Every system carries a 5-year warranty on major components, with panels warrantied up to 25 years. Our support team stays available before, during, and long after installation.",
  },
  {
    q: "Can I start small and expand later?",
    a: "Absolutely. Many customers begin with essentials and scale up. Our lithium battery systems are stackable and our inverters are sized to leave room for growth.",
  },
];

export const COMMON_APPLIANCES = [
  { name: "LED Bulb", watts: 10 },
  { name: "Ceiling Fan", watts: 75 },
  { name: "LED TV (32\")", watts: 80 },
  { name: "Refrigerator", watts: 150 },
  { name: "Deep Freezer", watts: 200 },
  { name: "Air Conditioner (1HP)", watts: 750 },
  { name: "Air Conditioner (2HP)", watts: 1500 },
  { name: "Washing Machine", watts: 500 },
  { name: "Water Pump (1HP)", watts: 750 },
  { name: "Water Pump (2HP)", watts: 1500 },
  { name: "Microwave", watts: 1000 },
  { name: "Laptop", watts: 65 },
];
