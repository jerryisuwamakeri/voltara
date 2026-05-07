import Link from "next/link";
import { ArrowRight, Zap, MessageCircle, Calculator, Sun, BarChart3, Shield } from "lucide-react";

export default function VoltaraAIPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-navy pt-24 pb-12 sm:pt-28 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
            style={{ backgroundColor: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.3)", color: "#38bdf8" }}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            Powered by Artificial Intelligence
          </div>

          <h1
            className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Meet{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8, #7dd3fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Voltara AI
            </span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            Your intelligent solar assistant. Get instant answers, personalized
            system recommendations, and energy insights — powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
              style={{ backgroundColor: "#F59E0B" }}
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/finance"
              className="px-8 py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.25)" }}
            >
              <Calculator className="w-5 h-5" />
              Try KVA Calculator
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ backgroundColor: "#e0f2fe", color: "#0284c7", border: "1px solid #bae6fd" }}
            >
              AI Features
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              What Voltara AI Can Do
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Smart tools to help you make the best solar energy decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: MessageCircle,
                title: "Solar Q&A Assistant",
                desc: "Ask any question about solar energy, installation, maintenance, or financing and get instant expert answers.",
                sky: true,
              },
              {
                Icon: Calculator,
                title: "Smart KVA Calculator",
                desc: "Get the perfect inverter size recommendation based on your specific appliances and usage patterns.",
                sky: false,
              },
              {
                Icon: Sun,
                title: "System Recommender",
                desc: "Tell us about your home or business and our AI will suggest the ideal solar package for your needs.",
                sky: true,
              },
              {
                Icon: BarChart3,
                title: "Energy Analytics",
                desc: "Monitor your solar production, consumption, and savings with real-time AI-powered insights.",
                sky: false,
              },
              {
                Icon: Shield,
                title: "Maintenance Alerts",
                desc: "Proactive AI monitoring detects issues before they become problems, maximizing your system uptime.",
                sky: true,
              },
              {
                Icon: Zap,
                title: "Cost Savings Estimator",
                desc: "Accurate projections of your energy cost savings based on your location, usage, and system size.",
                sky: false,
              },
            ].map(({ Icon, title, desc, sky }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: sky ? "#0ea5e9" : "#F59E0B" }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-navy rounded-3xl p-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-medium"
              style={{ backgroundColor: "rgba(14,165,233,0.2)", border: "1px solid rgba(14,165,233,0.3)", color: "#38bdf8" }}
            >
              Coming Soon
            </div>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Be First to Experience Voltara AI
            </h2>
            <p className="mb-7 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              We&apos;re building the most intelligent solar assistant in Nigeria.
              Join the waitlist to get early access when we launch.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl font-semibold text-white inline-flex items-center gap-2 transition-all duration-200"
              style={{ backgroundColor: "#F59E0B" }}
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
