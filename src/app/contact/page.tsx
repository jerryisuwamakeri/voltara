"use client";

import { useState } from "react";
import { MapPin, Mail, MessageCircle, Send, Clock, Check } from "lucide-react";
import { OFFICES } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";

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
    <div>
      <PageHero
        kicker="Contact us"
        title={<>Let&apos;s power your <span className="text-gold">future together</span></>}
        intro="Have a question or need a quote? Our solar experts are here to help — reach out and we'll respond within 24 hours."
      />

      <section className="section bg-white pt-20">
        <div className="shell container-px grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="display text-2xl">Send us a message</h2>
              <p className="mt-1 text-sm text-[#5b6675]">We typically respond within 24 hours on business days.</p>

              {submitted ? (
                <div className="py-14 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
                    <Check className="h-8 w-8 text-[#1a1205]" />
                  </div>
                  <h3 className="display text-xl">Message sent!</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-[#5b6675]">
                    Thank you for contacting VOLTARA. We&apos;ll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="btn btn-primary mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Full name *</label>
                      <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className="field" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Email address *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className="field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Phone number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="field" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Subject *</label>
                      <select required name="subject" value={form.subject} onChange={handleChange} className="field">
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
                    <label className="mb-1.5 block text-sm font-medium text-ink">Message *</label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your solar energy needs..."
                      className="field resize-none"
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn btn-primary w-full disabled:opacity-70">
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="card p-6">
              <h3 className="display text-lg">Quick contact</h3>
              <div className="mt-4 space-y-2">
                <a href="mailto:voltaraenergies@gmail.com" className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-gold-soft">
                  <span className="chip h-10 w-10 rounded-xl"><Mail className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-xs text-[#94a3b8]">Email us</span>
                    <span className="block text-sm font-medium text-ink">voltaraenergies@gmail.com</span>
                  </span>
                </a>
                <a href="https://wa.me/2349131797237" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#f0fdf4]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white"><MessageCircle className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-xs text-[#94a3b8]">WhatsApp</span>
                    <span className="block text-sm font-medium text-ink">09131797237</span>
                  </span>
                </a>
                <div className="flex items-center gap-3 rounded-xl p-3">
                  <span className="chip h-10 w-10 rounded-xl"><Clock className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-xs text-[#94a3b8]">Business hours</span>
                    <span className="block text-sm font-medium text-ink">Mon – Sat · 8am – 6pm</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="display text-lg">Our offices</h3>
              <div className="mt-4 space-y-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <span className="chip mt-0.5 h-9 w-9 shrink-0 rounded-lg"><MapPin className="h-4 w-4" /></span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{office.city}</div>
                      <div className="text-xs text-[#5b6675]">{office.address}</div>
                      <div className="mt-0.5 text-xs font-medium text-gold-dark">{office.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dot-grid rounded-2xl bg-navy p-6">
              <h3 className="display text-lg text-white">Why contact us?</h3>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Free consultation & site assessment",
                  "Custom solar design for your needs",
                  "Transparent pricing, no hidden fees",
                  "Expert team with proven experience",
                  "Flexible financing options available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
