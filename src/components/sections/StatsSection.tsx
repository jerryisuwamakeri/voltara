"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Zap, Activity, Leaf } from "lucide-react";
import { STATS } from "@/lib/data";

const ICONS = { users: Users, zap: Zap, activity: Activity, leaf: Leaf };

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="bg-navy">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
      >
        {STATS.map((stat, i) => {
          const Icon = ICONS[stat.icon as keyof typeof ICONS] ?? Zap;
          return (
            <div
              key={stat.label}
              className="bg-navy flex flex-col items-center justify-center py-10 px-6 text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#F59E0B" }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
