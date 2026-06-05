"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Check, Banknote, Calendar, Home, Clock, ShieldCheck } from "lucide-react";
import { PACKAGES, WHATSAPP } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const HOW_IT_WORKS = [
  { step: "01", icon: Banknote, title: "Pay 30% deposit", desc: "Start with just 30% of the package cost upfront, paid before installation begins." },
  { step: "02", icon: Calendar, title: "Spread the balance", desc: "Pay the rest over 10 months or 40 weeks — whichever suits your household budget." },
  { step: "03", icon: Home, title: "You own it", desc: "Once payments are complete the system is 100% yours. No recurring fees, no hidden charges." },
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
    <div>
      <PageHero
        kicker="Voltara Loan"
        title={<>Own your solar today. <span className="text-gold">Pay over time.</span></>}
        intro="Simple, transparent payment plans built for Nigerian homes. Start with just 30% down and spread the rest over 10 months or 40 weeks."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Voltara!\n\nI'd like to apply for the Voltara Loan to finance my solar system. Please guide me on the next steps.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle className="h-4 w-4" /> Apply via WhatsApp
          </a>
          <Link href="/packages" className="btn btn-light">
            Browse packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <div className="section bg-cream pt-20">
        <div className="shell container-px space-y-16">

          {/* How it works */}
          <div>
            <div className="mb-10">
              <span className="eyebrow">Simple process</span>
              <h2 className="display display-lg mt-4">How Voltara Loan works</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {HOW_IT_WORKS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.step} delay={i * 80}>
                    <div className="card relative h-full overflow-hidden p-7">
                      <div className="pointer-events-none absolute right-4 top-2 select-none text-7xl font-bold text-[#f1f4f8]" style={{ fontFamily: "var(--font-display)" }}>
                        {s.step}
                      </div>
                      <span className="chip-solid relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="display mt-5 text-lg">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5b6675]">{s.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Payment examples */}
          <div>
            <div className="mb-8">
              <span className="eyebrow">Real-world examples</span>
              <h2 className="display display-lg mt-4">What your payments look like</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {examples.map((pkg, i) => (
                <Reveal key={pkg.id} delay={i * 80}>
                  <div className="card card-hover h-full overflow-hidden">
                    <div className="border-b border-[#eef1f5] bg-gold-soft px-5 py-3">
                      <p className="text-[0.7rem] font-bold uppercase tracking-widest text-gold-dark">{pkg.badge}</p>
                      <p className="text-sm font-bold text-ink">{pkg.title}</p>
                    </div>
                    <div className="p-5">
                      <div className="mb-4">
                        <div className="text-[0.65rem] uppercase tracking-wide text-[#94a3b8]">Total system price</div>
                        <div className="display text-2xl text-ink">₦{pkg.price}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-xl bg-navy px-3 py-2.5">
                          <span className="text-xs font-bold text-white">30% deposit</span>
                          <span className="text-sm font-bold text-gold">₦{pkg.deposit}</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl border border-[#fde6c3] bg-gold-soft px-3 py-2.5">
                          <div>
                            <div className="text-[0.65rem] font-bold uppercase text-gold-dark">Monthly</div>
                            <div className="text-[0.65rem] text-[#94a3b8]">for 10 months</div>
                          </div>
                          <span className="text-sm font-bold text-ink">₦{pkg.monthly}/mo</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl border border-[#eef1f5] bg-[#f7f8fa] px-3 py-2.5">
                          <div>
                            <div className="text-[0.65rem] font-bold uppercase text-[#94a3b8]">Weekly</div>
                            <div className="text-[0.65rem] text-[#94a3b8]">for 40 weeks</div>
                          </div>
                          <span className="text-sm font-bold text-ink">₦{pkg.weekly}/wk</span>
                        </div>
                      </div>
                      <a
                        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello Voltara!\n\nI'd like to apply for the Voltara Loan for the *${pkg.title}* (₦${pkg.price}).\n\nDeposit: ₦${pkg.deposit}\nPreferred: Monthly plan — ₦${pkg.monthly}/month\n\nPlease guide me. Thank you!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark mt-4 w-full"
                      >
                        <MessageCircle className="h-4 w-4" /> Apply for this
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-[#94a3b8]">
              * 4% monthly interest applies to financed balance. Prices subject to change.{" "}
              <Link href="/packages" className="text-gold-dark underline">View all 11 packages →</Link>
            </p>
          </div>

          {/* Benefits + Apply */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="chip-solid inline-flex h-10 w-10 items-center justify-center rounded-xl">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="display text-lg">Why Voltara Loan?</h3>
              </div>
              <ul className="space-y-3">
                {LOAN_BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-[#3f4a59]">
                    <Check className="h-4 w-4 shrink-0 text-gold-dark" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="dot-grid flex flex-col justify-between rounded-[1.25rem] bg-navy p-8">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="text-sm font-bold uppercase tracking-widest text-gold">Same-day approval</span>
                </div>
                <h3 className="display text-2xl text-white">Ready to power your home?</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Chat with us on WhatsApp. Tell us which package you want and we&apos;ll guide you from deposit to installation.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Voltara!\n\nI'd like to apply for the Voltara Loan. Please help me get started.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  <MessageCircle className="h-4 w-4" /> Apply now on WhatsApp
                </a>
                <Link href="/packages" className="btn btn-light w-full">
                  Browse all packages <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
