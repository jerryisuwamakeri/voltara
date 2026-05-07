"use client";

import { useEffect, useRef, useState } from "react";
import { Star, TrendingUp } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
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

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>
            Customer Stories
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Real savings, real people
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-md transition-shadow duration-200"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t.title}</div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
                  <TrendingUp className="w-3 h-3" />
                  {t.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 py-6 border-t border-slate-100">
          {["25-Year Panel Warranty", "Certified Installation", "24/7 Support", "Flexible Financing"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-slate-600 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
