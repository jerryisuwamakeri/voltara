"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search, ShieldCheck, Check, Phone, MessageCircle,
  Zap, BatteryCharging, Star, Award, Sun, BatteryFull, Cpu, Cable,
} from "lucide-react";
import { PRODUCTS, WHATSAPP } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";

const CATEGORIES = [
  { id: "all", label: "All", fullLabel: "All Products" },
  { id: "panels", label: "Panels", fullLabel: "Solar Panels" },
  { id: "batteries", label: "Batteries", fullLabel: "Batteries" },
  { id: "inverters", label: "Inverters", fullLabel: "Inverters" },
  { id: "accessories", label: "Accessories", fullLabel: "Accessories" },
];

const CAT_ICON: Record<string, React.ElementType> = {
  panels: Sun,
  batteries: BatteryFull,
  inverters: Cpu,
  accessories: Cable,
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.type.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const resultLabel =
    activeCategory === "all"
      ? `${filtered.length} products`
      : `${filtered.length} ${CATEGORIES.find((c) => c.id === activeCategory)?.fullLabel.toLowerCase()}`;

  return (
    <div className="bg-cream">
      <PageHero
        kicker="Product catalog"
        title={<>Solar products &amp; <span className="text-gold">components</span></>}
        intro="High-performance panels, batteries, inverters, and accessories — sourced from trusted manufacturers with full warranties."
      >
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {[
            { value: "8", label: "Products" },
            { value: "25yr", label: "Panel warranty" },
            { value: "4", label: "Categories" },
            { value: "100%", label: "Certified" },
          ].map((s) => (
            <div key={s.label}>
              <div className="display text-xl text-gold">{s.value}</div>
              <div className="text-xs text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Filter + Search bar */}
      <div className="sticky top-[72px] z-30 border-b border-[#eef1f5] bg-white/95 backdrop-blur-md">
        <div className="shell container-px">
          <div className="flex items-center gap-3 pb-2 pt-3">
            <div className="relative flex-1 sm:w-60 sm:flex-none">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="field py-2 pl-9 text-sm"
              />
            </div>
            <span className="ml-auto shrink-0 text-xs text-[#94a3b8]">{resultLabel}</span>
          </div>

          <div className="flex flex-wrap gap-2 pb-3">
            {CATEGORIES.map(({ id, label }) => {
              const active = activeCategory === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active ? "bg-navy text-gold" : "bg-[#f1f4f8] text-[#5b6675] hover:bg-[#e7ecf2]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="shell container-px py-10">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <Search className="mx-auto mb-3 h-10 w-10 text-[#cbd5e1]" />
            <p className="display text-lg">No products found</p>
            <p className="mt-1 text-sm text-[#94a3b8]">Try a different search or category</p>
            <button onClick={() => { setSearch(""); setActiveCategory("all"); }} className="btn btn-primary mt-5">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => {
              const CatIcon = CAT_ICON[product.category] ?? Sun;
              return (
                <div key={product.id} className="card card-hover flex flex-col overflow-hidden">
                  <div className="relative flex h-36 items-center justify-center bg-gold-soft">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-[#1a1205] shadow-sm">
                      <CatIcon className="h-8 w-8" strokeWidth={1.5} />
                    </span>
                    {product.badge && (
                      <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-navy px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-gold">
                        {product.badge === "Best Seller" && <Star className="h-3 w-3 fill-current" />}
                        {product.badge === "Premium" && <Award className="h-3 w-3" />}
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3">
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-gold-dark">{product.type}</span>
                      <h3 className="display mt-0.5 text-base leading-snug">{product.name}</h3>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {"efficiency" in product && product.efficiency && (
                        <span className="inline-flex items-center gap-1 rounded-lg bg-gold-soft px-2 py-1 text-xs font-semibold text-gold-dark">
                          <Zap className="h-3 w-3" /> {product.efficiency}
                        </span>
                      )}
                      {"power" in product && product.power && (
                        <span className="inline-flex items-center gap-1 rounded-lg bg-gold-soft px-2 py-1 text-xs font-semibold text-gold-dark">
                          <BatteryCharging className="h-3 w-3" /> {product.power}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 rounded-lg bg-[#f0fdf4] px-2 py-1 text-xs font-semibold text-[#16a34a]">
                        <ShieldCheck className="h-3 w-3" /> {product.warranty}
                      </span>
                    </div>

                    <ul className="mb-5 flex-1 space-y-1.5">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#5b6675]">
                          <Check className="h-3.5 w-3.5 shrink-0 text-gold-dark" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between gap-2 border-t border-[#eef1f5] pt-4">
                      <div>
                        <div className="text-[0.65rem] font-medium uppercase tracking-wide text-[#94a3b8]">From</div>
                        <div className="display text-lg text-ink">₦{product.price}</div>
                      </div>
                      <a
                        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello Voltara!\n\nI'd like a quote for:\n*${product.name}* (${product.type})\nPrice: ₦${product.price}\n\nPlease contact me with availability and purchase details. Thank you!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark !px-4 !py-2.5 text-xs"
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> Order
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        {filtered.length > 0 && (
          <div className="dot-grid mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-navy p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="display text-xl text-white">Not sure which products you need?</h3>
              <p className="mt-1 text-sm text-white/60">
                Our engineers will design a complete system tailored to your energy load and budget.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                <ShieldCheck className="h-4 w-4" /> Get expert help
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Voltara! I need help selecting the right solar products for my home.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                <Phone className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
