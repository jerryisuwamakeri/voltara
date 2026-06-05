import Link from "next/link";
import { ArrowRight, Zap, Cpu, Leaf, Award, Shield, Target, Eye } from "lucide-react";
import { TIMELINE, VALUES } from "@/lib/data";

const VALUE_ICONS = { zap: Zap, cpu: Cpu, leaf: Leaf, award: Award, shield: Shield };

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-navy pt-24 pb-12 sm:pt-28 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            About VOLTARA
          </span>
          <h1
            className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Where Innovation{" "}
            <span className="text-gradient">Meets Purpose</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            VOLTARA represents the perfect fusion of solar energy and electrical
            expertise. We&apos;re committed to transforming how businesses and homes
            consume energy — making clean power accessible, affordable, and reliable.
          </p>

          {/* Lonegroup attribution */}
          <a
            href="https://lonegroup.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-8 px-6 py-3 rounded-2xl transition-colors duration-200"
            style={{
              backgroundColor: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.3)",
            }}
          >
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              Voltara Energies is a product of
            </span>
            <span className="text-sm font-bold" style={{ color: "#F59E0B" }}>
              Lonegroup
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              (LONE INT&apos;L LIMITED · RC2001247)
            </span>
          </a>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>
              What drives us
            </p>
            <h2
              className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Mission, Vision &amp; Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

            {/* Mission */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 transition-shadow hover:shadow-lg">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#F59E0B" }}
              >
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl font-bold text-slate-900 mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To democratize access to clean energy by providing innovative,
                reliable, and affordable solar solutions that empower individuals,
                businesses, and communities to achieve energy independence while
                contributing to a sustainable future.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-navy rounded-2xl p-8 transition-shadow hover:shadow-lg">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#F59E0B" }}
              >
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our Vision
              </h3>
              <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                To be the leading provider of integrated solar and electrical
                solutions in Nigeria, recognized for excellence, innovation, and
                our unwavering commitment to powering communities sustainably for
                generations to come.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => {
              const Icon = VALUE_ICONS[v.icon as keyof typeof VALUE_ICONS] ?? Zap;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>
              Our Journey
            </p>
            <h2
              className="text-xl sm:text-2xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Powering Nigeria Since 2018
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />

            <div className="space-y-6">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 z-10 relative"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    <span
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div
                    className="flex-1 rounded-xl px-5 py-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <p className="text-white font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>By the numbers</p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Impact in Nigeria
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: "50+",    label: "Happy Customers",   sub: "Homes & businesses powered" },
              { value: "250kVA", label: "Solar Installed",   sub: "Clean energy deployed" },
              { value: "99.9%",  label: "System Uptime",     sub: "Reliable performance" },
              { value: "6",      label: "Office Locations",  sub: "Across Nigeria" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl border border-slate-200 p-6 text-center transition-shadow hover:shadow-md"
              >
                <div
                  className="text-4xl font-bold text-gradient mb-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="font-semibold text-slate-900 text-sm mb-0.5">{s.label}</div>
                <div className="text-slate-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Join the VOLTARA Family
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who&apos;ve made the switch to
            clean, sustainable energy across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/packages"
              className="px-8 py-4 rounded-2xl text-base font-semibold text-white flex items-center gap-2 transition-all duration-200"
              style={{ backgroundColor: "#F59E0B" }}
            >
              View Our Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl text-base font-semibold border-2 border-slate-200 text-slate-900 transition-all duration-200 hover:border-amber-400 hover:text-amber-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
