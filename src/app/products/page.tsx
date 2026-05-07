"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search, Filter, ArrowRight, ShieldCheck, Zap, BatteryCharging,
  Cpu, Wrench, CheckCircle2, Phone, Star, Award
} from "lucide-react";
import { PRODUCTS } from "@/lib/data";

const CATEGORIES = [
  { id: "all",         label: "All",         fullLabel: "All Products",  Icon: Filter },
  { id: "panels",      label: "Panels",      fullLabel: "Solar Panels",  Icon: Zap },
  { id: "batteries",   label: "Batteries",   fullLabel: "Batteries",     Icon: BatteryCharging },
  { id: "inverters",   label: "Inverters",   fullLabel: "Inverters",     Icon: Cpu },
  { id: "accessories", label: "Accessories", fullLabel: "Accessories",   Icon: Wrench },
];

/* per-category visual identity */
const CAT_THEME: Record<string, { icon: React.ElementType; bg: string; iconColor: string; lightBg: string }> = {
  panels:      { icon: Zap,             bg: "#F59E0B", iconColor: "#fff",     lightBg: "#fff7ed" },
  batteries:   { icon: BatteryCharging, bg: "#0ea5e9", iconColor: "#fff",     lightBg: "#e0f2fe" },
  inverters:   { icon: Cpu,             bg: "#10b981", iconColor: "#fff",     lightBg: "#d1fae5" },
  accessories: { icon: Wrench,          bg: "#8b5cf6", iconColor: "#fff",     lightBg: "#ede9fe" },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat    = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.type.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const resultLabel = activeCategory === "all"
    ? `${filtered.length} products`
    : `${filtered.length} ${CATEGORIES.find(c => c.id === activeCategory)?.fullLabel.toLowerCase()}`;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <div className="bg-navy pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
            Product Catalog
          </p>
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Solar Products &amp;{" "}
            <span className="text-gradient">Components</span>
          </h1>
          <p className="text-base sm:text-lg max-w-xl mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            High-performance panels, batteries, inverters, and accessories —
            all sourced from trusted manufacturers with full warranties.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { value: "8", label: "Products" },
              { value: "25yr", label: "Panel Warranty" },
              { value: "4", label: "Categories" },
              { value: "100%", label: "Certified" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold" style={{ color: "#F59E0B", fontFamily: "Poppins, sans-serif" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter + Search bar ── */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">

          {/* Row 1 — search + count */}
          <div className="flex items-center gap-3 pt-3 pb-2">
            <div className="relative flex-1 sm:flex-none sm:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field text-sm py-2 w-full"
                style={{ paddingLeft: "2.25rem" }}
              />
            </div>
            <span className="ml-auto text-xs text-slate-400 shrink-0">{resultLabel}</span>
          </div>

          {/* Row 2 — category tabs, wrap on mobile, no scroll */}
          <div className="flex flex-wrap gap-2 pb-3">
            {CATEGORIES.map(({ id, label, Icon }) => {
              const active = activeCategory === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150"
                  style={
                    active
                      ? { backgroundColor: "#0c1f3f", color: "#F59E0B" }
                      : { backgroundColor: "#f1f5f9", color: "#64748b" }
                  }
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-900 font-semibold text-lg">No products found</p>
            <p className="text-slate-500 text-sm mt-1">Try a different search or category</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="mt-4 px-5 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: "#F59E0B" }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => {
              const theme = CAT_THEME[product.category] ?? CAT_THEME.panels;
              const CatIcon = theme.icon;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Card header — category colour */}
                  <div
                    className="h-36 flex items-center justify-center relative"
                    style={{ backgroundColor: theme.lightBg }}
                  >
                    {/* Big icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: theme.bg }}
                    >
                      <CatIcon className="w-8 h-8" style={{ color: theme.iconColor }} />
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <div
                        className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white"
                        style={{ backgroundColor: theme.bg }}
                      >
                        {product.badge === "Best Seller" && <Star className="w-3 h-3 fill-white" />}
                        {product.badge === "Premium" && <Award className="w-3 h-3" />}
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Type + name */}
                    <div className="mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.bg }}>
                        {product.type}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base mt-0.5 leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    {/* Spec chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {"efficiency" in product && product.efficiency && (
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg"
                          style={{ backgroundColor: theme.lightBg, color: theme.bg }}
                        >
                          <Zap className="w-3 h-3" /> {product.efficiency}
                        </span>
                      )}
                      {"power" in product && product.power && (
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg"
                          style={{ backgroundColor: theme.lightBg, color: theme.bg }}
                        >
                          <BatteryCharging className="w-3 h-3" /> {product.power}
                        </span>
                      )}
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg"
                        style={{ backgroundColor: "#f0fdf4", color: "#16a34a" }}
                      >
                        <ShieldCheck className="w-3 h-3" /> {product.warranty}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: theme.bg }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Price + CTA */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">From</div>
                          <div className="text-lg font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
                            ₦{product.price}
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-90"
                          style={{ backgroundColor: theme.bg, whiteSpace: "nowrap" }}
                        >
                          Get Quote <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Bottom CTA ── */}
        {filtered.length > 0 && (
          <div className="mt-12 bg-navy rounded-2xl overflow-hidden">
            <div className="h-1" style={{ backgroundColor: "#F59E0B" }} />
            <div className="p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Not sure which products you need?
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Our engineers will design a complete system tailored to your energy load and budget.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  <ShieldCheck className="w-4 h-4" /> Get Expert Help
                </Link>
                <a
                  href="https://wa.me/2349131921437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors"
                  style={{ border: "1.5px solid rgba(255,255,255,0.25)" }}
                >
                  <Phone className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
