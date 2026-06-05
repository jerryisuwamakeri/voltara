"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, MessageCircle, Plus, Trash2, Calculator, Zap,
  MessageSquare, Sliders, BarChart3, Bell, TrendingDown,
} from "lucide-react";
import { COMMON_APPLIANCES, WHATSAPP } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

interface Appliance { name: string; watts: number; qty: number; }

function KVACalculator() {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { name: "Refrigerator", watts: 150, qty: 1 },
    { name: "LED Bulb", watts: 10, qty: 6 },
    { name: "Ceiling Fan", watts: 75, qty: 2 },
  ]);
  const [customName, setCustomName] = useState("");
  const [customWatts, setCustomWatts] = useState("");
  const [customQty, setCustomQty] = useState(1);
  const [result, setResult] = useState<number | null>(null);

  const totalWatts = appliances.reduce((s, a) => s + a.watts * a.qty, 0);

  const calculate = () => setResult(Math.ceil((totalWatts / 1000 / 0.8) * 10) / 10);

  const addAppliance = () => {
    if (customName && parseInt(customWatts) > 0) {
      setAppliances([...appliances, { name: customName, watts: parseInt(customWatts), qty: customQty }]);
      setCustomName(""); setCustomWatts(""); setCustomQty(1);
    }
  };

  const addCommon = (a: { name: string; watts: number }) => {
    const exists = appliances.find((ap) => ap.name === a.name);
    if (exists) {
      setAppliances(appliances.map((ap) => (ap.name === a.name ? { ...ap, qty: ap.qty + 1 } : ap)));
    } else {
      setAppliances([...appliances, { ...a, qty: 1 }]);
    }
  };

  const remove = (i: number) => { setAppliances(appliances.filter((_, idx) => idx !== i)); setResult(null); };
  const updateQty = (i: number, qty: number) => {
    setAppliances(appliances.map((a, idx) => (idx === i ? { ...a, qty: Math.max(1, qty) } : a)));
    setResult(null);
  };

  const waMsg = result
    ? `Hello Voltara!\n\nKVA Calculator Result:\nTotal Load: *${totalWatts.toLocaleString()}W*\nRecommended Inverter: *${result} KVA*\n\nAppliances:\n${appliances.map((a) => `• ${a.name} × ${a.qty} = ${a.watts * a.qty}W`).join("\n")}\n\nPlease recommend the right package for me. Thank you!`
    : "";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="card p-6 lg:col-span-2">
        <div className="mb-5">
          <p className="mb-3 text-sm font-semibold text-ink">Quick add appliances</p>
          <div className="flex flex-wrap gap-2">
            {COMMON_APPLIANCES.map((a) => (
              <button
                key={a.name}
                onClick={() => addCommon(a)}
                className="rounded-lg border border-[#eef1f5] bg-[#f7f8fa] px-3 py-1.5 text-xs font-medium text-[#5b6675] transition-colors hover:border-gold hover:text-gold-dark"
              >
                + {a.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 space-y-2.5">
          {appliances.map((a, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-[#eef1f5] bg-[#f7f8fa] p-3">
              <div className="flex-1">
                <div className="text-sm font-medium text-ink">{a.name}</div>
                <div className="text-xs text-[#94a3b8]">{a.watts}W each</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(i, a.qty - 1)} className="h-7 w-7 rounded-lg border border-[#eef1f5] bg-white text-sm font-bold text-[#5b6675] transition-colors hover:border-gold hover:text-gold-dark">−</button>
                <span className="w-6 text-center text-sm font-semibold text-ink">{a.qty}</span>
                <button onClick={() => updateQty(i, a.qty + 1)} className="h-7 w-7 rounded-lg border border-[#eef1f5] bg-white text-sm font-bold text-[#5b6675] transition-colors hover:border-gold hover:text-gold-dark">+</button>
              </div>
              <div className="w-16 text-right text-sm font-semibold text-ink">{(a.watts * a.qty).toLocaleString()}W</div>
              <button onClick={() => remove(i)} className="text-[#cbd5e1] transition-colors hover:text-red-400"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>

        <div className="mb-4 rounded-xl border border-dashed border-[#cbd5e1] bg-[#f7f8fa] p-4">
          <p className="mb-3 text-sm font-medium text-ink">Add custom appliance</p>
          <div className="mb-2 grid grid-cols-2 gap-2">
            <input type="text" placeholder="Appliance name" value={customName} onChange={(e) => setCustomName(e.target.value)} className="field col-span-2 py-2 text-sm" />
            <input type="number" placeholder="Watts (e.g. 150)" value={customWatts} onChange={(e) => setCustomWatts(e.target.value)} className="field py-2 text-sm" />
            <input type="number" placeholder="Qty" value={customQty} min={1} onChange={(e) => setCustomQty(parseInt(e.target.value) || 1)} className="field py-2 text-sm" />
          </div>
          <button onClick={addAppliance} className="btn btn-primary w-full">
            <Plus className="h-4 w-4" /> Add appliance
          </button>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#eef1f5] pt-4 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm text-[#5b6675]">Total load</div>
            <div className="display text-2xl text-ink">{totalWatts.toLocaleString()}W</div>
          </div>
          <button onClick={calculate} className="btn btn-primary">
            <Calculator className="h-4 w-4" /> Calculate my KVA
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {result !== null ? (
          <div className="rounded-2xl bg-gold p-6 text-[#1a1205]">
            <div className="mb-1 text-xs font-bold uppercase tracking-widest opacity-70">Recommended inverter</div>
            <div className="display mb-1 text-5xl">{result} <span className="text-2xl">KVA</span></div>
            <p className="mb-5 text-sm opacity-80">Based on {totalWatts.toLocaleString()}W total load (÷ 0.8 power factor)</p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-full"
            >
              <MessageCircle className="h-4 w-4" /> Get this system
            </a>
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-[#e2e8f0] bg-[#f7f8fa] p-6 text-center">
            <Calculator className="mx-auto mb-3 h-10 w-10 text-[#cbd5e1]" />
            <p className="text-sm text-[#94a3b8]">Add your appliances and tap &ldquo;Calculate my KVA&rdquo;</p>
          </div>
        )}

        <div className="card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-gold-dark" />
            <h4 className="text-sm font-bold text-ink">How it works</h4>
          </div>
          <div className="space-y-1.5 text-xs text-[#5b6675]">
            <p><span className="font-semibold text-ink">Formula:</span> (Total Watts ÷ 1000) ÷ 0.8</p>
            <p><span className="font-semibold text-ink">Power factor:</span> 0.8 (industry standard)</p>
            <div className="mt-2 rounded-lg border border-[#eef1f5] bg-[#f7f8fa] p-2.5 leading-relaxed">
              <p className="mb-0.5 font-medium text-[#3f4a59]">Example:</p>
              <p>150W + 60W + 75W = 285W</p>
              <p>(285 ÷ 1000) ÷ 0.8 = <strong>0.36 → 0.5 KVA</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AI_FEATURES = [
  { Icon: MessageSquare, title: "Solar Q&A assistant", desc: "Ask any question about solar energy, installation, maintenance, or financing and get instant expert answers." },
  { Icon: Calculator, title: "Smart KVA calculator", desc: "Get the perfect inverter size based on your specific appliances and usage patterns. Free tool below." },
  { Icon: Sliders, title: "System recommender", desc: "Tell us about your home and our AI suggests the ideal solar package for your needs and budget." },
  { Icon: BarChart3, title: "Energy analytics", desc: "Monitor your solar production, consumption, and savings with real-time AI-powered insights." },
  { Icon: Bell, title: "Maintenance alerts", desc: "Proactive monitoring detects issues before they become problems, maximising your uptime." },
  { Icon: TrendingDown, title: "Cost savings estimator", desc: "Accurate projections of energy savings based on your location, usage, and system size." },
];

export default function VoltaraAIPage() {
  return (
    <div>
      <PageHero
        kicker="Powered by AI"
        title={<>Meet <span className="text-gold">Voltara AI</span></>}
        intro="Your intelligent solar assistant — instant answers, smart recommendations, and our free KVA calculator, all in one place."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">Get early access <ArrowRight className="h-4 w-4" /></Link>
          <a href="#kva" className="btn btn-light"><Calculator className="h-4 w-4" /> KVA calculator</a>
        </div>
      </PageHero>

      <div className="section bg-cream pt-20">
        <div className="shell container-px space-y-16">

          {/* Features */}
          <div>
            <div className="mb-10">
              <span className="eyebrow">AI features</span>
              <h2 className="display display-lg mt-4">What Voltara AI can do</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {AI_FEATURES.map(({ Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 60}>
                  <div className="card card-hover h-full p-7">
                    <span className="chip"><Icon className="h-5 w-5" strokeWidth={1.75} /></span>
                    <h3 className="display mt-5 text-base">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b6675]">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* KVA Calculator */}
          <div id="kva" className="scroll-mt-24">
            <div className="mb-10">
              <span className="eyebrow">Free tool</span>
              <h2 className="display display-lg mt-4">Inverter KVA calculator</h2>
              <p className="lead mt-3 max-w-xl">Add your home appliances to find out exactly what inverter size you need.</p>
            </div>
            <KVACalculator />
          </div>

          {/* Waitlist */}
          <div className="dot-grid rounded-[2rem] bg-navy p-10 text-center sm:p-14">
            <span className="pill border-gold/30 bg-gold/10 text-gold">Coming soon</span>
            <h3 className="display mx-auto mt-5 max-w-xl text-2xl text-white sm:text-3xl">
              Be first to experience the full Voltara AI
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/60">
              We&apos;re building Nigeria&apos;s most intelligent solar assistant. Join the waitlist for early access.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Join the waitlist <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
