"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Plus, Trash2, Calculator, CheckCircle2,
  TrendingUp, Shield, Clock, CreditCard, Zap
} from "lucide-react";
import { COMMON_APPLIANCES } from "@/lib/data";

interface Appliance { name: string; watts: number; qty: number; }

export default function FinancePage() {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { name: "Refrigerator", watts: 150, qty: 1 },
    { name: "LED Bulb",     watts: 10,  qty: 6 },
    { name: "Ceiling Fan",  watts: 75,  qty: 2 },
  ]);
  const [customName,  setCustomName]  = useState("");
  const [customWatts, setCustomWatts] = useState("");
  const [customQty,   setCustomQty]   = useState(1);
  const [result,      setResult]      = useState<number | null>(null);

  const totalWatts = appliances.reduce((s, a) => s + a.watts * a.qty, 0);

  const calculate = () => {
    const kva = Math.ceil((totalWatts / 1000 / 0.8) * 10) / 10;
    setResult(kva);
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

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-navy pt-24 pb-10 sm:pt-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            Financing
          </span>
          <h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Finance Your Solar,{" "}
            <span className="text-gradient">Made Easy</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Own your solar system today with just 30% upfront and spread the
            balance over time. Working with Nigeria&apos;s leading financial institutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10 sm:py-14 sm:space-y-14">

        {/* How it works */}
        <div>
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>Simple Process</p>
            <h2
              className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              How financing works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", icon: CreditCard, title: "Submit Application",   desc: "Fill out our simple online application with your details and solar system requirements." },
              { step: "02", icon: Clock,       title: "Fast Approval",         desc: "Get approved within 24–48 hours. Our team reviews your application promptly." },
              { step: "03", icon: Zap,         title: "Installation Begins",   desc: "Make the down payment to secure your installation date. Certified technicians get to work." },
              { step: "04", icon: TrendingUp,  title: "Start Saving",          desc: "Your solar system is live! Start saving on energy bills immediately with fixed monthly payments." },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 relative transition-shadow duration-300 hover:shadow-md">
                  <div
                    className="text-5xl font-bold absolute top-4 right-5 select-none"
                    style={{ color: "#f1f5f9" }}
                  >
                    {s.step}
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sample breakdown + Why finance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Breakdown */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3
              className="text-2xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sample Financing Breakdown
            </h3>
            <p className="text-slate-600 text-sm mb-6">Based on a typical installation</p>

            <div className="space-y-4 mb-6">
              {[
                { label: "System Cost",               value: "₦37,500,000",   highlight: false },
                { label: "Down Payment (30%)",        value: "₦11,250,000",   highlight: true  },
                { label: "Financed Amount",           value: "₦26,250,000",   highlight: false },
                { label: "Repayment Period",          value: "Up to 12 months", highlight: false },
                { label: "Monthly Payment (8-yr term)", value: "₦37,500/mo",  highlight: true  },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3 px-4 rounded-xl"
                  style={row.highlight ? { backgroundColor: "#fffbeb", border: "1px solid #fde68a" } : { border: "1px solid #e2e8f0" }}
                >
                  <span className="text-slate-600 text-sm">{row.label}</span>
                  <span className="font-semibold text-sm" style={{ color: row.highlight ? "#F59E0B" : "#0f172a" }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: "#F59E0B" }}
            >
              Apply for Financing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Why finance */}
          <div className="bg-navy rounded-2xl p-8 text-white">
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Why Finance Your Solar System?
            </h3>
            <ul className="space-y-4">
              {[
                { icon: TrendingUp,  text: "Start saving on energy costs immediately" },
                { icon: CheckCircle2, text: "Fixed monthly payments — no surprises" },
                { icon: Shield,      text: "Your financial info is protected with bank-level security" },
                { icon: Zap,         text: "Makes solar energy affordable for everyone" },
                { icon: Clock,       text: "Zero hidden charges or fees" },
                { icon: CreditCard,  text: "Flexible payment terms up to 12 months" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#F59E0B" }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                Partnered with leading Nigerian financial institutions. Quick approval process.
              </p>
            </div>
          </div>
        </div>

        {/* KVA Calculator */}
        <div>
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F59E0B" }}>Smart Tool</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <h2
                className="text-3xl lg:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Inverter KVA Calculator
              </h2>
              <p className="text-slate-500 text-sm max-w-xs">Add your appliances to find the right inverter size.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Input panel */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">

              {/* Quick add */}
              <div className="mb-5">
                <p className="text-sm font-semibold text-slate-900 mb-3">Quick Add Common Appliances:</p>
                <div className="flex flex-wrap gap-2">
                  {COMMON_APPLIANCES.map((a) => (
                    <button
                      key={a.name}
                      onClick={() => addCommon(a)}
                      className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-600 transition-colors duration-200 hover:border-amber-400 hover:text-amber-500"
                    >
                      + {a.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Appliance list */}
              <div className="space-y-2.5 mb-5">
                {appliances.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <div className="flex-1">
                      <div className="font-medium text-slate-900 text-sm">{a.name}</div>
                      <div className="text-slate-400 text-xs">{a.watts}W each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(i, a.qty - 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-sm transition-colors hover:border-amber-400 hover:text-amber-500"
                      >
                        &minus;
                      </button>
                      <span className="w-6 text-center font-semibold text-slate-900 text-sm">{a.qty}</span>
                      <button
                        onClick={() => updateQty(i, a.qty + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-sm transition-colors hover:border-amber-400 hover:text-amber-500"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right w-16">
                      <div className="text-slate-900 font-semibold text-sm">{(a.watts * a.qty).toLocaleString()}W</div>
                    </div>
                    <button onClick={() => remove(i)} className="text-slate-300 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Custom appliance */}
              <div className="bg-slate-50 rounded-xl p-4 border border-dashed border-slate-300 mb-4">
                <p className="text-sm font-medium text-slate-900 mb-3">Add Custom Appliance</p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Appliance name"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="input-field col-span-2 text-sm py-2"
                  />
                  <input
                    type="number"
                    placeholder="Watts (e.g. 150)"
                    value={customWatts}
                    onChange={(e) => setCustomWatts(e.target.value)}
                    className="input-field text-sm py-2"
                  />
                  <input
                    type="number"
                    placeholder="Qty"
                    value={customQty}
                    min={1}
                    onChange={(e) => setCustomQty(parseInt(e.target.value) || 1)}
                    className="input-field text-sm py-2"
                  />
                </div>
                <button
                  onClick={addAppliance}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-1.5 transition-all duration-200"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  <Plus className="w-4 h-4" /> Add Appliance
                </button>
              </div>

              {/* Total & Calculate */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-200">
                <div>
                  <div className="text-slate-600 text-sm">Total Load</div>
                  <div
                    className="text-2xl font-bold text-slate-900"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {totalWatts.toLocaleString()}W
                  </div>
                </div>
                <button
                  onClick={calculate}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  <Calculator className="w-4 h-4" />
                  Calculate My KVA
                </button>
              </div>
            </div>

            {/* Result panel */}
            <div className="space-y-4">
              {result !== null ? (
                <div
                  className="rounded-2xl p-6 text-white"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  <div className="text-sm font-semibold uppercase tracking-widest mb-1 opacity-80">
                    Recommended
                  </div>
                  <div
                    className="text-5xl font-bold mb-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {result} KVA
                  </div>
                  <p className="text-white text-sm mb-5 opacity-80">
                    Based on your {totalWatts.toLocaleString()}W total load with 0.8 power factor
                  </p>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-white transition-all duration-200"
                    style={{ color: "#0c1f3f" }}
                  >
                    Get This System
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-2xl p-6 border border-dashed border-slate-300 text-center">
                  <Calculator className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-600 text-sm">
                    Add your appliances and click &ldquo;Calculate My KVA&rdquo; to get your recommendation
                  </p>
                </div>
              )}

              {/* Formula */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <h4 className="font-semibold text-slate-900 text-sm mb-3">
                  How KVA Calculation Works
                </h4>
                <div className="text-xs text-slate-600 space-y-2">
                  <p>
                    <span className="font-medium text-slate-900">Formula:</span>{" "}
                    Total KVA = (Total Watts &divide; 1000) &divide; 0.8
                  </p>
                  <p>
                    <span className="font-medium text-slate-900">Power Factor:</span>{" "}
                    0.8 accounts for real vs apparent power
                  </p>
                  <p className="text-xs bg-slate-50 rounded-lg p-2.5 border border-slate-200">
                    <span className="font-medium">Example:</span> 100W + 150W + 60W = 310W<br />
                    KVA = (310 &divide; 1000) &divide; 0.8 = 0.3875 &rarr; round up to 0.5 KVA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="bg-navy rounded-2xl p-10 text-center">
          <h3
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ready to Apply for Financing?
          </h3>
          <p className="mb-7 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Take the first step towards energy independence. Our financing specialists
            will help you find the perfect payment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
              style={{ backgroundColor: "#F59E0B" }}
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/2349131921437"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-colors"
              style={{ border: "2px solid rgba(255,255,255,0.3)", backgroundColor: "transparent" }}
            >
              Chat with an Expert
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
