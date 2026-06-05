"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Phone, MessageCircle, Zap, Package as PackageIcon, Home, Building2, Star } from "lucide-react";
import { PACKAGES, WHATSAPP, type Package } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";

function buildWhatsAppURL(pkg: Package): string {
  const msg = `Hello Voltara Energies!

I'm interested in the *${pkg.title}* — ₦${pkg.price}

Payment options:
• Deposit (30%): ₦${pkg.deposit}
• Monthly: ₦${pkg.monthly}/month × 10 months
• Weekly: ₦${pkg.weekly}/week × 40 weeks

Powers: ${pkg.appliances.slice(0, 5).join(", ")}${pkg.appliances.length > 5 ? " & more" : ""}

Please contact me to proceed. Thank you!`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export default function PackagesPage() {
  const [category, setCategory] = useState<"residential" | "commercial">("residential");
  const shown = PACKAGES.filter((p) => p.category === category);

  return (
    <div className="bg-cream">
      <PageHero
        kicker="Solar packages"
        title={<>Choose your <span className="text-gold">solar package</span></>}
        intro="Every package includes professional installation, a 5-year warranty, and flexible payment — start with just 30% down."
      >
        <p className="mt-4 text-xs text-gold/80">
          * 4% monthly interest applies to financed balance. Prices subject to change.
        </p>
      </PageHero>

      {/* Toggle */}
      <div className="shell container-px pt-10">
        <div className="flex w-fit items-center gap-1 rounded-full bg-[#e7ecf2] p-1">
          {(["residential", "commercial"] as const).map((cat) => {
            const Icon = cat === "residential" ? Home : Building2;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  category === cat ? "bg-navy text-gold" : "text-[#5b6675]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat === "residential" ? "Residential" : "Commercial"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="shell container-px pb-16 pt-8">
        {category === "residential" ? (
          <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {shown.map((pkg) => {
              const waURL = buildWhatsAppURL(pkg);
              return (
                <div
                  key={pkg.id}
                  className={`card flex flex-col overflow-hidden ${pkg.popular ? "ring-2 ring-gold" : "card-hover"}`}
                >
                  {pkg.popular && (
                    <div className="flex items-center justify-center gap-1.5 bg-gold py-2 text-xs font-bold uppercase tracking-widest text-[#1a1205]">
                      <Star className="h-3.5 w-3.5 fill-current" /> Most popular
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4">
                      <span className="pill">{pkg.badge}</span>
                      <h2 className="display mt-3 text-lg">{pkg.title}</h2>
                    </div>

                    <div className="mb-4 border-b border-[#eef1f5] pb-4">
                      <div className="text-[0.65rem] font-medium uppercase tracking-wide text-[#94a3b8]">Total system price</div>
                      <div className="display text-3xl text-ink">₦{pkg.price}</div>
                    </div>

                    <div className="mb-4 grid grid-cols-3 gap-2">
                      <div className="rounded-xl border border-[#eef1f5] bg-[#f7f8fa] p-2.5 text-center">
                        <div className="mb-1 text-[0.6rem] font-bold uppercase text-[#94a3b8]">Deposit</div>
                        <div className="text-xs font-bold leading-tight text-ink">₦{pkg.deposit}</div>
                        <div className="text-[0.6rem] text-[#94a3b8]">30% upfront</div>
                      </div>
                      <div className="rounded-xl border border-[#fde6c3] bg-gold-soft p-2.5 text-center">
                        <div className="mb-1 text-[0.6rem] font-bold uppercase text-gold-dark">Monthly</div>
                        <div className="text-xs font-bold leading-tight text-ink">₦{pkg.monthly}</div>
                        <div className="text-[0.6rem] text-[#94a3b8]">× 10 months</div>
                      </div>
                      <div className="rounded-xl border border-[#eef1f5] bg-[#f7f8fa] p-2.5 text-center">
                        <div className="mb-1 text-[0.6rem] font-bold uppercase text-[#94a3b8]">Weekly</div>
                        <div className="text-xs font-bold leading-tight text-ink">₦{pkg.weekly}</div>
                        <div className="text-[0.6rem] text-[#94a3b8]">× 40 weeks</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="mb-2 flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-gold-dark" />
                        <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8]">Powers</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.appliances.map((a) => (
                          <span key={a} className="rounded-lg border border-[#eef1f5] bg-[#f7f8fa] px-2 py-1 text-xs text-[#5b6675]">{a}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5 flex-1">
                      <div className="mb-2 flex items-center gap-1.5">
                        <PackageIcon className="h-3.5 w-3.5 text-gold-dark" />
                        <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8]">What&apos;s inside</span>
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.whatsInside.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-[#5b6675]">
                            <Check className="h-3.5 w-3.5 shrink-0 text-gold-dark" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href={waURL} target="_blank" rel="noopener noreferrer" className={`btn w-full ${pkg.popular ? "btn-primary" : "btn-dark"}`}>
                      <MessageCircle className="h-4 w-4" /> Order via WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mb-10 max-w-2xl">
            <div className="card p-8">
              <span className="eyebrow">Commercial &amp; industrial</span>
              <h2 className="display display-md mt-3">Custom sizing available</h2>
              <p className="mt-2 text-[#5b6675]">
                We design and install solar systems for offices, shops, factories, and farms — any size, any budget.
              </p>
              <ul className="my-7 space-y-3">
                {["Custom inverter sizing", "Scalable battery bank", "Professional installation", "Grid-tie / off-grid options"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#3f4a59]">
                    <Check className="h-4 w-4 shrink-0 text-gold-dark" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Voltara! I need a quote for a commercial/industrial solar system. Please contact me.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle className="h-4 w-4" /> Request custom quote
                </a>
                <Link href="/contact" className="btn btn-outline">
                  <Phone className="h-4 w-4" /> Contact us
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Help strip */}
        <div className="dot-grid mt-2 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] bg-navy p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="display text-xl text-white">Not sure which package fits your home?</h3>
            <p className="mt-1 text-sm text-white/60">
              Call <a href="tel:09131797237" className="font-semibold text-gold">09131797237</a> or use our KVA calculator to find your perfect size.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/voltara-ai#kva" className="btn btn-primary">
              KVA calculator <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Voltara! I need help choosing the right solar package for my home.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
