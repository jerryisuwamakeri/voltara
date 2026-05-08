"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle, Send, Clock, CheckCircle2 } from "lucide-react";
import { OFFICES } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
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
            Contact Us
          </span>
          <h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Let&apos;s Power Your{" "}
            <span className="text-gradient">Future Together</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Have a question or need a quote? Our team of solar experts is here to
            help. Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2
                className="text-2xl font-bold text-slate-900 mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Send Us a Message
              </h2>
              <p className="text-slate-600 text-sm mb-7">
                We typically respond within 24 hours during business days.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-xs mx-auto">
                    Thank you for contacting VOLTARA. We&apos;ll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-1.5">Full Name *</label>
                      <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-1.5">Email Address *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className="input-field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-1.5">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-1.5">Subject *</label>
                      <select required name="subject" value={form.subject} onChange={handleChange} className="input-field">
                        <option value="">Select a subject</option>
                        <option>Request a Quote</option>
                        <option>Financing Inquiry</option>
                        <option>Technical Support</option>
                        <option>Product Information</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1.5">Message *</label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your solar energy needs..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            {/* Quick contact */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3
                className="font-bold text-slate-900 text-lg mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:voltaraenergies@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-amber-50"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#F59E0B" }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Email Us</div>
                    <div className="text-slate-900 text-sm font-medium">voltaraenergies@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/2349131797237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-green-50"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">WhatsApp</div>
                    <div className="text-slate-900 text-sm font-medium">09131797237</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Business Hours</div>
                    <div className="text-slate-900 text-sm font-medium">Mon – Sat: 8am – 6pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3
                className="font-bold text-slate-900 text-lg mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our Offices
              </h3>
              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "#F59E0B" }}
                    >
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{office.city}</div>
                      <div className="text-slate-600 text-xs">{office.address}</div>
                      <div className="text-xs font-medium mt-0.5" style={{ color: "#F59E0B" }}>{office.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why contact */}
            <div className="bg-navy rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">Why Contact Us?</h3>
              <ul className="space-y-2.5">
                {[
                  "Free consultation & site assessment",
                  "Custom solar design for your needs",
                  "Transparent pricing, no hidden fees",
                  "Expert team with proven experience",
                  "Flexible financing options available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
