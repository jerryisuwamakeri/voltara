"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, Building2, Home, MessageCircle, Zap, BatteryCharging, Sun, Wrench, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { PACKAGES } from "@/lib/data";

export default function PackagesPage() {
  const [category, setCategory] = useState<"residential" | "commercial">("residential");
  const shown = PACKAGES.filter((p) => p.category === category);

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-navy pt-24 pb-10 sm:pt-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            Solar Packages
          </span>
          <h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Choose Your{" "}
            <span className="text-gradient">Solar Package</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Expertly designed packages tailored to fit your energy needs and budget.
            Flexible financing available.
          </p>
        </div>
      </div>

      {/* Toggle */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit mx-auto">
          <button
            onClick={() => setCategory("residential")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={
              category === "residential"
                ? { backgroundColor: "#ffffff", color: "#0f172a", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }
                : { color: "#64748b" }
            }
          >
            <Home className="w-4 h-4" />
            Residential
          </button>
          <button
            onClick={() => setCategory("commercial")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={
              category === "commercial"
                ? { backgroundColor: "#ffffff", color: "#0f172a", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }
                : { color: "#64748b" }
            }
          >
            <Building2 className="w-4 h-4" />
            Commercial &amp; Industrial
          </button>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 pb-16">

        {category === "residential" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {shown.map((pkg) => (
              <div
                key={pkg.id}
                className="relative rounded-2xl overflow-hidden bg-white transition-shadow duration-300 hover:shadow-xl"
                style={{ border: pkg.popular ? "2px solid #F59E0B" : "1px solid #e2e8f0" }}
              >
                {pkg.popular && (
                  <div
                    className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-widest text-white"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    <Star className="w-3.5 h-3.5 fill-white" />
                    Most Popular Choice
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#F59E0B" }}>
                      {pkg.subtitle} System
                    </div>
                    <h2
                      className="text-2xl font-bold text-slate-900 mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {pkg.title}
                    </h2>
                    <p className="text-slate-600 text-sm">{pkg.capacity}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-base text-slate-600">&#8358;</span>
                      <span
                        className="text-5xl font-bold text-slate-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1.5">
                      Or &#8358;{Math.round((parseInt(pkg.price.replace(/,/g, "")) * 0.3) / 1000).toLocaleString()}k upfront with our financing plan
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Best for</p>
                        <p className="text-slate-900 font-medium text-xs">{pkg.bestFor}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Powers</p>
                        <p className="text-slate-900 font-medium text-xs">{pkg.powers}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    {pkg.popular ? (
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                        style={{ backgroundColor: "#F59E0B" }}
                      >
                        Get This Package
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold border-2 border-slate-200 text-slate-900 transition-all duration-200 hover:border-amber-400 hover:text-amber-500"
                      >
                        Get This Package
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href="/finance"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    >
                      View financing options &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {shown.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#F59E0B" }}>
                      {pkg.subtitle}
                    </div>
                    <h2
                      className="text-2xl font-bold text-slate-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {pkg.title}
                    </h2>
                    <p className="text-slate-600 text-sm">{pkg.capacity}</p>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="text-4xl font-bold text-slate-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Custom Pricing
                  </div>
                  <p className="text-slate-600 text-sm">Based on your specific energy requirements</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  Request Custom Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* What's Included */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
          <h3
            className="text-lg font-bold text-slate-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            What&apos;s included in every package
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { Icon: Zap,               label: "Premium Inverter" },
              { Icon: BatteryCharging,   label: "Lithium Batteries" },
              { Icon: Sun,               label: "Solar Panels" },
              { Icon: Wrench,            label: "Full Installation" },
              { Icon: MonitorSmartphone, label: "Smart Monitoring" },
              { Icon: ShieldCheck,       label: "Warranty Included" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 bg-white rounded-xl p-4 border border-slate-200">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#fff7ed", border: "1px solid #fed7aa" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#F59E0B" }} />
                </div>
                <span className="text-xs font-medium text-slate-700 text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Consult CTA */}
        <div className="bg-navy rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#F59E0B" }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">
                Not Sure Which Package Is Right For You?
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Our solar experts will help you choose the perfect package.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-7 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2 transition-all duration-200"
            style={{ backgroundColor: "#F59E0B" }}
          >
            Get Expert Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
