"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { PACKAGES, WHATSAPP, type Package } from "@/lib/data";

function buildWhatsAppURL(pkg: Package): string {
  const msg = `Hello Voltara Energies! 👋

I'm interested in the *${pkg.title}* — ₦${pkg.price}

💳 *Payment Options:*
• Deposit (30%): ₦${pkg.deposit}
• Monthly Plan: ₦${pkg.monthly}/month × 10 months

⚡ *Powers:* ${pkg.appliances.slice(0, 4).join(", ")} & more

Please contact me to proceed. Thank you!`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

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

  // Show first 3 residential packages as preview
  const preview = PACKAGES.filter((p) => p.category === "residential").slice(0, 3);

  return (
    <section className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10">
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
              See all 11 packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {preview.map((pkg, i) => (
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
                  ⭐ Most Popular
                </div>
              )}

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-50 text-amber-600">
                    {pkg.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {pkg.title}
                  </h3>
                </div>

                <div className="mb-4 pb-4 border-b border-slate-100">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">Total Price</div>
                  <div className="text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
                    ₦{pkg.price}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    From ₦{pkg.deposit} deposit (30% upfront)
                  </p>
                </div>

                {/* Payment options */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-center p-2 rounded-xl border" style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}>
                    <div className="text-[10px] font-bold uppercase mb-0.5" style={{ color: "#d97706" }}>Monthly</div>
                    <div className="text-xs font-bold text-slate-900">₦{pkg.monthly}</div>
                    <div className="text-[10px] text-slate-400">× 10 mo.</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-[10px] font-bold uppercase text-slate-400 mb-0.5">Weekly</div>
                    <div className="text-xs font-bold text-slate-900">₦{pkg.weekly}</div>
                    <div className="text-[10px] text-slate-400">× 40 wks</div>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-5">
                  {pkg.whatsInside.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "#F59E0B" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppURL(pkg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={pkg.popular ? { backgroundColor: "#F59E0B" } : { backgroundColor: "#0c1f3f" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial strip */}
        <div className="rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5 bg-navy">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#F59E0B" }}>Business &amp; Industrial</p>
            <h3 className="text-white font-bold text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>Need a larger or custom system?</h3>
            <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
              11 residential packages + custom commercial solutions available.
            </p>
          </div>
          <Link
            href="/packages"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#F59E0B" }}
          >
            View All Packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
