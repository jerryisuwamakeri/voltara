"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, MessageCircle, Zap, Package as PackageIcon, Home, Building2, Star } from "lucide-react";
import { PACKAGES, WHATSAPP, type Package } from "@/lib/data";

function buildWhatsAppURL(pkg: Package): string {
  const msg = `Hello Voltara Energies! 👋

I'm interested in the *${pkg.title}* — ₦${pkg.price}

💳 *Payment Options:*
• Deposit (30%): ₦${pkg.deposit}
• Monthly Plan: ₦${pkg.monthly}/month × 10 months
• Weekly Plan: ₦${pkg.weekly}/week × 40 weeks

⚡ *Powers:* ${pkg.appliances.slice(0, 5).join(", ")}${pkg.appliances.length > 5 ? " & more" : ""}

Please contact me to proceed. Thank you!`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

const TIER_COLORS: Record<string, { bg: string; text: string }> = {
  "Starter Pack":   { bg: "#f1f5f9", text: "#64748b" },
  "Home Starter":   { bg: "#dbeafe", text: "#1d4ed8" },
  "Family Pack":    { bg: "#fef3c7", text: "#d97706" },
  "Power Pack":     { bg: "#ffedd5", text: "#ea580c" },
  "Silver Package": { bg: "#f1f5f9", text: "#475569" },
  "Gold Package":   { bg: "#fef3c7", text: "#d97706" },
  "6kVA Silver":    { bg: "#f1f5f9", text: "#475569" },
  "6kVA Gold":      { bg: "#fef3c7", text: "#d97706" },
  "8kVA Silver":    { bg: "#f1f5f9", text: "#475569" },
  "8kVA Gold":      { bg: "#fef3c7", text: "#d97706" },
  "Ultimate Gold":  { bg: "#fef3c7", text: "#d97706" },
  "Commercial":     { bg: "#e0f2fe", text: "#0284c7" },
};

export default function PackagesPage() {
  const [category, setCategory] = useState<"residential" | "commercial">("residential");
  const shown = PACKAGES.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-navy pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>Solar Packages</p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Choose Your <span className="text-gradient">Solar Package</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mb-2" style={{ color: "rgba(255,255,255,0.65)" }}>
            All packages include professional installation, 5-year warranty, and flexible payment. Start with just 30% down.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,158,11,0.7)" }}>
            * 4% monthly interest applies to financed balance. Prices subject to change.
          </p>
        </div>
      </div>

      {/* Toggle */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-1 bg-slate-200 p-1 rounded-xl w-fit">
          {(["residential", "commercial"] as const).map((cat) => {
            const Icon = cat === "residential" ? Home : Building2;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={category === cat
                  ? { backgroundColor: "#0c1f3f", color: "#F59E0B" }
                  : { color: "#64748b" }}
              >
                <Icon className="w-4 h-4" />
                {cat === "residential" ? "Residential" : "Commercial"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">

        {category === "residential" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
            {shown.map((pkg) => {
              const color = TIER_COLORS[pkg.badge] ?? { bg: "#fef3c7", text: "#d97706" };
              const waURL = buildWhatsAppURL(pkg);

              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-200"
                  style={{ border: pkg.popular ? "2px solid #F59E0B" : "1px solid #e2e8f0" }}
                >
                  {pkg.popular && (
                    <div className="py-2 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "#F59E0B" }}>
                      <Star className="w-3.5 h-3.5 fill-white" /> Most Popular
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    {/* Badge + title */}
                    <div className="mb-4">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ backgroundColor: color.bg, color: color.text }}>
                        {pkg.badge}
                      </span>
                      <h2 className="text-lg font-bold text-slate-900 mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {pkg.title}
                      </h2>
                    </div>

                    {/* Price */}
                    <div className="mb-4 pb-4 border-b border-slate-100">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide font-medium mb-0.5">Total System Price</div>
                      <div className="text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
                        ₦{pkg.price}
                      </div>
                    </div>

                    {/* Payment plans */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Deposit</div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">₦{pkg.deposit}</div>
                        <div className="text-[10px] text-slate-400">30% upfront</div>
                      </div>
                      <div className="text-center p-2.5 rounded-xl border" style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}>
                        <div className="text-[10px] font-bold uppercase mb-1" style={{ color: "#d97706" }}>Monthly</div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">₦{pkg.monthly}</div>
                        <div className="text-[10px] text-slate-400">× 10 months</div>
                      </div>
                      <div className="text-center p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Weekly</div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">₦{pkg.weekly}</div>
                        <div className="text-[10px] text-slate-400">× 40 weeks</div>
                      </div>
                    </div>

                    {/* Appliances */}
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Zap className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Powers</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.appliances.map((a) => (
                          <span key={a} className="text-xs px-2 py-1 rounded-lg bg-slate-50 text-slate-600 border border-slate-200">{a}</span>
                        ))}
                      </div>
                    </div>

                    {/* What's inside */}
                    <div className="mb-5 flex-1">
                      <div className="flex items-center gap-1.5 mb-2">
                        <PackageIcon className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">What&apos;s Inside</span>
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.whatsInside.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "#F59E0B" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Order via WhatsApp */}
                    <a
                      href={waURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#F59E0B" }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: "#F59E0B" }}>Commercial &amp; Industrial</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Custom Sizing Available</h2>
              <p className="text-slate-600 mb-6">We design and install solar systems for offices, shops, factories, and farms — any size, any budget.</p>
              <ul className="space-y-3 mb-7">
                {["Custom inverter sizing", "Scalable battery bank", "Professional installation", "Grid-tie / off-grid options"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#F59E0B" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Voltara! I need a quote for a commercial/industrial solar system. Please contact me.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  <MessageCircle className="w-4 h-4" /> Request Custom Quote
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border-2 border-slate-200 text-slate-900 hover:border-amber-400 transition-colors">
                  <Phone className="w-4 h-4" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Help strip */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-2">
          <div>
            <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
              Not sure which package fits your home?
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Call{" "}
              <a href="tel:09131797237" className="text-amber-400 font-semibold">09131797237</a>
              {" "}or use our KVA calculator to find your perfect size.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/voltara-ai#kva"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#F59E0B" }}
            >
              KVA Calculator <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Voltara! I need help choosing the right solar package for my home.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
