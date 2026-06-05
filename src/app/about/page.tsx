import Link from "next/link";
import { ArrowRight, Zap, Cpu, Leaf, Award, Shield, Target, Eye } from "lucide-react";
import { TIMELINE, VALUES } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const VALUE_ICONS = { zap: Zap, cpu: Cpu, leaf: Leaf, award: Award, shield: Shield };

const IMPACT = [
  { value: "50+", label: "Happy Customers", sub: "Homes & businesses powered" },
  { value: "250kVA", label: "Solar Installed", sub: "Clean energy deployed" },
  { value: "99.9%", label: "System Uptime", sub: "Reliable performance" },
  { value: "6", label: "Office Locations", sub: "Across Nigeria" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        kicker="About VOLTARA"
        title={<>Where innovation meets <span className="text-gold">purpose</span></>}
        intro="VOLTARA is the fusion of solar engineering and electrical expertise — committed to transforming how Nigerian homes and businesses consume energy, making clean power accessible, affordable, and reliable."
      >
        <a
          href="https://lonegroup.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-gold/30 bg-gold/10 px-6 py-3 transition-colors hover:border-gold/50"
        >
          <span className="text-sm text-white/70">Voltara Energies is a product of</span>
          <span className="text-sm font-bold text-gold">Lonegroup</span>
          <span className="text-xs text-white/50">(LONE INT&apos;L LIMITED · RC2001247)</span>
        </a>
      </PageHero>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="shell container-px">
          <div className="mb-12">
            <span className="eyebrow">What drives us</span>
            <h2 className="display display-lg mt-4">Mission, vision &amp; values</h2>
          </div>

          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card p-9">
              <span className="chip-solid inline-flex h-12 w-12 items-center justify-center rounded-xl">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="display mt-5 text-xl">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-[#5b6675]">
                To democratize access to clean energy through innovative, reliable, and affordable solar
                solutions that empower individuals, businesses, and communities to achieve energy
                independence while contributing to a sustainable future.
              </p>
            </div>

            <div className="dot-grid rounded-[1.25rem] bg-navy p-9">
              <span className="chip-solid inline-flex h-12 w-12 items-center justify-center rounded-xl">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="display mt-5 text-xl text-white">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-white/70">
                To be the leading provider of integrated solar and electrical solutions in Nigeria —
                recognized for excellence, innovation, and an unwavering commitment to powering
                communities sustainably for generations to come.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon as keyof typeof VALUE_ICONS] ?? Zap;
              return (
                <Reveal key={v.title} delay={i * 60}>
                  <div className="card card-hover h-full p-7">
                    <span className="chip">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="display mt-5 text-base">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b6675]">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-navy dot-grid">
        <svg className="wave absolute left-0 top-0 -translate-y-px rotate-180" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
          <path fill="#ffffff" d="M0,48 C240,90 480,90 720,60 C960,30 1200,30 1440,56 L1440,90 L0,90 Z" />
        </svg>
        <div className="shell container-px section pt-24">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow text-gold">Our journey</span>
            <h2 className="display display-lg mt-4 text-white">Powering Nigeria since 2018</h2>
          </div>

          <div className="relative max-w-3xl">
            <div className="absolute bottom-0 left-8 top-0 w-px bg-white/12" />
            <div className="space-y-5">
              {TIMELINE.map((item) => (
                <Reveal key={item.year} className="flex items-center gap-6">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold">
                    <span className="display text-sm text-[#1a1205]">{item.year}</span>
                  </div>
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                    <p className="font-medium text-white">{item.event}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <svg className="wave absolute bottom-0 left-0 translate-y-px" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
          <path fill="#f6f7f9" d="M0,48 C240,90 480,90 720,60 C960,30 1200,30 1440,56 L1440,90 L0,90 Z" />
        </svg>
      </section>

      {/* Impact */}
      <section className="section bg-cream pt-24">
        <div className="shell container-px">
          <div className="mb-12">
            <span className="eyebrow">By the numbers</span>
            <h2 className="display display-lg mt-4">Our impact in Nigeria</h2>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {IMPACT.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="card card-hover h-full p-7 text-center">
                  <div className="display text-4xl text-gold-dark">{s.value}</div>
                  <div className="mt-1 text-sm font-semibold text-ink">{s.label}</div>
                  <div className="mt-0.5 text-xs text-[#94a3b8]">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="shell container-px text-center">
          <h2 className="display display-lg mx-auto max-w-2xl">Join the VOLTARA family</h2>
          <p className="lead mx-auto mt-4 max-w-xl">
            Thousands of satisfied customers have made the switch to clean, sustainable energy across Nigeria.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/packages" className="btn btn-primary">
              View our packages <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
