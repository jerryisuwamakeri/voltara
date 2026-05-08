"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, MessageCircle, Plus, Trash2, Calculator, Zap,
  MessageSquare, Sliders, BarChart3, Bell, TrendingDown, BrainCircuit
} from "lucide-react";
import { COMMON_APPLIANCES, WHATSAPP } from "@/lib/data";

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

  const calculate = () => {
    setResult(Math.ceil((totalWatts / 1000 / 0.8) * 10) / 10);
  };

  const addAppliance = () => {
    if (customName && parseInt(customWatts) > 0) {
      setAppliances([...appliances, { name: customName, watts: parseInt(customWatts), qty: customQty }]);
      setCustomName(""); setCustomWatts(""); setCustomQty(1);
    }
  };

  const addCommon = (a: { name: string; watts: number }) => {
    const exists = appliances.find((ap) => ap.name === a.name);
    if (exists) {
      setAppliances(appliances.map((ap) => ap.name === a.name ? { ...ap, qty: ap.qty + 1 } : ap));
    } else {
      setAppliances([...appliances, { ...a, qty: 1 }]);
    }
  };

  const remove = (i: number) => { setAppliances(appliances.filter((_, idx) => idx !== i)); setResult(null); };
  const updateQty = (i: number, qty: number) => {
    setAppliances(appliances.map((a, idx) => idx === i ? { ...a, qty: Math.max(1, qty) } : a));
    setResult(null);
  };

  const waMsg = result
    ? `Hello Voltara! 👋\n\nKVA Calculator Result:\nTotal Load: *${totalWatts.toLocaleString()}W*\nRecommended Inverter: *${result} KVA*\n\nAppliances:\n${appliances.map(a => `• ${a.name} × ${a.qty} = ${a.watts * a.qty}W`).join("\n")}\n\nPlease recommend the right package for me. Thank you!`
    : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
        <div className="mb-5">
          <p className="text-sm font-semibold text-slate-900 mb-3">Quick Add Appliances</p>
          <div className="flex flex-wrap gap-2">
            {COMMON_APPLIANCES.map((a) => (
              <button key={a.name} onClick={() => addCommon(a)} className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-600 hover:border-amber-400 hover:text-amber-600 transition-colors">
                + {a.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2.5 mb-5">
          {appliances.map((a, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
              <div className="flex-1">
                <div className="font-medium text-slate-900 text-sm">{a.name}</div>
                <div className="text-slate-400 text-xs">{a.watts}W each</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(i, a.qty - 1)} className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:border-amber-400 hover:text-amber-500 transition-colors">&minus;</button>
                <span className="w-6 text-center font-semibold text-slate-900 text-sm">{a.qty}</span>
                <button onClick={() => updateQty(i, a.qty + 1)} className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:border-amber-400 hover:text-amber-500 transition-colors">+</button>
              </div>
              <div className="w-16 text-right font-semibold text-slate-900 text-sm">{(a.watts * a.qty).toLocaleString()}W</div>
              <button onClick={() => remove(i)} className="text-slate-300 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-dashed border-slate-300 mb-4">
          <p className="text-sm font-medium text-slate-900 mb-3">Add Custom Appliance</p>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <input type="text" placeholder="Appliance name" value={customName} onChange={(e) => setCustomName(e.target.value)} className="input-field col-span-2 text-sm py-2" />
            <input type="number" placeholder="Watts (e.g. 150)" value={customWatts} onChange={(e) => setCustomWatts(e.target.value)} className="input-field text-sm py-2" />
            <input type="number" placeholder="Qty" value={customQty} min={1} onChange={(e) => setCustomQty(parseInt(e.target.value) || 1)} className="input-field text-sm py-2" />
          </div>
          <button onClick={addAppliance} className="w-full py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90" style={{ backgroundColor: "#F59E0B" }}>
            <Plus className="w-4 h-4" /> Add Appliance
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <div>
            <div className="text-slate-500 text-sm">Total Load</div>
            <div className="text-2xl font-black text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>{totalWatts.toLocaleString()}W</div>
          </div>
          <button onClick={calculate} className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#F59E0B" }}>
            <Calculator className="w-4 h-4" /> Calculate My KVA
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {result !== null ? (
          <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: "#F59E0B" }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-75">Recommended Inverter</div>
            <div className="text-5xl font-black mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{result} <span className="text-2xl">KVA</span></div>
            <p className="text-sm mb-5 opacity-80">Based on {totalWatts.toLocaleString()}W total load (÷ 0.8 power factor)</p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-white transition-opacity hover:opacity-90"
              style={{ color: "#0c1f3f" }}
            >
              <MessageCircle className="w-4 h-4" /> Get This System
            </a>
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200 text-center">
            <Calculator className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">Add your appliances and tap &ldquo;Calculate My KVA&rdquo;</p>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4" style={{ color: "#F59E0B" }} />
            <h4 className="font-bold text-slate-900 text-sm">How It Works</h4>
          </div>
          <div className="text-xs text-slate-600 space-y-1.5">
            <p><span className="font-semibold text-slate-900">Formula:</span> (Total Watts ÷ 1000) ÷ 0.8</p>
            <p><span className="font-semibold text-slate-900">Power Factor:</span> 0.8 (industry standard)</p>
            <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200 mt-2 leading-relaxed">
              <p className="font-medium text-slate-700 mb-0.5">Example:</p>
              <p>150W + 60W + 75W = 285W</p>
              <p>(285 ÷ 1000) ÷ 0.8 = <strong>0.36 → 0.5 KVA</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AI_FEATURES: { Icon: React.ElementType; color: string; bg: string; title: string; desc: string }[] = [
  { Icon: MessageSquare,  color: "#0ea5e9", bg: "#e0f2fe", title: "Solar Q&A Assistant",     desc: "Ask any question about solar energy, installation, maintenance, or financing and get instant expert answers." },
  { Icon: Calculator,     color: "#F59E0B", bg: "#fffbeb", title: "Smart KVA Calculator",    desc: "Get the perfect inverter size based on your specific appliances and usage patterns. Free tool below!" },
  { Icon: Sliders,        color: "#10b981", bg: "#ecfdf5", title: "System Recommender",      desc: "Tell us about your home and our AI will suggest the ideal solar package for your needs and budget." },
  { Icon: BarChart3,      color: "#6366f1", bg: "#eef2ff", title: "Energy Analytics",        desc: "Monitor your solar production, consumption, and savings with real-time AI-powered insights." },
  { Icon: Bell,           color: "#f43f5e", bg: "#fff1f2", title: "Maintenance Alerts",      desc: "Proactive monitoring detects issues before they become problems, maximising your system uptime." },
  { Icon: TrendingDown,   color: "#16a34a", bg: "#f0fdf4", title: "Cost Savings Estimator",  desc: "Accurate projections of energy savings based on your location, usage, and system size." },
];

export default function VoltaraAIPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-navy pt-24 pb-14 sm:pt-28 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#0ea5e9" }}>Powered by AI</p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Meet <span style={{ color: "#38bdf8" }}>Voltara AI</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Your intelligent solar assistant. Instant answers, smart recommendations, and our free KVA Calculator — all in one place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#0ea5e9" }}>
              Get Early Access <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#kva" className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors">
              <Calculator className="w-4 h-4" /> KVA Calculator
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 space-y-16">

        {/* Features */}
        <div>
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#0ea5e9" }}>AI Features</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>What Voltara AI Can Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AI_FEATURES.map(({ Icon, color, bg, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: bg }}>
                  <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KVA Calculator */}
        <div id="kva">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>Free Tool</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>Inverter KVA Calculator</h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl">Add your home appliances to find out exactly what inverter size you need.</p>
          </div>
          <KVACalculator />
        </div>

        {/* Waitlist */}
        <div className="bg-navy rounded-2xl p-10 sm:p-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(14,165,233,0.15)", color: "#38bdf8", border: "1px solid rgba(14,165,233,0.3)" }}>
            🚀 Coming Soon
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Be First to Experience the Full Voltara AI
          </h3>
          <p className="text-sm max-w-lg mx-auto mb-7" style={{ color: "rgba(255,255,255,0.6)" }}>
            We&apos;re building Nigeria&apos;s most intelligent solar assistant. Join the waitlist for early access.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#0ea5e9" }}>
            Join the Waitlist <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
