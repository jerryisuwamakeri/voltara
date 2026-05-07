"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PACKAGES } from "@/lib/data";

export default function PackagesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const residential = PACKAGES.filter((p) => p.category === "residential");

  return (
    <section className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>
            Residential Packages
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Pick the Right Package for Your Home
            </h2>
            <Link
              href="/packages"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "#F59E0B" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#d97706"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#F59E0B"; }}
            >
              See all packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {residential.map((pkg, i) => (
            <div
              key={pkg.id}
              className="relative bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{
                border: pkg.popular ? "2px solid #F59E0B" : "1px solid #e2e8f0",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
              }}
            >
              {pkg.popular && (
                <div className="py-2 text-center text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "#F59E0B" }}>
                  Most Popular
                </div>
              )}

              <div className="p-7">
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#F59E0B" }}>
                    {pkg.subtitle} · {pkg.capacity}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {pkg.title}
                  </h3>
                </div>

                <div className="mb-5 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm text-slate-400">₦</span>
                    <span className="text-4xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    From ₦{Math.round(parseInt(pkg.price.replace(/,/g, "")) * 0.3 / 1000).toLocaleString()}k with financing
                  </p>
                </div>

                <div className="mb-5 p-3 rounded-xl bg-slate-50 text-sm">
                  <span className="text-slate-400 text-xs">Best for: </span>
                  <span className="text-slate-700 font-medium">{pkg.bestFor}</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {pkg.features.slice(0, 5).map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/packages"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
                  style={
                    pkg.popular
                      ? { backgroundColor: "#F59E0B", color: "white" }
                      : { backgroundColor: "white", color: "#0f172a", border: "1.5px solid #e2e8f0" }
                  }
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = pkg.popular ? "#d97706" : "#f8fafc";
                    if (!pkg.popular) el.style.borderColor = "#F59E0B";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = pkg.popular ? "#F59E0B" : "white";
                    if (!pkg.popular) el.style.borderColor = "#e2e8f0";
                  }}
                >
                  Get This Package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial strip */}
        <div
          className="rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5 bg-navy"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#F59E0B" }}>Business &amp; Industrial</p>
            <h3 className="text-white font-bold text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>Need a larger system?</h3>
            <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>15kVA to 100kVA+ for offices, factories &amp; commercial facilities.</p>
          </div>
          <Link
            href="/packages"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-colors duration-200"
            style={{ backgroundColor: "#F59E0B" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d97706"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F59E0B"; }}
          >
            View Commercial Packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
