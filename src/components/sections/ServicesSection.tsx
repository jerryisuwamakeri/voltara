"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Sun, Zap, Home, Building2, Factory, Shield, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS = { sun: Sun, zap: Zap, home: Home, building2: Building2, factory: Factory, shield: Shield };

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>
            What We Do
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Complete Solar &amp; Electrical Solutions
            </h2>
            <Link
              href="/packages"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              style={{ color: "#F59E0B" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#d97706"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#F59E0B"; }}
            >
              View all packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Zap;
            return (
              <div
                key={service.title}
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 hover:shadow-md transition-all duration-200"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s, box-shadow 0.2s, border-color 0.2s`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#fff7ed", border: "1px solid #fed7aa" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="text-slate-900 font-semibold text-base mb-1.5">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
