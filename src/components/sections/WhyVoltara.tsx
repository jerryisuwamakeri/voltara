"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Wrench, BadgeCheck, Banknote, Clock, Headphones } from "lucide-react";
import { WHY_VOLTARA } from "@/lib/data";

const ICONS = {
  star: Star, wrench: Wrench, "badge-check": BadgeCheck,
  banknote: Banknote, clock: Clock, headphones: Headphones,
};

export default function WhyVoltara() {
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
    <section className="bg-navy py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>
            Why VOLTARA
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The difference is in the details
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_VOLTARA.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Star;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
