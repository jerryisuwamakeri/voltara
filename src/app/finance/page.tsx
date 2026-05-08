"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Banknote, Calendar, Home, Clock, ShieldCheck } from "lucide-react";
import { PACKAGES, WHATSAPP } from "@/lib/data";

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Banknote,
    title: "Pay 30% Deposit",
    desc: "Start your journey with just 30% of the package cost upfront, paid before installation begins.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Spread the Balance",
    desc: "Pay the rest over 10 Months or 40 Weeks — whichever works best for your household budget.",
  },
  {
    step: "03",
    icon: Home,
    title: "You Own It!",
    desc: "Once payments are complete, the system is 100% yours. No recurring fees, no hidden charges.",
  },
];

const LOAN_BENEFITS = [
  "No collateral required",
  "Quick approval — same day",
  "Fixed payments, no surprises",
  "4% monthly interest on financed balance",
  "Payments begin after installation",
  "Trusted by hundreds of Nigerian homes",
];

export default function FinancePage() {
  const examples = PACKAGES.filter((p) => p.category === "residential").slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-navy pt-24 pb-14 sm:pt-28 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
            Voltara Loan
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Own Your Solar Today.<br />
            <span className="text-gradient">Pay Over Time.</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Simple, transparent payment plans designed for Nigerian homes. Start with just 30% down and spread the rest over 10 months or 40 weeks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Voltara! 👋\n\nI'd like to apply for the Voltara Loan to finance my solar system. Please guide me on the next steps.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#F59E0B" }}
            >
              <MessageCircle className="w-4 h-4" /> Apply via WhatsApp
            </a>
            <Link
              href="/packages"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors"
            >
              Browse Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 space-y-14">

        {/* How it works */}
        <div>
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>Simple Process</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              How Voltara Loan Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {HOW_IT_WORKS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-7 relative overflow-hidden">
                  <div className="absolute top-4 right-5 text-6xl font-black select-none" style={{ color: "#f8fafc", fontFamily: "Poppins, sans-serif" }}>
                    {s.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10" style={{ backgroundColor: "#F59E0B" }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment examples */}
        <div>
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>Real World Examples</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              What Your Payments Look Like
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {examples.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100" style={{ backgroundColor: "#fffbeb" }}>
                  <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#d97706" }}>{pkg.badge}</p>
                  <p className="font-bold text-slate-900 text-sm">{pkg.title}</p>
                </div>
                <div className="p-5">
                  <div className="mb-4">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">Total System Price</div>
                    <div className="text-2xl font-black text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>₦{pkg.price}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2.5 px-3 rounded-xl" style={{ backgroundColor: "#0c1f3f" }}>
                      <span className="text-xs font-bold text-white">30% Deposit</span>
                      <span className="text-sm font-black" style={{ color: "#F59E0B" }}>₦{pkg.deposit}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 px-3 rounded-xl border" style={{ borderColor: "#fde68a", backgroundColor: "#fffbeb" }}>
                      <div>
                        <div className="text-[10px] font-bold uppercase text-amber-600">Monthly</div>
                        <div className="text-[10px] text-slate-500">for 10 months</div>
                      </div>
                      <span className="text-sm font-black text-slate-900">₦{pkg.monthly}/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div>
                        <div className="text-[10px] font-bold uppercase text-slate-500">Weekly</div>
                        <div className="text-[10px] text-slate-400">for 40 weeks</div>
                      </div>
                      <span className="text-sm font-black text-slate-900">₦{pkg.weekly}/wk</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello Voltara! 👋\n\nI'd like to apply for the Voltara Loan for the *${pkg.title}* (₦${pkg.price}).\n\nDeposit: ₦${pkg.deposit}\nPreferred: Monthly plan — ₦${pkg.monthly}/month\n\nPlease guide me. Thank you!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-4 h-4" /> Apply for This
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            * 4% monthly interest applies to financed balance. Prices subject to change.{" "}
            <Link href="/packages" className="underline" style={{ color: "#F59E0B" }}>View all 11 packages →</Link>
          </p>
        </div>

        {/* Benefits + Apply */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F59E0B" }}>
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
                Why Voltara Loan?
              </h3>
            </div>
            <ul className="space-y-3">
              {LOAN_BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#F59E0B" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5" style={{ color: "#F59E0B" }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#F59E0B" }}>Same-Day Approval</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                Ready to Power Your Home?
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                Chat with us on WhatsApp. Tell us which package you want and we&apos;ll guide you from deposit to installation.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Voltara! 👋\n\nI'd like to apply for the Voltara Loan. Please help me get started.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" /> Apply Now on WhatsApp
              </a>
              <Link
                href="/packages"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Browse All Packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
