import { Star, Wrench, ShieldCheck, Banknote, MapPin, Headphones } from "lucide-react";
import { WHY_VOLTARA } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const ICONS = {
  shield: ShieldCheck,
  wrench: Wrench,
  banknote: Banknote,
  star: Star,
  "map-pin": MapPin,
  headphones: Headphones,
};

export default function WhyVoltara() {
  return (
    <section className="relative bg-navy dot-grid">
      {/* top wave from the cream section above */}
      <svg className="wave absolute left-0 top-0 -translate-y-px rotate-180" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
        <path fill="#f6f7f9" d="M0,48 C240,90 480,90 720,60 C960,30 1200,30 1440,56 L1440,90 L0,90 Z" />
      </svg>

      <div className="shell container-px section pt-24">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow text-gold">Why VOLTARA</span>
          <h2 className="display display-lg mt-4 text-white">The difference is in the details</h2>
          <p className="mt-4 text-white/60">
            Engineering discipline, honest pricing, and a team that stays with you long after the panels go up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_VOLTARA.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Star;
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-white/25 hover:bg-white/[0.07]">
                  <span className="chip-dark inline-flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="display mt-5 text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* bottom wave into the white section below */}
      <svg className="wave absolute bottom-0 left-0 translate-y-px" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
        <path fill="#ffffff" d="M0,48 C240,90 480,90 720,60 C960,30 1200,30 1440,56 L1440,90 L0,90 Z" />
      </svg>
    </section>
  );
}
